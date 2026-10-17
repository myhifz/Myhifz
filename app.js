// Mon Hifz : révision par pages (Mushaf Madani, 604 pages)
const RAW="Al-Fatiha|الفاتحة|1;Al-Baqara|البقرة|2;Al-Imran|آل عمران|50;An-Nisa|النساء|77;Al-Ma'ida|المائدة|106;Al-An'am|الأنعام|128;Al-A'raf|الأعراف|151;Al-Anfal|الأنفال|177;At-Tawba|التوبة|187;Yunus|يونس|208;Hud|هود|221;Yusuf|يوسف|235;Ar-Ra'd|الرعد|249;Ibrahim|إبراهيم|255;Al-Hijr|الحجر|262;An-Nahl|النحل|267;Al-Isra|الإسراء|282;Al-Kahf|الكهف|293;Maryam|مريم|305;Ta-Ha|طه|312;Al-Anbiya|الأنبياء|322;Al-Hajj|الحج|332;Al-Mu'minun|المؤمنون|342;An-Nur|النور|350;Al-Furqan|الفرقان|359;Ash-Shu'ara|الشعراء|367;An-Naml|النمل|377;Al-Qasas|القصص|385;Al-Ankabut|العنكبوت|396;Ar-Rum|الروم|404;Luqman|لقمان|411;As-Sajda|السجدة|415;Al-Ahzab|الأحزاب|418;Saba|سبأ|428;Fatir|فاطر|434;Ya-Sin|يس|440;As-Saffat|الصافات|446;Sad|ص|453;Az-Zumar|الزمر|458;Ghafir|غافر|467;Fussilat|فصلت|477;Ash-Shura|الشورى|483;Az-Zukhruf|الزخرف|489;Ad-Dukhan|الدخان|496;Al-Jathiya|الجاثية|499;Al-Ahqaf|الأحقاف|502;Muhammad|محمد|507;Al-Fath|الفتح|511;Al-Hujurat|الحجرات|515;Qaf|ق|518;Adh-Dhariyat|الذاريات|520;At-Tur|الطور|523;An-Najm|النجم|526;Al-Qamar|القمر|528;Ar-Rahman|الرحمن|531;Al-Waqi'a|الواقعة|534;Al-Hadid|الحديد|537;Al-Mujadila|المجادلة|542;Al-Hashr|الحشر|545;Al-Mumtahana|الممتحنة|549;As-Saff|الصف|551;Al-Jumu'a|الجمعة|553;Al-Munafiqun|المنافقون|554;At-Taghabun|التغابن|556;At-Talaq|الطلاق|558;At-Tahrim|التحريم|560;Al-Mulk|الملك|562;Al-Qalam|القلم|564;Al-Haqqa|الحاقة|566;Al-Ma'arij|المعارج|568;Nuh|نوح|570;Al-Jinn|الجن|572;Al-Muzzammil|المزمل|574;Al-Muddaththir|المدثر|575;Al-Qiyama|القيامة|577;Al-Insan|الإنسان|578;Al-Mursalat|المرسلات|580;An-Naba|النبأ|582;An-Nazi'at|النازعات|583;Abasa|عبس|585;At-Takwir|التكوير|586;Al-Infitar|الانفطار|587;Al-Mutaffifin|المطففين|587;Al-Inshiqaq|الانشقاق|589;Al-Buruj|البروج|590;At-Tariq|الطارق|591;Al-A'la|الأعلى|591;Al-Ghashiya|الغاشية|592;Al-Fajr|الفجر|593;Al-Balad|البلد|594;Ash-Shams|الشمس|595;Al-Layl|الليل|595;Ad-Duha|الضحى|596;Ash-Sharh|الشرح|596;At-Tin|التين|597;Al-Alaq|العلق|597;Al-Qadr|القدر|598;Al-Bayyina|البينة|598;Az-Zalzala|الزلزلة|599;Al-Adiyat|العاديات|599;Al-Qari'a|القارعة|600;At-Takathur|التكاثر|600;Al-Asr|العصر|601;Al-Humaza|الهمزة|601;Al-Fil|الفيل|601;Quraysh|قريش|602;Al-Ma'un|الماعون|602;Al-Kawthar|الكوثر|602;Al-Kafirun|الكافرون|603;An-Nasr|النصر|603;Al-Masad|المسد|603;Al-Ikhlas|الإخلاص|604;Al-Falaq|الفلق|604;An-Nas|الناس|604";
const S=RAW.split(";").map((x,i)=>{const[t,a,p]=x.split("|");return{id:i+1,t,a,p:+p}});
S.forEach((x,i)=>{x.e=i===113?604:Math.max(x.p,S[i+1].p-1)});
const PAGES=604, PER_HIZB=PAGES/60;
const KEY="murajaa-v1";
const THEMES={vert:{n:"Vert",c:["#1F5A47","#6DBB9C"],tc:"#F2F4F0"},rose:{n:"Rose",c:["#B23F6E","#F09DBD"],tc:"#FBF2F5"},marine:{n:"Bleu marine",c:["#26467A","#7FA3D8"],tc:"#F1F4F9"}};
const DEF={c:"vert",name:"",a:0,b:0,dir:"up",jn:6,d:3,start:"",icon:"rose"};

