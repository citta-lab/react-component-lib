
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env', 'babel-preset-react'],
          plugins: [
            'array-includes',
            'transform-object-rest-spread',
            'transform-class-properties',
          ],
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
