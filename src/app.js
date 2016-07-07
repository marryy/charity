angular.module('charity', [
    'ngComponentRouter',
    'ngResource',
    'restService']);

angular.module('charity').config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

angular.module('charity').value('$routerRootComponent', 'appCmp');
