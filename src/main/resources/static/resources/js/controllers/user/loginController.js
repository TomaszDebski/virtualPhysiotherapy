/**
 * 
 */

angular.module('app.controller.login', [])
.controller('loginController', function($scope,$http,$rootScope,$location,$window,$state,$cookies) {
	$rootScope.authenticated = $window.sessionStorage.authenticated;
	var self = this;
	$scope.error = false;
	$scope.login = function(event) {
		event.preventDefault();
		if ($scope.loginForm.$valid) {      
	    }
	    else {
	        $scope.loginForm.submitted=true;    
	    	return;
	    };
		
		var data2 = 'j_username=' + encodeURIComponent($scope.data.credentials.username) +
        '&j_password=' + encodeURIComponent($scope.data.credentials.password);

		$http.post('/login', data2, {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
		,
        xsrfHeaderName: 'X-XSRF-TOKEN'
        }).success(function(data, status, headers, config){
        		$http({
        	        url: 'findUser',
        	        method: "GET",
        	    })
        	    .success(function(response) {
        	    	if (response){
        	    		$http({
        	    	        url: 'physiotherapist/byUsername/' + response.name,
        	    	        method: "GET",
        	    	    })
        	    	    .success(function(result) {
        	    	    	if (result != null && result.username.length > 0){
        	    	    		$rootScope.id = result.id;
        	    	    		$window.sessionStorage.id = $rootScope.id;
        	    	    	$scope.$parent.authenticated = true;
        	    	    	$rootScope.authenticated = true;
            	    		$scope.error = false;
            	    		$window.sessionStorage.role = response.authorities[0].authority;
            	    		$window.sessionStorage.user = response.name;
            	    		
            	    		$rootScope.user = $window.sessionStorage.user;
                            $window.sessionStorage.authenticated = true;
        	    	    	}
                            
            	    		$state.go("allPatients");
        	    	    })
        	    		
        	    		
        	    	}else{
        	    		$scope.error = true;
        	    	}
        	    }).error(function(response) {
        	    	$scope.error = true;
        	    });
        	    
        }).error(function(response){
        	$scope.error = true;
        })
}
})