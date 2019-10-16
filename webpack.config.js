const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'app', 'index'),
  watch: true,
  output: {
    path: __dirname,
    filename: 'bundle.js',
    chunkFilename: '[name].js'
  },
  // module: {
  //   rules: [
  //     {
  //       test: /.jsx?$/,
  //       include: [path.resolve(__dirname, 'app')],
  //       exclude: [path.resolve(__dirname, 'node_modules')],
  //       loader: 'babel-loader',
  //       query: {
  //         presets: [
  //           [
  //             '@babel/env',
  //             {
  //               targets: {
  //                 browsers: 'last 2 chrome versions'
  //               }
  //             }
  //           ]
  //         ]
  //       }
  //     }
  //   ]
  // },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    })
  ]
};
