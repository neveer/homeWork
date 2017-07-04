const path = require('path');
const webpack = require('webpack');

var baseConfig = require('./base.js');
var config = Object.assign({}, baseConfig, {
  devtool: 'cheap-module-source-map'
});
config.plugins.push(new webpack.DefinePlugin({
  'process.env.MODE_ENV': '"development"'
}));

module.exports = config;