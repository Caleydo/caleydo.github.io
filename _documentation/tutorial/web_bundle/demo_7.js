var demoApp = angular.module('demoApp', []);

demoApp.controller('DemoController', function DemoController($scope) {
  $scope.table = [
      [1,2,3,4],
      [1,2,3,4],
      [1,2,3,4],
      [1,2,3,4]
  ];
});