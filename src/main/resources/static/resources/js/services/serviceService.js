/**
 * 
 */
angular.module('app.service.service', [])
.factory("serviceService", ['$resource', function($resource) {
	return  $resource('/service/:id', {id : "@id"},
			{ 
		'query':  {method:'GET', isArray:true},
		'update' :{method: "PUT"} 
		  })
}]);