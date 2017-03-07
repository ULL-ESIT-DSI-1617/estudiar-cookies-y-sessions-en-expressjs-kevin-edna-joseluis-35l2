var express = require('express');
var app = express();

app.get('/example/a', function (req, res) {
  res.send('Hello from A!');
});


app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});


var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
};

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
};

var cb2 = function (req, res) {
  res.send('Hello from C!');
};

app.get('/example/c', [cb0, cb1, cb2]);


var db0 = function (req, res, next) {
  console.log('DB0');
  next();
};

var db1 = function (req, res, next) {
  console.log('DB1');
  next();
};

app.get('/example/d', [db0, db1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});


app.listen(8082, function() {
    console.log("Servidor escuchando en el puerto: 8082");
});