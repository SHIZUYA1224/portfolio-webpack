const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/javascripts/main.js",
  output: {
    filename: "javascripts/main.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "eval-source-map",
  devServer: {
    static: path.resolve(__dirname, 'src'),
  },
  module: {
    rules: [
        {
            test: /\.(css|scss|sass)$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            type: 'asset/resource',
            generator: {
                filename: 'images/[name][ext]'
            }
        },
        {
            test: /\.pug/,
            use: [
            {
              loader: 'pug-loader',
              options: {
                pretty: true  
              }
            },
          ],
        }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(
        {
            filename: './stylesheets/main.css'
        }
    ),
    new HtmlWebpackPlugin({
        template: './src/templates/index.pug',
    }),
    new CleanWebpackPlugin(),
  ]
};


