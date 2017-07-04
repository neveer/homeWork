const path = require('path');
const DIST_PATH = path.resolve(__dirname, '../dist');
var baseConfig = require('./base.js');
var config =Object.assign({},baseConfig,{
  devtool:'cheap-module-source-map'
});

config.devServer = {
  port: 7777,
  host: 'localhost',
  historyApiFallback: true,
  noInfo: false,
  stats: 'minimal',
  // contentBase: DIST_PATH,
  publicPath: DIST_PATH,
  hot: true,
};
module.exports= config;
