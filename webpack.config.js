const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./target/index.js",
  output: {
    path: path.resolve(__dirname, "public/js/libs"),
    filename: "bundle.js",
    clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        // docs: https://webpack.js.org/configuration/module/#resolvefullyspecified
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
          alias: {
            models: "../src/amplify/models/index.js",
            "ui-components": "../src/amplify/ui-components",
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
