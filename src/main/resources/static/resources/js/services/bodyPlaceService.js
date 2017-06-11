/**
 * 
 */
angular.module('app.service.bodyPlace', [])
.factory("bodyPlaceService", ['$resource', function($resource) {
	return  $resource('/bodyPlace/:id', {id : "@id"},
			{ 
		'query':  {method:'GET', isArray:true},
		'update' :{method: "PUT"} 
		  })
}]);