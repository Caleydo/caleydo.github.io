qunit_module('demo_1');
qunit_test_includes('svg?', '<svg class="caleydo-heatmap" height="80" width="80">');
qunit_test_includes('white square?', '<rect fill="#ffffff" y="0" x="0" height="1" width="1"><title>0</title></rect>');
qunit_test_includes('red square?', '<rect fill="#ff0000" y="0" x="2" height="1" width="1"><title>1</title></rect>');

