var_ = require('lodash')
var ws = require('ws')
var clients = []

exports.connect = function (server) {
	var wss = new ws.Server({server: server})
	wss.on('connection', function (ws) {
		clients.push(ws)
		exports.broadcast('seccess ws session joined')

		ws.on('close', function () {
			_.remove(clients, ws)
		})
	})
}

exports.broadcast = function (topic, data) {
	var json = JSON.stringify({topic: topic, data: data})
	clients.forEach(function (client) {
		client.send(json)
	})
}
