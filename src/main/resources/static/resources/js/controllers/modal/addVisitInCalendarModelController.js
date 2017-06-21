/**
 * 
 */
angular.module('app.controller.addVisitInCalendarModel', [])
.controller('addVisitInCalendarModelController', function($scope,$rootScope,$http, $uibModalInstance , myParam,
		allPatientsForPhysiotherapistService,patients,$timeout, $interval,getVisitsService,$log,visitService,
		services,$filter) {
	
	$scope.width = 1200;
	$scope.height = 1000;
	$scope.visit = {};
	$scope.counter= 0;
	$scope.ok = function (visit) {
		  if ($scope.addVisitForm.$valid){
			  createTreatmentsForVisit(visit);
			  visit.hour = vm.visit.hour.name;
			  visit.date = vm.visit.startDate;
			  visit.isHoliday = false;
			  visit.length = vm.visit.length;
			  visitService.save({patientId:vm.visit.selectedPatientId},visit,function(){
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
	  
	  $scope.services= services;

	  $scope.cancel = function () {
		  $uibModalInstance.dismiss('cancel');
	  };
	
	////////////////////////Select Patient///////////////////////
    
	var vm = this;

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
	    vm.address.selected = undefined;
	    vm.country.selected = undefined;
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

	  vm.personAsync = {selected : "wladimir@email.com"};
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

	  vm.peopleObj = patients;

	  vm.person = {};

	  vm.person.selectedValue = vm.peopleObj[3];
	  vm.person.selectedSingle = 'Samantha';
	  vm.person.selectedSingleKey = '5';
	  vm.people = patients;

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

	  vm.visit = {};
	  vm.choosedPatient = {};
	  vm.onSelectPatient = function(item, model){
		  vm.visit.selectedPatientId = item.id;
		  var aa = getVisitsService.getVisitsByPatientId(item.id);
		  aa.then(function(data){
			  vm.lastVisit = data[0];
			  
		  })
		  vm.choosedPatient = item;
		  
	  }
	  
	  ////////////////////////////////////////////////////////////////////
	  
	  /////////////////////select Hour///////////////////////////////////

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
	
	
	//////////////////////////datapicker///////////////// 
	  
	  $scope.myParam = myParam;
	  
	  
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

			  $scope.getDate = function(){
				  vm.visit.startDate = Date.parse(vm.visit.startDate);
				  vm.visit.length = '30';
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