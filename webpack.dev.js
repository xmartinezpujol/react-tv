const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: 5000,
    proxy: {
      '/cms': {
        target: 'http://localhost:80/app_dev.php/',
      },
    },
    historyApiFallback: true,
    contentBase: './dist',
    open: true,
    openPage: '',
  },
});
