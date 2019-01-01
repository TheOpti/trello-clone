const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./config.base.js');


module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new UglifyJsPlugin(),
  ],
});