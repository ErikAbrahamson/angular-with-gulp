(function() {
  'use strict';

  angular.module('myApp', ['ngRoute','ngAnimate'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when("/", {
          templateUrl: "./partials/partial1.html",
          controller: "MainController"
        })
        .otherwise({
          redirectTo: '/'
        });
      }
  ]);

  angular.module('myApp')

    .controller('MainController', ['$scope',
      function($scope) {
        $scope.test = "Testing...";
      }
    ]);

}());
