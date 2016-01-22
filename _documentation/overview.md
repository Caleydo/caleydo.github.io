---
layout: documentation
title: Overview
permalink: /documentation/overview/
---

Caleydo Web is a platform for developing web-based visual analysis applications. It is based on a client-server architecture where both sides, client and server, consist of several [plugins](TODO). The client is realized in TypeScript and JavaScript using HTML5, while the server is implemented in Python and uses the [Flask](http://flask.pocoo.org/) framework, which eases client-server communication via REST and Websocket interfaces. Caleydo Web components are found on [GitHub](https://github.com/Caleydo).

To facilitate installation of Caleydo Web, a [container repository](https://github.com/Caleydo/caleydo_web_container) is provided. This repository is used to setup a controlled environment in a virtual machine running Ubuntu using [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/). A script file is provided to facilitate the management and installation of Caleydo Web plugins and their dependencies in this environment.


VM, vagrant, python server, grunt, bower, pip for python deps (CHRISTIAN)