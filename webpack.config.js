const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const production = process.env.NODE_ENV === 'production' || false;

const banner = `clipboard-mini v${pkg.version}
—
https://github.com/eola/clipboard-mini
Licensed MIT`;

module.exports = {
  mode: 'production',
  entry: './src/clipboard-mini.js',
  output: {
    path: path.resolve('dist'),
    filename: production ? 'clipboard-mini.min.js' : 'clipboard-mini.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  optimization: {
    minimize: production,
    minimizer: [
      new UglifyJSPlugin({
        parallel: require('os').cpus().length,
        uglifyOptions: {
          ie8: false,
          keep_fnames: false,
          output: {
            beautify: false,
            comments: (node, {value, type}) => type == 'comment2' && value.startsWith('!')
          }
        }
      })
    ]
  },
  plugins: [new webpack.BannerPlugin({ banner })]
};