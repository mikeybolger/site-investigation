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

app.post('/api/posts', function (req, res) {
	console.log('post recieved')
	console.log(req.body.fileRef)
	console.log(req.body.prefix)
	console.log(req.body.firstName)
	console.log(req.body.lastName)
	console.log(req.body.address)
	console.log(req.body.townland)
	console.log(req.body.phone)
	console.log(req.body.fax)
	console.log(req.body.email)
	console.log(req.body.noResidents)
	console.log(req.body.noDoubleBeds)
	console.log(req.body.noSingleBeds)
	console.log(req.body.waterSupply)

})