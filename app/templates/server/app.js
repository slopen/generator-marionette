'use strict';

var express = require("express"),
  lessMiddleware = require("less-middleware"),
  expressWinston = require('express-winston'),
  MongoDB = require('winston-mongodb').MongoDB,
  winston = require('winston'),
  app = express(),
  http = require('http'),
  path = require('path'),
  port = parseInt(process.env.PORT, 10) || 9000

  // var __dirname = '../' + process.argv[2]
  __dirname = path.resolve(__dirname, '../app')
  app.configure("development", function() {
    app.use(lessMiddleware({
      src: __dirname,
      compress: true,
      debug: true,
      force: true
    }));
    app.use(express.static(__dirname));
  });
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.responseTime());
app.use(express.bodyParser());

app.get("/", function(req, res) {
  res.redirect('/index.html');
})
var server = http.createServer(app)
server.listen(port, function() {
  console.log('express server started..');
})