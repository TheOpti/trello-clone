const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./config.base.js');


module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
});