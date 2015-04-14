var db = require('../db')
var Post = db.model('Post', {
  	fileRef: 		{ type: String, required: true },
	prefix: 		{ type: String, required: true },
	firstName: 		{ type: String, required: true },
	lastName: 		{ type: String, required: true },
	address: 		{ type: String, required: true },
	townland: 		{ type: String, required: true },
	phone: 			{ type: String, required: true },
	fax: 			{ type: String, required: true },
	email: 			{ type: String, required: true },
	noResidents: 	{ type: String, required: true },
	noDoubleBeds: 	{ type: String, required: true },
	noSingleBeds: 	{ type: String, required: true },
	waterSupply: 	{ type: String, required: true },
	fax: 			{ type: String, required: true },
  	date:     { type: Date,   required: true, default: Date.now }
})

module.exports = Post