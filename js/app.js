var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller : 'mainController'
  })
  .when('/search', {
    templateUrl: 'views/member.html',
    controller : "memberCtrl"
  })
  .when('/profile', {
    templateUrl: 'views/profile.html',
    controller : 'profileCtrl'
  });
});
    // create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
