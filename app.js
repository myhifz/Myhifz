// Mon Hifz : révision par pages (Mushaf Madani, 604 pages)
const RAW="Al-Fatiha|الفاتحة|1;Al-Baqara|البقرة|2;Al-Imran|آل عمران|50;An-Nisa|النساء|77;Al-Ma'ida|المائدة|106;Al-An'am|الأنعام|128;Al-A'raf|الأعراف|151;Al-Anfal|الأنفال|177;At-Tawba|التوبة|187;Yunus|يونس|208;Hud|هود|221;Yusuf|يوسف|235;Ar-Ra'd|الرعد|249;Ibrahim|إبراهيم|255;Al-Hijr|الحجر|262;An-Nahl|النحل|267;Al-Isra|الإسراء|282;Al-Kahf|الكهف|293;Maryam|مريم|305;Ta-Ha|طه|312;Al-Anbiya|الأنبياء|322;Al-Hajj|الحج|332;Al-Mu'minun|المؤمنون|342;An-Nur|النور|350;Al-Furqan|الفرقان|359;Ash-Shu'ara|الشعراء|367;An-Naml|النمل|377;Al-Qasas|القصص|385;Al-Ankabut|العنكبوت|396;Ar-Rum|الروم|404;Luqman|لقمان|411;As-Sajda|السجدة|415;Al-Ahzab|الأحزاب|418;Saba|سبأ|428;Fatir|فاطر|434;Ya-Sin|يس|440;As-Saffat|الصافات|446;Sad|ص|453;Az-Zumar|الزمر|458;Ghafir|غافر|467;Fussilat|فصلت|477;Ash-Shura|الشورى|483;Az-Zukhruf|الزخرف|489;Ad-Dukhan|الدخان|496;Al-Jathiya|الجاثية|499;Al-Ahqaf|الأحقاف|502;Muhammad|محمد|507;Al-Fath|الفتح|511;Al-Hujurat|الحجرات|515;Qaf|ق|518;Adh-Dhariyat|الذاريات|520;At-Tur|الطور|523;An-Najm|النجم|526;Al-Qamar|القمر|528;Ar-Rahman|الرحمن|531;Al-Waqi'a|الواقعة|534;Al-Hadid|الحديد|537;Al-Mujadila|المجادلة|542;Al-Hashr|الحشر|545;Al-Mumtahana|الممتحنة|549;As-Saff|الصف|551;Al-Jumu'a|الجمعة|553;Al-Munafiqun|المنافقون|554;At-Taghabun|التغابن|556;At-Talaq|الطلاق|558;At-Tahrim|التحريم|560;Al-Mulk|الملك|562;Al-Qalam|القلم|564;Al-Haqqa|الحاقة|566;Al-Ma'arij|المعارج|568;Nuh|نوح|570;Al-Jinn|الجن|572;Al-Muzzammil|المزمل|574;Al-Muddaththir|المدثر|575;Al-Qiyama|القيامة|577;Al-Insan|الإنسان|578;Al-Mursalat|المرسلات|580;An-Naba|النبأ|582;An-Nazi'at|النازعات|583;Abasa|عبس|585;At-Takwir|التكوير|586;Al-Infitar|الانفطار|587;Al-Mutaffifin|المطففين|587;Al-Inshiqaq|الانشقاق|589;Al-Buruj|البروج|590;At-Tariq|الطارق|591;Al-A'la|الأعلى|591;Al-Ghashiya|الغاشية|592;Al-Fajr|الفجر|593;Al-Balad|البلد|594;Ash-Shams|الشمس|595;Al-Layl|الليل|595;Ad-Duha|الضحى|596;Ash-Sharh|الشرح|596;At-Tin|التين|597;Al-Alaq|العلق|597;Al-Qadr|القدر|598;Al-Bayyina|البينة|598;Az-Zalzala|الزلزلة|599;Al-Adiyat|العاديات|599;Al-Qari'a|القارعة|600;At-Takathur|التكاثر|600;Al-Asr|العصر|601;Al-Humaza|الهمزة|601;Al-Fil|الفيل|601;Quraysh|قريش|602;Al-Ma'un|الماعون|602;Al-Kawthar|الكوثر|602;Al-Kafirun|الكافرون|603;An-Nasr|النصر|603;Al-Masad|المسد|603;Al-Ikhlas|الإخلاص|604;Al-Falaq|الفلق|604;An-Nas|الناس|604";
const S=RAW.split(";").map((x,i)=>{const[t,a,p]=x.split("|");return{id:i+1,t,a,p:+p}});
S.forEach((x,i)=>{x.e=i===113?604:Math.max(x.p,S[i+1].p-1)});
const PAGES=604, PER_HIZB=PAGES/60;
const KEY="murajaa-v1";
const THEMES={vert:{n:"Vert",c:["#1F5A47","#6DBB9C"],tc:"#F2F4F0"},rose:{n:"Rose",c:["#B23F6E","#F09DBD"],tc:"#FBF2F5"},marine:{n:"Bleu marine",c:["#26467A","#7FA3D8"],tc:"#F1F4F9"}};
const DEF={c:"vert",name:"",a:0,b:0,dir:"up",jn:6,d:3,start:"",icon:"rose",p1:0,p2:0,off:[]};

let st={log:{},day:{},weak:[],cfg:{...DEF}}, tab="home", draft=null, resetArm=false;
try{const v=JSON.parse(localStorage.getItem(KEY)||"null");
  if(v){st.log=v.log||{};st.day=v.day||{};st.weak=v.weak||[];st.cfg=Object.assign({...DEF},v.cfg||{});
    // Ancienne version (cases par sourate) : on reprend la plage cochée
    if(!st.cfg.a&&v.s){const ids=Object.keys(v.s).map(Number);if(ids.length){st.cfg.a=Math.min(...ids);st.cfg.b=Math.max(...ids)}}}}catch(e){}
// Icône : celle de l'écran d'accueil vient du lien utilisé à l'installation (?icon=N)
const ICONS={rose:"Rose",marine:"Bleu marine",vert:"Vert"};
const URL_ICON=new URLSearchParams(location.search).get("icon");
const INSTALLED_ICON=ICONS[URL_ICON]?URL_ICON:"rose";
if(ICONS[URL_ICON])st.cfg.icon=URL_ICON;
if(!ICONS[st.cfg.icon])st.cfg.icon="rose";
function applyIcon(){document.querySelectorAll('link[rel="apple-touch-icon"],link[rel="icon"]').forEach(l=>l.href="icons/"+st.cfg.icon+".png")}
const logo=()=>'<div class="logo"><img src="icons/'+st.cfg.icon+'.png" alt=""></div>';
try{const t=localStorage.getItem(KEY+"-tab");if(["home","rev","plan","set"].includes(t))tab=t}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}};

