/**
 * 
 */
angular.module('app.controller.logout', []).controller(
		'logoutController',
		function($scope, $http, $rootScope, $state, $window) {
			$http.post("/logout")
				.success(function(data, status, headers, config) {
					$rootScope.authenticated = false;
					$rootScope.user = "";
					$rootScope.role = "";
					$rootScope.isAdmin = false;
					$rootScope.isUser = false;
					$window.sessionStorage.user = "";
					$window.sessionStorage.authenticated = false;
					$window.sessionStorage.role = "";
					$state.go("login");
				}).error(function(data, status, headers, config) {
					console.log('Problem z wylogowaniem');
			})
			
			
});