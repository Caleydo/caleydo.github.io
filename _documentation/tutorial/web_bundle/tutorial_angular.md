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
<iframe src="/documentation/tutorial/web_bundle/frame-angular.html?7" height="200" width="300"></iframe>

What would it take to integrate this with Caleydo, so that we'd have a
heatmap visualization update as you make edits?

```javascript
{% include_relative demo_8.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame-angular.html?8" height="250" width="300"></iframe>
