/**
 * 
 */
angular.module('app.controller.addBodyPlace', [])
.controller('addBodyPlaceController', function($scope,$http,$rootScope,$location,$window,bodyPlaceService) {

	$scope.addBodyPlace = function(bodyPlace){
		var bodyPlaceVar = bodyPlace;
		if ($scope.addBodyPlaceForm.$valid){
			bodyPlaceService.save(bodyPlace,function(){
				console.log("udało się");
				$scope.success = true;
				bodyPlaceVar.bodyName = "";
				bodyPlaceVar.description = "";
				$scope.addBodyPlaceForm.$setUntouched();
				$scope.addBodyPlaceForm.$setPristine();
			})
		}else{
			$(".selectize-input").css(
					  {"border-color": "#f00", 
		             "border-width":"2px", 
		             "border-style":"solid"})
			$scope.addBodyPlaceForm.submitted=true;
			$scope.success = false;
		}
	}
})
