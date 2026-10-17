// Mon Hifz : révision par pages (Mushaf Madani, 604 pages)
const RAW="Al-Fatiha|الفَاتِحَة|1;Al-Baqara|البَقَرَة|2;Al-Imran|آل عِمْرَان|50;An-Nisa|النِّسَاء|77;Al-Ma'ida|المَائِدَة|106;Al-An'am|الأَنْعَام|128;Al-A'raf|الأَعْرَاف|151;Al-Anfal|الأَنْفَال|177;At-Tawba|التَّوْبَة|187;Yunus|يُونُس|208;Hud|هُود|221;Yusuf|يُوسُف|235;Ar-Ra'd|الرَّعْد|249;Ibrahim|إِبْرَاهِيم|255;Al-Hijr|الحِجْر|262;An-Nahl|النَّحْل|267;Al-Isra|الإِسْرَاء|282;Al-Kahf|الكَهْف|293;Maryam|مَرْيَم|305;Ta-Ha|طه|312;Al-Anbiya|الأَنْبِيَاء|322;Al-Hajj|الحَجّ|332;Al-Mu'minun|المُؤْمِنُون|342;An-Nur|النُّور|350;Al-Furqan|الفُرْقَان|359;Ash-Shu'ara|الشُّعَرَاء|367;An-Naml|النَّمْل|377;Al-Qasas|القَصَص|385;Al-Ankabut|العَنْكَبُوت|396;Ar-Rum|الرُّوم|404;Luqman|لُقْمَان|411;As-Sajda|السَّجْدَة|415;Al-Ahzab|الأَحْزَاب|418;Saba|سَبَأ|428;Fatir|فَاطِر|434;Ya-Sin|يس|440;As-Saffat|الصَّافَّات|446;Sad|ص|453;Az-Zumar|الزُّمَر|458;Ghafir|غَافِر|467;Fussilat|فُصِّلَت|477;Ash-Shura|الشُّورَى|483;Az-Zukhruf|الزُّخْرُف|489;Ad-Dukhan|الدُّخَان|496;Al-Jathiya|الجَاثِيَة|499;Al-Ahqaf|الأَحْقَاف|502;Muhammad|مُحَمَّد|507;Al-Fath|الفَتْح|511;Al-Hujurat|الحُجُرَات|515;Qaf|ق|518;Adh-Dhariyat|الذَّارِيَات|520;At-Tur|الطُّور|523;An-Najm|النَّجْم|526;Al-Qamar|القَمَر|528;Ar-Rahman|الرَّحْمَٰن|531;Al-Waqi'a|الوَاقِعَة|534;Al-Hadid|الحَدِيد|537;Al-Mujadila|المُجَادِلَة|542;Al-Hashr|الحَشْر|545;Al-Mumtahana|المُمْتَحَنَة|549;As-Saff|الصَّفّ|551;Al-Jumu'a|الجُمُعَة|553;Al-Munafiqun|المُنَافِقُون|554;At-Taghabun|التَّغَابُن|556;At-Talaq|الطَّلَاق|558;At-Tahrim|التَّحْرِيم|560;Al-Mulk|المُلْك|562;Al-Qalam|القَلَم|564;Al-Haqqa|الحَاقَّة|566;Al-Ma'arij|المَعَارِج|568;Nuh|نُوح|570;Al-Jinn|الجِنّ|572;Al-Muzzammil|المُزَّمِّل|574;Al-Muddaththir|المُدَّثِّر|575;Al-Qiyama|القِيَامَة|577;Al-Insan|الإِنْسَان|578;Al-Mursalat|المُرْسَلَات|580;An-Naba|النَّبَأ|582;An-Nazi'at|النَّازِعَات|583;Abasa|عَبَسَ|585;At-Takwir|التَّكْوِير|586;Al-Infitar|الانْفِطَار|587;Al-Mutaffifin|المُطَفِّفِين|587;Al-Inshiqaq|الانْشِقَاق|589;Al-Buruj|البُرُوج|590;At-Tariq|الطَّارِق|591;Al-A'la|الأَعْلَى|591;Al-Ghashiya|الغَاشِيَة|592;Al-Fajr|الفَجْر|593;Al-Balad|البَلَد|594;Ash-Shams|الشَّمْس|595;Al-Layl|اللَّيْل|595;Ad-Duha|الضُّحَى|596;Ash-Sharh|الشَّرْح|596;At-Tin|التِّين|597;Al-Alaq|العَلَق|597;Al-Qadr|القَدْر|598;Al-Bayyina|البَيِّنَة|598;Az-Zalzala|الزَّلْزَلَة|599;Al-Adiyat|العَادِيَات|599;Al-Qari'a|القَارِعَة|600;At-Takathur|التَّكَاثُر|600;Al-Asr|العَصْر|601;Al-Humaza|الهُمَزَة|601;Al-Fil|الفِيل|601;Quraysh|قُرَيْش|602;Al-Ma'un|المَاعُون|602;Al-Kawthar|الكَوْثَر|602;Al-Kafirun|الكَافِرُون|603;An-Nasr|النَّصْر|603;Al-Masad|المَسَد|603;Al-Ikhlas|الإِخْلَاص|604;Al-Falaq|الفَلَق|604;An-Nas|النَّاس|604";
const S=RAW.split(";").map((x,i)=>{const[t,a,p]=x.split("|");return{id:i+1,t,a,p:+p}});
S.forEach((x,i)=>{x.e=i===113?604:Math.max(x.p,S[i+1].p-1)});
const PAGES=604, PER_HIZB=PAGES/60;
const KEY="murajaa-v1";
const THEMES={vert:{n:"Vert",c:["#1A5C46","#3E9C78"],tc:"#F4F5F1"},rose:{n:"Rose",c:["#B23F6E","#E486AB"],tc:"#FBF6F6"},marine:{n:"Bleu marine",c:["#22436F","#4A74B0"],tc:"#F5F4F1"},jaune:{n:"Jaune",c:["#E0A21A","#F5CB4E"],tc:"#FAF8F1"}};
const DEF={c:"vert",name:"",a:0,b:0,dir:"up",jn:6,d:3,start:"",icon:"rose",p1:0,p2:0,off:[],goal:0,pace:2,hstart:""};

let st={log:{},day:{},weak:[],cfg:{...DEF}}, tab="home", draft=null, resetArm=false;
try{const v=JSON.parse(localStorage.getItem(KEY)||"null");
  if(v){st.bk=v.bk||"";st.bkSnooze=v.bkSnooze||"";st.log=v.log||{};st.day=v.day||{};st.weak=v.weak||[];st.tp=v.tp;st.learned=v.learned||[];st.got=v.got;st.cfg=Object.assign({...DEF},v.cfg||{});
    // Ancienne version (cases par sourate) : on reprend la plage cochée
    if(!st.cfg.a&&v.s){const ids=Object.keys(v.s).map(Number);if(ids.length){st.cfg.a=Math.min(...ids);st.cfg.b=Math.max(...ids)}}}}catch(e){}
// Icône : celle de l'écran d'accueil vient du lien utilisé à l'installation (?icon=N)
const ICONS={vert:"Vert",rose:"Rose",marine:"Bleu marine",jaune:"Jaune"};
const URL_ICON=new URLSearchParams(location.search).get("icon");
const INSTALLED_ICON=ICONS[URL_ICON]?URL_ICON:"rose";
if(ICONS[URL_ICON])st.cfg.icon=URL_ICON;
if(!ICONS[st.cfg.icon])st.cfg.icon="rose";
function applyIcon(){document.querySelectorAll('link[rel="apple-touch-icon"],link[rel="icon"]').forEach(l=>l.href="icons/"+st.cfg.icon+".png")}
const logo=()=>'<div class="logo"><img src="icons/'+st.cfg.icon+'.png" alt=""></div>';
try{const t=localStorage.getItem(KEY+"-tab");if(["home","rev","plan","set"].includes(t))tab=t}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){};if(typeof ghSchedule==="function")ghSchedule()};

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
  const t=today(),before=dayState(t).done;if(!st.day[t]||!st.day[t].sj)st.day[t]={sj:[],so:[],sw:[]};const d=st.day[t];if(!d.sw)d.sw=[];
  ids.forEach(p=>{const i=d[kind].indexOf(p);if(on&&i<0)d[kind].push(p);if(!on&&i>=0)d[kind].splice(i,1)});
  st.log[t]=d.sj.length+d.so.length+d.sw.length; if(!st.log[t])delete st.log[t];
  const x=dayState(t);d.full=!!(x.tot&&x.done>=x.tot);st.tp=Math.max(0,(st.tp||0)+x.done-before);
  Object.keys(st.day).forEach(k=>{if(diff(t,k)>40)delete st.day[k]});
  save();checkBadges()}

