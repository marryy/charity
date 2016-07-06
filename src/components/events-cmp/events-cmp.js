angular.module('charity').component('eventsCmp', {
  templateUrl: 'components/events-cmp/events-cmp.html',
  controller: eventsCmpController
});

function eventsCmpController(eventsService) {
  let $ctrl = this;

  $ctrl.$routerOnActivate = function() {
    $ctrl.getEvents();
  };

  $ctrl.getEvents = function() {
    return eventsService.query(function(events) {
      $ctrl.events = events;
    });
  }
};

