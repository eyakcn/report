var path = require('path');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname, 'src/main/js'),
  entry: ['./app.js', './report.js'],
  devtool: 'sourcemaps',
  cache: true,
  debug: true,
  output: {
    path: path.join(__dirname, 'src/main/webapp'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: path.join(__dirname, 'src/main/js'), loader: 'babel'},
      {test: path.join(__dirname, 'src/main/js'), loader: 'eslint'},

      {test: /\.jsx$/, loader: 'babel'},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.scss$/, loader: 'style!css!sass'},
      {
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },

      // **IMPORTANT** This is needed so that each bootstrap js file required by
      // bootstrap-webpack has access to the jQuery object
      {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'},
      {test: /[\/]angular\.js$/, loader: "exports?window.angular"},

      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  },
  plugins: [
    new NgAnnotatePlugin({
      add: true
    }),
    new ExtractTextPlugin("bundle.css", {
      allChunks: true
    })
  ]
};