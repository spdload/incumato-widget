const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: [
    "./src/index.js",
    "./src/style.css"
  ],
  resolveLoader: {
        modules: [
            'node_modules',
        ],
    },
  mode: 'production',
  output: {
      path: __dirname + "/dist/",
      filename: 'bundle.min.js'
  },
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    }), 
    new OptimizeCSSAssetsPlugin({})]
  },
  module: {
         rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it use publicPath in webpackOptions.output
                  publicPath: '/dist'
                }
              },
              "css-loader"
            ]
          }
        ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "./style.min.css",
        chunkFilename: "result.css"
      })
    ],
};
