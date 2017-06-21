/**
 * 
 */

angular.module('app.service.visitPagination',[])
    .factory('visitPaginationService',['$http', function($http, $rootScope) {
    	return {
    	    getVisit: function(page,size,startDate,endDate,id) {
    	    	if (angular.isObject(startDate)){
    	    		startDate = Date.parse(startDate);
    	    	}
    	    	var url = "startDate=" + startDate + '&endDate=' + Date.parse(endDate);
    	      return $http.get('visit/byDateBetween?page=' + page+'&size=' +size+ '&' + url + '&patient_id='+ id)
    	      .then(function(result){
    	    	  	return result.data;
    	      	})
    	    }
    	}
}]);