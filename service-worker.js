const CACHE_NAME = "game-cache-v1";
const ASSETS = [
    "/",
    "/index.html",
    "/level2.html",
    "/script.js",
    "/level2.js",
    "/style.css",
    "/level2.css",
    "/video.html",
    "/video.mp4",
    "/sounds/correct.mp3",
    "/sounds/wrong.mp3",
    "/images/icon.png",
    "/images/background.jpg"
];

// تثبيت الـ Service Worker وتخزين الملفات
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Caching assets...");
            return cache.addAll(ASSETS);
        })
    );
});

// تفعيل الـ Service Worker وحذف التخزين القديم
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        })
    );
});

// جلب الملفات من الكاش عندما لا يكون هناك إنترنت
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
