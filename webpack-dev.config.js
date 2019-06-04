const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const eslintAndBabel = require('./webpack/eslintAndBabel')
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
    path: path.resolve(__dirname, 'dist/client'),
    filename: '[name].js',
    sourceMapFilename: 'name.js'
  },
  devtool: '#source-map',
  node: {
    fs: 'empty'
  },
  mode: 'development',
  devServer: {
    contentBase: 'dist',
    host: 'localhost',
    port: 3000
  },
  module: {
    rules: [
      eslintAndBabel,
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
      filename: 'index.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/views/index.pug',
      chunks: false
    })
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx']
  }
}
