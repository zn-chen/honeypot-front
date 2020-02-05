module.exports = {
  publicPath: '/',
  // css 相关选项
  css: {
    /*为预处理器 loader 传递自定义选项*/
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/main.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.140.148:80/api/v1.0', // 要请求的地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
