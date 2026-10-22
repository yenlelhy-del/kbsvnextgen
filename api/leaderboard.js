/**
 * Public, participant-safe API gateway for NextGen's Apps Script leaderboard.
 * Apps Script reads the updated Google Sheet; this endpoint prevents browser
 * CORS issues and deliberately exposes only public competition metrics.
 */
const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbw7kdldaPBMFMWaB-kWiWYt96WRjrSQeiW8_Ui9kOhoG9fowIKFtNMsHoEdOA5O9DE63w/exec';

const numeric = value => {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : 0;
};

function publicMember(member) {
  const history = Array.isArray(member.history) ? member.history : [];
  return {
    name: String(member.name || '').trim().slice(0, 160),
    rank: numeric(member.rank),
    points: numeric(member.points),
    todayPoints: numeric(member.todayPoints),
    live: numeric(member.live),
    liveViews: numeric(member.liveViews),
    clips: numeric(member.clips),
    clipViews: numeric(member.clipViews),
    followers: numeric(member.followers),
    // Optional metrics: available after the Apps Script source is upgraded.
    liveLikes: member.liveLikes == null ? null : numeric(member.liveLikes),
    clipLikes: member.clipLikes == null ? null : numeric(member.clipLikes),
    viralClips: member.viralClips == null ? null : numeric(member.viralClips),
    liveMinutes: member.liveMinutes == null ? null : numeric(member.liveMinutes),
    accountsOpened: member.accountsOpened == null ? null : numeric(member.accountsOpened),
    scoreBreakdown: member.scoreBreakdown && typeof member.scoreBreakdown === 'object'
      ? { livestream: numeric(member.scoreBreakdown.livestream), tiktok: numeric(member.scoreBreakdown.tiktok) }
      : null,
    history: history.slice(-120).filter(item => /^\d{4}-\d{2}-\d{2}$/.test(String(item.date || '')))
      .map(item => ({ date: String(item.date), points: numeric(item.points) }))
  };
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=30');
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      redirect: 'follow',
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(12000)
    });
    if (!response.ok) {
      const status = response.status;
      const authPage = [401, 403].includes(status);
      const error = new Error('Apps Script returned HTTP ' + status);
      error.code = authPage ? 'SCRIPT_ACCESS_DENIED' : 'SCRIPT_HTTP_' + status;
      throw error;
    }
    const mime = (response.headers.get('content-type') || '').toLowerCase();
    if (!mime.includes('json')) {
      const error = new Error('Apps Script returned a non-JSON response');
      error.code = mime.includes('html') ? 'SCRIPT_RETURNED_HTML' : 'SCRIPT_INVALID_CONTENT_TYPE';
      throw error;
    }
    const data = await response.json();
    if (data.success !== true || !Array.isArray(data.leaderboard)) {
      const error = new Error('Apps Script returned invalid data');
      error.code = data.success === false ? 'SCRIPT_EXECUTION_ERROR' : 'SCRIPT_INVALID_FORMAT';
      throw error;
    }
    const leaderboard = data.leaderboard
      .map(publicMember)
      .filter(member => member.name)
      .sort((a, b) => b.points - a.points || b.clipViews - a.clipViews || a.name.localeCompare(b.name, 'vi'));
    leaderboard.forEach((member, index) => {
      member.rank = index > 0 && member.points === leaderboard[index - 1].points
        ? leaderboard[index - 1].rank : index + 1;
    });
    res.status(200).json({
      success: true,
      updatedAt: data.updatedAt || new Date().toISOString(),
      members: leaderboard.length,
      totalPoints: leaderboard.reduce((sum, member) => sum + member.points, 0),
      leaderboard
    });
  } catch (error) {
    console.error('NextGen Apps Script bridge:', error.message);
    res.setHeader('Cache-Control', 'no-store');
    const code = error.code || (error.name === 'TimeoutError' ? 'SCRIPT_TIMEOUT' : 'SCRIPT_FETCH_ERROR');
    res.status(503).json({
      success: false,
      code,
      error: 'Không tải được dữ liệu từ Apps Script. Kiểm tra quyền Web app và quyền truy cập Google Sheets.'
    });
  }
}
