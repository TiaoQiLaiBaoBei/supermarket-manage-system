module.exports = {
  outputDir: 'dist', // 输出文件目录
  devServer: {
    host: '0.0.0.0', // 局域网和本地访问
    port: 8080, // 启动端口
    https: false, // 是否启用https
    open: false // 启动后是否自动打开网页
  },
  // webpack配置 在控制台执行：vue inspect > output.js 得到解析好的配置。
  // 1、解决引入.bmp图片文件无法使用的问题。
  chainWebpack: config => {
    config.module.rule('images').test(/\.(png|bmp|jpe?g|gif|webp)(\?.*)?$/)
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }
  }
}
