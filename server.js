var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')

var app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(require('./controllers'))
//app.use('/api/posts', require('./controllers/api/posts'))
//app.use(require('./controllers/static'))


var server = app.listen(3000, function () {
	console.log('server listening on %d', server.address().port)
})
//app.use('/api/posts', require('./controllers/api/posts'))
//app.use(require('./controllers/static'))


//app.listen(3000, function () {
//	console.log('Listening on port', 3000)
//})