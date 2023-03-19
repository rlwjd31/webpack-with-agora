const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const common = require("./webpack.common.js");

// 첫 번째 인자는 "MiniCssExtractPlugin"를 넣어주기 위함...;;
const customizedProductCommon = {
  ...common,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = merge(customizedProductCommon, {
  mode: "production",
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [new MiniCssExtractPlugin()],
});

// console.log(
//   merge(injectedStyleLoaderCommon, {
//     mode: "development",
//     devServer: {
//       port: 8000,
//     },
//     devtool: "eval-source-map",
//   }).module.rules
// );
