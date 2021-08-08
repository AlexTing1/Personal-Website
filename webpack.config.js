const path = require('path');

const SRC_DIR = path.join(__dirname, '/Client/src');
const DIST_DIR = path.join(__dirname, '/Client/dist');
const CODEMIRROR_PATH = path.resolve(
  __dirname,
  './node_modules/react-responsive-carousel/lib/styles/carousel.min.css',
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
      {
        test: /\.(scss|css)$/,
        include: [/node_modules/],
        use: [
          'to-string-loader', 'css-loader',
        ],
      },
      {
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
