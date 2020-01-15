const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')  //在Vue-loader版本高于15时，需要使用VueLoaderPlugin
const htmlWebpackPlugin = require('html-webpack-plugin') //将index.html打包到dist文件夹之中

module.exports = {
  //入口: 可以是字符串/数组/对象，因为这里只有一个，所以只需要一个字符串即可
  entry: './src/main.js',
  //出口: 通常是一个对象，里面至少包含两个重要的属性，path和filename
  output: {
    // path: path.resolve(__dirname, 'dist'),  //path通常为一个绝对路径，可以使用node的path模块
    path: path.resolve(__dirname, '../dist'),  //path通常为一个绝对路径，可以使用node的path模块,当webpack的配置文件分离时，需要根据情况将这里的路径进行更改
    filename: 'bundle.js',
    // publicPath: 'dist/'  //将打包后的文件都拼接一个dist/ ， 有了html-webpack-plugin之后，所有js会自动插入，因此不需要了
  },
  module: {
    rules: [
      //当有多个的loader需要编译时，可以添加多个规则
      {
        test: /\.css$/,
        //使用css-loader加载css，使用style-loader将样式使用到dom中
        //使用多个loader时，从右向左
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            //limit：当文件大小小于limit规定的大小时，使用base64进行编译，当大于规定的大小时，使用file-loader进行加载
            loader: 'url-loader',
            options: {
              limit: 140000,
              //对命名做出限制，其中img/为文件夹，[name]为保存改文件或图片原有的名字，[hash:8]为保留hash值得八位，[ext]为保留原有的扩展名
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },

  // 将Vue的版本从runtime-only切换到runtime-compiler，以使vue可以正常编译
  resolve: {
    // 解决扩展名，当有文件的扩展名不想写的时候，在此处添加或者修改
    extensions: ['.js','.css','.vue'],
    // 解决路径问题
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  plugins: [
    //在Vue-loader版本高于15时，需要使用VueLoaderPlugin
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      //为打包后的index指定模板
      template: 'index.html'
    })
  ],
}
