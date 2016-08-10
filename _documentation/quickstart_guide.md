---
layout: documentation
title:  Quickstart Guide
permalink: /documentation/quickstart_guide/
---

Caleydo can be used:

- as a JS library for client-side visualization
- or as a full client-server application

## Caleydo JS library

This [self-contained example](/documentation/quickstart_example.html) demonstrates how to visualize a matrix based on a sample data set. It provides a selection of multi-form visualizations for tabular data, including heatmap, scatter plot, and histogram.

View source and you can see

- HTML which defines the View
- JS dependencies
- your application code

## Caleydo client-server

{% highlight bash  %}
git clone https://github.com/Caleydo/caleydo_web_container.git
cd caleydo_web_container
vagrant up
# Wait and get some coffee. This will take a while.
vagrant ssh
{% endhighlight %}

Then, from within the VM:

{% highlight bash  %}
# 1. Clone the repositories and their dependencies
./manage.sh clone demo_app
./manage.sh clone caleydo_server

# 2. Resolve dependencies of plugins
./manage.sh resolve

# 3. Start caleydo web
./manage.sh server
{% endhighlight %}

Go to [http://localhost:9000](http://localhost:9000).
