function demo_7() {

  var demoApp = angular.module('demoApp', []);

  demoApp.controller('DemoController', function DemoController($scope) {
    $scope.table = [
      [1, 2, 3, 4],
      [2, 3, 4, 3],
      [3, 4, 3, 2],
      [4, 3, 2, 1]
    ];
  });

}