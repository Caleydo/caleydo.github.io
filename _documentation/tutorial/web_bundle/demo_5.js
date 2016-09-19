function demo_5($target) {
  function print(string) {
    $target.append(string + '<br>');
  }
  var sequence = Array.from(Array(200).keys()).map(function(x){return (x-100)/50;});
  var matrix = Caleydo.d3.parser.parseMatrix(
      // times table
      sequence.map(function (m) {
        return sequence.map(function (n) {
          // Gentle gradient across the whole thing..
          // with ripples in the middle.
          return m*n + Math.sin(1/(m*m+n*n));
        })
      }),
      sequence, // row_ids
      sequence // col_ids
  );

  print('Big picture');
  Caleydo.core.multiform.create(
      matrix.view(Caleydo.core.range.parse('(0:200:5),(0:200:5)')),
      $target[0],
      {initialVis: 'caleydo-vis-heatmap'}
  );

  print('Zoom in');
  Caleydo.core.multiform.create(
      matrix.view(Caleydo.core.range.parse('(100:120),(100:120)')),
      $target[0],
      {initialVis: 'caleydo-vis-heatmap'}
  );

  print('Best of both worlds');
  Caleydo.core.multiform.create(
      matrix.view(Caleydo.core.range.parse('(0:200:10,100:120),(0:200:10,100:120)')),
      $target[0],
      {initialVis: 'caleydo-vis-heatmap'}
  );
}