$('body').append('<div class="visual">');
$('body').append('<div class="toolbar">');
$('body').append('<div class="visual">');
$('body').append('<div class="toolbar">');

Caleydo.d3.parser.parseRemoteMatrix( // Download data
    'http://www.caleydo.org/documentation/tutorial/web_bundle/data.csv'
  ).then(function (matrix) {
    var multiform = Caleydo.core.multiform;

    function visualize(index) { // Make a function so we can have more than one
      var visual = multiform.create(
          matrix,
          $('.visual')[index],
          {initialVis: 'caleydo-vis-heatmap'} // Specify visualization
      );
      multiform.addSelectVisChooser( // Let user pick visualization
          $('.toolbar')[index],
          visual
      );
    }

    visualize(0);
    visualize(1);
  }
);