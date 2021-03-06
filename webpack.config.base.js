var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var NODE_ENV = process.env.NODE_ENV;

var env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};

Object.assign(env, {
  build: (env.production || env.staging)
});

module.exports = {
  target: 'web',

  entry: {
    vendor: ['babel-polyfill', 'react', 'react-dom'],
    app: ['./app/assets/app.jsx']
  },

  output: {
    path: path.join(process.cwd(), '/app/assets'),
    pathInfo: true,
    publicPath: 'http://localhost:3000/app/assets/',
    filename: '[name].js'
  },

  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'web_modules',
      'node_modules',
      'app/assets'
    ],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    })
  ],

  module: {
    loaders: [
      {test: /\.scss$/, loader: 'style!css!postcss-loader!sass?outputStyle=expanded'}
    ],

    noParse: /\.min\.js/
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};
