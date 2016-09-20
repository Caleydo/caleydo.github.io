function demo_7($target) {
  var table = [
          ['1', '2', '3', '4'],
          ['2', '3', '4', '3'],
          ['3', '4', '3', '2'],
          ['4', '3', '2', '1']
        ];
  var matrix = Caleydo.d3.parser.parseMatrix(
    table, [1, 2, 3, 4], ['A', 'B', 'C', 'D']
  );
  Caleydo.core.multiform.create(
    matrix, $target[0], {initialVis: 'caleydo-vis-heatmap'}
  );

  angular.module('demoApp', []);
  angular.
    module('demoApp').
    component('demoComponent', {
      template:
        '<table>'+
          '<tr ng-repeat="row in table track by $index">'+
            '<td ng-repeat="data in row track by $index">'+
              '<input type="text" ng-model="table[$parent.$index][$index]" size="2">'+
            '</td>'+
          '</tr>'+
        '</table>'+
        '<code>{{table | json}}</code>',
      controller: function DemoController($scope) {
        $scope.table = table;
      }
    });
}