const pad=n=>String(n).padStart(2,"0");
const ds=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const today=()=>ds(new Date());
const addDays=(s,n)=>{const d=new Date(s+"T12:00");d.setDate(d.getDate()+n);return ds(d)};
const diff=(a,b)=>Math.round((new Date(a+"T12:00")-new Date(b+"T12:00"))/864e5);
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const fmtDay=s=>{const d=new Date(s+"T12:00").toLocaleDateString("fr-BE",{weekday:"long",day:"numeric",month:"long"});return d.charAt(0).toUpperCase()+d.slice(1)};
const hizb=n=>(n/PER_HIZB).toFixed(1).replace(/\.0$/,"");

/* Programme : pages mémorisées dans l'ordre d'apprentissage, puis découpage */
function pageRange(c){
  if(c.p1&&c.p2)return[Math.min(c.p1,c.p2),Math.max(c.p1,c.p2)];
  if(!c.a||!c.b)return null;const a=Math.min(c.a,c.b),b=Math.max(c.a,c.b);return[S[a-1].p,S[b-1].e]}
function program(c){
  const r=pageRange(c);if(!r)return null;
  const p1=r[0],p2=r[1],pages=[];
  const a=onPage(p1)[0].id,b=onPage(p2).slice(-1)[0].id;for(let p=p1;p<=p2;p++)pages.push(p);
  const learned=c.dir==="up"?pages.slice().reverse():pages; // du plus ancien au plus récent
  const jn=Math.max(0,Math.min(+c.jn||0,learned.length));
  const jadid=learned.slice(learned.length-jn).sort((x,y)=>x-y);
  const old=learned.slice(0,learned.length-jn);
  const d=Math.max(1,Math.min(+c.d||1,old.length||1));
  const k=old.length?Math.ceil(old.length/d):0;
  return{a,b,p1,p2,total:pages.length,jadid,old,d,k}}
const isOff=date=>(st.cfg.off||[]).includes(new Date(date+"T12:00").getDay());
function workIndex(date){const s=st.cfg.start||date;let n=0,d=s;const dir=diff(date,s)>=0?1:-1;
  while(d!==date){if(!isOff(d))n+=dir;d=addDays(d,dir)}return n}
function janbFor(pr,date){
  if(!pr||!pr.old.length||isOff(date))return[];
  const i=((workIndex(date)%pr.d)+pr.d)%pr.d;
  return pr.old.slice(i*pr.k,(i+1)*pr.k).sort((x,y)=>x-y)}
function onPage(p){return S.filter(s=>s.p<=p&&s.e>=p)}
function label(pages,pr){
  if(!pages.length)return"";
  const lo=Math.min(...pages),hi=Math.max(...pages);
  const inR=s=>!pr||(s.e>=pr.p1&&s.p<=pr.p2);
  const f=onPage(lo).filter(inR)[0]||onPage(lo)[0],l=onPage(hi).filter(inR).slice(-1)[0]||onPage(hi).slice(-1)[0];
  return(lo===hi?"Page "+lo:"Pages "+lo+" → "+hi)+" · "+(f.id===l.id?f.t:f.t+" → "+l.t)}

/* Sourates couvertes par des pages (dans la plage mémorisée) */
function surahsFor(pages,pr){if(!pages.length||!pr)return[];const lo=Math.min(...pages),hi=Math.max(...pages);
  return S.filter(s=>s.e>=pr.p1&&s.p<=pr.p2&&s.p<=hi&&s.e>=lo).map(s=>({s,lo:Math.max(s.p,lo),hi:Math.min(s.e,hi)}))}
/* Une page compte comme faite quand toutes ses sourates du jour sont cochées */
function donePages(pages,list,ids){return pages.filter(p=>list.filter(x=>x.lo<=p&&x.hi>=p).every(x=>ids.includes(x.s.id))).length}
function dayRec(date){const d=st.day[date];return d&&d.sj?Object.assign({sw:[]},d):{sj:[],so:[],sw:[]}}
function dayState(date){
  const pr=program(st.cfg),d=dayRec(date),off=isOff(date);
  const J=pr&&!off?pr.jadid:[],O=janbFor(pr,date),Js=surahsFor(J,pr),Os=surahsFor(O,pr);
  const inDay=new Set(Js.concat(Os).map(x=>x.s.id));
  const W=off?[]:st.weak.filter(id=>!inDay.has(id)).sort((a,b)=>a-b).map(id=>({s:S[id-1],lo:S[id-1].p,hi:S[id-1].e}));
  const jd=donePages(J,Js,d.sj),od=donePages(O,Os,d.so);
  return{pr,off,J,O,Js,Os,W,jd,od,done:jd+od,tot:J.length+O.length,d}}
function mark(kind,ids,on){
  const t=today();if(!st.day[t]||!st.day[t].sj)st.day[t]={sj:[],so:[],sw:[]};const d=st.day[t];if(!d.sw)d.sw=[];
  ids.forEach(p=>{const i=d[kind].indexOf(p);if(on&&i<0)d[kind].push(p);if(!on&&i>=0)d[kind].splice(i,1)});
  st.log[t]=d.sj.length+d.so.length+d.sw.length; if(!st.log[t])delete st.log[t];
  const x=dayState(t);d.full=!!(x.tot&&x.done>=x.tot);
  Object.keys(st.day).forEach(k=>{if(diff(t,k)>40)delete st.day[k]});
  save()}

function streak(){let n=0,d=today(),g=0;if(!st.log[d])d=addDays(d,-1);
  while((st.log[d]||isOff(d))&&g++<3000){if(st.log[d])n++;d=addDays(d,-1)}return n}
function record(){const ks=Object.keys(st.log).filter(k=>st.log[k]).sort();if(!ks.length)return 0;
  let best=0,cur=0,d=ks[0],g=0;while(d<=today()&&g++<3000){if(st.log[d]){cur++;best=Math.max(best,cur)}else if(!isOff(d))cur=0;d=addDays(d,1)}return best}
function applyTheme(){const c=THEMES[st.cfg.c]?st.cfg.c:"vert";document.documentElement.dataset.c=c;
  const dark=matchMedia("(prefers-color-scheme: dark)").matches;$("tc").content=dark?getComputedStyle(document.documentElement).getPropertyValue("--paper").trim():THEMES[c].tc}
