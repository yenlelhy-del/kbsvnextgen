// NextGen participant-safe leaderboard API. Configure GOOGLE_SERVICE_ACCOUNT_JSON
// and share the source Google Sheet with the service account as Viewer.
import { createSign } from 'node:crypto';
const SHEET_ID = '1pqa0kZ-qfCqc12S6u3ULU2fhPgYOnqrFqUQz5Gi3ZiA';
const RANGES = ["'Danh sách thi'!A3:D200", "'Livestream\n'!A2:J1000", "'Clip Tiktok'!A2:I1000"];
const number = v => { const n=Number(String(v??'').replace(/,/g,'')); return Number.isFinite(n)?n:0 };
function token(service){
  const enc=x=>Buffer.from(JSON.stringify(x)).toString('base64url');
  const now=Math.floor(Date.now()/1000);
  const data=enc({alg:'RS256',typ:'JWT'})+'.'+enc({iss:service.client_email,scope:'https://www.googleapis.com/auth/spreadsheets.readonly',aud:'https://oauth2.googleapis.com/token',iat:now,exp:now+3500});
  const sign=createSign('RSA-SHA256');sign.update(data);sign.end();
  return data+'.'+sign.sign(service.private_key,'base64url');
}
async function sheetValues(){
  const service=JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON||'null');
  if(!service?.client_email||!service?.private_key) throw new Error('Service account not configured');
  const body=new URLSearchParams({grant_type:'urn:ietf:params:oauth:grant-type:jwt-bearer',assertion:token(service)});
  const auth=await fetch('https://oauth2.googleapis.com/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body});
  if(!auth.ok) throw new Error('Google authentication failed');
  const {access_token}=await auth.json();
  const url=new URL('https://sheets.googleapis.com/v4/spreadsheets/'+SHEET_ID+'/values:batchGet');
  RANGES.forEach(r=>url.searchParams.append('ranges',r));
  url.searchParams.set('valueRenderOption','FORMATTED_VALUE');
  const response=await fetch(url,{headers:{Authorization:'Bearer '+access_token}});
  if(!response.ok) throw new Error('Unable to read Google Sheets');
  return (await response.json()).valueRanges?.map(x=>x.values||[])||[];
}
const dateString=v=>{let s=String(v||'').trim(); if(!s)return '';const m=s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);return m?`${m[3]}-${m[2].padStart(2,'0')}-${m[1].padStart(2,'0')}`:s.slice(0,10)};
export default async function handler(req,res){
  res.setHeader('Cache-Control','no-store');
  if(req.method!=='GET')return res.status(405).json({error:'Method not allowed'});
  try {
    const [members=[],live=[],clips=[]]=await sheetValues();
    const people=new Map();
    const ensure=name=>{name=String(name||'').trim();if(!name)return null;if(!people.has(name))people.set(name,{name,channel:'',link:'',live:0,liveViews:0,followers:0,clips:0,clipViews:0,points:0,history:{}});return people.get(name)};
    members.slice(1).forEach(r=>{const p=ensure(r[1]);if(p){p.channel=String(r[2]||'');const link=String(r[3]||'');p.link=/^(https?:\/\/)/i.test(link)?link:'';}});
    let lastDate='',lastName='';
    live.slice(1).forEach(r=>{
      if(r[0])lastDate=dateString(r[0]);if(r[1])lastName=String(r[1]).trim();
      const p=ensure(lastName);if(!p||!lastDate)return;
      const score=number(r[8]);p.live+=number(r[2]);p.liveViews+=number(r[4]);p.followers+=number(r[5]);p.points+=score;
      p.history[lastDate]=(p.history[lastDate]||0)+score;
    });
    lastDate='';lastName='';
    clips.slice(1).forEach(r=>{
      if(r[0])lastDate=dateString(r[0]);if(r[1])lastName=String(r[1]).trim();
      const p=ensure(lastName);if(!p||!lastDate)return;
      const score=number(r[8]);p.clips+=number(r[2]);p.clipViews+=number(r[3]);p.points+=score;
      p.history[lastDate]=(p.history[lastDate]||0)+score;
    });
    const ranked=[...people.values()].filter(p=>p.name).sort((a,b)=>b.points-a.points||b.clipViews-a.clipViews||a.name.localeCompare(b.name,'vi'));
    ranked.forEach((p,i)=>{p.rank=i&&p.points===ranked[i-1].points?ranked[i-1].rank:i+1;p.history=Object.entries(p.history).sort(([a],[b])=>a.localeCompare(b)).map(([date,points])=>({date,points}));});
    return res.status(200).json({updatedAt:new Date().toISOString(),members:ranked.length,leaderboard:ranked});
  }catch(e){console.error('leaderboard:',e.message);return res.status(503).json({error:'Dữ liệu trực tiếp chưa sẵn sàng. Vui lòng thử lại sau.'})}
}