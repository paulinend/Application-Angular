myApp.controller('memberCtrl', function($scope,$http){
  $http.get('data.json').then(function(response){
      $scope.data = response.data;
    },
      function(err) {
        console.log("Error");
    })
    $scope.pageTitle ="FUUUUCK";
});


// Nouveau Controller ---> exercice 2
// myApp.controller('app02',function($scope,$http){
//   $http.get('services.json').then(function(response){
//     $scope.myData = response.data.services;
//   })
//   $scope.total = 300;
//   $scope.count = 1;
//   $scope.isActive = function(){
//     if(this.item.active){
//       $scope.total -= this.item.price;
//       this.item.active = false;
//       $scope.count--;
//     } else {
//       $scope.total+= this.item.price;
//       this.item.active = true;
//       $scope.count++;
//     }
//   }
  //Trouvez un moyen de repérer les éléments actifs dès le départ
  // Intégrer ng-pluralize !!
//});
