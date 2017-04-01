/**
 * 
 */

angular.module('app.controller.patients', [])
.controller('patientsController', function($scope,$http,$rootScope,$window,patientService,patients,patientPaginationService) {
	console.log('patientsController')
	$rootScope.id = $window.sessionStorage.id;
	refreshMethod = function(){ 
		patientService.query(function(data) {
			$scope.patients =  data;
		});
	};
//	console.log("patients" ,patients.data.content);
//	console.log("patients.data.content" , patients.data.content);
	$scope.patients = patients.data.content;
//	$scope.patients = patients.data.content;
	$scope.totalItems = patients.data.totalElements;
	$scope.currentPage = patients.data.number;

	
	$scope.deletePatient = function(patient){
		console.log("patient.id " , patient.id)
		patientService.delete({id:patient.id},function(){
			refreshMethod();
		});
	}
	console.log('patients Controller');
	
	  $scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	  };

	  $scope.pageChanged = function() {
	    console.log('Page changed to: ' + $scope.currentPage);
	    var myPatients = patientPaginationService.getPatients(($scope.currentPage-1),10,$rootScope.id);
	    myPatients.then(function(result){
	    	console.log('result: ' , result);
	    	$scope.patients = result.content;
	    	$scope.totalItems = result.totalElements;
//	    	$scope.currentPage = result.number;
	    	
	    })
	  };

//	  $scope.maxSize = 5;
//	  $scope.bigTotalItems = 175;
//	  $scope.bigCurrentPage = 1;
})
