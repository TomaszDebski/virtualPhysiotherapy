/**
 * 
 */
angular.module('app.translate-config', ['pascalprecht.translate'])
.config(function ($translateProvider) {
  $translateProvider.preferredLanguage('pl');
  
  $translateProvider.registerAvailableLanguageKeys(['en','pl'], {
	    'en-*': 'en',
	    'pl-*': 'pl'
	  })
  
  $translateProvider.forceAsyncReload(true);
  $translateProvider.useSanitizeValueStrategy('escapeParameters');
})

