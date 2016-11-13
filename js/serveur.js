/*var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200);
	res.end('Salut tout le monde');
});*/
var express = require('express');
var app = express();
var path = require('path');

app.get('/',function(req.res){
	res.sendFile(path.join(__dirname + 'index.html'));
});
server.listen(8050);