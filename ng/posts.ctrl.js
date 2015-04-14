angular.module('app')
.controller('PostsCtrl', function ($scope, PostsSvc) {
  $scope.addPost = function () {
    if ($scope.postfileRef) {
      PostsSvc.create({
        fileRef: $scope.postfileRef,
        prefix: $scope.postprefix,
        firstName: $scope.postfirstName,
        lastName: $scope.postlastName,
        address: $scope.postaddress,
        townland: $scope.posttownland,
        phone: $scope.postphone,
        fax: $scope.postfax,
        email: $scope.postemail,
        noResidents: $scope.postnoResidents,  
        noDoubleBeds: $scope.postnoDoubleBeds,
        noSingleBeds: $scope.postnoSingleBeds,
        waterSupply: $scope.postwaterSupply
      })
      .success(function (post) {
        $scope.posts.unshift(post)
        $scope.postfileRef = null,
        $scope.postprefix = null,
        $scope.postfirstName = null,
        $scope.postlastName = null,
        $scope.postaddress = null,
        $scope.posttownland = null,
        $scope.postphone = null,
        $scope.postfax = null,
        $scope.postemail = null,
        $scope.postnoResidents = null,
        $scope.postnoDoubleBeds = null,
        $scope.postnoSingleBeds = null,
        $scope.postwaterSupply = null
      })
    }
  }

  PostsSvc.fetch()
  .success(function (posts) {
    $scope.posts = posts
  })
})
