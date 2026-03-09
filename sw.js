const CACHE_NAME = 'ramadan-tracker-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Amiri:wght@400;700&display=swap'
];

// Install — cache core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — network first, fallback to cache (so prayer times are always fresh when online)
self.addEventListener('fetch', e => {
  // Skip non-GET and cross-origin API requests (geocoding, timezone)
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // For API calls (nominatim, timeapi), always use network
  if (url.hostname.includes('nominatim') || url.hostname.includes('timeapi')) {
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Clone and cache successful responses
        if (res.ok) {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, resClone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
