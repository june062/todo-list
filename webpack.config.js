const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    "webpack-dev-server/client?http://127.0.0.0:8080",
    "webpack/hot/only-dev-server",
    './src/index.js'],

  devtool: "inline-source-map",
  devServer: {
   static: "./dist",
    watchFiles: ['src/*.html',], 
    port: 8080,
    open: true,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module:{
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }
    ]

},
  plugins:[
    new HtmlWebpackPlugin({
      title: "Todo",
      template: "./src/index.html",
      inject: 'head',
      scriptLoading: "defer"
    })
  ]
};