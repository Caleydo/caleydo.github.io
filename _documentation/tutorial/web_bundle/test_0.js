function includes(needle) {
  var html = $('#qunit-fixture').html();
  return html.indexOf(needle) !== -1
}

QUnit.module('demo_0',{
  beforeEach: function() {
    demo_0($('#qunit-fixture'));
  }
});

QUnit.test( "table head?", function( assert ) {
  var done = assert.async();
  window.setTimeout(function(){
    assert.ok(includes('<th>ID</th><th>A</th>'));
    done();
  }, 0);
});

QUnit.test( "table row?", function( assert ) {
  var done = assert.async();
  window.setTimeout(function(){
    assert.ok(includes('<th>1</th><td>0</td>'));
    done();
  }, 0);
});
