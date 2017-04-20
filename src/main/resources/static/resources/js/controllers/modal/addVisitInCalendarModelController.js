/**
 * 
 */
angular.module('app.controller.addVisitInCalendarModel', [])
.controller('addVisitInCalendarModelController', function($scope,$rootScope,$http, $uibModalInstance , myParam,
		allPatientsForPhysiotherapistService,patients,myParam,$timeout, $interval,getVisitsService,$log,visitService) {
	
	$scope.width = 1200;
	$scope.height = 1000;
	$scope.visit = {};
	$scope.ok = function (visit) {
		  if ($scope.addVisitForm.$valid){
			  visit.hour = vm.visit.hour;
//			  console.log('vm.visit.startDate' , vm.visit.startDate)
			  visit.date = vm.visit.startDate;
			  visit.isHoliday = false;
			  visit.length = vm.visit.length;
			  visitService.save({patientId:vm.visit.selectedPatientId},visit,function(){
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
//	var patients = allPatientsForPhysiotherapistService.getPatients($rootScope.user);
//	patients.then(function(result){
//    	console.log('result: ' , result);
////    	$scope.items = result;
//    	
//    })
//	console.log("myPatients " , patients);
//	console.log("myParam " , myParam);
	
	////////////////////////Select Patient///////////////////////
    
	var vm = this;

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
	    vm.address.selected = undefined;
	    vm.country.selected = undefined;
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

	  vm.personAsync = {selected : "wladimir@email.com"};
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

	  vm.peopleObj = patients;

	  vm.person = {};

	  vm.person.selectedValue = vm.peopleObj[3];
	  vm.person.selectedSingle = 'Samantha';
	  vm.person.selectedSingleKey = '5';
	  // To run the demos with a preselected person object, uncomment the line below.
	  //vm.person.selected = vm.person.selectedValue;

	  vm.people = patients;

//	  vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

	  vm.singleDemo = {};
	  vm.singleDemo.color = '';
	  vm.multipleDemo = {};
	  vm.multipleDemo.colors = ['Blue','Red'];
	  vm.multipleDemo.colors2 = ['Blue','Red'];
	  vm.multipleDemo.selectedPeople = [vm.people[5], vm.people[4]];
	  vm.multipleDemo.selectedPeople2 = vm.multipleDemo.selectedPeople;
	  vm.multipleDemo.selectedPeopleWithGroupBy = [vm.people[8], vm.people[6]];
	  vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];
	  vm.multipleDemo.removeSelectIsFalse = [vm.people[2], vm.people[0]];

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

//	  vm.address = {};
//	  vm.refreshAddresses = function(address) {
//		  console.log("function refreshAddresses")
//	    var params = {address: address, sensor: false};
//	    return $http.get(
//	      'http://maps.googleapis.com/maps/api/geocode/json',
//	      {params: params}
//	    ).then(function(response) {
//	      vm.addresses = response.data.results;
//	    });
//	  };

//	  vm.addPerson = function(item, model){
//		  console.log("function addPerson")
//	    if(item.hasOwnProperty('isTag')) {
//	      delete item.isTag;
//	      vm.people.push(item);
//	    }
//	  }
	  
//	  var lastVisitForPatient = {};
	  vm.visit = {};
	  vm.choosedPatient = {};
	  vm.onSelectPatient = function(item, model){
		 // console.log("function someFunction")
		 // console.log("item.id " , item.id);
//		  var aa = [];
		  vm.visit.selectedPatientId = item.id;
		  var aa = getVisitsService.getVisitsByPatientId(item.id);
		  aa.then(function(data){
//			  var newObj = {};
//			  angular.extend(vm.lastVisit,data);
			  vm.lastVisit = data[0];
//			  $log.info("getVisitsByPatientId data " ,vm.lastVisit);
			  
		  })
		  vm.choosedPatient = item;
//		  console.log("item" , item)
//		  console.log("model " , model)
		  
	  }
	  
	  ////////////////////////////////////////////////////////////////////
	  
	  /////////////////////select Hour///////////////////////////////////

	  vm.onSelectHour = function(item, model){
//		  $log.info("item hour " , item)
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
//	    {name: 'Zambia', code: 'ZM'},
//	    {name: 'Zimbabwe', code: 'ZW'}
	  ];
    
    
    
    
    
    
    ////////////////////////////////////////////////////////////
	
	
//	$scope.items = patients;
//	console.log("$scope.items" ,$scope.items)
//
//	              $scope.status = {
//	                isopen: false
//	              };
//
//	              $scope.toggled = function(open) {
//	                $log.log('Dropdown is now: ', open);
//	              };
//
//	              $scope.toggleDropdown = function($event) {
//	                $event.preventDefault();
//	                $event.stopPropagation();
//	                $scope.status.isopen = !$scope.status.isopen;
//	              };
//
//	              $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
	
	
	//////////////////////////////////////////////////////
	 
	
	  
	  
	//////////////////////////datapicker///////////////// 
	  
	  $scope.myParam = myParam;
	  
	  
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

			  $scope.getDate = function(){
				  vm.visit.startDate = Date.parse(vm.visit.startDate);
//				  $('#lengthField').val('30');
				  vm.visit.length = '30';
				  console.log("vm.visit.length",vm.visit.length)
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
			  $scope.format = 'yyyy/MM/dd';
//			  $scope.altInputFormats = ['M!/d!/yyyy'];

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
	///////////////////////////////////////////////////////////////////

}).filter('propsFilter', function() {
	  return function(items, props) {
		    var out = [];

		    if (angular.isArray(items)) {
		      var keys = Object.keys(props);

		      items.forEach(function(item) {
		        var itemMatches = false;

		        for (var i = 0; i < keys.length; i++) {
		          var prop = keys[i];
		          var text = props[prop].toLowerCase();
		          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
		            itemMatches = true;
		            break;
		          }
		        }

		        if (itemMatches) {
		          out.push(item);
		        }
		      });
		    } else {
		      // Let the output be the input untouched
		      out = items;
		    }

		    return out;
		  };
		});