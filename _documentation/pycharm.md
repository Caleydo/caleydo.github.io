---
layout: documentation
title:  Setting up PyCharm
permalink: /documentation/pycharm/
---

There are three approaches to developing Caleydo in PyCharm:

- Let the Vagrant instance manage Typescript and SCSS recompilation
- Have PyCharm manage recompilation
- In addition to recompilation, configure PyCharm to run and debug Python files

A tighter connection with the IDE is useful, but can also be harder to set up.

## For any approach

- Install [PyCharm](https://www.jetbrains.com/pycharm/)
- Ask your team for a link for to the license key
- If you haven't already, [`git clone https://github.com/Caleydo/caleydo_web_container.git`](https://github.com/Caleydo/caleydo_web_container)
- "File -> Open..." and select the `caleydo_web_container` directory.
- Download [settings.jar](/assets/settings.jar)
- In PyCharm, "File -> Import Settings..." and select "settings.jar"

## Recompilation in Vagrant

- Download and install Vagrant, if you haven't already
- `cd caledo_web_container`
- `vagrant up` (Will be slow the first time)
- `vagrant ssh`
- In the VM: `./manage.sh server`

This will watch for modifications to files on disk and recompile as needed.

(**TODO**: For Chuck, this is still stalling on `Running "ts:dev" (ts) task`. Trying `grunt server --verbose` didn't give any more information.)


## Recompilation in PyCharm

We can use SCSS and TypeScript compiler in PyCharm to compile files and additionally check the syntax using TSLint.

### Install required Node.js and NPM packages

In order to use the compilers and watchers we have to install Node.js and some NPM packages on the local machine (not inside the VM).

- Download and install [Node.js + NPM](https://nodejs.org/en/download/)
- "PyCharm -> Preferences... -> Plugins" (on Mac) or "File -> Settings -> Plugins" (on Windows/Linux)
- [Install the Jetbrains plugin](https://www.jetbrains.com/help/pycharm/2016.2/installing-updating-and-uninstalling-repository-plugins.html) "Node.js"
- Activate the plugin (if not done automatically)
- A new menu ["Node.js and NPM"](https://www.jetbrains.com/help/pycharm/2016.2/node-js-and-npm.html) in the settings dialog should appear under "Languages & Frameworks"
- Select the previously installed local node interpreter (if not done automatically) 
- Install the NPM packages *grunt-cli*, *node-sass*, *typescript*, *tslint*

![NPM Pacakges Configuration screenshot](/assets/images/doc_screenshots/pycharm_settings_npm.png)


### SCSS File Watcher

- "PyCharm -> Preferences..." (on Mac) or "File -> Settings" (on Windows/Linux)
- In settings dialog "Tools -> File Watcher"
- Add a new *SCSS* watcher
- Select the path to the installed *node-sass* package as program
- Change arguments to `--no-cache --source-map $FileNameWithoutExtension$.css.map $FileName$ $FileNameWithoutExtension$.css`
- Apply the changes in the settings dialog

![SCSS Watcher Configuration screenshot](/assets/images/doc_screenshots/pycharm_settings_scss_watcher.png)


### TypeScript compiler

- "PyCharm -> Preferences..." (on Mac) or "File -> Settings" (on Windows/Linux)
- "Languages & Frameworks" -> [TypeScript](https://www.jetbrains.com/help/pycharm/2016.2/typescript.html)
- Select the previously installed local node interpreter (if not done automatically) 
- Enable the TypeScript compiler and select the *Use tsconfig.json* option 
- Apply the changes in the settings dialog

![TypeScript Configuration screenshot](/assets/images/doc_screenshots/pycharm_settings_typescript.png)

### TSLint

- "PyCharm -> Preferences..." (on Mac) or "File -> Settings" (on Windows/Linux)
- "Languages & Frameworks" -> [TypeScript](https://www.jetbrains.com/help/pycharm/2016.2/typescript.html) -> [TSLint](https://www.jetbrains.com/help/pycharm/2016.2/tslint.html)
- Check "Enable"
- Confirm the Node interpreter
- On the command line, `npm install -g typescript; npm install -g tslint`
- Select the "Configuration file" radio button, and choose *tslint.json* from the top level of the caleydo_web_container repository
- Apply the changes in the settings dialog

![TSLint Configuration screenshot](/assets/images/doc_screenshots/pycharm_settings_tslint.png)


## Run and Debug in PyCharm

### First configure a remote Python interpreter:

- "PyCharm -> Preferences..." (on Mac) or "File -> Settings" (on Windows/Linux)
- "Project: caleydo_web_container" -> "Project Interpreter"
- Select the *Remote Python 2.7.6 (ssh://vagrant@localhost:2222/usr/bin/python)* option for "Project Interpreter"

### Then add a Run/Debug configuration:

![Run/Debug Configuration screenshot](/assets/images/doc_screenshots/pycharm_settings_run_debug_configuration.png)

In particular:

- "Script" will be relative to "/vagrant" inside the VM. Remember the final slash (or backslash on Windows)
- Select the remote Python interpreter you configured above
- Specify necessary path mapping between local `caleydo_web_container`, and directory in the VM
