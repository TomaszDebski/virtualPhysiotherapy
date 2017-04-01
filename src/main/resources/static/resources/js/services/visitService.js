/**
 * 
 */

angular.module('app.service.visit', [])
.factory("visitService", ['$resource', function($resource) {
	return  $resource('/visit/:id', {id : "@id"},
			{ 
		'query':  {method:'GET', isArray:true},
		'update' :{method: "PUT"} 
		  })
}]);