data.list()
  .then((list) => {

    const filtered = list   // List of data available in plugins
      .filter((d) => d.desc.fqname.indexOf('helloworld') > -1) // Filter only the current project data.
      .filter((d) => d instanceof Stratification);
// Filter only Matrix format data you  can filter other like ‘Matrix'.

    const matrix = filtered[0]; // Filter the first element only.
