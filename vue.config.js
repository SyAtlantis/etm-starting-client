module.exports = {
  publicPath: "./",
  // baseUrl: "./",
  outputDir: "publish",
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    port: 7777
  }
}