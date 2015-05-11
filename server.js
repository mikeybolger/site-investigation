var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')

var static = require('node-static');
//var http = require('http');
var file = new(static.Server)();
//var app = http.createServer(function (req, res) {
  //file.serve(req, res);
//}).listen(2013);

var app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(require('./controllers'))
//app.use('/api/posts', require('./controllers/api/posts'))
//app.use(require('./controllers/static'))


var server = app.listen(3000, function () {
	console.log('server listening on %d', server.address().port)
})

/*var port = process.env.PORT || 3000
var server = app.listen(port, function () {
	console.log('Server', process.pid, 'listening on', port)
})*/