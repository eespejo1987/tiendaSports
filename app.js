const express = require('express');
const path = require('path');

const app = express();

//localhost:

app.listen(3000, () => console.log ('Esto fue exitoso'));

app.use(express.static('public'));

// Motor de plantilla

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


app.get('/', (req, res)=>{
    res.render("home"); 
});

app.get('/login', function(req, res) {
    res.render("login") 
});

app.get('/register', function(req, res) {
        res.render("register") 
});

app.get('/cart', function(req, res) {
    res.render("cart") 
});
