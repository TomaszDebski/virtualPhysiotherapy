/**
 * 
 */

angular.module('app.controller.patient', ['ui.bootstrap'])
.controller('patientController', function($scope,$http,$rootScope,
		$location,$window,patientService,$stateParams,$uibModal,$state) {
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