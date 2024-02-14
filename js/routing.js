angular.
module('alloCine').config(function ($routeProvider) {
    $routeProvider
        .when('/inscription', {
            templateUrl: 'template/formulaire.connexion.html',
            controller: 'formControlleur'
        })

        .when('/list', {
            templateUrl: 'template/list.moovie.html',
            controller: 'listController'
        })

        .when('/trois', {
            templateUrl: 'third.html',
            controller: 'ThirdController'
        })

        .otherwise({ redirectTo: '/' });
});

angular.
module('alloCine').controller('formControlleur', function ($scope) {

});
angular.
module('alloCine').controller('SecondController', function ($scope) {
    $scope.message = 'Deuxieme controller';
});
angular.
module('alloCine').controller('ThirdController', function ($scope) {
    $scope.message = 'Troisieme controllers';
});