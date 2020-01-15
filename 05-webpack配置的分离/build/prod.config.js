const webpack = require('webpack')
const webpackmerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackmerge(baseConfig, {
  plugins: [
    new webpack.BannerPlugin('最终版权归keno所有'),
  ],
})
