const path = require('path');

const SRC_DIR = path.join(__dirname, '/Client/src');
const DIST_DIR = path.join(__dirname, '/Client/dist');
const CODEMIRROR_PATH = path.resolve(
  __dirname,
  './node_modules/react-responsive-carousel/lib/styles/carousel.min.css',
);
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const stylePathResolves = (
  `includePaths[]=${path.resolve('./')}&`
  + `includePaths[]=${path.resolve('./node_modules')}`
);

module.exports = {
  entry: [`${SRC_DIR}/index.jsx`],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      /* {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          `${'css' + '!sass?outputStyle=expanded&'}${stylePathResolves}`,
        ),
      }, */ {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      }],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
