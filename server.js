var express = require('express');

// instanciar
var app = express();
app.set('port', (process.env.PORT || 8082));


// Ruteo
app.use(express.static('.'));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});


// Escuchar
var server = app.listen(app.get('port'), function () {
    console.log('Servidor escuchando en el puerto %s', app.get('port'));
});
