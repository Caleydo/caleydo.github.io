---
layout: documentation
title:  Registry
permalink: /documentation/registry/
---

registry.caleydo.org ... published compiled plugins with a specific version

building ... main challenge ... TypeScript dependencies, e.g. if parts of the core are used you need it for compilation in the same directory structure (neighboring) 

The problem: we want lazy loading of modules but which one should we load, if we don't load them?

Solution: metadata, aka registry

e.g., a visualization plugin for a matrix. We wanna avoid direct dependency so we query the registry for all vis plugins able to show a matrix. One might be a heatmap. 

where: `package.json`
notation: 
```json
"plugins": {
  "web":  [
    {
      "type": "plugin type, e.g. vis",
      "file": "js/python file name implementing it [main]",
      "factory": "factory method used to instantiate it [create]",
      "extra_fields": "extra fields describing this plugin"
    }
  ]
}
```

how to query? two modules in the client and server using the same API: `plugin.list(<plugintype|filter function>)` see details: https://github.com/Caleydo/caleydo_core/blob/master/plugin.ts

## Registry resolution

Now the list of loaded plugins is determined during **build** time. All the available `package.json` files are parsed and two files generated: `registry.json` and `caleydo_launcher.js`. The former one is used by the server. The latter initializes the client core and launches the JS main app. This ensures that the core is initialized before all other components depending on it. In addition, a file called `caleydo_web.js` is generated that is a simple wrapper hiding the internal requirejs initialization. 

