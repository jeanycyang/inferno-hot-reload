const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      user: ['react-hot-loader/webpack', 'babel-loader'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
    }],
  },
  resolve: {
    alias: {
      react: 'inferno-compat',
      'react-dom': 'inferno-compat',
    },
  },
};
