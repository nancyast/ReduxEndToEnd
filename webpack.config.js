const path = require('path');
const webpack = require('webpack');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'app', 'index'),
  // watch: true,
  output: {
    path: __dirname + '/assets',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'app')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: '#cheap-module-source-map',
  // devServer: {
  //   historyApiFallback: true
  // }
  // plugins: [
  //   new BrowserSyncPlugin({
  //     // this plugin is used with webpack-dev-server
  //     host: 'localhost',
  //     port: 3000,
  //     proxy: 'http://localhost:8080/'
  //   })
  // ]
  // plugins: [
  //   new ExtractTextPlugin({
  //     filename: 'styles.css'
  //   })
  // ]
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
};
