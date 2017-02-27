var mongoose = require('mongoose');
var config = require('./config');
var apiController = require('./controllers/apiController');
var express = require('express');
var bodyParser = require("body-parser");
var app     = express();
var port    = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.htm');  
});

mongoose.connect(config.getDbConnectionString());
apiController(app);

app.listen(port);