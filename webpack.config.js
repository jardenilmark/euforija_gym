const path = require('path');
const webpack = require('webpack');

const options = {
  cache: true,

  entry: {
    core: [
      'babel-polyfill',
      path.join(__dirname, 'src/frontend/index.jsx'),
    ],
  },

  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'public'),
    publicPath: '/js',
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [],

};

if (process.env.NODE_ENV === 'production') {
  options.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = options;
