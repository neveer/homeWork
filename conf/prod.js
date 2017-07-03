if (env === 'dev') {
  module.exports = {
    plugins: [
      new webpack.HotModuleReplacementPlugin() // 启用 HMR
    ]
  }
}