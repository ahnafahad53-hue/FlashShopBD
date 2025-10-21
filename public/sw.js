// Minimal service worker to prevent 404 errors
self.addEventListener('install', function(event) {
  // Skip waiting
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  // Take control immediately
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // Let everything through without caching
  return;
});
