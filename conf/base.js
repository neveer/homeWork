const path = require('path');
const webpack = require('webpack');

const DIST_PATH = path.resolve(__dirname, '../dist');
const DIR_PATH = path.resolve(__dirname, '../src');
const env = process.argv.env;

module.exports = {
  entry: path.resolve(__dirname, '../src/homeWork/index.jsx'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: DIST_PATH,
    sourceMapFilename: '[name].map'
  },
  plugins: [

  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.json$/,
        use: [
          'json-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
