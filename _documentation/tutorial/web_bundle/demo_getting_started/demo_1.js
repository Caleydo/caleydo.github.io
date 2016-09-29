function demo_1($target) {
  var matrix = Caleydo.d3.parser.parseMatrix(
    [ // raw data as 2D array
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 0, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1, 0, 1, 1],
      [0, 1, 1, 0, 0, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0]
    ],
    [1, 2, 3, 4, 5, 6, 7, 8], // row_ids
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] // col_ids
  );
  Caleydo.core.multiform.create(
    matrix,
    $target[0],
    {initialVis: 'caleydo-vis-heatmap'}
  );
}