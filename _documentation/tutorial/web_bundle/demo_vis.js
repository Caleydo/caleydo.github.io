function demo_vis() {
  Caleydo.core.plugin.push({
    type: 'vis',
    name: 'Demo Vis',
    filter: 'matrix',
    // .loader can also be used, if you need to defer.
    instance: {
      create: function (data, parent, options) {
        console.log('data:', data);
        console.log('parent:', parent);
        console.log('options:', options);
      }
    }
  });

  $('body').append('<div class="visual">');
  $('body').append('<div class="toolbar">');

  var matrix = Caleydo.d3.parser.parseMatrix(
    [ // raw data as 2D array
      [0, 0, 1],
      [0, 1, 1],
      [1, 1, 1]
    ],
    [1, 2, 3], // row_ids
    ['A', 'B', 'C'] // col_ids
  );
  var multiform = Caleydo.core.multiform;

  var visual = multiform.create(
    matrix,
    $('body').find('.visual')[0],
    {initialVis: 'caleydo-vis-heatmap'} // Specify visualization
  );
  multiform.addSelectVisChooser( // Let user pick visualization
    $('body').find('.toolbar')[0],
    visual
  );
}