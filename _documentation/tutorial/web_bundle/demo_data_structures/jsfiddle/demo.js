$(document).ready(function() {
  var $target = $('body');
  function print(string) {
    $target.append(string + '<br>');
  }
  var sequence = Array.from(Array(200).keys())
      .map(function(x){return (x-100)/50;});
  var matrix = Caleydo.d3.parser.parseMatrix(
      sequence.map(function (m) {
        return sequence.map(function (n) {
          // Gentle gradient across the whole thing...
          // with ripples in the middle.
          return m*n + Math.sin(1/(m*m+n*n));
        })
      }),
      sequence, // row_ids
      sequence // col_ids
  );

  var create = Caleydo.core.multiform.create;
  var parse = Caleydo.core.range.parse;

  print('Big picture');
  create(
      matrix.view(parse('(0:200:5),(0:200:5)')),
      $target[0],
      {initialVis: 'caleydo-vis-heatmap'}
  );

  print('Zoom in');
  create(
      matrix.view(parse('(100:120),(100:120)')),
      $target[0],
      {initialVis: 'caleydo-vis-heatmap'}
  );

  print('Best of both worlds');
  create(
      matrix.view(parse('(0:200:10,100:120),(0:200:10,100:120)')),
      $target[0],
      {initialVis: 'caleydo-vis-heatmap'}
  );
});