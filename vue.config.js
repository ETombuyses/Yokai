// Inside vue.config.js
// documentation on vue cli plugins : PWA, configuraiton
module.exports = {
  pwa: {
    name: "Yokai",
    themeColor: "#D90429",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    orientation: "portrait",
    iconPaths: {
      favicon32: 'yokai-logo.png',
      favicon16: 'yokai-logo.png',
      appleTouchIcon: 'yokai-logo.png',
      maskIcon: 'yokai-logo.png',
      msTileImage: 'yokai-logo.png'
    },
    manifestOptions: {
      display: "fullscreen",
    },
    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "src/service-worker.js"
    }
  }
};
