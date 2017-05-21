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
		  'directives.customvalidation.customValidationTypes',
//		  'ui.date',
//		  'ui-layout',
//		 'ModalDialogController',
		  'app.controller.index',
		  'app.controller.interviewModal',
		  'app.controller.calendar',
		  
		  'app.config',
		  'app.translate-config',
		  'app.translate-config-pl',
		  'app.translate-config-en',
//		  'app.service.angularModalService',
		  'app.service.patientPagination',
		  'app.controller.navigation',
//		  // 'app.controller.home',
		  'app.controller.login',
		  'app.controller.contact',
		  'app.controller.patients',
		  'app.controller.addPatient',
		  'app.controller.logout',
		  'app.controller.register',
		  'app.controller.allPhysiotherapist',
		  'app.controller.visit',
		  'app.controller.addVisit',
		  'app.controller.patient',
		  'app.controller.account',
		  'app.controller.addService',
		  'app.controller.addKindOfPain',
		  
		  'app.service.auth',
		  'app.service.physiotherapist',
		  'app.service.patient',
		  'app.service.visit',
		  'app.service.service',
		  'app.service.kindOfPain',
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
		  'app.directive.customDirective',
		  
		  'app.filter.searchPatient'
//		  'app.service.returnBook',
//		  'app.service.controller',
//		  'app.directive.usernameAvailable'
]);