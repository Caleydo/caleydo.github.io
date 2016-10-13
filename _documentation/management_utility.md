---
layout: documentation
title:  Mangement Utility
permalink: /documentation/management_utility/
---

`manage.py` is a management utility for installling plugins, pulling repositories, and resolving external dependencies.

usage:


{% highlight bash  %}
./manage.sh <command> <args>
{% endhighlight %}

### *clone* / *clone_ssh* command

the `clone` command is a utility for cloning a repository and also cloning all of its dependencies (using `clone_deps`). the `clone_ssh` uses the git ssh url version instead of http.

e.g.


{% highlight bash  %}
./manage.sh clone caleydo_core
./manage.sh clone Caleydo/caleydo_vis
./manage.sh clone https://github.com/Caleydo/demo_app.git
{% endhighlight %}

### *clone_deps* / *clone_ssh_deps* command

The `clone_deps` command resolves and clones the dependencies of the given plugin.

usage:


{% highlight bash  %}
./manage.sh clone_deps demo_app
{% endhighlight %}

### *pull* command

The `pull` command is a utility for pulling all git repositories within the project, i.e. the container and all the plugins

### *resolve* command

The `resolve` command is used to resolve external dependencies of the plugins.

**Attention**: this command can only be invoked within the virtual machine, to avoid that your system is cluttered.


Currently, following external dependency types are supported:

 * *debian*: installs the listed debian packages using `[Apt](https://wiki.debian.org/Apt)
 * *python*: installs python plugins using the [PyPi](https://pypi.python.org/pypi)
 * *node*: installs node dependencies via [npm](http://npmjs.org/)
 * *web*: installs web dependencies via [Bower](http://bower.io)

### *init* command

You can use the `./manage.sh init` to add a new plugin as a starting point for development to the web container.
The command clones a [sample app](https://github.com/Caleydo/sample_app) into a new directoy within the */plugin* directory.
The `init` command currently asks you to specify the following settings:

* `Enter the plugin name:` - The name of the directory within the */plugin* directory and should only contain lower-case characters, underscore and dashes
* `name: (caleydo_template_client_plugin)` - The name of your new plugin, as specified in package.json; should be the same name as the previous entered plugin name
* `version (0.0.1)` - The initial version of your plugin, as specified in package.json
* `keywords` - comma-seperated list of keywords, as specified in package.json
* `author` - as specified in package.json
* `license: (SEE LICENSE IN LICENSE)` - [name of the license](http://choosealicense.com/), as specified in package.json

### *publish* command

The `publish` command publishes a plugin to the caleydo registry

usage:


{% highlight bash  %}
./manage.sh publish <plugin name>
{% endhighlight %}

Before the first usage you have to enter the credentials for the caleydo registry, i.e. the nexus registry


{% highlight bash  %}
npm adduser
# follow instructions
{% endhighlight %}

### *compile*, *build*, *server*, *server_js*, *dev* commands

builds or build and runs Caleydo Web. [Grunt](http://gruntjs.com) is used as build tool and this command redirects to it.

The `dev` command first compiles Caleydo Web and then watches for changes. No server will be started


### *install*, *list*, *explore*, *search*, ... commands

all other commands are redirected to a configured [npm](http://npmjs.org/) instance. The configuration includes using the caleydo repository.
If you wanna install plugins outside of the virtual machine, ensure that you installed npm.
