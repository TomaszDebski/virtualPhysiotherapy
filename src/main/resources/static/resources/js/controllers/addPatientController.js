/**
 * 
 */

angular.module('app.controller.addPatient', [])
.controller('addPatientController', function($scope,$http,$rootScope,$location,$window,patientService) {
//	$scope.deletePatient = function(patient){
//		console.log("patient.id " , patient.id)
//		patientService.delete({id:patient.id},function(){
//			refreshMethod();
//		});
//	}
//	
//	console.log('patient Controllerrrr');
	$scope.successAddPatient = false;
	$scope.addPatient = function(patient){
		if($scope.addPatientForm.$valid) {
			patientService.save(patient,function(){
				console.log("udało się");
				$scope.successAddPatient = true;
				$window.scrollTo(0, 0);
//				$location.path("/allPatients");
			})
		}else{
			$scope.addPatientForm.submitted=true;    
//			angular.forEach($scope.addPatientForm.$error.required, function(field) {
//			    field.$setDirty();
//			});
			console.log('niepoprawny formularz')
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
//				  vm.visit.date = Date.parse(vm.visit.startDate);
				  
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
			  
///////////////////////////////////////////////////////////////////////////////////////////
})
.directive('customDatepicker',function($compile){
        return {
            replace:true,
            templateUrl:'custom-datepicker.html',
            scope: {
                ngModel: '=',
                dateOptions: '='
            },
            link: function($scope, $element, $attrs, $controller){
                var $button = $element.find('button');
                var $input = $element.find('input');
                $button.on('click',function(){
                    if($input.is(':focus')){
                        $input.trigger('blur');
                    } else {
                        $input.trigger('focus');
                    }
                });
            }    
        };
    })