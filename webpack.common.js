const path = require("path");

// Plugins import
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// -------------------------------
// Individual rules config

const rulesForAssets = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  exclude: "/node_modules",
  type: "asset/resource",
};

const rulesForSassStyles = {
  test: /\.scss$/i,
  exclude: "/node_modules",
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        sourceMap: false,
      },
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: false,
      },
    },
  ],
};

// -------------------------------

// -------------------------------
// Plugins config

const plugins = [
  new HtmlWebpackPlugin({
    title: "FrontEnd Mentor | Base Apparel Coming Soon",
    favicon: "./src/assets/images/favicon-32x32.png",
    showErrors: true,
    template: "./src/index.html",
  }),
  new MiniCssExtractPlugin({
    filename: "[name][contenthash].bundle.css",
  }),
];

// -------------------------------

const rules = [rulesForSassStyles, rulesForAssets];

module.exports = {
  entry: "./src/js/App.js",
  output: {
    filename: "[name][contenthash].bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },

  module: { rules },

  resolve: {
    alias: {
      Images: path.resolve(__dirname, "src/assets/images"),
      Styles: path.resolve(__dirname, "src/scss/app.scss"),
    },
  },

  plugins: plugins,
};
