/* eslint-disable no-unused-vars */
const webpack = require('webpack')
const path = require('path')

const config = {
  entry: [

    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'style-loader!css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: 'file-loader',
        options: {
          limit: 25000
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.png',
      '.jpg',
      '.svg'
    ]
  },
  devServer: {
    contentBase: './dist',
    open: true
  }
}

module.exports = config
