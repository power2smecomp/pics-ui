/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * This file is property of Power2SME pvt. ltd. 
 @author(developer) : Himanshu Shekhar (himanshushekhar002@gmail.com)
 * This file is central configuration file. Changes should be done cautiously
 * 
 */
//'use strict';
var app = angular.module('ExampleApp', ['ui.router','app.pics']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider','$compileProvider',
    function ($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider,$compileProvider) {


        /*
         * FOR IGNORING TRAILING SLASHES
         */
        $urlRouterProvider.rule(function ($injector, $location) {
            var path = $location.path();
            var hasTrailingSlash = path[path.length - 1] === '/';
            var hashBangTrailing = path.length === 0;
            console.log('hasTrailingSlash;' + hasTrailingSlash);
            var newPath;
            while (hasTrailingSlash && !hashBangTrailing) {
                //if last charcter is a slash, return the same url without the slash  
                newPath = path.substr(0, path.length - 1);
                path = newPath;
                hasTrailingSlash = path[path.length - 1] === '/';
                hashBangTrailing = path.length === 0;
            }
            if (newPath) {
                return newPath;
            }

        });
//
//
//        $stateProvider
//                .state(CONSTANTS.MYACCOUNT_DASHBOARD_STATE_NAME,
//                        {
//                            url: '/',
//                            templateUrl: 'components/chatconsole/chatconsole_view.html',
//                            controller : 'ChatConsoleController'
//                        });
//        if (PROPERTIES.HISTORY_API_ON) {
//            $locationProvider.html5Mode(true);
//        } else {
//            $locationProvider.hashPrefix('!');
//        }        
//        $urlRouterProvider.otherwise('/'); //this will redirect all non-existing URl to home
//        $compileProvider.debugInfoEnabled(false);
    }
]);

/*
 * Configuration For default $log
 * eg url ::--- https://embed.plnkr.co/YcfJ7V/
 * https://jsfiddle.net/abhatia/6qnz0frh/
 */

app.run(['$rootScope', '$log', '$window', '$location',function ($rootScope, $log, $window, $location) {

    //$log = $log.getInstance("RUN");
    $log.info("I am RUNning");

}]);



