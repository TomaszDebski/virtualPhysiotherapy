/**
 * 
 */

angular.module('app.service.patientPagination',[])
    .factory('patientPaginationService',['$http', function($http, $rootScope) {
    	return {
    	    getPatients: function(page,size,id) {
    	      return $http.get('patient/cos?page=' + page+'&size=' +size+ '&id='+ id)
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