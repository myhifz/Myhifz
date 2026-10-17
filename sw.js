// v2 : la page se met à jour dès qu'il y a internet, le reste reste en cache pour le hors-ligne
const C="monhifz-v7",FILES=["./","index.html","app.js","manifest.json","apple-touch-icon.png","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;
 const page=r.mode==="navigate"||r.url.endsWith("/index.html")||r.url.endsWith("sw.js")||r.url.includes("app.js");
 const put=res=>{if(res&&res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res};
 if(page){e.respondWith(fetch(r,{cache:"no-store"}).then(put).catch(()=>caches.match(r).then(x=>x||caches.match("index.html"))));return}
 e.respondWith(caches.match(r).then(x=>x||fetch(r).then(put)))});
