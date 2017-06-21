/**
 * 
 */
angular.module('app.directive.addNewInterview', ['ui.select','ngSanitize'])
.directive("addNewInterviewDirective", function($compile){
	 var controller = ['$scope', function ($scope) {

     }];
	return {
	    restrict: 'E',
	    transclude : true,
	    scope: {
	    	uniqueIdAtr : '@',
	    	returnFunction: '&',
	    	interviewAtrr : '='
	    }, 
	    controller: controller,
	    templateUrl: 'resources/js/directives/newInterview/addNewInterview.html',
	    link: {
	    	pre : function postLink(scope, element, attr){
	    	var myObject = [];
	    	var uniqueId;
	    	scope.curr = new Date();
	    	scope.month = ('0' + (scope.curr.getMonth()+1)).slice(-2);
	    	scope.sendInterview = function(my){
	    		scope.returnFunction({interview:scope.country.pain,uniqueId:my}); 
	    	}
	    }
	  }
	}
})
