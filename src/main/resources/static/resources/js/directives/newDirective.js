/**
 * 
 */
angular.module('app.directive.customDirective', ['ui.select','ngSanitize'])
.directive("customDirective", function($compile){
	return {
	    restrict: 'EA',
//	    transclude : true,
	    scope: true,
	    template : '<b>dddddd</b>',
//	    templateUrl: 'resources/js/directives/customUrl.html',
	    link :  function(scope, element, attr){
	    	console.log('jestem w customDirective')
	    }
	}
})