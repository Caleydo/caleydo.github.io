var visual = multiform.create(
    matrix,
    this.$node.node(),
    {initialVis: 'table'} // Specify visualization
  );
  console.log(visual);
  multiform.addSelectVisChooser( // Let user pick visualization
    this.$node.node(),
    visual
  );