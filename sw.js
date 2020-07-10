self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mocks-cache').then(cache =>
      fetch('./mocks.json')
        .then(response => response.json())
        .then(files => {
          return files.map(f => {
            const resp = new Response(JSON.stringify(f.value), {
              status: 200,
              headers: {
                'Content-Type': 'application/json',
              },
            })
            return cache.put(f.key, resp)
          })
        }),
    ),
  )
})

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url)
  event.respondWith(
    caches.match(url.pathname).then(response => {
      if (response) {
        return response
      } else {
        return fetch(event.request)
      }
    }),
  )
})
