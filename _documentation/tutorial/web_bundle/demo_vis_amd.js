define(["require", "exports"], function (require, exports) {
  // exports.hello =  function() {
  //   console.log('hello world');
  // };
  exports.type = 'vis';
  exports.name = 'Demo Vis';
  exports.filter = 'matrix';
  // .loader can also be used, if you need to defer.
  exports.instance = {
    foo: 'bar',
    create: function(data, parent, options) {
      console.log('create:', data, parent, options);
    }
  };
});