function streak(){let n=0,d=today(),g=0;if(!st.log[d])d=addDays(d,-1);
  while((st.log[d]||isOff(d))&&g++<3000){if(st.log[d])n++;d=addDays(d,-1)}return n}
function record(){const ks=Object.keys(st.log).filter(k=>st.log[k]).sort();if(!ks.length)return 0;
  let best=0,cur=0,d=ks[0],g=0;while(d<=today()&&g++<3000){if(st.log[d]){cur++;best=Math.max(best,cur)}else if(!isOff(d))cur=0;d=addDays(d,1)}return best}
function applyTheme(){const c=THEMES[st.cfg.c]?st.cfg.c:"vert";document.documentElement.dataset.c=c;
  const dark=matchMedia("(prefers-color-scheme: dark)").matches;$("tc").content=dark?getComputedStyle(document.documentElement).getPropertyValue("--paper").trim():THEMES[c].tc}
function toast(m){const t=$("toast");t.textContent=m;t.hidden=false;clearTimeout(toast.h);toast.h=setTimeout(()=>t.hidden=true,1900)}

/* Icônes : style « duotone » (trait + aplat léger), toutes dessinées sur la même grille */
const D=(s,p,f)=>'<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+(f?'<g class="duo-f" fill="currentColor" stroke="none" opacity=".22">'+f+'</g>':'')+p+'</svg>';
const P={
 star:'<path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8L3.6 9.6l5.8-.8z"/>',
 book:'<path d="M12 6.5C10 5 7 4.6 3.5 5.2v13c3.5-.6 6.5-.2 8.5 1.3 2-1.5 5-1.9 8.5-1.3v-13C17 4.6 14 5 12 6.5z"/>',
 flag:'<path d="M5.5 21V4.5m0 0h11.2l-2 4 2 4H5.5"/>',
 moon:'<path d="M19.5 14.2A8 8 0 0 1 9.8 4.5a8 8 0 1 0 9.7 9.7z"/>',
 cloud:'<path d="M7 18.5h10a4 4 0 0 0 .6-8 5.8 5.8 0 0 0-11.2 1.2A3.4 3.4 0 0 0 7 18.5z"/>',
 drop:'<path d="M12 3.2c3 4 6 7 6 10.6a6 6 0 0 1-12 0C6 10.2 9 7.2 12 3.2z"/>'
};
const I={
 flame:'<svg viewBox="0 0 24 24"><defs><linearGradient id="fg" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#E8432E"/><stop offset="1" stop-color="#FFA92E"/></linearGradient></defs><path fill="url(#fg)" d="M12 2c1 3.5 5 5.6 5 10.5A5.2 5.2 0 0 1 12 18a5.2 5.2 0 0 1-5-5.5c0-2.3 1.2-3.8 2.4-5 .1 1.6.8 2.7 1.8 3.3C11 7.9 11.4 4.6 12 2z"/><path fill="#FFD36E" d="M12 11c.6 1.5 2.3 2.4 2.3 4.4A2.3 2.3 0 0 1 12 18a2.3 2.3 0 0 1-2.3-2.6c0-1.3.7-2 1.3-2.6.1.7.4 1.1.8 1.3-.1-1.1.1-2.3.2-3.1z"/></svg>',
 drop:D(24,P.drop,P.drop.replace('<path','<path')),
 star:D(26,P.star,P.star),
 spark:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2.5l1.9 5.3 5.3 1.9-5.3 1.9L11 16.9l-1.9-5.3-5.3-1.9 5.3-1.9z"/><path d="M18.5 13.5l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9z" opacity=".75"/></svg>',
 repeat:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3l3 3-3 3"/><path d="M4 11.5V10a4 4 0 0 1 4-4h12"/><path d="M7 21l-3-3 3-3"/><path d="M20 12.5V14a4 4 0 0 1-4 4H4"/></svg>',
 stack:D(22,'<path d="M12 3.5l8.5 4.3L12 12 3.5 7.8z"/><path d="M3.5 12.2L12 16.5l8.5-4.3"/><path d="M3.5 16.4L12 20.7l8.5-4.3"/>','<path d="M12 3.5l8.5 4.3L12 12 3.5 7.8z"/>'),
 chart:D(20,'<path d="M4 20h16"/><rect x="5.5" y="11" width="3" height="6.5" rx="1"/><rect x="10.5" y="6" width="3" height="11.5" rx="1"/><rect x="15.5" y="13.5" width="3" height="4" rx="1"/>','<rect x="5.5" y="11" width="3" height="6.5" rx="1"/><rect x="10.5" y="6" width="3" height="11.5" rx="1"/><rect x="15.5" y="13.5" width="3" height="4" rx="1"/>'),
 book:D(24,P.book+'<path d="M12 6.5v13"/>',P.book),
 dir:D(24,'<path d="M8 4v16M4.5 16.5L8 20l3.5-3.5M16 20V4M12.5 7.5L16 4l3.5 3.5"/>'),
 loop:D(24,'<path d="M19.5 9A8 8 0 0 0 5.2 7.6M4.5 15a8 8 0 0 0 14.3 1.4"/><path d="M5 3.8v4h4M19 20.2v-4h-4"/>','<circle cx="12" cy="12" r="4.2"/>'),
 calc:D(20,'<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M8.5 7.5h7M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01"/>','<rect x="5" y="3" width="14" height="18" rx="3"/>'),
 doc:D(20,'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>','<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/>'),
 chev:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 9.5l5.5 5.5 5.5-5.5"/></svg>',
 save:D(22,'<path d="M20 6.5L9.5 17 4 11.5"/>'),
 trash:D(20,'<path d="M4 7h16M9.5 7V4.5h5V7M6.5 7l.9 12.2a2 2 0 0 0 2 1.8h5.2a2 2 0 0 0 2-1.8L17.5 7"/><path d="M10.2 11v6M13.8 11v6"/>','<path d="M6.5 7l.9 12.2a2 2 0 0 0 2 1.8h5.2a2 2 0 0 0 2-1.8L17.5 7z"/>'),
 palette:D(24,'<path d="M12 3a9 9 0 0 0 0 18c1.3 0 1.9-1 1.4-2.1-.6-1.2.2-2.4 1.5-2.4H17a4 4 0 0 0 4-4C21 7 17 3 12 3z"/><circle cx="7.6" cy="11.2" r="1.1"/><circle cx="10.2" cy="7.4" r="1.1"/><circle cx="14.6" cy="7.4" r="1.1"/>','<path d="M12 3a9 9 0 0 0 0 18c1.3 0 1.9-1 1.4-2.1-.6-1.2.2-2.4 1.5-2.4H17a4 4 0 0 0 4-4C21 7 17 3 12 3z"/>'),
 user:D(24,'<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c1.4-3.7 4.2-5.5 7.5-5.5s6.1 1.8 7.5 5.5"/>','<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c1.4-3.7 4.2-5.5 7.5-5.5s6.1 1.8 7.5 5.5z"/>'),
 cloud:D(24,P.cloud+'<path d="M12 10.5v5M9.8 13.4L12 15.6l2.2-2.2"/>',P.cloud),
 moon:D(24,P.moon,P.moon),
 plus:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
 flag:D(20,P.flag,'<path d="M5.5 4.5h11.2l-2 4 2 4H5.5z"/>'),
 next:'<svg class="chv" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
 prev:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
 medal:D(24,'<circle cx="12" cy="14" r="6"/><path d="M8.5 9.2L6 3h4l2 4 2-4h4l-2.5 6.2"/><path d="M12 11.4l.8 1.6 1.7.2-1.3 1.2.3 1.7-1.5-.8-1.5.8.3-1.7-1.3-1.2 1.7-.2z" fill="currentColor" stroke="none"/>','<circle cx="12" cy="14" r="6"/>'),
 lock:D(22,'<rect x="5" y="10.5" width="14" height="10" rx="3"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>','<rect x="5" y="10.5" width="14" height="10" rx="3"/>'),
 cam:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.7l1.3-2h5l1.3 2h1.7A2.5 2.5 0 0 1 20 8.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5z"/><circle cx="12" cy="12.5" r="3.3"/></svg>',
 git:D(24,'<circle cx="6" cy="6" r="2.2"/><circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="9" r="2.2"/><path d="M6 8.2v7.6M18 11.2c0 3.5-3.5 4.3-9.8 5.6"/>'),
 check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>'
};


function learn(delta){
  const r=pageRange(st.cfg);if(!r)return;let[p1,p2]=r;
  if(st.cfg.dir==="up"){p1=Math.min(Math.max(1,p1-delta),p2)}else{p2=Math.max(Math.min(604,p2+delta),p1)}
  if(p1===r[0]&&p2===r[1]){toast(delta>0?"Tu es déjà à la fin du Mushaf":"Il faut garder au moins une page");return}
  st.cfg.p1=p1;st.cfg.p2=p2;st.cfg.a=onPage(p1)[0].id;st.cfg.b=onPage(p2).slice(-1)[0].id;
  st.learned=(st.learned||[]).concat({d:today(),n:delta>0?1:-1}).slice(-400);save();checkBadges();
  const np=st.cfg.dir==="up"?p1:p2;
  toast(delta>0?"Page "+np+" ajoutée · "+onPage(np).map(s=>s.t).join(", "):"Dernière page retirée")}
