module.exports = {
  devServer: {
    port: 8000
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'api': '@/api',
        'common': '@/common',
        'util': '@/util'
      }
    }
  }
}
