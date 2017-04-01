/**
 * 
 */
angular.module('app.directive.usernameAvailable', [])
.directive('usernameAvailableDirective', function($timeout, $q,$http) {
  return {
    restrict: 'AE',
    require: 'ngModel',
    link: function(scope, elm, attr, model) { 
      model.$asyncValidators.usernameExists = function() {
        return $http.get('physiotherapist/byUsername/' + elm[0].value).then(function(response) {
        	$timeout(function(){
      		  model.$setValidity('usernameExists', !response.data); 
        	}, 500);
        });
      }
    }
  } 
});