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
	$scope.addPatient = function(patient){
		if($scope.addPatientForm.$valid) {
			patientService.save(patient,function(){
				console.log("udało się");
				$location.path("/allPatients");
			})
		}else{
			$scope.addPatientForm.submitted=true;    
//			angular.forEach($scope.addPatientForm.$error.required, function(field) {
//			    field.$setDirty();
//			});
			console.log('niepoprawny formularz')
		} 
		
	}
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