/**
 * 
 */

angular.module('app.controller.addVisit', [])
.controller('addVisitController', function($scope,$http,$rootScope,$log,
		$location,$window,visitService,patientService,$stateParams,patients,$timeout,$interval,services,$parse,
		$filter) {
	
	var vm = this;
	
	$scope.success = false;
	$scope.counter= 0;
	$scope.visit= {};
	$scope.addVisit = function(visit){
		if (visit == undefined){
			visit = {};
		}
		if ($scope.addVisitForm.$valid){
			createTreatmentsForVisit(visit);
			visit.hour = visit.hour.name;
			visit.date = vm.visit.date;
			visit.isHoliday = false;
			visitService.save({patientId:vm.visit.selectedPatientId},visit,function(){
				$scope.success = true;
			})
		}else{
			$(".selectize-input").css(
					  {"border-color": "#f00", 
		             "border-width":"2px", 
		             "border-style":"solid"})
			  $scope.addVisitForm.submitted=true;
			$scope.success = false;
		}
	}
	
	function createTreatmentsForVisit(visit){
		var servicesCopy = angular.copy(services);
		visit.treatment = [];
		var treatment = {};
		var service = $filter('filter')(servicesCopy, {'id':$scope.visit.service})[0];
		treatment.service = service;
		visit.treatment.push(treatment);
		for(var i = 1; i <= $scope.counter; i++){
			treatment={};
			var findedServiceValue = angular.element(document.querySelector('#selectService_'+i)).val();
			service = $filter('filter')(servicesCopy, {'id':findedServiceValue})[0];
			treatment.service = service;
			visit.treatment.push(treatment);
		}
		return visit;
	}
	
	$scope.services = services;
	
	$scope.clear = function(){
		$scope.visit = {};
		vm.people.patientId = {};
		vm.visit.hour = undefined;
	}
	
////////////////////////Select Patient///////////////////////
		    
			  vm.disabled = undefined;
			  vm.searchEnabled = undefined;

			  vm.setInputFocus = function (){
			    $scope.$broadcast('UiSelectDemo1');
			  };

			  vm.enable = function() {
			    vm.disabled = false;
			  };

			  vm.disable = function() {
			    vm.disabled = true;
			  };

			  vm.enableSearch = function() {
			    vm.searchEnabled = true;
			  };

			  vm.disableSearch = function() {
			    vm.searchEnabled = false;
			  };

			  vm.clear = function() {
			    vm.person.selected = undefined;
			  };

			  vm.someGroupFn = function (item){
			    if (item.name[0] >= 'A' && item.name[0] <= 'M')
			        return 'From A - M';

			    if (item.name[0] >= 'N' && item.name[0] <= 'Z')
			        return 'From N - Z';
			  };

			  vm.firstLetterGroupFn = function (item){
			      return item.name[0];
			  };

			  vm.reverseOrderFilterFn = function(groups) {
			    return groups.reverse();
			  };

			  vm.peopleAsync = [];
			  
			  $timeout(function(){
				   vm.peopleAsync = patients;
				  },3000);

			  vm.counter = 0;
			  vm.onSelectCallback = function (item, model){
			    vm.counter++;
			    vm.eventResult = {item: item, model: model};
			  };

			  vm.removed = function (item, model) {
			    vm.lastRemoved = {
			        item: item,
			        model: model
			    };
			  };

			  vm.tagTransform = function (newTag) {
			    var item = {
			        name: newTag,
			        email: newTag.toLowerCase()+'@email.com',
			        age: 'unknown',
			        country: 'unknown'
			    };

			    return item;
			  };
			  vm.people = patients;
			  if ($stateParams != null && $stateParams.patientId != null){
				  vm.people.patientId = vm.people[$stateParams.patientId-1];
			  }

			  vm.singleDemo = {};
			  vm.singleDemo.color = '';
			  vm.multipleDemo = {};

			  vm.appendToBodyDemo = {
			    remainingToggleTime: 0,
			    present: true,
			    startToggleTimer: function() {
			      var scope = vm.appendToBodyDemo;
			      var promise = $interval(function() {
			        if (scope.remainingTime < 1000) {
			          $interval.cancel(promise);
			          scope.present = !scope.present;
			          scope.remainingTime = 0;
			        } else {
			          scope.remainingTime -= 1000;
			        }
			      }, 1000);
			      scope.remainingTime = 3000;
			    }
			  };

			  vm.visit = {};
			  vm.choosedPatient = {};
			  vm.onSelectPatient = function(item, model){
				  vm.visit.selectedPatientId = item.id;
			  }
			  vm.patientPlaceholer = 'Wybierz pacjenta z listy';
			  
			  if ($stateParams != null && $stateParams.patientId != null && vm.people.length > 0){
				  vm.people.patient = search($stateParams.patientId,vm.people);
				  vm.visit.selectedPatientId = vm.people.patient.id; 
				  vm.people.patientId = vm.people.patient;
			  }
			  
			  function search(idKey, myArray){
				    for (var i=0; i < myArray.length; i++) {
				        if (myArray[i].id === idKey) {
				            return myArray[i];
				        }
				    }
				}
			  
			  ////////////////////////////////////////////////////////////////////	
			
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
			
					  
	///////////////////////////////Timepicker//////////////////////////////////
					  
					  vm.country = {};
					  vm.countries = [ 
					    {name: '00:00'},
					    {name: '01:30'},
					    {name: '09:00'},
					    {name: '09:30'},
					    {name: '10:00'},
					    {name: '10:30'},
					    {name: '11:00'},
					    {name: '11:30'},
					    {name: '12:00'},
					    {name: '12:30'},
					    {name: '13:00'},
					    {name: '13:30'},
					    {name: '14:00'},
					    {name: '14:30'},
					    {name: '15:00'},
					    {name: '15:30'},
					  ];
				    
				    ////////////////////////////////////////////////////////////	
})
