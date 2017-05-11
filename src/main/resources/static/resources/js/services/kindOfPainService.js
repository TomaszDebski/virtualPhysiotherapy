/**
 * 
 */
angular.module('app.service.kindOfPain', [])
.factory("kindOfPainService", ['$resource', function($resource) {
	return  $resource('/kindOfPain/:id', {id : "@id"},
			{ 
		'query':  {method:'GET', isArray:true},
		'update' :{method: "PUT"} 
		  })
}]);