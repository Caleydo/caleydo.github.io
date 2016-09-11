QUnit.test( "table head?", function( assert ) {
  demo_0($('#qunit-fixture'));
  var done = assert.async();
  window.setTimeout(function(){
    assert.ok( $('#qunit-fixture').html().includes('<th>ID</th><th>A</th>'));
    done();
  }, 0);
});

QUnit.test( "table row?", function( assert ) {
  demo_0($('#qunit-fixture'));
  var done = assert.async();
  window.setTimeout(function(){
    assert.ok( $('#qunit-fixture').html().includes('<th>1</th><td>0</td>'));
    done();
  }, 0);
});
