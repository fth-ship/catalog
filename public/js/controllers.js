function indexHandler($scope, $http) {
  $scope.q = '';
  $scope.movies = [];

  function fetchData () {
    function successHandler (data) {
      $scope.movies = data.result;
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

angular
  .module('catalog.controllers', [])
  .controller('index', ['$scope', '$http', indexHandler]);