function toast(m){const t=$("toast");t.textContent=m;t.hidden=false;clearTimeout(toast.h);toast.h=setTimeout(()=>t.hidden=true,1900)}

const I={
 logo:'<svg width="30" height="30" viewBox="0 0 24 24"><g fill="var(--acc2)"><rect x="5" y="5" width="14" height="14" rx="1"/><rect x="5" y="5" width="14" height="14" rx="1" transform="rotate(45 12 12)"/></g><circle cx="12" cy="12" r="3.6" fill="var(--card)"/><circle cx="12" cy="12" r="2" fill="var(--acc)"/></svg>',
 flame:'<svg viewBox="0 0 24 24"><defs><linearGradient id="fg" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#E8432E"/><stop offset="1" stop-color="#FFA92E"/></linearGradient></defs><path fill="url(#fg)" d="M12 2c1 3.5 5 5.6 5 10.5A5.2 5.2 0 0 1 12 18a5.2 5.2 0 0 1-5-5.5c0-2.3 1.2-3.8 2.4-5 .1 1.6.8 2.7 1.8 3.3C11 7.9 11.4 4.6 12 2z"/><path fill="#FFD36E" d="M12 11c.6 1.5 2.3 2.4 2.3 4.4A2.3 2.3 0 0 1 12 18a2.3 2.3 0 0 1-2.3-2.6c0-1.3.7-2 1.3-2.6.1.7.4 1.1.8 1.3-.1-1.1.1-2.3.2-3.1z"/></svg>',
 drop:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5c2.5 4 6 6.8 6 11a6 6 0 0 1-12 0c0-4.2 3.5-7 6-11z"/></svg>',
 star:'<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.3L12 17.1l-5.7 3.1 1.2-6.3L2.8 9.5l6.4-.8z"/></svg>',
 stack:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l10 5-10 5L2 7z"/><path d="M2 12l10 5 10-5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2 17l10 5 10-5" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
 chart:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 20V11M12 20V5M19 20v-6"/></svg>',
 book:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M2 5.5C4.5 4.3 7.8 4.2 11 6v14c-3.2-1.7-6.5-1.7-9-.6zM22 5.5C19.5 4.3 16.2 4.2 13 6v14c3.2-1.7 6.5-1.7 9-.6z"/></svg>',
 dir:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16M3 16l4 4 4-4M17 20V4M13 8l4-4 4 4"/></svg>',
 loop:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/></svg>',
 calc:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 6.5h8M8 11h.01M12 11h.01M16 11h.01M8 14.5h.01M12 14.5h.01M16 14.5h.01M8 18h.01M12 18h.01M16 18h.01"/></svg>',
 doc:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
 chev:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>',
 save:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h11l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 2v4h8V5zm5 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></svg>',
 trash:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
 palette:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.2-1.7-.5-1.1.2-2.3 1.4-2.3H17a4 4 0 0 0 4-4c0-5.5-4-10-9-10z"/><circle cx="7.5" cy="11" r="1.2" fill="currentColor"/><circle cx="10" cy="7" r="1.2" fill="currentColor"/><circle cx="14.5" cy="7" r="1.2" fill="currentColor"/></svg>',
 user:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
 cloud:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5a4.3 4.3 0 0 1-1 8.5z"/><path d="M12 11v6M9.5 14.5L12 17l2.5-2.5"/></svg>',
 moon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>',
 plus:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
 flag:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M5 21V4h11l-1.5 4L16 12H7v9z"/></svg>',
 check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg>'
};

function learn(delta){
  const r=pageRange(st.cfg);if(!r)return;let[p1,p2]=r;
  if(st.cfg.dir==="up"){p1=Math.min(Math.max(1,p1-delta),p2)}else{p2=Math.max(Math.min(604,p2+delta),p1)}
  if(p1===r[0]&&p2===r[1]){toast(delta>0?"Tu es déjà à la fin du Mushaf":"Il faut garder au moins une page");return}
  st.cfg.p1=p1;st.cfg.p2=p2;st.cfg.a=onPage(p1)[0].id;st.cfg.b=onPage(p2).slice(-1)[0].id;save();
  const np=st.cfg.dir==="up"?p1:p2;
  toast(delta>0?"Page "+np+" ajoutée · "+onPage(np).map(s=>s.t).join(", "):"Dernière page retirée")}
function needSetup(){return'<div class="card empty"><div class="ar">بسم الله</div><p>Indique dans Réglages les sourates que tu connais et ton rythme de révision.</p><div class="chips" style="justify-content:center;margin-top:16px"><button class="btn pri" data-tab="set">Configurer mon programme</button></div></div>'}

function vHome(){
  const name=st.cfg.name.trim(),x=dayState(today());
  let h='<div class="hello">'+logo()+'<div class="txt"><h1>Salam Aleykoum'+(name?", "+esc(name):"")+'</h1><div class="sub">'+fmtDay(today())+'</div></div><div class="fire">'+I.flame+'<span class="num">'+streak()+'</span></div></div>';
  if(!x.pr)return h+needSetup();
  const left=x.tot-x.done,pct=x.tot?Math.round(x.done/x.tot*100):100;
  const msg=left?["En cours","Continue sur ta lancée ! Il te reste "+left+" page"+(left>1?"s":"")+" à réviser aujourd'hui."]:["Terminé","Ma sha Allah, ta révision du jour est faite."];
  if(x.off){h+='<div class="card status"><div class="ic">'+I.moon+'</div><div><b>Jour off</b><span>Pas de mémorisation ni de révision aujourd\'hui. Repose-toi bien.</span></div></div>'+memoCard(x.pr);
    return h+statsCards(x)}
  h+='<button class="card status" data-tab="rev"><div class="ic">'+I.drop+'</div><div><b>'+msg[0]+'</b><span>'+msg[1]+'</span></div></button>';
  const R=70,C=2*Math.PI*R;
  h+='<div class="hero"><div class="t">Progression du jour</div><div class="ring"><svg viewBox="0 0 170 170"><circle cx="85" cy="85" r="'+R+'" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.22)" stroke-width="8"/><circle cx="85" cy="85" r="'+R+'" fill="none" stroke="rgba(255,255,255,.92)" stroke-width="8" stroke-linecap="round" stroke-dasharray="'+C+'" stroke-dashoffset="'+(C*(1-pct/100))+'"/></svg><div class="in"><div class="p num">'+pct+'%</div><div class="s num">'+x.done+'/'+x.tot+' pages</div></div></div><div class="hbar"><i style="width:'+pct+'%"></i></div></div>';
  const tp=(a,b)=>b?Math.round(a/b*100):100;
  h+='<div class="tiles"><button class="card tile n" data-tab="rev"><div class="ic">'+I.star+'</div><div class="p num">'+tp(x.jd,x.J.length)+'%</div><div class="k">Hifdh al-Jadid</div><div class="s num">'+x.jd+'/'+x.J.length+' pages</div><div class="tbar"><i style="width:'+tp(x.jd,x.J.length)+'%"></i></div></button>'
    +'<button class="card tile o" data-tab="rev"><div class="ic">'+I.stack+'</div><div class="p num">'+tp(x.od,x.O.length)+'%</div><div class="k">Hifdh</div><div class="s num">'+x.od+'/'+x.O.length+' pages</div><div class="tbar"><i style="width:'+tp(x.od,x.O.length)+'%"></i></div></button></div>';
  h+=memoCard(x.pr);
  return h+statsCards(x)}
