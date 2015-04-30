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
    //1.0 General Details
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
    waterSupply:  req.body.waterSupply,
    //2.0 general Details
    soilType:    req.body.soilType,
    aquifer:     req.body.aquifer,
    vulnerability:    req.body.vulnerability,
    bedrockType:     req.body.bedrockType,
    waterScheme:    req.body.waterScheme,
    gwProtection:     req.body.gwProtection,
    sourceProtection:      req.body.sourceProtection,
    gwResponse:      req.body.gwResponse,
    sigSites:      req.body.sigSites,
    pastExp:  req.body.pastExp,
    comments1: req.body.comments1,
    //3.1 Visual Assessment
    landscapePos:    req.body.landscapePos,
    slope:     req.body.slope,
    houses:    req.body.houses,
    existingLandUse:     req.body.existingLandUse,
    vegitation:    req.body.vegitation,
    gwFlow:     req.body.gwFlow,
    groundCond:    req.body.groundCond,
    siteBound:     req.body.siteBound,
    roads:      req.body.roads,
    outcrops:      req.body.outcrops,
    ponding:      req.body.ponding,
    lakes:  req.body.lakes,
    beaches: req.body.beaches,
    wetlands: req.body.wetlands,
    karst:  req.body.karst,
    watercourse: req.body.watercourse,
    springs: req.body.springs,
    comments2:  req.body.comments2,
    //3.2 Trial hole evaluation
    comments3:    req.body.comments3,
    //3.3 Pre soak t-test
    test1date:     req.body.test1date,
    test1time:    req.body.test1time,
    test2date:     req.body.test2date,
    test2time:    req.body.test2time,
    test3date:     req.body.test3date,
    test3time:    req.body.test3time,
    //3.4 Percolation p-test
    test111:     req.body.test111,
    test112:    req.body.test112,
    avg111:    req.body.avg111,
    test121:     req.body.test121,
    test122:    req.body.test122,
    avg121:    req.body.avg121,
    test131:     req.body.test131,
    test132:    req.body.test132,
    avg131:    req.body.avg131,
    test211:     req.body.test211,
    test212:    req.body.test212,
    avg211:    req.body.avg211,
    test221:     req.body.test221,
    test222:    req.body.test222,
    avg221:    req.body.avg221,
    test231:     req.body.test231,
    test232:    req.body.test232,
    avg231:    req.body.avg231,
    test311:     req.body.test311,
    test312:    req.body.test312,
    avg311:    req.body.avg311,
    test321:     req.body.test321,
    test322:    req.body.test322,
    avg321:    req.body.avg321,
    test331:     req.body.test331,
    test332:    req.body.test332,
    avg331:    req.body.avg331,
    comments4:    req.body.comments4,
    //3,5 Pre soak p-test
    ptest1date:     req.body.ptest1date,
    ptest1time:    req.body.ptest1time,
    ptest2date:     req.body.ptest2date,
    ptest2time:    req.body.ptest2time,
    ptest3date:     req.body.ptest3date,
    ptest3time:    req.body.ptest3time,
    //3.6 Percolation p-test
    ptest111:     req.body.ptest111,
    ptest112:    req.body.ptest112,
    pavg111:    req.body.pavg111,
    ptest121:     req.body.ptest121,
    ptest122:    req.body.ptest122,
    pavg121:    req.body.pavg121,
    ptest131:     req.body.ptest131,
    ptest132:    req.body.ptest132,
    pavg131:    req.body.pavg131,
    ptest211:     req.body.ptest211,
    ptest212:    req.body.ptest212,
    pavg211:    req.body.pavg211,
    ptest221:     req.body.ptest221,
    ptest222:    req.body.ptest222,
    pavg221:    req.body.pavg221,
    ptest231:     req.body.ptest231,
    ptest232:    req.body.ptest232,
    pavg231:    req.body.pavg231,
    ptest311:     req.body.ptest311,
    ptest312:    req.body.ptest312,
    pavg311:    req.body.pavg311,
    ptest321:     req.body.ptest321,
    ptest322:    req.body.ptest322,
    pavg321:    req.body.pavg321,
    ptest331:     req.body.ptest331,
    ptest332:    req.body.ptest332,
    pavg331:    req.body.pavg331,
    comments5:    req.body.comments5,
    //4.0 Conclusions
    suitableFor:     req.body.suitableFor,
    secondaryTreat:    req.body.secondaryTreat,
    //5.0 Reccomendations
    propInstall:     req.body.propInstall,
    dischargeTo:    req.body.dischargeTo,
    trenchInv:    req.body.trenchInv,
    //6,0 Treatment system details
    propInstallTank:    req.body.propInstallTank,
    dischargeToTank:    req.body.dischargeToTank,
    trenchInvTank:    req.body.trenchInvTank,  
    noTrenches:     req.body.noTrenches,
    lengthTrenches:    req.body.lengthTrenches,
    invLvlTrench:    req.body.invLvlTrench,
    moundnoTrenches:     req.body.moundnoTrenches,
    moundlengthTrenches:    req.body.moundlengthTrenches,
    moundinvLvlTrench:    req.body.moundinvLvlTrench,
    //7.0 Site assessor details
    company:     req.body.company,
    experience:    req.body.experience,
    insurance:    req.body.insurance
  })


  post.username = req.auth.username
  post.save(function (err, post) {
    if (err) { return next(err) }
    res.status(201).json(post)
  })
})

module.exports = router


