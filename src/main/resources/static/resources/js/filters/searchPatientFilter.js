/**
 * 
 */
angular.module('app.filter.searchPatient', [])
.filter('searchPatientFilter', function () {
  return function (items,patientSearch) {
	  var filtered = [];
	  angular.forEach(items, function(item , key){
		  if (angular.isUndefined(patientSearch)){
			  filtered.push(item);
		  }else if (angular.lowercase(item.firstname).indexOf(angular.lowercase(patientSearch)) != -1 ||
				  	angular.lowercase(item.lastname).indexOf(angular.lowercase(patientSearch)) != -1  ) {
			  filtered.push(item);
	      }
	  })
    return filtered;
  };
});