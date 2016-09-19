function demo_7() {
  angular.module('demoApp', []);
  angular.
    module('demoApp').
    component('demoComponent', {
      template:
        '<table>'+
          '<tr ng-repeat="row in table track by $index">'+
            '<td ng-repeat="data in row track by $index">'+
              '{{data}}'+
            '</td>'+
          '</tr>'+
        '</table>',
      controller: function DemoController($scope) {
        $scope.table = [
          [1, 2, 3, 4],
          [2, 3, 4, 3],
          [3, 4, 3, 2],
          [4, 3, 2, 1]
        ];
      }
    });
}