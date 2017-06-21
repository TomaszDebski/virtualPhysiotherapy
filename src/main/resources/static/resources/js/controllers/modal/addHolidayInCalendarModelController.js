/**
 * 
 */
angular.module('app.controller.addHolidayInCalendarModel', [])
.controller('addHolidayInCalendarModelController', function($scope,$rootScope,$http, $uibModalInstance,$timeout, $interval,$log,
		visitService){
	
	var vm = this;
	$scope.ok = function () {
		  if ($scope.holidayForm.$valid){
			  holiday = {};
			  holiday.date = vm.holiday.startDate;
			  holiday.endDate = vm.holiday.endDate;
			  holiday.isHoliday = "true";
			  visitService.save({patientId:0},holiday,function(){
			  })
			  $uibModalInstance.close();
		  }else{
			  $(".selectize-input").css(
					  {"border-color": "#f00", 
		             "border-width":"2px", 
		             "border-style":"solid"})
			  $scope.holidayForm.submitted=true;
		  }
	  };

	  $scope.cancel = function () {
		  $uibModalInstance.dismiss('cancel');
	  };
	
	/////////////////////////////////////////datePickers////////////////////////
	
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

			  $scope.getStartDate = function(){
				  vm.holiday.startDate = Date.parse(vm.holiday.startDate);
			  }
			  
			  $scope.getEndDate = function(){
				  vm.holiday.endDate = Date.parse(vm.holiday.endDate);
			  }


			  $scope.open1 = function() {
			    $scope.popup1.opened = true;
			  };

			  $scope.open2 = function() {
			    $scope.popup2.opened = true;
			  };

			  $scope.format = 'yyyy/MM/dd';

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
	///////////////////////////////////////////////////////////////////////////
})
