---
layout: documentation
title:  Server Tutorial
permalink: /documentation/tutorial/server/
---

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
