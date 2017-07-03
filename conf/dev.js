const path = require('path');
const DIST_PATH = path.resolve(__dirname, '../dist');
module.exports = require('./base.js');

module.exports.devtool = 'cheap-module-source-map';

module.exports.devServer = {
  port: 7777,
  host: 'localhost',
  historyApiFallback: true,
  noInfo: false,
  stats: 'minimal',
  // contentBase: DIST_PATH,
  publicPath: DIST_PATH,
  hot: true,
};
