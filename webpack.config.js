const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.css$/i,
       // (Loads right to left), style-loader injects into DOM, needs to be left-most command.
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true
  },
  watch: true,
};