/**
 * 
 */
angular.module('app.service.allPatientsForPhysiotherapist',[])
    .factory('allPatientsForPhysiotherapistService',['$http', function($http) {
    	return {
    	    getPatients: function() {
    	      return $http.get('patient/byPhysiotherapist')
    	      .then(function(result){
            return result.data;
    	      	})
    	    }
    	}
}]);