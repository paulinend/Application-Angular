var myApp = angular.module('myApplication', ['ngRoute']);
  myApp.config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'views/index.html'
        })
        .when('/search', {
          templateUrl: 'views/member.html'
        })
        .when('/profile', {
          templateUrl: 'views/profile.html'
        })
        .otherwise({
          redirectTo: '/'
        });
}]);

console.log('bonjour');




// var app = angular.module('AdopteUnSimplonien', ['ngRoute','ngAnimate']);

// app.config(['$routeProvider', function($routeProvider) {
//     $routeProvider
//         .when('/', {
//             templateUrl: 'views/home.php'
//         })
//         .when('/search', {
//             templateUrl: 'views/search.php'
//         })
//         .when('/project', {
//             templateUrl: 'views/project.php'
//         })
//         .when('/contact', {
//             templateUrl: 'views/contact.php'
//         })
//         .when('/profil:id_profil', {
//             templateUrl: 'views/profil.php'
//         })
//         .when('/log', {
//             templateUrl: 'views/signInUp.php'
//         })
//         .when('/backOffice', {
//             templateUrl: 'views/backOffice.php'
//         })
//         .when('/contactStudent', {
//             templateUrl: 'views/contactStudent.php'
//         })
//         .otherwise({
//             redirectTo: '/'
//         });
// }]);
