'use strict';

var fs = require('fs');
var path = require('path');

var express = require('express');
var app = express();

var compress = require('compression');

app.use(compress());
app.use('/app', express.static(path.join(process.cwd(), '/app')));

app.disable('x-powered-by');

var port = Number(process.env.PORT || 1981);
app.listen(port, function () {
  console.log('server running at localhost:1981');
});

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var webpackDevConfig = require('./webpack.config.development');

new WebpackDevServer(webpack(webpackDevConfig), {
  publicPath: '/app/assets/',
  contentBase: './app/assets/',
  inline: true,
  hot: true,
  stats: false,
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:1981',
    'Access-Control-Allow-Headers': 'X-Requested-With'
  }
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('webpack dev server listening on localhost:3000');
});
