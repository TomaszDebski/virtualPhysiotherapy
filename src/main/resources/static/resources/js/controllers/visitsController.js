/**
 * 
 */
angular.module('app.controller.visits', [])
.controller('visitsController',
		function($rootScope,$scope, $http, $location,$window,visitService,visitPaginationService,$timeout,patients,visits,
				$stateParams) {
//	console.log('visit Controller');
//	console.log('dodatkowy parametr ' ,$location.search().id);
	
	var vm = this;
	var curr = new Date(); // get current date
//	var first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
//	var last = first + 6; // last day is the first day + 6
//	var firstday = new Date(curr.setDate(first));
//	var lastday = new Date(curr.setDate(firstday.getDate()+6));
	var earlierDay = curr.setDate(curr.getDate()-7);
//	$scope.today = function() {
	    $scope.startDate = earlierDay;
	    $scope.endDate = new Date();
//	  };
	
	$rootScope.id = $window.sessionStorage.id;
	refreshVisit = function(page,size){
		if ($scope.searchVisitForm.$valid){
			console.log('popranwy')
			console.log('vm.visit.selectedPatientId ',vm.visit.selectedPatientId)
			var vis = visitPaginationService.getVisit(page,size,$scope.startDate,$scope.endDate,vm.visit.selectedPatientId);
			vis.then(function(result){
		    	console.log('result: ' , result);
		    	$scope.visits = result.content;
		    	$scope.totalItems = result.totalElements;
		    	$scope.currentPage = result.number+1;
		    })
		}else{
			console.log('niepopranwy')
		}
	}
	$scope.visits = visits;
	
	 $scope.setPage = function (pageNo) {
		    $scope.currentPage = pageNo;
		  };
		  
	  $scope.pageChanged = function() {
		  console.log('pageChange')
		  refreshVisit(($scope.currentPage-1),10);
		  };
	
//	if ($location.search().id == undefined){
//		refreshVisit(0,10);
//	}else{
//		///// zmień to później na service getVisitsByPatients
//		$http.get("visit/byPatient",{params: { patientId: $location.search().id }})
//		    .then(function(value) {
//			$scope.visits = value.data;
//		})
//	}
	
	$scope.deleteVisit = function(visit){
		visitService.delete({id:visit.id},function(){
			refreshVisit(($scope.currentPage-1),10);
		});
	};
	var monthNames = ["Styczeń", "Luty", "Marzec", "April", "May", "June",
	                  "July", "August", "September", "October", "November", "December"
	                ];
	
	
//	  $scope.today();

//	  $scope.clear = function() {
//	    $scope.dt = null;
//	  };

	  $scope.inlineOptions = {
	    customClass: getDayClass,
//	    minDate: new Date(),
//	    showWeeks: true
	  };

	  $scope.dateOptions = {
	    dateDisabled: disabled,
//	    formatYear: 'yy',
//	    maxDate: new Date(2020, 5, 22),
//	    minDate: new Date(),
	    startingDay: 1
	  };

	  // Disable weekend selection
	  function disabled(data) {
	    var date = data.date,
	      mode = data.mode;
	    return mode === 'day' &&  date.getDay() === 0;
//	    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
	  }

	  $scope.toggleMin = function() {
		  console.log("zamykam");
//	    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
//	    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
	  };

//	  $scope.toggleMin();
	  
	  $scope.getDate = function(){
		  refreshVisit(($scope.currentPage-1),10);
	  }

	  $scope.open1 = function() {
	    $scope.popup1.opened = true;
	  };

	  $scope.open2 = function() {
	    $scope.popup2.opened = true;
	  };

//	  $scope.setDate = function(year, month, day) {
//	    $scope.dt = new Date(year, month, day);
//	  };

//	  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
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
	  
	  $scope.slij = function(){
		  var url = "startDate=" + Date.parse($scope.startDate) + '&endDate=' + Date.parse($scope.endDate) + '&id=' + $rootScope.id;
		  $http.get("visit/byDateBetween?page=0&size=10&" + url )
			.then(function(value) {
				$scope.visits = value.data;
			})
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
	  vm.visit = {};
	  vm.person = {};
	  vm.people = patients;
	  if ($stateParams != null && $stateParams.patient_id != null && vm.people.length > 0){
		  console.log(" vm.people", vm.people)
		  vm.people.patientId = search($stateParams.patient_id,vm.people);
		  vm.visit.selectedPatientId = vm.people.patientId.id; 
		  vm.patientPlaceholer = 'Wybierz pacjenta z listy';
	  }else{
		  vm.people.patientId = vm.people[0];
		  if (vm.people.length == 0){
			  vm.patientPlaceholer = 'Brak pacjentów';
			  vm.disabled = true;
			  vm.disable();
			  vm.disableSearch();
		  }
	  }
	  
	  function search(idKey, myArray){
		    for (var i=0; i < myArray.length; i++) {
		        if (myArray[i].id === idKey) {
		            return myArray[i];
		        }
		    }
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


	  
	  vm.choosedPatient = {};
	  vm.onSelectPatient = function(item, model){
		  vm.visit.selectedPatientId = item.id;
		  console.log("odpalam ",vm.visit.selectedPatientId);
		  refreshVisit(($scope.currentPage-1),10);
	  }
	  
	  $scope.currentPage = 0;
	  ////////////////////////////////////////////////////////////////////	
});