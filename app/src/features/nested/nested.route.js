angular.module('myApp.features.demo')
    .config(['$routeProvider',
        function ($routeProvider) {
            'use strict';

            $routeProvider.
                when('/nested', {
                    templateUrl: 'src/features/nested/nested.part.html'
                });
        }
    ]);