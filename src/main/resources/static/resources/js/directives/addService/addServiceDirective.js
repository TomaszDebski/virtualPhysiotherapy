/**
 * 
 */
angular.module('app.directive.addService', ['ui.select','ngSanitize','app.directive.addService'])
.directive("addServiceDirective", function($compile){
	return {
	    restrict: 'E',
	    transclude : true,
	    scope: {
	    	counter: '=',
	    	servicesToSelect : '=',
	    }, 
	    templateUrl: 'resources/js/directives/addService/addService.html',
	    link: {
	    	pre : function postLink(scope, element, attr){
	    	scope.addNextService = function(){
	    		var result = document.getElementsByClassName('hidden_'+ scope.counter);
	    		var wrappedResult = angular.element(result);
	    		var counter = ++scope.counter;
	    		var html ='';
	    		html += '<div style="padding-top:10px"><select id="selectService_'+counter+'" class="form-control"'+
	    		'style="width:90%;background: #f6f9fc;">';
	    		angular.forEach(scope.servicesToSelect, function (value, index){
	    			html += '<option value="'+value.id+'">'+value.serviceName+'('+value.price+')</option>';
	    		})
	    		html+= '</select></div><div class="hidden_'+counter+'"></div>';
	    		wrappedResult.after(html)
	    		$compile(wrappedResult)(scope);
	    	}
	    }
	  }
	}
})



