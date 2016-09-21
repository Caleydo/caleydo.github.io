---
layout: documentation
title:  Integrate with Angular Tutorial
permalink: /documentation/tutorial/angular/
---

Here's a very simple Angular app: As you edit numbers in the grid,
the backing data is updated, which we render as JSON.

```javascript
{% include_relative demo_7.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame_angular_bad.html?7" height="200" width="300"></iframe>

What would it take to integrate this with Caleydo, so that we'd have a
heatmap visualization update as you make edits?

```javascript
{% include_relative demo_8.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame_angular_bad.html?8" height="250" width="300"></iframe>

We could just paste in the Caleydo code and watch for changes, but there
are a number of problems here:

* If we use `ng-change`, we're missing the point of Angular: We shouldn't 
  make our view code responsible for notifying other code 
  about every change.
* Components should be self-contained: While `heatmap` is in scope, we
  really shouldn't use it effectively like a global variable.
  
Since we have multiple UI elements which need to communicate, it would
be better to use Angular directives, and keep the data that needs to be
shared in the scope of the controller.

```javascript
{% include_relative demo_9.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame_angular_good.html?9" height="250" width="300"></iframe>

The heatmap controller is a little more complicated, because instead of
simply supplying a template, we provide a `link` function which creates the DOM
we need, and we `$watch` the `table` for modifications.

The behavior here is the same as the example above, but it will be more
maintainable over time.