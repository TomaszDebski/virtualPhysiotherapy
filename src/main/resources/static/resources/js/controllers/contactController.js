/**
 * 
 */

angular.module('app.controller.contact', [])
.controller('contactController', function($scope,$http,$rootScope,$location,$window) {
	
	$scope.sendMessage = function(sender){
		if ($scope.sendEmailForm.$valid){
			$http({
		        url: 'sendEmail',
		        method: "POST",
		        data: sender
			})
			.success(function(data){
			})
			.error(function(){
				console.log("nie udało się")
			})
		}else{
			$scope.sendEmailForm.submitted=true; 
		}
	}
})