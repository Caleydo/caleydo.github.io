$('body').append('<div id="visual1">');
$('body').append('<div id="toolbar1">');
$('body').append('<div id="visual2">');
$('body').append('<div id="toolbar2">');

Caleydo.d3.parser.parseRemoteMatrix( // Download data
    'http://www.caleydo.org/documentation/quickstart_data.csv'
  ).then(function (matrix) {
  var multiform = Caleydo.core.multiform;

  var visual = multiform.create(
      matrix,
      $('#visual1')[0],
      {initialVis: 'caleydo-vis-heatmap'} // Specify visualization
  );
  multiform.addSelectVisChooser( // Let user pick visualization
      $('#toolbar1')[0],
      visual
  );

  var visual = multiform.create(
      matrix,
      $('#visual2')[0],
      {initialVis: 'caleydo-vis-heatmap'} // Specify visualization
  );
  multiform.addSelectVisChooser( // Let user pick visualization
      $('#toolbar2')[0],
      visual
  );
});