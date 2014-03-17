function indexHandler($scope, $http, $window) {
  $scope.q = '';
  $scope.shelfs = [];
  $window.movies = $scope.movies = [];

  function fetchData () {
    var shelfSlice = 0;
    var jump = 4;
    var shelfsLimit = null;

    function successHandler (data) {
      $scope.shelfs = [];
      $window.movies = $scope.movies = data.result;
      shelfsLimit = Math.round($scope.movies.length / jump);

      for (var i = 0, l = shelfsLimit; i <= l; i += 1) {
        var limit = shelfSlice + jump;
        $scope.shelfs.push($scope.movies.slice(shelfSlice, limit));
        shelfSlice = limit;
      }
    }

    function errorHandler (data) {
      console.log('Error loading movies!');
    }

    $http
      .get('/api/movies?q=' + $scope.q)
      .success(successHandler)
      .error(errorHandler);
  }

  function onKeyPress (event) {
    if (event.keyCode === 13) {
      fetchData();
    }
  }

  $scope.onKeyPress = onKeyPress;
}

function detailHandler($scope, $http, $window) {}
angular
  .module('catalog.controllers', [])
  .controller('index', ['$scope', '$http', '$window', indexHandler])
  .controller('detail', ['$scope', '$http', '$window', detailHandler]);
