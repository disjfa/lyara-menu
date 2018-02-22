var Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('site/build/')
  .setPublicPath('/lyara-menu/build')
  .addEntry('lyara-menu', './js/lyara-menu.js')
  .setManifestKeyPrefix('build/')
  .enableSassLoader()
  .enablePostCssLoader()
  .enableSourceMaps(!Encore.isProduction())
  .cleanupOutputBeforeBuild()
;

module.exports = Encore.getWebpackConfig();
