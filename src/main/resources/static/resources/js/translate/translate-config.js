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
  
//  $translateProvider.useStaticFilesLoader({
//      prefix: '/resources/languages/',
//      suffix: '.json'
//    });
  $translateProvider.forceAsyncReload(true);
//  $translateProvider.useSanitizeValueStrategy(null);
//  $translateProvider.useCookieStorage();
  $translateProvider.useSanitizeValueStrategy('escapeParameters');
})

