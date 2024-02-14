angular.
module('alloCine').
component('listMovies',{
    template:'<div style="margin: 10px 10px 10px 10px">\n' +
        '        <button ng-click ="$ctrl.sortByAsc()">Classer par ASC</button>\n' +
        '        <button ng-click="$ctrl.sortByNote()">Classer par NOTES</button>\n' +
        '    </div>  '+
        '<div class="container_catalogue">\n' +
        '        <div class="row text-center mb-3">\n' +
        '            <section class="col-md-4 my-2 d-flex">\n' +
        '                <article class="card" ng-repeat="movie in $ctrl.movies">\n' +
        '                    <h3>{{movie.titre}}</h3>\n' +
        '                    <div>\n' +
        '                        <p style="align-content: center; width: 350px; justify-content: center;">\n' +
        '                            {{movie.description}}' +
        '                        </p>\n' +
        '                    </div>\n' +
        '                    <div>\n' +
        '                        <span>Note Moyenne: {{$ctrl.moyenne(movie.notes)}}</span><br>\n' +
        '                        <span>Nombre de notes: {{movie.notes.length}} </span>\n' +
        '                    </div>\n' +
        '                </article>\n' +
        '            </section>\n' +
        '        </div>\n' +
        '    </div>',
    controller: function (){
        this.movies = [{
            titre:'Titanic',
            description:'Bâteau qui coule, film qui fait carton plein',
            notes:[3.00,4.55,2.43,2.5,5.00,4.5,3.28]
        },{
            titre:'American Nightmare',
            description:'Film américain',
            notes:[3.00,4.55,2.43,2.5,5.00,4.5]
        },{
            titre:'American Nightmare 2 ',
            description:'Film américain 2',
            notes:[3.00,4.55,2.43,2.5,5.00,4.5]
        },{
            titre:'American Nightmare 3',
            description:'Film américain 3',
            notes:[3.00,4.55,2.43,2.5,5.00,4.5]
        }
        ];
        this.moyenne = function (notes) {
            let sum=0;
            let moyenne=0;
            notes.forEach(note => {
                sum += note;
            });
            return (sum/notes.length).toFixed(2);
        }
        this.sortByAsc = function () {
            this.movies.sort((a, b) => a.titre.localeCompare(b.titre));
        }
        this.sortByNote = function () {
            this.movies = this.movies.sort((a,b) => {
               const moyA = this.moyenne(a.notes);
               const moyB = this.moyenne(b.notes);
               return moyB - moyA;
            });
        }
    }
});