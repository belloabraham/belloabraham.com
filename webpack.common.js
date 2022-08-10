module.exports = {
  entry: {
    global: "./src/global.js",
    index: "./src/index.js", //Js for a particular page, wll also contain css for that page,
    error: "./src/404.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif|webp)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        type: "asset/resource",
      },
    ],
  },
};
