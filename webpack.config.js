var webpack = require('webpack');
var path = require('path');

//var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
//var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: './js/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
 module : {
	 loaders : [
	      {
		test : /\.js$/,
		exclude: /node_modules/, 
		loader : 'babel-loader'
	      },
              { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
	    ]

  }
};

module.exports = config;
