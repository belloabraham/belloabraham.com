module.exports = {
  entry: {
    main: "./src/main.js",
    index: "./src/index.js", //Js for a particular page, wll also contain css for that page,
    error: "./src/404.js",
    privacy: "./src/privacy/privacy.js",
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
