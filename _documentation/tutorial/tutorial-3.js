$('body').append('<div id="visual">');
$('body').append('<div id="toolbar">');

Caleydo.d3.parser.parseRemoteMatrix( // Download data
    'http://www.caleydo.org/documentation/quickstart_data.csv'
  ).then(function (matrix) {
  var multiform = Caleydo.core.multiform;

  var visual = multiform.create(
      matrix,
      $('#visual')[0],
      {initialVis: 'caleydo-vis-heatmap'} // Specify visualization
  );
  multiform.addSelectVisChooser( // Let user pick visualization
      $('#toolbar')[0],
      visual
  );
});