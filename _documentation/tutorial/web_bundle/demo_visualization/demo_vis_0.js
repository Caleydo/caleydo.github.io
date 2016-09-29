function demo_vis_0($target) {
  function render(matrix, parent) {
    var $table = $('<table>').appendTo(parent);
    for (matrix_row of matrix) {
      var $row = $('<tr>').appendTo($table);
      for (matrix_cell of matrix_row) {
        var $td = $('<td>').appendTo($row);
        $td.text(matrix_cell);
      }
    }
  }

  Caleydo.core.plugin.push({
    id: 'demo-vis',
    type: 'vis', // The larger Caleydo ecosystem also includes apps and server-side components.
    name: 'Demo Visualization',
    filter: 'matrix', // The data type which this visualization supports
    instance: {
      create: function (data, parent, options) {
        data.loader.data({}, Caleydo.core.range.parse('0:-1,0:-1'))
            .then(
              function(value) {
                render(value, parent);
              },
              function(reason) {
                console.log('error:', reason);
              }
            );
      }
    }
  });

  var matrix = Caleydo.d3.parser.parseMatrix(
    [ // raw data as 2D array
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4]
    ],
    [1, 2, 3], // row_ids
    ['A', 'B', 'C'] // col_ids
  );
  Caleydo.core.multiform.create(
    matrix,
    $target[0],
    {initialVis: 'demo-vis'}
  );
}