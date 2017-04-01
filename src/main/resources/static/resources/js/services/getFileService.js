/**
 * 
 */
angular.module('app.service.getFile',[])
    .factory('getFileService',['$http', function($http) {
    	return {
    	    getOneFile: function(object_id) {
    	      return $http.get('/download?object_id=' + object_id)
    	      .success(function(result){
    	    	  console.log("udało się pobrać plik")
    	    	  return result;
//				.success(function(data,status,headers,config){
//					return data.content;
//				}).error(function(data,status,headers,config){
//					console.log("nie udało się");
//				})
    	      	})
    	    }
    	}
}]);