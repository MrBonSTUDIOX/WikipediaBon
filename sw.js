/* WikipediaBon — Service Worker (offline mode)
   Кладите рядом с index.html. Страница работает без интернета после первого открытия. */
const V = "wikipediabon-v1";
self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(["./", "./index.html"])).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin) return;   // only our own files
  if (/\.apk$/i.test(u.pathname) || u.searchParams.has("ping")) return; // never cache the APK / pings
  if (r.mode === "navigate") {                                          // the page: network first, cache as backup
    e.respondWith(fetch(r).then(res => {
      if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put("./index.html", cp)); }
      return res;
    }).catch(() => caches.match("./index.html").then(m => m || caches.match("./"))));
    return;
  }
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => {
    if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); }
    return res;
  })));
});
