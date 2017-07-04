const path = require('path');
const DIST_PATH = path.resolve(__dirname, '../dist');
var baseConfig = require('./base.js');
var config =Object.assign({},baseConfig,{
  devtool:'cheap-module-source-map'
});
config.plugins.push({
  'process.env.MODE_ENV':'"development"'
});
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NamedModulePlugin());

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
