const path = require('path');
const webpack = require('webpack');
const BUILD_PATH = path.resolve(__dirname, '../dist');
var baseConfig = require('./base.js');
var config = Object.assign({}, baseConfig, {
  devtool: 'cheap-module-source-map'
});
config.plugins.push(new webpack.DefinePlugin({
  'process.env.MODE_ENV': '"development"'
}));
config.plugins.push(new webpack.HotModuleReplacementPlugin());
// config.plugins.push(new webpack.NamedModulePlugin());

config.devServer = {
  port: 80,
  host: 'localhost',
  historyApiFallback: true,
  noInfo: false,
  stats: 'minimal',
  // contentBase: BUILD_PATH,
  publicPath: '',
  hot: true,
};
module.exports = config;