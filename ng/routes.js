angular.module('app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/',         	{ controller: 'PostsCtrl', templateUrl: '/templates/welcome.html' })
  .when('/register', 	{ controller: 'RegisterCtrl', templateUrl: '/templates/register.html' })
  .when('/login',    	{ controller: 'LoginCtrl', templateUrl: '/templates/login.html' })
  .when('/posts',     	{ controller: 'PostsCtrl', templateUrl: '/templates/posts.html' })
  .when('/results',     { controller: 'PostsCtrl', templateUrl: '/templates/results.html' })
  .when('/conference',     { controller: 'PostsCtrl', templateUrl: '/templates/conference.html' })
})
