/* WikipediaBon — Service Worker (offline mode). Лежит рядом с index.html.
   Заранее кэшируется только оболочка; фото персонажей кэшируются, когда их открывают. */
const V = "wikipediabon-v4";
const PRE = ["./", "./index.html", "wikipediabon-logo.png", "mrbon-icon.png", "mrbon-studiox-logo.png", "no-internet.png", "no-results.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => Promise.all(PRE.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin) return;
  if (/\.(apk|mp3)$/i.test(u.pathname) || u.searchParams.has("ping") || r.headers.has("range")) return;
  if (r.mode === "navigate") {
    e.respondWith(fetch(r).then(res => {
      if (res.status === 200) { const cp = res.clone(); caches.open(V).then(c => c.put("./index.html", cp)); }
      return res;
    }).catch(() => caches.match("./index.html").then(m => m || caches.match("./"))));
    return;
  }
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => {
    if (res.status === 200) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); }
    return res;
  })));
});
