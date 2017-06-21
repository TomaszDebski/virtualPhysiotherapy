/**
 * 
 */
angular.module('app.controller.visit', ['ui.bootstrap'])
.controller('visitController', function($scope,$http,$rootScope,$log,$window,visitService,
		$stateParams,$uibModal,$state,$timeout,$filter,visit) {
	
	var $translate = $filter('translate');
	
	$scope.visit = visit;
	var cash = 0;
	angular.forEach($scope.visit.treatment,function(key,value){
		cash += key.service.price;
	})
	$scope.visit.cost = cash;
	$scope.firstName_lastName = $scope.visit.patient.firstname + ' ' + $scope.visit.patient.lastname;
	$scope.isFinishVar = $scope.visit.status == 'reservation';
	
	
	$scope.goToVisits = function(){
		$state.go('visits');
	}
	
	$scope.successEndVisit = false;
	$scope.endVisit = function(){
		if ($scope.visitForm.$valid){
			swal({
				  title: $translate('visit.end_visit'),
				  text: $translate('visit.are_you_sure_end_visit'),
				  type: "info",
				  showCancelButton: true,
				  confirmButtonClass: "btn-primary",
				  confirmButtonText: $translate('visit.end'),
				  cancelButtonText: $translate('commons.cancel'),
				  closeOnConfirm: true
				},
				function(){
					updateEndVisit();
				});
		}else{
			$scope.visitForm.submitted=true;
		}
	}
	
	function updateEndVisit(){
		var visit={};
		visit.recommendation = $scope.visit.recommendation;
		visit.paymentMethod = $scope.visit.paymentMethod;
		visit.length = $scope.visit.length
		visit.date = $scope.visit.date
		visit.cost = $scope.visit.cost
		visit.description = $scope.visit.description
		visit.status = 'finish';
		visitService.update({id:$stateParams.id},visit,function(){
			  $scope.visit.status = visit.status;
			  $scope.isFinishVar = $scope.visit.status == 'reservation'
		  })
		$scope.successEndVisit = true;
	}
	
	$scope.successSave = false;
	$scope.editUser = function(user){
		if ($scope.editUserForm.$valid){
			physiotherapistService.update({id:user.id},user,function(){
				$scope.successSave = true;
				$window.scrollTo(0, 0);
			})
		}else{
			$scope.editUserForm.submitted=true;
		}
	}
	
////////////////////////////////////////Datepicker//////////////////////////////////////////
	
	  $scope.inlineOptions = {
			    customClass: getDayClass,
			  };

			  $scope.dateOptions = {
			    dateDisabled: disabled,
			    startingDay: 1
			  };

			  // Disable weekend selection
			  function disabled(data) {
			    var date = data.date,
			      mode = data.mode;
			    return mode === 'day' &&  date.getDay() === 0;
			  }

			  $scope.toggleMin = function() {
			  };

			  $scope.getDate = function(){
				  vm.visit.date = Date.parse(vm.visit.startDate);
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
	
})