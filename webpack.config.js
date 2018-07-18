const path = require('path')
const webpack = require('webpack')

const options = {
  cache: true,

  entry: {
    core: [
      'babel-polyfill',
      path.join(__dirname, 'src/frontend/Index.jsx')
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'public/js'),
    publicPath: '/js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [],
  mode: 'development',
  performance: { hints: false }
}

if (process.env.NODE_ENV === 'production') {
  options.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = options
