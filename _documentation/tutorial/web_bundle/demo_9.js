function demo_9() {
  angular.module('demoApp', [])
    .controller('DemoController', ['$scope', function($scope) {
      $scope.table = [
        ['1', '2', '3', '4'],
        ['2', '3', '4', '3'],
        ['3', '4', '3', '2'],
        ['4', '3', '2', '1']
      ];
    }])
    .directive('caleydoHeatmap', function() {
      // TODO: update with every change to table.
      return {
        link: function(scope, element, attrs) {
          var matrix = Caleydo.d3.parser.parseMatrix(
            scope.table, [1, 2, 3, 4], ['A', 'B', 'C', 'D']
          );
          Caleydo.core.multiform.create(
            matrix, element[0], {initialVis: 'caleydo-vis-heatmap'}
          );
        }
      }
    })
    .directive('caleydoEditor', function() {
      return {
        template:
          'TABLE?:<table>'+
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
}