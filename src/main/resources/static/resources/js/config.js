/**
 * 
 */
angular.module('app.config', [])
.config(function($stateProvider, $urlRouterProvider,$locationProvider,$compileProvider) {
	$stateProvider
	.state('home', {
		url:"/",
		templateUrl : 'html/main.html',
		controller : 'navigationController',
	})
	.state('login', {
		url: '/login',
		templateUrl : 'html/login.html',
		controller : 'loginController'
	})
	.state('logout', {
		url: '/logout',
		templateUrl : 'html/logout.html',
		controller : 'logoutController',
	})
	.state('register', {
		url: '/register',
		templateUrl : 'html/register.html',
		controller : 'registerController',
	})
	.state('showAllPhysiotherapists', {
		url: '/showAllPhysiotherapists',
		templateUrl : 'html/allPhysiotherapists.html',
		controller : 'allPhysiotherapistController',
	})
	.state('contact', {
		url: '/contact',
		templateUrl : 'html/contact.html',
		controller : 'contactController',
	})
	
	.state('addPatient', {
		url: '/addPatient',
		templateUrl : 'html/addPatient.html',
		controller : 'addPatientController'
	})
	.state('allPatients', {
	url: '/allPatients',
	templateUrl : 'html/patients.html',
	controller : 'patientsController',
	resolve: {
//		patients: function(patientService,allPatientsForPhysiotherapistService,$rootScope) {
//	    	return allPatientsForPhysiotherapistService.getPatients($rootScope.user);
//	    }
		patients: function($http,$rootScope,$window){
			$rootScope.id = $window.sessionStorage.id;
			return $http.get('patient/cos?page=0&size=10&id=' + $rootScope.id)
				.success(function(data,status,headers,config){
					return data;
				}).error(function(data,status,headers,config){
					console.log("nie udało się");
				})
			}
		  }
	})
	.state('visits', {
		url: '/visits',
		templateUrl : 'html/visits.html',
		controller : 'visitController as ctrl',
		resolve: {
			visits : function($rootScope,visitPaginationService,$stateParams){
				var curr = new Date; 
				var earlierDay = curr.setDate(curr.getDate()-7);
				console.log('earlierDay ',earlierDay)
				return visitPaginationService.getVisit(0,10,earlierDay,new Date(),$stateParams.patient_id)
				.then(function(result){
			    	console.log('result: ' , result);
			    	return result.content;
			    })
			},
			patients : function(allPatientsForPhysiotherapistService,$rootScope,$window){
				$rootScope.user = $window.sessionStorage.user;
      		  return allPatientsForPhysiotherapistService.getPatients()
      		  .then(function(result){
      	    	console.log('result addVisitController: ' , result);
      	    	return result;
      	    })
      	  }
		},
		params : {
			patient_id : 1
		}
	})
	.state('addVisit', {
		url: '/addVisit',
		templateUrl : 'html/addVisit.html',
		controller : 'addVisitController as ctrl',
		resolve : {
			patients : function(allPatientsForPhysiotherapistService,$rootScope,$window){
				$rootScope.user = $window.sessionStorage.user;
      		  return allPatientsForPhysiotherapistService.getPatients()
      		  .then(function(result){
      	    	console.log('result addVisitController: ' , result);
      	    	return result;
      	    })
      	  },
      	  	services : function(serviceService){
      	  		return serviceService.query(function(data) {
      	  			console.log("services data " ,data);
      	  			return data;
      	  		});
      	  	}
		},
		params : {
			patientId :null
		}
	})
	.state('patient', {
		url: '/patient/:id',
		templateUrl : 'html/patient.html',
		controller : 'patientController',
	})
	.state('calendar', {
		url: '/calendar',
		params :{
			id : null
		},
		templateUrl : 'html/calendar.html',
		controller : 'CalendarCtrl',
	})
	.state('account', {
		url: '/account',
		templateUrl : 'html/account.html',
		controller : 'accountController',
	})
	.state('addService', {
		url: '/addService',
		templateUrl : 'html/addService.html',
		controller : 'addServiceController',
	})
	.state('addKindOfPain', {
		url: '/addKindOfPain',
		templateUrl : 'html/addKindOfPain.html',
		controller : 'addKindOfPainController',
	})
	
	$urlRouterProvider.otherwise("/");

//	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	
//	 $locationProvider.html5Mode(true);
//	$compileProvider.debugInfoEnabled(false);

})