function memoCard(pr){
  const np=st.cfg.dir==="up"?pr.p1-1:pr.p2+1,nxt=np>=1&&np<=604?onPage(np):[];
  return'<div class="card memo"><div class="bh"><div class="ctitle">'+I.plus+'Mémorisation</div><span class="tag num">'+pr.total+' pages</span></div><div class="rng num">Pages '+pr.p1+' → '+pr.p2+' · '+label([pr.p1,pr.p2],pr).split(" · ")[1]+'</div>'
   +(nxt.length?'<div class="mrow"><button class="btn pri grow" data-learn="1">J\'ai appris une nouvelle page</button><button class="btn" data-learn="-1" aria-label="Retirer la dernière page">−</button></div><div class="note" style="margin-top:8px">Prochaine page : '+np+' · '+nxt.map(s=>s.t).join(", ")+'</div>':'<p class="note">Tu as atteint la fin du Mushaf, ma sha Allah.</p>')+'</div>'}
function statsCards(x){let h='';
  h+='<div class="card"><div class="ctitle">'+I.chart+'Tes statistiques</div><div class="sgrid"><div><b class="num">'+x.pr.total+'</b><span>Pages</span></div><div><b class="num">'+streak()+'</b><span>Série</span></div><div><b class="num">'+record()+'</b><span>Record</span></div></div></div>';
  const cp=x.pr.total/PAGES*100;let cells="";
  for(let i=29;i>=0;i--){const d=addDays(today(),-i),n=st.log[d]||0,f=st.day[d]&&st.day[d].full;cells+='<i class="'+(f?"l2":n?"l1":isOff(d)?"off":"")+'"></i>'}
  h+='<div class="card"><div class="row" style="justify-content:space-between"><div class="ctitle">Coran mémorisé</div><b class="num" style="font-size:22px">'+cp.toFixed(1)+' %</b></div><div class="note num" style="margin-top:2px">'+x.pr.total+' / '+PAGES+' pages · '+hizb(x.pr.total)+' hizb</div><div class="prog"><i style="width:'+cp+'%"></i></div><div class="note" style="margin-top:16px">30 derniers jours</div><div class="heat">'+cells+'</div></div>';
  return h}

function block(kind,title,tag,pages,list,doneIds,pr,cls){
  if(!pages.length)return'<div class="card"><div class="bh"><div class="ctitle">'+title+'</div><span class="tag">'+tag+'</span></div><p class="note" style="margin:8px 0 0">Rien pour aujourd\'hui.</p></div>';
  const n=list.filter(x=>doneIds.includes(x.s.id)).length,all=n===list.length;
  return'<div class="card blk '+cls+'"><div class="bh"><div class="ctitle">'+title+'</div><span class="tag">'+tag+'</span></div><div class="rng num">'+(pages.length>1?"Pages "+Math.min(...pages)+" → "+Math.max(...pages):"Page "+pages[0])+' · '+pages.length+' page'+(pages.length>1?"s":"")+'</div><div class="sus">'+list.map(x=>{const on=doneIds.includes(x.s.id),part=x.lo!==x.s.p||x.hi!==x.s.e;
    return suRow(x,kind,on,part)}).join("")+'</div><div class="bf"><span class="note num">'+n+'/'+list.length+' sourate'+(list.length>1?"s":"")+'</span><button class="btn '+(all?"":"pri")+'" data-all="'+kind+'" data-on="'+(all?0:1)+'">'+(all?"Annuler":"Tout marquer comme fait")+'</button></div></div>'}

function suRow(x,kind,on,part){const w=st.weak.includes(x.s.id);
  return'<div class="su '+(on?"on":"")+(w?" weak":"")+'"><button class="sc" data-su="'+x.s.id+'" data-k="'+kind+'" aria-label="Cocher '+x.s.t+'">'+(on?I.check:"")+'</button><button class="sb" data-read="'+x.s.id+'" data-lo="'+x.lo+'"><span class="sn"><b>'+x.s.t+'</b><span class="num">'+(x.lo===x.hi?"p. "+x.lo:"p. "+x.lo+"–"+x.hi)+(part?" · partie":"")+(w?' · <em>à renforcer</em>':"")+'</span></span><span class="ar">'+x.s.a+'</span></button></div>'}
function weakBlock(x){if(!x.W.length)return"";const ids=x.d.sw,n=x.W.filter(y=>ids.includes(y.s.id)).length,all=n===x.W.length;
  return'<div class="card blk w"><div class="bh"><div class="ctitle">'+I.flag+'À renforcer</div><span class="tag">Chaque jour</span></div><div class="rng">Les sourates que tu as marquées comme difficiles.</div><div class="sus">'+x.W.map(y=>suRow(y,"sw",ids.includes(y.s.id),false)).join("")+'</div><div class="bf"><span class="note num">'+n+'/'+x.W.length+'</span><button class="btn '+(all?"":"pri")+'" data-all="sw" data-on="'+(all?0:1)+'">'+(all?"Annuler":"Tout marquer comme fait")+'</button></div></div>'}
