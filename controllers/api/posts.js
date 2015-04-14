var router = require('express').Router()
var Post = require('../../models/post')

router.get('/posts', function (req, res, next) {
  Post.find() 
  	.sort('-date')
  	.exec(function (err, posts) {
  		if (err) { return next(err) }
  		res.json(posts)
  })
})

router.post('/posts', function (req, res, next) {
	var post = new Post({
		fileRef: 		req.body.fileRef,
		prefix: 		req.body.prefix,
		firstName: 		req.body.firstName,
		lastName: 		req.body.lastName,
		address: 		req.body.address,
		townland: 		req.body.townland,
		phone: 			req.body.phone,
		fax: 			req.body.fax,
		email: 			req.body.email,
		noResidents: 	req.body.noResidents,
		noDoubleBeds:	req.body.noDoubleBeds,
		noSingleBeds:	req.body.noSingleBeds,
		waterSupply:	req.body.waterSupply
	})
  	post.save(function (err, post) {
    	if (err) { return next(err) }
    	res.json(201, post)
	})
})

module.exports = router
