/**
 * 
 */

angular.module('app.service.physiotherapist', [])
.factory("physiotherapistService", ['$resource', function($resource) {
	return  $resource('/physiotherapist/:id', {id : "@id"},
			{ 
		'query':  {method:'GET', isArray:true},
		'update' :{method: "PUT"} 
		  })
}]);