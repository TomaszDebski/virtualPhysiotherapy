/**
 * 
 */
angular.module('app.service.getFile',[])
    .factory('getFileService',['$http', function($http) {
    	return {
    	    getOneFile: function(object_id) {
    	      return $http.get('/download?object_id=' + object_id)
    	      .success(function(result){
    	    	  return result;
				}).error(function(data,status,headers,config){
					console.log("błąd z pobieraniem pliku w account.js");
    	      	})
    	    }
    	}
}]);