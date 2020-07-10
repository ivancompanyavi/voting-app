import './components/index.js'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async function () {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      })
      // Registration was successful
      console.log(
        'ServiceWorker registration successful with scope: ',
        registration.scope,
      )
      const resp = await fetch('/api/ideas')
      if (resp.ok) {
        const payload = await resp.json()
        console.log(payload)
      }
    } catch (err) {
      console.log('ServiceWorker registration failed: ', err)
    }
  })
}
