---
layout: documentation
title:  Data Structures Tutorial
permalink: /documentation/tutorial/data_structures/
---

(To get a local copy of the tutorial files: `svn export https://github.com/caleydo/caleydo.github.io/trunk/_documentation/tutorial`)

Ranges in Caleydo can be used to subset your data and zoom in on regions of interest.

```javascript
{% include_relative demo_5.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame.html?5" height="1100" width="500"></iframe>

Note that visualizations based on the same backing data are linked: if you click on a
datapoint in one visualization, the corresponding datapoints in other visualizations
will also be highlighted

A number of primitive methods are supported on ranges so you can create
and manipulate them programmatically.

```javascript
{% include_relative demo_6.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame.html?6"></iframe>
