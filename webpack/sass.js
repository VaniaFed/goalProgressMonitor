module.exports = {
  test: /\.sass$/,
  exclude: /\.module\.sass$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: false
      }
    },
    'sass-loader'
  ]
}
