/**
 * 
 */
angular.module('app.service.getVisits',[])
    .factory('getVisitsService',['$http','$log', function($http,$log) {
    	return {
    	    getVisitsByPatientId: function(id) {
    	    	return $http.get("visit/byPatient",{params: { patientId: id }})
    	      .then(
					function success(data){
						return data.data;
					},function error(data){
						console.log("nie udało się");
					}
				)
    	    }
    	}
}]);