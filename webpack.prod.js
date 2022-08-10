const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },  
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(), //Split css out of js and make pure css from common js css
      new HtmlWebpackPlugin({ 
        template: "./src/index.html", //Template to inject js 
        inject:'body', //Where to inject js in template defaults to head
        favicon: "./src/favicon.ico", //Favicon to inject in head of template
         chunks:["global","index"],
        minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
          }
      }),
      new HtmlWebpackPlugin({ 
         inject:'body',
         template: "./src/404.html",
         favicon: "./src/favicon.ico",
        filename: "404.html",
         chunks:["global","error"],
         minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
    ]
  },
  plugins: [
     new CopyPlugin({
      patterns: [
         { from: "./src/humans.txt", to: "." },
        { from: "./src/images/cover.jpg", to: "." },
      ],
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].min.css" }), //3. Rename CSS with hash as file changes and .min ext then move to style file
    new CleanWebpackPlugin() //Delete previous hash files has new ones get generated
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
    ]
  }
});