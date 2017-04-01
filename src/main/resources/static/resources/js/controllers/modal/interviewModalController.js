/**
 * 
 */

angular.module('app.controller.interviewModal', [])
.controller('interviewModalController', function($scope,$http, $uibModalInstance , myParam) {
	
	  $scope.ok = function () {
		  $uibModalInstance.close();
	  };

	  $scope.cancel = function () {
		  $uibModalInstance.dismiss('cancel');
	  };
	  
	  $http.get("bodyPart")
		.then(function(value) {
			$scope.bodyPart = value.data;
})
	  
	  $scope.myParam = myParam;
 

});