'use strict';
var catalog = angular
                .module('catalog', [
                  'ngRoute',
                  'catalog.filters',
                  'catalog.services',
                  'catalog.directives',
                  'catalog.controllers',    
                ]);

function catalogConfigHandler($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', { templateUrl: '/partials/index', controller: 'index' })
    .otherwise({ redirectTo: '/' });

  $locationProvider
    .html5Mode(true)
    .hashPrefix('!');
}
catalog.config(['$routeProvider', '$locationProvider', catalogConfigHandler]);
