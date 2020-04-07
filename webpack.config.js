const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }, {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
              'file-loader?name=assets/picture/[name].[ext]',
          ],
      }, {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: [
              'file-loader?name=assets/fonts/[name].[ext]'
          ]
      }
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css')
    ]
};