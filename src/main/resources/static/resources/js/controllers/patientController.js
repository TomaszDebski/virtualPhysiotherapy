/**
 * 
 */

angular.module('app.controller.patient', ['ui.bootstrap'])
.controller('patientController', function($scope,$http,$rootScope,
		$location,$window,patientService,$stateParams,$uibModal) {
//	$scope.deletePatient = function(patient){
//		console.log("patient.id " , patient.id)
		patientService.get({id:$stateParams.id},function(data){
//			refreshMethod();
			$scope.patient = data;
			console.log("dataaa "  ,data.firstname);
		});
		

		
		showModal = function(){
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
//	                alert("OK");
	            }, 
	            function () {
//	                alert("Cancel");
	            }
	        );
	    }
		

})