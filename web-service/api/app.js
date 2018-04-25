/**
 * Created by Carlos Leonardo Camilo Vargas HUuamán on 25/4/18.
 */
var express = require("express");
var bodyParser = require('body-parser');


var index = require('./routes/index');
var user = require('./routes/user');
/*console.log("veamos " + user);*/

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);
app.use('/user', user);

app.listen(8123);