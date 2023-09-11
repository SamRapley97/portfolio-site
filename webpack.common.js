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
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(gif|png|avif|jpe?g)$/,
      type: "asset/resource",
      generator: {
        filename: "[name][ext]",
        publicPath: "assets/images/",
        outputPath: "assets/images/",
      },
    },
    {
      test:/\.html$/,
      use: [
        'html-loader'
      ]
    },
  ]
  },

 

  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'custom template',
      template: './src/index.html'
    })
  ]
};

