function demo_vis() {
  // Use the AMD; This would usually be at the top level and include other dependencies.
  require(['demo_vis_amd', "require", "exports"], function (demo_vis, require, exports) {
    Caleydo.core.plugin.push(demo_vis);
    var n = Caleydo.core.plugin.list().length;
    console.log(Caleydo.core.plugin.list()[n-1]);

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
  });
}