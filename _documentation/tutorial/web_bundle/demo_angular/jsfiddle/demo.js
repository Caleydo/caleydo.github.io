angular.module('demoApp', [])
  .controller('DemoController', ['$scope', function($scope) {
    $scope.table = [
      ['1', '2', '3', '4'],
      ['2', '3', '4', '3'],
      ['3', '4', '3', '2'],
      ['4', '3', '2', '1']
    ];
    $scope.heatmap = false; // Will be replaced with Caleydo object.
  }])
  .directive('caleydoHeatmap', function() {
    return {
      link: function(scope, element, attrs) {
        function redraw() {
          if (scope.heatmap) {
            scope.heatmap.destroy();
            // Cleaup UI, and avoid memory leaks
          }
          var matrix = Caleydo.d3.parser.parseMatrix(
            scope.table, [1, 2, 3, 4], ['A', 'B', 'C', 'D']
          );
          scope.heatmap = Caleydo.core.multiform.create(
            matrix, element[0], {initialVis: 'caleydo-vis-heatmap'}
          );
        }
        redraw();
        scope.$watch(
            'table', redraw,
            true // change detection based on value rather than reference
        );
      }
    }
  })
  .directive('caleydoEditor', function() {
    return {
      template:
        '<table>'+
          '<tr ng-repeat="row in table track by $index">'+
            '<td ng-repeat="item in row track by $index">'+
              '<input type="text" size="2" '+
                     'ng-model="table[$parent.$index][$index]">'+
            '</td>'+
          '</tr>'+
        '</table>'+
        '<code>{'+'{table | json}}</code>'
    };
  });