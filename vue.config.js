module.exports = {
  publicPath: './',
  devServer: {
    port: 8686,
    open: true,
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:30001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  configureWebpack: () => {}
}
