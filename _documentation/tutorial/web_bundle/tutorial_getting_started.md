---
layout: documentation
title:  Web Bundle Tutorial
permalink: /documentation/tutorial/web_bundle/getting_started
---

(To get a local copy of the tutorial files: `svn export https://github.com/caleydo/caleydo.github.io/trunk/_documentation/tutorial`)

Let's start with something simple:

```javascript
{% include_relative demo_0.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame.html?0"></iframe>

Using a heatmap makes it easier to see patterns in the data. :)

```javascript
{% include_relative demo_1.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame.html?1"></iframe>

We can let the user pick the visualization.

```javascript
{% include_relative demo_2.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame.html?2"></iframe>

The other options aren't that useful with this dataset,
but we can download a more realistic one.

```javascript
{% include_relative demo_3.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame.html?3"></iframe>

The scatter plot demonstrates a correlation in the data which wasn't
obvious from the heat map.

Note that the server hosting the data must be configured to support CORS
to allow the client to download the data.

The `parseRemoteMatrix` method returns what is called a "promise". While we're
waiting for the response from the server, other code can continue to execute,
and when the response comes, execution can continue where it left off.

We can also have multiple visualizations of the data open at once.

```javascript
{% include_relative demo_4.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame.html?4"></iframe>
