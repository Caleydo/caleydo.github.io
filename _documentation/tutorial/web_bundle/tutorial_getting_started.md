---
layout: documentation
title:  Web Bundle Tutorial
permalink: /documentation/tutorial/web_bundle/
---

Let's start with something simple:

```javascript
{% include_relative demo_0/demo.js %}
```
<iframe src="/documentation/tutorial/web_bundle/demo_frame.html#demo_0"></iframe>

The `parseMatrix()` function expects the data as 2D array and the column and row ids as additional parameter.


Using a heat map makes it easier to see patterns in the data. :)

```javascript
{% include_relative demo_1.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame.html?1"></iframe>

We can let the user pick the visualization.

```javascript
{% include_relative demo_2.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame.html?2"></iframe>

The other options are not that useful with this dataset,
but we can download a more realistic one.
Therefore we change the `parseMatrix()` to `parseRemoteMatrix()` and pass an URL to a CSV file.

Note that the server hosting the data must be configured to support
[Cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)  (CORS)
to allow the client to download the data.

The `parseRemoteMatrix` method returns a [Promise](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise).
While we are waiting for the response from the server, other code can continue to execute,
and when the response comes, execution can continue where it left off.

```javascript
{% include_relative demo_3.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame.html?3" height="370" width="380"></iframe>

The scatter plot demonstrates a correlation in the data which wasn't
obvious from the heat map.

We can also have multiple visualizations of the data open at once.

```javascript
{% include_relative demo_4.js %}
```
<iframe src="/documentation/tutorial/web_bundle/frame.html?4" height="800" width="380"></iframe>
