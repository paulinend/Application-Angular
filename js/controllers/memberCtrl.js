myApp.controller('memberCtrl', function($scope,$http){
  $http.get('data.json').then(function(response){
      $scope.myData = response.data.users;
    },
      function(err) {
        console.log("Error");
    })



});
