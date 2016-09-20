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
            '<td ng-repeat="item in row track by $index">'+
              '<input type="text" size="2" '+
                     'ng-model="table[$parent.$index][$index]" '+
                     'ng-change="on_change()">'+
            '</td>'+
          '</tr>'+
        '</table>'+
        '<code>{{table | json}}</code>',
      controller: function DemoController($scope) {
        $scope.table = table;
        $scope.on_change = function() {
          console.log('change!')
        }
      }
    });
}