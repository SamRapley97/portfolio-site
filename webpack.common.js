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
      test:/\.html$/,
      use: [
        'html-loader'
      ]
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: "[name][ext]",
        publicPath: "assets/images/",
        outputPath: "assets/images/",
      },
    },
  ]
  },

 

  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
 new HtmlWebpackPlugin({
    template: './src/index.ejs',
    minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
    },
    chunksSortMode: 'none'
  })
  ]
};

