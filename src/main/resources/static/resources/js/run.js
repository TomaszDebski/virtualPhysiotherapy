/**
 * 
 */

angular.module('app.run', [])
.run(function($rootScope,$state,$http,$window,$location){
//	console.log('jestem w run1')
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {//event, toState, toParams, fromState, fromParams
//		if (toState.name =="login" || toState.name == "logout")
			console.log("toState.name " + toState.name)
//		event.preventDefault(); 
		console.log('jestem w metodzie')
		console.log('$window.sessionStorage.authenticated',$window.sessionStorage.authenticated)
//		if (!$window.sessionStorage.authenticated){
//			$http({
//		        url: 'findUser',
//		        method: "GET",
//		    })
//		    .success(function(response) {
//		    	if (response){
//		    		if ($window.sessionStorage.user == ""){
//		    			if (toState.name != "login"){
//	//	    				if (next.templateUrl != "register.html"){	
//		    				$state.go( "login" , {});
//		    			}
//		    		}else{
		    			$rootScope.user = $window.sessionStorage.user;
		    			$rootScope.authenticated = $window.sessionStorage.authenticated;
//		    			if ($window.sessionStorage.role == "ROLE_ADMIN"){
//		    				$rootScope.isAdmin = true; 
//		    			}else if($window.sessionStorage.role == "ROLE_USER"){
//		    				$rootScope.isUser = true;
//		    			}else{
//		    				$rootScope.isAdmin = false;
//		    				$rootScope.isUser = false;
//		    			};
//		    		}
//		    	
//		    	}else{
//		    		$rootScope.authenticated = false;
//					$rootScope.user = "";
//					$rootScope.role = "";
//					$rootScope.isAdmin = false;
//					$rootScope.isUser = false;
//					$window.sessionStorage.user = "";
//					$window.sessionStorage.authenticated = false;
//					$window.sessionStorage.role = "";
					if ($window.sessionStorage.user == ""){
						if ((toState.name != "register" && toState.name != "login"  )){
							$state.go( "login", {});
							event.preventDefault();
						}
//						$state.go( "register", {});
//					}else{
					}
//		    	}
//			})
////		}
	})
	$rootScope.$on('$stateChangeSuccess', 
					function(event, toState, toParams, fromState, fromParams){ 
		if ($window.sessionStorage.authenticated == 'true'){
			console.log("zalogowany")
		}else{
			console.log("niezalogowany")
		}
		
	})
	 $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
	        console.log('error',error)
	      });
});

