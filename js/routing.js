angular.
module('alloCine').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'first.html',
            controller: 'FirstController'
        })

        .when('/deux', {
            templateUrl: 'second.html',
            controller: 'SecondController'
        })

        .when('/trois', {
            templateUrl: 'third.html',
            controller: 'ThirdController'
        })

        .otherwise({ redirectTo: '/' });
});

app.controller('FirstController', function ($scope) {
    $scope.message = 'Premier controller';
});
app.controller('SecondController', function ($scope) {
    $scope.message = 'Deuxieme controller';
});
app.controller('ThirdController', function ($scope) {
    $scope.message = 'Troisieme controllers';
});