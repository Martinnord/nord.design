const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
    app: "./docs/entry.tsx",
    vendor: ["react", "react-dom"],
  },
  output: {
    path: path.join(__dirname, "lib"),
    filename: "js/[name].bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, "docs", "index.html") }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: "docs/",
  },
};
