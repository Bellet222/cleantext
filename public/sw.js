const CACHE_NAME = 'cleantext-v2';
const urlsToCache = [
  '/',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
  // Принудительно активируем новый service worker
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Исключаем файлы Next.js из кэширования (они всегда должны загружаться свежими)
  if (url.pathname.startsWith('/_next/')) {
    event.respondWith(fetch(event.request));
    return;
  }
  
  // Исключаем API запросы
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(fetch(event.request));
    return;
  }
  
  // Для остальных запросов используем стратегию "сначала сеть, потом кэш"
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Кэшируем только успешные GET запросы
        if (response.status === 200 && event.request.method === 'GET') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Если сеть недоступна, пробуем кэш
        return caches.match(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Берем контроль над всеми клиентами сразу
  return self.clients.claim();
});

