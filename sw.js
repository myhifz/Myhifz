// Mon Hifz : la page et le code se mettent à jour dès qu'il y a internet ; le reste est gardé pour le hors-ligne.
// Les pages du Coran déjà lues sont dans un cache à part, qui survit aux mises à jour.
const C="monhifz-v13", Q="monhifz-quran";
const FILES=["./","index.html","app.js","manifest.json","icons/rose.png","icons/marine.png","icons/vert.png","icons/jaune.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x!==Q).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;
 const quran=/^https:\/\/(api\.alquran\.cloud|api\.quran\.com|verses\.quran\.foundation)\//.test(r.url)||/\/mushaf\/\d+\.webp/.test(r.url);
 const page=r.mode==="navigate"||r.url.endsWith("/index.html")||r.url.endsWith("sw.js")||r.url.includes("app.js");
 const put=name=>res=>{if(res&&res.ok){const cp=res.clone();caches.open(name).then(c=>c.put(r,cp))}return res};
 if(page){e.respondWith(fetch(r,{cache:"no-store"}).then(put(C)).catch(()=>caches.match(r,{ignoreSearch:true}).then(x=>x||caches.match("index.html"))));return}
 e.respondWith(caches.match(r).then(x=>x||fetch(r).then(put(quran?Q:C))))});
/* Notifications */
self.addEventListener("push",e=>{let d={};try{d=e.data.json()}catch(x){d={title:"Mon Hifz",body:e.data?e.data.text():""}}
 e.waitUntil(self.registration.showNotification(d.title||"Mon Hifz",{body:d.body||"",tag:d.tag||"monhifz",icon:"icons/rose.png",badge:"icons/rose.png",data:{url:"./"}}))});
self.addEventListener("notificationclick",e=>{e.notification.close();e.waitUntil(clients.matchAll({type:"window",includeUncontrolled:true}).then(l=>{for(const c of l){if("focus" in c)return c.focus()}return clients.openWindow("./")}))});