function needSetup(){return'<div class="card empty"><div class="ar">بسم الله</div><p>Indique dans Réglages les sourates que tu connais et ton rythme de révision.</p><div class="chips" style="justify-content:center;margin-top:16px"><button class="btn pri" data-tab="set">Configurer mon programme</button></div></div>'}

/* Accueil : tableau de bord du jour */
const DOW=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];
function firstDay(){const ks=Object.keys(st.log).sort();const c=[st.cfg.start,ks[0]].filter(Boolean).sort();return c[0]||today()}
function dayStatus(d){const r=st.day[d];if(r&&r.full)return"full";if(st.log[d])return"part";if(isOff(d))return"off";if(d<firstDay())return"none";return d<today()?"miss":"todo"}
function weekStrip(){let h='<div class="wk">';const t=today(),dow=(new Date(t+"T12:00").getDay()+6)%7;
  for(let i=0;i<7;i++){const d=addDays(t,i-dow),s=d>t?"future":dayStatus(d);
    h+='<div class="wd '+s+(d===t?" now":"")+'"><span>'+DOW[new Date(d+"T12:00").getDay()].charAt(0)+'</span><i>'+(s==="full"?I.check:s==="off"?"–":"")+'</i></div>'}
  return h+'</div>'}
function goalLine(){const g=goalInfo();if(!g)return"";return'<button class="gline" data-goal>'+I.flag+'<span>'+(g.done?"Objectif "+S[g.g-1].t+" atteint !":"Objectif "+S[g.g-1].t+" · "+g.rem+" p. · vers le "+new Date(g.eta+"T12:00").toLocaleDateString("fr-BE",{day:"numeric",month:"short"}))+'</span>'+I.next+'</button>'}
const GEO='<svg class="geo" aria-hidden="true"><defs><pattern id="g8" width="56" height="56" patternUnits="userSpaceOnUse"><g fill="none" stroke="currentColor" stroke-width="1.1"><rect x="16" y="16" width="24" height="24"/><rect x="16" y="16" width="24" height="24" transform="rotate(45 28 28)"/><circle cx="28" cy="28" r="5"/><path d="M0 0l8 8M56 0l-8 8M0 56l8-8M56 56l-8-8"/></g></pattern></defs><rect width="200%" height="200%" fill="url(#g8)"/></svg>';
/* Animations de l'accueil : valeurs précédentes pour animer seulement ce qui change */
let prevPct=null,prevSk=null,prevMem=null,homeShown=false;
function animateHome(){
  const red=matchMedia("(prefers-reduced-motion: reduce)").matches,app=$("app");
  if(!homeShown&&!red)app.classList.add("cascade");homeShown=true;setTimeout(()=>app.classList.remove("cascade"),1400);
  /* 2. cercle et chiffres */
  const ring=document.querySelector(".tring circle.arc"),num=document.querySelector(".tring b");
  if(ring&&num){const to=+ring.dataset.pct,from=prevPct===null?0:prevPct,C=+ring.dataset.c;
    if(!red&&from!==to){ring.style.transition="none";ring.style.strokeDashoffset=C*(1-from/100);ring.getBoundingClientRect();
      ring.style.transition="stroke-dashoffset .9s cubic-bezier(.3,.7,.2,1)";ring.style.strokeDashoffset=C*(1-to/100);
      const t0=performance.now(),step=n=>{const k=Math.min(1,(n-t0)/900),e=1-Math.pow(1-k,3);num.textContent=Math.round(from+(to-from)*e)+"%";if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step)}
    prevPct=to}
  const done=document.querySelector(".tdone");if(done){if(prevPct!==null&&prevPct<100&&!red)done.classList.add("burst");prevPct=100}
  /* barres : se remplissent depuis zéro */
  if(!red)document.querySelectorAll(".dtb i,.memo2 .prog i").forEach(b=>{const w=b.style.width;b.style.transition="none";b.style.width="0";b.getBoundingClientRect();b.style.transition="width .9s cubic-bezier(.3,.7,.2,1) .15s";b.style.width=w});
  /* 4. série qui augmente */
  const sk=document.querySelector(".stk");if(sk){const v=+sk.dataset.v;if(prevSk!==null&&v>prevSk&&!red)sk.classList.add("up");prevSk=v}}
function vHome(){
  const name=st.cfg.name.trim(),x=dayState(today());
  const sk=streak();
  let h='<div class="hd"><div class="hdt">'+(name?'<span class="hs">Salam Aleykoum</span><h1>'+esc(name)+'</h1>':'<h1>Salam Aleykoum</h1>')+'<span class="hdate">'+fmtDay(today())+'</span></div>'
   +'<div class="stk'+(sk?"":" zero")+'" data-v="'+sk+'">'+I.flame+'<b class="num">'+sk+'</b><span>jour'+(sk>1?"s":"")+'</span></div></div>';
  if(!x.pr)return h+needSetup();
  if(needBackup()){const a=bkAge();h+='<div class="bkban">'+I.cloud+'<div><b>Pense à sauvegarder</b><span>'+(a===null?"Tu n\'as encore jamais sauvegardé.":"Dernière sauvegarde il y a "+a+" jours.")+'</span></div><button class="btn pri" data-act="savefile">Sauvegarder</button><button class="bkx" data-act="later" aria-label="Plus tard">×</button></div>'}
  const left=x.tot-x.done,pct=x.tot?Math.round(x.done/x.tot*100):100,R=34,C=2*Math.PI*R;
  /* 1. Aujourd'hui */
  if(x.off)h+='<div class="today off">'+GEO+'<div class="tring"><span class="moon">'+I.moon+'</span></div><div class="tt"><b>Jour off</b><span>Pas de mémorisation ni de révision aujourd\'hui. Repose-toi bien.</span></div></div>';
  else h+='<div class="today">'+GEO+'<div class="tring">'+(pct>=100?'<span class="tdone">'+I.check+'</span>':'<svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="'+R+'" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-width="7"/><circle class="arc" data-pct="'+pct+'" data-c="'+C+'" cx="40" cy="40" r="'+R+'" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-dasharray="'+C+'" stroke-dashoffset="'+(C*(1-pct/100))+'" transform="rotate(-90 40 40)"/></svg><b class="num">'+pct+'%</b>')+'</div>'
    +'<div class="tt"><b>'+(left?"Révision du jour":"Révision terminée")+'</b><span class="num">'+(left?x.done+" / "+x.tot+" pages · il en reste "+left:"Bravo, tes "+x.tot+" pages sont révisées")+'</span>'
    +'<button class="tgo" data-tab="rev">'+(left?(x.done?"Continuer":"Commencer")+I.next:"Revoir"+I.next)+'</button></div></div>';
  /* 2. Programme du jour */
  if(!x.off){const tp=(a,b)=>b?Math.round(a/b*100):100;
    const tile=(cls,icon,t,pages,dn)=>'<button class="dt '+cls+'" data-goto="'+(cls==="n"?"sj":"so")+'"><div class="dth"><span class="dti">'+icon+'</span><b>'+t+'</b></div><div class="dtr num">'+(pages.length?(pages.length>1?"p. "+Math.min(...pages)+"–"+Math.max(...pages):"p. "+pages[0]):"Rien aujourd'hui")+'</div><div class="dtb"><i style="width:'+tp(dn,pages.length)+'%"></i></div><div class="dtn num">'+dn+'/'+pages.length+' pages</div></button>';
    h+='<div class="sect">Programme du jour</div><div class="duo">'+tile("n",I.spark,"Hifdh al-Jadid",x.J,x.jd)+tile("o",I.repeat,"Hifdh",x.O,x.od)+'</div>';
    if(x.W.length){const n=x.W.filter(y=>x.d.sw.includes(y.s.id)).length;h+='<button class="weakchip" data-goto="sw">'+I.flag+'<span>À renforcer</span><b class="num">'+n+'/'+x.W.length+'</b>'+I.next+'</button>'}}
  /* 3. Mémorisation */
  const pr=x.pr,cp=pr.total/PAGES*100,np=st.cfg.dir==="up"?pr.p1-1:pr.p2+1,nxt=np>=1&&np<=604?onPage(np):[];
  h+='<div class="sect">Mémorisation</div><div class="card memo2"><div class="mtop2"><div><b class="num">'+cp.toFixed(1)+'<small>%</small></b><span>du Coran mémorisé</span></div><div class="mstat num"><b>'+pr.total+'</b> pages<br><b>'+hizb(pr.total)+'</b> hizb</div></div><div class="prog"><i style="width:'+Math.max(cp,1)+'%"></i></div>'+goalLine()
   +(nxt.length?'<div class="mnext"><div><span>Prochaine page</span><b class="num">'+np+' · '+nxt.map(s=>s.t).join(", ")+'</b></div><button class="ghost" data-learn="-1" aria-label="Retirer la dernière page">−</button><button class="plusb" data-learn="1" aria-label="J\'ai appris une nouvelle page">'+I.plus+'</button></div>':'<p class="note">Tu as atteint la fin du Mushaf. Toutes les pages sont mémorisées.</p>')+'</div>';
  /* 4. Cette semaine */
  h+='<div class="sect">Cette semaine</div><div class="card week">'+weekStrip()+'<div class="wkst"><div><b class="num">'+streak()+'</b><span>jours de série</span></div><div><b class="num">'+record()+'</b><span>record</span></div></div></div>';
  return h}

