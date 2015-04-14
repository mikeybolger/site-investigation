var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/site', function () {
	console.log('mongodb connected')
})
module.exports = mongoose