const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../app'),
  entry: './src/app.module',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: "../dist",
  },
  devtool: 'source-map'
}