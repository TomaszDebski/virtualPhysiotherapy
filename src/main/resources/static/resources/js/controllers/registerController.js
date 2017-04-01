/**
 * 
 */

angular.module('app.controller.register', [])
.controller('registerController',
		function($rootScope,$scope, $http, $location,$window,physiotherapistService) {
	console.log('registerController');
	$scope.createUser = function(user){
		$scope.notEqual = false;
		var isPasswordEqual = $scope.user.password == $scope.passwordConfirm;
		if (!isPasswordEqual){
			$scope.notEqual = true;
			console.log("hasła nie są równe")
		}
		if ($scope.registerForm.$valid && isPasswordEqual) {
			$http({
    	        url: 'physiotherapist/byUsername/' + $scope.user.username,
    	        method: "GET",
    	    })
    	    .then(function(response) {
    	    	if (response.data != null && response.data.username.length > 0){
    	    		console.log("istnieje już taki użytkownik")
    	    	}else{
    	    		 if (isPasswordEqual){
    	 	    	    console.log("user name " , user.firstName);
    	 				physiotherapistService.save(user,function(){
    	 					console.log("udało się");
    	 				});
    	     	    }
    	    	}
    	    })
	    }
	    else {
	        $scope.registerForm.submitted=true;    
	    	return;
	    };
		
	}
	
	
	//var user = $scope.user;
	
});