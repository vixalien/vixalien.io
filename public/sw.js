addEventListener('install', (event) => {
  if (swinstalled != true) {
    event.waitUntil(
      caches
        .open('v1')
        .then((cache) => {
          return cache.addAll([
            '/manifest.json',
            '/fonts/inter.woff2',
            '/favicon/favicon.ico',
            '/favicon/android-chrome-192x192.png',
            '/offline'
          ]);
        })
        .catch((err) => console.log('Uncaught err while pre-caching: ', err))
    );
    var swinstalled = true;
  }
});

onmessage = (e) => {
  console.log('Got a message: ', e);
};
onsync = (e) => {
  console.log('Got a sync: ', e);
};
onpush = (e) => {
  console.log('Got a push: ', e);
};

self.addEventListener('fetch', (event) => {
  console.log('Got a fetch event: ', event);
  event.respondWith(
    caches
      .match(event.request)
      .then((resp) => {
        return (
          resp ||
          fetch(event.request).then((response) => {
            let responseClone = response.clone();
            caches.open('v1').then((cache) => {
              cache.put(event.request, responseClone);
            });
            return response;
          })
        );
      })
      .catch(() => {
        // Replace with offline
        return caches.match('/offline?try=' + event.request.url);
      })
  );
});

self.addEventListener('activate', (event) => {
  var cacheKeeplist = ['v1'];
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (cacheKeeplist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