function block(kind,title,tag,pages,list,doneIds,pr,cls){
  if(!pages.length)return'<div class="card"><div class="bh"><div class="ctitle">'+title+'</div><span class="tag">'+tag+'</span></div><p class="note" style="margin:8px 0 0">Rien pour aujourd\'hui.</p></div>';
  const n=list.filter(x=>doneIds.includes(x.s.id)).length,all=n===list.length;
  return'<div class="card blk '+cls+'" id="blk-'+kind+'"><div class="bh"><div class="ctitle">'+title+'</div><span class="tag">'+tag+'</span></div><div class="rng num">'+(pages.length>1?"Pages "+Math.min(...pages)+" → "+Math.max(...pages):"Page "+pages[0])+' · '+pages.length+' page'+(pages.length>1?"s":"")+'</div><div class="sus">'+list.map(x=>{const on=doneIds.includes(x.s.id),part=x.lo!==x.s.p||x.hi!==x.s.e;
    return suRow(x,kind,on,part)}).join("")+'</div><div class="bf"><span class="note num">'+n+'/'+list.length+' sourate'+(list.length>1?"s":"")+'</span><button class="btn '+(all?"":"pri")+'" data-all="'+kind+'" data-on="'+(all?0:1)+'">'+(all?"Annuler":"Tout marquer comme fait")+'</button></div></div>'}

function suRow(x,kind,on,part){const w=st.weak.includes(x.s.id);
  return'<div class="su '+(on?"on":"")+(w?" weak":"")+'"><button class="sc" data-su="'+x.s.id+'" data-k="'+kind+'" aria-label="Cocher '+x.s.t+'">'+(on?I.check:"")+'</button><button class="sb" data-read="'+x.s.id+'" data-lo="'+x.lo+'"><span class="sn"><b>'+x.s.t+'</b><span class="num">'+(x.lo===x.hi?"p. "+x.lo:"p. "+x.lo+"–"+x.hi)+(part?" · partie":"")+(w?' · <em>à renforcer</em>':"")+'</span></span><span class="ar">'+x.s.a+'</span></button></div>'}
function weakBlock(x){if(!x.W.length)return"";const ids=x.d.sw,n=x.W.filter(y=>ids.includes(y.s.id)).length,all=n===x.W.length;
  return'<div class="card blk w" id="blk-sw"><div class="bh"><div class="ctitle">'+I.flag+'À renforcer</div><span class="tag">Chaque jour</span></div><div class="rng">Les sourates que tu as marquées comme difficiles.</div><div class="sus">'+x.W.map(y=>suRow(y,"sw",ids.includes(y.s.id),false)).join("")+'</div><div class="bf"><span class="note num">'+n+'/'+x.W.length+'</span><button class="btn '+(all?"":"pri")+'" data-all="sw" data-on="'+(all?0:1)+'">'+(all?"Annuler":"Tout marquer comme fait")+'</button></div></div>'}
function vRev(){
  const x=dayState(today());
  let h='<div><h1>Révision</h1><div class="sub">'+fmtDay(today())+'</div></div>';
  if(!x.pr)return h+needSetup();
  if(x.off)return h+'<div class="card empty"><div class="ar">راحة</div><p>Jour off : rien à mémoriser ni à réviser aujourd\'hui.</p></div>';
  if(x.tot&&x.done===x.tot){let nd=addDays(today(),1),g=0;while(isOff(nd)&&g++<7)nd=addDays(nd,1);const nO=janbFor(x.pr,nd);
    h+='<div class="fin"><div class="fbadge">'+I.check+'</div><h2>Révision du jour terminée</h2><p>Qu\'Allah la fasse fructifier dans ton cœur.</p>'
     +'<div class="fst"><div><b class="num">'+x.tot+'</b><span>pages</span></div><div><b class="num">'+(new Set(x.Js.concat(x.Os).map(y=>y.s.id))).size+'</b><span>sourates</span></div><div><b class="num">'+streak()+'</b><span>jours de suite</span></div></div>'
     +(nO.length?'<div class="fnext">'+(diff(nd,today())===1?"Demain":fmtDay(nd).split(" ")[0])+' · Hifdh p. '+Math.min(...nO)+'–'+Math.max(...nO)+'</div>':'')+'</div>'}
  h+=block("sj","Hifdh al-Jadid","Chaque jour",x.J,x.Js,x.d.sj,x.pr,"n");
  h+=block("so","Hifdh","Cycle de "+x.pr.d+" j",x.O,x.Os,x.d.so,x.pr,"o");
  h+=weakBlock(x);
  return h+'<p class="note">Touche la case quand tu as récité. Touche le nom pour lire la page. Appui long sur le nom : « à renforcer ».</p>'}

/* Planning : choisir un jour et voir son programme */
let planSel=null;
function vPlan(){
  const pr=program(st.cfg),t=today();
  let h='<div><h1>Planning</h1><div class="sub">Ton programme jour par jour</div></div>';
  if(!pr)return h+needSetup();
  if(!planSel||planSel<t)planSel=t;
  const n=Math.max(14,pr.d);
  h+='<div class="days2">';
  for(let i=0;i<n;i++){const d=addDays(t,i),dt=new Date(d+"T12:00"),s=dayStatus(d);
    h+='<button class="dc'+(d===planSel?" on":"")+(isOff(d)?" off":"")+'" data-pday="'+d+'"><span>'+(i===0?"Auj.":DOW[dt.getDay()])+'</span><b class="num">'+dt.getDate()+'</b><i class="'+(s==="full"?"ok":isOff(d)?"":"dot")+'"></i></button>'}
  h+='</div>';
  const d=planSel,off=isOff(d),O=janbFor(pr,d),J=off?[]:pr.jadid,dd=dayRec(d);
  h+='<div class="card dayd"><div class="ddh"><b>'+(d===t?"Aujourd'hui":fmtDay(d))+'</b>'+(off?'<span class="tag">Jour off</span>':'<span class="tag num">'+(J.length+O.length)+' pages</span>')+'</div>';
  if(off)h+='<p class="note">Pas de mémorisation ni de révision ce jour-là.</p>';
  else{const part=(cls,t2,pages,kind)=>{const L=surahsFor(pages,pr);return'<div class="dpart '+cls+'"><div class="dpt"><span class="bar2"></span><b>'+t2+'</b><span class="num">'+(pages.length?(pages.length>1?"p. "+Math.min(...pages)+"–"+Math.max(...pages):"p. "+pages[0]):"—")+'</span></div><div class="chips2">'+(L.length?L.map(y=>'<span class="'+(dd[kind].includes(y.s.id)?"done":"")+'">'+y.s.t+'</span>').join(""):'<span class="none">Rien</span>')+'</div></div>'};
    h+=part("n","Hifdh al-Jadid",J,"sj")+part("o","Hifdh",O,"so");
    if(d===t)h+='<button class="btn pri wide" data-tab="rev">Ouvrir la révision du jour</button>'}
  h+='</div>';
  /* Cycle de Hifdh */
  if(pr.old.length){const i=((workIndex(t)%pr.d)+pr.d)%pr.d;
    h+='<div class="sect">Cycle de Hifdh</div><div class="card cyc"><div class="cyh"><b>Jour '+(i+1)+' sur '+pr.d+'</b><span class="num">~'+pr.k+' pages par jour</span></div><div class="cyb">';
    for(let k=0;k<pr.d;k++)h+='<i class="'+(k<i?"past":k===i?"cur":"")+'"></i>';
    h+='</div><p class="note">Tout ce que tu connais (hors Hifdh al-Jadid) est révisé en '+pr.d+' jours'+((st.cfg.off||[]).length?', sans compter les jours off':'')+'.</p></div>'}
  /* 30 derniers jours */
  let cells="";for(let i=29;i>=0;i--){const d2=addDays(t,-i),s=dayStatus(d2);cells+='<i class="'+(s==="full"?"l2":s==="part"?"l1":s==="off"?"off":"")+'"></i>'}
  h+='<div class="sect">30 derniers jours</div><div class="card"><div class="heat">'+cells+'</div><div class="lgd"><span><i class="l2"></i>Complet</span><span><i class="l1"></i>Commencé</span><span><i class="off"></i>Jour off</span></div></div>';
  return h}

