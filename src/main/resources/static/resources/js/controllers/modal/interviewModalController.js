/**
 * 
 */

angular.module('app.controller.interviewModal', [])
.controller('interviewModalController', function($scope,$http, $uibModalInstance , 
		myParam,pains,interviewService,$filter,bodyPart) {
	
	var $translate = $filter('translate');
	
	$scope.interview = {};
	$scope.counter= 0;
	$scope.pains = pains;
	$scope.bodyPart = bodyPart;
	
	  $scope.ok = function () {
		  if($scope.interviewForm.$valid) {
				var interview = {};
				interview.date = $scope.interview.startDate;
				interview.uniqueId = '22222';
				
				addPainsAndPlaces(interview);
				
				
				interviewService.save({patinet_id:myParam},interview,function(data){
					$uibModalInstance.close();
				})
			}else{
				$scope.interviewForm.submitted=true;    
				console.log('niepoprawny formularz')
			} 
	  };
	  
	  function addPainsAndPlaces(interview){
		  var painCopy = angular.copy(pains);
		  var bodyPartCopy = angular.copy(bodyPart);
		  interview.pains = []
		  for(var i = 0; i <= $scope.counter; i++){
			  var findedPainValue = angular.element(document.querySelector('#selectPain_'+i)).val();
			  var painValue = $filter('filter')(painCopy, {'id':findedPainValue})[0];
			  var findedBodyPartValue = angular.element(document.querySelector('#selectBodyPart_'+i)).val();
			  var bodyPartt = $filter('filter')(bodyPartCopy, {'id':findedBodyPartValue})[0];
			  var pain = {};
			  var bodyPlace = {};
			  bodyPlace.bodyPlaceName = bodyPartt.bodyName;
			  pain.painName = painValue.painName;
			  pain.id = null;
			  pain.painBodyPlaces = [];
			  pain.painBodyPlaces.push(bodyPlace);
			  var painDescription = angular.element(document.querySelector('#pain_description_'+i)).val();
			  pain.description = painDescription;
			  interview.pains.push(pain);
		  }
	  }
	  
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
	  
	  $scope.toggled = function(open,input,drop) {
		 if (input != undefined){
			 $("."+drop).css(
					  {"border-color": "", 
		             "border-width":"", 
		             "border-style":""})
		 }
		 
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
		
////////////////////////////////////////Datepicker//////////////////////////////////////////
		
		  $scope.inlineOptions = {
				    customClass: getDayClass,
				  };

				  $scope.dateOptions = {
				    dateDisabled: disabled,
				    startingDay: 1
				  };

				  function disabled(data) {
				    var date = data.date,
				      mode = data.mode;
				    return mode === 'day' &&  date.getDay() === 0;
				  }

				  $scope.toggleMin = function() {
				  };

				  $scope.getDate = function(){
				  }

				  $scope.open1 = function() {
				    $scope.popup1.opened = true;
				  };

				  $scope.open2 = function() {
				    $scope.popup2.opened = true;
				  };

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