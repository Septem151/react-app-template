const path = require("path");
const Dotenv = require("dotenv-webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", "./.env.production"),
      safe: path.resolve(__dirname, "..", "./.env.example"),
    }),
    new BundleAnalyzerPlugin(),
  ],
};
