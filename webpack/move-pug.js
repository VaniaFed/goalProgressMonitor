module.exports = {
  test: /\.pug$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: '../views/'
      }
    }
  ]
}