function sel(id,val){
  const s=S[(val||1)-1];
  return'<label class="pick"><span class="pn num">'+s.id+'.</span><span class="pt"><b>'+s.t+'</b><span class="ar">'+s.a+'</span></span>'+I.chev+'<select id="'+id+'" aria-label="Sourate">'+S.map(x=>'<option value="'+x.id+'"'+(x.id===s.id?" selected":"")+'>'+x.id+'. '+x.t+'</option>').join("")+'</select></label>'}
function head(icon,t,s,soft){return'<div class="sh"><div class="si'+(soft?" s2":"")+'">'+icon+'</div><div><div class="st">'+t+'</div><div class="ss">'+s+'</div></div></div>'}

/* Réglages : une liste courte, chaque ligne ouvre sa page */
const DAYS=[[1,"Lun"],[2,"Mar"],[3,"Mer"],[4,"Jeu"],[5,"Ven"],[6,"Sam"],[0,"Dim"]];
let sub=null;
function initDraft(){draft={...st.cfg,a:st.cfg.a||78,b:st.cfg.b||114,off:(st.cfg.off||[]).slice()}}
function progKey(c){return[pageRange(c)+"",c.dir,+c.jn,+c.d,(c.off||[]).slice().sort()+""].join("|")}
const dirty=()=>!!draft&&(progKey(draft)!==progKey(st.cfg)||!st.cfg.start);
function setRow(id,icon,title,val,soft){return'<button class="srw" data-sub="'+id+'"><span class="si sm'+(soft?" s2":"")+(id==="profile"&&st.cfg.photo?" ph":"")+'">'+(id==="profile"&&st.cfg.photo?'<img src="'+st.cfg.photo+'" alt="">':icon)+'</span><span class="srt">'+title+(val?'<span class="srv">'+val+'</span>':'')+'</span>'+I.next+'</button>'}
function subHead(t,s){return'<div class="subh"><button class="back" data-sub="">'+I.prev+'Réglages</button><h1>'+t+'</h1>'+(s?'<div class="sub">'+s+'</div>':'')+'</div>'}
function saveBar(){return'<div class="savebar" id="savebar"'+(dirty()?"":" hidden")+'><button class="savebtn" data-act="save">'+I.save+'Sauvegarder</button></div>'}
/* Moi : chiffres, objectif, jalons, date de début */
function pace28(){const t=today();return Math.max(0,(st.learned||[]).filter(e=>diff(t,e.d)<28).reduce((a,e)=>a+e.n,0))/4}
function goalInfo(){const pr=program(st.cfg),g=+st.cfg.goal;if(!pr||!g)return null;
  const up=st.cfg.dir==="up",tp=up?S[g-1].p:S[g-1].e,rem=up?pr.p1-tp:tp-pr.p2,pace=Math.max(.25,+st.cfg.pace||2);
  if(rem<=0)return{g,rem:0,done:true};
  const eta=addDays(today(),Math.ceil(rem/pace*7)),act=pace28();
  return{g,rem,pace,eta,act,ahead:act>=pace}}
const fmtShort=d=>new Date(d+"T12:00").toLocaleDateString("fr-BE",{day:"numeric",month:"long",year:"numeric"});
function since(d){const n=diff(today(),d);if(n<1)return"aujourd'hui";if(n<31)return n+" jour"+(n>1?"s":"");const m=Math.floor(n/30.4);if(m<12)return m+" mois";const y=Math.floor(m/12),r=m%12;return y+" an"+(y>1?"s":"")+(r?" et "+r+" mois":"")}
function badges(){const pr=program(st.cfg),mem=pr?pr.total:0,rec=record(),tp=Math.round(st.tp||0);
  const amma=pr?Math.max(0,Math.min(pr.p2,604)-Math.max(pr.p1,582)+1):0;
  const B=[["first","Premier pas","Une première révision",tp,1],["hizb","Premier hizb","10 pages mémorisées",mem,10],["juz","Premier juz","20 pages mémorisées",mem,20],["amma","Juz 'Amma","Pages 582 à 604",amma,23],
    ["juz5","5 juz","100 pages mémorisées",mem,100],["moitie","Moitié du Coran","302 pages",mem,302],["hafidh","Hafidh","Les 604 pages",mem,604],
    ["s7","7 jours de suite","Série de 7 jours",rec,7],["s30","30 jours de suite","Série de 30 jours",rec,30],["s100","100 jours de suite","Série de 100 jours",rec,100],
    ["r100","100 pages révisées","Depuis le début",tp,100],["r1000","1 000 pages révisées","Depuis le début",tp,1000]];
  return B.map(([id,t,d,v,n])=>({id,t,d,v:Math.min(v,n),n,ok:v>=n}))}
function checkBadges(silent){const ok=badges().filter(b=>b.ok).map(b=>b.id);if(!st.got){st.got=ok;save();return}
  const nw=ok.filter(i=>!st.got.includes(i));if(nw.length){st.got=st.got.concat(nw);save();if(!silent){const b=badges().find(x=>x.id===nw[0]);setTimeout(()=>toast("Nouveau jalon : "+b.t+" !"),400)}}}
function vMoi(){
  const c=st.cfg,pr=program(c),name=c.name.trim(),hs=c.hstart||firstDay(),bs=badges(),nOk=bs.filter(b=>b.ok).length;
  let h=subHead("Moi");
  h+='<div class="card me"><label class="av'+(c.photo?" ph":"")+'" aria-label="Changer la photo de profil">'+(c.photo?'<img src="'+c.photo+'" alt="">':(name?esc(name.charAt(0).toUpperCase()):I.user))+'<span class="avcam">'+I.cam+'</span><input type="file" id="photo" accept="image/*" class="vh"></label>'+(c.photo?'<button class="linkb" data-act="nophoto">Retirer la photo</button>':'<span class="note">Touche le rond pour ajouter une photo</span>')+'</div><div class="card me2"><input class="field" id="nm" type="text" maxlength="24" autocomplete="given-name" placeholder="Ton prénom" value="'+esc(c.name)+'"><div class="note" style="text-align:center">En hifdh depuis '+since(hs)+(pr?' · '+pr.total+' pages mémorisées':'')+'</div></div>';
  /* Mes chiffres */
  h+='<div class="sect">Mes chiffres</div><div class="kp"><div class="card"><b class="num">'+Math.round(st.tp||0)+'</b><span>pages révisées</span></div><div class="card"><b class="num">'+Object.keys(st.log).length+'</b><span>jours actifs</span></div><div class="card"><b class="num">'+record()+'</b><span>meilleure série</span></div><div class="card"><b class="num">'+pace28().toFixed(1).replace(".",",").replace(",0","")+'</b><span>pages apprises / semaine</span></div></div>';
  /* Mon objectif */
  const gi=goalInfo(),up=c.dir==="up";
  const opts=pr?S.filter(s=>(up?s.id<pr.a:s.id>pr.b)||s.id===+c.goal):[];if(up)opts.reverse();
  h+='<div class="sect">Mon objectif</div><div class="card goal">';
  if(!pr)h+='<p class="note">Configure d\'abord ton programme.</p>';
  else{h+='<div class="fl">Mémoriser jusqu\'à</div><label class="pick"><span class="pt"><b>'+(c.goal&&S[c.goal-1]?S[c.goal-1].t:"Aucun objectif")+'</b>'+(c.goal&&S[c.goal-1]?'<span class="ar">'+S[c.goal-1].a+'</span>':'')+'</span>'+I.chev+'<select id="gsel" aria-label="Objectif"><option value="0">Aucun objectif</option>'+opts.map(s=>'<option value="'+s.id+'"'+(+c.goal===s.id?" selected":"")+'>'+s.id+'. '+s.t+'</option>').join("")+'</select></label>'
    +'<div class="fl">Mon rythme visé</div><label class="numf"><input id="gpace" type="text" inputmode="decimal" value="'+String(c.pace||2).replace(".",",")+'"><span>pages / semaine</span></label>';
    if(gi&&gi.done)h+='<div class="gres ok">'+I.check+'<span>Objectif atteint ! Choisis le suivant.</span></div>';
    else if(gi)h+='<div class="gres"><div class="gbig"><b class="num">'+gi.rem+'</b> pages restantes</div><div>Arrivée prévue vers le <b>'+fmtShort(gi.eta)+'</b></div><div class="gst '+(gi.act===0?"":gi.ahead?"up":"down")+'">'+(gi.act===0?"Ajoute tes nouvelles pages avec le bouton + de l'accueil pour suivre ton rythme.":gi.ahead?"Dans les temps : tu apprends "+gi.act.toFixed(1).replace(".",",")+" p./semaine.":"Un peu en retard : tu apprends "+gi.act.toFixed(1).replace(".",",")+" p./semaine.")+'</div></div>'}
  h+='</div>';
  /* Mes jalons */
  h+='<div class="sect">Mes jalons · '+nOk+'/'+bs.length+'</div><div class="bdg">'+bs.map(b=>'<div class="bd'+(b.ok?" ok":"")+'"><div class="bdi">'+(b.ok?I.medal:I.lock)+'</div><b>'+b.t+'</b><span>'+(b.ok?b.d:b.v+" / "+b.n)+'</span>'+(b.ok?'':'<i><u style="width:'+Math.round(b.v/b.n*100)+'%"></u></i>')+'</div>').join("")+'</div>';
  /* Date de début */
  h+='<div class="sect">Mon parcours</div><div class="card"><div class="fl" style="margin-top:0">Date de début du hifdh</div><input class="field" id="hst" type="date" max="'+today()+'" value="'+hs+'"><div class="note" style="margin-top:8px">Début le '+fmtShort(hs)+' · il y a '+since(hs)+'.</div></div>';
  return h}
