const path = require('path');
const webpack = require('webpack');
const CopyWebpack = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/src",
    filename: "bundle.js",
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {

    loaders: [
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'file?name=[name].html'
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loaders: ['babel-loader']
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, 'src'),
        loaders: ['style', 'css', 'less']
      }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx', '.css']
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
