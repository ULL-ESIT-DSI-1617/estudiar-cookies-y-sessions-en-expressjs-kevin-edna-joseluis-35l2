var express = require('express');
var app = express();

app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});


app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});


app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});


app.get('/ab(cd)?e', function(req, res) {
 res.send('ab(cd)?e');
});

app.get(/a/, function(req, res) {
  res.send('/a/');
});


app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});


app.listen(8081, function() {
    console.log("Servidor escuchando en el puerto: 8081");
});