function vRev(){
  const x=dayState(today());
  let h='<div><h1>Révision</h1><div class="sub">'+fmtDay(today())+'</div></div>';
  if(!x.pr)return h+needSetup();
  if(x.off)return h+'<div class="card empty"><div class="ar">راحة</div><p>Jour off : rien à mémoriser ni à réviser aujourd\'hui.</p></div>';
  if(x.tot&&x.done===x.tot)h+='<div class="card empty" style="padding:18px"><div class="ar">ما شاء الله</div><p>Tout est fait pour aujourd\'hui. Qu\'Allah te le facilite.</p></div>';
  h+=block("sj","Hifdh al-Jadid","Chaque jour",x.J,x.Js,x.d.sj,x.pr,"n");
  h+=block("so","Hifdh","Cycle de "+x.pr.d+" j",x.O,x.Os,x.d.so,x.pr,"o");
  h+=weakBlock(x);
  return h+'<p class="note">Touche la case quand tu as récité. Touche le nom pour lire la page. Appui long sur le nom : « à renforcer ».</p>'}

function vPlan(){
  const pr=program(st.cfg);
  let h='<div><h1>Planning</h1><div class="sub">Les '+(pr?Math.max(7,pr.d):7)+' prochains jours</div></div>';
  if(!pr)return h+needSetup();
  h+='<div class="card"><div class="bh"><div class="ctitle">Hifdh al-Jadid</div><span class="tag">Chaque jour</span></div><div class="rng">'+(pr.jadid.length?label(pr.jadid,pr):"Aucune page")+'</div></div><div class="lbl">Hifdh</div><div class="card plist">';
  const n=Math.max(7,pr.d);
  for(let i=0;i<n;i++){const d=addDays(today(),i),O=janbFor(pr,d),Os=surahsFor(O,pr),dd=dayRec(d),ok=Os.length&&Os.every(y=>dd.so.includes(y.s.id));
    h+='<div class="prow'+(i===0?" now":"")+(isOff(d)?" offd":"")+'"><div class="pd"><b>'+(i===0?"Aujourd'hui":i===1?"Demain":fmtDay(d).split(" ").slice(0,2).join(" "))+'</b></div><div class="pr num">'+(isOff(d)?"Jour off":O.length?label(O,pr):"Repos")+'</div>'+(ok?'<span class="okb">'+I.check+'</span>':"")+'</div>'}
  return h+'</div><p class="note">Le cycle recommence tous les '+pr.d+' jours de révision'+((st.cfg.off||[]).length?' (les jours off ne comptent pas)':'')+'. Tu peux changer le rythme dans Réglages.</p>'}

function sel(id,val){
  const s=S[(val||1)-1];
  return'<label class="pick"><span class="pn num">'+s.id+'.</span><span class="pt"><b>'+s.t+'</b><span class="ar">'+s.a+'</span></span>'+I.chev+'<select id="'+id+'" aria-label="Sourate">'+S.map(x=>'<option value="'+x.id+'"'+(x.id===s.id?" selected":"")+'>'+x.id+'. '+x.t+'</option>').join("")+'</select></label>'}
function head(icon,t,s,soft){return'<div class="sh"><div class="si'+(soft?" s2":"")+'">'+icon+'</div><div><div class="st">'+t+'</div><div class="ss">'+s+'</div></div></div>'}

function vSet(){
  if(!draft)draft={...st.cfg,a:st.cfg.a||78,b:st.cfg.b||114,off:(st.cfg.off||[]).slice()};
  const pr=program(draft),per=pr&&pr.old.length?pr.k:0;
  let h='<div class="hello">'+logo()+'<div class="txt"><h1>Réglages</h1><div class="sub">Configure ta méthode de révision</div></div></div>';
  h+='<div class="card">'+head(I.book,"Sourates mémorisées","De quelle sourate à quelle sourate connais-tu ?")+'<div class="fl">De :</div>'+sel("fa",draft.a)+'<div class="fl">À :</div>'+sel("fb",draft.b)+'<div class="pill">'+I.doc+'<span class="num">Pages '+pr.p1+' → '+pr.p2+' · '+pr.total+' pages · '+hizb(pr.total)+' hizb</span></div></div>';
  h+='<div class="card">'+head(I.dir,"Sens d'apprentissage","Dans quel sens as-tu mémorisé ?")+'<div class="seg"><button class="'+(draft.dir==="down"?"on":"")+'" data-dir="down"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 4v16M6 14l6 6 6-6"/></svg>Al-Fatiha → An-Nas</button><button class="'+(draft.dir==="up"?"on":"")+'" data-dir="up"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 20V4M6 10l6-6 6 6"/></svg>An-Nas → Al-Fatiha</button></div></div>';
  h+='<div class="card">'+head(I.loop,"Boucles de révision","Comment veux-tu répartir tes révisions ?")
   +'<div class="bh" style="margin-top:18px"><div class="lt">Hifdh al-Jadid</div><span class="tag">Chaque jour</span></div><div class="ld">Nombre de pages récentes à réviser tous les jours.</div><label class="numf"><input id="jn" type="number" inputmode="numeric" min="0" max="'+pr.total+'" value="'+draft.jn+'"><span>pages</span></label>'
   +'<hr><div class="bh"><div class="lt">Hifdh</div><span class="tag">Cycle</span></div><div class="ld">En combien de jours veux-tu réviser le reste de ce que tu connais ?</div><label class="numf"><input id="dd" type="number" inputmode="numeric" min="1" max="60" value="'+draft.d+'"><span>jours</span></label>'
   +'<div class="pill" id="perp">'+I.calc+'<span>'+(pr.old.length?'Soit environ <b class="num">'+per+' page'+(per>1?"s":"")+'</b> par jour':'Tout est déjà dans Hifdh al-Jadid')+'</span></div></div>';
  const DAYS=[[1,"Lun"],[2,"Mar"],[3,"Mer"],[4,"Jeu"],[5,"Ven"],[6,"Sam"],[0,"Dim"]];
  h+='<div class="card">'+head(I.moon,"Jour off","Les jours où tu ne mémorises et ne révises rien.")+'<div class="days">'+DAYS.map(([n,l])=>'<button class="dy '+(draft.off.includes(n)?"on":"")+'" data-off="'+n+'">'+l+'</button>').join("")+'</div><div class="note" style="margin-top:10px">'+(draft.off.length?draft.off.length+' jour'+(draft.off.length>1?"s":"")+' off par semaine. Le cycle de Hifdh fait une pause ces jours-là.':'Aucun jour off pour l\'instant.')+'</div></div>';
  const A=S[pr.a-1],B=S[pr.b-1],ord=draft.dir==="up"?[B,A]:[A,B];
  h+='<div class="card sum" id="sumc"><div class="ctitle">'+I.chart+'Résumé de ton programme</div>'
   +[["Sourates",ord[0].t+" → "+ord[1].t],["Pages mémorisées",pr.total+" pages"],["Hizb mémorisés",'<span style="color:var(--acc2)">'+hizb(pr.total)+" hizb</span>"],["Hifdh al-Jadid",pr.jadid.length+" pages/jour"],["Hifdh","~"+per+" pages/jour"],["Jour off",draft.off.length?DAYS.filter(([n])=>draft.off.includes(n)).map(([,l])=>l).join(", "):"Aucun"],["Total quotidien",'<b style="font-size:20px">~'+(pr.jadid.length+per)+" pages</b>"]]
     .map(r=>'<div class="sr"><span>'+r[0]+'</span><b class="num">'+r[1]+'</b></div>').join("")+'</div>';
  h+='<div class="card">'+head(I.palette,"Couleur","Choisis le thème de l'app.",1)+'<div class="themes">'+Object.entries(THEMES).map(([k,t])=>'<button class="th '+(st.cfg.c===k?"on":"")+'" data-theme-c="'+k+'"><i style="background:linear-gradient(135deg,'+t.c[0]+','+t.c[1]+')"></i>'+t.n+'</button>').join("")+'</div></div>';
  const ic=st.cfg.icon,link="myhifz.github.io/Myhifz/?icon="+ic;
  h+='<div class="card">'+head(I.book,"Icône de l'app","Choisis le logo de ton écran d'accueil.",1)+'<div class="icons">'+Object.entries(ICONS).map(([k,n])=>'<button class="ico '+(ic===k?"on":"")+'" data-icon="'+k+'" aria-label="Icône '+n+'"><img src="icons/'+k+'.png" alt=""><span>'+n+'</span></button>').join("")+'</div>'
   +(ic!==INSTALLED_ICON?'<div class="howto"><b>Pour l\'avoir sur ton écran d\'accueil :</b><ol><li>Copie ta sauvegarde (plus bas).</li><li>Supprime l\'icône actuelle de l\'écran d\'accueil.</li><li>Ouvre ce lien dans Safari :<div class="lk"><span class="num">'+link+'</span><button class="btn" data-act="copylink">Copier</button></div></li><li>Partager → « Sur l\'écran d\'accueil ».</li><li>Ouvre l\'app, Réglages → Restaurer.</li></ol></div>':'')+'</div>';
  h+='<div class="card">'+head(I.user,"Ton prénom","Affiché sur l'accueil (facultatif).",1)+'<input class="field" id="nm" type="text" maxlength="24" autocomplete="given-name" placeholder="Prénom" value="'+esc(draft.name)+'"></div>';
  h+='<div class="card">'+head(I.cloud,"Sauvegarde","Tes données restent sur ce téléphone. Garde une copie dans tes notes.",1)+'<div class="chips" style="margin-top:14px"><button class="btn pri" data-act="export">Copier la sauvegarde</button><button class="btn" data-act="showimp">Restaurer</button></div><div id="imp" hidden><textarea id="impt" placeholder="Colle ta sauvegarde ici"></textarea><div class="chips" style="margin-top:10px"><button class="btn pri" data-act="import">Restaurer ces données</button></div></div><textarea id="expt" hidden readonly></textarea></div>';
  h+='<button class="reset" data-act="reset">'+I.trash+(resetArm?"Touche encore pour tout effacer":"Réinitialiser toutes les données")+'</button>';
  h+='<div class="savebar"><button class="savebtn" data-act="save">'+I.save+'Sauvegarder</button></div>';
  return h}

