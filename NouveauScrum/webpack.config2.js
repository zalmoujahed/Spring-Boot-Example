const path = require('path');

const config = {
  entry: [
    './src/loginIndex.js',
  ],
  mode: 'development',
  output: {
	  path: path.join(__dirname, '/src/main/resources/static/built'),
	  filename: "./bundle2.js"
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