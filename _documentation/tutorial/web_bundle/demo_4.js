  function demo_4($target) {
    $target.append('<div class="visual">');
    $target.append('<div class="toolbar">');
    $target.append('<div class="visual">');
    $target.append('<div class="toolbar">');

    Caleydo.d3.parser.parseRemoteMatrix( // Download data
        'boston-weather.csv'
    ).then(function (matrix) {
          var multiform = Caleydo.core.multiform;

          function visualize(index) { // Make a function so we can have more than one
            var visual = multiform.create(
                matrix,
                $target.find('.visual')[index],
                {initialVis: 'caleydo-vis-heatmap'} // Specify visualization
            );
            multiform.addSelectVisChooser( // Let user pick visualization
                $target.find('.toolbar')[index],
                visual
            );
          }

          visualize(0);
          visualize(1);
        }
    )
  }