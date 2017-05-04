/**
 * 
 */
angular.module('app.translate-config', ['pascalprecht.translate'])
.config(function ($translateProvider) {
//  $translateProvider.translations('en', {
//    TITLE: 'Hello',
//    FOO: 'This is a paragraph.',
//    BUTTON_LANG_EN: 'english',
//    BUTTON_LANG_DE: 'german'
//  });
//  $translateProvider.translations('de', {
//    TITLE: 'Hallo',
//    FOO: 'Dies ist ein Paragraph.',
//    BUTTON_LANG_EN: 'englisch',
//    BUTTON_LANG_DE: 'deutsch'
//  });
  $translateProvider.preferredLanguage('pl');
  
  $translateProvider.registerAvailableLanguageKeys(['en', 'de','pl'], {
	    'en-*': 'en',
	    'de-*': 'de',
	    'pl-*': 'pl'
	  })
  
  $translateProvider.useStaticFilesLoader({
      prefix: '/resources/languages/',
      suffix: '.json'
    });
  
  $translateProvider.useSanitizeValueStrategy(null);
//  $translateProvider.useCookieStorage();
//  $translateProvider.useSanitizeValueStrategy('escaped');
});

//app.controller('Ctrl', function ($scope, $translate) {
//  $scope.changeLanguage = function (key) {
//    $translate.use(key);
//  };
//});