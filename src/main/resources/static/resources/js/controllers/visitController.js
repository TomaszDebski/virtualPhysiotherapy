/**
 * 
 */
angular.module('app.controller.visit', ['ui.bootstrap'])
.controller('visitController', function($scope,$http,$rootScope,$log,$window,visitService,
		$stateParams,$uibModal,$state,$timeout,$filter,visit) {
	
	var $translate = $filter('translate');
	
//	visitService.get({id:$stateParams.id},function(data){
//		$scope.visit = data;
//		console.log("data visit: "  ,data);
//		var cash = 0;
//		angular.forEach($scope.visit.treatment,function(key,value){
//			cash += key.service.price;
//		})
//		$scope.visit.cost = cash;
//		$scope.firstName_lastName = data.patient.firstname + ' ' + data.patient.lastname;
//		$scope.isFinishVar = $scope.visit.status == 'reservation';
//	});
	
	console.log('visit ', visit)
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
	
//	$scope.isFinish = function(){
//		$scope.isFinishVar = $scope.visit.status == 'reservation';
//	}
	
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
		console.log('$scope.visit.paymentMethod ' +$scope.visit.paymentMethod);
		visit.length = $scope.visit.length
		visit.date = $scope.visit.date
		visit.cost = $scope.visit.cost
		visit.description = $scope.visit.description
		visit.status = 'finish';
		visitService.update({id:$stateParams.id},visit,function(){
			  console.log("zakończono");
			  $scope.visit.status = visit.status;
			  $scope.isFinishVar = $scope.visit.status == 'reservation'
		  })
		$scope.successEndVisit = true;
	}
	
	$scope.successSave = false;
	$scope.editUser = function(user){
		if ($scope.editUserForm.$valid){
			physiotherapistService.update({id:user.id},user,function(){
				console.log("udało się zmienić dane konta");
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
//			    minDate: new Date(),
//			    showWeeks: true
			  };

			  $scope.dateOptions = {
			    dateDisabled: disabled,
//			    formatYear: 'yy',
//			    maxDate: new Date(2020, 5, 22),
//			    minDate: new Date(),
			    startingDay: 1
			  };

			  // Disable weekend selection
			  function disabled(data) {
			    var date = data.date,
			      mode = data.mode;
			    return mode === 'day' &&  date.getDay() === 0;
//			    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
			  }

			  $scope.toggleMin = function() {
				  console.log("zamykam");
//			    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
//			    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
			  };

//			  $scope.toggleMin();
			  
			  $scope.getDate = function(){
//				  $log.info("mydate from getDate " , vm.visit.startDate)
				  vm.visit.date = Date.parse(vm.visit.startDate);
				  
//				  refreshVisit(($scope.currentPage-1),10);
			  }

			  $scope.open1 = function() {
			    $scope.popup1.opened = true;
			  };

			  $scope.open2 = function() {
			    $scope.popup2.opened = true;
			  };

//			  $scope.setDate = function(year, month, day) {
//			    $scope.dt = new Date(year, month, day);
//			  };

//			  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
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