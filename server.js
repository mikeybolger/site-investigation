var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function (req, res) {
	res.json ([
		{
			fileRef: '67557776',
			prefix: 'Mr',
			firstName: 'John',
			lastName: 'Doe',
			address: 'Main Street',
			townland: 'Some Town',
			phone: '1234567',
			fax: '7654321',
			email: 'john@email.com',
			noResidents: '4',
			noDoubleBeds: '2',
			noSingleBeds: '2',
			waterSupply: 'well'
		}
	])
})

app.listen(3000, function () {
	console.log('Listening on port', 3000)
})