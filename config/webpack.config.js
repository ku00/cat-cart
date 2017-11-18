const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: `${__dirname}/app`,
  entry: './src',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  devtool: 'source-map'
}