/**
 * 
 */

angular.module('app.controller.register', [])
.controller('registerController',
		function($rootScope,$scope, $http, $location,$window,physiotherapistService) {
	console.log('registerController');
	$scope.successAddPhys = false;
	$scope.createUser = function(user){
		$scope.notEqual = false;
		var isPasswordEqual = user.password == $scope.passwordConfirm;
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
    	    		console.log("istnieje już taki uż	ytkownik")
    	    	}else{
    	    		 if (isPasswordEqual){
    	 				physiotherapistService.save(user,function(){
    	 					console.log("udało się");
    	 					$scope.successAddPhys = true;
    	 					 $scope.registerForm.submitted=false;
    	 					$window.scrollTo(0, 0);
    	 					$scope.user = {};
    	 					$scope.passwordConfirm = "";
    	 					$scope.registerForm.$setPristine();
    	 					$scope.registerForm.$setUntouched();
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
});