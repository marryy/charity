angular.module('charity').component('appCmp', {
    templateUrl: 'components/app-cmp/app-cmp.html',
    $routeConfig: [
        {path: '/', component: 'homepageCmp', name: 'Homepage', useAsDefault: true},
        {path: '/causes', component: 'causesCmp', name: 'Causes'},
        {path: '/events', component: 'eventsCmp', name: 'Events'},
    ]
});
