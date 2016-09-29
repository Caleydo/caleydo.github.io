---
layout: documentation
title:  Visualization Tutorial
permalink: /documentation/tutorial/visualization/
---

The Caleydo project emphasizes modularity. This means you can create plugins to add
a range of capabilities, but it also means it can be hard to know where to begin.

In that light, here is a very, very simple plugin:

```javascript
{% include_relative demo_visualization/demo_vis_0.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame.html?demo_visualization/demo_vis_0"></iframe>

We could make it a little more interesting by shading each cell according to its value.
To do that, we need to know the minimum and maximum possible values.

```javascript
{% include_relative demo_visualization/demo_vis_1.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame.html?demo_visualization/demo_vis_1"></iframe>

One strength of Caleydo is that visualizations based on the same data are linked.
We'll need to register mouse event handlers in order to take advantage of that.
TODO: make it two-directional.

```javascript
{% include_relative demo_visualization/demo_vis_2.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame.html?demo_visualization/demo_vis_2"></iframe>
