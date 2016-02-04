---
layout: documentation
title:  Installation
permalink: /documentation/installation/
---

# Installation

To install Caleydo Web easily, you can use a container repository that includes a Vagrant VM.
It is used for creating, combining, and managing individual plugins Caleydo Web consists of.


## Minimal Steps for Launching the Demo Application

Note: Please ignore this part if you want to set up a dev environment.

```bash
git clone https://github.com/Caleydo/caleydo_web_container.git
cd caleydo_web_container
vagrant up
#wait and get some coffee this will take a while
vagrant ssh
```

```bash
# 1a clone the repositories and their dependencies
./manage.sh clone demo_app
./manage.sh clone caleydo_server

# OR 1b install the latest published plugin
./manage.sh install demo_app
./manage.sh install caleydo_server

# 2 resolve dependencies of plugins
./manage.sh resolve

# 3 start caleydo web
./manage.sh server
```

access: http://localhost:9000 or http://192.168.50.52:9000 and have fun :)

## Dev Environment

Note: Setting up a dev environment requires a working installation of Git!


1. *Windows Only*: Install [Git](http://git-scm.com/download/win)

2. Install [Vagrant](http://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/)
  Vagrant is used for creating a controlled environment using a virtual machine provided by VirtualBox

3. Clone this repository

 ```bash
 git clone https://github.com/Caleydo/caleydo_web_container.git
 ```

4. Launch a (bash) shell
   *Windows Only*: Ensure that you start the `Git Bash` with administrative rights

5. switch to the new directory

 ```bash
 cd caleydo_web_container
 ```

6. let Vagrant create the environment for you
 ```bash
 # start vagrant
 vagrant up
 ```

7. Connect to VM:
 ```bash
 # connect to vm
 vagrant ssh
 ```

8. Navigate to caleydo directory
 ```bash
 cd /vagrant
 ```
 the `/vagrant` folder is shared with your cloned repository. So, all changes are reflected in your local filesystem

 9. Exit and stop the virtual machine
 ```bash
 exit
 vagrant halt
 ```

## Management Utility

`manage.py` is a management utility for installling plugins, pulling repositories, and resolving external dependencies.

usage:

```bash
./manage.sh <command> <args>
```

### "clone"/"clone_ssh" command

the `clone` command is a utility for cloning a repository and also cloning all of its dependencies (using `clone_deps`). the `clone_ssh` uses the git ssh url version instead of http.

e.g.

```bash
./manage.sh clone caleydo_core
./manage.sh clone Caleydo/caleydo_vis
./manage.sh clone https://github.com/Caleydo/demo.app.git
```

### clone_deps/clone_ssh_deps command

the `clone_deps` command resolves and clones the dependencies of the given plugin.

usage:

```bash
./manage.sh clone_deps demo_app
```

### pull command

The `pull` command is a utility for pulling all git repositories within the project, i.e. the container and all the plugins

### resolve command

The `resolve` command is used to resolve external dependencies of the plugins.

**Attention**: this command can only be invoked within the virtual machine, to avoid that your system is cluttered.


Currently, following external dependency types are supported:

 * *debian*: installs the listed debian packages using `[Apt](https://wiki.debian.org/Apt)
 * *python*: installs python plugins using the [PyPi](https://pypi.python.org/pypi)
 * *node*: installs node dependencies via [npm](http://npmjs.org/)
 * *web*: installs web dependencies via [Bower](http://bower.io)

### init command

Using `./manage.sh init`, one can simply add a new plugin as a starting point for development to the web container.
The command clones a sample app into a new directoy within the /plugin-folder
The init command currently asks you to specify the following settings:

"Enter the plugin name:" - The name of the directory within the /plugin-folder
"name: (sample_web)" - The name of your new plugin, as specified in package.json
"version (0.0.1)" - The initial version of your plugin, as specified in package.json
"keywords" - as specified in package.json
"author" - as specified in package.json

### publish command

the `publish` command publishes a plugin to the caleydo registry

usage:

```bash
./manage.sh publish <plugin name>
```

Before the first usage you have to enter the credentials for the caleydo registry, i.e. the nexus registry

```bash
npm adduser
# follow instructions
```

### compile, build, server, server_js, dev commands

builds or build and runs Caleydo Web. [Grunt](http://gruntjs.com) is used as build tool and this command redirects to it.

The `dev` command first compiles Caleydo Web and then watches for changes. No server will be started


### install, list, explore, search, ... commands

all other commands are redirected to a configured [npm](http://npmjs.org/) instance. The configuration includes using the caleydo repository.
If you wanna install plugins outside of the virtual machine, ensure that you installed npm.

## Building Caleydo Web

TODO

## Running Caleydo Web

Depending whether you installed the python server `caleydo_server` or the Javascript server `caleydo_server_js` call the corresponing grunt task: `server` and `server_js`.
This will compile and watches all files and launch the server at port 9000 by default.


## Setup PyCharm environment

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
  * Create a new Python Run/Debug configuration running the file  'plugins/caleydo_server/\__main__.py'
  * Change working directory to `/vagrant`
  * Change python interpreter to 'Remote Python'
* Prepare the typescript compiler

  **If you use PyCharm 5 you can skip this step** Since PyCharm currently only supports 1.4, we need to use our own compiler from the node_modules folder.
You can open a console within your virtual machine via 'Tools->Start SSH Session...' and select 'Vagrant'.

 ```
  #within virtual machine!
  mkdir -p ./_compiler
  cp -r ./node_modules/grunt-ts/node_modules/typescript ./_compiler/
 ```

* Create your own application plugin, or use the `sample_app` plugin as a starting point
 ```
  ./manage.sh install sample_app
  ./manage.sh install caleydo_server
 ```

You can then find `sample_app` in the `plugins` folder.

* Start python debug session.
If PyCharm complains that it can't find some python source, then select 'Download source from remote host'

* For debugging JavaScript client-side code, right click the index.html file of your app and select 'Debug'. For making it work, you need to edit the newly created run/debug configuration.
  * Replace the __first part__ of URL `http://localhost:63342/caleydo_web_container/plugins` by `http://localhost:9000/`, which for the `sample_app` plugin is `http://localhost:9000/sample_app/index.html`
  * Below, in the 'Remote URLs for local files' file tree, set the remote URL column of the `plugins` folder to `http://localhost:9000/`


## Static Deployment

grunt task: `grunt build [--application=<application>] [--context=<context>]`

* application: the main script file of the application which is normally provided as parameter to the `caleydo_web.js` file
* context: since absolute links are used, this may specify a context path, e.g. `/test` where the website is located

folder structure:
```
/config-gen.js ... generated
/caleydo_web.js ... generated
/index.html ... generated
/bower_components/<libs>
/<plugins> ... compile css and ts and exclude them from making them public
```

## Server Deployment
http://requirejs.org/docs/optimization.html could be used for creating bundles for each plugin