function render(){
  $("app").innerHTML=tab==="home"?vHome():tab==="rev"?vRev():tab==="plan"?vPlan():vSet();
  document.body.classList.toggle("onset",tab==="set");
  document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("on",b.dataset.tab===tab));
  if(tab==="set"){
    const re=()=>{const y=scrollY;render();scrollTo(0,y)};
    $("fa").onchange=e=>{draft.a=+e.target.value;draft.p1=draft.p2=0;re()};
    $("fb").onchange=e=>{draft.b=+e.target.value;draft.p1=draft.p2=0;re()};
    const upd=()=>{const tmp=document.createElement("div");tmp.innerHTML=vSet();["perp","sumc"].forEach(id=>{const n=tmp.querySelector("#"+id);if(n&&$(id))$(id).replaceWith(n)})};
    $("jn").oninput=e=>{draft.jn=Math.max(0,+e.target.value||0);upd()};
    $("dd").oninput=e=>{draft.d=Math.max(1,Math.min(60,+e.target.value||1));upd()};
    $("nm").oninput=e=>{draft.name=e.target.value};
  }}
function go(t){if(t!=="set"){draft=null;resetArm=false}tab=t;try{localStorage.setItem(KEY+"-tab",t)}catch(e){}render();scrollTo(0,0)}

