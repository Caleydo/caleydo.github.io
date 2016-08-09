---
layout: documentation
title:  Quickstart Guide
permalink: /documentation/quickstart_guide/
---

Caleydo can be used:

- as a JS library for client-side visualization
- or as a full client-server application

## Caleydo JS library



## Caleydo Web client-server

{% highlight bash  %}
git clone https://github.com/Caleydo/caleydo_web_container.git
cd caleydo_web_container
vagrant up
# wait and get some coffee. this will take a while
vagrant ssh
{% endhighlight %}

Then, from within the VM:

{% highlight bash  %}
# 1 clone the repositories and their dependencies
./manage.sh clone demo_app
./manage.sh clone caleydo_server

# 2 resolve dependencies of plugins
./manage.sh resolve

# 3 start caleydo web
./manage.sh server
{% endhighlight %}

Access: http://localhost:9000 or http://192.168.50.52:9000 and have fun :)

Note:
Depending whether you installed the python server `caleydo_server` or the Javascript server `caleydo_server_js`, call the corresponing grunt task: `server` and `server_js`.
