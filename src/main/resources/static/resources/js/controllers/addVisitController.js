/**
 * 
 */

angular.module('app.controller.addVisit', [])
.controller('addVisitController', function($scope,$http,$rootScope,$log,
		$location,$window,visitService,patientService,$http,$stateParams,patients,$timeout,$interval,services) {
	
	var vm = this;
	
	$scope.success = false;
	
	$scope.addVisit = function(visit){
		if (visit == undefined){
			visit = {};
		}
		console.log("visit.service" , visit.service)	
		if ($scope.addVisitForm.$valid){
			visit.hour = vm.visit.hour;
			visit.date = vm.visit.date;
			visit.isHoliday = false;
			visitService.save({patientId:vm.visit.selectedPatientId,serviceId:visit.service},visit,function(){
				console.log("udało się");
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
	
	$scope.services = services;
	
	$scope.clear = function(){
		$scope.visit = {};
		vm.people.patientId = {};
		vm.visit.hour = undefined;
//		vm.visit = {};
//		vm.clear();
//		vm.visit.selectedPatientId = {};
//		visit.length = '';
	}
	
////////////////////////Select Patient///////////////////////
		    
			  vm.disabled = undefined;
			  vm.searchEnabled = undefined;

			  vm.setInputFocus = function (){
				console.log("function setInputFocus")
			    $scope.$broadcast('UiSelectDemo1');
			  };

			  vm.enable = function() {
				  console.log("function enable")
			    vm.disabled = false;
			  };

			  vm.disable = function() {
			    vm.disabled = true;
			  };

			  vm.enableSearch = function() {
				  console.log("function enableSearch")
			    vm.searchEnabled = true;
			  };

			  vm.disableSearch = function() {
			    vm.searchEnabled = false;
			  };

			  vm.clear = function() {
				  console.log("function clear")
			    vm.person.selected = undefined;
			  };

			  vm.someGroupFn = function (item){
				  console.log("function someGroupFn")
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
				  console.log("function onSelectCallback")
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
				  console.log("function tagTransform")
			    var item = {
			        name: newTag,
			        email: newTag.toLowerCase()+'@email.com',
			        age: 'unknown',
			        country: 'unknown'
			    };

			    return item;
			  };
//			  vm.person = {};
			  vm.people = patients;
			  if ($stateParams != null && $stateParams.patientId != null){
				  console.log(" vm.people", vm.people)
				  vm.people.patientId = vm.people[$stateParams.patientId-1];
			  }

//			  vm.person.selectedSingle = 'Samantha';
//			  vm.person.selectedSingleKey = '5';
			  // To run the demos with a preselected person object, uncomment the line below.
			  //vm.person.selected = vm.person.selectedValue;

			  
			  /////////////Dodataj tutaj $paramsa z id pacjenta
//			   = vm.people[2];
//			  vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

			  vm.singleDemo = {};
			  vm.singleDemo.color = '';
			  vm.multipleDemo = {};
//			  vm.multipleDemo.colors = ['Blue','Red'];
//			  vm.multipleDemo.colors2 = ['Blue','Red'];
//			  vm.multipleDemo.selectedPeople = [vm.people[5], vm.people[4]];
//			  vm.multipleDemo.selectedPeople2 = vm.multipleDemo.selectedPeople;
//			  vm.multipleDemo.selectedPeopleWithGroupBy = [vm.people[8], vm.people[6]];
//			  vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];
//			  vm.multipleDemo.removeSelectIsFalse = [vm.people[2], vm.people[0]];

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

//			  vm.address = {};
//			  vm.refreshAddresses = function(address) {
//				  console.log("function refreshAddresses")
//			    var params = {address: address, sensor: false};
//			    return $http.get(
//			      'http://maps.googleapis.com/maps/api/geocode/json',
//			      {params: params}
//			    ).then(function(response) {
//			      vm.addresses = response.data.results;
//			    });
//			  };

//			  vm.addPerson = function(item, model){
//				  console.log("function addPerson")
//			    if(item.hasOwnProperty('isTag')) {
//			      delete item.isTag;
//			      vm.people.push(item);
//			    }
//			  }
			  
//			  var lastVisitForPatient = {};
			  vm.visit = {};
			  vm.choosedPatient = {};
			  vm.onSelectPatient = function(item, model){
				 // console.log("function someFunction")
				 // console.log("item.id " , item.id);
//				  var aa = [];
				  vm.visit.selectedPatientId = item.id;
//				  var aa = getVisitsService.getVisitsByPatientId(item.id);
//				  aa.then(function(data){
////					  var newObj = {};
////					  angular.extend(vm.lastVisit,data);
//					  vm.lastVisit = data[0];
////					  $log.info("getVisitsByPatientId data " ,vm.lastVisit);
//					  
//				  })
//				  vm.choosedPatient = item;
//				  console.log("item" , item)
//				  console.log("model " , model)
				  
			  }
			  
			  ////////////////////////////////////////////////////////////////////	
			
		////////////////////////////////////////Datepicker//////////////////////////////////////////
			
			  $scope.inlineOptions = {
					    customClass: getDayClass,
//					    minDate: new Date(),
//					    showWeeks: true
					  };

					  $scope.dateOptions = {
					    dateDisabled: disabled,
//					    formatYear: 'yy',
//					    maxDate: new Date(2020, 5, 22),
//					    minDate: new Date(),
					    startingDay: 1
					  };

					  // Disable weekend selection
					  function disabled(data) {
					    var date = data.date,
					      mode = data.mode;
					    return mode === 'day' &&  date.getDay() === 0;
//					    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
					  }

					  $scope.toggleMin = function() {
						  console.log("zamykam");
//					    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
//					    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
					  };

//					  $scope.toggleMin();
					  
					  $scope.getDate = function(){
//						  $log.info("mydate from getDate " , vm.visit.startDate)
						  vm.visit.date = Date.parse(vm.visit.startDate);
						  
//						  refreshVisit(($scope.currentPage-1),10);
					  }

					  $scope.open1 = function() {
					    $scope.popup1.opened = true;
					  };

					  $scope.open2 = function() {
					    $scope.popup2.opened = true;
					  };

//					  $scope.setDate = function(year, month, day) {
//					    $scope.dt = new Date(year, month, day);
//					  };

//					  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
					  $scope.format = 'yyyy/MM/dd';
					  $scope.altInputFormats = ['yyyy/MM/dd'];

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
					  

		////////////////////////////////////////////////////////////////////
		
					  vm.onSelectHour = function(item, model){
//						  $log.info("item hour " , item)
						  $("#hourField").css({"border-color": "", 
					             "border-width":"", 
					             "border-style":""})
						  vm.visit.hour = item.name;
					  }
					  vm.country = {};
					  vm.countries = [ // Taken from https://gist.github.com/unceus/6501985
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
//					    {name: 'Zambia', code: 'ZM'},
//					    {name: 'Zimbabwe', code: 'ZW'}
					  ];
				    
				    
				    
				    
				    
				    
				    ////////////////////////////////////////////////////////////	
})
