/**
 * 
 */

angular.module('app.controller.patients', [])
.controller('patientsController', function($scope,$http,$rootScope,$window,patientService,patients,
		patientPaginationService,$timeout,$q,$filter) {
	
	var $translate = $filter('translate');
	console.log('patientsController')
	$rootScope.id = $window.sessionStorage.id;
	refreshMethod = function(){ 
		patientService.query(function(data) {
			$scope.patients =  data;
		});
	};
	$scope.patients = patients.data.content;
	$scope.totalItems = patients.data.totalElements;
	$scope.currentPage = patients.data.number;

	
	$scope.deletePatient = function(patient){
		swal({
			  title: $translate('patients.remove_patient'),
			  text: $translate('patients.are_you_sure_remove_patient'),
			  type: "warning",
			  showCancelButton: true,
			  confirmButtonClass: "btn-danger",
			  confirmButtonText: $translate('patients.remove'),
			  cancelButtonText: $translate('commons.cancel'),
			  closeOnConfirm: true
			},
			function(){
				patientService.delete({id:patient.id},function(){
					$scope.pageChanged();
				});
			});
	}
	
	  $scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	  };

	  $scope.pageChanged = function() {
	    console.log('Page changed to: ' + $scope.currentPage);
	    refreshGrid();
	  };
	  
	  function refreshGrid(){
		  var myPatients = patientPaginationService.getPatients(($scope.currentPage-1),10,$rootScope.id);
		    myPatients.then(function(result){
		    	console.log('result: ' , result);
		    	$scope.patients = result.content;
		    	$scope.totalItems = result.totalElements;
		    });
	  }
	  
	  $scope.searchPatient = function(name){
		  if (name == undefined || name == ""){
			  refreshGrid();
		  }else{
			  var promise = $http.get('patient/searchPatient?page=0&size=10&id=' + $rootScope.id+'&name=' + name)
			  $timeout(function() {
				  promise.then(function(data,status,headers,config){
					  $scope.patients = data.data.content;
					  $scope.totalItems = data.totalElements;
				  }); 
				  
			  }, 200);
		  }
	  }
})

