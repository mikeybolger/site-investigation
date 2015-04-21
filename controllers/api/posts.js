var router = require('express').Router()
var Post = require('../../models/post')
var websockets = require('../../websockets')

pubsub.publish('new_project', post)

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
    fileRef:    req.body.fileRef,
    prefix:     req.body.prefix,
    firstName:    req.body.firstName,
    lastName:     req.body.lastName,
    address:    req.body.address,
    townland:     req.body.townland,
    phone:      req.body.phone,
    fax:      req.body.fax,
    email:      req.body.email,
    noResidents:  req.body.noResidents,
    noDoubleBeds: req.body.noDoubleBeds,
    noSingleBeds: req.body.noSingleBeds,
    waterSupply:  req.body.waterSupply

  })
  post.username = req.auth.username
  post.save(function (err, post) {
    if (err) { return next(err) }
    websockets.broadcast('new_project', post)
    res.status(201).json(post)
  })
})

module.exports = router




