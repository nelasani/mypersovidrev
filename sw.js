// Bump the version number below whenever you replace index.html, so phones refresh their copy.
const C='mpvr-v2',FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x!=='mpvr-share').map(x=>caches.delete(x)))));self.clients.claim()});

// Share to VidRev: the phone sends the video here; keep it briefly and open the app
async function handleShare(req){
  try{
    const fd=await req.formData(),f=fd.get('video');
    if(f&&f.size){const c=await caches.open('mpvr-share');
      await c.put('shared-video',new Response(f,{headers:{'Content-Type':f.type||'video/mp4','X-Name':encodeURIComponent(f.name||'shared-video.mp4')}}))}
  }catch(e){}
  return Response.redirect(new URL('./?shared=1',self.registration.scope).href,303);
}
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method==='POST'&&u.origin===location.origin&&u.pathname.endsWith('/share-target')){e.respondWith(handleShare(e.request));return}
  // only handle this site's own files; Gemini API calls and fonts go straight to the network
  if(e.request.method!=='GET'||u.origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r})
    .catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
});
