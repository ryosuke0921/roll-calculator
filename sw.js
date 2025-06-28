const CACHE_NAME = 'roll-calc-v1';
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME)));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
