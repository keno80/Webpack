const path = require('path')

module.exports = {
  //入口: 可以是字符串/数组/对象，因为这里只有一个，所以只需要一个字符串即可
  entry: './src/main.js',
  //出口: 通常是一个对象，里面至少包含两个重要的属性，path和filename
  output: {
    path: path.resolve(__dirname, 'dist'),  //path通常为一个绝对路径，可以使用node的path模块
    filename: 'bundle.js'
  },
}
