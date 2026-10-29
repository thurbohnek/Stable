const C='stable-v133',F=['./','index.html','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim();});
/* network first, so updates arrive at once; cache when offline.
   Only page loads fall back to the game page; images and other files never get HTML back. */
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
  /* (Oct 29) a page load that gets a server error (site down: 5xx) also falls back to the saved game */
  e.respondWith(fetch(e.request).then(r=>{if(r&&r.ok&&new URL(e.request.url).origin===location.origin){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));}
      if(r&&r.status>=500&&e.request.mode==='navigate')return caches.match(e.request).then(m=>m||caches.match('index.html')).then(m=>m||r);return r;})
    .catch(()=>caches.match(e.request).then(r=>r||(e.request.mode==='navigate'?caches.match('index.html'):Response.error()))));});
