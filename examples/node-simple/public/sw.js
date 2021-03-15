const CORE_CACHE = 1
const CORE_CACHE_NAME = `core-v${CORE_CACHE}`
const CORE_ASSETS = ["manifest.json","/offline"] 

self.addEventListener('install', (e) => {
    console.log("Installed")
    e.waitUntil(
        caches.open(CORE_CACHE_NAME)
        .then(cache => cache.addAll(CORE_ASSETS))
        .then(() => self.skipWaiting())
    )
})

self.addEventListener("activate", (e) => {
    console.log("Activated")
    e.waitUntil(clients.claim())
})

self.addEventListener("fetch", (e) => {
    
    const req = e.request
    console.log("Fetching:" + req.url)
    
    e.respondWith(
        caches.match(req)
        .then(cachedRes => {
            if (cachedRes) {
                return cachedRes
            }
            return fetch(req)
                .then((fetchRes) => fetchRes)
                .catch((err) => {
                    return caches.open(CORE_CACHE_NAME)
                    .then(cache => cache.match('/offline'))})
        })
    )
})