function restoreFrom(v){if(!v||(!v.cfg&&!v.s))throw 0;
    const keep={bk:[st.bk,v.saved,v.bk].filter(Boolean).sort().pop()||""};st={log:v.log||{},day:v.day||{},weak:v.weak||[],tp:v.tp||0,learned:v.learned||[],got:v.got,cfg:Object.assign({...DEF},v.cfg||{})};
    if(!st.cfg.a&&v.s){const ids=Object.keys(v.s).map(Number);if(ids.length){st.cfg.a=Math.min(...ids);st.cfg.b=Math.max(...ids)}}
    if(ICONS[URL_ICON])st.cfg.icon=URL_ICON;if(!ICONS[st.cfg.icon])st.cfg.icon="rose";
    Object.assign(st,keep);save();draft=null;applyTheme();applyIcon();toast("Données restaurées");render()}
/* Sauvegarde dans Fichiers (menu Partager de l'iPhone), repli : téléchargement */
function saveFile(){const t=today(),name="MonHifz-sauvegarde-"+t+".json",txt=JSON.stringify(Object.assign({},st,{app:"monhifz",saved:t}));
  const done=()=>{st.bk=t;st.bkSnooze="";save();toast("Sauvegarde enregistrée");const y=scrollY;render();scrollTo(0,y)};
  let file=null;try{file=new File([txt],name,{type:"application/json"})}catch(e){}
  if(file&&navigator.canShare&&navigator.canShare({files:[file]})){navigator.share({files:[file],title:"Sauvegarde Mon Hifz"}).then(done).catch(e=>{if(e&&e.name!=="AbortError")dl()});return}
  dl();function dl(){const u=URL.createObjectURL(new Blob([txt],{type:"application/json"})),a=document.createElement("a");a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000);done()}}
function bkAge(){return st.bk?diff(today(),st.bk):null}
function needBackup(){if(!program(st.cfg))return false;if(gh.token&&!gh.err)return false;const a=bkAge();if(st.bkSnooze&&diff(today(),st.bkSnooze)<3)return false;return a===null?Object.keys(st.log).length>=3:a>=7}
/* Sauvegarde automatique sur GitHub (dépôt public de l'app, dossier sauvegardes/).
   La clé reste sur ce téléphone (clé à part) et la photo n'est jamais envoyée. */
const GHK=KEY+"-github";
let gh={token:"",file:"",last:"",sha:"",err:""};
try{Object.assign(gh,JSON.parse(localStorage.getItem(GHK)||"{}"))}catch(e){}
const ghSave=()=>{try{localStorage.setItem(GHK,JSON.stringify(gh))}catch(e){}};
const GH_REPO="myhifz/Myhifz";
const slug=s=>(s||"moi").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"moi";
const b64e=t=>btoa(unescape(encodeURIComponent(t))),b64d=t=>decodeURIComponent(escape(atob(t.replace(/\s/g,""))));
function ghPayload(){const o=JSON.parse(JSON.stringify(st));if(o.cfg)o.cfg.photo="";o.app="monhifz";o.saved=new Date().toISOString();return JSON.stringify(o,null,1)}
function ghApi(path,opt){return fetch("https://api.github.com/repos/"+GH_REPO+"/contents/"+path,Object.assign({cache:"no-store"},opt,{headers:{"Authorization":"Bearer "+gh.token,"Accept":"application/vnd.github+json"}}))}
let ghBusy=false,ghTimer=null;
function ghPush(force){if(!gh.token||!gh.file||!navigator.onLine||ghBusy)return Promise.resolve(false);ghBusy=true;
  const put=sha=>ghApi(gh.file,{method:"PUT",keepalive:true,body:JSON.stringify({message:"Sauvegarde auto "+today(),content:b64e(ghPayload()),sha:sha||undefined})});
  const getSha=()=>ghApi(gh.file).then(r=>r.status===404?"":r.ok?r.json().then(j=>j.sha):Promise.reject(r.status));
  return (gh.sha?Promise.resolve(gh.sha):getSha()).then(put).then(r=>r.status===409||r.status===422?getSha().then(put):r)
    .then(r=>{if(!r.ok)throw r.status;return r.json()}).then(j=>{gh.sha=j.content.sha;gh.last=new Date().toISOString();gh.err="";ghSave();st.bk=today();try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){};return true})
    .catch(e=>{gh.err=e===401||e===403?"Clé refusée : vérifie qu'elle a l'accès « Contents : Read and write » sur Myhifz.":e===404?"Dépôt introuvable : la clé doit donner accès à Myhifz.":"Envoi impossible pour l'instant, nouvel essai plus tard.";ghSave();if(force)toast(gh.err);return false})
    .finally(()=>{ghBusy=false})}
function ghSchedule(){if(!gh.token)return;clearTimeout(ghTimer);ghTimer=setTimeout(()=>ghPush(),15000)}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"&&ghTimer){clearTimeout(ghTimer);ghTimer=null;ghPush()}});
function ghRestore(){if(!gh.token)return;toast("Récupération…");ghApi(gh.file).then(r=>{if(!r.ok)throw r.status;return r.json()}).then(j=>{gh.sha=j.sha;ghSave();const photo=st.cfg.photo;restoreFrom(JSON.parse(b64d(j.content)));if(photo&&!st.cfg.photo){st.cfg.photo=photo;save()}})
  .catch(e=>toast(e===404?"Aucune sauvegarde trouvée sur GitHub":"Récupération impossible"))}
function ago2(iso){if(!iso)return"jamais";const m=Math.round((Date.now()-new Date(iso))/60000);if(m<1)return"à l'instant";if(m<60)return"il y a "+m+" min";const h=Math.round(m/60);if(h<24)return"il y a "+h+" h";return"il y a "+Math.round(h/24)+" j"}
function ghCard(){
  if(gh.token)return'<div class="card">'+head(I.git,"Sauvegarde automatique","Sur GitHub, après chaque changement.",1)
    +'<div class="bkst '+(gh.err?"warn":"ok")+'">'+(gh.err||"Activée · dernière sauvegarde "+ago2(gh.last))+'</div>'
    +'<div class="note" style="margin-top:10px">Fichier : <b>'+gh.file+'</b> dans ton dépôt public Myhifz. Ta photo n\'est jamais envoyée.</div>'
    +'<div class="chips" style="margin-top:12px"><button class="btn pri" data-act="ghnow">Sauvegarder maintenant</button><button class="btn" data-act="ghget">Récupérer depuis GitHub</button></div>'
    +'<button class="linkb" style="margin-top:10px" data-act="ghoff">Désactiver</button></div>';
  return'<div class="card">'+head(I.git,"Sauvegarde automatique","Sur GitHub : plus besoin d\'y penser.",1)
    +'<ol class="steps"><li>Sur github.com, ouvre <b>Settings → Developer settings → Personal access tokens → Fine-grained tokens</b>, puis <b>Generate new token</b>.<div class="lk"><span class="num">github.com/settings/personal-access-tokens/new</span><button class="btn" data-act="ghlink">Copier</button></div></li>'
    +'<li>Nom : « Mon Hifz ». Expiration : la plus longue possible.</li><li><b>Repository access</b> : <b>Only select repositories</b> → <b>Myhifz</b>.</li><li><b>Permissions → Contents</b> : <b>Read and write</b>.</li><li><b>Generate token</b>, copie la clé et colle-la ici :</li></ol>'
    +'<input class="field" id="ghtok" type="password" autocomplete="off" placeholder="github_pat_…"><button class="btn pri wide" data-act="ghon">Activer la sauvegarde automatique</button>'
    +'<p class="note" style="margin:10px 0 0">La clé reste uniquement sur ce téléphone. Les sauvegardes sont visibles publiquement dans le dépôt, sans ta photo.</p></div>'}
