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
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
    ],
  },
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: './stylesheets/main.css'
            }
        ),
        new HtmlWebpackPlugin({
            template: './src/templates/index.html',
        }),
        new CleanWebpackPlugin(),
    ]
};


