/**
 * 
 */
angular.module('app.config', [])
.config(function($stateProvider, $urlRouterProvider,$locationProvider,$compileProvider,$httpProvider) {
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
		patients: function($http,$rootScope,$window){
			$rootScope.id = $window.sessionStorage.id;
			return $http.get('patient/patientsPagination?page=0&size=10&id=' + $rootScope.id)
				.success(function(data,status,headers,config){
					return data;
				}).error(function(data,status,headers,config){
					console.log("error");
				})
			}
		  }
	})
	.state('visits', {
		url: '/visits',
		templateUrl : 'html/visits.html',
		controller : 'visitsController as ctrl',
		resolve: {
			visits : function($rootScope,visitPaginationService,$stateParams){
				var curr = new Date; 
				var earlierDay = curr.setDate(curr.getDate()-7);
				if ($stateParams.patient_id != null){
					return visitPaginationService.getVisit(0,10,earlierDay,new Date(),$stateParams.patient_id)
					.then(function(result){
				    	return result.content;
				    })
				}
			},
			patients : function(allPatientsForPhysiotherapistService,$rootScope,$window){
				$rootScope.user = $window.sessionStorage.user;
      		  return allPatientsForPhysiotherapistService.getPatients()
      		  .then(function(result){
      	    	return result;
      	    })
      	  }
		},
		params : {
			patient_id : null
		}
	})
	.state('visit', {
		url: '/visit/:id',
		templateUrl : 'html/visit.html',
		controller : 'visitController',
		resolve : {
			visit : function(visitService,$stateParams){
				return visitService.get({id:$stateParams.id}).$promise.then(function(data){
					return data;
				});
			}
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
      	    	return result;
      	    })
      	  },
      	  	services : function(serviceService){
      	  		return serviceService.query(function(data) {
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
		controller : 'patientController as vm',
		resolve : {
			patient : function($stateParams,patientService){
				return patientService.get({id:$stateParams.id}).$promise.then(function(data){
					return data;
				});
			}
		}
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
		resolve : {
			user : function(physiotherapistService,$window){
				return physiotherapistService.get({id:$window.sessionStorage.id},function(data){
					return data;
				});
			},
			file : function(getFileService,$window){
				return getFileService.getOneFile($window.sessionStorage.id).then(function(result){
					return result.data;
				})
			}
		}
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
	.state('addBodyPlace', {
		url: '/addBodyPlace',
		templateUrl : 'html/addBodyPlace.html',
		controller : 'addBodyPlaceController',
	})
	.state('401', {
		templateUrl : 'html/utils/401.html',
	})
	
	$urlRouterProvider.otherwise("/");

	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	
})

