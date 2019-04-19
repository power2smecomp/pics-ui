/* 
 * To change $scope license header, choose License Headers in Project Properties.
 * To change $scope template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
 Created on : June 19, 2017
 Author     : Himanshu Shekhar {himanshushekhar00@gmail.com}
 */
var power2smeChat = angular.module("app.pics");

power2smeChat.filter('trust', ['$sce', function ($sce) {
        return function (value, type) {
            return $sce.trustAs(type || 'html', value);
        };
    }]);
