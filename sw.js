/* Cert Flashcards service worker — offline app shell + stale-while-revalidate data */
const VER = 'v2026-11-12d';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable.png',
  './apple-touch-icon.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VER).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VER).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin || e.request.method !== 'GET') return;
  e.respondWith(
    caches.open(VER).then(async (cache) => {
      const cached = await cache.match(e.request);
      const refresh = fetch(e.request)
        .then((res) => {
          if (res && res.ok) cache.put(e.request, res.clone());
          return res;
        })
        .catch(() => null);
      if (cached) {
        refresh.catch(() => {});
        return cached;
      }
      const net = await refresh;
      // offline fallback: navigations get the app shell, everything else falls back to it too
      return net || cache.match('./index.html');
    })
  );
});
