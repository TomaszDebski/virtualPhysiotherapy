/**
 * 
 */

angular.module('app.controller.contact', [])
.controller('contactController', function($scope,$http,$rootScope,$location,$window) {
	
	console.log('contact Controllerrrr');
	
	$scope.sendMessage = function(sender){
		if ($scope.sendEmailForm.$valid){
			console.log("sender: " + sender.name + " email: " + sender.email + " subject " + sender.subject + " message " + sender.message )
			$http({
		        url: 'sendEmail',
		        method: "POST",
		        data: sender
			})
			.success(function(data){
				console.log("udało się")
			})
			.error(function(){
				console.log("nie udało się")
			})
		}else{
			$scope.sendEmailForm.submitted=true; 
		}
	}
})