let st={log:{},day:{},cfg:{...DEF}}, tab="home", draft=null, resetArm=false;
try{const v=JSON.parse(localStorage.getItem(KEY)||"null");
  if(v){st.log=v.log||{};st.day=v.day||{};st.cfg=Object.assign({...DEF},v.cfg||{});
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
function program(c){
  if(!c.a||!c.b)return null;
  const a=Math.min(c.a,c.b),b=Math.max(c.a,c.b);
  const p1=S[a-1].p,p2=S[b-1].e,pages=[];for(let p=p1;p<=p2;p++)pages.push(p);
  const learned=c.dir==="up"?pages.slice().reverse():pages; // du plus ancien au plus récent
  const jn=Math.max(0,Math.min(+c.jn||0,learned.length));
  const jadid=learned.slice(learned.length-jn).sort((x,y)=>x-y);
  const old=learned.slice(0,learned.length-jn);
  const d=Math.max(1,Math.min(+c.d||1,old.length||1));
  const k=old.length?Math.ceil(old.length/d):0;
  return{a,b,total:pages.length,jadid,old,d,k}}
function janbFor(pr,date){
  if(!pr||!pr.old.length)return[];
  const i=((diff(date,st.cfg.start||date)%pr.d)+pr.d)%pr.d;
  return pr.old.slice(i*pr.k,(i+1)*pr.k).sort((x,y)=>x-y)}
function onPage(p){return S.filter(s=>s.p<=p&&s.e>=p)}
function label(pages,pr){
  if(!pages.length)return"";
  const lo=Math.min(...pages),hi=Math.max(...pages);
  const inR=s=>!pr||(s.id>=pr.a&&s.id<=pr.b);
  const f=onPage(lo).filter(inR)[0]||onPage(lo)[0],l=onPage(hi).filter(inR).slice(-1)[0]||onPage(hi).slice(-1)[0];
  return(lo===hi?"Page "+lo:"Pages "+lo+" → "+hi)+" · "+(f.id===l.id?f.t:f.t+" → "+l.t)}

/* Sourates couvertes par des pages (dans la plage mémorisée) */
function surahsFor(pages,pr){if(!pages.length||!pr)return[];const lo=Math.min(...pages),hi=Math.max(...pages);
  return S.filter(s=>s.id>=pr.a&&s.id<=pr.b&&s.p<=hi&&s.e>=lo).map(s=>({s,lo:Math.max(s.p,lo),hi:Math.min(s.e,hi)}))}
/* Une page compte comme faite quand toutes ses sourates du jour sont cochées */
function donePages(pages,list,ids){return pages.filter(p=>list.filter(x=>x.lo<=p&&x.hi>=p).every(x=>ids.includes(x.s.id))).length}
function dayRec(date){const d=st.day[date];return d&&d.sj?d:{sj:[],so:[]}}
function dayState(date){
  const pr=program(st.cfg),d=dayRec(date);
  const J=pr?pr.jadid:[],O=janbFor(pr,date),Js=surahsFor(J,pr),Os=surahsFor(O,pr);
  const jd=donePages(J,Js,d.sj),od=donePages(O,Os,d.so);
  return{pr,J,O,Js,Os,jd,od,done:jd+od,tot:J.length+O.length,d}}
function mark(kind,ids,on){
  const t=today();if(!st.day[t]||!st.day[t].sj)st.day[t]={sj:[],so:[]};const d=st.day[t];
  ids.forEach(p=>{const i=d[kind].indexOf(p);if(on&&i<0)d[kind].push(p);if(!on&&i>=0)d[kind].splice(i,1)});
  st.log[t]=d.sj.length+d.so.length; if(!st.log[t])delete st.log[t];
  Object.keys(st.day).forEach(k=>{if(diff(t,k)>40)delete st.day[k]});
  save()}

function streak(){let n=0,d=today();if(!st.log[d])d=addDays(d,-1);while(st.log[d]){n++;d=addDays(d,-1)}return n}
function record(){let best=0,cur=0,prev=null;Object.keys(st.log).filter(k=>st.log[k]).sort().forEach(k=>{cur=prev&&diff(k,prev)===1?cur+1:1;best=Math.max(best,cur);prev=k});return best}
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
 check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"><path d="M5 12l5 5L20 7"/></svg>'
};

function needSetup(){return'<div class="card empty"><div class="ar">بسم الله</div><p>Indique dans Réglages les sourates que tu connais et ton rythme de révision.</p><div class="chips" style="justify-content:center;margin-top:16px"><button class="btn pri" data-tab="set">Configurer mon programme</button></div></div>'}

function vHome(){
  const name=st.cfg.name.trim(),x=dayState(today());
  let h='<div class="hello">'+logo()+'<div class="txt"><h1>Salam Aleykoum'+(name?", "+esc(name):"")+'</h1><div class="sub">'+fmtDay(today())+'</div></div><div class="fire">'+I.flame+'<span class="num">'+streak()+'</span></div></div>';
  if(!x.pr)return h+needSetup();
  const left=x.tot-x.done,pct=x.tot?Math.round(x.done/x.tot*100):100;
  const msg=left?["En cours","Continue sur ta lancée ! Il te reste "+left+" page"+(left>1?"s":"")+" à réviser aujourd'hui."]:["Terminé","Ma sha Allah, ta révision du jour est faite."];
  h+='<button class="card status" data-tab="rev"><div class="ic">'+I.drop+'</div><div><b>'+msg[0]+'</b><span>'+msg[1]+'</span></div></button>';
  const R=70,C=2*Math.PI*R;
  h+='<div class="hero"><div class="t">Progression du jour</div><div class="ring"><svg viewBox="0 0 170 170"><circle cx="85" cy="85" r="'+R+'" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.22)" stroke-width="8"/><circle cx="85" cy="85" r="'+R+'" fill="none" stroke="rgba(255,255,255,.92)" stroke-width="8" stroke-linecap="round" stroke-dasharray="'+C+'" stroke-dashoffset="'+(C*(1-pct/100))+'"/></svg><div class="in"><div class="p num">'+pct+'%</div><div class="s num">'+x.done+'/'+x.tot+' pages</div></div></div><div class="hbar"><i style="width:'+pct+'%"></i></div></div>';
  const tp=(a,b)=>b?Math.round(a/b*100):100;
  h+='<div class="tiles"><button class="card tile n" data-tab="rev"><div class="ic">'+I.star+'</div><div class="p num">'+tp(x.jd,x.J.length)+'%</div><div class="k">Hifdh al-Jadid</div><div class="s num">'+x.jd+'/'+x.J.length+' pages</div><div class="tbar"><i style="width:'+tp(x.jd,x.J.length)+'%"></i></div></button>'
    +'<button class="card tile o" data-tab="rev"><div class="ic">'+I.stack+'</div><div class="p num">'+tp(x.od,x.O.length)+'%</div><div class="k">Hifdh</div><div class="s num">'+x.od+'/'+x.O.length+' pages</div><div class="tbar"><i style="width:'+tp(x.od,x.O.length)+'%"></i></div></button></div>';
  h+='<div class="card"><div class="ctitle">'+I.chart+'Tes statistiques</div><div class="sgrid"><div><b class="num">'+x.pr.total+'</b><span>Pages</span></div><div><b class="num">'+streak()+'</b><span>Série</span></div><div><b class="num">'+record()+'</b><span>Record</span></div></div></div>';
  const cp=x.pr.total/PAGES*100;let cells="";
  for(let i=29;i>=0;i--){const d=addDays(today(),-i),n=st.log[d]||0;cells+='<i class="'+(n&&n>=x.tot?"l2":n?"l1":"")+'"></i>'}
  h+='<div class="card"><div class="row" style="justify-content:space-between"><div class="ctitle">Coran mémorisé</div><b class="num" style="font-size:22px">'+cp.toFixed(1)+' %</b></div><div class="note num" style="margin-top:2px">'+x.pr.total+' / '+PAGES+' pages · '+hizb(x.pr.total)+' hizb</div><div class="prog"><i style="width:'+cp+'%"></i></div><div class="note" style="margin-top:16px">30 derniers jours</div><div class="heat">'+cells+'</div></div>';
  return h}

function block(kind,title,tag,pages,list,doneIds,pr,cls){
  if(!pages.length)return'<div class="card"><div class="bh"><div class="ctitle">'+title+'</div><span class="tag">'+tag+'</span></div><p class="note" style="margin:8px 0 0">Rien pour aujourd\'hui.</p></div>';
  const n=list.filter(x=>doneIds.includes(x.s.id)).length,all=n===list.length;
  return'<div class="card blk '+cls+'"><div class="bh"><div class="ctitle">'+title+'</div><span class="tag">'+tag+'</span></div><div class="rng num">'+(pages.length>1?"Pages "+Math.min(...pages)+" → "+Math.max(...pages):"Page "+pages[0])+' · '+pages.length+' page'+(pages.length>1?"s":"")+'</div><div class="sus">'+list.map(x=>{const on=doneIds.includes(x.s.id),part=x.lo!==x.s.p||x.hi!==x.s.e;
    return'<button class="su '+(on?"on":"")+'" data-su="'+x.s.id+'" data-k="'+kind+'"><span class="sc">'+(on?I.check:"")+'</span><span class="sn"><b>'+x.s.t+'</b><span class="num">'+(x.lo===x.hi?"p. "+x.lo:"p. "+x.lo+"–"+x.hi)+(part?" · partie":"")+'</span></span><span class="ar">'+x.s.a+'</span></button>'}).join("")+'</div><div class="bf"><span class="note num">'+n+'/'+list.length+' sourate'+(list.length>1?"s":"")+'</span><button class="btn '+(all?"":"pri")+'" data-all="'+kind+'" data-on="'+(all?0:1)+'">'+(all?"Annuler":"Tout marquer comme fait")+'</button></div></div>'}

function vRev(){
  const x=dayState(today());
  let h='<div><h1>Révision</h1><div class="sub">'+fmtDay(today())+'</div></div>';
  if(!x.pr)return h+needSetup();
  if(x.tot&&x.done===x.tot)h+='<div class="card empty" style="padding:18px"><div class="ar">ما شاء الله</div><p>Tout est fait pour aujourd\'hui. Qu\'Allah te le facilite.</p></div>';
  h+=block("sj","Hifdh al-Jadid","Chaque jour",x.J,x.Js,x.d.sj,x.pr,"n");
  h+=block("so","Hifdh","Cycle de "+x.pr.d+" j",x.O,x.Os,x.d.so,x.pr,"o");
  return h+'<p class="note">Touche une sourate quand tu l\'as récitée.</p>'}

function vPlan(){
  const pr=program(st.cfg);
  let h='<div><h1>Planning</h1><div class="sub">Les '+(pr?Math.max(7,pr.d):7)+' prochains jours</div></div>';
  if(!pr)return h+needSetup();
  h+='<div class="card"><div class="bh"><div class="ctitle">Hifdh al-Jadid</div><span class="tag">Chaque jour</span></div><div class="rng">'+(pr.jadid.length?label(pr.jadid,pr):"Aucune page")+'</div></div><div class="lbl">Hifdh</div><div class="card plist">';
  const n=Math.max(7,pr.d);
  for(let i=0;i<n;i++){const d=addDays(today(),i),O=janbFor(pr,d),Os=surahsFor(O,pr),dd=dayRec(d),ok=Os.length&&Os.every(y=>dd.so.includes(y.s.id));
    h+='<div class="prow'+(i===0?" now":"")+'"><div class="pd"><b>'+(i===0?"Aujourd'hui":i===1?"Demain":fmtDay(d).split(" ").slice(0,2).join(" "))+'</b></div><div class="pr num">'+(O.length?label(O,pr):"Repos")+'</div>'+(ok?'<span class="okb">'+I.check+'</span>':"")+'</div>'}
  return h+'</div><p class="note">Le cycle recommence tous les '+pr.d+' jours. Tu peux changer le rythme dans Réglages.</p>'}

function sel(id,val){
  const s=S[(val||1)-1];
  return'<label class="pick"><span class="pn num">'+s.id+'.</span><span class="pt"><b>'+s.t+'</b><span class="ar">'+s.a+'</span></span>'+I.chev+'<select id="'+id+'" aria-label="Sourate">'+S.map(x=>'<option value="'+x.id+'"'+(x.id===s.id?" selected":"")+'>'+x.id+'. '+x.t+'</option>').join("")+'</select></label>'}
function head(icon,t,s,soft){return'<div class="sh"><div class="si'+(soft?" s2":"")+'">'+icon+'</div><div><div class="st">'+t+'</div><div class="ss">'+s+'</div></div></div>'}

function vSet(){
  if(!draft)draft={...st.cfg,a:st.cfg.a||78,b:st.cfg.b||114};
  const pr=program(draft),per=pr&&pr.old.length?pr.k:0;
  let h='<div class="hello">'+logo()+'<div class="txt"><h1>Réglages</h1><div class="sub">Configure ta méthode de révision</div></div></div>';
  h+='<div class="card">'+head(I.book,"Sourates mémorisées","De quelle sourate à quelle sourate connais-tu ?")+'<div class="fl">De :</div>'+sel("fa",draft.a)+'<div class="fl">À :</div>'+sel("fb",draft.b)+'<div class="pill">'+I.doc+'<span class="num">'+pr.total+' pages · '+hizb(pr.total)+' hizb</span></div></div>';
  h+='<div class="card">'+head(I.dir,"Sens d'apprentissage","Dans quel sens as-tu mémorisé ?")+'<div class="seg"><button class="'+(draft.dir==="down"?"on":"")+'" data-dir="down"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 4v16M6 14l6 6 6-6"/></svg>Al-Fatiha → An-Nas</button><button class="'+(draft.dir==="up"?"on":"")+'" data-dir="up"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 20V4M6 10l6-6 6 6"/></svg>An-Nas → Al-Fatiha</button></div></div>';
  h+='<div class="card">'+head(I.loop,"Boucles de révision","Comment veux-tu répartir tes révisions ?")
   +'<div class="bh" style="margin-top:18px"><div class="lt">Hifdh al-Jadid</div><span class="tag">Chaque jour</span></div><div class="ld">Nombre de pages récentes à réviser tous les jours.</div><label class="numf"><input id="jn" type="number" inputmode="numeric" min="0" max="'+pr.total+'" value="'+draft.jn+'"><span>pages</span></label>'
   +'<hr><div class="bh"><div class="lt">Hifdh</div><span class="tag">Cycle</span></div><div class="ld">En combien de jours veux-tu réviser le reste de ce que tu connais ?</div><label class="numf"><input id="dd" type="number" inputmode="numeric" min="1" max="60" value="'+draft.d+'"><span>jours</span></label>'
   +'<div class="pill">'+I.calc+'<span>'+(pr.old.length?'Soit environ <b class="num">'+per+' page'+(per>1?"s":"")+'</b> par jour':'Tout est déjà dans Hifdh al-Jadid')+'</span></div></div>';
  const A=S[pr.a-1],B=S[pr.b-1],ord=draft.dir==="up"?[B,A]:[A,B];
  h+='<div class="card sum"><div class="ctitle">'+I.chart+'Résumé de ton programme</div>'
   +[["Sourates",ord[0].t+" → "+ord[1].t],["Pages mémorisées",pr.total+" pages"],["Hizb mémorisés",'<span style="color:var(--acc2)">'+hizb(pr.total)+" hizb</span>"],["Hifdh al-Jadid",pr.jadid.length+" pages/jour"],["Hifdh","~"+per+" pages/jour"],["Total quotidien",'<b style="font-size:20px">~'+(pr.jadid.length+per)+" pages</b>"]]
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
    $("fa").onchange=e=>{draft.a=+e.target.value;re()};
    $("fb").onchange=e=>{draft.b=+e.target.value;re()};
    $("jn").onchange=e=>{draft.jn=Math.max(0,+e.target.value||0);re()};
    $("dd").onchange=e=>{draft.d=Math.max(1,Math.min(60,+e.target.value||1));re()};
    $("nm").oninput=e=>{draft.name=e.target.value};
  }}
