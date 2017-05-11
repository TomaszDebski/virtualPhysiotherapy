/**
 * 
 */

angular.module('app.controller.interviewModal', [])
.controller('interviewModalController', function($scope,$http, $uibModalInstance , myParam,pains) {
	
	  $scope.ok = function () {
		  $uibModalInstance.close();
	  };

	  $scope.cancel = function () {
		  $uibModalInstance.dismiss('cancel');
	  };
	  
	  $scope.pains = pains;
	  
	  $http.get("bodyPart")
		.then(function(value) {
			$scope.bodyPart = value.data;
		})
		
		$scope.toggled1 = function(open) {
		    console.log('Dropdown1 is now: ', open);
		  };
		  
		  $scope.toggled2 = function(open) {
		    console.log('Dropdown2 is now: ', open);
		  };
		  $scope.toggleDropdown = function($event) {
			    $event.preventDefault();
			    $event.stopPropagation();
			    $scope.status.isopen = !$scope.status.isopen;
			  };
			  
	  $scope.myParam = myParam;
 
	  

});