/**
 * 
 */
angular.module('app.directive.addNewInterview', ['ui.select','ngSanitize'])
.directive("addNewInterviewDirective", function($compile){
	 var controller = ['$scope', function ($scope) {

//			$scope.genereateUniqueId = function()
//			{
//			    var text = "";
//			    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//
//			    for( var i=0; i < 5; i++ )
//			        text += possible.charAt(Math.floor(Math.random() * possible.length));
//
//			    return text;
//			}
			
//			$scope.saveInterview = function(ddd){
//				console.log("ddd " , ddd);
////				console.log("interview " , 'interview.pain_' , ddd);
//			}
			
         
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
//	    	console.log('attr.interviewAtrr ',scope.interviewAtrr);
	    	scope.curr = new Date();
	    	scope.month = ('0' + (scope.curr.getMonth()+1)).slice(-2);
	    	scope.sendInterview = function(my){
	    		scope.returnFunction({interview:scope.country.pain,uniqueId:my}); 
	    	}
	    }
	  }
	}
})
