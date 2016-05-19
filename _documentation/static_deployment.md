---
layout: documentation
title:  Static Deployment
permalink: /documentation/static_deployment
---

grunt task: `grunt build [--application=<application>] [--context=<context>]`

* application: the main script file of the application which is normally provided as parameter to the `caleydo_web.js` file
* context: since absolute links are used, this may specify a context path, e.g. `/test` where the website is located

folder structure:

{% highlight bash  %}
/config-gen.js ... generated
/caleydo_web.js ... generated
/index.html ... generated
/bower_components/<libs>
/<plugins> ... compile css and ts and exclude them from making them public
{% endhighlight %}

