/**
 * 
 */

angular.module('app.controller.login', [])
.controller('loginController', function($scope,$http,$rootScope,$location,$window,$state) {
	$rootScope.authenticated = $window.sessionStorage.authenticated;
	console.log("jestem w loginie");
	var self = this;
	$scope.login = function() {
		
		if ($scope.fm1.$valid) {      
		      //form is valid
	    }
	    else {
	        //if form is not valid set $scope.addContact.submitted to true     
	        $scope.fm1.submitted=true;    
	    	return;
//	    	$scope.error = false;
	    };
		
		var data2 = 'username=' + encodeURIComponent($scope.data.credentials.username) +
        '&password=' + encodeURIComponent($scope.data.credentials.password);

		$http.post('/login', data2, {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
//		,
//        xsrfHeaderName: 'X-XSRF-TOKEN'
        }).success(function(data, status, headers, config){
//        	console.log("udało się")
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
//        	    	    		$rootScope.userModel = result.data;
//        	    	    		$window.sessionStorage.userModel = result.data;
        	    	    	
        	    	    	$rootScope.authenticated = true;
            	    		$scope.error = false;
            	    		console.log("aktualny user " , response);
            	    		$window.sessionStorage.role = response.authorities[0].authority;
            	    		$window.sessionStorage.user = response.name;
            	    		
            	    		$rootScope.user = $window.sessionStorage.user;
                            $window.sessionStorage.authenticated = true;
        	    	    	}
                            
//                            if ($rootScope.role == "ROLE_ADMIN"){
//            					$rootScope.isAdmin = true; 
//            				}else if($rootScope.role == "ROLE_USER"){
//            					$rootScope.isUser = true;
//            				}else{
//            					$rootScope.isAdmin = false;
//            					$rootScope.isUser = false;
//            				};
                            
//            	    		$state.go("home");
        	    	    })
        	    		
        	    		
        	    	}else{
        	    		$scope.error = true;
        	    	}
        	    }).error(function(response) {
        	    	$scope.error = true;
        	    });
        	    
        })
}
})