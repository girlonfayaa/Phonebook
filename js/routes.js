angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('contacts', {
    url: '/page1',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('criselle', {
    url: '/page3',
    templateUrl: 'templates/criselle.html',
    controller: 'criselleCtrl'
  })

  .state('rC', {
    url: '/page4',
    templateUrl: 'templates/rC.html',
    controller: 'rCCtrl'
  })

  .state('ederick', {
    url: '/page6',
    templateUrl: 'templates/ederick.html',
    controller: 'ederickCtrl'
  })

  .state('recents', {
    url: '/page7',
    templateUrl: 'templates/recents.html',
    controller: 'recentsCtrl'
  })

  .state('keypad', {
    url: '/page9',
    templateUrl: 'templates/keypad.html',
    controller: 'keypadCtrl'
  })

  .state('favorite', {
    url: '/page10',
    templateUrl: 'templates/favorite.html',
    controller: 'favoriteCtrl'
  })

  .state('shantal', {
    url: '/page11',
    templateUrl: 'templates/shantal.html',
    controller: 'shantalCtrl'
  })

  .state('lilian', {
    url: '/page12',
    templateUrl: 'templates/lilian.html',
    controller: 'lilianCtrl'
  })

  .state('lester', {
    url: '/page13',
    templateUrl: 'templates/lester.html',
    controller: 'lesterCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});