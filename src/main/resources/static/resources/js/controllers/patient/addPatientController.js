/**
 * 
 */

angular.module('app.controller.addPatient', [])
.controller('addPatientController', function($scope,$http,$rootScope,$location,$window,patientService) {
	$scope.successAddPatient = false;
	$scope.addPatient = function(patient){
		if($scope.addPatientForm.$valid) {
			patientService.save(patient,function(){
				$scope.successAddPatient = true;
				$window.scrollTo(0, 0);
			})
		}else{
			$scope.addPatientForm.submitted=true;    
			console.log('niepoprawny formularz')
		} 
		
	}
	
////////////////////////////////////////Datepicker//////////////////////////////////////////
	
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
			  }

			  $scope.open1 = function() {
			    $scope.popup1.opened = true;
			  };

			  $scope.open2 = function() {
			    $scope.popup2.opened = true;
			  };

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