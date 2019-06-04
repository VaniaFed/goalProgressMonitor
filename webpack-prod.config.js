const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const babel = require('./webpack/babel')
const pug = require('./webpack/pug')
const css = require('./webpack/css')
const sass = require('./webpack/sass')
const sassModule = require('./webpack/sass.module')
const images = require('./webpack/images')

module.exports = {
  entry: {
    index: './src/public/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  node: {
    fs: 'empty'
  },
  mode: 'production',
  module: {
    rules: [
      babel,
      pug,
      css,
      sass,
      sassModule,
      images
    ]
  },
  plugins: [
    require('autoprefixer'),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/views/pages/index.pug',
      chunks: false
    })
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.css', '.sass']
  }
}
