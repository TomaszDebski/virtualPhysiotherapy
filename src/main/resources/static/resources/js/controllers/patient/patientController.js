/**
 * 
 */

angular.module('app.controller.patient', ['ui.bootstrap'])
.controller('patientController', function($scope,$http,$rootScope,$log,$window,patientService,
		$stateParams,$uibModal,$state,$timeout,$filter,patient) {
	
		var $translate = $filter('translate');
		$scope.patient = patient;
		
		$http.get("interview/allInterviewForPatient" + "?patient_id=" + $stateParams.id)
		.then(function(value) {
			$scope.interviews = value.data;
		})
		
		
		$scope.goToVisit = function(){
			$state.go("visits",{patient_id:$scope.patient.id});
		}
		
		$scope.savePatient = function(patient){
			$scope.successEditPatient = false;
			if ($scope.editPatientForm.$valid){
				$log.info("patient.birthDate " , patient.birthDate);
				patientService.update({id:$scope.patient.id},patient,function(){
					$scope.successEditPatient = true;
				})
			}else{
				$scope.editPatientForm.submitted=true;
			}
		}
		
		$scope.deletePatient = function(){
			swal({
				  title: $translate('patients.remove_patient'),
				  text: $translate('patients.are_you_sure_remove_patient'),
				  type: "warning",
				  showCancelButton: true,
				  confirmButtonClass: "btn-danger",
				  confirmButtonText: $translate('patients.remove'),
				  cancelButtonText: $translate('commons.cancel'),
				  closeOnConfirm: true,
				},
				function(){
					patientService.delete({id:$stateParams.id},function(){
						swal($translate('commons.removed'), $translate('patients.patient_was_removed'), "success");
						$state.go('allPatients');
					});
				});
		}
		
//		$scope.saveInterview = function(ddd,ee){
//			console.log("ddd " , ddd);
//		}
		
		
		$scope.genereateUniqueId = function()
		{
		    var text = "";
		    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		    for( var i=0; i < 5; i++ )
		        text += possible.charAt(Math.floor(Math.random() * possible.length));

		    return text;
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

				  $scope.format = 'yyyy/MM/dd';
				  $scope.altInputFormats = ['yyyy/MM/dd'];

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
	              templateUrl: 'interviewModal.html',
	              controller: 'interviewModalController', 
	              resolve :{
	            	  myParam : function(){
	            		  return $stateParams.id;
	            	  },
	            	  pains : function(kindOfPainService){
	            	  		return kindOfPainService.query(function(data) {
	            	  			return data;
	            	  		});
	            	  },
	            	  bodyPart : function(bodyPlaceService){
	            		  return bodyPlaceService.query(function(data) {
	            	  			return data;
	            	  		});
	            	  }
	              }
	         })
	        .result.then(
	            function () {
	            	$timeout(getAllInterviewForPatient(),5000);
	            }, 
	            function () {
	            }
	        );
	    }
		
		getAllInterviewForPatient = function(){
			$http.get("interview/allInterviewForPatient" + "?patient_id=" + $stateParams.id)
			.then(function(value) {
				$scope.interviews = value.data;
			})
		}
		
		
////////////////////////////////////////////////////////////////////////////////////////////////////

})