function go(t){if(t!=="set"){draft=null;resetArm=false}tab=t;try{localStorage.setItem(KEY+"-tab",t)}catch(e){}render();scrollTo(0,0)}

document.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;const d=b.dataset;
  if(d.tab)go(d.tab);
  else if(d.su){const id=+d.su,k=d.k,on=!dayRec(today())[k].includes(id);mark(k,[id],on);const y=scrollY;render();scrollTo(0,y);
    const x=dayState(today());if(on&&x.tot&&x.done===x.tot)toast("Révision du jour terminée !")}
  else if(d.all){const x=dayState(today());mark(d.all,(d.all==="sj"?x.Js:x.Os).map(y=>y.s.id),d.on==="1");const y=scrollY;render();scrollTo(0,y)}
  else if(d.dir){draft.dir=d.dir;const y=scrollY;render();scrollTo(0,y)}
  else if(d.icon){st.cfg.icon=d.icon;if(draft)draft.icon=d.icon;save();applyIcon();const y=scrollY;render();scrollTo(0,y)}
  else if(d.act==="copylink"){const t="https://myhifz.github.io/Myhifz/?icon="+st.cfg.icon;if(navigator.clipboard)navigator.clipboard.writeText(t).then(()=>toast("Lien copié"),()=>toast("Copie le lien à la main"));else toast("Copie le lien à la main")}
  else if(d.themeC){st.cfg.c=d.themeC;draft.c=d.themeC;save();applyTheme();const y=scrollY;render();scrollTo(0,y);toast("Thème "+THEMES[d.themeC].n)}
  else if(d.act==="save"){const old=st.cfg,ch=old.a!==draft.a||old.b!==draft.b||old.dir!==draft.dir||+old.jn!==+draft.jn||+old.d!==+draft.d;
    st.cfg={...draft,c:st.cfg.c,icon:st.cfg.icon};if(ch||!st.cfg.start)st.cfg.start=today();save();draft=null;toast("Programme enregistré");go("home")}
  else if(d.act==="reset"){if(!resetArm){resetArm=true;const y=scrollY;render();scrollTo(0,y);return}
    st={log:{},day:{},cfg:{...DEF,c:st.cfg.c}};save();draft=null;resetArm=false;toast("Données effacées");render()}
  else if(d.act==="export"){const txt=JSON.stringify(st),ta=$("expt");ta.value=txt;const fb=()=>{ta.hidden=false;ta.select();toast("Sélectionne et copie le texte")};
    if(navigator.clipboard)navigator.clipboard.writeText(txt).then(()=>toast("Sauvegarde copiée"),fb);else fb()}
  else if(d.act==="showimp"){$("imp").hidden=false}
  else if(d.act==="import"){try{const v=JSON.parse($("impt").value);if(!v.cfg&&!v.s)throw 0;
    st={log:v.log||{},day:v.day||{},cfg:Object.assign({...DEF},v.cfg||{})};
    if(!st.cfg.a&&v.s){const ids=Object.keys(v.s).map(Number);if(ids.length){st.cfg.a=Math.min(...ids);st.cfg.b=Math.max(...ids)}}
    save();draft=null;applyTheme();toast("Données restaurées");render()}catch(x){toast("Colle la sauvegarde complète")}}
});
matchMedia("(prefers-color-scheme: dark)").addEventListener("change",applyTheme);
applyTheme();applyIcon();render();
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});
