const webpack = require('webpack');
const path = require('path');


const config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '..', '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, '../', 'src', 'components'),
      'partials': path.resolve(__dirname, '../', 'src', 'assets', 'partials'),
      'constants': path.resolve(__dirname, '../', 'src', 'constants'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: 'file-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  }
};

module.exports = config;
