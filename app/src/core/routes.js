angular.module('myApp.core.router')
    .config(['$routeProvider',
        function ($routeProvider) {
            'use strict';

            $routeProvider.
                when('/home', {
                    templateUrl: 'src/core/views/_home.html'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }
    ])
    .value('localeSupported', [
        'en-US',
        'fr-FR'
    ]);