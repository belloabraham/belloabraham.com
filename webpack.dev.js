const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js", //Js file name format that hold js and css for a givin page, defined in entry of webpack.common.js
    path: path.resolve(__dirname, "dist") // production location for entry js file in webpack.common.js
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", //Template to inject js and commonjs css
      inject:'body', //Where to inject js and commonjs css for styles in template, defaults to head
      favicon: "./src/favicon.ico", //locaton of favicon to inject in template head
      chunks:['main','index'] 
    }),
    new HtmlWebpackPlugin({
      inject:'body',
      filename:"404.html", //Name of the file to copy to dist folder in prod, defaults to index
      favicon: "./src/favicon.ico",
      template: "./src/404.html",
      chunks:['main','error'] //What script to inject for template, defaults to index
    }),
     new HtmlWebpackPlugin({
      inject:'body',
      filename:"privacy/index.html", //Name of the file to copy to dist folder in prod, defaults to index
      favicon: "./src/favicon.ico",
      template: "./src/privacy/index.html",
      chunks:['main','privacy'] //What script to inject for template, defaults to index
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
    ]
  },
});