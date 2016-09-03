---
layout: documentation
title:  Tutorial - Quickstart
permalink: /documentation/tutorial/quickstart/
---

(To get a local copy of the tutorial files: `svn export https://github.com/caleydo/caleydo.github.io/trunk/_documentation/tutorial`)

Let's start with something simple:

```javascript
{% include_relative tutorial-0.js %}
```
<iframe src="/documentation/tutorial/quickstart/tutorial.html?0"></iframe>

Using a heatmap makes it easier to see patterns in the data. :)

```javascript
{% include_relative tutorial-1.js %}
```
<iframe src="/documentation/tutorial/quickstart/tutorial.html?1"></iframe>

We can let the user pick the visualization.

```javascript
{% include_relative tutorial-2.js %}
```
<iframe src="/documentation/tutorial/quickstart/tutorial.html?2"></iframe>

**TODO** VisChooser isn't recognizing the configured default: It always comes up as "Table".
Is that a bug or am I doing something wrong?

The other options aren't that useful with this dataset,
but we can download a more realistic one.

```javascript
{% include_relative tutorial-3.js %}
```
<iframe src="/documentation/tutorial/quickstart/tutorial.html?3"></iframe>

The scatter plot demonstrates a correlation in the data which wasn't
obvious from the heat map.

Note that the server hosting the data must be configured to support CORS
to allow the client to download the data.

The `parseRemoteMatrix` method returns what is called a "promise". While we're
waiting for the response from the server, other code can continue to execute,
and when the response comes, execution can continue where it left off.

We can also have multiple visualizations of the data open at once.

```javascript
{% include_relative tutorial-4.js %}
```
<iframe src="/documentation/tutorial/quickstart/tutorial.html?4"></iframe>
