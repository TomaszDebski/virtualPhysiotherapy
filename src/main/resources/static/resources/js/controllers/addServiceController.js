/**
 * 
 */
angular.module('app.controller.addService', [])
.controller('addServiceController', function($scope,$http,$rootScope,$location,$window,serviceService) {

	$scope.addService = function(service){
		if ($scope.addServiceForm.$valid){
			serviceService.save(service,function(){
				console.log("udało się");
				$scope.success = true;
			})
		}else{
			$(".selectize-input").css(
					  {"border-color": "#f00", 
		             "border-width":"2px", 
		             "border-style":"solid"})
			$scope.addServiceForm.submitted=true;
			$scope.success = false;
		}
	}
})
