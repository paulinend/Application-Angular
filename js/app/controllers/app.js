var myApp = angular.module('myApplication', ['ngRoute']);
myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/article.html',
    controller : 'articleController'
  })
  .when('/connexion', {
    templateUrl: 'views/connexion.html',
    controller : 'connexionController'
  })
  .otherwise({
    redirectTo: '/'
  });

})
.controller('MainController', function($scope){
  $scope.test = "bonjour";

})
.controller('connexionController',function($scope) {


})
.controller('articleController', function($scope){

})
