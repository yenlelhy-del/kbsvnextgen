/**
 * NEXTGEN — Official Google Sheet -> public leaderboard API (V3)
 * Spreadsheet is the single source of truth. Never publishes financial amounts,
 * NAV, customer identifiers, transaction value or private notes.
 * Deploy as Web app: Execute as Me / Who has access: Anyone.
 */
const NEXTGEN = {
  ID: '1KW5Ej6QFATI62ABKP-jEWWwe3OIvvd1I94EVf_fBCqE',
  TZ: 'Asia/Ho_Chi_Minh',
  CACHE: 30
};

function doGet(e) {
  try {
    const cache = CacheService.getScriptCache();
    const key = 'nextgen_public_v3';
    const force = e && e.parameter && e.parameter.refresh === '1';
    const hit = !force && cache.get(key);
    if (hit) return json(JSON.parse(hit));
    const result = collectNextGen();
    const serialized = JSON.stringify(result);
    if (serialized.length < 90000) cache.put(key, serialized, NEXTGEN.CACHE);
    return json(result);
  } catch (error) {
    console.error(error);
    return json({success:false,error:'Source data unavailable'});
  }
}
function json(v) {
  return ContentService.createTextOutput(JSON.stringify(v))
    .setMimeType(ContentService.MimeType.JSON);
}
function number(v) {
  const s = String(v == null ? '' : v).trim();
  if (!s || s === '-') return 0;
  const normalized = s.replace(/\s/g,'').replace(/\./g,'').replace(/,/g,'');
  const n = Number(normalized);
  return isFinite(n) ? n : 0;
}
function dateOf(v) {
  if (v instanceof Date && !isNaN(v)) {
    return Utilities.formatDate(v,NEXTGEN.TZ,'yyyy-MM-dd');
  }
  const s = String(v || '').trim();
  const m=s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  return m ? m[3]+'-'+m[2].padStart(2,'0')+'-'+m[1].padStart(2,'0')
    : /^\d{4}-\d{2}-\d{2}$/.test(s) ? s : '';
}
function liveMinutes(v) {
  const s=String(v||'').toLowerCase().trim().replace(/\s/g,'');
  if (!s) return 0;
  const h=s.match(/(\d+)h/),m=s.match(/(\d+)(?:p|ph|m)(?!\w)/);
  if (h) return Number(h[1])*60+(m?Number(m[1]):0);
  return m?Number(m[1]):0;
}
function keyOf(name) {
  return String(name||'').normalize('NFC').trim().replace(/\s+/g,' ').toLocaleLowerCase('vi');
}
function read(tab,start,columns) {
  const last=tab.getLastRow();
  return last<start ? [] : tab.getRange(start,1,last-start+1,columns).getDisplayValues();
}
function collectNextGen() {
  const ss=SpreadsheetApp.openById(NEXTGEN.ID);
  function tab(name) {
    const found=ss.getSheets().find(s=>s.getName().trim().toLocaleLowerCase('vi')===name.toLocaleLowerCase('vi'));
    if (!found) throw new Error('Missing tab: '+name);
    return found;
  }
  const people=new Map();
  // Only official roster members are displayed. Extra names need roster approval.
  read(tab('Danh sách thi'),4,4).forEach(r=>{
    const name=String(r[1]||'').trim();
    if (!name || !/^\d+$/.test(String(r[0]||'').trim())) return;
    const key=keyOf(name);
    if (!people.has(key)) {
      const rawLink=String(r[3]||'').trim();
      const link=/^https:\/\//i.test(rawLink)?rawLink:'';
      people.set(key,{
        name,link,rank:0,points:0,todayPoints:0,
        live:0,liveViews:0,liveLikes:0,liveMinutes:0,followers:0,
        clips:0,clipViews:0,clipLikes:0,viralClips:0,accountsOpened:0,
        history:{},scoreBreakdown:{livestream:0,tiktok:0}
      });
    }
  });
  function process(name,type) {
    let day='',person='';
    read(tab(name),3,type==='live'?16:9).forEach(r=>{
      const nextDay=dateOf(r[0]);
      if(nextDay){day=nextDay;person='';}
      if(String(r[1]||'').trim()) person=keyOf(r[1]);
      if(!day || !person || !people.has(person))return;
      const p=people.get(person);
      const score=number(r[8]);
      if(type==='live'){
        p.live+=number(r[2]);
        p.liveViews+=number(r[4]);
        p.liveLikes+=number(r[6]);
        p.liveMinutes+=liveMinutes(r[3]);
        p.followers+=number(r[5]);
        p.accountsOpened+=number(r[7]);
        p.scoreBreakdown.livestream+=score;
        // K:P contains business data and a Total Score field.
        // Do not infer or double-count their points until the official
        // spreadsheet's business scoring formulas are confirmed.
      }else{
        p.clips+=number(r[2]);
        p.clipViews+=number(r[3]);
        p.clipLikes+=number(r[4]);
        p.viralClips+=number(r[5]);
        p.scoreBreakdown.tiktok+=score;
      }
      p.points+=score;
      p.history[day]=(p.history[day]||0)+score;
    });
  }
  process('Livestream','live');
  process('Clip Tiktok','clip');
  const today=Utilities.formatDate(new Date(),NEXTGEN.TZ,'yyyy-MM-dd');
  const leaderboard=Array.from(people.values()).map(p=>{
    p.todayPoints=p.history[today]||0;
    p.history=Object.keys(p.history).sort().map(day=>({date:day,points:p.history[day]}));
    return p;
  }).sort((a,b)=>b.points-a.points||b.clipViews-a.clipViews||a.name.localeCompare(b.name,'vi'));
  leaderboard.forEach((p,i)=>{
    p.rank=i>0&&p.points===leaderboard[i-1].points?leaderboard[i-1].rank:i+1;
  });
  return {
    success:true,program:'KBSV NextGen 2026',
    updatedAt:new Date().toISOString(),
    scoringScope:'Livestream and TikTok activity points only; business bonuses unverified',
    members:leaderboard.length,
    totalPoints:leaderboard.reduce((s,p)=>s+p.points,0),
    leaderboard
  };
}
