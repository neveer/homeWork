const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_PATH = path.resolve(__dirname, '../dist');
const SRC_PATH = path.resolve(__dirname, '../src');
const env = process.argv.env;

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/homeWork/index'),
    vendor: ['react', 'react-dom', 'antd', 'lodash']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].min.js',
    publicPath: '',
    sourceMapFilename: '[name].map'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'home work',
      template: path.resolve(__dirname, '../src/homeWork/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.min.js'
    }),
    new ExtractTextPlugin({
      filename: 'index.min.css',
      allChunks: true
    })
  ],
  // eslint: {
  //   fix: true,
  //   configFile: path.resolve(__dirname, '../.eslintrc')
  // },
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
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
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            emitError: true,
          }
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['env']
        //   }
        //}
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
}