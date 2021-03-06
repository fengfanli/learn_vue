const path = require('path')

module.exports = {
  // 入口：可以使字符串/数组/对象，这里我们入口只有一个，所以写一个字符串即可
  entry: './src/main.js',
  // 出口：通常是一个对象，里面至少包含两个重要属性，path和filename
  output: {
    path: path.resolve(__dirname, 'dist'), // __dirname: 当前文件的目录，注意：path 通常是一个绝对路径
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        /*
        * 注意：style-loader需要放在css-loader的前面。
        * 使用多个 loader时，从右往左执行
        * css-loader : 解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
        * style-loader: 将模块的导出作为样式添加到 DOM 中
        * */
        test: /\.css$/, use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于 limit 时，会将图片编译成 base64字符串形式
              // 当加载的图片，大于 limit 时，会使用 file-loader 模块进行加载
              limit: 8192,
              // 这个 name 配置,是自定义 修改 默认生成打包的后图片的名称
              // 可以在 file-loader 的官网中看到
              /*
              * img 文件夹
              * [name] 传过来的图片名称
              * [hash:8] 哈希值取前8位
              * [ext] 带上ext
              * */
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        // 排除 一些包
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ],
  },
}