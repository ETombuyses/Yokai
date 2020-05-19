// Inside vue.config.js
// documentation on vue cli plugins : PWA, configuraiton
module.exports = {
  pwa: {
    name: 'Yokai',
    themeColor: '#D90429',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    orientation: "portrait",
    manifestOptions: {
      display: 'fullscreen'
    },
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/service-worker.js',
    }
  }
}