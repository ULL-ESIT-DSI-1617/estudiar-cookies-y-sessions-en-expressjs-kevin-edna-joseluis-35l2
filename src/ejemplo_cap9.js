var express = require('express'),
    app = express(),
    session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

// Authentication and Authorization Middleware
var auth = function(req, res, next) {
    if (req.session && req.session.user === "pepe" && req.session.admin)
        return next();
    else
        return res.sendStatus(401);
};

// Login endpoint
app.get('/login', function (req, res) {
    if (!req.query.username || !req.query.password) {
        res.send('Login Incorrecto');    
    } else if(req.query.username === "pepe" || req.query.password === "pepespassword") {
        req.session.user = "pepe";
        req.session.admin = true;
        res.send("Login correcto!");
    }
});

// Logout endpoint
app.get('/logout', function (req, res) {
    req.session.destroy();
    res.send("Logout exitoso!");
});

// Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("Si estás viendo esto es que has hecho login correctamente");
});

app.listen(8081);
console.log("Servidor escuchando en el puerto: 8081");