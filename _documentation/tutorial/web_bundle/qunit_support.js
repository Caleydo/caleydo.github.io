function qunit_module(name) {
  QUnit.module(name,{
    beforeEach: function() {
      window[name]($('#qunit-fixture'));
    }
  });
}

function qunit_test_includes(name, needle) {
  QUnit.test(name, function(assert) {
    assert_includes(assert, needle);
  });
}

function assert_includes(assert, needle) {
  timeout_0(assert, function() {
    var haystack = $('#qunit-fixture').html();
    assert.ok(includes(haystack, needle), needle + ' not in ' + haystack);
  });
}

function timeout_0(assert, assertion) {
  var done = assert.async();
  window.setTimeout(function(){
    assertion(assert);
    done();
  }, 0);
}

function includes(haystack, needle) {
  // String.prototype.includes exists in recent versions,
  // but this can save you from one cryptic error if you are out of date.
  return haystack.indexOf(needle) !== -1
}
