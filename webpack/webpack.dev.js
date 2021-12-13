const path = require("path");
const Dotenv = require("dotenv-webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    port: 3000,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", "./.env.development"),
      safe: path.resolve(__dirname, "..", "./.env.example"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
