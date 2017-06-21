/**
 * 
 */

angular.module('app.service.patientPagination',[])
    .factory('patientPaginationService',['$http', function($http, $rootScope) {
    	return {
    	    getPatients: function(page,size,id) {
    	      return $http.get('patient/patientsPagination?page=' + page+'&size=' +size+ '&id='+ id)
    	      .then(function(result){
    	    	  	return result.data;
    	      	})
    	    }
    	}
}]);