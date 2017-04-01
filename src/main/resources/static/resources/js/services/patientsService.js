/**
 * 
 */

angular.module('app.service.patient', [])
.factory("patientService", ['$resource', function($resource) {
	return  $resource('/patient/:id', {id : "@id"},
			{ 
		'query':  {method:'GET', isArray:true},
		'update' :{method: "PUT"} ,
		 foo: {
		      method:'POST',
		      url: '/patient/:id',
		      isArray: false
		   }
		  })
}]);