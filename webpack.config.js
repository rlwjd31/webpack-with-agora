const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  target: ["web", "es5"],
  entry: {
    main: "./src/script.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: [
        //   argv.mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
        //   "css-loader",
        // ],
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    port: 8000,
  },
  // devtool: "eval-source-map", // 👉🏻 개발자 모드에서 추천되는 sourceMap
};
