/**
 * 
 */
angular.module('app.service.allPatientsForPhysiotherapist',[])
    .factory('allPatientsForPhysiotherapistService',['$http', function($http) {
    	return {
    	    getPatients: function(name) {
    	      return $http.get('patient/byPhysiotherapist?name=' + name)
    	      .then(function(result){
            return result.data;
//				.success(function(data,status,headers,config){
//					return data.content;
//				}).error(function(data,status,headers,config){
//					console.log("nie udało się");
//				})
    	      	})
    	    }
    	}
}]);