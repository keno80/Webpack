const webpackmerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackmerge(baseConfig, {
  // 本地dev-serve服务
  devServer: {
    contentBase: './dist',   //服务于./dist文件夹
    inline: true,  //是否需要实时监听
    port: 9090  //运行端口
  }
})
