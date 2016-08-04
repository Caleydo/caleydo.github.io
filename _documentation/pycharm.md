---
layout: documentation
title:  Setting up PyCharm
permalink: /documentation/pycharm/
---

Install [PyCharm](https://www.jetbrains.com/pycharm/).

* Launch PyCharm
* Open project from existing sources and select `caleydo_web_container`
* Copy all template project settings files in the `_idea_template` folder to the hidden `.idea` folder and launch PyCharm
* Configure project interpreter
  * Go to 'File->Preferences...->Project:caleydo_web_container->Project Interpreter'
  * Click on the gears icon
  * Select 'Add Remote'
  * Choose the Vagrant option. PyCharm will then try to launch the virtual machine
* Configure run/debug configuration
  * Create a new Python Run/Debug configuration running the file `plugins/caleydo_server/\__main__.py`
  * Change working directory to `/vagrant`
  * Change python interpreter to 'Remote Python'
* Prepare the typescript compiler

  **If you use PyCharm 5 you can skip this step** Since PyCharm currently only supports 1.4, we need to use our own compiler from the node_modules folder.
You can open a console within your virtual machine via 'Tools->Start SSH Session...' and select 'Vagrant'.


{% highlight bash  %}
  #within virtual machine!
  mkdir -p ./_compiler
  cp -r ./node_modules/grunt-ts/node_modules/typescript ./_compiler/
{% endhighlight %}

* Create your own application plugin, or use the `sample_app` plugin as a starting point

{% highlight bash  %}
  ./manage.sh install sample_app
  ./manage.sh install caleydo_server
{% endhighlight %}

You can then find `sample_app` in the `plugins` folder.

* Start python debug session.
If PyCharm complains that it can't find some python source, then select 'Download source from remote host'

* For debugging JavaScript client-side code, right click the index.html file of your app and select 'Debug'. For making it work, you need to edit the newly created run/debug configuration.
  * Replace the __first part__ of URL `http://localhost:63342/caleydo_web_container/plugins` by `http://localhost:9000/`, which for the `sample_app` plugin is `http://localhost:9000/sample_app/index.html`
  * Below, in the 'Remote URLs for local files' file tree, set the remote URL column of the `plugins` folder to `http://localhost:9000/`


