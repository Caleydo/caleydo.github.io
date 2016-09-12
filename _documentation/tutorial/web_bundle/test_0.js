function includes(haystack, needle) {
  return haystack.indexOf(needle) !== -1
}

QUnit.module('demo_0',{
  beforeEach: function() {
    demo_0($('#qunit-fixture'));
  }
});

QUnit.test( "table head?", function( assert ) {
  var done = assert.async();
  window.setTimeout(function(){
    var haystack = $('#qunit-fixture').html();
    var needle = '<th>ID</th><th>A</th>';
    assert.ok(includes(haystack, needle), needle + ' not in ' + haystack);
    done();
  }, 0);
});

QUnit.test( "table row?", function( assert ) {
  var done = assert.async();
  window.setTimeout(function(){
    var haystack = $('#qunit-fixture').html();
    var needle = '<th>1</th><td>0</td>';
    assert.ok(includes(haystack, needle), needle + ' not in ' + haystack);
    done();
  }, 0);
});
