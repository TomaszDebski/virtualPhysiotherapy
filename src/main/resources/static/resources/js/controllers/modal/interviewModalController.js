/**
 * 
 */

angular.module('app.controller.interviewModal', [])
.controller('interviewModalController', function($scope,$http, $uibModalInstance , myParam,pains,interviewService,$filter) {
	
	var $translate = $filter('translate');
	
	$scope.interview = {};
	
	
	  $scope.ok = function () {
		  if ($scope.addInterview()){
			  $uibModalInstance.close();
		  }
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
	  	
		$scope.painDisplay = $translate('commons.select');
		$scope.bodyDisplay = $translate('commons.select');
		$scope.change = function(item){
			$scope.painDisplay = item;
			$scope.interview.painInput = item;
		}
		
		$scope.change2 = function(item){
			$scope.bodyDisplay = item;
			$scope.interview.bodyInput = item;
		}
		
		$scope.addInterview = function(){
			if($scope.interviewForm.$valid) {
				var interview = {};
				interview.date = new Date();
				interview.uniqueId = '22222';
				interview.description = $scope.interview.description
				interview.pains = []
				var pain = {};
				pain.painName = $scope.interview.painInput;
				var place = {};
				place.bodyPlaceName = $scope.interview.bodyInput;
				pain.painBodyPlaces = [];
				pain.painBodyPlaces.push(place);
				interview.pains.push(pain);
				interviewService.save({patinet_id:myParam},interview,function(data){
					console.log("udało się");
//					$scope.successAddPatient = true;
//					$window.scrollTo(0, 0);
////					$location.path("/allPatients");
				})
				return true;
			}else{
				$scope.interviewForm.submitted=true;    
				console.log('niepoprawny formularz')
				return false;
			} 
			
		}

});