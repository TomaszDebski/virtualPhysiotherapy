/**
 * 
 */

angular.module('app',
		[ 
		  'ngResource',
		  'ngAnimate',
		  'ui.bootstrap',
		  'ui.router',
		  'ngTouch',
		  'ngSanitize',
		  'ui.calendar',
		  'ui.select',
		  'ui.uploader',
		  'app.run',
		  'anim-in-out',
		  'oitozero.ngSweetAlert',
		  'directives.customvalidation.customValidationTypes',
		  'app.controller.index',
		  'app.controller.interviewModal',
		  'app.controller.calendar',
		  
		  'app.config',
		  'app.config.uibPaginationConfig',
		  
		  'app.translate-config',
		  'app.translate-config-pl',
		  'app.translate-config-en',
		  'app.service.patientPagination',
		  'app.controller.navigation',
//		  // 'app.controller.home',
		  'app.controller.login',
		  'app.controller.contact',
		  'app.controller.patients',
		  'app.controller.addPatient',
		  'app.controller.logout',
		  'app.controller.register',
//		  'app.controller.allPhysiotherapist',
		  'app.controller.visits',
		  'app.controller.visit',
		  'app.controller.addVisit',
		  'app.controller.patient',
		  'app.controller.account',
		  'app.controller.addService',
		  'app.controller.addKindOfPain',
		  'app.controller.addBodyPlace',
		  
		  'app.service.auth',
		  'app.service.physiotherapist',
		  'app.service.patient',
		  'app.service.visit',
		  'app.service.service',
		  'app.service.kindOfPain',
		  'app.service.bodyPlace',
		  'app.service.allPatientsForPhysiotherapist',
		  'app.service.visitPagination',
		  'app.service.getVisits',
		  'app.service.getFile',
		  'app.service.interview',
		  
		  'app.controller.interviewModal',
		  'app.controller.addVisitInCalendarModel',
		  'app.controller.addHolidayInCalendarModel',
		  
		  'app.directive.usernameAvailable',
		  'app.directive.equals',
		  'app.directive.dropdown',
		  'app.directive.addNewInterview',
//		  'app.directive.customDirective',
		  'app.directive.addService',
		  'app.directive.multipleBodyAndPlace',
		  
		  'app.filter.searchPatient',
		  'app.filter.tel',
//		  'app.directive.usernameAvailable'
]);