angular.module('alloCine').controller('listController', function ($scope) {
    $scope.movies = [{
        titre: 'Titanic',
        description: 'Bâteau qui coule, film qui fait carton plein',
        notes: [3.00, 4.5, 2., 2.5, 5.00, 4.5, 3.5]
    }, {
        titre: 'American Nightmare',
        description: 'Film américain',
        notes: [3.5, 4.5, 2.5, 2.5, 5.0, 4.5]
    }, {
        titre: 'American Nightmare 2 ',
        description: 'Film américain 2',
        notes: [3.0, 4.5, 2.5, 2.5, 5., 4.5]
    }, {
        titre: 'American Nightmare 3',
        description: 'Film américain 3',
        notes: [3.0, 4.5, 2.5, 2.5, 5.0, 4.5]
    }
    ];
    $scope.boolConnect =false;
    localStorage.setItem('movies', JSON.stringify($scope.movies));
    $scope.moyenne = function (notes) {
        let sum = 0;
        let moyenne = 0;
        notes.forEach(note => {
            sum += note;
        });
        return (sum / notes.length).toFixed(2);
    }
    $scope.sortByAsc = function () {
        $scope.movies.sort((a, b) => a.titre.localeCompare(b.titre));
    }
    $scope.sortByNote = function () {
        $scope.movies = $scope.movies.sort((a, b) => {
            const moyA = $scope.moyenne(a.notes);
            const moyB = $scope.moyenne(b.notes);
            return moyB - moyA;
        });
    }
    $scope.note = function () {
        if (localStorage.getItem('utilisateur') !== null) {
            $scope.boolConnect = true;
        } else {
            alert("Vous devez vous connecter afin d'effectuer cette action ! ");
        }
    }
    $scope.addNote=function (moovie,note){
        $scope.movies.forEach(movie=> {
           if (moovie.titre === movie.titre){
               movie.notes.push(note);
               $scope.moyenne(movie.notes);
               localStorage.setItem('movies', JSON.stringify($scope.movies));
           }
        });
    }

});
