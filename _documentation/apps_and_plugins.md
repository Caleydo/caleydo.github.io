---
layout: documentation
title:  For Developers
permalink: documentation/apps_and_plugins/
---

Caleydo Web components are found on [GitHub](https://github.com/Caleydo). To facilitate installation of Caleydo Web, a [container repository](https://github.com/Caleydo/caleydo_web_container) is provided. This repository is used to setup a controlled environment in a virtual machine that runs Ubuntu using [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/). 

 * lazy loaded plugins, load them upon first need <br>
   -> implications: need way to describe plugins -> registry
 * central management of external dependencies <br>
   -> unified way to describe and resolve them
 * several abstraction layers <br>
   -> e.g. dataset is wrapped into an API with common interface

The container repository includes a shell script file *manage.sh*, which helps installing and managing Caleydo Web plugins and their dependencies in the virtual environment. It uses [Bower](http://bower.io/) for resolving web dependencies and [Python pip](https://pypi.python.org/pypi/pip) for python dependencies. [Grunt.js](http://gruntjs.com/) is used for building Caleydo Web and running the web server.

## JavaScript ES6 Promise

Our framework makes heavy uses of [JavaScript Promises](http://www.promises.org), which are defined in ES6. Promises are an alternative way for the commonly used callbacks for asynchronous methods. 

pros (for me): 
 * unified interface, 
 * "return value" has a meaning again, 
 * simple chaining, 
 * parameters can be more flexible (where to put the callback argument?)

cons: 
 * different way of thinking 
 * one time Promise always promise

usage of a returned promise
```js
var r = someAsynFunction();
r.then(function(result) {
  return 5; //or
  return Promise.resolve(5); //or
  return someOtherAsyncFunction(result);
  return new Promise(function(resolve, reject) { //or
    //do my stuff
    resolve(5);
  });
});
```
`then` will be executed after the promise resolved. Promises are a state machine (`init`, `resolved`, `rejected`). `then` handler can return a value or another promise. This allows simple chaining, e.g. `loadData().then(convertData).then(parseData).then(visualize);`

utility functions: 
```js
Promise.all([array of promises]) // returns a promise resolved when all are resolved
Promise.resolve(value) // wrap the value as a resolved promise
Project.reject(error) // wraps the error as rejected promise
```

usage in Caleydo Web: where possible in favor of callbacks, e.g. `ajax.getJSON(url)`, `matrix.data()`, `plugins.list(matrix)`, ...

Tutorial on promises:
[JavaScript Promises: There and back again](http://html5rocks.com/en/tutorials/es6/promises)

## TODO

* How does it work?
* Which repos are involved?
* What CI software is being used?