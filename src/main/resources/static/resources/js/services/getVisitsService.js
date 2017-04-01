/**
 * 
 */
angular.module('app.service.getVisits',[])
    .factory('getVisitsService',['$http','$log', function($http,$log) {
    	return {
    	    getVisitsByPatientId: function(id) {
    	    	return $http.get("visit/byPatient",{params: { patientId: id }})
    	      .then(
//    	    	  console.log("getVisitsByPatientId " ,result.data)
//    	    	  return result.data;
					function success(data){
						$log.info("getVisitsByPatientId " ,data)
						return data.data;
					},function error(data){
						console.log("nie udało się");
					}
//    	      	})
				)
    	    }
    	}
}]);