document.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;const d=b.dataset;
  if(d.tab)go(d.tab);
  else if(d.su){const id=+d.su,k=d.k,on=!dayRec(today())[k].includes(id);mark(k,[id],on);const y=scrollY;render();scrollTo(0,y);
    const x=dayState(today());if(on&&x.tot&&x.done===x.tot)toast("Révision du jour terminée !")}
  else if(d.all){const x=dayState(today());mark(d.all,(d.all==="sj"?x.Js:d.all==="so"?x.Os:x.W).map(y=>y.s.id),d.on==="1");const y=scrollY;render();scrollTo(0,y)}
  else if(d.learn){learn(+d.learn);const y=scrollY;render();scrollTo(0,y)}
  else if(d.off!==undefined){const n=+d.off,i=draft.off.indexOf(n);if(i<0&&draft.off.length>=6){toast("Garde au moins un jour de révision");return}if(i<0)draft.off.push(n);else draft.off.splice(i,1);const y=scrollY;render();scrollTo(0,y)}
  else if(d.read){if(longFired){longFired=false;return}openReader(+d.read,+d.lo)}
  else if(d.rdgo){rdGo(+d.rdgo)}
  else if(d.rdclose!==undefined){closeReader()}
  else if(d.dir){draft.dir=d.dir;const y=scrollY;render();scrollTo(0,y)}
  else if(d.icon){st.cfg.icon=d.icon;if(draft)draft.icon=d.icon;save();applyIcon();const y=scrollY;render();scrollTo(0,y)}
  else if(d.act==="copylink"){const t="https://myhifz.github.io/Myhifz/?icon="+st.cfg.icon;if(navigator.clipboard)navigator.clipboard.writeText(t).then(()=>toast("Lien copié"),()=>toast("Copie le lien à la main"));else toast("Copie le lien à la main")}
  else if(d.themeC){st.cfg.c=d.themeC;draft.c=d.themeC;save();applyTheme();const y=scrollY;render();scrollTo(0,y);toast("Thème "+THEMES[d.themeC].n)}
  else if(d.act==="save"){const old=st.cfg,r=pageRange(draft);draft.p1=r[0];draft.p2=r[1];
    const ch=pageRange(old)+""!==r+""||old.dir!==draft.dir||+old.jn!==+draft.jn||+old.d!==+draft.d||(old.off||[]).slice().sort()+""!==draft.off.slice().sort()+"";
    st.cfg={...draft,c:st.cfg.c,icon:st.cfg.icon};if(ch||!st.cfg.start)st.cfg.start=today();save();draft=null;toast("Programme enregistré");go("home")}
  else if(d.act==="reset"){if(!resetArm){resetArm=true;const y=scrollY;render();scrollTo(0,y);return}
    st={log:{},day:{},weak:[],cfg:{...DEF,c:st.cfg.c,icon:st.cfg.icon}};save();draft=null;resetArm=false;toast("Données effacées");render()}
  else if(d.act==="export"){const txt=JSON.stringify(st),ta=$("expt");ta.value=txt;const fb=()=>{ta.hidden=false;ta.select();toast("Sélectionne et copie le texte")};
    if(navigator.clipboard)navigator.clipboard.writeText(txt).then(()=>toast("Sauvegarde copiée"),fb);else fb()}
  else if(d.act==="showimp"){$("imp").hidden=false}
  else if(d.act==="import"){try{const v=JSON.parse($("impt").value);if(!v.cfg&&!v.s)throw 0;
    st={log:v.log||{},day:v.day||{},weak:v.weak||[],cfg:Object.assign({...DEF},v.cfg||{})};
    if(!st.cfg.a&&v.s){const ids=Object.keys(v.s).map(Number);if(ids.length){st.cfg.a=Math.min(...ids);st.cfg.b=Math.max(...ids)}}
    if(ICONS[URL_ICON])st.cfg.icon=URL_ICON;if(!ICONS[st.cfg.icon])st.cfg.icon="rose";
    save();draft=null;applyTheme();applyIcon();toast("Données restaurées");render()}catch(x){toast("Colle la sauvegarde complète")}}
});
/* Appui long sur le nom d'une sourate : « à renforcer » */
let longT=null,longFired=false,longXY=null;
document.addEventListener("pointerdown",e=>{const b=e.target.closest("[data-read]");if(!b)return;longFired=false;longXY=[e.clientX,e.clientY];
  longT=setTimeout(()=>{longFired=true;const id=+b.dataset.read,i=st.weak.indexOf(id);if(i<0)st.weak.push(id);else st.weak.splice(i,1);save();
    if(navigator.vibrate)navigator.vibrate(15);toast(i<0?S[id-1].t+" : à renforcer":S[id-1].t+" : retirée des sourates à renforcer");const y=scrollY;render();scrollTo(0,y)},550)});
const cancelLong=()=>{clearTimeout(longT);longT=null};
document.addEventListener("pointerup",cancelLong);document.addEventListener("pointercancel",cancelLong);
document.addEventListener("pointermove",e=>{if(longT&&longXY&&Math.hypot(e.clientX-longXY[0],e.clientY-longXY[1])>10)cancelLong()});
document.addEventListener("contextmenu",e=>{if(e.target.closest("[data-read]"))e.preventDefault()});

/* Lecteur façon mushaf : mise en page Madani (15 lignes) avec les polices QCF de chaque page.
   Données : api.quran.com (mots + n° de ligne), polices : verses.quran.foundation. Repli : texte alquran.cloud. */
let rd=null;const qPages={},qFonts={},altCache={};
const AR=n=>String(n).replace(/\d/g,c=>"٠١٢٣٤٥٦٧٨٩"[c]);
const QAPI="https://api.quran.com/api/v4/verses/by_page/",QFONT="https://verses.quran.foundation/fonts/quran/hafs/v2/woff2/p";
function fetchV1(p){if(p<1||p>604)return Promise.resolve([]);if(qPages[p])return qPages[p];
  return qPages[p]=fetch(QAPI+p+"?words=true&word_fields=code_v2,v2_page,line_v2&per_page=50").then(r=>{if(!r.ok)throw 0;return r.json()}).then(j=>j.verses).catch(e=>{delete qPages[p];throw e})}
/* Les mots de la page p (mise en page v2) peuvent venir des pages voisines de l'API */
function pageWords(p){return Promise.all([fetchV1(p-1).catch(()=>[]),fetchV1(p),fetchV1(p+1).catch(()=>[])]).then(all=>{const out=[],seen=new Set();
  all.flat().forEach(v=>v.words.forEach(w=>{if(w.v2_page===p&&!seen.has(w.id)){seen.add(w.id);out.push({w,v})}}));return out})}
function loadFont(p){if(qFonts[p])return qFonts[p];
  const f=new FontFace("qcf"+p,"url("+QFONT+p+".woff2)");return qFonts[p]=f.load().then(ff=>{document.fonts.add(ff);return "qcf"+p}).catch(e=>{delete qFonts[p];throw e})}
