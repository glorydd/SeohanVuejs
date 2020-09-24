const path = require('path');
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports ={
  mode: 'development',
  devtool : 'eval',
  resolve: {
    extensions: ['.js', '.vue'], //확장자를 제거하고 불러낼수 있다.
  },
  entry :{
    app : './src/main.js',
  },
  module : {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /.s[a|c]ss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  //내보낼 파일의이름
  output: {
    //filename: [name].js
    filename: '[name].js',
    //__dirname 현재 경로, dist 폴더 이름
    path: path.join(__dirname, 'dist'), //경로
  },
}
