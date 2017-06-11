/**
 * 
 */
angular.module('app.controller.index', [])
.controller('indexController',function($scope,$http,$rootScope,$location,$window,$translate,
		authService,$state) {
	console.log("indexController")
	
	$scope.logout = function(authh){
		var logout = authService.logout();
		$scope.authenticated = logout.then(function(data){return data});
		logout.then(function(data){
			console.log("udało się wylogować");
			$scope.authenticated = false;
			$rootScope.authenticated = false;
			$rootScope.user = "";
			$rootScope.role = "";
			$rootScope.isAdmin = false;
			$rootScope.isUser = false;
			$window.sessionStorage.user = "";
			$window.sessionStorage.authenticated = false;
			$window.sessionStorage.role = "";
			$state.go("home");
		})
	}
	
	$scope.changeLanguage = function (key) {
	    $translate.use(key);
	  };
	  
	$scope.showCurrentLanguage = function (){
		return $translate.use();
	}
})