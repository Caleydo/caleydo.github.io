---
layout: documentation
title:  Creating Plugins
permalink: /documentation/creating_plugin/
---

Plug-ins are [require.js](http://requirejs.org/) modules with an additional meta-data description as section within its `package.json` file. Multiple plugins can be defined within a single package.json.

The [package.json](https://www.npmjs.org/doc/files/package.json.html) is the one from node-js.

`package.json`:
```JSON
{
  "name" : "...",
  "peerDependencies" : {
    "caleydo_core": "*"
  },
  "caleydo" : {
    "plugins" : {
      "web" : [{
        "type": "app",
        "name": "MyApp"
      }],
      "python": [{
          "type": "namespace",
          "file": "my_service",
          "namespace": "/api/my_service"
        }]
    },
    "dependencies": {
        "web": {
           "d3": ">=3.5.5"
        },
        "python": {
        "biopython": ">=1.65"
       }
    }
  },
  "publishConfig": {
    "registry": "http://registry.caleydo.org/"
  }
}
```

There are several sections in package.json:
* **peerDependencies:** All dependencies within caleydo web, i.e., caleydo-web modules.
* **caleydo:** Several caleydo-web specific declarations.
* **caleydo.plugins:** Plugins specified for this module. Separated into "web" and "python" plugins.
* **caleydo.plugins.web:** List of client-side (JavaScript/TypeScript) plugin descriptions for this module.
* **caleydo.plugins.python:** List of server-side (Python) plugin descriptions for this module.
* **caleydo.dependencies:** External dependencies of this module. Separated into "web" and "python".
* **caleydo.dependencies.web:** List of client-side dependencies.
* **caleydo.dependencies.python:** List of server-side dependencies.
* **publishConfig:** Specifies where this module is published.

Note that the dependencies are specified in a way that is compatible with [bower.io](http://bower.io).

### Plug-in Types

Every plug-in is described by the following entries:

```typescript
export interface IPluginDesc {
  /**
   * type of plug-in, a name by convention for identifying different plug-in types
   */
  type : string;
  /**
   * name of the plug-in, should be unique within a type
   */
  id: string;
  /**
   * human readable name
   */
  name : string;
  /**
   * name of the require.js module to load
   * @default <name>/<filename>
   */
  module : string;
  /**
   * name of the method, which is the entry point of this plug-in
   * @default create
   */
  factory: string;
  /**
   * version of this plug-in
   * @default 1.0
   */
  version: string;
  /**
   * optional description of this plug-in
   * @default ''
   */
  description: string;
}
```

Different plugin types may also define additional entries.
Every plug-in has to have an entry method for creating the plug-in related content. Multiple plug-ins are possible per file by specifying different factory methods.

Multiple plugin types are available in Caleydo web and user-defined types may be added.

### Application Plugin

Defines a client-side application plugin. Use this to setup a web application that uses caleydo-web.

_Plugin Definition:_
```JSON
{
  "type": "app",
  "name": "Sample App"
}
```


An index.html file must exist.

_index.html_
```html
<!doctype html>
<html>
<head>
    <title>Sample App</title>
    <script src="/caleydo_web.js"></script>
</head>
<body>
...
</body>
</html>
```

By default main.js is assumed to be the primary script file and is attempted to be loaded.

_main.js_
```javascript
define(['d3', '../caleydo_core/main'], function (d3, C) {
  //Your application code
});
```

If your application script has a different name, e.g., "app.js", just change the script definition to
`"<script src="/caleydo_web.js?app=./app"></script>"`.


For an example application plugin, see [sample_app](https://github.com/Caleydo/sample_app).


### Visualization Plugin

Defines a client-side visualization plugin. Visualization plugins are intended for general visualizations that are used by web applications.

_Plugin Definition:_
```JSON
{
  "type": "vis",
  "name": "Sample Vis",
  "filter": "vector",
  "icon": "icon.svg",
  "sizeDependsOnDataDimension": [
    false,
    true
  ]
}
```

You can specify a range of additional attributes for visualituation plugins:
* **filter:** Specifies the data types the visualization plugin supports. You can specify supported dataset types as simple string, e.g., ``"vector"``, or as regular expression, e.g.,  ``"(vector|matrix|stratification)``. You may additionally define supported data types in a similar way by using an array: ``["(vector|matrix|stratification)", "(categorical|real|int)"]``.
* **icon**: Icon associated with the visualization.
* **sizeDependsOnDataDimension":** Indicates, whether the size of this visulization depends on the dimensions of the data, e.g., the rows and columns of a table. Values may be set for width and height using an array: ``[true, false]`` A single value may be specified to set both.
* **scaling:** Specifies the scaling behavior. The following values are supported: *free* (no restrictions, default), *aspect* (the initial aspect ratio must be kept, i.e. same scaling values in both dimensions), *width-only* (only width can be scaled), *height-only* (only height can be scaled)

For an example plugin, see [sample_vis](https://github.com/Caleydo/sample_vis).


#### Datatype Plugin

`template-datatype.ts`

see [[DataTypes]]

Typescript for improved security

### requirejs-config

You may want to customize the requirejs configuration, i.e. in case you have to shim a dependency, since it doesn't support AMD loading. The elements of this entry are deeply merged in the final requirejs config.

***

**Note**: you may want to use the path to the installed bower dependencies. The magic variable: `${baseUrl}` will be automatically replaced by the path during generation

***

### requirejs-bower

By default, all dependencies are collected, installed using bower, and further processed to include them in requirejs. For each dependency the main entry in the corresponding `.bower.json` file is used to create a requirejs config entry. However, you might want to disable processing for specific dependencies, and configure it by your own, using the previous `requirejs-config` section. In the `ignore` property a list of bower components can be defined, which should be ignored during processing.

## Plugin Design Guidelines

Design your plug-in such that

1. **it can be used multiple times at the same time**
   * avoid ids (`#test`), ids must be globally unique in the DOM

2. **it can be used with other plug-ins**
   * restrict your styles to a namespace (i.e. the plug-in name) and add the class to the top level element

3. **it works locally**
   * avoid that you write something anywhere in the DOM. restrict yourself to the given `parent` dom element

