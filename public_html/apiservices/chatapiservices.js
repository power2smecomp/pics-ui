/* 
 * This file is property of Power2SME pvt. ltd.
 @author(developer) : Himanshu Shekhar (himanshushekhar002@gmail.com)
 * 
 * 
 */

var app = angular.module('app.pics');
app.service("ChatServices", ['$log', '$http', '$q', function ($log, $http, $q) {

        var BASE_DOMAIN_FINANSME = 'https://uat.finansme.com';
        // var BASE_DOMAIN_FINANSME = 'http://localhost:8082';

        //var BASE_DOMAIN = 'http://125.63.66.69/';
        //var BASE_DOMAIN = 'http://localhost:7979/';        
        var BASE_DOMAIN = 'https://uat.power2sme.com/';
        
        //var BASE_DOMAIN = 'https://ebf.power2sme.com/';
        //var BASE_DOMAIN = 'https://www.power2sme.com/';
        // var BASE_DOMAIN = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+'/';
        var CONTEXT_WEBSITE = 'website/';
        var CONTEXT_P2SAPI = 'p2sapi/';
        var CONTEXT_NODE = 'node/';
        //var CONTEXT_CHATAPI = '';
        var CONTEXT_CHATAPI = 'chatai/';
        var p2sapiusername = 'dev';
        var p2sapipassword = 'developer';
//        var tokenid = "9654910942";

        this.submitLongRfqForm = function (rfqData)
        {
            var canceller = $q.defer();
            return {
                promise: $http.post(BASE_DOMAIN + "website/public/rfq/orderdetail", rfqData, {cache: true}),
                cancel: canceller
            };
        };

        this.getChatOptionsList = function() {
            var canceller = $q.defer();
            return {
                promise: $http.get(BASE_DOMAIN_FINANSME + '/node/p2s/' + 'chatoptions',),
                cancel: canceller
            };
        }

        this.refreshChat = function(tokenId) {
            var canceller = $q.defer();
            return {
                promise: $http.put(BASE_DOMAIN +CONTEXT_CHATAPI + 'reset?tokenid=' + tokenId),
                cancel: canceller
            };
        }

        this.submitquery = function (query,agenttype,tokenid)
        {
            var canceller = $q.defer();
            return {
                promise: $http.get(BASE_DOMAIN +CONTEXT_CHATAPI+ "query?q=" + query + "&tokenid=" + tokenid + "&agenttype="+agenttype),
                cancel: canceller
            };
        };

        this.fetchAgentResponse = function (tokenid,messageid)
        {
            
            var canceller = $q.defer();
            return {
                promise: $http.get(BASE_DOMAIN + CONTEXT_CHATAPI+ "fetch/agent/responses?messageid=" + messageid + "&tokenid=" + tokenid),
                cancel: canceller
            };
        };
        
        this.createContact = function (namefirst,namelast,email,mobileNumber){            
            var canceller = $q.defer();
            var user={
                firstname : namefirst,
                lastname : namelast,
                mobilenumber : mobileNumber,
                emailid : email
            };
            return {
                promise: $http.post(BASE_DOMAIN+'website/public/rfq/usercontact',user),
                //promise: $http.post('https://uat.power2sme.com/website/public/rfq/usercontact',user),
                cancel: canceller
            };
        };
        
        this.registerContact = function (namefirst,namelast,email,mobileNumber){ 
            console.log('BASE DOMAIN : '+BASE_DOMAIN);
            var canceller = $q.defer();
            var user={
                name : namefirst+' '+namelast,
                phone : mobileNumber,
                email : email
            };
            return {
                promise: $http.post(BASE_DOMAIN + CONTEXT_CHATAPI+ 'register',user),
                cancel: canceller
            };
        };
    }]);