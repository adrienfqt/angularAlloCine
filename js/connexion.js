angular.
module('alloCine').controller('formControlleur', function ($scope ) {
    $scope.formVisible = true; // formulaire qui est visible
    $scope.soumettre = function(){

        localStorage.setItem('utilisateur',JSON.stringify($scope.utilisateur))
        console.log($scope.utilisateur);
        $scope.formVisible = false; // le formulaire disparait
    }
});