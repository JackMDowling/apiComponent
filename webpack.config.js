const path = require("path");

const SRC_DIR = path.join(__dirname, "/src");
const DIST_DIR = path.join(__dirname, "/dist");

module.exports = {
  mode: "development",
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.(png|jpe?g|gig)$/i,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    fallback: { crypto: false },
  },
  externals: {
    react: "React",
  },
};
