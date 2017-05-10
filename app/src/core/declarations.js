(function __init() { // INITIALIZATION FN
    'use strict';

    var myApp = {
        definitions: {
            'myApp.core.router': [],
            'myApp.features.demo': [],
            'myApp.shared.components.footer': ['ngLocalize.InstalledLanguages', 'ngLocalize.Events']
        },
        dependencies: [
            'ngRoute',
            'ngLocalize',
            'myApp.core.router'
        ],
        appName: 'myApp'
    };

    angular.forEach(myApp.definitions, function (value, key) {
        angular.module(key, value);
        myApp.dependencies.push(key);
    });

    angular.module(myApp.appName, myApp.dependencies);

    angular.module('myApp.core.router')
        .config(['$locationProvider', function($locationProvider){
            $locationProvider.hashPrefix('');
        }]);

    angular.module('myApp.features.demo')
        .value('localeConf', {
            basePath: 'languages',
            defaultLocale: 'en-US',
            sharedDictionary: 'common',
            fileExtension: '.lang.json',
            persistSelection: true,
            cookieName: 'COOKIE_LOCALE_LANG',
            observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
            delimiter: '::',
            validTokens: new RegExp('^[\\w\\.-]+\\.[\\w\\s\\.-]+\\w(:.*)?$'),
            allowNestedJson: true
        });
})();