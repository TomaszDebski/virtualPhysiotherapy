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
	$scope.patients = patients.data.content;
	$scope.totalItems = patients.data.totalElements;
	$scope.currentPage = patients.data.number;

	
	$scope.deletePatient = function(patient){
		console.log("patient.id " , patient.id)
		patientService.delete({id:patient.id},function(){
//			refreshMethod();
			$scope.pageChanged();
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
	    	
	    })
	  };

//	  $scope.maxSize = 5;
//	  $scope.bigTotalItems = 175;
//	  $scope.bigCurrentPage = 1;
})
.filter('tel', function () {
    return function (tel) {
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
        
	        case 9: // +1PPP####### -> C (PPP) ###-####
	        	return (value.slice(0, 3) + "-" + value.slice(3,6) + "-" + value.slice(6)).trim();
	            break;
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 3);
                number = value.slice(3);
                break;

            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;

            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;

            default:
                return tel;
        }

        if (country == 1) {
            country = "";
        }

        number = number.slice(0, 3) + '-' + number.slice(3);

        return (country + " (" + city + ") " + number).trim();
    };
});