function vSet(){
  if(!draft)initDraft();
  const pr=program(draft),per=pr&&pr.old.length?pr.k:0;
  if(sub==="prog"){
    let h=subHead("Mon programme","Ce que tu connais et dans quel sens tu l'as appris.");
    h+='<div class="card">'+head(I.book,"Sourates mémorisées","De quelle sourate à quelle sourate connais-tu ?")+'<div class="fl">De :</div>'+sel("fa",draft.a)+'<div class="fl">À :</div>'+sel("fb",draft.b)+'<div class="pill">'+I.doc+'<span class="num">Pages '+pr.p1+' → '+pr.p2+' · '+pr.total+' pages · '+hizb(pr.total)+' hizb</span></div></div>';
    h+='<div class="card">'+head(I.dir,"Sens d'apprentissage","Dans quel sens as-tu mémorisé ?")+'<div class="seg"><button class="'+(draft.dir==="down"?"on":"")+'" data-dir="down"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 4v16M6 14l6 6 6-6"/></svg>Al-Fatiha → An-Nas</button><button class="'+(draft.dir==="up"?"on":"")+'" data-dir="up"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 20V4M6 10l6-6 6 6"/></svg>An-Nas → Al-Fatiha</button></div></div>';
    return h+saveBar()}
  if(sub==="rev"){
    let h=subHead("Révision","Ton rythme de chaque jour.");
    h+='<div class="card">'+head(I.loop,"Boucles de révision","Comment veux-tu répartir tes révisions ?")
     +'<div class="bh" style="margin-top:18px"><div class="lt">Hifdh al-Jadid</div><span class="tag">Chaque jour</span></div><div class="ld">Nombre de pages récentes à réviser tous les jours.</div><label class="numf"><input id="jn" type="number" inputmode="numeric" min="0" max="'+pr.total+'" value="'+draft.jn+'"><span>pages</span></label>'
     +'<hr><div class="bh"><div class="lt">Hifdh</div><span class="tag">Cycle</span></div><div class="ld">En combien de jours veux-tu réviser le reste de ce que tu connais ?</div><label class="numf"><input id="dd" type="number" inputmode="numeric" min="1" max="60" value="'+draft.d+'"><span>jours</span></label>'
     +'<div class="pill" id="perp">'+I.calc+'<span>'+(pr.old.length?'Soit environ <b class="num">'+per+' page'+(per>1?"s":"")+'</b> par jour':'Tout est déjà dans Hifdh al-Jadid')+'</span></div></div>';
    h+='<div class="card">'+head(I.moon,"Jour off","Les jours où tu ne mémorises et ne révises rien.")+'<div class="days">'+DAYS.map(([n,l])=>'<button class="dy '+(draft.off.includes(n)?"on":"")+'" data-off="'+n+'">'+l+'</button>').join("")+'</div><div class="note" style="margin-top:10px">'+(draft.off.length?draft.off.length+' jour'+(draft.off.length>1?"s":"")+' off par semaine. Le cycle de Hifdh fait une pause ces jours-là.':'Aucun jour off pour l\'instant.')+'</div></div>';
    const A=S[pr.a-1],B=S[pr.b-1],ord=draft.dir==="up"?[B,A]:[A,B];
    h+='<div class="card sum" id="sumc"><div class="ctitle">'+I.chart+'Résumé de ton programme</div>'
     +[["Sourates",ord[0].t+" → "+ord[1].t],["Pages mémorisées",pr.total+" pages"],["Hizb mémorisés",'<span style="color:var(--acc2-ink)">'+hizb(pr.total)+" hizb</span>"],["Hifdh al-Jadid",pr.jadid.length+" pages/jour"],["Hifdh","~"+per+" pages/jour"],["Jour off",draft.off.length?DAYS.filter(([n])=>draft.off.includes(n)).map(([,l])=>l).join(", "):"Aucun"],["Total quotidien",'<b style="font-size:20px">~'+(pr.jadid.length+per)+" pages</b>"]]
       .map(r=>'<div class="sr"><span>'+r[0]+'</span><b class="num">'+r[1]+'</b></div>').join("")+'</div>';
    return h+saveBar()}
  if(sub==="look"){
    let h=subHead("Apparence","Les changements s'appliquent tout de suite.");
    h+='<div class="card">'+head(I.palette,"Couleur","Choisis le thème de l'app.",1)+'<div class="themes">'+Object.entries(THEMES).map(([k,t])=>'<button class="th '+(st.cfg.c===k?"on":"")+'" data-theme-c="'+k+'"><i style="background:linear-gradient(135deg,'+t.c[0]+','+t.c[1]+')"></i>'+t.n+'</button>').join("")+'</div></div>';
    const ic=st.cfg.icon,link="myhifz.github.io/Myhifz/?icon="+ic;
    h+='<div class="card">'+head(I.book,"Icône de l'app","Choisis le logo de ton écran d'accueil.",1)+'<div class="icons">'+Object.entries(ICONS).map(([k,n])=>'<button class="ico '+(ic===k?"on":"")+'" data-icon="'+k+'" aria-label="Icône '+n+'"><img src="icons/'+k+'.png" alt=""><span>'+n+'</span></button>').join("")+'</div>'
     +(ic!==INSTALLED_ICON?'<div class="howto"><b>Pour l\'avoir sur ton écran d\'accueil :</b><ol><li>Copie ta sauvegarde (Réglages → Données).</li><li>Supprime l\'icône actuelle de l\'écran d\'accueil.</li><li>Ouvre ce lien dans Safari :<div class="lk"><span class="num">'+link+'</span><button class="btn" data-act="copylink">Copier</button></div></li><li>Partager → « Sur l\'écran d\'accueil ».</li><li>Ouvre l\'app, Réglages → Données → Restaurer.</li></ol></div>':'')+'</div>';
    return h}
  if(sub==="profile")return vMoi();
  if(sub==="data"){
    let h=subHead("Données","Tes données restent sur ce téléphone.");
    const a=bkAge();
    h+=ghCard()+'<div class="card">'+head(I.cloud,gh.token?"Sauvegarde manuelle":"Sauvegarde dans Fichiers","Enregistre un fichier dans Fichiers ou iCloud Drive.",1)
     +'<div class="bkst '+(a===null||a>=7?"warn":"ok")+'">'+(a===null?"Aucune sauvegarde pour l\'instant":a===0?"Dernière sauvegarde : aujourd\'hui":"Dernière sauvegarde : il y a "+a+" jour"+(a>1?"s":""))+'</div>'
     +'<button class="btn pri wide" data-act="savefile">'+I.cloud+'Sauvegarder dans Fichiers</button>'
     +'<p class="note" style="margin:10px 0 0">Dans le menu qui s\'ouvre, choisis « Enregistrer dans Fichiers », puis iCloud Drive.</p>'
     +'<div class="fl">Restaurer</div><label class="btn wide filebtn">'+I.doc+'Choisir un fichier de sauvegarde<input type="file" id="bkfile" accept=".json,application/json,text/plain" class="vh"></label>'
     +'<details class="old"><summary>Ancienne méthode (texte)</summary>'+'<div class="chips" style="margin-top:14px"><button class="btn pri" data-act="export">Copier la sauvegarde</button><button class="btn" data-act="showimp">Restaurer</button></div><div id="imp" hidden><textarea id="impt" placeholder="Colle ta sauvegarde ici"></textarea><div class="chips" style="margin-top:10px"><button class="btn pri" data-act="import">Restaurer ces données</button></div></div><textarea id="expt" hidden readonly></textarea></details></div>';
    h+='<div class="card"><div class="ctitle" style="color:var(--hard)">'+I.trash+'Zone sensible</div><p class="note">Efface ton programme, tes révisions et ta série. La couleur et l\'icône sont gardées.</p><button class="reset" data-act="reset">'+(resetArm?"Touche encore pour tout effacer":"Réinitialiser toutes les données")+'</button></div>';
    return h}
  /* Liste principale */
  const c=st.cfg,cp=program(c),configured=!!cp;
  const progVal=configured?(()=>{const A=S[cp.a-1],B=S[cp.b-1],o=c.dir==="up"?[B,A]:[A,B];return o[0].t+" → "+o[1].t})():"À configurer";
  const revVal=configured?cp.jadid.length+" + ~"+(cp.old.length?cp.k:0)+" p./jour":"—";
  const offVal=(c.off||[]).length?DAYS.filter(([n])=>c.off.includes(n)).map(([,l])=>l).join(", "):"Aucun";
  let h='<div class="hello">'+logo()+'<div class="txt"><h1>Réglages</h1><div class="sub">Configure ta méthode de révision</div></div></div>';
  h+='<div class="lbl">Méthode</div><div class="card list">'+setRow("prog",I.book,"Mon programme",progVal)+setRow("rev",I.loop,"Révision",revVal+' · Jour off : '+offVal)+'</div>';
  h+='<div class="lbl">Personnalisation</div><div class="card list">'+setRow("look",I.palette,"Apparence",THEMES[c.c]?THEMES[c.c].n:"Vert",1)+setRow("profile",I.user,"Moi",(c.name.trim()?esc(c.name.trim())+" · ":"")+badges().filter(b=>b.ok).length+" jalons")+'</div>';
  h+='<div class="lbl">Données</div><div class="card list">'+setRow("data",I.cloud,"Sauvegarde et restauration",gh.token?(gh.err?"Sauvegarde auto : erreur":"Auto · "+ago2(gh.last)):bkAge()===null?"Jamais sauvegardé":bkAge()===0?"Sauvegardé aujourd\'hui":"Il y a "+bkAge()+" j",1)+'</div>';
  return h}

