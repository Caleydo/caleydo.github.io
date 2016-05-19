---
layout: documentation
title:  Frameworks
permalink: /documentation/frameworks/
---

## Client Frameworks

### RequireJS

common problem in JavaScript: how to depend on other modules? simple approach -> global variables, modules register at one global variable (`$`, `_`, `angular`) and is accessible from everywhere.

pros: 
 * simple

cons: 
 * magic names 
 * assumptions
 * how to handle naming conflicts (e.g. lodash, underscore)
 * all dependencies has to be loaded before hand

alternative approaches:
 * commonjs e.g., node mode and mixed ones, e.g. [browerify](http://browserify.org)
 * amd (asynchronous module loading) e.g., [requirejs](http://requirejs.org/), [systemjs](https://github.com/systemjs/systemjs)

Idea: explicitly import other modules ... e.g. similar to import package in Java

Syntax:
```js
define(['exports', '<list of dependency modules names>'], function('exports', '<list of variables holding the dependencies>') {
 exports.Test = 5;
});
```

magic variable/dependency: `exports` .. used to define the public API of this module. other modules importing this module can access `Test`

example
```js
define(['exports', 'd3', './other'], function(exports, d3, otherone) {
  exports.magic = function(arr) {
    var arr_max = d3.max(arr);
        return Math.max(arr_max, otherone.Test);
  };
});
```
Two kind of dependencies: 
 * by name  (e.g. `d3` ) has to be defined within the config to the actual JS file
 * by path (e.g. `./other`) is a relative path without the `.js` appended. 

mixed mode supported by requirejs

```js
define(['require', 'exports'], function(require, exports) {
  var d3 = require('d3');
  var otherone = require('./other');
  exports.magic = function(arr) {
    var arr_max = d3.max(arr);
        return Math.max(arr_max, otherone.Test);
  };
});

require will scan the code for require call to convert it to the other full format.
```


## Server frameworks

### Flask

**Note**: maybe abstracted away soon

Flask is a micro python web framework using annotations for declaring accessible urls. In Caleydo Web the underlying standard WSGI is used as basis with this as default implementation. 

usage (*note: untested*)
```python
app = flask.Flask(__name__)

@app.route('/hello')
def hello_world():
  return 'Hello ' + flask.request.values.get('user', 'World')

@app.route('/mambo/<n:int>')
def mambo_number(n):
  return 'Mambo #'+str(n)

app.run()  
```

