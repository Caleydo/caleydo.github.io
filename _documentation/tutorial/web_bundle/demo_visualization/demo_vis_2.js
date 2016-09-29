function demo_vis_2($target) {
  function render(matrix, parent, min, max) { // We need the min and max to color correctly.
    var $table = $('<table>').appendTo(parent);
    for (matrix_row of matrix) {
      var $row = $('<tr>').appendTo($table);
      for (matrix_cell of matrix_row) {
        var norm = (matrix_cell - min) / (max - min); // 0 - 1
        var color = d3.hsl(90, 0.5, (norm + 1) / 2).toString(); // CSS hex value
        var $td = $('<td>').appendTo($row);
        $td.text(matrix_cell).css('background-color', color);
      }
    }
    return $table;
  }

  Caleydo.core.plugin.push({
    id: 'demo-vis',
    type: 'vis', // The larger Caleydo ecosystem also includes apps and server-side components.
    name: 'Demo Visualization',
    filter: 'matrix', // The data type which this visualization supports
    instance: {
      create: function (data, parent, options) {
        var min_max = data.valuetype.range;
        data.loader.data({}, Caleydo.core.range.parse('0:-1,0:-1'))
            .then(
              function(value) {
                var $vis = render(value, parent, min_max[0], min_max[1]);
                $vis.find('td').click(function() {
                  var x = this.cellIndex;
                  var y = this.parentElement.rowIndex;
                  data.selectProduct([Caleydo.core.range.cell(x,y)]);
                });
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
  Caleydo.core.multiform.create(
    matrix,
    $target[0],
    {initialVis: 'caleydo-vis-heatmap'}
  );
}