function render(){
  $("app").innerHTML=tab==="home"?vHome():tab==="rev"?vRev():tab==="plan"?vPlan():vSet();
  document.body.classList.toggle("onset",tab==="set");
  if(tab==="home")animateHome();else homeShown=false;
  document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("on",b.dataset.tab===tab));
  if(tab==="set"){
    const re=()=>{const y=scrollY;render();scrollTo(0,y)};
    if($("fa"))$("fa").onchange=e=>{draft.a=+e.target.value;draft.p1=draft.p2=0;re()};
    if($("fb"))$("fb").onchange=e=>{draft.b=+e.target.value;draft.p1=draft.p2=0;re()};
    const upd=()=>{const tmp=document.createElement("div");tmp.innerHTML=vSet();["perp","sumc"].forEach(id=>{const n=tmp.querySelector("#"+id);if(n&&$(id))$(id).replaceWith(n)});if($("savebar"))$("savebar").hidden=!dirty()};
    if($("jn"))$("jn").oninput=e=>{draft.jn=Math.max(0,+e.target.value||0);upd()};
    if($("dd"))$("dd").oninput=e=>{draft.d=Math.max(1,Math.min(60,+e.target.value||1));upd()};
    if($("nm"))$("nm").oninput=e=>{st.cfg.name=e.target.value;save()};
    if($("bkfile"))$("bkfile").onchange=e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();
      r.onload=()=>{try{restoreFrom(JSON.parse(r.result))}catch(x){toast("Ce fichier n'est pas une sauvegarde Mon Hifz")}};r.onerror=()=>toast("Impossible de lire ce fichier");r.readAsText(f)};
    if($("photo"))$("photo").onchange=e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const img=new Image(),u=URL.createObjectURL(f);
      img.onload=()=>{const n=320,cv=document.createElement("canvas");cv.width=cv.height=n;const k=Math.min(img.width,img.height),cx=cv.getContext("2d");
        cx.drawImage(img,(img.width-k)/2,(img.height-k)/2,k,k,0,0,n,n);URL.revokeObjectURL(u);st.cfg.photo=cv.toDataURL("image/jpeg",.82);save();toast("Photo ajoutée");re()};
      img.onerror=()=>{URL.revokeObjectURL(u);toast("Cette image ne peut pas être lue")};img.src=u};
    if($("gsel"))$("gsel").onchange=e=>{st.cfg.goal=+e.target.value;save();re()};
    if($("gpace"))$("gpace").onchange=e=>{const v=parseFloat(String(e.target.value).replace(",","."));st.cfg.pace=isFinite(v)&&v>0?Math.max(.25,Math.min(50,v)):2;save();re()};
    if($("hst"))$("hst").onchange=e=>{if(e.target.value&&e.target.value<=today()){st.cfg.hstart=e.target.value;save();re()}};
  }}
function go(t){draft=null;resetArm=false;sub=null;tab=t;try{localStorage.setItem(KEY+"-tab",t)}catch(e){}render();scrollTo(0,0)}

document.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;const d=b.dataset;
  if(d.tab)go(d.tab);
  else if(d.goto){go("rev");const el=$("blk-"+d.goto);if(el){const y=el.getBoundingClientRect().top+scrollY-14-(parseFloat(getComputedStyle(document.documentElement).paddingTop)||0);scrollTo({top:Math.max(0,y),behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});el.classList.add("flash");setTimeout(()=>el.classList.remove("flash"),1200)}}
  else if(d.goal!==undefined){tab="set";sub="profile";draft=null;render();scrollTo(0,0)}
  else if(d.pday){planSel=d.pday;const y=scrollY;render();scrollTo(0,y)}
  else if(d.sub!==undefined){sub=d.sub||null;draft=null;resetArm=false;render();scrollTo(0,0)}
  else if(d.su){const id=+d.su,k=d.k,on=!dayRec(today())[k].includes(id);mark(k,[id],on);const y=scrollY;render();scrollTo(0,y);
    const x=dayState(today());if(on&&x.tot&&x.done===x.tot)toast("Révision du jour terminée !")}
  else if(d.all){const x=dayState(today());mark(d.all,(d.all==="sj"?x.Js:d.all==="so"?x.Os:x.W).map(y=>y.s.id),d.on==="1");const y=scrollY;render();scrollTo(0,y)}
  else if(d.learn){const before=program(st.cfg).total;learn(+d.learn);const y=scrollY;render();scrollTo(0,y);
    const after=program(st.cfg).total;if(after!==before&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const btn=document.querySelector(d.learn==="1"?".plusb":".ghost");if(btn){const r=btn.getBoundingClientRect(),f=document.createElement("div");f.className="fly"+(after<before?" neg":"");f.textContent=(after>before?"+1":"−1")+" page";f.style.left=(r.left+r.width/2)+"px";f.style.top=(r.top)+"px";document.body.appendChild(f);setTimeout(()=>f.remove(),1100);btn.classList.add("bump");setTimeout(()=>btn.classList.remove("bump"),400)}}}
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
    const first=!st.cfg.start;if(old.dir!==draft.dir)draft.goal=0;st.cfg={...draft,c:st.cfg.c,icon:st.cfg.icon,name:st.cfg.name};if(ch||first)st.cfg.start=today();save();draft=null;toast("Programme enregistré");
    if(first)go("home");else{sub=null;render();scrollTo(0,0)}}
  else if(d.act==="nophoto"){st.cfg.photo="";save();const y=scrollY;render();scrollTo(0,y)}
  else if(d.act==="reset"){if(!resetArm){resetArm=true;const y=scrollY;render();scrollTo(0,y);return}
    st={log:{},day:{},weak:[],tp:0,learned:[],got:[],cfg:{...DEF,c:st.cfg.c,icon:st.cfg.icon}};save();draft=null;resetArm=false;toast("Données effacées");render()}
  else if(d.act==="export"){const txt=JSON.stringify(st),ta=$("expt");ta.value=txt;const fb=()=>{ta.hidden=false;ta.select();toast("Sélectionne et copie le texte")};
    if(navigator.clipboard)navigator.clipboard.writeText(txt).then(()=>toast("Sauvegarde copiée"),fb);else fb()}
  else if(d.act==="showimp"){$("imp").hidden=false}
  else if(d.act==="import"){try{restoreFrom(JSON.parse($("impt").value))}catch(x){toast("Colle la sauvegarde complète")}}
  else if(d.act==="savefile"){saveFile()}
  else if(d.act==="ghlink"){const t="https://github.com/settings/personal-access-tokens/new";if(navigator.clipboard)navigator.clipboard.writeText(t).then(()=>toast("Lien copié"),()=>toast("Copie le lien à la main"))}
  else if(d.act==="ghon"){const t=($("ghtok").value||"").trim();if(!/^(github_pat_|ghp_)/.test(t)){toast("Colle la clé qui commence par github_pat_");return}
    gh={token:t,file:"sauvegardes/"+slug(st.cfg.name)+".json",last:"",sha:"",err:""};ghSave();toast("Connexion…");
    ghPush(true).then(ok=>{if(ok)toast("Sauvegarde automatique activée");const y=scrollY;render();scrollTo(0,y)})}
  else if(d.act==="ghnow"){toast("Envoi…");ghPush(true).then(ok=>{if(ok)toast("Sauvegardé sur GitHub");const y=scrollY;render();scrollTo(0,y)})}
  else if(d.act==="ghget"){ghRestore()}
  else if(d.act==="ghoff"){gh={token:"",file:"",last:"",sha:"",err:""};ghSave();toast("Sauvegarde automatique désactivée");const y=scrollY;render();scrollTo(0,y)}
  else if(d.act==="later"){st.bkSnooze=today();save();const y=scrollY;render();scrollTo(0,y)}
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
if(st.tp===undefined){st.tp=Object.keys(st.day).reduce((a,k)=>{try{return a+dayState(k).done}catch(e){return a}},0)}
checkBadges(true);
applyTheme();applyIcon();render();
let shownDay=today();
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&today()!==shownDay){shownDay=today();if(tab!=="set")render()}});
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});
