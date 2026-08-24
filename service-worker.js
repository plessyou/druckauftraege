const CACHE_NAME = "siebdruckauftraege-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if(request.method !== "GET") return;

  const url = new URL(request.url);
  if(url.origin !== self.location.origin) return;

  if(request.mode === "navigate"){
    event.respondWith(
      fetch(request)
        .then(response => {
          const kopie = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put("./index.html", kopie));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(gespeichert => {
      const aktuell = fetch(request)
        .then(response => {
          if(response.ok){
            const kopie = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, kopie));
          }
          return response;
        })
        .catch(() => gespeichert);
      return gespeichert || aktuell;
    })
  );
});
