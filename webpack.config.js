const path = require('path');
const webpack = require("webpack");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { test: /\.css$/, use: 'css-loader' }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [],
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  entry: {
	filename: path.resolve(__dirname, './src') + '/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'index.js',
	libraryTarget: "dist"
  }
};