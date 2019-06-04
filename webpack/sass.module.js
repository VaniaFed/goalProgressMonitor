const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  test: /\.module.sass$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      query: {
        localIdentName: '[hash:8]',
        modules: true
      }
    },
    {
      loader: 'sass-loader'
    }
  ]
}
