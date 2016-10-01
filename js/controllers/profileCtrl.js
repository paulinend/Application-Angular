myApp.controller('profileCtrl', function($scope,$http){
  $http.get('data.json').then(function(response){
      $scope.data = response.data;
    },
      function(err) {
        console.log("Error");
    })
    $scope.pageTitle ="FUUUUCK";
    $scope.message = 'Everyone come and see how good I look!';
});
