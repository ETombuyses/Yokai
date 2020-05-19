
self.__precacheManifest = [].concat(self.__precacheManifest || [])

workbox.setConfig({
  debug: true
})

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})



// mettre certaines routes en cache
workbox.routing.registerRoute(
  // quelles routes
  new RegExp('https://jsonplaceholder.typicode.com/(.*)'),
  new workbox.strategies.CacheFirst({
    // options de mise en cache de l'url/route
    cacheName: 'jsonplaceholder',
    method: 'GET',
    // mettre ene cache uniquement les responses avec un statut 0 et 200 (pas les 404 par ex)
    cacheableResponse: {statuses: [0, 200]},
    plugins: [
      new workbox.expiration.Plugin({
        // max d'entrées à mettre en cache (si y en a plus on supprime les plus anciennes)
        maxEntries: 30
      })
    ]
  })
)


workbox.routing.registerRoute(
	new RegExp('https://fonts.(?:googleapies|gstatic).com/(.*)'),
	new workbox.strategies.CacheFirst({
		cacheName: 'googleapis',
		method: 'GET',
		cacheableResponse: { statuses: [0, 200] },
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 30
			})
		]
	})
)
