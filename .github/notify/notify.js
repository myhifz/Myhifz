// Envoie les notifications quand une sauvegarde change : encouragement, révision finie, duel gagné.
const {execSync}=require("child_process"),webpush=require("web-push");
const PUB="BKHKUBZamYT2RZwFD5fyTj6rMctVplO87rFLIdoCStltTPicI4BAlXrGLKx8jANAc1QnnARlqJ_FfepIiAI-isc";
if(!process.env.VAPID_PRIVATE){console.log("Pas de clé VAPID_PRIVATE : rien à envoyer.");process.exit(0)}
webpush.setVapidDetails("https://myhifz.github.io/Myhifz/",PUB,process.env.VAPID_PRIVATE);
const sh=c=>{try{return execSync(c,{encoding:"utf8",stdio:["ignore","pipe","ignore"]})}catch(e){return""}};
const read=(rev,f)=>{try{return JSON.parse(rev?sh("git show "+rev+":"+f):require("fs").readFileSync(f,"utf8"))}catch(e){return null}};
const before=(process.env.BEFORE||"").replace(/^0+$/,"");
const files=(before?sh("git diff --name-only "+before+" HEAD -- sauvegardes/"):sh("git diff --name-only HEAD~1 HEAD -- sauvegardes/")).split("\n").filter(f=>/\.json$/.test(f));
const name=d=>(d&&d.cfg&&d.cfg.name)||"Ton proche";
async function send(file,kind,title,body){const r=read("",file);if(!r||!r.cfg||!r.cfg.push||!r.cfg.push.endpoint)return console.log("pas d'abonnement :",file);
  const pref=Object.assign({cheer:true,fin:true,duel:true},r.cfg.notif||{});if(!pref[kind])return console.log("désactivé :",kind,file);
  try{await webpush.sendNotification(r.cfg.push,JSON.stringify({title,body,tag:kind}),{TTL:86400});console.log("envoyé :",kind,"→",file)}catch(e){console.log("échec :",file,e.statusCode||e.message)}}
(async()=>{for(const f of files){const now=read("",f),old=before?read(before,f):read("HEAD~1",f);if(!now)continue;const o=old||{},who=name(now),partner=now.duo&&now.duo.file;
  // encouragement
  if(now.cheer&&now.cheer.at&&(!o.cheer||o.cheer.at!==now.cheer.at)&&now.cheer.to)await send(now.cheer.to,"cheer",who+" t'encourage",now.cheer.msg||"");
  if(!partner)continue;const p=read("",partner)||{};
  // révision du jour terminée
  for(const day of Object.keys(now.fin||{})){if((o.fin||{})[day])continue;if(Date.now()-new Date(now.fin[day])>36*3600e3)continue;
    const pf=(p.fin||{})[day];await send(partner,"fin",who+" a fini sa révision",pf?"Vous avez tous les deux fini aujourd'hui.":"À toi de jouer !")}
  // duel de la semaine gagné
  for(const wk of Object.keys(now.wkhit||{})){if((o.wkhit||{})[wk])continue;const ph=(p.wkhit||{})[wk];if(!ph||now.wkhit[wk]<ph)await send(partner,"duel",who+" a gagné le duel de la semaine","Nouveau trophée. Revanche la semaine prochaine ?")}
}})();
