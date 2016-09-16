function demo_5($target) {
  function print(string) {
    $target.append(string + '<br>');
  }
  var sequence = Array.from(Array(2000).keys()).map(function(x){return (x-1000)/500;});
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

  // way too big:
  /*
  Caleydo.core.multiform.create(
      matrix.view(Caleydo.core.range.parse('(0:2000),(0:2000)')),
      $target[0],
      {initialVis: 'caleydo-vis-heatmap'}
  );
  */

  print('Big picture');
  Caleydo.core.multiform.create(
      matrix.view(Caleydo.core.range.parse('(0:2000:50),(0:2000:50)')),
      $target[0],
      {initialVis: 'caleydo-vis-heatmap'}
  );

  print('Zoom in');
  Caleydo.core.multiform.create(
      matrix.view(Caleydo.core.range.parse('(1040:1080),(1040:1080)')),
      $target[0],
      {initialVis: 'caleydo-vis-heatmap'}
  );

  print('Best of both worlds');
  Caleydo.core.multiform.create(
      matrix.view(Caleydo.core.range.parse('(0:2000:100,1040:1080:2),(0:2000:100,1040:1080:2)')),
      $target[0],
      {initialVis: 'caleydo-vis-heatmap'}
  );
}