function openReader(id,p){rd={id,p:p||S[id-1].p};$("reader").hidden=false;document.body.style.overflow="hidden";drawReader()}
function closeReader(){rd=null;$("reader").hidden=true;document.body.style.overflow=""}
function rdGo(p){if(!rd||p<1||p>604)return;rd.p=p;drawReader();$("rdbody").scrollTop=0}
const JUZ=["","الأول","الثاني","الثالث","الرابع","الخامس","السادس","السابع","الثامن","التاسع","العاشر","الحادي عشر","الثاني عشر","الثالث عشر","الرابع عشر","الخامس عشر","السادس عشر","السابع عشر","الثامن عشر","التاسع عشر","العشرون","الحادي والعشرون","الثاني والعشرون","الثالث والعشرون","الرابع والعشرون","الخامس والعشرون","السادس والعشرون","السابع والعشرون","الثامن والعشرون","التاسع والعشرون","الثلاثون"];
function surahBand(c){return'<div class="mband"><svg viewBox="0 0 300 40" preserveAspectRatio="none"><rect x="1.5" y="1.5" width="297" height="37" rx="8" fill="var(--m-band)" stroke="var(--m-gold)" stroke-width="1.6"/><rect x="6" y="6" width="288" height="28" rx="5" fill="none" stroke="var(--m-gold)" stroke-width=".8"/></svg><span class="mbn">سُورَةُ '+S[c-1].a+'</span><i class="mro r"></i><i class="mro l"></i></div>'}
const BASM='<div class="mbsm">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>';
function drawReader(){const p=rd.p,s=S[rd.id-1];
  $("rdhead").innerHTML='<button class="rdx" data-rdclose aria-label="Fermer"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button><div class="rdt"><b>'+s.t+'</b><span class="num">Page '+p+' sur 604</span></div><span class="ar rda">'+s.a+'</span>';
  $("rdfoot").innerHTML='<button class="btn" data-rdgo="'+(p+1)+'"'+(p>=604?" disabled":"")+'>‹ Page '+(p+1)+'</button><button class="btn" data-rdgo="'+(p-1)+'"'+(p<=1?" disabled":"")+'>Page '+(p-1)+' ›</button>';
  $("rdbody").innerHTML='<div class="mpage"><div class="rdload">Chargement de la page '+p+'…</div></div>';
  Promise.all([pageWords(p),loadFont(p)]).then(([ws,fam])=>{if(!rd||rd.p!==p)return;if(!ws.length)throw 0;
    const lines={};ws.forEach(o=>{(lines[o.w.line_v2]=lines[o.w.line_v2]||[]).push(o)});
    Object.values(lines).forEach(a=>a.sort((x,y)=>x.w.id-y.w.id));
    const first=ws.reduce((m,o)=>o.w.id<m.w.id?o:m),last=ws.reduce((m,o)=>o.w.id>m.w.id?o:m);
    const maxL=p<=2?Math.max(...Object.keys(lines).map(Number)):15;
    let rows="",L=1;
    while(L<=maxL){
      if(lines[L]){rows+='<div class="mline'+(p<=2?" ctr":"")+'" style="font-family:'+fam+'">'+lines[L].map(o=>'<span>'+o.w.code_v2+'</span>').join("")+'</div>';L++;continue}
      let e=L;while(e<=maxL&&!lines[e])e++;const run=e-L;
      let c,startsHere=false;
      if(e<=maxL){const o=lines[e][0];if(o.v.verse_number===1&&o.w.position===1){c=o.v.chapter_id;startsHere=true}}
      if(!c&&e>maxL)c=last.v.chapter_id+1;
      if(c&&c<=114){if(c===1||c===9){rows+=surahBand(c);for(let i=1;i<run;i++)rows+='<div class="mgap"></div>'}
        else if(run>=2){rows+=surahBand(c)+BASM;for(let i=2;i<run;i++)rows+='<div class="mgap"></div>'}
        else rows+=startsHere&&L===1?BASM:surahBand(c)}
      else for(let i=0;i<run;i++)rows+='<div class="mgap"></div>';
      L=e}
    const juz=first.v.juz_number;
    $("rdbody").innerHTML='<div class="mpage"><div class="mtop"><span>'+(juz?"الجزء "+(JUZ[juz]||AR(juz)):"")+'</span><span>سورة '+S[first.v.chapter_id-1].a+'</span></div><div class="mframe"><div class="mlines'+(p<=2?" short":"")+'">'+rows+'</div></div><div class="mnum">'+AR(p)+'</div></div>';
    fitLines()})
  .catch(()=>{if(rd&&rd.p===p)drawFallback(p)})}
/* Taille du texte : la ligne la plus longue occupe toute la largeur du cadre */
function fitLines(){const box=document.querySelector(".mlines");if(!box)return;const ls=[...box.querySelectorAll(".mline")];if(!ls.length)return;
  ls.forEach(l=>{l.style.fontSize="20px";l.style.justifyContent="flex-start"});
  const W=box.clientWidth,max=Math.max(...ls.map(l=>[...l.children].reduce((a,c)=>a+c.getBoundingClientRect().width,0)));
  const rows=box.children.length||15,body=$("rdbody"),avail=body?body.clientHeight-150:9999;
  const fs=Math.max(17,Math.min(44,20*W*0.985/max,avail/(rows*1.8+.4)));
  box.style.setProperty("--mfs",fs+"px");ls.forEach(l=>{l.style.fontSize="";l.style.justifyContent=""})}
addEventListener("resize",()=>{if(rd)fitLines()});
/* Repli si la mise en page mushaf n'est pas disponible */
function drawFallback(p){const get=altCache[p]?Promise.resolve(altCache[p]):fetch("https://api.alquran.cloud/v1/page/"+p+"/quran-uthmani").then(r=>{if(!r.ok)throw 0;return r.json()}).then(j=>(altCache[p]=j.data.ayahs));
  get.then(ay=>{if(!rd||rd.p!==p)return;let h="",open=false;
    ay.forEach(a=>{const sn=a.surah.number;let t=a.text.replace(/^﻿/,"");
      if(a.numberInSurah===1){if(open)h+='</p>';h+=surahBand(sn);
        if(sn!==1&&sn!==9){const w=t.split(" ");if(w[0].indexOf("بِسْمِ")===0||w[0].indexOf("بسم")===0){t=w.slice(4).join(" ");h+=BASM}}
        h+='<p class="qt">';open=true}else if(!open){h+='<p class="qt">';open=true}
      h+=t+' <span class="vn">﴿'+AR(a.numberInSurah)+'﴾</span> '});
    $("rdbody").innerHTML='<div class="mpage"><div class="mframe"><div class="mlines">'+h+(open?'</p>':'')+'</div></div><div class="mnum">'+AR(p)+'</div></div>'})
  .catch(()=>{if(rd&&rd.p===p)$("rdbody").innerHTML='<div class="mpage"><div class="rdload">Impossible de charger la page '+p+'. Vérifie ta connexion : une fois ouverte, la page reste disponible hors connexion.</div></div>'})}
/* Glisser pour tourner la page (vers la droite = page suivante, comme un mushaf) */
let swX=null,swY=null;
document.addEventListener("touchstart",e=>{if(!rd||!e.target.closest("#rdbody"))return;swX=e.touches[0].clientX;swY=e.touches[0].clientY},{passive:true});
document.addEventListener("touchend",e=>{if(!rd||swX===null)return;const dx=e.changedTouches[0].clientX-swX,dy=e.changedTouches[0].clientY-swY;swX=null;
  if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)rdGo(rd.p+(dx>0?1:-1))},{passive:true});

matchMedia("(prefers-color-scheme: dark)").addEventListener("change",applyTheme);
applyTheme();applyIcon();render();
let shownDay=today();
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&today()!==shownDay){shownDay=today();if(tab!=="set")render()}});
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});
