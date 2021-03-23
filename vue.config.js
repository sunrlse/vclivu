const path = require('path')
function resolve(dir) {
  return path.resolve(__dirname, dir) 
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('./src/'),
        '@assets': resolve('./src/assets'),
        '@style': resolve('./src/assets/style'),
        '@pages': resolve('./src/pages'),
        '@components': resolve('./src/components'),
        '@constants': resolve('./src/constants'),
        '@ant-design/icons/lib/dist$': resolve('./src/components/antd/icons')
      }
    }
  }
}