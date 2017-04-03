/**
 * 
 */
angular.module('app.controller.addHolidayInCalendarModel', [])
.controller('addHolidayInCalendarModelController', function($scope,$rootScope,$http, $uibModalInstance,$timeout, $interval,$log,
		visitService){
		
	
	var vm = this;
//	vm.holiday = {};
	$scope.ok = function () {
		  if ($scope.holidayForm.$valid){
//			  console.log("holiday.startdate" ,vm.holiday.startdate)
			  console.log("vm.holiday.startDate " , vm.holiday.startDate)
			  console.log("vm.holiday.endDate " , vm.holiday.endDate)
			  holiday = {};
			  holiday.date = vm.holiday.startDate;
			  holiday.endDate = vm.holiday.endDate;
			  holiday.isHoliday = "true";
//			  visit.date = vm.visit.startDate;
			  visitService.save({patientId:0},holiday,function(){
				  console.log("udało się");
				  //vm.people.push({title: 'Random 1', start: new Date(), allDay: true})
			  })
			  $uibModalInstance.close();
		  }else{
			  $(".selectize-input").css(
					  {"border-color": "#f00", 
		             "border-width":"2px", 
		             "border-style":"solid"})
			  $scope.addVisitForm.submitted=true;
		  }
	  
	  };

	  $scope.cancel = function () {
		  $uibModalInstance.dismiss('cancel');
	  };
	
	
	
	
	/////////////////////////////////////////datePickers////////////////////////
	
//	$scope.myParam = myParam;
	
	  
	  
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
