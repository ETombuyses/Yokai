
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

// notifications
self.addEventListener('push', event => {
  let pushMessage = event.data.text()

  // icon depuis dossier public !!!!
  // vibrate = 4 vibrations de x milli sec
  // tag = va avec la vibration
  const options = {
    body: pushMessage,
    icon: './img/apple-touch-icon-60x60.png',
    image: './img/apple-touch-icon-60x60.png',
    vibrate: [200, 100, 200, 100],
    tag: 'vibration-sample'
  }

  // on attend d'avoir reçu le push ?
  event.waitUntil(
    self.registration.showNotification(pushMessage, options)
  )
})

// gérer le click sur les notifs
self.addEventListener('notificationclick', event => {
  // fermer la notif (important sinon on peut pas en push de nouvelles tant qu'une ancienne est active)
  event.notification.close()

  // page de redirectiion
  const promiseChain = clients.openWindow('http://127.0.0.1:8887/#/')
  event.waitUntil(
    promiseChain
  )
})