function demo_3($target) {
  $target.append('<div class="visual">');

  Caleydo.d3.parser.parseRemoteMatrix( // Download data
      'boston-weather.csv'
  ).then(function (matrix) {
    var multiform = Caleydo.core.multiform;

    var visual = multiform.create(
        matrix,
        $('.visual')[0],
        {initialVis: 'scatterplot'} // Specify visualization
    );
  });
}