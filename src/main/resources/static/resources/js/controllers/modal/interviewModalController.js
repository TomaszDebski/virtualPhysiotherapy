/**
 * 
 */

angular.module('app.controller.interviewModal', [])
.controller('interviewModalController', function($scope,$http, $uibModalInstance , myParam,pains,interviewService,$filter) {
	
	var $translate = $filter('translate');
	
	$scope.interview = {};
	
	
	  $scope.ok = function () {
//		  if ($scope.addInterview()){
//			  $uibModalInstance.close();
//		  }
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
					$uibModalInstance.close();
				})
			}else{
				if($scope.interviewForm.painInput.$error.required){
					makeRedBorder('drop1');
				}
				if($scope.interviewForm.bodyInput.$error.required){
					makeRedBorder('drop2')
				}
				$scope.interviewForm.submitted=true;    
				console.log('niepoprawny formularz')
			} 
	  };
	  
	  function makeRedBorder(drop){
		  $("."+drop).css(
				  {"border-color": "#f00", 
	             "border-width":"2px", 
	             "border-style":"solid",
	             "border-radius": "6px"})
	  }

	  $scope.cancel = function () {
		  $uibModalInstance.dismiss('cancel');
	  };
	  
	  $scope.pains = pains;
	  
	  $http.get("bodyPart")
		.then(function(value) {
			$scope.bodyPart = value.data;
		})
		
	  $scope.toggled = function(open,input,drop) {
		  console.log('Dropdown is now: ', open);
		 if (input != undefined){
			 $("."+drop).css(
					  {"border-color": "", 
		             "border-width":"", 
		             "border-style":""})
		 }
		 
	    console.log("interview.painInput " ,$scope.interview.bodyInput)
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
		
//		$scope.addInterview = function(){
//			if($scope.interviewForm.$valid) {
//				var interview = {};
//				interview.date = new Date();
//				interview.uniqueId = '22222';
//				interview.description = $scope.interview.description
//				interview.pains = []
//				var pain = {};
//				pain.painName = $scope.interview.painInput;
//				var place = {};
//				place.bodyPlaceName = $scope.interview.bodyInput;
//				pain.painBodyPlaces = [];
//				pain.painBodyPlaces.push(place);
//				interview.pains.push(pain);
//				interviewService.save({patinet_id:myParam},interview,function(data){
//					console.log("udało się");
////					$scope.successAddPatient = true;
////					$window.scrollTo(0, 0);
//////					$location.path("/allPatients");
//				})
//				return true;
//			}else{
//				$scope.interviewForm.submitted=true;    
//				console.log('niepoprawny formularz')
//				return false;
//			} 
			
//		}

});