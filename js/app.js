(function () {
    "use strict";


    var app = angular.module('dbarrosApp', []);

    app.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });

    app.controller('quoteController', ['$scope', '$http', '$q',
        function ($scope, $http, $q) {

            $scope.actualQuote = {};

            var getQuote = function () {
                var defer = $q.defer();

                $http.get('quotes.json').then(function (response) {
                    defer.resolve(response.data);
                });

                return defer.promise;
            };

            var generate = function () {
                getQuote().then(function (data) {
                    var quotes = data.quotes,
                        position = Math.floor(Math.random() * quotes.length);

                        $scope.actualQuote = quotes[position];
                });
            };

            generate();

        }]);

        app.controller('superpowersController', ['$scope', function ($scope) {
            $scope.powers = [
                {"name": "PHP", "number":75},
                {"name": "JS", "number":75},
                {"name": "HTML5", "number": 60},
                {"name": "CSS3", "number": 50},
                {"name": "Python", "number": 15},
                {"name": "Laravel(PHP)", "number": 40},
                {"name": "Angular(JS)", "number": 40},
                {"name": "Cordova(JS)", "number": 15},
                {"name": "Beleza", "number": 100}
            ];
            
        }]);


}());
