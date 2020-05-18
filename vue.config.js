// Inside vue.config.js
// documentation on vue cli plugins : PWA, configuraiton
module.exports = {
  pwa: {
    name: 'Yokai',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      display: 'fullscreen'
    }
  }
}