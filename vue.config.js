const path = require('path')

module.exports = {
  css: { extract: true },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    // vue默认@指向src目录
    config.resolve.alias
      .set('@packages', path.resolve('packages'))

    // packages和examples目录需要加入编译
    config.module
      .rule('compile')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
  }
}