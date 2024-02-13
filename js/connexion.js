var app = angular.module('allocine', []);
app.controller('formControlleur', function($scope, $location) { //$scope fait réf au modele. permet de lier les données entre vue et modele
$scope.utilisateur = {};
$scope.soumettre = function() {
// Traitement après soumission
console.log($scope.utilisateur);
$location.path('./angularAlloCine/index.html')
};
});