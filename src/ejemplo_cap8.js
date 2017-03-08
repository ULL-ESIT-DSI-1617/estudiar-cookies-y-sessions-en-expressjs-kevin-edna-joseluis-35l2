var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

//Creamos las Cookies y les damos tiempo de expiracion 
app.get('/cookie',function(req, res){
        res.cookie('Migalleta' , 'TengoHambre' ,{expire : new Date() + 9999});
        res.cookie('ConPepitas' , 'DeChocolate' ,{expire : new Date() + 9999});
        res.send('Galleta Cocinada, rica rica');
});

app.get('/', function(req, res) {
         console.log("Cookies :  ", req.cookies);
});

//Eliminando cookie
 app.get('/clearcookie', function(req,res){
        res.clearCookie('ConPepitas');
        res.send('Me comí la Galleta :)');
    });


app.listen(8080, function() {
    console.log("Servidor escuchando en el puerto: 8080");
});

