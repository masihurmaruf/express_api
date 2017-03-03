/**
 * Created by masihur on 3/2/17.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000, function(){
    console.log('Server is running on port 3000....');
})
