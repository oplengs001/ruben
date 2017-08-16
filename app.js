var express = require('express')
var app = express()
var path = require("path")
const bodyParser= require('body-parser');
var routes = require('./routing/router');
var hbs = require('express-handlebars');

console.log('listening on port 3000');
app.listen(3000)
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'index', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname,'views'));
app.set('view engine','hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use( '/' ,routes);


module.exports = app;
