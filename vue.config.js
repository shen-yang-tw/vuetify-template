// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
// const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  // configureWebpack: {
  //   output: {
  //     libraryExport: 'default' //Guide: https://cli.vuejs.org/guide/build-targets.html#vue-vs-js-ts-entry-files
  //   },

  //   plugins: [
  //     new MiniCssExtractPlugin({
  //       // Options similar to the same options in webpackOptions.output
  //       // all options are optional
  //       filename: devMode ? '[name].css' : '[name].[hash].shen.css',
  //       chunkFilename: devMode ? '[id].css' : '[id].[hash].shen.css',
  //     }),
  //     require('autoprefixer'), //For postcss-loader-autoprefixer
  //   ],

  //   optimization: {
  //     splitChunks: {
  //       cacheGroups: {
  //         commons: {
  //           name: 'commons',
  //           chunks: 'initial',
  //           minChunks: 2
  //         }
  //       }
  //     }
  //   }
  // },

  // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'
  publicPath: './', //This points to the relative path needed for production otherwise get path error. Default: '/'. The dist directory is meant to be served by an HTTP server. //Guide: https://cli.vuejs.org/guide/deployment.html#previewing-locally
  //Guide for publicPath: https://cli.vuejs.org/config/#publicpath

  // lintOnSave: devMode, //Guide: https://cli.vuejs.org/config/#lintonsave

  //Build the app in multi-page mode - https://cli.vuejs.org/config/#pages
  // pages: {
  //   index: {
  //     entry: 'src/index/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html',
  //     title: 'Index Page',
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   },
  //   subpage: 'src/subpage/main.js'
  // }
}