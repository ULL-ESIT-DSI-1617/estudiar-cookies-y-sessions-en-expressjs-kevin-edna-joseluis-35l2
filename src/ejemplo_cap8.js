var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');

var app = express();
app.use(cookieParser());

//Creamos la cookie 
app.get('/cookie',function(req, res, next){
        res.cookie('Migalleta' , 'TengoHambre').send('Galleta Cocinada');
         next();
});


app.get('/', function(req, res) {
         console.log("Cookies :  ", req.cookies);
});

// El tiempo de expiración de las cookies

app.listen(8080, function() {
    console.log("Servidor escuchando en el puerto: 8080");
});

