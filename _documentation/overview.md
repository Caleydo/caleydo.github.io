---
layout: documentation
title: Overview
permalink: /documentation/overview/
---

## Architecture
Caleydo Web is a platform for developing web-based visual analysis applications. It is based on a client-server architecture where both sides, client and server, consist of several [plugins](../plugin_mechanism). The client is realized in TypeScript and JavaScript using HTML5, while the server is implemented in Python and uses the [Flask](http://flask.pocoo.org/) framework. Client and server communicate via REST and Websocket interfaces. 

## Virtual Development Environment
Caleydo Web components are found on [GitHub](https://github.com/Caleydo). To facilitate installation of Caleydo Web, a [container repository](https://github.com/Caleydo/caleydo_web_container) is provided. This repository is used to setup a controlled environment in a virtual machine that runs Ubuntu using [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/). 

## Building and Running
The container repository includes a shell script file *manage.sh*, which helps installing and managing Caleydo Web plugins and their dependencies in the virtual environment. It uses [Bower](http://bower.io/) for resolving web dependencies and [Python pip](https://pypi.python.org/pypi/pip) for python dependencies. [Grunt.js](http://gruntjs.com/) is used for building Caleydo Web and running the web server.