$('body').append('<div id="visual">');
$('body').append('<div id="toolbar">');

var matrix = Caleydo.d3.parser.parseMatrix([
  [null,'A','B','C','D','E','F','G','H'],
  [1,0,0,1,1,1,1,0,0],
  [2,0,1,1,1,1,1,1,0],
  [3,1,1,0,1,1,0,1,1],
  [4,1,1,1,1,1,1,1,1],
  [5,1,1,1,1,1,1,1,1],
  [6,1,1,0,1,1,0,1,1],
  [7,0,1,1,0,0,1,1,0],
  [8,0,0,1,1,1,1,0,0]]);
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