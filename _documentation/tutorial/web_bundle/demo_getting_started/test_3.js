qunit_module('demo_3', 1000); // Wait for 1 second to load external file.
qunit_test_includes('scatterplot class?', 'class="caleydo-scatterplot"');
qunit_test_includes('scatterplot circle?', '<circle r="2"');
// TODO: Stricter tests
