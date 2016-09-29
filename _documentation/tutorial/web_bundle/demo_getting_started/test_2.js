qunit_module('demo_2');
qunit_test_includes('heat map option?', '<option value="2">HeatMap</option>');
QUnit.test('heat map selected?', function(assert) {
  assert.equal($('#qunit-fixture option:selected').text(), 'HeatMap')
});
