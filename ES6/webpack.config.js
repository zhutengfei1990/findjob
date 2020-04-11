const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './build/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin({
    //   cleanAfterEveryBuildPatterns: 'build'
    // })
  ]
}