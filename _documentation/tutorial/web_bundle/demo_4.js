  function demo_4($target) {
    $target.append('<div class="visual">');
    $target.append('<div class="visual">');
    $target.append('<div class="visual">');

    Caleydo.d3.parser.parseRemoteMatrix( // Download data
        'boston-weather.csv'
    ).then(function (matrix) {
      var multiform = Caleydo.core.multiform;

      function visualize(index, config) { // Make a function so we can have more than one
        return(multiform.create(
            matrix,
            $target.find('.visual')[index],
            config
        ));
      }

      visualize(0, {initialVis: 'scatterplot'});
      visualize(1, {initialVis: 'scatterplot'});
      var $table = $(visualize(2, {initialVis: 'table'}).content);
      $table.height(100).css('overflow-y', 'scroll');
    })
  }