const path = require('path');

const config = {
  entry: [
    './src/index.js',
  ],
  mode: 'development',
  output: {
	  path: path.join(__dirname, '/src/main/resources/static/built'),
	  filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader'
        ],
        exclude: /node_modules/,
      }
    ],
  },
};

module.exports = config;