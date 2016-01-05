var path = require('path');

module.exports = {
  context: __dirname + '/src/main/js',
  entry: ['./app.js', './report.js'],
  devtool: 'sourcemaps',
  cache: false,
  debug: true,
  output: {
    path: __dirname,
    filename: 'src/main/resources/static/bundle.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src/main/js'),
        loader: 'babel'
      },
      {
        test: path.join(__dirname, 'src/main/js'),
        loader: 'eslint-loader'
      }
    ]
  }
};