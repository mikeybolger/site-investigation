var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/site', function () {
	console.log('mongodb connected to site database')
})
module.exports = mongoose