const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@const': path.resolve(__dirname, 'src/components/const'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@types': path.resolve(__dirname, 'src/types'),
    },
  },
};