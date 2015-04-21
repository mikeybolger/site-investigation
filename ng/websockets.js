angular.module('app')
.run(function ($rootScope, $timeout) {
	(function connect () {
		var url = 'ws://localhost:3000'
		var connection = new WebSocket(url)

		connection.onopen = function () {
			console.log('Websocket Connected')
		}

		connection.onclose = function (e) {
			console.log('Websocket disconnected. Trying to reconnect...')
			$timeout(connect, 10*1000)
		}

		connection.onmessage = function (e) {
			var payload = JSON.parse(e.data)
			$rootScope.$broadcast('ws:' + payload.topic, payload.data)

		}
		//connection.onopen = function () {
			//console.log('Websocket Connected')
		//}
	})()
})

/*angular.module('app')
.run(function ($rootScope) {
	var url = 'ws://localhost:3000'
	var connection = new WebSocket(url)

	connection.onopen = function () {
		console.log('Websocket Connected')
	}

	connection.onmessage = function (e) {
		console.log(e)
		var payload = JSON.parse(e.data)
		$rootScope.$broadcast('ws:' + payload.topic, payload.data)
	}
})*/
