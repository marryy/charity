var service = angular.module('restService', ['ngResource']);

service.factory('eventsService', ['$resource', function ($resource) {
    var url = 'http://jsonplaceholder.typicode.com/users';
    return $resource(url, {id: '@_id'}, {
        update: {
            method: 'PUT'
        }
    });
}]);
