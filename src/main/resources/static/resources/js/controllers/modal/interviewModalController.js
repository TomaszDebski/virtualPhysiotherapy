/**
 * 
 */

angular.module('app.controller.interviewModal', [])
.controller('interviewModalController', function($scope,$http, $uibModalInstance , 
		myParam,pains,interviewService,$filter) {
	
	var $translate = $filter('translate');
	
	$scope.interview = {};
	
	
	  $scope.ok = function () {
//		  if ($scope.addInterview()){
//			  $uibModalInstance.close();
//		  }
		  if($scope.interviewForm.$valid) {
				var interview = {};
				interview.date = $scope.interview.startDate;
				console.log('interview.date ' + interview.date);
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
		
////////////////////////////////////////Datepicker//////////////////////////////////////////
		
		  $scope.inlineOptions = {
				    customClass: getDayClass,
//				    minDate: new Date(),
//				    showWeeks: true
				  };

				  $scope.dateOptions = {
				    dateDisabled: disabled,
//				    formatYear: 'yy',
//				    maxDate: new Date(2020, 5, 22),
//				    minDate: new Date(),
				    startingDay: 1
				  };

				  // Disable weekend selection
				  function disabled(data) {
				    var date = data.date,
				      mode = data.mode;
				    return mode === 'day' &&  date.getDay() === 0;
//				    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
				  }

				  $scope.toggleMin = function() {
					  console.log("zamykam");
//				    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
//				    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
				  };

//				  $scope.toggleMin();
				  
				  $scope.getDate = function(){
//					  $log.info("mydate from getDate " , vm.visit.startDate)
//					  vm.visit.date = Date.parse(vm.visit.startDate);
					  
//					  refreshVisit(($scope.currentPage-1),10);
				  }

				  $scope.open1 = function() {
				    $scope.popup1.opened = true;
				  };

				  $scope.open2 = function() {
				    $scope.popup2.opened = true;
				  };

//				  $scope.setDate = function(year, month, day) {
//				    $scope.dt = new Date(year, month, day);
//				  };

//				  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
				  $scope.format = 'yyyy-MM-dd';
				  $scope.altInputFormats = ['yyyy-MM-dd'];

				  $scope.popup1 = {
				    opened: false
				  };

				  $scope.popup2 = {
				    opened: false
				  };

				  var tomorrow = new Date();
				  tomorrow.setDate(tomorrow.getDate() + 1);
				  var afterTomorrow = new Date();
				  afterTomorrow.setDate(tomorrow.getDate() + 1);
				  $scope.events = [
				    {
				      date: tomorrow,
				      status: 'full'
				    },
				    {
				      date: afterTomorrow,
				      status: 'partially'
				    }
				  ];

				  function getDayClass(data) {
				    var date = data.date,
				      mode = data.mode;
				    if (mode === 'day') {
				      var dayToCheck = new Date(date).setHours(0,0,0,0);

				      for (var i = 0; i < $scope.events.length; i++) {
				        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

				        if (dayToCheck === currentDay) {
				          return $scope.events[i].status;
				        }
				      }
				    }

				    return '';
				  }
				  
	///////////////////////////////////////////////////////////////////////////////////////////

});