/**
 * 
 */
angular.module('app.controller.visit', [])
.controller('visitController',
		function($rootScope,$scope, $http, $location,$window,visitService,visitPaginationService) {
//	console.log('visit Controller');
//	console.log('dodatkowy parametr ' ,$location.search().id);
	
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
		console.log('$scope.startDate ',$scope.startDate)
		var visits = visitPaginationService.getVisit(page,size,$scope.startDate,$scope.endDate,$rootScope.id);
		visits.then(function(result){
	    	console.log('result: ' , result);
	    	$scope.visits = result.content;
	    	$scope.totalItems = result.totalElements;
	    	$scope.currentPage = result.number+1;
	    })
	}
	
	 $scope.setPage = function (pageNo) {
		    $scope.currentPage = pageNo;
		  };
		  
	  $scope.pageChanged = function() {
		  console.log('pageChange')
		  refreshVisit(($scope.currentPage-1),10);
		  };
	
	if ($location.search().id == undefined){
		refreshVisit(0,10);
	}else{
		///// zmień to później na service getVisitsByPatients
		$http.get("visit/byPatient",{params: { patientId: $location.search().id }})
		    .then(function(value) {
			$scope.visits = value.data;
		})
	}
	
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
//	  $scope.altInputFormats = ['M!/d!/yyyy'];

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
});