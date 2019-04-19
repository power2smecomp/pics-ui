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

var NUMBER_REGEX = /^[0-9]*$/;

/*
 * This directive helps in main chat conversation window auto scrolling
 */
power2smeChat.directive('schrollBottom', function () {
    return {
        scope: {
            schrollBottom: "="
        },
        link: function (scope, element) {
            console.log('I am scrollBottom directive');
            scope.$watchCollection('schrollBottom', function (newValue) {
                if (newValue)
                {
                    var chat_view = document.getElementsByClassName('chat-view')[0];
                    console.log("ScrollHeight:" + chat_view.scrollHeight);
                    var scroll_height = chat_view.scrollHeight;
                    jQuery('.chat-view').animate({scrollTop: scroll_height + 500}, 2000, 'linear', function () {
                        //alert("Finished animating");
                    });
                }
            });
        }
    };
});

/*
 * THIS IS CURRENTLY NOT IN USE.
 * This can be used for horizontal scrolling
 * for dispaying price card.
 * This feature may require little modification
 */
power2smeChat.directive("scroll", function ($window) {
    return {
        restrict: "A",
        scope: {
            myindex: "@",
            chatmessagelist: "=",
            sendcardrequest: "&"
        },

        link: function (scope, element, attrs) {
            element.on("scroll", function () {
                console.log('I am scroll directive');
                //console.log(this.scrollLeft + ":" + this.scrollWidth + ":" + 400);
                //console.log(scope.chatmessagelist[scope.myindex].scrollActive);
                if (scope.chatmessagelist[scope.myindex].scrollActive == true) {
                    if (this.scrollLeft >= ((this.scrollWidth - 1) - 400)) {
                        scope.chatmessagelist[scope.myindex].scrollActive = false;
                        scope.sendcardrequest();
                    }
                }
            });
        }
    };
});

//-----------------------TEMPLATE DETAILS--------------------------------------------
//All templates are created int $templateCache by running a gulp task of htmlToJs
//Then the generated module of Templates is injected in our APP. So we need to 
//run minification task which will include templates.js also.
//------------------------MAIN-TEMPLATE DIRECTIVES------------------------------------
power2smeChat.directive('picsView', function () {
    return {
        restrict: 'E',
        templateUrl: 'chatview.html',
        link: function (scope, element, attrs) {
            console.log('I am chatui directive');
            try {
                scope.smeId = attrs.smeId;            
            } catch (exception) {
                console.log('NO SMEID ERROR');
            }
            try {
                scope.email = attrs.emailId;
//                scope.userdetail.email = attrs.emailId;
            } catch (exception) {
                console.log('NO EMAIL ERROR');
            }
            try {
                scope.phone = attrs.phone;
//                scope.userdetail.phone = attrs.phone;
            } catch (exception) {
                console.log(exception);
                console.log('NO POHONE FIELD');
            }               
        }
    };
});

//------------------------SUB-TEMPLATE DIRECTIVES------------------------------------

power2smeChat.directive('welcomeFrame', function () {
    return {
        templateUrl:'welcomeframeview.html'
    };
});

power2smeChat.directive('registerFrame', function () {
    return {
        templateUrl: 'registerframeview.html'
    };
});

power2smeChat.directive('chatFrame', function () {
    return {
        templateUrl: 'chatframeview.html'
    };
});

power2smeChat.directive('sendmessageFrame', function () {
    return {
        templateUrl: 'sendmessageboxview.html'
    };
});

power2smeChat.directive('mesmerizeFrame', function () {
    return {
        templateUrl: 'mesmerizeview.html'
    };
});
//-------------------------------------------------------------------------------


power2smeChat.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (!event.ctrlKey && event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.myEnter);
                });
                event.preventDefault();
            }
        });
    };
});

power2smeChat.directive('ctrlEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.ctrlKey && event.which === 13) {
                console.log('CTRL + ENTER');
            }
            ;
        });
    };
});

power2smeChat.directive('draggable', function() {
    return {
        // A = attribute, E = Element, C = Class and M = HTML Comment
        restrict: 'A',
        //The link function is responsible for registering DOM listeners as well as updating the DOM.
        link: function(scope, element, attrs) {
            element.draggable({
                stop: function(event, ui) {
                    console.log("Check if its printing");
                    event.stopPropagation();
                }
            });
        }
    };
});

power2smeChat.directive('bindHtmlCompile', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$watch(function () {
                return scope.$eval(attrs.bindHtmlCompile);
            }, function (value) {
                element.html(value);
                $compile(element.contents())(scope);
            });
        }
    };
}]);

power2smeChat.directive('validatePhone',function() {
	return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) {
            function customValidator(val) {
            	if(val==undefined|| val==null || val==""){
                	return val;
                }
                if (val[0]!=7 && val[0]!=8 && val[0]!=9 && val[0]!=6)
    				val="";
                if (!NUMBER_REGEX.test(val[val.length-1])) {
                    val = val.slice(0, val.length-1);
                }
    			ctrl.$setViewValue(val);
                ctrl.$render();           
    			return val;
            }
            ctrl.$parsers.push(customValidator);
            
        }
    };
});
  