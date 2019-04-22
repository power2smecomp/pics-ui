
/* 
 * This file is property of Power2SME pvt. ltd. 
 @author(developer) : Himanshu Shekhar (himanshushekhar002@gmail.com)
 * This file is central configuration file. Changes should be done cautiously
 * 
 */
//'use strict';
var app = angular.module('app.pics', ['ngMaterial', 'ngAnimate', 'ngAria', 'ngSanitize', 'templates', 'ngScrollbars']);

app.config(['$mdThemingProvider', '$httpProvider', function ($mdThemingProvider, $httpProvider) {
        $mdThemingProvider.theme('default')
                .primaryPalette('light-blue')
                .accentPalette('blue-grey')
                .warnPalette('grey');
        $httpProvider.defaults.withCredentials = true;
    }
]);
