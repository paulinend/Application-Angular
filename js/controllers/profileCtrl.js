myApp.controller('profileCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    var firstName = $routeParams.firstName;
    var lastName = $routeParams.lastName;
    $http.get('data.json').then(function(response) {
            $scope.myData = response.data.users;
            $scope.user = _.find($scope.myData, {
                'last_name': lastName,
                'first_name': firstName
            });
        },
        function(err) {
            console.log("Error");
        })
}]);


// // Récupération de l'id dans l'URL du simplonien sélectionné.
//     var id = $routeParams.id_profil;
//
// // Récupération des infos du simplonien sélectionné.
//     $http.get(serviceApi.profilUser + id)
//         .then(
//             function(response) {
//                 $scope.student = response.data;
//             },
//             function(err) {
//                 console.log("Error");
//             }
//         );
