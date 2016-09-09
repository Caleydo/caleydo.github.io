$('body').append('<div class="visual">');
$('body').append('<div class="toolbar">');

Caleydo.d3.parser.parseRemoteMatrix( // Download data
    'data.csv'
  ).then(function (matrix) {
  var multiform = Caleydo.core.multiform;

  var visual = multiform.create(
      matrix,
      $('.visual')[0],
      {initialVis: 'caleydo-vis-heatmap'} // Specify visualization
  );
  multiform.addSelectVisChooser( // Let user pick visualization
      $('.toolbar')[0],
      visual
  );
});
