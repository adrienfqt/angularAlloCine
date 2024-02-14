angular.
module('alloCine').controller('formControlleur', function ($scope ) {
    $scope.soumettre = function(){

        localStorage.setItem('utilisateur',JSON.stringify($scope.utilisateur))
        console.log($scope.utilisateur);
    }
});
