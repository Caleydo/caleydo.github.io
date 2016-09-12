function includes(haystack, needle) {
  // String.prototype.includes exists in recent versions,
  // but this can save you from one cryptic error if you are out of date.
  return haystack.indexOf(needle) !== -1
}

function assert_includes(assert, needle) {
  var done = assert.async();
  window.setTimeout(function(){
    var haystack = $('#qunit-fixture').html();
    assert.ok(includes(haystack, needle), needle + ' not in ' + haystack);
    done();
  }, 0);
}

function qunit_module(name) {
  QUnit.module('demo_0',{
    beforeEach: function() {
      demo_0($('#qunit-fixture'));
    }
  });
}

function qunit_test_includes(name, needle) {
  QUnit.test(name, function(assert) {
    assert_includes(assert, needle);
  });
}
