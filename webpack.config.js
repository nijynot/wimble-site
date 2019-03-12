const path = require('path');

module.exports = {
  entry: {
    index: './render.js',
  },
  output: {
    path: path.resolve(__dirname, './assets/js'),
    publicPath: './assets/js/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // include: path.resolve(__dirname, "src"),
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      { test: /\.(jpe?g|png|gif|svg|woff|woff2|eot)$/i, loader: 'file-loader' },
    ],
  },
};
