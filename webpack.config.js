const path = require('path');
const webpack = require('webpack');
 
module.exports = {
  entry: ['./client/'],
  output: {
    path: path.join(__dirname, './dev'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
};


