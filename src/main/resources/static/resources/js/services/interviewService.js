/**
 * 
 */
angular.module('app.service.interview', [])
.factory("interviewService", ['$resource', function($resource) {
	return  $resource('/interview/:id', {id : "@id"},
			{ 
		'query':  {method:'GET', isArray:true},
		'update' :{method: "PUT"} 
		  })
}]);