const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", "css, scss"]
  },
  devtool: "source-map",
  watchOptions: {
    poll: true
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    host: "0.0.0.0",
    disableHostCheck: true,
    watchContentBase: true,
    hot: false,
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    })
  ]
};
