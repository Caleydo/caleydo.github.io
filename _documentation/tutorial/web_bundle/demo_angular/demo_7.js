function demo_7() {
  var table = [
    ['1', '2', '3', '4'],
    ['2', '3', '4', '3'],
    ['3', '4', '3', '2'],
    ['4', '3', '2', '1']
  ];

  angular.module('demoApp', []);
  angular
    .module('demoApp')
    .component('demoComponent', {
      template:
        '<table>'+
          '<tr ng-repeat="row in table track by $index">'+
            '<td ng-repeat="item in row track by $index">'+
              '<input type="text" size="2" '+
                     'ng-model="table[$parent.$index][$index]">'+
            '</td>'+
          '</tr>'+
        '</table>'+
        '<code>{'+'{table | json}}</code>',
        // Adjacent curly braces confuse our documentation renderer.
      controller: function DemoController($scope) {
        $scope.table = table;
      }
    });
}