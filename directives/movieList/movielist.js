angular.module('omdb')
.directive('movieList', ['movieService', '$log', function (movieService, $log) {

  return {
    restrict: 'E',
    templateUrl: "/directives/movieList/movielist.html",
    scope: {
      list: '='
    },
    link: function(scope, el, attrs, fn) {
      scope.list = movieService.movies;
    }
  }
}]);
