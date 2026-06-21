// Minimal service worker — exists so the registration in index.html doesn't throw.
// Add caching strategy here later if you want true offline support.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});  // pass-through, let browser handle normally
