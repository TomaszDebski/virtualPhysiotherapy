/**
 * 
 */
angular.module('app.controller.addKindOfPain', [])
.controller('addKindOfPainController', function($scope,$http,$rootScope,$location,$window,kindOfPainService) {

	$scope.addKindOfPain = function(pain){
		if ($scope.addKindOfPainForm.$valid){
			kindOfPainService.save(pain,function(){
				console.log("udało się");
				$scope.success = true;
			})
		}else{
			$(".selectize-input").css(
					  {"border-color": "#f00", 
		             "border-width":"2px", 
		             "border-style":"solid"})
			$scope.addKindOfPainForm.submitted=true;
			$scope.success = false;
		}
	}
})
