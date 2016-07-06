angular.module('charity').component('causesCmp', {
  templateUrl: 'components/causes-cmp/causes-cmp.html',
  controller: causesCmpController
});

function causesCmpController() {
  let $ctrl = this;

  $ctrl.baba = "БАБАТИИ";
};
