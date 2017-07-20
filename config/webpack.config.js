var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  performance: {
    hints: false
  },
  entry: {
    'ng-simple-grid.umd': './src/index.ts',
    'ng-simple-grid.umd.min': './src/index.ts'
  },
  output: {
    path: path.join(__dirname, '../bundles'),
    filename: '[name].js',
    library: 'ng-simple-grid',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'strip-sourcemap-loader'
        ]
      },
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader?configFileName=src/tsconfig.app.json&declaration=false',
          'angular2-template-loader'
        ]
      },
      {
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: [ '../src', path.join(__dirname, '../node_modules') ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ],
  externals: [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    'rxjs/Rx'
  ]
};