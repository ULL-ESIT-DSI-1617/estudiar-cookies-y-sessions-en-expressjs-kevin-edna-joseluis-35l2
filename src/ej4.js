var express = require('express');
var app = express();
var path = require('path');

app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id);
  next();
}, function (req, res, next) {
  res.send('User Info: ' + req.params.id);
});

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
  res.end(req.params.id);
});

app.listen(8083, function() {
    console.log("Servidor escuchando en el puerto: 8083");
});
