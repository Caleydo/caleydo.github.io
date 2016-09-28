function demo_vis() {
  Caleydo.core.plugin.push({
    id: 'demo-vis',
    type: 'vis', // The larger Caleydo ecosystem also includes apps and server-side components.
    name: 'Demo Visualization',
    filter: 'matrix', // The data type which this visualization supports
    instance: {
      create: function (data, parent, options) {
        data.loader.data({}, Caleydo.core.range.parse('0:-1,0:-1'))
            .then(
              function(value) {
                console.log('data:', data);
                console.log('parent:', parent);
                console.log('options:', options);
                console.log('matrix:',value);
              },
              function(reason) {
                console.log('error:',reason);
              }
            );
      }
    }
  });

  var matrix = Caleydo.d3.parser.parseMatrix(
    [ // raw data as 2D array
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4]
    ],
    [1, 2, 3], // row_ids
    ['A', 'B', 'C'] // col_ids
  );
  Caleydo.core.multiform.create(
    matrix,
    $('body')[0],
    {initialVis: 'demo-vis'} // Specify visualization
  );
}