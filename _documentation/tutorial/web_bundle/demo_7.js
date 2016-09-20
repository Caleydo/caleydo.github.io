function demo_7() {
  var table = [
    ['1', '2', '3', '4'],
    ['2', '3', '4', '3'],
    ['3', '4', '3', '2'],
    ['4', '3', '2', '1']
  ];
  function draw_heatmap(table) {
    var matrix = Caleydo.d3.parser.parseMatrix(
      table, [1, 2, 3, 4], ['A', 'B', 'C', 'D']
    );
    return Caleydo.core.multiform.create(
      matrix, $('#caleydo')[0], {initialVis: 'caleydo-vis-heatmap'}
    );
  }
  var heatmap = draw_heatmap(table);

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
                     'ng-change="on_change($parent.$index, $index)">'+
            '</td>'+
          '</tr>'+
        '</table>'+
        '<code>{{table | json}}</code>',
      controller: function DemoController($scope) {
        $scope.table = table;
        $scope.on_change = function(x, y) {
          heatmap.destroy();
          heatmap = draw_heatmap(table);
        }
      }
    });
}