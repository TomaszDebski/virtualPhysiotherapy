/**
 * 
 */

angular.module('app.controller.navigation', [])
.controller('navigationController',
		function($rootScope,$scope, $http, $location,$window) {
//	$rootScope.authenticated = $window.sessionStorage.authenticated;
	console.log('navigationController');
	console.log('$rootScope.authenticated',$rootScope.authenticated);
});