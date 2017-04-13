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
		  'app.service.auth',
		  'app.service.physiotherapist',
		  'app.service.patient',
		  'app.service.visit',
		  'app.service.allPatientsForPhysiotherapist',
		  'app.service.visitPagination',
		  'app.service.getVisits',
		  'app.service.getFile',
		  
		  'app.controller.interviewModal',
		  'app.controller.addVisitInCalendarModel',
		  'app.controller.addHolidayInCalendarModel',
		  
		  'app.directive.usernameAvailable',
		  'app.directive.equals',
		  'app.directive.dropdown',
		  
		  'app.filter.searchPatient'
//		  'app.service.returnBook',
//		  'app.service.controller',
//		  'app.directive.usernameAvailable'
]);