const path = require('path');
const SourceMapSupport = require('webpack-source-map-support');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    index: path.resolve(__dirname, 'src', 'index.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.node$/,
        loader: 'node-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.node',
    ],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'),
    ],
    alias: {
      'package.json': path.resolve(__dirname, 'package.json'),
    },
  },
  target: 'node',
  devtool: 'source-map',
  plugins: [
    new SourceMapSupport(),
  ],
};
