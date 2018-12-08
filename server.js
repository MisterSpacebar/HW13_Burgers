var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var handlebar = require('express-handlebars');

app.engine('handlebars', handlebar({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/controller.js');

app.use(routes);

app.listen(PORT, function(){
    console.log('server listening on http://localhost:'+PORT);
});