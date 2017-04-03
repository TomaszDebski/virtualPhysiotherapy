/**
 * 
 */
angular.module('app.service.auth',[])
    .factory('authService',['$http','$q', function($http,$q) {
    	return {
    		logout : function(){
    			return $http.post("/logout")
				.success(function(data, status, headers, config) {
					return true;
				})
    		}
    	}
    }]);
