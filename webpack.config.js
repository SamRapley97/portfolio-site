const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');



module.exports = {

module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  ]
  },

  

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'custom template',
      template: './src/index.html'
    })
  ]
};

