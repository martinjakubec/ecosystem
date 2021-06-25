const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: './src/ts/index.ts',
  },
  output: {
    filename: 'eco-bundle.js',
    path: path.resolve(__dirname, 'dist', 'js'),
  },
  devtool: 'inline-source-map',
  mode: 'development',
  watch: true,
  devServer: {
    compress: true,
    port: 3000,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dev Ecosystem',
      template: './src/index.html',
      inject: 'body'
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  
};
