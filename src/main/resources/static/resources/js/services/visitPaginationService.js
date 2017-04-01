/**
 * 
 */
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
    	      return $http.get('visit/byDateBetween?page=' + page+'&size=' +size+ '&' + url + '&id='+ id)
    	      .then(function(result){
    	    	  	console.log("result.data 	" ,result.data.content)
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