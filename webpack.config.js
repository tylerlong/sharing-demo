module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "index.bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
};
