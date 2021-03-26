const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client/src', 'index.js'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'client/src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
            ,
          },
        }],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', { loader: 'css-loader', options: { modules: true } }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
