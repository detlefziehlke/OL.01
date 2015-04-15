/**
 * Created by detlefziehlke on 15.04.15.
 */

"use strict"

var express = require('express');
var app = express();

var port = process.env.port || 3000;

//app.get('/', function (req, res, next) {
//  //res.end('here we go');
//  next();
//});

app.use('/', express.static(__dirname + '/sandbox'));
app.use('/chap-4', express.static(__dirname + '/sandbox/chap-4'));
app.use('/css', express.static( __dirname + '../../css'));
app.use('/libs', express.static( __dirname + '../../libs'));

app.listen(port);
console.log('Server is running at port ' + port);

