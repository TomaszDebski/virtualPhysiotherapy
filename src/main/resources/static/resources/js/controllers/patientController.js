/**
 * 
 */

angular.module('app.controller.patient', ['ui.bootstrap'])
.controller('patientController', function($scope,$http,$rootScope,$log,$window,patientService,
		$stateParams,$uibModal,$state) {
		patientService.get({id:$stateParams.id},function(data){
			$scope.patient = data;
			console.log("dataaa "  ,data.firstname);
		});
		
//		$scope.showVisits = function(){
//			$go.state("visits");
//		}
		
		$scope.goToVisit = function(){
			$state.go("visits",{patient_id:$scope.patient.id});
		}
		
		var oldPatient = {};
		$scope.editModeFunction = function(isEdit){
			if (isEdit){
				oldPatient = angular.copy($scope.patient);
				$scope.editMode = true;
			}else{
				$scope.editMode = false;
				$scope.patient = oldPatient;
			}
		}
		
		$scope.savePatient = function(patient){
			$scope.successEditPatient = false;
			if ($scope.editPatientForm.$valid){
				$log.info("patient.birthDate " , patient.birthDate);
				patientService.update({id:$scope.patient.id},patient,function(){
					console.log("udało się zmienić dane pacjenta")
					$scope.successEditPatient = true;
				})
			}else{
				$scope.editPatientForm.submitted=true;
			}
		}
		
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
				  $scope.format = 'yyyy/MM/dd';
//				  $scope.altInputFormats = ['M!/d!/yyyy'];

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
		
////////////////////////////////////////////////modal//////////////////////////////////////////////////
		$scope.showModal = function(){
			$uibModal.open({
	              templateUrl: 'myModal.html',
	              controller: 'interviewModalController', 
	              resolve :{
	            	  myParam : function(){
	            		  return 'myParam'
	            	  }
	              }
	         })
	        .result.then(
	            function () {
	            }, 
	            function () {
	            }
	        );
	    }
////////////////////////////////////////////////////////////////////////////////////////////////////
		


})