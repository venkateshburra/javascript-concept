// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist/assets'),
//     filename: 'bundle.js'
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname, 'dist'),
//     publicPath: '/assets/'
//   }
// }

const path = require('path');

module.exports = {
  mode: 'development', // Add mode to set development environment
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js',
    publicPath: '/assets/' // Move publicPath here
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist') // Serve static files from 'dist' directory
    },
    compress: true,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
