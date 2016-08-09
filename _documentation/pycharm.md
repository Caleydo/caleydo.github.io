---
layout: documentation
title:  Setting up PyCharm
permalink: /documentation/pycharm/
---

There are three approaches to developing Caleydo in PyCharm:

- Let the Vagrant instance manage Typescript and SCSS recompilation
- Have PyCharm manage recompilation
- In addition to recompilation, configure PyCharm to run and debug Caleydo

A tighter connection with the IDE is useful, but can also be harder to set up.

## For any approach

- Install [PyCharm](https://www.jetbrains.com/pycharm/)
- Ask your team for a link for to the license key
- If you haven't already, [`git clone https://github.com/Caleydo/caleydo_web_container.git`](https://github.com/Caleydo/caleydo_web_container)
- File -> Open... and select the `caleydo_web_container` directory.
- Download [settings.jar](/assets/settings.jar)
- In PyCharm, File -> Import Settings... and select "settings.jar"

## Recompilation in Vagrant

- Download and install Vagrant, if you haven't already
- `cd caledo_web_container`
- `vagrant up` (Will be slow the first time)
- `vagrant ssh`
- In the VM: `./manage.sh server`

This will watch for an modifications to files on disk and recompile as needed.

(**TODO**: For Chuck, this is still stalling on `Running "ts:dev" (ts) task`. Trying `grunt server --verbose` didn't give any more information.)

## Recompilation in PyCharm

We want to turn off recompilation inside the VM, because that would be redundant.

(**TODO**: Chuck never figured out compilation on the VM, so I don't know how to turn it off, either.)

- "Preferences..." menu
- "Languages & Frameworks" -> "TypeScript"

Make sure a Node interpreter is selected, and that the path corresponds to your installation.

- Fold down "TypeScript" and select "TSLint"
- Check "Enable"
- Confirm the Node interpreter
- On the command line, `npm install -g typescript; npm install -g tslint`
- Select the "Configuration file" radio button, and choose tslint.json from the top level of the project.

## Run and Debug in PyCharm

### First configure a remote Python interpreter:

- "Preferences..." menu
- "Project: caleydo_web_container" -> "Project Interpreter"
- Select the "ssh://vagrant..." option for "Project Interpreter"

### Then add a Run/Debug configuration:

![Run/Debug Configuration screenshot](/assets/images/doc_screenshots/run_debug_configuration.png)

In particular:

- "Script" will be relative to "/vagrant" inside the VM. Remember the final slash (or backslash on Windows)
- Select the remote Python interpreter you configured above.
- Specify necessary path mapping between local `caleydo_web_container`, and directory in the VM.
