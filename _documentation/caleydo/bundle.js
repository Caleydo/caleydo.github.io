/*! Caleydo - v0.0.1 - 2016-01-22
* Copyright (c) 2016 Caleydo Team; Licensed SEE LICENSE IN LICENSE */


//based on https://github.com/ForbesLindesay/umd but with a custom list of external dependencies
;(function (f) {
  var plugin_wrapper = { load: function (file, callback) { callback(null); }};
  function isPlugin(name) {
    return name === 'css' || name === 'text';
  }

  // CommonJS
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f(function (name) {
      return isPlugin(name) ? plugin_wrapper : require(name);
    })(1);

    // RequireJS
  } else if (typeof define === "function" && define.amd) {
    var deps = ['bootstrap','d3','es6-promise','font-awesome','html2canvas','jquery','jquery-ui','lineupjs','marked'];
    define(deps, function () {
      var resolved_deps = arguments;
      return f(function (name) {
        return isPlugin(name) ? plugin_wrapper : resolved_deps[deps.indexOf(name)];
      })(1);
    });
    // <script>
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      // works providing we're not in "use strict";
      // needed for Java 8 Nashorn
      // see https://github.com/facebook/react/issues/3037
      g = this;
    }
    g.Caleydo = f(function (name) {
      return isPlugin(name) ? plugin_wrapper : g[name];
    })(1);
  }

})(function (require) {
  //due to browserify the __extends is not copied somehow for amd modules
  var __extends = (this && this.__extends) || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  return  (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var plugins = [];

Object.defineProperty(exports, 'core', {
  enumerable: true,
  get: function() {
    var c = {};
    Object.defineProperties(c, {
      '2D': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/2D');
        }
      },
      'ajax': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/ajax');
        }
      },
      'behavior': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/behavior');
        }
      },
      'data': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/data');
        }
      },
      'datatype': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/datatype');
        }
      },
      'event': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/event');
        }
      },
      'geom': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/geom');
        }
      },
      'idtype': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/idtype');
        }
      },
      'iterator': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/iterator');
        }
      },
      'layout': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/layout');
        }
      },
      'layout_view': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/layout_view');
        }
      },
      'main': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/main');
        }
      },
      'mapper': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/mapper');
        }
      },
      'math': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/math');
        }
      },
      'matrix': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/matrix');
        }
      },
      'matrix_impl': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/matrix_impl');
        }
      },
      'multiform': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/multiform');
        }
      },
      'plugin': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/plugin');
        }
      },
      'range': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/range');
        }
      },
      'session': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/session');
        }
      },
      'stratification': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/stratification');
        }
      },
      'stratification_impl': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/stratification_impl');
        }
      },
      'table': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/table');
        }
      },
      'table_impl': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/table_impl');
        }
      },
      'vector': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/vector');
        }
      },
      'vector_impl': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/vector_impl');
        }
      },
      'vis': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/vis');
        }
      },
      'wrapper': {
        enumerable: true,
        get: function() {
          return require('./caleydo_core/wrapper');
        }
      }
    });
    return c;
  }
});
plugins.push.apply(plugins, [{
  "folder": "caleydo_core",
  "id": "matrix",
  "version": "0.0.1-alpha",
  "name": "caleydo_core",
  "type": "datatype",
  "file": "matrix_impl",
  "loader": function() {
    return require('./caleydo_core/matrix_impl');
  }
}, {
  "folder": "caleydo_core",
  "id": "table",
  "version": "0.0.1-alpha",
  "name": "caleydo_core",
  "type": "datatype",
  "file": "table_impl",
  "loader": function() {
    return require('./caleydo_core/table_impl');
  }
}, {
  "folder": "caleydo_core",
  "id": "vector",
  "version": "0.0.1-alpha",
  "name": "caleydo_core",
  "type": "datatype",
  "file": "vector_impl",
  "loader": function() {
    return require('./caleydo_core/vector_impl');
  }
}, {
  "folder": "caleydo_core",
  "id": "stratification",
  "version": "0.0.1-alpha",
  "name": "caleydo_core",
  "type": "datatype",
  "file": "stratification_impl",
  "loader": function() {
    return require('./caleydo_core/stratification_impl');
  }
}]);

Object.defineProperty(exports, 'caleydo_core', {
  enumerable: true,
  get: function() {
    return exports.core;
  }
});
Object.defineProperty(exports, 'security_flask', {
  enumerable: true,
  get: function() {
    var c = {};
    Object.defineProperties(c, {
      'login': {
        enumerable: true,
        get: function() {
          return require('./caleydo_security_flask/login');
        }
      }
    });
    return c;
  }
});
plugins.push.apply(plugins, []);

Object.defineProperty(exports, 'caleydo_security_flask', {
  enumerable: true,
  get: function() {
    return exports.security_flask;
  }
});
Object.defineProperty(exports, 'd3', {
  enumerable: true,
  get: function() {
    var c = {};
    Object.defineProperties(c, {
      'ajax_adapter_d3': {
        enumerable: true,
        get: function() {
          return require('./caleydo_d3/ajax_adapter_d3');
        }
      },
      'd3util': {
        enumerable: true,
        get: function() {
          return require('./caleydo_d3/d3util');
        }
      },
      'databrowser': {
        enumerable: true,
        get: function() {
          return require('./caleydo_d3/databrowser');
        }
      },
      'layout_d3util': {
        enumerable: true,
        get: function() {
          return require('./caleydo_d3/layout_d3util');
        }
      },
      'parser': {
        enumerable: true,
        get: function() {
          return require('./caleydo_d3/parser');
        }
      },
      'selectioninfo': {
        enumerable: true,
        get: function() {
          return require('./caleydo_d3/selectioninfo');
        }
      }
    });
    return c;
  }
});
plugins.push.apply(plugins, [{
  "folder": "caleydo_d3",
  "id": "caleydo_adapter_d3",
  "version": "0.0.1",
  "name": "caleydo_d3",
  "type": "ajax-adapter",
  "file": "ajax_adapter_d3",
  "loader": function() {
    return require('./caleydo_d3/ajax_adapter_d3');
  }
}]);

Object.defineProperty(exports, 'caleydo_d3', {
  enumerable: true,
  get: function() {
    return exports.d3;
  }
});
Object.defineProperty(exports, 'tooltip', {
  enumerable: true,
  get: function() {
    var c = {};
    Object.defineProperties(c, {
      'main': {
        enumerable: true,
        get: function() {
          return require('./caleydo_tooltip/main');
        }
      }
    });
    return c;
  }
});
plugins.push.apply(plugins, []);

Object.defineProperty(exports, 'caleydo_tooltip', {
  enumerable: true,
  get: function() {
    return exports.tooltip;
  }
});
Object.defineProperty(exports, 'graph', {
  enumerable: true,
  get: function() {
    var c = {};
    Object.defineProperties(c, {
      'main': {
        enumerable: true,
        get: function() {
          return require('./caleydo_graph/main');
        }
      }
    });
    return c;
  }
});
plugins.push.apply(plugins, [{
  "folder": "caleydo_graph",
  "id": "graph",
  "version": "0.0.1",
  "name": "caleydo_graph",
  "type": "datatype",
  "file": "main",
  "loader": function() {
    return require('./caleydo_graph/main');
  }
}]);

Object.defineProperty(exports, 'caleydo_graph', {
  enumerable: true,
  get: function() {
    return exports.graph;
  }
});
Object.defineProperty(exports, 'vis_graph', {
  enumerable: true,
  get: function() {
    var c = {};
    Object.defineProperties(c, {
      'main': {
        enumerable: true,
        get: function() {
          return require('./caleydo_vis_graph/main');
        }
      }
    });
    return c;
  }
});
plugins.push.apply(plugins, [{
  "folder": "caleydo_vis_graph",
  "id": "caleydo_vis_graph",
  "version": "0.0.1",
  "name": "Force Directed Graph",
  "type": "vis",
  "filter": "graph",
  "icon": "icon.svg",
  "sizeDependsOnDataDimension": [false, false],
  "loader": function() {
    return require('./caleydo_vis_graph/main');
  }
}]);

Object.defineProperty(exports, 'caleydo_vis_graph', {
  enumerable: true,
  get: function() {
    return exports.vis_graph;
  }
});
Object.defineProperty(exports, 'links', {
  enumerable: true,
  get: function() {
    var c = {};
    Object.defineProperties(c, {
      'link': {
        enumerable: true,
        get: function() {
          return require('./caleydo_links/link');
        }
      },
      'link_representation': {
        enumerable: true,
        get: function() {
          return require('./caleydo_links/link_representation');
        }
      },
      'main': {
        enumerable: true,
        get: function() {
          return require('./caleydo_links/main');
        }
      }
    });
    return c;
  }
});
plugins.push.apply(plugins, [{
  "folder": "caleydo_links",
  "id": "caleydo_links",
  "version": "0.0.1",
  "name": "caleydo_links",
  "type": "autoload",
  "loader": function() {
    return require('./caleydo_links/main');
  }
}, {
  "folder": "caleydo_links",
  "id": "link-block",
  "version": "0.0.1",
  "name": "Block Link Representation",
  "type": "link-representation",
  "file": "link_representation",
  "factory": "createBlockRep",
  "granularity": 0,
  "loader": function() {
    return require('./caleydo_links/link_representation');
  }
}, {
  "folder": "caleydo_links",
  "id": "link-group",
  "version": "0.0.1",
  "name": "Group Link Representation",
  "type": "link-representation",
  "file": "link_representation",
  "factory": "createGroupRep",
  "granularity": 5,
  "loader": function() {
    return require('./caleydo_links/link_representation');
  }
}, {
  "folder": "caleydo_links",
  "id": "link-item",
  "version": "0.0.1",
  "name": "Item Link Representation",
  "type": "link-representation",
  "file": "link_representation",
  "factory": "createItemRep",
  "granularity": 10,
  "loader": function() {
    return require('./caleydo_links/link_representation');
  }
}]);

Object.defineProperty(exports, 'caleydo_links', {
  enumerable: true,
  get: function() {
    return exports.links;
  }
});
Object.defineProperty(exports, 'screenshot', {
  enumerable: true,
  get: function() {
    var c = {};
    Object.defineProperties(c, {
      'main': {
        enumerable: true,
        get: function() {
          return require('./caleydo_screenshot/main');
        }
      }
    });
    return c;
  }
});
plugins.push.apply(plugins, [{
  "folder": "caleydo_screenshot",
  "id": "screenshot",
  "version": "0.0.1",
  "name": "caleydo_screenshot",
  "type": "manager",
  "singleton": true,
  "file": "main",
  "loader": function() {
    return require('./caleydo_screenshot/main');
  }
}]);

Object.defineProperty(exports, 'caleydo_screenshot', {
  enumerable: true,
  get: function() {
    return exports.screenshot;
  }
});
Object.defineProperty(exports, 'provenance', {
  enumerable: true,
  get: function() {
    var c = {};
    Object.defineProperties(c, {
      'main': {
        enumerable: true,
        get: function() {
          return require('./caleydo_provenance/main');
        }
      },
      'mode': {
        enumerable: true,
        get: function() {
          return require('./caleydo_provenance/mode');
        }
      },
      'multiform': {
        enumerable: true,
        get: function() {
          return require('./caleydo_provenance/multiform');
        }
      },
      'player': {
        enumerable: true,
        get: function() {
          return require('./caleydo_provenance/player');
        }
      },
      'selection': {
        enumerable: true,
        get: function() {
          return require('./caleydo_provenance/selection');
        }
      }
    });
    return c;
  }
});
plugins.push.apply(plugins, [{
  "folder": "caleydo_provenance",
  "id": "idtype-selection",
  "version": "0.0.1",
  "name": "caleydo_provenance",
  "type": "actionFactory",
  "file": "selection",
  "factory": "createCmd",
  "creates": "select",
  "loader": function() {
    return require('./caleydo_provenance/selection');
  }
}, {
  "folder": "caleydo_provenance",
  "id": "idtype-selection",
  "version": "0.0.1",
  "name": "caleydo_provenance",
  "type": "actionCompressor",
  "file": "selection",
  "factory": "compressSelection",
  "loader": function() {
    return require('./caleydo_provenance/selection');
  }
}, {
  "folder": "caleydo_provenance",
  "id": "multiform",
  "version": "0.0.1",
  "name": "caleydo_provenance",
  "type": "actionFactory",
  "file": "multiform",
  "factory": "createCmd",
  "creates": "(transform|changeVis|setOption)",
  "loader": function() {
    return require('./caleydo_provenance/multiform');
  }
}]);

Object.defineProperty(exports, 'caleydo_provenance', {
  enumerable: true,
  get: function() {
    return exports.provenance;
  }
});
Object.defineProperty(exports, 'window', {
  enumerable: true,
  get: function() {
    var c = {};
    Object.defineProperties(c, {
      'main': {
        enumerable: true,
        get: function() {
          return require('./caleydo_window/main');
        }
      }
    });
    return c;
  }
});
plugins.push.apply(plugins, [{
  "folder": "caleydo_window",
  "id": "caleydo_window",
  "version": "0.0.1",
  "name": "caleydo_window",
  "type": "_marker",
  "__notes": "just a marker plugin",
  "loader": function() {
    return require('./caleydo_window/main');
  }
}]);

Object.defineProperty(exports, 'caleydo_window', {
  enumerable: true,
  get: function() {
    return exports.window;
  }
});
Object.defineProperty(exports, 'vis_lineup', {
  enumerable: true,
  get: function() {
    var c = {};
    Object.defineProperties(c, {
      'main': {
        enumerable: true,
        get: function() {
          return require('./caleydo_vis_lineup/main');
        }
      }
    });
    return c;
  }
});
plugins.push.apply(plugins, [{
  "folder": "caleydo_vis_lineup",
  "id": "caleydo-vis-lineup",
  "version": "0.0.1",
  "name": "LineUp",
  "type": "vis",
  "sizeDependsOnDataDimension": [false, true],
  "filter": "table",
  "loader": function() {
    return require('./caleydo_vis_lineup/main');
  }
}]);

Object.defineProperty(exports, 'caleydo_vis_lineup', {
  enumerable: true,
  get: function() {
    return exports.vis_lineup;
  }
});
Object.defineProperty(exports, 'vis', {
  enumerable: true,
  get: function() {
    var c = {};
    Object.defineProperties(c, {
      'axis': {
        enumerable: true,
        get: function() {
          return require('./caleydo_vis/axis');
        }
      },
      'barplot': {
        enumerable: true,
        get: function() {
          return require('./caleydo_vis/barplot');
        }
      },
      'box': {
        enumerable: true,
        get: function() {
          return require('./caleydo_vis/box');
        }
      },
      'distribution': {
        enumerable: true,
        get: function() {
          return require('./caleydo_vis/distribution');
        }
      },
      'heatmap': {
        enumerable: true,
        get: function() {
          return require('./caleydo_vis/heatmap');
        }
      },
      'kaplanmeier': {
        enumerable: true,
        get: function() {
          return require('./caleydo_vis/kaplanmeier');
        }
      },
      'scatterplot': {
        enumerable: true,
        get: function() {
          return require('./caleydo_vis/scatterplot');
        }
      },
      'table': {
        enumerable: true,
        get: function() {
          return require('./caleydo_vis/table');
        }
      }
    });
    return c;
  }
});
plugins.push.apply(plugins, [{
  "folder": "caleydo_vis",
  "id": "axis",
  "version": "0.0.1",
  "name": "Axis",
  "type": "vis",
  "file": "axis",
  "icon": "axis_icon.svg",
  "scaling": "height-only",
  "filter": ["vector", "(real|int)"],
  "options": {
    "tickSize": {
      "type": "int",
      "range": [1, null],
      "default": 2
    },
    "orient": {
      "type": "categorical",
      "categories": ["left", "right", "top", "bottom"],
      "default": "left"
    }
  },
  "loader": function() {
    return require('./caleydo_vis/axis');
  }
}, {
  "folder": "caleydo_vis",
  "id": "barplot",
  "version": "0.0.1",
  "name": "Bar Plot",
  "type": "vis",
  "file": "barplot",
  "icon": "barplot_icon.png",
  "sizeDependsOnDataDimension": [false, true],
  "filter": ["vector", "(real|int)"],
  "loader": function() {
    return require('./caleydo_vis/barplot');
  }
}, {
  "folder": "caleydo_vis",
  "id": "table",
  "version": "0.0.1",
  "name": "Table",
  "type": "vis",
  "file": "table",
  "filter": "(matrix|table|vector)",
  "sizeDependsOnDataDimension": true,
  "loader": function() {
    return require('./caleydo_vis/table');
  }
}, {
  "folder": "caleydo_vis",
  "id": "scatterplot",
  "version": "0.0.1",
  "name": "ScatterPlot",
  "type": "vis",
  "file": "scatterplot",
  "filter": "matrix",
  "loader": function() {
    return require('./caleydo_vis/scatterplot');
  }
}, {
  "folder": "caleydo_vis",
  "id": "caleydo-vis-heatmap",
  "version": "0.0.1",
  "name": "HeatMap",
  "type": "vis",
  "file": "heatmap",
  "icon": "heatmap_icon.svg",
  "sizeDependsOnDataDimension": true,
  "filter": "matrix",
  "loader": function() {
    return require('./caleydo_vis/heatmap');
  }
}, {
  "folder": "caleydo_vis",
  "id": "caleydo-vis-heatmap1d",
  "version": "0.0.1",
  "name": "HeatMap 1D",
  "type": "vis",
  "file": "heatmap",
  "icon": "heatmap_icon.svg",
  "sizeDependsOnDataDimension": [false, true],
  "scaling": "height-only",
  "filter": "vector",
  "loader": function() {
    return require('./caleydo_vis/heatmap');
  }
}, {
  "folder": "caleydo_vis",
  "id": "caleydo-vis-kaplanmeier",
  "version": "0.0.1",
  "name": "Kaplanmeier Plot",
  "type": "vis",
  "file": "kaplanmeier",
  "icon": "kaplanmeier_icon.svg",
  "sizeDependsOnDataDimension": [false, false],
  "scaling": "aspect",
  "filter": ["vector", "int"],
  "loader": function() {
    return require('./caleydo_vis/kaplanmeier');
  }
}, {
  "folder": "caleydo_vis",
  "id": "caleydo-vis-histogram",
  "version": "0.0.1",
  "name": "Histogram",
  "type": "vis",
  "file": "distribution",
  "icon": "distribution_histogram_icon.png",
  "filter": ["(vector|matrix|stratification)", "(categorical|real|int)"],
  "loader": function() {
    return require('./caleydo_vis/distribution');
  }
}, {
  "folder": "caleydo_vis",
  "id": "caleydo-vis-mosaic",
  "version": "0.0.1",
  "name": "Mosaic",
  "type": "vis",
  "file": "distribution",
  "factory": "createMosaic",
  "icon": "distribution_mosaic_icon.png",
  "sizeDependsOnDataDimension": [false, true],
  "scaling": "height-only",
  "filter": ["(vector|stratification)", "categorical"],
  "loader": function() {
    return require('./caleydo_vis/distribution');
  }
}, {
  "folder": "caleydo_vis",
  "id": "caleydo-vis-pie",
  "version": "0.0.1",
  "name": "Pie",
  "type": "vis",
  "file": "distribution",
  "factory": "createPie",
  "icon": "distribution_pie_icon.png",
  "scaling": "aspect",
  "filter": ["(vector|stratification)", "categorical"],
  "loader": function() {
    return require('./caleydo_vis/distribution');
  }
}, {
  "folder": "caleydo_vis",
  "id": "caleydo-vis-box",
  "version": "0.0.1",
  "name": "BoxPlot",
  "type": "vis",
  "file": "box",
  "icon": "box_icon.png",
  "scaling": "aspect",
  "filter": ["vector", "(real|int)"],
  "loader": function() {
    return require('./caleydo_vis/box');
  }
}]);

Object.defineProperty(exports, 'caleydo_vis', {
  enumerable: true,
  get: function() {
    return exports.vis;
  }
});
Object.defineProperty(exports, 'clue', {
  enumerable: true,
  get: function() {
    var c = {};
    Object.defineProperties(c, {
      'annotation': {
        enumerable: true,
        get: function() {
          return require('./clue/annotation');
        }
      },
      'provvis2': {
        enumerable: true,
        get: function() {
          return require('./clue/provvis2');
        }
      },
      'storyvis2': {
        enumerable: true,
        get: function() {
          return require('./clue/storyvis2');
        }
      },
      'template': {
        enumerable: true,
        get: function() {
          return require('./clue/template');
        }
      },
      'utils': {
        enumerable: true,
        get: function() {
          return require('./clue/utils');
        }
      }
    });
    return c;
  }
});
plugins.push.apply(plugins, []);

Object.defineProperty(exports, 'wrapper_bootstrap_fontawesome', {
  enumerable: true,
  get: function() {
    var c = {};
    Object.defineProperties(c, {
      'ajax_adapter_jquery': {
        enumerable: true,
        get: function() {
          return require('./wrapper_bootstrap_fontawesome/ajax_adapter_jquery');
        }
      },
      'dialogs': {
        enumerable: true,
        get: function() {
          return require('./wrapper_bootstrap_fontawesome/dialogs');
        }
      },
      'header': {
        enumerable: true,
        get: function() {
          return require('./wrapper_bootstrap_fontawesome/header');
        }
      }
    });
    return c;
  }
});
plugins.push.apply(plugins, [{
  "folder": "wrapper_bootstrap_fontawesome",
  "id": "caleydo_adapter_jquery",
  "version": "0.0.1",
  "name": "wrapper_bootstrap_fontawesome",
  "type": "ajax-adapter",
  "file": "ajax_adapter_jquery",
  "loader": function() {
    return require('./wrapper_bootstrap_fontawesome/ajax_adapter_jquery');
  }
}]);

var context = '';
if (document.currentScript) {
  context = document.currentScript.dataset.context || '';
} else {
  context = document.querySelector('script[data-context]');
  context = context ? context.dataset.context : '';
}
exports.core.main._init({
  apiUrl: '/api',
  registry: {
    baseUrl: context + '',
    relativeUrl: '..',
    extensions: plugins
  }
});
},{"./caleydo_core/2D":2,"./caleydo_core/ajax":3,"./caleydo_core/behavior":4,"./caleydo_core/data":5,"./caleydo_core/datatype":6,"./caleydo_core/event":7,"./caleydo_core/geom":8,"./caleydo_core/idtype":9,"./caleydo_core/iterator":10,"./caleydo_core/layout":11,"./caleydo_core/layout_view":12,"./caleydo_core/main":13,"./caleydo_core/mapper":14,"./caleydo_core/math":15,"./caleydo_core/matrix":16,"./caleydo_core/matrix_impl":17,"./caleydo_core/multiform":18,"./caleydo_core/plugin":19,"./caleydo_core/range":20,"./caleydo_core/session":21,"./caleydo_core/stratification":22,"./caleydo_core/stratification_impl":23,"./caleydo_core/table":24,"./caleydo_core/table_impl":25,"./caleydo_core/vector":26,"./caleydo_core/vector_impl":27,"./caleydo_core/vis":28,"./caleydo_core/wrapper":29,"./caleydo_d3/ajax_adapter_d3":30,"./caleydo_d3/d3util":31,"./caleydo_d3/databrowser":32,"./caleydo_d3/layout_d3util":33,"./caleydo_d3/parser":34,"./caleydo_d3/selectioninfo":35,"./caleydo_graph/main":36,"./caleydo_links/link":37,"./caleydo_links/link_representation":38,"./caleydo_links/main":39,"./caleydo_provenance/main":40,"./caleydo_provenance/mode":41,"./caleydo_provenance/multiform":42,"./caleydo_provenance/player":43,"./caleydo_provenance/selection":44,"./caleydo_screenshot/main":45,"./caleydo_security_flask/login":46,"./caleydo_tooltip/main":47,"./caleydo_vis/axis":48,"./caleydo_vis/barplot":49,"./caleydo_vis/box":50,"./caleydo_vis/distribution":51,"./caleydo_vis/heatmap":52,"./caleydo_vis/kaplanmeier":53,"./caleydo_vis/scatterplot":54,"./caleydo_vis/table":55,"./caleydo_vis_graph/main":56,"./caleydo_vis_lineup/main":57,"./caleydo_window/main":58,"./clue/annotation":59,"./clue/provvis2":60,"./clue/storyvis2":61,"./clue/template":62,"./clue/utils":63,"./wrapper_bootstrap_fontawesome/ajax_adapter_jquery":64,"./wrapper_bootstrap_fontawesome/dialogs":65,"./wrapper_bootstrap_fontawesome/header":66}],2:[function(require,module,exports){
(function (require, exports) {
    var IntersectionParams = function () {
        function IntersectionParams(name, params) {
            this.name = name;
            this.params = params;
        }
        return IntersectionParams;
    }();
    var Intersection = function () {
        function Intersection(status) {
            if (status === void 0) {
                status = 'No Intersection';
            }
            this.status = status;
            this.points = [];
        }
        Object.defineProperty(Intersection.prototype, 'intersects', {
            get: function () {
                return this.status === 'Intersection';
            },
            enumerable: true,
            configurable: true
        });
        Intersection.prototype.appendPoint = function (point) {
            this.status = 'Intersection';
            this.points.push(point);
        };
        Intersection.prototype.appendPoints = function (points) {
            if (points.length > 0) {
                this.status = 'Intersection';
            }
            this.points.push.apply(this.points, points);
        };
        Object.defineProperty(Intersection.prototype, 'length', {
            get: function () {
                return this.points.length;
            },
            enumerable: true,
            configurable: true
        });
        Intersection.prototype.forEach = function (callbackfn, thisArg) {
            this.points.forEach(callbackfn, thisArg);
        };
        Intersection.prototype.map = function (callbackfn, thisArg) {
            return this.points.map(callbackfn, thisArg);
        };
        Intersection.intersectShapes = function (shape1, shape2) {
            var ip1 = shape1.asIntersectionParams();
            var ip2 = shape2.asIntersectionParams();
            var result;
            if (ip1 != null && ip2 != null) {
                if (shape1 instanceof Path) {
                    result = Intersection.intersectPathShape(shape1, shape2);
                } else if (shape2 instanceof Path) {
                    result = Intersection.intersectPathShape(shape2, shape1);
                } else {
                    var method;
                    var params;
                    if (ip1.name < ip2.name) {
                        method = 'intersect' + ip1.name + ip2.name;
                        params = ip1.params.concat(ip2.params);
                    } else {
                        method = 'intersect' + ip2.name + ip1.name;
                        params = ip2.params.concat(ip1.params);
                    }
                    if (typeof Intersection[method] !== 'function') {
                        throw new Error('Intersection not available: ' + method);
                    }
                    result = Intersection[method].apply(null, params);
                }
            } else {
                result = new Intersection();
            }
            return result;
        };
        Intersection.intersectPathShape = function (path, shape) {
            return path.intersectShape(shape);
        };
        Intersection.intersectBezier2Bezier2 = function (a1, a2, a3, b1, b2, b3) {
            var a, b;
            var c12, c11, c10;
            var c22, c21, c20;
            var TOLERANCE = 0.0001;
            var result = new Intersection();
            a = a2.multiply(-2);
            c12 = a1.add(a.add(a3));
            a = a1.multiply(-2);
            b = a2.multiply(2);
            c11 = a.add(b);
            c10 = new Vector2D(a1.x, a1.y);
            a = b2.multiply(-2);
            c22 = b1.add(a.add(b3));
            a = b1.multiply(-2);
            b = b2.multiply(2);
            c21 = a.add(b);
            c20 = new Vector2D(b1.x, b1.y);
            a = c12.x * c11.y - c11.x * c12.y;
            b = c22.x * c11.y - c11.x * c22.y;
            var c = c21.x * c11.y - c11.x * c21.y;
            var d = c11.x * (c10.y - c20.y) + c11.y * (-c10.x + c20.x);
            var e = c22.x * c12.y - c12.x * c22.y;
            var f = c21.x * c12.y - c12.x * c21.y;
            var g = c12.x * (c10.y - c20.y) + c12.y * (-c10.x + c20.x);
            var poly = new Polynomial(-e * e, -2 * e * f, a * b - f * f - 2 * e * g, a * c - 2 * f * g, a * d - g * g);
            var roots = poly.getRoots();
            for (var i = 0; i < roots.length; i++) {
                var s = roots[i];
                if (0 <= s && s <= 1) {
                    var xRoots = new Polynomial(-c12.x, -c11.x, -c10.x + c20.x + s * c21.x + s * s * c22.x).getRoots();
                    var yRoots = new Polynomial(-c12.y, -c11.y, -c10.y + c20.y + s * c21.y + s * s * c22.y).getRoots();
                    if (xRoots.length > 0 && yRoots.length > 0) {
                        checkRoots:
                            for (var j = 0; j < xRoots.length; j++) {
                                var xRoot = xRoots[j];
                                if (0 <= xRoot && xRoot <= 1) {
                                    for (var k = 0; k < yRoots.length; k++) {
                                        if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                                            result.points.push(c22.multiply(s * s).add(c21.multiply(s).add(c20)));
                                            break checkRoots;
                                        }
                                    }
                                }
                            }
                    }
                }
            }
            return result;
        };
        Intersection.intersectBezier2Bezier3 = function (a1, a2, a3, b1, b2, b3, b4) {
            var a, b, c, d;
            var c12, c11, c10;
            var c23, c22, c21, c20;
            var result = new Intersection();
            a = a2.multiply(-2);
            c12 = a1.add(a.add(a3));
            a = a1.multiply(-2);
            b = a2.multiply(2);
            c11 = a.add(b);
            c10 = new Vector2D(a1.x, a1.y);
            a = b1.multiply(-1);
            b = b2.multiply(3);
            c = b3.multiply(-3);
            d = a.add(b.add(c.add(b4)));
            c23 = new Vector2D(d.x, d.y);
            a = b1.multiply(3);
            b = b2.multiply(-6);
            c = b3.multiply(3);
            d = a.add(b.add(c));
            c22 = new Vector2D(d.x, d.y);
            a = b1.multiply(-3);
            b = b2.multiply(3);
            c = a.add(b);
            c21 = new Vector2D(c.x, c.y);
            c20 = new Vector2D(b1.x, b1.y);
            var c10x2 = c10.x * c10.x;
            var c10y2 = c10.y * c10.y;
            var c11x2 = c11.x * c11.x;
            var c11y2 = c11.y * c11.y;
            var c12x2 = c12.x * c12.x;
            var c12y2 = c12.y * c12.y;
            var c20x2 = c20.x * c20.x;
            var c20y2 = c20.y * c20.y;
            var c21x2 = c21.x * c21.x;
            var c21y2 = c21.y * c21.y;
            var c22x2 = c22.x * c22.x;
            var c22y2 = c22.y * c22.y;
            var c23x2 = c23.x * c23.x;
            var c23y2 = c23.y * c23.y;
            var poly = new Polynomial(-2 * c12.x * c12.y * c23.x * c23.y + c12x2 * c23y2 + c12y2 * c23x2, -2 * c12.x * c12.y * c22.x * c23.y - 2 * c12.x * c12.y * c22.y * c23.x + 2 * c12y2 * c22.x * c23.x + 2 * c12x2 * c22.y * c23.y, -2 * c12.x * c21.x * c12.y * c23.y - 2 * c12.x * c12.y * c21.y * c23.x - 2 * c12.x * c12.y * c22.x * c22.y + 2 * c21.x * c12y2 * c23.x + c12y2 * c22x2 + c12x2 * (2 * c21.y * c23.y + c22y2), 2 * c10.x * c12.x * c12.y * c23.y + 2 * c10.y * c12.x * c12.y * c23.x + c11.x * c11.y * c12.x * c23.y + c11.x * c11.y * c12.y * c23.x - 2 * c20.x * c12.x * c12.y * c23.y - 2 * c12.x * c20.y * c12.y * c23.x - 2 * c12.x * c21.x * c12.y * c22.y - 2 * c12.x * c12.y * c21.y * c22.x - 2 * c10.x * c12y2 * c23.x - 2 * c10.y * c12x2 * c23.y + 2 * c20.x * c12y2 * c23.x + 2 * c21.x * c12y2 * c22.x - c11y2 * c12.x * c23.x - c11x2 * c12.y * c23.y + c12x2 * (2 * c20.y * c23.y + 2 * c21.y * c22.y), 2 * c10.x * c12.x * c12.y * c22.y + 2 * c10.y * c12.x * c12.y * c22.x + c11.x * c11.y * c12.x * c22.y + c11.x * c11.y * c12.y * c22.x - 2 * c20.x * c12.x * c12.y * c22.y - 2 * c12.x * c20.y * c12.y * c22.x - 2 * c12.x * c21.x * c12.y * c21.y - 2 * c10.x * c12y2 * c22.x - 2 * c10.y * c12x2 * c22.y + 2 * c20.x * c12y2 * c22.x - c11y2 * c12.x * c22.x - c11x2 * c12.y * c22.y + c21x2 * c12y2 + c12x2 * (2 * c20.y * c22.y + c21y2), 2 * c10.x * c12.x * c12.y * c21.y + 2 * c10.y * c12.x * c21.x * c12.y + c11.x * c11.y * c12.x * c21.y + c11.x * c11.y * c21.x * c12.y - 2 * c20.x * c12.x * c12.y * c21.y - 2 * c12.x * c20.y * c21.x * c12.y - 2 * c10.x * c21.x * c12y2 - 2 * c10.y * c12x2 * c21.y + 2 * c20.x * c21.x * c12y2 - c11y2 * c12.x * c21.x - c11x2 * c12.y * c21.y + 2 * c12x2 * c20.y * c21.y, -2 * c10.x * c10.y * c12.x * c12.y - c10.x * c11.x * c11.y * c12.y - c10.y * c11.x * c11.y * c12.x + 2 * c10.x * c12.x * c20.y * c12.y + 2 * c10.y * c20.x * c12.x * c12.y + c11.x * c20.x * c11.y * c12.y + c11.x * c11.y * c12.x * c20.y - 2 * c20.x * c12.x * c20.y * c12.y - 2 * c10.x * c20.x * c12y2 + c10.x * c11y2 * c12.x + c10.y * c11x2 * c12.y - 2 * c10.y * c12x2 * c20.y - c20.x * c11y2 * c12.x - c11x2 * c20.y * c12.y + c10x2 * c12y2 + c10y2 * c12x2 + c20x2 * c12y2 + c12x2 * c20y2);
            var roots = poly.getRootsInInterval(0, 1);
            for (var i = 0; i < roots.length; i++) {
                var s = roots[i];
                var xRoots = new Polynomial(c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x - s * s * s * c23.x).getRoots();
                var yRoots = new Polynomial(c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y - s * s * s * c23.y).getRoots();
                if (xRoots.length > 0 && yRoots.length > 0) {
                    var TOLERANCE = 0.0001;
                    checkRoots:
                        for (var j = 0; j < xRoots.length; j++) {
                            var xRoot = xRoots[j];
                            if (0 <= xRoot && xRoot <= 1) {
                                for (var k = 0; k < yRoots.length; k++) {
                                    if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                                        result.points.push(c23.multiply(s * s * s).add(c22.multiply(s * s).add(c21.multiply(s).add(c20))));
                                        break checkRoots;
                                    }
                                }
                            }
                        }
                }
            }
            return result;
        };
        Intersection.intersectBezier2Circle = function (p1, p2, p3, c, r) {
            return Intersection.intersectBezier2Ellipse(p1, p2, p3, c, r, r);
        };
        Intersection.intersectBezier2Ellipse = function (p1, p2, p3, ec, rx, ry) {
            var a, b;
            var c2, c1, c0;
            var result = new Intersection();
            a = p2.multiply(-2);
            c2 = p1.add(a.add(p3));
            a = p1.multiply(-2);
            b = p2.multiply(2);
            c1 = a.add(b);
            c0 = new Vector2D(p1.x, p1.y);
            var rxrx = rx * rx;
            var ryry = ry * ry;
            var roots = new Polynomial(ryry * c2.x * c2.x + rxrx * c2.y * c2.y, 2 * (ryry * c2.x * c1.x + rxrx * c2.y * c1.y), ryry * (2 * c2.x * c0.x + c1.x * c1.x) + rxrx * (2 * c2.y * c0.y + c1.y * c1.y) - 2 * (ryry * ec.x * c2.x + rxrx * ec.y * c2.y), 2 * (ryry * c1.x * (c0.x - ec.x) + rxrx * c1.y * (c0.y - ec.y)), ryry * (c0.x * c0.x + ec.x * ec.x) + rxrx * (c0.y * c0.y + ec.y * ec.y) - 2 * (ryry * ec.x * c0.x + rxrx * ec.y * c0.y) - rxrx * ryry).getRoots();
            for (var i = 0; i < roots.length; i++) {
                var t = roots[i];
                if (0 <= t && t <= 1) {
                    result.points.push(c2.multiply(t * t).add(c1.multiply(t).add(c0)));
                }
            }
            return result;
        };
        Intersection.intersectBezier2Line = function (p1, p2, p3, a1, a2) {
            var a, b;
            var c2, c1, c0;
            var cl;
            var n;
            var min = a1.min(a2);
            var max = a1.max(a2);
            var result = new Intersection();
            a = p2.multiply(-2);
            c2 = p1.add(a.add(p3));
            a = p1.multiply(-2);
            b = p2.multiply(2);
            c1 = a.add(b);
            c0 = new Vector2D(p1.x, p1.y);
            n = new Vector2D(a1.y - a2.y, a2.x - a1.x);
            cl = a1.x * a2.y - a2.x * a1.y;
            var roots = new Polynomial(n.dot(c2), n.dot(c1), n.dot(c0) + cl).getRoots();
            for (var i = 0; i < roots.length; i++) {
                var t = roots[i];
                if (0 <= t && t <= 1) {
                    var p4 = p1.lerp(p2, t);
                    var p5 = p2.lerp(p3, t);
                    var p6 = p4.lerp(p5, t);
                    if (a1.x === a2.x) {
                        if (min.y <= p6.y && p6.y <= max.y) {
                            result.appendPoint(p6);
                        }
                    } else if (a1.y === a2.y) {
                        if (min.x <= p6.x && p6.x <= max.x) {
                            result.appendPoint(p6);
                        }
                    } else if (p6.gte(min) && p6.lte(max)) {
                        result.appendPoint(p6);
                    }
                }
            }
            return result;
        };
        Intersection.prototype.intersectBezier2Polygon = function (p1, p2, p3, points) {
            var result = new Intersection();
            var length = points.length;
            for (var i = 0; i < length; i++) {
                var a1 = points[i];
                var a2 = points[(i + 1) % length];
                var inter = Intersection.intersectBezier2Line(p1, p2, p3, a1, a2);
                result.appendPoints(inter.points);
            }
            return result;
        };
        Intersection.intersectBezier2Rectangle = function (p1, p2, p3, r1, r2) {
            var min = r1.min(r2);
            var max = r1.max(r2);
            var topRight = new Vector2D(max.x, min.y);
            var bottomLeft = new Vector2D(min.x, max.y);
            var inter1 = Intersection.intersectBezier2Line(p1, p2, p3, min, topRight);
            var inter2 = Intersection.intersectBezier2Line(p1, p2, p3, topRight, max);
            var inter3 = Intersection.intersectBezier2Line(p1, p2, p3, max, bottomLeft);
            var inter4 = Intersection.intersectBezier2Line(p1, p2, p3, bottomLeft, min);
            var result = new Intersection();
            result.appendPoints(inter1.points);
            result.appendPoints(inter2.points);
            result.appendPoints(inter3.points);
            result.appendPoints(inter4.points);
            return result;
        };
        Intersection.intersectBezier3Bezier3 = function (a1, a2, a3, a4, b1, b2, b3, b4) {
            var a, b, c, d;
            var c13, c12, c11, c10;
            var c23, c22, c21, c20;
            var result = new Intersection();
            a = a1.multiply(-1);
            b = a2.multiply(3);
            c = a3.multiply(-3);
            d = a.add(b.add(c.add(a4)));
            c13 = new Vector2D(d.x, d.y);
            a = a1.multiply(3);
            b = a2.multiply(-6);
            c = a3.multiply(3);
            d = a.add(b.add(c));
            c12 = new Vector2D(d.x, d.y);
            a = a1.multiply(-3);
            b = a2.multiply(3);
            c = a.add(b);
            c11 = new Vector2D(c.x, c.y);
            c10 = new Vector2D(a1.x, a1.y);
            a = b1.multiply(-1);
            b = b2.multiply(3);
            c = b3.multiply(-3);
            d = a.add(b.add(c.add(b4)));
            c23 = new Vector2D(d.x, d.y);
            a = b1.multiply(3);
            b = b2.multiply(-6);
            c = b3.multiply(3);
            d = a.add(b.add(c));
            c22 = new Vector2D(d.x, d.y);
            a = b1.multiply(-3);
            b = b2.multiply(3);
            c = a.add(b);
            c21 = new Vector2D(c.x, c.y);
            c20 = new Vector2D(b1.x, b1.y);
            var c10x2 = c10.x * c10.x;
            var c10x3 = c10.x * c10.x * c10.x;
            var c10y2 = c10.y * c10.y;
            var c10y3 = c10.y * c10.y * c10.y;
            var c11x2 = c11.x * c11.x;
            var c11x3 = c11.x * c11.x * c11.x;
            var c11y2 = c11.y * c11.y;
            var c11y3 = c11.y * c11.y * c11.y;
            var c12x2 = c12.x * c12.x;
            var c12x3 = c12.x * c12.x * c12.x;
            var c12y2 = c12.y * c12.y;
            var c12y3 = c12.y * c12.y * c12.y;
            var c13x2 = c13.x * c13.x;
            var c13x3 = c13.x * c13.x * c13.x;
            var c13y2 = c13.y * c13.y;
            var c13y3 = c13.y * c13.y * c13.y;
            var c20x2 = c20.x * c20.x;
            var c20x3 = c20.x * c20.x * c20.x;
            var c20y2 = c20.y * c20.y;
            var c20y3 = c20.y * c20.y * c20.y;
            var c21x2 = c21.x * c21.x;
            var c21x3 = c21.x * c21.x * c21.x;
            var c21y2 = c21.y * c21.y;
            var c22x2 = c22.x * c22.x;
            var c22x3 = c22.x * c22.x * c22.x;
            var c22y2 = c22.y * c22.y;
            var c23x2 = c23.x * c23.x;
            var c23x3 = c23.x * c23.x * c23.x;
            var c23y2 = c23.y * c23.y;
            var c23y3 = c23.y * c23.y * c23.y;
            var poly = new Polynomial(-c13x3 * c23y3 + c13y3 * c23x3 - 3 * c13.x * c13y2 * c23x2 * c23.y + 3 * c13x2 * c13.y * c23.x * c23y2, -6 * c13.x * c22.x * c13y2 * c23.x * c23.y + 6 * c13x2 * c13.y * c22.y * c23.x * c23.y + 3 * c22.x * c13y3 * c23x2 - 3 * c13x3 * c22.y * c23y2 - 3 * c13.x * c13y2 * c22.y * c23x2 + 3 * c13x2 * c22.x * c13.y * c23y2, -6 * c21.x * c13.x * c13y2 * c23.x * c23.y - 6 * c13.x * c22.x * c13y2 * c22.y * c23.x + 6 * c13x2 * c22.x * c13.y * c22.y * c23.y + 3 * c21.x * c13y3 * c23x2 + 3 * c22x2 * c13y3 * c23.x + 3 * c21.x * c13x2 * c13.y * c23y2 - 3 * c13.x * c21.y * c13y2 * c23x2 - 3 * c13.x * c22x2 * c13y2 * c23.y + c13x2 * c13.y * c23.x * (6 * c21.y * c23.y + 3 * c22y2) + c13x3 * (-c21.y * c23y2 - 2 * c22y2 * c23.y - c23.y * (2 * c21.y * c23.y + c22y2)), c11.x * c12.y * c13.x * c13.y * c23.x * c23.y - c11.y * c12.x * c13.x * c13.y * c23.x * c23.y + 6 * c21.x * c22.x * c13y3 * c23.x + 3 * c11.x * c12.x * c13.x * c13.y * c23y2 + 6 * c10.x * c13.x * c13y2 * c23.x * c23.y - 3 * c11.x * c12.x * c13y2 * c23.x * c23.y - 3 * c11.y * c12.y * c13.x * c13.y * c23x2 - 6 * c10.y * c13x2 * c13.y * c23.x * c23.y - 6 * c20.x * c13.x * c13y2 * c23.x * c23.y + 3 * c11.y * c12.y * c13x2 * c23.x * c23.y - 2 * c12.x * c12y2 * c13.x * c23.x * c23.y - 6 * c21.x * c13.x * c22.x * c13y2 * c23.y - 6 * c21.x * c13.x * c13y2 * c22.y * c23.x - 6 * c13.x * c21.y * c22.x * c13y2 * c23.x + 6 * c21.x * c13x2 * c13.y * c22.y * c23.y + 2 * c12x2 * c12.y * c13.y * c23.x * c23.y + c22x3 * c13y3 - 3 * c10.x * c13y3 * c23x2 + 3 * c10.y * c13x3 * c23y2 + 3 * c20.x * c13y3 * c23x2 + c12y3 * c13.x * c23x2 - c12x3 * c13.y * c23y2 - 3 * c10.x * c13x2 * c13.y * c23y2 + 3 * c10.y * c13.x * c13y2 * c23x2 - 2 * c11.x * c12.y * c13x2 * c23y2 + c11.x * c12.y * c13y2 * c23x2 - c11.y * c12.x * c13x2 * c23y2 + 2 * c11.y * c12.x * c13y2 * c23x2 + 3 * c20.x * c13x2 * c13.y * c23y2 - c12.x * c12y2 * c13.y * c23x2 - 3 * c20.y * c13.x * c13y2 * c23x2 + c12x2 * c12.y * c13.x * c23y2 - 3 * c13.x * c22x2 * c13y2 * c22.y + c13x2 * c13.y * c23.x * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c13x2 * c22.x * c13.y * (6 * c21.y * c23.y + 3 * c22y2) + c13x3 * (-2 * c21.y * c22.y * c23.y - c20.y * c23y2 - c22.y * (2 * c21.y * c23.y + c22y2) - c23.y * (2 * c20.y * c23.y + 2 * c21.y * c22.y)), 6 * c11.x * c12.x * c13.x * c13.y * c22.y * c23.y + c11.x * c12.y * c13.x * c22.x * c13.y * c23.y + c11.x * c12.y * c13.x * c13.y * c22.y * c23.x - c11.y * c12.x * c13.x * c22.x * c13.y * c23.y - c11.y * c12.x * c13.x * c13.y * c22.y * c23.x - 6 * c11.y * c12.y * c13.x * c22.x * c13.y * c23.x - 6 * c10.x * c22.x * c13y3 * c23.x + 6 * c20.x * c22.x * c13y3 * c23.x + 6 * c10.y * c13x3 * c22.y * c23.y + 2 * c12y3 * c13.x * c22.x * c23.x - 2 * c12x3 * c13.y * c22.y * c23.y + 6 * c10.x * c13.x * c22.x * c13y2 * c23.y + 6 * c10.x * c13.x * c13y2 * c22.y * c23.x + 6 * c10.y * c13.x * c22.x * c13y2 * c23.x - 3 * c11.x * c12.x * c22.x * c13y2 * c23.y - 3 * c11.x * c12.x * c13y2 * c22.y * c23.x + 2 * c11.x * c12.y * c22.x * c13y2 * c23.x + 4 * c11.y * c12.x * c22.x * c13y2 * c23.x - 6 * c10.x * c13x2 * c13.y * c22.y * c23.y - 6 * c10.y * c13x2 * c22.x * c13.y * c23.y - 6 * c10.y * c13x2 * c13.y * c22.y * c23.x - 4 * c11.x * c12.y * c13x2 * c22.y * c23.y - 6 * c20.x * c13.x * c22.x * c13y2 * c23.y - 6 * c20.x * c13.x * c13y2 * c22.y * c23.x - 2 * c11.y * c12.x * c13x2 * c22.y * c23.y + 3 * c11.y * c12.y * c13x2 * c22.x * c23.y + 3 * c11.y * c12.y * c13x2 * c22.y * c23.x - 2 * c12.x * c12y2 * c13.x * c22.x * c23.y - 2 * c12.x * c12y2 * c13.x * c22.y * c23.x - 2 * c12.x * c12y2 * c22.x * c13.y * c23.x - 6 * c20.y * c13.x * c22.x * c13y2 * c23.x - 6 * c21.x * c13.x * c21.y * c13y2 * c23.x - 6 * c21.x * c13.x * c22.x * c13y2 * c22.y + 6 * c20.x * c13x2 * c13.y * c22.y * c23.y + 2 * c12x2 * c12.y * c13.x * c22.y * c23.y + 2 * c12x2 * c12.y * c22.x * c13.y * c23.y + 2 * c12x2 * c12.y * c13.y * c22.y * c23.x + 3 * c21.x * c22x2 * c13y3 + 3 * c21x2 * c13y3 * c23.x - 3 * c13.x * c21.y * c22x2 * c13y2 - 3 * c21x2 * c13.x * c13y2 * c23.y + c13x2 * c22.x * c13.y * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c13x2 * c13.y * c23.x * (6 * c20.y * c22.y + 3 * c21y2) + c21.x * c13x2 * c13.y * (6 * c21.y * c23.y + 3 * c22y2) + c13x3 * (-2 * c20.y * c22.y * c23.y - c23.y * (2 * c20.y * c22.y + c21y2) - c21.y * (2 * c21.y * c23.y + c22y2) - c22.y * (2 * c20.y * c23.y + 2 * c21.y * c22.y)), c11.x * c21.x * c12.y * c13.x * c13.y * c23.y + c11.x * c12.y * c13.x * c21.y * c13.y * c23.x + c11.x * c12.y * c13.x * c22.x * c13.y * c22.y - c11.y * c12.x * c21.x * c13.x * c13.y * c23.y - c11.y * c12.x * c13.x * c21.y * c13.y * c23.x - c11.y * c12.x * c13.x * c22.x * c13.y * c22.y - 6 * c11.y * c21.x * c12.y * c13.x * c13.y * c23.x - 6 * c10.x * c21.x * c13y3 * c23.x + 6 * c20.x * c21.x * c13y3 * c23.x + 2 * c21.x * c12y3 * c13.x * c23.x + 6 * c10.x * c21.x * c13.x * c13y2 * c23.y + 6 * c10.x * c13.x * c21.y * c13y2 * c23.x + 6 * c10.x * c13.x * c22.x * c13y2 * c22.y + 6 * c10.y * c21.x * c13.x * c13y2 * c23.x - 3 * c11.x * c12.x * c21.x * c13y2 * c23.y - 3 * c11.x * c12.x * c21.y * c13y2 * c23.x - 3 * c11.x * c12.x * c22.x * c13y2 * c22.y + 2 * c11.x * c21.x * c12.y * c13y2 * c23.x + 4 * c11.y * c12.x * c21.x * c13y2 * c23.x - 6 * c10.y * c21.x * c13x2 * c13.y * c23.y - 6 * c10.y * c13x2 * c21.y * c13.y * c23.x - 6 * c10.y * c13x2 * c22.x * c13.y * c22.y - 6 * c20.x * c21.x * c13.x * c13y2 * c23.y - 6 * c20.x * c13.x * c21.y * c13y2 * c23.x - 6 * c20.x * c13.x * c22.x * c13y2 * c22.y + 3 * c11.y * c21.x * c12.y * c13x2 * c23.y - 3 * c11.y * c12.y * c13.x * c22x2 * c13.y + 3 * c11.y * c12.y * c13x2 * c21.y * c23.x + 3 * c11.y * c12.y * c13x2 * c22.x * c22.y - 2 * c12.x * c21.x * c12y2 * c13.x * c23.y - 2 * c12.x * c21.x * c12y2 * c13.y * c23.x - 2 * c12.x * c12y2 * c13.x * c21.y * c23.x - 2 * c12.x * c12y2 * c13.x * c22.x * c22.y - 6 * c20.y * c21.x * c13.x * c13y2 * c23.x - 6 * c21.x * c13.x * c21.y * c22.x * c13y2 + 6 * c20.y * c13x2 * c21.y * c13.y * c23.x + 2 * c12x2 * c21.x * c12.y * c13.y * c23.y + 2 * c12x2 * c12.y * c21.y * c13.y * c23.x + 2 * c12x2 * c12.y * c22.x * c13.y * c22.y - 3 * c10.x * c22x2 * c13y3 + 3 * c20.x * c22x2 * c13y3 + 3 * c21x2 * c22.x * c13y3 + c12y3 * c13.x * c22x2 + 3 * c10.y * c13.x * c22x2 * c13y2 + c11.x * c12.y * c22x2 * c13y2 + 2 * c11.y * c12.x * c22x2 * c13y2 - c12.x * c12y2 * c22x2 * c13.y - 3 * c20.y * c13.x * c22x2 * c13y2 - 3 * c21x2 * c13.x * c13y2 * c22.y + c12x2 * c12.y * c13.x * (2 * c21.y * c23.y + c22y2) + c11.x * c12.x * c13.x * c13.y * (6 * c21.y * c23.y + 3 * c22y2) + c21.x * c13x2 * c13.y * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c12x3 * c13.y * (-2 * c21.y * c23.y - c22y2) + c10.y * c13x3 * (6 * c21.y * c23.y + 3 * c22y2) + c11.y * c12.x * c13x2 * (-2 * c21.y * c23.y - c22y2) + c11.x * c12.y * c13x2 * (-4 * c21.y * c23.y - 2 * c22y2) + c10.x * c13x2 * c13.y * (-6 * c21.y * c23.y - 3 * c22y2) + c13x2 * c22.x * c13.y * (6 * c20.y * c22.y + 3 * c21y2) + c20.x * c13x2 * c13.y * (6 * c21.y * c23.y + 3 * c22y2) + c13x3 * (-2 * c20.y * c21.y * c23.y - c22.y * (2 * c20.y * c22.y + c21y2) - c20.y * (2 * c21.y * c23.y + c22y2) - c21.y * (2 * c20.y * c23.y + 2 * c21.y * c22.y)), -c10.x * c11.x * c12.y * c13.x * c13.y * c23.y + c10.x * c11.y * c12.x * c13.x * c13.y * c23.y + 6 * c10.x * c11.y * c12.y * c13.x * c13.y * c23.x - 6 * c10.y * c11.x * c12.x * c13.x * c13.y * c23.y - c10.y * c11.x * c12.y * c13.x * c13.y * c23.x + c10.y * c11.y * c12.x * c13.x * c13.y * c23.x + c11.x * c11.y * c12.x * c12.y * c13.x * c23.y - c11.x * c11.y * c12.x * c12.y * c13.y * c23.x + c11.x * c20.x * c12.y * c13.x * c13.y * c23.y + c11.x * c20.y * c12.y * c13.x * c13.y * c23.x + c11.x * c21.x * c12.y * c13.x * c13.y * c22.y + c11.x * c12.y * c13.x * c21.y * c22.x * c13.y - c20.x * c11.y * c12.x * c13.x * c13.y * c23.y - 6 * c20.x * c11.y * c12.y * c13.x * c13.y * c23.x - c11.y * c12.x * c20.y * c13.x * c13.y * c23.x - c11.y * c12.x * c21.x * c13.x * c13.y * c22.y - c11.y * c12.x * c13.x * c21.y * c22.x * c13.y - 6 * c11.y * c21.x * c12.y * c13.x * c22.x * c13.y - 6 * c10.x * c20.x * c13y3 * c23.x - 6 * c10.x * c21.x * c22.x * c13y3 - 2 * c10.x * c12y3 * c13.x * c23.x + 6 * c20.x * c21.x * c22.x * c13y3 + 2 * c20.x * c12y3 * c13.x * c23.x + 2 * c21.x * c12y3 * c13.x * c22.x + 2 * c10.y * c12x3 * c13.y * c23.y - 6 * c10.x * c10.y * c13.x * c13y2 * c23.x + 3 * c10.x * c11.x * c12.x * c13y2 * c23.y - 2 * c10.x * c11.x * c12.y * c13y2 * c23.x - 4 * c10.x * c11.y * c12.x * c13y2 * c23.x + 3 * c10.y * c11.x * c12.x * c13y2 * c23.x + 6 * c10.x * c10.y * c13x2 * c13.y * c23.y + 6 * c10.x * c20.x * c13.x * c13y2 * c23.y - 3 * c10.x * c11.y * c12.y * c13x2 * c23.y + 2 * c10.x * c12.x * c12y2 * c13.x * c23.y + 2 * c10.x * c12.x * c12y2 * c13.y * c23.x + 6 * c10.x * c20.y * c13.x * c13y2 * c23.x + 6 * c10.x * c21.x * c13.x * c13y2 * c22.y + 6 * c10.x * c13.x * c21.y * c22.x * c13y2 + 4 * c10.y * c11.x * c12.y * c13x2 * c23.y + 6 * c10.y * c20.x * c13.x * c13y2 * c23.x + 2 * c10.y * c11.y * c12.x * c13x2 * c23.y - 3 * c10.y * c11.y * c12.y * c13x2 * c23.x + 2 * c10.y * c12.x * c12y2 * c13.x * c23.x + 6 * c10.y * c21.x * c13.x * c22.x * c13y2 - 3 * c11.x * c20.x * c12.x * c13y2 * c23.y + 2 * c11.x * c20.x * c12.y * c13y2 * c23.x + c11.x * c11.y * c12y2 * c13.x * c23.x - 3 * c11.x * c12.x * c20.y * c13y2 * c23.x - 3 * c11.x * c12.x * c21.x * c13y2 * c22.y - 3 * c11.x * c12.x * c21.y * c22.x * c13y2 + 2 * c11.x * c21.x * c12.y * c22.x * c13y2 + 4 * c20.x * c11.y * c12.x * c13y2 * c23.x + 4 * c11.y * c12.x * c21.x * c22.x * c13y2 - 2 * c10.x * c12x2 * c12.y * c13.y * c23.y - 6 * c10.y * c20.x * c13x2 * c13.y * c23.y - 6 * c10.y * c20.y * c13x2 * c13.y * c23.x - 6 * c10.y * c21.x * c13x2 * c13.y * c22.y - 2 * c10.y * c12x2 * c12.y * c13.x * c23.y - 2 * c10.y * c12x2 * c12.y * c13.y * c23.x - 6 * c10.y * c13x2 * c21.y * c22.x * c13.y - c11.x * c11.y * c12x2 * c13.y * c23.y - 2 * c11.x * c11y2 * c13.x * c13.y * c23.x + 3 * c20.x * c11.y * c12.y * c13x2 * c23.y - 2 * c20.x * c12.x * c12y2 * c13.x * c23.y - 2 * c20.x * c12.x * c12y2 * c13.y * c23.x - 6 * c20.x * c20.y * c13.x * c13y2 * c23.x - 6 * c20.x * c21.x * c13.x * c13y2 * c22.y - 6 * c20.x * c13.x * c21.y * c22.x * c13y2 + 3 * c11.y * c20.y * c12.y * c13x2 * c23.x + 3 * c11.y * c21.x * c12.y * c13x2 * c22.y + 3 * c11.y * c12.y * c13x2 * c21.y * c22.x - 2 * c12.x * c20.y * c12y2 * c13.x * c23.x - 2 * c12.x * c21.x * c12y2 * c13.x * c22.y - 2 * c12.x * c21.x * c12y2 * c22.x * c13.y - 2 * c12.x * c12y2 * c13.x * c21.y * c22.x - 6 * c20.y * c21.x * c13.x * c22.x * c13y2 - c11y2 * c12.x * c12.y * c13.x * c23.x + 2 * c20.x * c12x2 * c12.y * c13.y * c23.y + 6 * c20.y * c13x2 * c21.y * c22.x * c13.y + 2 * c11x2 * c11.y * c13.x * c13.y * c23.y + c11x2 * c12.x * c12.y * c13.y * c23.y + 2 * c12x2 * c20.y * c12.y * c13.y * c23.x + 2 * c12x2 * c21.x * c12.y * c13.y * c22.y + 2 * c12x2 * c12.y * c21.y * c22.x * c13.y + c21x3 * c13y3 + 3 * c10x2 * c13y3 * c23.x - 3 * c10y2 * c13x3 * c23.y + 3 * c20x2 * c13y3 * c23.x + c11y3 * c13x2 * c23.x - c11x3 * c13y2 * c23.y - c11.x * c11y2 * c13x2 * c23.y + c11x2 * c11.y * c13y2 * c23.x - 3 * c10x2 * c13.x * c13y2 * c23.y + 3 * c10y2 * c13x2 * c13.y * c23.x - c11x2 * c12y2 * c13.x * c23.y + c11y2 * c12x2 * c13.y * c23.x - 3 * c21x2 * c13.x * c21.y * c13y2 - 3 * c20x2 * c13.x * c13y2 * c23.y + 3 * c20y2 * c13x2 * c13.y * c23.x + c11.x * c12.x * c13.x * c13.y * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c12x3 * c13.y * (-2 * c20.y * c23.y - 2 * c21.y * c22.y) + c10.y * c13x3 * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c11.y * c12.x * c13x2 * (-2 * c20.y * c23.y - 2 * c21.y * c22.y) + c12x2 * c12.y * c13.x * (2 * c20.y * c23.y + 2 * c21.y * c22.y) + c11.x * c12.y * c13x2 * (-4 * c20.y * c23.y - 4 * c21.y * c22.y) + c10.x * c13x2 * c13.y * (-6 * c20.y * c23.y - 6 * c21.y * c22.y) + c20.x * c13x2 * c13.y * (6 * c20.y * c23.y + 6 * c21.y * c22.y) + c21.x * c13x2 * c13.y * (6 * c20.y * c22.y + 3 * c21y2) + c13x3 * (-2 * c20.y * c21.y * c22.y - c20y2 * c23.y - c21.y * (2 * c20.y * c22.y + c21y2) - c20.y * (2 * c20.y * c23.y + 2 * c21.y * c22.y)), -c10.x * c11.x * c12.y * c13.x * c13.y * c22.y + c10.x * c11.y * c12.x * c13.x * c13.y * c22.y + 6 * c10.x * c11.y * c12.y * c13.x * c22.x * c13.y - 6 * c10.y * c11.x * c12.x * c13.x * c13.y * c22.y - c10.y * c11.x * c12.y * c13.x * c22.x * c13.y + c10.y * c11.y * c12.x * c13.x * c22.x * c13.y + c11.x * c11.y * c12.x * c12.y * c13.x * c22.y - c11.x * c11.y * c12.x * c12.y * c22.x * c13.y + c11.x * c20.x * c12.y * c13.x * c13.y * c22.y + c11.x * c20.y * c12.y * c13.x * c22.x * c13.y + c11.x * c21.x * c12.y * c13.x * c21.y * c13.y - c20.x * c11.y * c12.x * c13.x * c13.y * c22.y - 6 * c20.x * c11.y * c12.y * c13.x * c22.x * c13.y - c11.y * c12.x * c20.y * c13.x * c22.x * c13.y - c11.y * c12.x * c21.x * c13.x * c21.y * c13.y - 6 * c10.x * c20.x * c22.x * c13y3 - 2 * c10.x * c12y3 * c13.x * c22.x + 2 * c20.x * c12y3 * c13.x * c22.x + 2 * c10.y * c12x3 * c13.y * c22.y - 6 * c10.x * c10.y * c13.x * c22.x * c13y2 + 3 * c10.x * c11.x * c12.x * c13y2 * c22.y - 2 * c10.x * c11.x * c12.y * c22.x * c13y2 - 4 * c10.x * c11.y * c12.x * c22.x * c13y2 + 3 * c10.y * c11.x * c12.x * c22.x * c13y2 + 6 * c10.x * c10.y * c13x2 * c13.y * c22.y + 6 * c10.x * c20.x * c13.x * c13y2 * c22.y - 3 * c10.x * c11.y * c12.y * c13x2 * c22.y + 2 * c10.x * c12.x * c12y2 * c13.x * c22.y + 2 * c10.x * c12.x * c12y2 * c22.x * c13.y + 6 * c10.x * c20.y * c13.x * c22.x * c13y2 + 6 * c10.x * c21.x * c13.x * c21.y * c13y2 + 4 * c10.y * c11.x * c12.y * c13x2 * c22.y + 6 * c10.y * c20.x * c13.x * c22.x * c13y2 + 2 * c10.y * c11.y * c12.x * c13x2 * c22.y - 3 * c10.y * c11.y * c12.y * c13x2 * c22.x + 2 * c10.y * c12.x * c12y2 * c13.x * c22.x - 3 * c11.x * c20.x * c12.x * c13y2 * c22.y + 2 * c11.x * c20.x * c12.y * c22.x * c13y2 + c11.x * c11.y * c12y2 * c13.x * c22.x - 3 * c11.x * c12.x * c20.y * c22.x * c13y2 - 3 * c11.x * c12.x * c21.x * c21.y * c13y2 + 4 * c20.x * c11.y * c12.x * c22.x * c13y2 - 2 * c10.x * c12x2 * c12.y * c13.y * c22.y - 6 * c10.y * c20.x * c13x2 * c13.y * c22.y - 6 * c10.y * c20.y * c13x2 * c22.x * c13.y - 6 * c10.y * c21.x * c13x2 * c21.y * c13.y - 2 * c10.y * c12x2 * c12.y * c13.x * c22.y - 2 * c10.y * c12x2 * c12.y * c22.x * c13.y - c11.x * c11.y * c12x2 * c13.y * c22.y - 2 * c11.x * c11y2 * c13.x * c22.x * c13.y + 3 * c20.x * c11.y * c12.y * c13x2 * c22.y - 2 * c20.x * c12.x * c12y2 * c13.x * c22.y - 2 * c20.x * c12.x * c12y2 * c22.x * c13.y - 6 * c20.x * c20.y * c13.x * c22.x * c13y2 - 6 * c20.x * c21.x * c13.x * c21.y * c13y2 + 3 * c11.y * c20.y * c12.y * c13x2 * c22.x + 3 * c11.y * c21.x * c12.y * c13x2 * c21.y - 2 * c12.x * c20.y * c12y2 * c13.x * c22.x - 2 * c12.x * c21.x * c12y2 * c13.x * c21.y - c11y2 * c12.x * c12.y * c13.x * c22.x + 2 * c20.x * c12x2 * c12.y * c13.y * c22.y - 3 * c11.y * c21x2 * c12.y * c13.x * c13.y + 6 * c20.y * c21.x * c13x2 * c21.y * c13.y + 2 * c11x2 * c11.y * c13.x * c13.y * c22.y + c11x2 * c12.x * c12.y * c13.y * c22.y + 2 * c12x2 * c20.y * c12.y * c22.x * c13.y + 2 * c12x2 * c21.x * c12.y * c21.y * c13.y - 3 * c10.x * c21x2 * c13y3 + 3 * c20.x * c21x2 * c13y3 + 3 * c10x2 * c22.x * c13y3 - 3 * c10y2 * c13x3 * c22.y + 3 * c20x2 * c22.x * c13y3 + c21x2 * c12y3 * c13.x + c11y3 * c13x2 * c22.x - c11x3 * c13y2 * c22.y + 3 * c10.y * c21x2 * c13.x * c13y2 - c11.x * c11y2 * c13x2 * c22.y + c11.x * c21x2 * c12.y * c13y2 + 2 * c11.y * c12.x * c21x2 * c13y2 + c11x2 * c11.y * c22.x * c13y2 - c12.x * c21x2 * c12y2 * c13.y - 3 * c20.y * c21x2 * c13.x * c13y2 - 3 * c10x2 * c13.x * c13y2 * c22.y + 3 * c10y2 * c13x2 * c22.x * c13.y - c11x2 * c12y2 * c13.x * c22.y + c11y2 * c12x2 * c22.x * c13.y - 3 * c20x2 * c13.x * c13y2 * c22.y + 3 * c20y2 * c13x2 * c22.x * c13.y + c12x2 * c12.y * c13.x * (2 * c20.y * c22.y + c21y2) + c11.x * c12.x * c13.x * c13.y * (6 * c20.y * c22.y + 3 * c21y2) + c12x3 * c13.y * (-2 * c20.y * c22.y - c21y2) + c10.y * c13x3 * (6 * c20.y * c22.y + 3 * c21y2) + c11.y * c12.x * c13x2 * (-2 * c20.y * c22.y - c21y2) + c11.x * c12.y * c13x2 * (-4 * c20.y * c22.y - 2 * c21y2) + c10.x * c13x2 * c13.y * (-6 * c20.y * c22.y - 3 * c21y2) + c20.x * c13x2 * c13.y * (6 * c20.y * c22.y + 3 * c21y2) + c13x3 * (-2 * c20.y * c21y2 - c20y2 * c22.y - c20.y * (2 * c20.y * c22.y + c21y2)), -c10.x * c11.x * c12.y * c13.x * c21.y * c13.y + c10.x * c11.y * c12.x * c13.x * c21.y * c13.y + 6 * c10.x * c11.y * c21.x * c12.y * c13.x * c13.y - 6 * c10.y * c11.x * c12.x * c13.x * c21.y * c13.y - c10.y * c11.x * c21.x * c12.y * c13.x * c13.y + c10.y * c11.y * c12.x * c21.x * c13.x * c13.y - c11.x * c11.y * c12.x * c21.x * c12.y * c13.y + c11.x * c11.y * c12.x * c12.y * c13.x * c21.y + c11.x * c20.x * c12.y * c13.x * c21.y * c13.y + 6 * c11.x * c12.x * c20.y * c13.x * c21.y * c13.y + c11.x * c20.y * c21.x * c12.y * c13.x * c13.y - c20.x * c11.y * c12.x * c13.x * c21.y * c13.y - 6 * c20.x * c11.y * c21.x * c12.y * c13.x * c13.y - c11.y * c12.x * c20.y * c21.x * c13.x * c13.y - 6 * c10.x * c20.x * c21.x * c13y3 - 2 * c10.x * c21.x * c12y3 * c13.x + 6 * c10.y * c20.y * c13x3 * c21.y + 2 * c20.x * c21.x * c12y3 * c13.x + 2 * c10.y * c12x3 * c21.y * c13.y - 2 * c12x3 * c20.y * c21.y * c13.y - 6 * c10.x * c10.y * c21.x * c13.x * c13y2 + 3 * c10.x * c11.x * c12.x * c21.y * c13y2 - 2 * c10.x * c11.x * c21.x * c12.y * c13y2 - 4 * c10.x * c11.y * c12.x * c21.x * c13y2 + 3 * c10.y * c11.x * c12.x * c21.x * c13y2 + 6 * c10.x * c10.y * c13x2 * c21.y * c13.y + 6 * c10.x * c20.x * c13.x * c21.y * c13y2 - 3 * c10.x * c11.y * c12.y * c13x2 * c21.y + 2 * c10.x * c12.x * c21.x * c12y2 * c13.y + 2 * c10.x * c12.x * c12y2 * c13.x * c21.y + 6 * c10.x * c20.y * c21.x * c13.x * c13y2 + 4 * c10.y * c11.x * c12.y * c13x2 * c21.y + 6 * c10.y * c20.x * c21.x * c13.x * c13y2 + 2 * c10.y * c11.y * c12.x * c13x2 * c21.y - 3 * c10.y * c11.y * c21.x * c12.y * c13x2 + 2 * c10.y * c12.x * c21.x * c12y2 * c13.x - 3 * c11.x * c20.x * c12.x * c21.y * c13y2 + 2 * c11.x * c20.x * c21.x * c12.y * c13y2 + c11.x * c11.y * c21.x * c12y2 * c13.x - 3 * c11.x * c12.x * c20.y * c21.x * c13y2 + 4 * c20.x * c11.y * c12.x * c21.x * c13y2 - 6 * c10.x * c20.y * c13x2 * c21.y * c13.y - 2 * c10.x * c12x2 * c12.y * c21.y * c13.y - 6 * c10.y * c20.x * c13x2 * c21.y * c13.y - 6 * c10.y * c20.y * c21.x * c13x2 * c13.y - 2 * c10.y * c12x2 * c21.x * c12.y * c13.y - 2 * c10.y * c12x2 * c12.y * c13.x * c21.y - c11.x * c11.y * c12x2 * c21.y * c13.y - 4 * c11.x * c20.y * c12.y * c13x2 * c21.y - 2 * c11.x * c11y2 * c21.x * c13.x * c13.y + 3 * c20.x * c11.y * c12.y * c13x2 * c21.y - 2 * c20.x * c12.x * c21.x * c12y2 * c13.y - 2 * c20.x * c12.x * c12y2 * c13.x * c21.y - 6 * c20.x * c20.y * c21.x * c13.x * c13y2 - 2 * c11.y * c12.x * c20.y * c13x2 * c21.y + 3 * c11.y * c20.y * c21.x * c12.y * c13x2 - 2 * c12.x * c20.y * c21.x * c12y2 * c13.x - c11y2 * c12.x * c21.x * c12.y * c13.x + 6 * c20.x * c20.y * c13x2 * c21.y * c13.y + 2 * c20.x * c12x2 * c12.y * c21.y * c13.y + 2 * c11x2 * c11.y * c13.x * c21.y * c13.y + c11x2 * c12.x * c12.y * c21.y * c13.y + 2 * c12x2 * c20.y * c21.x * c12.y * c13.y + 2 * c12x2 * c20.y * c12.y * c13.x * c21.y + 3 * c10x2 * c21.x * c13y3 - 3 * c10y2 * c13x3 * c21.y + 3 * c20x2 * c21.x * c13y3 + c11y3 * c21.x * c13x2 - c11x3 * c21.y * c13y2 - 3 * c20y2 * c13x3 * c21.y - c11.x * c11y2 * c13x2 * c21.y + c11x2 * c11.y * c21.x * c13y2 - 3 * c10x2 * c13.x * c21.y * c13y2 + 3 * c10y2 * c21.x * c13x2 * c13.y - c11x2 * c12y2 * c13.x * c21.y + c11y2 * c12x2 * c21.x * c13.y - 3 * c20x2 * c13.x * c21.y * c13y2 + 3 * c20y2 * c21.x * c13x2 * c13.y, c10.x * c10.y * c11.x * c12.y * c13.x * c13.y - c10.x * c10.y * c11.y * c12.x * c13.x * c13.y + c10.x * c11.x * c11.y * c12.x * c12.y * c13.y - c10.y * c11.x * c11.y * c12.x * c12.y * c13.x - c10.x * c11.x * c20.y * c12.y * c13.x * c13.y + 6 * c10.x * c20.x * c11.y * c12.y * c13.x * c13.y + c10.x * c11.y * c12.x * c20.y * c13.x * c13.y - c10.y * c11.x * c20.x * c12.y * c13.x * c13.y - 6 * c10.y * c11.x * c12.x * c20.y * c13.x * c13.y + c10.y * c20.x * c11.y * c12.x * c13.x * c13.y - c11.x * c20.x * c11.y * c12.x * c12.y * c13.y + c11.x * c11.y * c12.x * c20.y * c12.y * c13.x + c11.x * c20.x * c20.y * c12.y * c13.x * c13.y - c20.x * c11.y * c12.x * c20.y * c13.x * c13.y - 2 * c10.x * c20.x * c12y3 * c13.x + 2 * c10.y * c12x3 * c20.y * c13.y - 3 * c10.x * c10.y * c11.x * c12.x * c13y2 - 6 * c10.x * c10.y * c20.x * c13.x * c13y2 + 3 * c10.x * c10.y * c11.y * c12.y * c13x2 - 2 * c10.x * c10.y * c12.x * c12y2 * c13.x - 2 * c10.x * c11.x * c20.x * c12.y * c13y2 - c10.x * c11.x * c11.y * c12y2 * c13.x + 3 * c10.x * c11.x * c12.x * c20.y * c13y2 - 4 * c10.x * c20.x * c11.y * c12.x * c13y2 + 3 * c10.y * c11.x * c20.x * c12.x * c13y2 + 6 * c10.x * c10.y * c20.y * c13x2 * c13.y + 2 * c10.x * c10.y * c12x2 * c12.y * c13.y + 2 * c10.x * c11.x * c11y2 * c13.x * c13.y + 2 * c10.x * c20.x * c12.x * c12y2 * c13.y + 6 * c10.x * c20.x * c20.y * c13.x * c13y2 - 3 * c10.x * c11.y * c20.y * c12.y * c13x2 + 2 * c10.x * c12.x * c20.y * c12y2 * c13.x + c10.x * c11y2 * c12.x * c12.y * c13.x + c10.y * c11.x * c11.y * c12x2 * c13.y + 4 * c10.y * c11.x * c20.y * c12.y * c13x2 - 3 * c10.y * c20.x * c11.y * c12.y * c13x2 + 2 * c10.y * c20.x * c12.x * c12y2 * c13.x + 2 * c10.y * c11.y * c12.x * c20.y * c13x2 + c11.x * c20.x * c11.y * c12y2 * c13.x - 3 * c11.x * c20.x * c12.x * c20.y * c13y2 - 2 * c10.x * c12x2 * c20.y * c12.y * c13.y - 6 * c10.y * c20.x * c20.y * c13x2 * c13.y - 2 * c10.y * c20.x * c12x2 * c12.y * c13.y - 2 * c10.y * c11x2 * c11.y * c13.x * c13.y - c10.y * c11x2 * c12.x * c12.y * c13.y - 2 * c10.y * c12x2 * c20.y * c12.y * c13.x - 2 * c11.x * c20.x * c11y2 * c13.x * c13.y - c11.x * c11.y * c12x2 * c20.y * c13.y + 3 * c20.x * c11.y * c20.y * c12.y * c13x2 - 2 * c20.x * c12.x * c20.y * c12y2 * c13.x - c20.x * c11y2 * c12.x * c12.y * c13.x + 3 * c10y2 * c11.x * c12.x * c13.x * c13.y + 3 * c11.x * c12.x * c20y2 * c13.x * c13.y + 2 * c20.x * c12x2 * c20.y * c12.y * c13.y - 3 * c10x2 * c11.y * c12.y * c13.x * c13.y + 2 * c11x2 * c11.y * c20.y * c13.x * c13.y + c11x2 * c12.x * c20.y * c12.y * c13.y - 3 * c20x2 * c11.y * c12.y * c13.x * c13.y - c10x3 * c13y3 + c10y3 * c13x3 + c20x3 * c13y3 - c20y3 * c13x3 - 3 * c10.x * c20x2 * c13y3 - c10.x * c11y3 * c13x2 + 3 * c10x2 * c20.x * c13y3 + c10.y * c11x3 * c13y2 + 3 * c10.y * c20y2 * c13x3 + c20.x * c11y3 * c13x2 + c10x2 * c12y3 * c13.x - 3 * c10y2 * c20.y * c13x3 - c10y2 * c12x3 * c13.y + c20x2 * c12y3 * c13.x - c11x3 * c20.y * c13y2 - c12x3 * c20y2 * c13.y - c10.x * c11x2 * c11.y * c13y2 + c10.y * c11.x * c11y2 * c13x2 - 3 * c10.x * c10y2 * c13x2 * c13.y - c10.x * c11y2 * c12x2 * c13.y + c10.y * c11x2 * c12y2 * c13.x - c11.x * c11y2 * c20.y * c13x2 + 3 * c10x2 * c10.y * c13.x * c13y2 + c10x2 * c11.x * c12.y * c13y2 + 2 * c10x2 * c11.y * c12.x * c13y2 - 2 * c10y2 * c11.x * c12.y * c13x2 - c10y2 * c11.y * c12.x * c13x2 + c11x2 * c20.x * c11.y * c13y2 - 3 * c10.x * c20y2 * c13x2 * c13.y + 3 * c10.y * c20x2 * c13.x * c13y2 + c11.x * c20x2 * c12.y * c13y2 - 2 * c11.x * c20y2 * c12.y * c13x2 + c20.x * c11y2 * c12x2 * c13.y - c11.y * c12.x * c20y2 * c13x2 - c10x2 * c12.x * c12y2 * c13.y - 3 * c10x2 * c20.y * c13.x * c13y2 + 3 * c10y2 * c20.x * c13x2 * c13.y + c10y2 * c12x2 * c12.y * c13.x - c11x2 * c20.y * c12y2 * c13.x + 2 * c20x2 * c11.y * c12.x * c13y2 + 3 * c20.x * c20y2 * c13x2 * c13.y - c20x2 * c12.x * c12y2 * c13.y - 3 * c20x2 * c20.y * c13.x * c13y2 + c12x2 * c20y2 * c12.y * c13.x);
            var roots = poly.getRootsInInterval(0, 1);
            for (var i = 0; i < roots.length; i++) {
                var s = roots[i];
                var xRoots = new Polynomial(c13.x, c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x - s * s * s * c23.x).getRoots();
                var yRoots = new Polynomial(c13.y, c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y - s * s * s * c23.y).getRoots();
                if (xRoots.length > 0 && yRoots.length > 0) {
                    var TOLERANCE = 0.0001;
                    checkRoots:
                        for (var j = 0; j < xRoots.length; j++) {
                            var xRoot = xRoots[j];
                            if (0 <= xRoot && xRoot <= 1) {
                                for (var k = 0; k < yRoots.length; k++) {
                                    if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                                        result.points.push(c23.multiply(s * s * s).add(c22.multiply(s * s).add(c21.multiply(s).add(c20))));
                                        break checkRoots;
                                    }
                                }
                            }
                        }
                }
            }
            return result;
        };
        Intersection.intersectBezier3Circle = function (p1, p2, p3, p4, c, r) {
            return Intersection.intersectBezier3Ellipse(p1, p2, p3, p4, c, r, r);
        };
        Intersection.intersectBezier3Ellipse = function (p1, p2, p3, p4, ec, rx, ry) {
            var a, b, c, d;
            var c3, c2, c1, c0;
            var result = new Intersection();
            a = p1.multiply(-1);
            b = p2.multiply(3);
            c = p3.multiply(-3);
            d = a.add(b.add(c.add(p4)));
            c3 = new Vector2D(d.x, d.y);
            a = p1.multiply(3);
            b = p2.multiply(-6);
            c = p3.multiply(3);
            d = a.add(b.add(c));
            c2 = new Vector2D(d.x, d.y);
            a = p1.multiply(-3);
            b = p2.multiply(3);
            c = a.add(b);
            c1 = new Vector2D(c.x, c.y);
            c0 = new Vector2D(p1.x, p1.y);
            var rxrx = rx * rx;
            var ryry = ry * ry;
            var poly = new Polynomial(c3.x * c3.x * ryry + c3.y * c3.y * rxrx, 2 * (c3.x * c2.x * ryry + c3.y * c2.y * rxrx), 2 * (c3.x * c1.x * ryry + c3.y * c1.y * rxrx) + c2.x * c2.x * ryry + c2.y * c2.y * rxrx, 2 * c3.x * ryry * (c0.x - ec.x) + 2 * c3.y * rxrx * (c0.y - ec.y) + 2 * (c2.x * c1.x * ryry + c2.y * c1.y * rxrx), 2 * c2.x * ryry * (c0.x - ec.x) + 2 * c2.y * rxrx * (c0.y - ec.y) + c1.x * c1.x * ryry + c1.y * c1.y * rxrx, 2 * c1.x * ryry * (c0.x - ec.x) + 2 * c1.y * rxrx * (c0.y - ec.y), c0.x * c0.x * ryry - 2 * c0.y * ec.y * rxrx - 2 * c0.x * ec.x * ryry + c0.y * c0.y * rxrx + ec.x * ec.x * ryry + ec.y * ec.y * rxrx - rxrx * ryry);
            var roots = poly.getRootsInInterval(0, 1);
            for (var i = 0; i < roots.length; i++) {
                var t = roots[i];
                result.points.push(c3.multiply(t * t * t).add(c2.multiply(t * t).add(c1.multiply(t).add(c0))));
            }
            return result;
        };
        Intersection.intersectBezier3Line = function (p1, p2, p3, p4, a1, a2) {
            var a, b, c, d;
            var c3, c2, c1, c0;
            var cl;
            var n;
            var min = a1.min(a2);
            var max = a1.max(a2);
            var result = new Intersection();
            a = p1.multiply(-1);
            b = p2.multiply(3);
            c = p3.multiply(-3);
            d = a.add(b.add(c.add(p4)));
            c3 = new Vector2D(d.x, d.y);
            a = p1.multiply(3);
            b = p2.multiply(-6);
            c = p3.multiply(3);
            d = a.add(b.add(c));
            c2 = new Vector2D(d.x, d.y);
            a = p1.multiply(-3);
            b = p2.multiply(3);
            c = a.add(b);
            c1 = new Vector2D(c.x, c.y);
            c0 = new Vector2D(p1.x, p1.y);
            n = new Vector2D(a1.y - a2.y, a2.x - a1.x);
            cl = a1.x * a2.y - a2.x * a1.y;
            var roots = new Polynomial(n.dot(c3), n.dot(c2), n.dot(c1), n.dot(c0) + cl).getRoots();
            for (var i = 0; i < roots.length; i++) {
                var t = roots[i];
                if (0 <= t && t <= 1) {
                    var p5 = p1.lerp(p2, t);
                    var p6 = p2.lerp(p3, t);
                    var p7 = p3.lerp(p4, t);
                    var p8 = p5.lerp(p6, t);
                    var p9 = p6.lerp(p7, t);
                    var p10 = p8.lerp(p9, t);
                    if (a1.x === a2.x) {
                        if (min.y <= p10.y && p10.y <= max.y) {
                            result.appendPoint(p10);
                        }
                    } else if (a1.y === a2.y) {
                        if (min.x <= p10.x && p10.x <= max.x) {
                            result.appendPoint(p10);
                        }
                    } else if (p10.gte(min) && p10.lte(max)) {
                        result.appendPoint(p10);
                    }
                }
            }
            return result;
        };
        Intersection.intersectBezier3Polygon = function (p1, p2, p3, p4, points) {
            var result = new Intersection();
            var length = points.length;
            for (var i = 0; i < length; i++) {
                var a1 = points[i];
                var a2 = points[(i + 1) % length];
                var inter = Intersection.intersectBezier3Line(p1, p2, p3, p4, a1, a2);
                result.appendPoints(inter.points);
            }
            return result;
        };
        Intersection.intersectBezier3Rectangle = function (p1, p2, p3, p4, r1, r2) {
            var min = r1.min(r2);
            var max = r1.max(r2);
            var topRight = new Vector2D(max.x, min.y);
            var bottomLeft = new Vector2D(min.x, max.y);
            var inter1 = Intersection.intersectBezier3Line(p1, p2, p3, p4, min, topRight);
            var inter2 = Intersection.intersectBezier3Line(p1, p2, p3, p4, topRight, max);
            var inter3 = Intersection.intersectBezier3Line(p1, p2, p3, p4, max, bottomLeft);
            var inter4 = Intersection.intersectBezier3Line(p1, p2, p3, p4, bottomLeft, min);
            var result = new Intersection();
            result.appendPoints(inter1.points);
            result.appendPoints(inter2.points);
            result.appendPoints(inter3.points);
            result.appendPoints(inter4.points);
            return result;
        };
        Intersection.intersectCircleCircle = function (c1, r1, c2, r2) {
            var result;
            var r_max = r1 + r2;
            var r_min = Math.abs(r1 - r2);
            var c_dist = c1.distanceFrom(c2);
            if (c_dist > r_max) {
                result = new Intersection('Outside');
            } else if (c_dist < r_min) {
                result = new Intersection('Inside');
            } else {
                result = new Intersection('Intersection');
                var a = (r1 * r1 - r2 * r2 + c_dist * c_dist) / (2 * c_dist);
                var h = Math.sqrt(r1 * r1 - a * a);
                var p = c1.lerp(c2, a / c_dist);
                var b = h / c_dist;
                result.points.push(new Vector2D(p.x - b * (c2.y - c1.y), p.y + b * (c2.x - c1.x)));
                result.points.push(new Vector2D(p.x + b * (c2.y - c1.y), p.y - b * (c2.x - c1.x)));
            }
            return result;
        };
        Intersection.intersectCircleEllipse = function (cc, r, ec, rx, ry) {
            return Intersection.intersectEllipseEllipse(cc, r, r, ec, rx, ry);
        };
        Intersection.intersectCircleLine = function (c, r, a1, a2) {
            var result;
            var a = (a2.x - a1.x) * (a2.x - a1.x) + (a2.y - a1.y) * (a2.y - a1.y);
            var b = 2 * ((a2.x - a1.x) * (a1.x - c.x) + (a2.y - a1.y) * (a1.y - c.y));
            var cc = c.x * c.x + c.y * c.y + a1.x * a1.x + a1.y * a1.y - 2 * (c.x * a1.x + c.y * a1.y) - r * r;
            var deter = b * b - 4 * a * cc;
            if (deter < 0) {
                result = new Intersection('Outside');
            } else if (deter === 0) {
                result = new Intersection('Tangent');
            } else {
                var e = Math.sqrt(deter);
                var u1 = (-b + e) / (2 * a);
                var u2 = (-b - e) / (2 * a);
                if ((u1 < 0 || u1 > 1) && (u2 < 0 || u2 > 1)) {
                    if (u1 < 0 && u2 < 0 || u1 > 1 && u2 > 1) {
                        result = new Intersection('Outside');
                    } else {
                        result = new Intersection('Inside');
                    }
                } else {
                    result = new Intersection('Intersection');
                    if (0 <= u1 && u1 <= 1) {
                        result.points.push(a1.lerp(a2, u1));
                    }
                    if (0 <= u2 && u2 <= 1) {
                        result.points.push(a1.lerp(a2, u2));
                    }
                }
            }
            return result;
        };
        Intersection.intersectCirclePolygon = function (c, r, points) {
            var result = new Intersection();
            var length = points.length;
            var inter;
            for (var i = 0; i < length; i++) {
                var a1 = points[i];
                var a2 = points[(i + 1) % length];
                inter = Intersection.intersectCircleLine(c, r, a1, a2);
                result.appendPoints(inter.points);
            }
            if (result.points.length > 0) {
                result.status = 'Intersection';
            } else {
                result.status = inter.status;
            }
            return result;
        };
        Intersection.intersectCircleRectangle = function (c, r, r1, r2) {
            var min = r1.min(r2);
            var max = r1.max(r2);
            var topRight = new Vector2D(max.x, min.y);
            var bottomLeft = new Vector2D(min.x, max.y);
            var inter1 = Intersection.intersectCircleLine(c, r, min, topRight);
            var inter2 = Intersection.intersectCircleLine(c, r, topRight, max);
            var inter3 = Intersection.intersectCircleLine(c, r, max, bottomLeft);
            var inter4 = Intersection.intersectCircleLine(c, r, bottomLeft, min);
            var result = new Intersection();
            result.appendPoints(inter1.points);
            result.appendPoints(inter2.points);
            result.appendPoints(inter3.points);
            result.appendPoints(inter4.points);
            if (result.points.length > 0) {
                result.status = 'Intersection';
            } else {
                result.status = inter1.status;
            }
            return result;
        };
        Intersection.intersectEllipseEllipse = function (c1, rx1, ry1, c2, rx2, ry2) {
            var a = [
                ry1 * ry1,
                0,
                rx1 * rx1,
                -2 * ry1 * ry1 * c1.x,
                -2 * rx1 * rx1 * c1.y,
                ry1 * ry1 * c1.x * c1.x + rx1 * rx1 * c1.y * c1.y - rx1 * rx1 * ry1 * ry1
            ];
            var b = [
                ry2 * ry2,
                0,
                rx2 * rx2,
                -2 * ry2 * ry2 * c2.x,
                -2 * rx2 * rx2 * c2.y,
                ry2 * ry2 * c2.x * c2.x + rx2 * rx2 * c2.y * c2.y - rx2 * rx2 * ry2 * ry2
            ];
            var yPoly = Intersection.bezout(a, b);
            var yRoots = yPoly.getRoots();
            var epsilon = 0.001;
            var norm0 = (a[0] * a[0] + 2 * a[1] * a[1] + a[2] * a[2]) * epsilon;
            var norm1 = (b[0] * b[0] + 2 * b[1] * b[1] + b[2] * b[2]) * epsilon;
            var result = new Intersection();
            for (var y = 0; y < yRoots.length; y++) {
                var xPoly = new Polynomial(a[0], a[3] + yRoots[y] * a[1], a[5] + yRoots[y] * (a[4] + yRoots[y] * a[2]));
                var xRoots = xPoly.getRoots();
                for (var x = 0; x < xRoots.length; x++) {
                    var test = (a[0] * xRoots[x] + a[1] * yRoots[y] + a[3]) * xRoots[x] + (a[2] * yRoots[y] + a[4]) * yRoots[y] + a[5];
                    if (Math.abs(test) < norm0) {
                        test = (b[0] * xRoots[x] + b[1] * yRoots[y] + b[3]) * xRoots[x] + (b[2] * yRoots[y] + b[4]) * yRoots[y] + b[5];
                        if (Math.abs(test) < norm1) {
                            result.appendPoint(new Vector2D(xRoots[x], yRoots[y]));
                        }
                    }
                }
            }
            return result;
        };
        Intersection.intersectEllipseLine = function (c, rx, ry, a1, a2) {
            var result;
            var origin = new Vector2D(a1.x, a1.y);
            var dir = Vector2D.fromPoints(a1, a2);
            var center = new Vector2D(c.x, c.y);
            var diff = origin.subtract(center);
            var mDir = new Vector2D(dir.x / (rx * rx), dir.y / (ry * ry));
            var mDiff = new Vector2D(diff.x / (rx * rx), diff.y / (ry * ry));
            var a = dir.dot(mDir);
            var b = dir.dot(mDiff);
            c = diff.dot(mDiff) - 1;
            var d = b * b - a * c;
            if (d < 0) {
                result = new Intersection('Outside');
            } else if (d > 0) {
                var root = Math.sqrt(d);
                var t_a = (-b - root) / a;
                var t_b = (-b + root) / a;
                if ((t_a < 0 || 1 < t_a) && (t_b < 0 || 1 < t_b)) {
                    if (t_a < 0 && t_b < 0 || t_a > 1 && t_b > 1) {
                        result = new Intersection('Outside');
                    } else {
                        result = new Intersection('Inside');
                    }
                } else {
                    result = new Intersection('Intersection');
                    if (0 <= t_a && t_a <= 1) {
                        result.appendPoint(a1.lerp(a2, t_a));
                    }
                    if (0 <= t_b && t_b <= 1) {
                        result.appendPoint(a1.lerp(a2, t_b));
                    }
                }
            } else {
                var t = -b / a;
                if (0 <= t && t <= 1) {
                    result = new Intersection('Intersection');
                    result.appendPoint(a1.lerp(a2, t));
                } else {
                    result = new Intersection('Outside');
                }
            }
            return result;
        };
        Intersection.intersectEllipsePolygon = function (c, rx, ry, points) {
            var result = new Intersection();
            var length = points.length;
            for (var i = 0; i < length; i++) {
                var b1 = points[i];
                var b2 = points[(i + 1) % length];
                var inter = Intersection.intersectEllipseLine(c, rx, ry, b1, b2);
                result.appendPoints(inter.points);
            }
            return result;
        };
        Intersection.intersectEllipseRectangle = function (c, rx, ry, r1, r2) {
            var min = r1.min(r2);
            var max = r1.max(r2);
            var topRight = new Vector2D(max.x, min.y);
            var bottomLeft = new Vector2D(min.x, max.y);
            var inter1 = Intersection.intersectEllipseLine(c, rx, ry, min, topRight);
            var inter2 = Intersection.intersectEllipseLine(c, rx, ry, topRight, max);
            var inter3 = Intersection.intersectEllipseLine(c, rx, ry, max, bottomLeft);
            var inter4 = Intersection.intersectEllipseLine(c, rx, ry, bottomLeft, min);
            var result = new Intersection();
            result.appendPoints(inter1.points);
            result.appendPoints(inter2.points);
            result.appendPoints(inter3.points);
            result.appendPoints(inter4.points);
            return result;
        };
        Intersection.intersectLineLine = function (a1, a2, b1, b2) {
            var result;
            var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
            var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
            var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
            if (u_b !== 0) {
                var ua = ua_t / u_b;
                var ub = ub_t / u_b;
                if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                    result = new Intersection('Intersection');
                    result.points.push(new Vector2D(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
                } else {
                    result = new Intersection();
                }
            } else {
                if (ua_t === 0 || ub_t === 0) {
                    result = new Intersection('Coincident');
                } else {
                    result = new Intersection('Parallel');
                }
            }
            return result;
        };
        Intersection.intersectLinePolygon = function (a1, a2, points) {
            var result = new Intersection();
            var length = points.length;
            for (var i = 0; i < length; i++) {
                var b1 = points[i];
                var b2 = points[(i + 1) % length];
                var inter = Intersection.intersectLineLine(a1, a2, b1, b2);
                result.appendPoints(inter.points);
            }
            return result;
        };
        Intersection.intersectLineRectangle = function (a1, a2, r1, r2) {
            var min = r1.min(r2);
            var max = r1.max(r2);
            var topRight = new Vector2D(max.x, min.y);
            var bottomLeft = new Vector2D(min.x, max.y);
            var inter1 = Intersection.intersectLineLine(min, topRight, a1, a2);
            var inter2 = Intersection.intersectLineLine(topRight, max, a1, a2);
            var inter3 = Intersection.intersectLineLine(max, bottomLeft, a1, a2);
            var inter4 = Intersection.intersectLineLine(bottomLeft, min, a1, a2);
            var result = new Intersection();
            result.appendPoints(inter1.points);
            result.appendPoints(inter2.points);
            result.appendPoints(inter3.points);
            result.appendPoints(inter4.points);
            return result;
        };
        Intersection.intersectPolygonPolygon = function (points1, points2) {
            var result = new Intersection();
            var length = points1.length;
            for (var i = 0; i < length; i++) {
                var a1 = points1[i];
                var a2 = points1[(i + 1) % length];
                var inter = Intersection.intersectLinePolygon(a1, a2, points2);
                result.appendPoints(inter.points);
            }
            return result;
        };
        Intersection.intersectPolygonRectangle = function (points, r1, r2) {
            var min = r1.min(r2);
            var max = r1.max(r2);
            var topRight = new Vector2D(max.x, min.y);
            var bottomLeft = new Vector2D(min.x, max.y);
            var inter1 = Intersection.intersectLinePolygon(min, topRight, points);
            var inter2 = Intersection.intersectLinePolygon(topRight, max, points);
            var inter3 = Intersection.intersectLinePolygon(max, bottomLeft, points);
            var inter4 = Intersection.intersectLinePolygon(bottomLeft, min, points);
            var result = new Intersection();
            result.appendPoints(inter1.points);
            result.appendPoints(inter2.points);
            result.appendPoints(inter3.points);
            result.appendPoints(inter4.points);
            return result;
        };
        Intersection.intersectRayRay = function (a1, a2, b1, b2) {
            var result;
            var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
            var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
            var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
            if (u_b !== 0) {
                var ua = ua_t / u_b;
                result = new Intersection('Intersection');
                result.points.push(new Vector2D(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
            } else {
                if (ua_t === 0 || ub_t === 0) {
                    result = new Intersection('Coincident');
                } else {
                    result = new Intersection('Parallel');
                }
            }
            return result;
        };
        Intersection.intersectRectangleRectangle = function (a1, a2, b1, b2) {
            var min = a1.min(a2);
            var max = a1.max(a2);
            var topRight = new Vector2D(max.x, min.y);
            var bottomLeft = new Vector2D(min.x, max.y);
            var inter1 = Intersection.intersectLineRectangle(min, topRight, b1, b2);
            var inter2 = Intersection.intersectLineRectangle(topRight, max, b1, b2);
            var inter3 = Intersection.intersectLineRectangle(max, bottomLeft, b1, b2);
            var inter4 = Intersection.intersectLineRectangle(bottomLeft, min, b1, b2);
            var result = new Intersection();
            result.appendPoints(inter1.points);
            result.appendPoints(inter2.points);
            result.appendPoints(inter3.points);
            result.appendPoints(inter4.points);
            return result;
        };
        Intersection.bezout = function (e1, e2) {
            var AB = e1[0] * e2[1] - e2[0] * e1[1];
            var AC = e1[0] * e2[2] - e2[0] * e1[2];
            var AD = e1[0] * e2[3] - e2[0] * e1[3];
            var AE = e1[0] * e2[4] - e2[0] * e1[4];
            var AF = e1[0] * e2[5] - e2[0] * e1[5];
            var BC = e1[1] * e2[2] - e2[1] * e1[2];
            var BE = e1[1] * e2[4] - e2[1] * e1[4];
            var BF = e1[1] * e2[5] - e2[1] * e1[5];
            var CD = e1[2] * e2[3] - e2[2] * e1[3];
            var DE = e1[3] * e2[4] - e2[3] * e1[4];
            var DF = e1[3] * e2[5] - e2[3] * e1[5];
            var BFpDE = BF + DE;
            var BEmCD = BE - CD;
            return new Polynomial(AB * BC - AC * AC, AB * BEmCD + AD * BC - 2 * AC * AE, AB * BFpDE + AD * BEmCD - AE * AE - 2 * AC * AF, AB * DF + AD * BFpDE - 2 * AE * AF, AD * DF - AF * AF);
        };
        return Intersection;
    }();
    exports.Intersection = Intersection;
    function vec(x, y) {
        if (y === void 0) {
            y = Number.NaN;
        }
        if (typeof x === 'number') {
            return new Vector2D(x, y);
        } else {
            return new Vector2D(x.x, x.y);
        }
    }
    exports.vec = vec;
    var Vector2D = function () {
        function Vector2D(x, y) {
            if (x === void 0) {
                x = 0;
            }
            if (y === void 0) {
                y = 0;
            }
            this.x = x;
            this.y = y;
        }
        Vector2D.prototype.add = function (that) {
            return new Vector2D(this.x + that.x, this.y + that.y);
        };
        Vector2D.prototype.addEquals = function (that) {
            this.x += that.x;
            this.y += that.y;
            return this;
        };
        Vector2D.prototype.scalarAdd = function (scalar) {
            return new Vector2D(this.x + scalar, this.y + scalar);
        };
        Vector2D.prototype.scalarAddEquals = function (scalar) {
            this.x += scalar;
            this.y += scalar;
            return this;
        };
        Vector2D.prototype.subtract = function (that) {
            return new Vector2D(this.x - that.x, this.y - that.y);
        };
        Vector2D.prototype.subtractEquals = function (that) {
            this.x -= that.x;
            this.y -= that.y;
            return this;
        };
        Vector2D.prototype.scalarSubtract = function (scalar) {
            return new Vector2D(this.x - scalar, this.y - scalar);
        };
        Vector2D.prototype.scalarSubtractEquals = function (scalar) {
            this.x -= scalar;
            this.y -= scalar;
            return this;
        };
        Vector2D.prototype.multiply = function (scalar) {
            return new Vector2D(this.x * scalar, this.y * scalar);
        };
        Vector2D.prototype.multiplyEquals = function (scalar) {
            this.x *= scalar;
            this.y *= scalar;
            return this;
        };
        Vector2D.prototype.divide = function (scalar) {
            return new Vector2D(this.x / scalar, this.y / scalar);
        };
        Vector2D.prototype.divideEquals = function (scalar) {
            this.x /= scalar;
            this.y /= scalar;
            return this;
        };
        Vector2D.prototype.eq = function (that) {
            return this.x === that.x && this.y === that.y;
        };
        Vector2D.prototype.lt = function (that) {
            return this.x < that.x && this.y < that.y;
        };
        Vector2D.prototype.lte = function (that) {
            return this.x <= that.x && this.y <= that.y;
        };
        Vector2D.prototype.gt = function (that) {
            return this.x > that.x && this.y > that.y;
        };
        Vector2D.prototype.gte = function (that) {
            return this.x >= that.x && this.y >= that.y;
        };
        Vector2D.prototype.lerp = function (that, t) {
            return new Vector2D(this.x + (that.x - this.x) * t, this.y + (that.y - this.y) * t);
        };
        Vector2D.prototype.distanceFrom = function (that) {
            var dx = this.x - that.x;
            var dy = this.y - that.y;
            return Math.sqrt(dx * dx + dy * dy);
        };
        Vector2D.prototype.min = function (that) {
            return new Vector2D(Math.min(this.x, that.x), Math.min(this.y, that.y));
        };
        Vector2D.prototype.max = function (that) {
            return new Vector2D(Math.max(this.x, that.x), Math.max(this.y, that.y));
        };
        Vector2D.prototype.toString = function () {
            return this.x + ',' + this.y;
        };
        Vector2D.prototype.setXY = function (x, y) {
            this.x = x;
            this.y = y;
        };
        Vector2D.prototype.setFromPoint = function (that) {
            this.x = that.x;
            this.y = that.y;
        };
        Vector2D.prototype.swap = function (that) {
            var x = this.x;
            var y = this.y;
            this.x = that.x;
            this.y = that.y;
            that.x = x;
            that.y = y;
        };
        Vector2D.prototype.length = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        Vector2D.prototype.dot = function (that) {
            return this.x * that.x + this.y * that.y;
        };
        Vector2D.prototype.cross = function (that) {
            return this.x * that.y - this.y * that.x;
        };
        Vector2D.prototype.unit = function () {
            return this.divide(this.length());
        };
        Vector2D.prototype.unitEquals = function () {
            this.divideEquals(this.length());
            return this;
        };
        Vector2D.prototype.perp = function () {
            return new Vector2D(-this.y, this.x);
        };
        Vector2D.fromPoints = function (p1, p2) {
            return new Vector2D(p2.x - p1.x, p2.y - p1.y);
        };
        return Vector2D;
    }();
    exports.Vector2D = Vector2D;
    var Polynomial = function () {
        function Polynomial() {
            var coefs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                coefs[_i - 0] = arguments[_i];
            }
            this.coefs = [];
            for (var i = coefs.length - 1; i >= 0; i--) {
                this.coefs.push(coefs[i]);
            }
        }
        Polynomial.prototype.eval = function (x) {
            var result = 0;
            for (var i = this.coefs.length - 1; i >= 0; i--) {
                result = result * x + this.coefs[i];
            }
            return result;
        };
        Polynomial.prototype.multiply = function (that) {
            var result = new Polynomial();
            var i;
            for (i = 0; i <= this.getDegree() + that.getDegree(); i++) {
                result.coefs.push(0);
            }
            for (i = 0; i <= this.getDegree(); i++) {
                for (var j = 0; j <= that.getDegree(); j++) {
                    result.coefs[i + j] += this.coefs[i] * that.coefs[j];
                }
            }
            return result;
        };
        Polynomial.prototype.divide_scalar = function (scalar) {
            for (var i = 0; i < this.coefs.length; i++) {
                this.coefs[i] /= scalar;
            }
        };
        Polynomial.prototype.simplify = function () {
            for (var i = this.getDegree(); i >= 0; i--) {
                if (Math.abs(this.coefs[i]) <= Polynomial.TOLERANCE) {
                    this.coefs.pop();
                } else {
                    break;
                }
            }
        };
        Polynomial.prototype.bisection = function (min, max) {
            var minValue = this.eval(min);
            var maxValue = this.eval(max);
            var result;
            if (Math.abs(minValue) <= Polynomial.TOLERANCE) {
                result = min;
            } else if (Math.abs(maxValue) <= Polynomial.TOLERANCE) {
                result = max;
            } else if (minValue * maxValue <= 0) {
                var tmp1 = Math.log(max - min);
                var tmp2 = Math.log(10) * Polynomial.ACCURACY;
                var iters = Math.ceil((tmp1 + tmp2) / Math.log(2));
                for (var i = 0; i < iters; i++) {
                    result = 0.5 * (min + max);
                    var value = this.eval(result);
                    if (Math.abs(value) <= Polynomial.TOLERANCE) {
                        break;
                    }
                    if (value * minValue < 0) {
                        max = result;
                        maxValue = value;
                    } else {
                        min = result;
                        minValue = value;
                    }
                }
            }
            return result;
        };
        Polynomial.prototype.toString = function () {
            var coefs = new Array();
            var signs = new Array();
            var i;
            for (i = this.coefs.length - 1; i >= 0; i--) {
                var value = this.coefs[i];
                if (value !== 0) {
                    var sign = value < 0 ? ' - ' : ' + ';
                    value = Math.abs(value);
                    if (i > 0 && value === 1) {
                        value = 'x';
                    } else {
                        value += 'x';
                    }
                    if (i > 1) {
                        value += '^' + i;
                    }
                    signs.push(sign);
                    coefs.push(value);
                }
            }
            signs[0] = signs[0] === ' + ' ? '' : '-';
            var result = '';
            for (i = 0; i < coefs.length; i++) {
                result += signs[i] + coefs[i];
            }
            return result;
        };
        Polynomial.prototype.getDegree = function () {
            return this.coefs.length - 1;
        };
        Polynomial.prototype.getDerivative = function () {
            var derivative = new Polynomial();
            for (var i = 1; i < this.coefs.length; i++) {
                derivative.coefs.push(i * this.coefs[i]);
            }
            return derivative;
        };
        Polynomial.prototype.getRoots = function () {
            var result;
            this.simplify();
            switch (this.getDegree()) {
            case 0:
                result = new Array();
                break;
            case 1:
                result = this.getLinearRoot();
                break;
            case 2:
                result = this.getQuadraticRoots();
                break;
            case 3:
                result = this.getCubicRoots();
                break;
            case 4:
                result = this.getQuarticRoots();
                break;
            default:
                result = new Array();
            }
            return result;
        };
        Polynomial.prototype.getRootsInInterval = function (min, max) {
            var roots = new Array(), i;
            var root;
            if (this.getDegree() === 1) {
                root = this.bisection(min, max);
                if (root != null) {
                    roots.push(root);
                }
            } else {
                var deriv = this.getDerivative();
                var droots = deriv.getRootsInInterval(min, max);
                if (droots.length > 0) {
                    root = this.bisection(min, droots[0]);
                    if (root != null) {
                        roots.push(root);
                    }
                    for (i = 0; i <= droots.length - 2; i++) {
                        root = this.bisection(droots[i], droots[i + 1]);
                        if (root != null) {
                            roots.push(root);
                        }
                    }
                    root = this.bisection(droots[droots.length - 1], max);
                    if (root != null) {
                        roots.push(root);
                    }
                } else {
                    root = this.bisection(min, max);
                    if (root != null) {
                        roots.push(root);
                    }
                }
            }
            return roots;
        };
        Polynomial.prototype.getLinearRoot = function () {
            var result = new Array();
            var a = this.coefs[1];
            if (a !== 0) {
                result.push(-this.coefs[0] / a);
            }
            return result;
        };
        Polynomial.prototype.getQuadraticRoots = function () {
            var results = new Array();
            if (this.getDegree() === 2) {
                var a = this.coefs[2];
                var b = this.coefs[1] / a;
                var c = this.coefs[0] / a;
                var d = b * b - 4 * c;
                if (d > 0) {
                    var e = Math.sqrt(d);
                    results.push(0.5 * (-b + e));
                    results.push(0.5 * (-b - e));
                } else if (d === 0) {
                    results.push(0.5 * -b);
                }
            }
            return results;
        };
        Polynomial.prototype.getCubicRoots = function () {
            var results = new Array(), disrim;
            if (this.getDegree() === 3) {
                var c3 = this.coefs[3];
                var c2 = this.coefs[2] / c3;
                var c1 = this.coefs[1] / c3;
                var c0 = this.coefs[0] / c3;
                var a = (3 * c1 - c2 * c2) / 3;
                var b = (2 * c2 * c2 * c2 - 9 * c1 * c2 + 27 * c0) / 27;
                var offset = c2 / 3;
                var discrim = b * b / 4 + a * a * a / 27;
                var halfB = b / 2;
                if (Math.abs(discrim) <= Polynomial.TOLERANCE) {
                    disrim = 0;
                }
                var tmp;
                if (discrim > 0) {
                    var e = Math.sqrt(discrim);
                    var root;
                    tmp = -halfB + e;
                    if (tmp >= 0) {
                        root = Math.pow(tmp, 1 / 3);
                    } else {
                        root = -Math.pow(-tmp, 1 / 3);
                    }
                    tmp = -halfB - e;
                    if (tmp >= 0) {
                        root += Math.pow(tmp, 1 / 3);
                    } else {
                        root -= Math.pow(-tmp, 1 / 3);
                    }
                    results.push(root - offset);
                } else if (discrim < 0) {
                    var distance = Math.sqrt(-a / 3);
                    var angle = Math.atan2(Math.sqrt(-discrim), -halfB) / 3;
                    var cos = Math.cos(angle);
                    var sin = Math.sin(angle);
                    var sqrt3 = Math.sqrt(3);
                    results.push(2 * distance * cos - offset);
                    results.push(-distance * (cos + sqrt3 * sin) - offset);
                    results.push(-distance * (cos - sqrt3 * sin) - offset);
                } else {
                    if (halfB >= 0) {
                        tmp = -Math.pow(halfB, 1 / 3);
                    } else {
                        tmp = Math.pow(-halfB, 1 / 3);
                    }
                    results.push(2 * tmp - offset);
                    results.push(-tmp - offset);
                }
            }
            return results;
        };
        Polynomial.prototype.getQuarticRoots = function () {
            var results = new Array();
            if (this.getDegree() === 4) {
                var c4 = this.coefs[4];
                var c3 = this.coefs[3] / c4;
                var c2 = this.coefs[2] / c4;
                var c1 = this.coefs[1] / c4;
                var c0 = this.coefs[0] / c4;
                var resolveRoots = new Polynomial(1, -c2, c3 * c1 - 4 * c0, -c3 * c3 * c0 + 4 * c2 * c0 - c1 * c1).getCubicRoots();
                var y = resolveRoots[0];
                var discrim = c3 * c3 / 4 - c2 + y;
                if (Math.abs(discrim) <= Polynomial.TOLERANCE) {
                    discrim = 0;
                }
                var t2;
                var d;
                if (discrim > 0) {
                    var e = Math.sqrt(discrim);
                    var t1 = 3 * c3 * c3 / 4 - e * e - 2 * c2;
                    t2 = (4 * c3 * c2 - 8 * c1 - c3 * c3 * c3) / (4 * e);
                    var plus = t1 + t2;
                    var minus = t1 - t2;
                    var f;
                    if (Math.abs(plus) <= Polynomial.TOLERANCE) {
                        plus = 0;
                    }
                    if (Math.abs(minus) <= Polynomial.TOLERANCE) {
                        minus = 0;
                    }
                    if (plus >= 0) {
                        f = Math.sqrt(plus);
                        results.push(-c3 / 4 + (e + f) / 2);
                        results.push(-c3 / 4 + (e - f) / 2);
                    }
                    if (minus >= 0) {
                        f = Math.sqrt(minus);
                        results.push(-c3 / 4 + (f - e) / 2);
                        results.push(-c3 / 4 - (f + e) / 2);
                    }
                } else if (discrim >= 0) {
                    t2 = y * y - 4 * c0;
                    if (t2 >= -Polynomial.TOLERANCE) {
                        if (t2 < 0) {
                            t2 = 0;
                        }
                        t2 = 2 * Math.sqrt(t2);
                        t1 = 3 * c3 * c3 / 4 - 2 * c2;
                        if (t1 + t2 >= Polynomial.TOLERANCE) {
                            d = Math.sqrt(t1 + t2);
                            results.push(-c3 / 4 + d / 2);
                            results.push(-c3 / 4 - d / 2);
                        }
                        if (t1 - t2 >= Polynomial.TOLERANCE) {
                            d = Math.sqrt(t1 - t2);
                            results.push(-c3 / 4 + d / 2);
                            results.push(-c3 / 4 - d / 2);
                        }
                    }
                }
            }
            return results;
        };
        Polynomial.TOLERANCE = 0.000001;
        Polynomial.ACCURACY = 6;
        return Polynomial;
    }();
    var Token = function () {
        function Token(type, text) {
            this.type = type;
            this.text = text;
        }
        Token.prototype.typeis = function (t) {
            return this.type === t;
        };
        return Token;
    }();
    var Path = function () {
        function Path(path) {
            this.segments = null;
            this.parseData(path);
        }
        Path.prototype.appendPathSegment = function (segment) {
            segment.previous = this.segments[this.segments.length - 1];
            this.segments.push(segment);
        };
        Path.prototype.parseData = function (d) {
            var tokens = this.tokenize(d);
            var index = 0;
            var token = tokens[index];
            var mode = 'BOD';
            this.segments = new Array();
            while (!token.typeis(Path.EOD)) {
                var param_length;
                var params = new Array();
                if (mode === 'BOD') {
                    if (token.text === 'M' || token.text === 'm') {
                        index++;
                        param_length = Path.PARAMS[token.text].length;
                        mode = token.text;
                    } else {
                        throw new Error('Path data must begin with a moveto command');
                    }
                } else {
                    if (token.typeis(Path.NUMBER)) {
                        param_length = Path.PARAMS[mode].length;
                    } else {
                        index++;
                        param_length = Path.PARAMS[token.text].length;
                        mode = token.text;
                    }
                }
                if (index + param_length < tokens.length) {
                    for (var i = index; i < index + param_length; i++) {
                        var n = tokens[i];
                        if (n.typeis(Path.NUMBER)) {
                            params[params.length] = n.text;
                        } else {
                            throw new Error('Parameter type is not a number: ' + mode + ',' + n.text);
                        }
                    }
                    var segment;
                    var length = this.segments.length;
                    var previous = length === 0 ? null : this.segments[length - 1];
                    switch (mode) {
                    case 'A':
                        segment = new AbsoluteArcPath(params, this, previous);
                        break;
                    case 'C':
                        segment = new AbsoluteCurveto3(params, this, previous);
                        break;
                    case 'c':
                        segment = new RelativeCurveto3(params, this, previous);
                        break;
                    case 'H':
                        segment = new AbsoluteHLineto(params, this, previous);
                        break;
                    case 'L':
                        segment = new AbsoluteLineto(params, this, previous);
                        break;
                    case 'l':
                        segment = new RelativeLineto(params, this, previous);
                        break;
                    case 'M':
                        segment = new AbsoluteMoveto(params, this, previous);
                        break;
                    case 'm':
                        segment = new RelativeMoveto(params, this, previous);
                        break;
                    case 'Q':
                        segment = new AbsoluteCurveto2(params, this, previous);
                        break;
                    case 'q':
                        segment = new RelativeCurveto2(params, this, previous);
                        break;
                    case 'S':
                        segment = new AbsoluteSmoothCurveto3(params, this, previous);
                        break;
                    case 's':
                        segment = new RelativeSmoothCurveto3(params, this, previous);
                        break;
                    case 'T':
                        segment = new AbsoluteSmoothCurveto2(params, this, previous);
                        break;
                    case 't':
                        segment = new RelativeSmoothCurveto2(params, this, previous);
                        break;
                    case 'Z':
                        segment = new RelativeClosePath(params, this, previous);
                        break;
                    case 'z':
                        segment = new RelativeClosePath(params, this, previous);
                        break;
                    default:
                        throw new Error('Unsupported segment type: ' + mode);
                    }
                    this.segments.push(segment);
                    index += param_length;
                    token = tokens[index];
                    if (mode === 'M') {
                        mode = 'L';
                    }
                    if (mode === 'm') {
                        mode = 'l';
                    }
                } else {
                    throw new Error('Path data ended before all parameters were found');
                }
            }
        };
        Path.prototype.tokenize = function (d) {
            var tokens = new Array();
            while (d !== '') {
                if (d.match(/^([ \t\r\n,]+)/)) {
                    d = d.substr(RegExp.$1.length);
                } else if (d.match(/^([aAcChHlLmMqQsStTvVzZ])/)) {
                    tokens[tokens.length] = new Token(Path.COMMAND, RegExp.$1);
                    d = d.substr(RegExp.$1.length);
                } else if (d.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) {
                    tokens[tokens.length] = new Token(Path.NUMBER, parseFloat(RegExp.$1));
                    d = d.substr(RegExp.$1.length);
                } else {
                    throw new Error('Unrecognized segment command: ' + d);
                }
            }
            tokens[tokens.length] = new Token(Path.EOD, null);
            return tokens;
        };
        Path.prototype.intersectShape = function (shape) {
            var result = new Intersection();
            for (var i = 0; i < this.segments.length; i++) {
                var inter = Intersection.intersectShapes(this.segments[i], shape);
                result.appendPoints(inter.points);
            }
            return result;
        };
        Path.prototype.asIntersectionParams = function () {
            return new IntersectionParams('Path', []);
        };
        Path.COMMAND = 0;
        Path.NUMBER = 1;
        Path.EOD = 2;
        Path.PARAMS = {
            A: [
                'rx',
                'ry',
                'x-axis-rotation',
                'large-arc-flag',
                'sweep-flag',
                'x',
                'y'
            ],
            a: [
                'rx',
                'ry',
                'x-axis-rotation',
                'large-arc-flag',
                'sweep-flag',
                'x',
                'y'
            ],
            C: [
                'x1',
                'y1',
                'x2',
                'y2',
                'x',
                'y'
            ],
            c: [
                'x1',
                'y1',
                'x2',
                'y2',
                'x',
                'y'
            ],
            H: ['x'],
            h: ['x'],
            L: [
                'x',
                'y'
            ],
            l: [
                'x',
                'y'
            ],
            M: [
                'x',
                'y'
            ],
            m: [
                'x',
                'y'
            ],
            Q: [
                'x1',
                'y1',
                'x',
                'y'
            ],
            q: [
                'x1',
                'y1',
                'x',
                'y'
            ],
            S: [
                'x2',
                'y2',
                'x',
                'y'
            ],
            s: [
                'x2',
                'y2',
                'x',
                'y'
            ],
            T: [
                'x',
                'y'
            ],
            t: [
                'x',
                'y'
            ],
            V: ['y'],
            v: ['y'],
            Z: [],
            z: []
        };
        return Path;
    }();
    exports.Path = Path;
    var AbsolutePathSegment = function () {
        function AbsolutePathSegment(command, params, owner, previous) {
            this.command = command;
            this.owner = owner;
            this.previous = previous;
            this.points = [];
            var index = 0;
            while (index < params.length) {
                this.points.push(new Vector2D(parseFloat(params[index]), parseFloat(params[index + 1])));
                index += 2;
            }
        }
        AbsolutePathSegment.prototype.toString = function () {
            var points = this.points.map(function (v) {
                return v.toString();
            });
            var command = '';
            if (this.previous.command !== this.command) {
                command = this.command;
            }
            return command + points.join(' ');
        };
        Object.defineProperty(AbsolutePathSegment.prototype, 'lastPoint', {
            get: function () {
                return this.points[this.points.length - 1];
            },
            enumerable: true,
            configurable: true
        });
        AbsolutePathSegment.prototype.asIntersectionParams = function () {
            return null;
        };
        return AbsolutePathSegment;
    }();
    var AbsoluteArcPath = function (_super) {
        __extends(AbsoluteArcPath, _super);
        function AbsoluteArcPath(params, owner, previous) {
            _super.call(this, 'A', params.slice(params.length - 2), owner, previous);
            this.rx = parseFloat(params.shift());
            this.ry = parseFloat(params.shift());
            this.angle = parseFloat(params.shift());
            this.arcFlag = parseFloat(params.shift());
            this.sweepFlag = parseFloat(params.shift());
        }
        AbsoluteArcPath.prototype.toString = function () {
            var command = '';
            if (this.previous.command !== this.command) {
                command = this.command;
            }
            return command + [
                this.rx,
                this.ry,
                this.angle,
                this.arcFlag,
                this.sweepFlag,
                this.points[0].toString()
            ].join(',');
        };
        AbsoluteArcPath.prototype.asIntersectionParams = function () {
            return new IntersectionParams('Ellipse', [
                this.center,
                this.rx,
                this.ry
            ]);
        };
        Object.defineProperty(AbsoluteArcPath.prototype, 'center', {
            get: function () {
                var startPoint = this.previous.lastPoint;
                var endPoint = this.points[0];
                var rx = this.rx;
                var ry = this.ry;
                var angle = this.angle * Math.PI / 180;
                var c = Math.cos(angle);
                var s = Math.sin(angle);
                var TOLERANCE = 0.000001;
                var halfDiff = startPoint.subtract(endPoint).divide(2);
                var x1p = halfDiff.x * c + halfDiff.y * s;
                var y1p = halfDiff.x * -s + halfDiff.y * c;
                var x1px1p = x1p * x1p;
                var y1py1p = y1p * y1p;
                var lambda = x1px1p / (rx * rx) + y1py1p / (ry * ry);
                var factor;
                if (lambda > 1) {
                    factor = Math.sqrt(lambda);
                    rx *= factor;
                    ry *= factor;
                }
                var rxrx = rx * rx;
                var ryry = ry * ry;
                var rxy1 = rxrx * y1py1p;
                var ryx1 = ryry * x1px1p;
                factor = (rxrx * ryry - rxy1 - ryx1) / (rxy1 + ryx1);
                if (Math.abs(factor) < TOLERANCE) {
                    factor = 0;
                }
                var sq = Math.sqrt(factor);
                if (this.arcFlag === this.sweepFlag) {
                    sq = -sq;
                }
                var mid = startPoint.add(endPoint).divide(2);
                var cxp = sq * rx * y1p / ry;
                var cyp = sq * -ry * x1p / rx;
                return new Vector2D(cxp * c - cyp * s + mid.x, cxp * s + cyp * c + mid.y);
            },
            enumerable: true,
            configurable: true
        });
        return AbsoluteArcPath;
    }(AbsolutePathSegment);
    var AbsoluteCurveto2 = function (_super) {
        __extends(AbsoluteCurveto2, _super);
        function AbsoluteCurveto2(params, owner, previous) {
            _super.call(this, 'Q', params, owner, previous);
        }
        Object.defineProperty(AbsoluteCurveto2.prototype, 'controlPoint', {
            get: function () {
                return this.points[0];
            },
            enumerable: true,
            configurable: true
        });
        AbsoluteCurveto2.prototype.asIntersectionParams = function () {
            return new IntersectionParams('Bezier2', [
                this.previous.lastPoint,
                this.points[0],
                this.points[1]
            ]);
        };
        return AbsoluteCurveto2;
    }(AbsolutePathSegment);
    var AbsoluteCurveto3 = function (_super) {
        __extends(AbsoluteCurveto3, _super);
        function AbsoluteCurveto3(params, owner, previous) {
            _super.call(this, 'C', params, owner, previous);
        }
        Object.defineProperty(AbsoluteCurveto3.prototype, 'lastControlPoint', {
            get: function () {
                return this.points[1];
            },
            enumerable: true,
            configurable: true
        });
        AbsoluteCurveto3.prototype.asIntersectionParams = function () {
            return new IntersectionParams('Bezier3', [
                this.previous.lastPoint,
                this.points[0],
                this.points[1],
                this.points[2]
            ]);
        };
        return AbsoluteCurveto3;
    }(AbsolutePathSegment);
    var AbsoluteHLineto = function (_super) {
        __extends(AbsoluteHLineto, _super);
        function AbsoluteHLineto(params, owner, previous) {
            _super.call(this, 'H', [
                params.pop(),
                previous.lastPoint.y
            ], owner, previous);
        }
        AbsoluteHLineto.prototype.toString = function () {
            var command = '';
            if (this.previous.command !== this.command) {
                command = this.command;
            }
            return command + this.points[0].x;
        };
        return AbsoluteHLineto;
    }(AbsolutePathSegment);
    var AbsoluteLineto = function (_super) {
        __extends(AbsoluteLineto, _super);
        function AbsoluteLineto(params, owner, previous) {
            _super.call(this, 'L', params, owner, previous);
        }
        AbsoluteLineto.prototype.toString = function () {
            var command = '';
            if (this.previous.command !== this.command && this.previous.command !== 'M') {
                command = this.command;
            }
            return command + this.points[0].toString();
        };
        AbsoluteLineto.prototype.asIntersectionParams = function () {
            return new IntersectionParams('Line', [
                this.previous.lastPoint,
                this.points[0]
            ]);
        };
        return AbsoluteLineto;
    }(AbsolutePathSegment);
    var AbsoluteMoveto = function (_super) {
        __extends(AbsoluteMoveto, _super);
        function AbsoluteMoveto(params, owner, previous) {
            _super.call(this, 'M', params, owner, previous);
        }
        AbsoluteMoveto.prototype.toString = function () {
            return 'M' + this.points[0].toString();
        };
        return AbsoluteMoveto;
    }(AbsolutePathSegment);
    var AbsoluteSmoothCurveto2 = function (_super) {
        __extends(AbsoluteSmoothCurveto2, _super);
        function AbsoluteSmoothCurveto2(params, owner, previous) {
            _super.call(this, 'T', params, owner, previous);
        }
        Object.defineProperty(AbsoluteSmoothCurveto2.prototype, 'controlPoint', {
            get: function () {
                var lastPoint = this.previous.lastPoint;
                var point;
                if (this.previous.command.match(/^[QqTt]$/)) {
                    var ctrlPoint = this.previous.controlPoint;
                    var diff = ctrlPoint.subtract(lastPoint);
                    point = lastPoint.subtract(diff);
                } else {
                    point = lastPoint;
                }
                return point;
            },
            enumerable: true,
            configurable: true
        });
        AbsoluteSmoothCurveto2.prototype.asIntersectionParams = function () {
            return new IntersectionParams('Bezier2', [
                this.previous.lastPoint,
                this.controlPoint,
                this.points[0]
            ]);
        };
        return AbsoluteSmoothCurveto2;
    }(AbsolutePathSegment);
    var AbsoluteSmoothCurveto3 = function (_super) {
        __extends(AbsoluteSmoothCurveto3, _super);
        function AbsoluteSmoothCurveto3(params, owner, previous) {
            _super.call(this, 'S', params, owner, previous);
        }
        Object.defineProperty(AbsoluteSmoothCurveto3.prototype, 'firstControlPoint', {
            get: function () {
                var lastPoint = this.previous.lastPoint;
                var point;
                if (this.previous.command.match(/^[SsCc]$/)) {
                    var lastControl = this.previous.lastControlPoint;
                    var diff = lastControl.subtract(lastPoint);
                    point = lastPoint.subtract(diff);
                } else {
                    point = lastPoint;
                }
                return point;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbsoluteSmoothCurveto3.prototype, 'lastControlPoint', {
            get: function () {
                return this.points[0];
            },
            enumerable: true,
            configurable: true
        });
        AbsoluteSmoothCurveto3.prototype.asIntersectionParams = function () {
            return new IntersectionParams('Bezier3', [
                this.previous.lastPoint,
                this.firstControlPoint,
                this.points[0],
                this.points[1]
            ]);
        };
        return AbsoluteSmoothCurveto3;
    }(AbsolutePathSegment);
    var RelativePathSegment = function () {
        function RelativePathSegment(command, params, owner, previous) {
            this.command = command;
            this.owner = owner;
            this.previous = previous;
            this.points = [];
            var lastPoint = this.previous ? this.previous.lastPoint : new Vector2D(0, 0);
            var index = 0;
            while (index < params.length) {
                var handle = new Vector2D(lastPoint.x + parseFloat(params[index]), lastPoint.y + parseFloat(params[index + 1]));
                this.points.push(handle);
                index += 2;
            }
        }
        RelativePathSegment.prototype.toString = function () {
            var points = new Array();
            var command = '';
            var lastPoint = this.previous ? this.previous.lastPoint : new Vector2D(0, 0);
            if (this.previous == null || this.previous.command !== this.command) {
                command = this.command;
            }
            for (var i = 0; i < this.points.length; i++) {
                var point = this.points[i].subtract(lastPoint);
                points.push(point.toString());
            }
            return command + points.join(' ');
        };
        Object.defineProperty(RelativePathSegment.prototype, 'lastPoint', {
            get: function () {
                return this.points[this.points.length - 1];
            },
            enumerable: true,
            configurable: true
        });
        RelativePathSegment.prototype.asIntersectionParams = function () {
            return null;
        };
        return RelativePathSegment;
    }();
    var RelativeClosePath = function (_super) {
        __extends(RelativeClosePath, _super);
        function RelativeClosePath(params, owner, previous) {
            _super.call(this, 'z', params, owner, previous);
        }
        Object.defineProperty(RelativeClosePath.prototype, 'lastPoint', {
            get: function () {
                var current = this.previous;
                var point;
                while (current) {
                    if (current.command.match(/^[mMzZ]$/)) {
                        point = current.lastPoint;
                        break;
                    }
                    current = current.previous;
                }
                return point;
            },
            enumerable: true,
            configurable: true
        });
        RelativeClosePath.prototype.asIntersectionParams = function () {
            return new IntersectionParams('Line', [
                this.previous.lastPoint,
                this.lastPoint
            ]);
        };
        return RelativeClosePath;
    }(RelativePathSegment);
    var RelativeCurveto2 = function (_super) {
        __extends(RelativeCurveto2, _super);
        function RelativeCurveto2(params, owner, previous) {
            _super.call(this, 'q', params, owner, previous);
        }
        Object.defineProperty(RelativeCurveto2.prototype, 'controlPoint', {
            get: function () {
                return this.points[0];
            },
            enumerable: true,
            configurable: true
        });
        RelativeCurveto2.prototype.asIntersectionParams = function () {
            return new IntersectionParams('Bezier2', [
                this.previous.lastPoint,
                this.points[0],
                this.points[1]
            ]);
        };
        return RelativeCurveto2;
    }(RelativePathSegment);
    var RelativeCurveto3 = function (_super) {
        __extends(RelativeCurveto3, _super);
        function RelativeCurveto3(params, owner, previous) {
            _super.call(this, 'c', params, owner, previous);
        }
        Object.defineProperty(RelativeCurveto3.prototype, 'lastControlPoint', {
            get: function () {
                return this.points[1];
            },
            enumerable: true,
            configurable: true
        });
        RelativeCurveto3.prototype.asIntersectionParams = function () {
            return new IntersectionParams('Bezier3', [
                this.previous.lastPoint,
                this.points[0],
                this.points[1],
                this.points[2]
            ]);
        };
        return RelativeCurveto3;
    }(RelativePathSegment);
    var RelativeLineto = function (_super) {
        __extends(RelativeLineto, _super);
        function RelativeLineto(params, owner, previous) {
            _super.call(this, 'l', params, owner, previous);
        }
        RelativeLineto.prototype.toString = function () {
            var lastPoint = this.previous ? this.previous.lastPoint : new Vector2D(0, 0);
            var point = this.points[0].subtract(lastPoint);
            var command = '';
            if (this.previous.command !== this.command && this.previous.command !== 'm') {
                command = this.command;
            }
            return command + point.toString();
        };
        RelativeLineto.prototype.asIntersectionParams = function () {
            return new IntersectionParams('Line', [
                this.previous.lastPoint,
                this.points[0]
            ]);
        };
        return RelativeLineto;
    }(RelativePathSegment);
    var RelativeMoveto = function (_super) {
        __extends(RelativeMoveto, _super);
        function RelativeMoveto(params, owner, previous) {
            _super.call(this, 'm', params, owner, previous);
        }
        RelativeMoveto.prototype.toString = function () {
            return 'm' + this.points[0].toString();
        };
        return RelativeMoveto;
    }(RelativePathSegment);
    var RelativeSmoothCurveto2 = function (_super) {
        __extends(RelativeSmoothCurveto2, _super);
        function RelativeSmoothCurveto2(params, owner, previous) {
            _super.call(this, 't', params, owner, previous);
        }
        Object.defineProperty(RelativeSmoothCurveto2.prototype, 'controlPoint', {
            get: function () {
                var lastPoint = this.previous.lastPoint;
                var point;
                if (this.previous.command.match(/^[QqTt]$/)) {
                    var ctrlPoint = this.previous.controlPoint;
                    var diff = ctrlPoint.subtract(lastPoint);
                    point = lastPoint.subtract(diff);
                } else {
                    point = lastPoint;
                }
                return point;
            },
            enumerable: true,
            configurable: true
        });
        RelativeSmoothCurveto2.prototype.asIntersectionParams = function () {
            return new IntersectionParams('Bezier2', [
                this.previous.lastPoint,
                this.controlPoint,
                this.points[0]
            ]);
        };
        return RelativeSmoothCurveto2;
    }(RelativePathSegment);
    var RelativeSmoothCurveto3 = function (_super) {
        __extends(RelativeSmoothCurveto3, _super);
        function RelativeSmoothCurveto3(params, owner, previous) {
            _super.call(this, 's', params, owner, previous);
        }
        Object.defineProperty(RelativeSmoothCurveto3.prototype, 'firstControlPoint', {
            get: function () {
                var lastPoint = this.previous.lastPoint;
                var point;
                if (this.previous.command.match(/^[SsCc]$/)) {
                    var lastControl = this.previous.lastControlPoint;
                    var diff = lastControl.subtract(lastPoint);
                    point = lastPoint.subtract(diff);
                } else {
                    point = lastPoint;
                }
                return point;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RelativeSmoothCurveto3.prototype, 'lastControlPoint', {
            get: function () {
                return this.points[0];
            },
            enumerable: true,
            configurable: true
        });
        RelativeSmoothCurveto3.prototype.asIntersectionParams = function () {
            return new IntersectionParams('Bezier3', [
                this.previous.lastPoint,
                this.firstControlPoint,
                this.points[0],
                this.points[1]
            ]);
        };
        return RelativeSmoothCurveto3;
    }(RelativePathSegment);
}(require, exports));
},{}],3:[function(require,module,exports){
(function (require, exports, plugin, C) {
    'use strict';
    var _impl = null;
    function getConnector() {
        if (_impl != null) {
            return _impl;
        }
        var adapters = plugin.list('ajax-adapter');
        var adapter = adapters[0];
        return _impl = adapter.load().then(function (p) {
            return p.factory();
        });
    }
    function send(url, data, method, expectedDataType) {
        if (data === void 0) {
            data = {};
        }
        if (method === void 0) {
            method = 'get';
        }
        if (expectedDataType === void 0) {
            expectedDataType = 'json';
        }
        return getConnector().then(function (c) {
            return c.send(url, data, method, expectedDataType);
        });
    }
    exports.send = send;
    function getJSON(url, data) {
        if (data === void 0) {
            data = {};
        }
        return send(url, data);
    }
    exports.getJSON = getJSON;
    function getData(url, data, expectedDataType) {
        if (data === void 0) {
            data = {};
        }
        if (expectedDataType === void 0) {
            expectedDataType = 'json';
        }
        return send(url, data, 'get', expectedDataType);
    }
    exports.getData = getData;
    function api2absURL(url, data) {
        if (data === void 0) {
            data = null;
        }
        url = '' + C.server_url + url + C.server_json_suffix;
        data = encodeParams(data);
        if (data) {
            url += (/\?/.test(url) ? '&' : '?') + data;
        }
        return url;
    }
    exports.api2absURL = api2absURL;
    function encodeParams(data) {
        if (data === void 0) {
            data = null;
        }
        if (data === null) {
            return null;
        }
        if (typeof data === 'string') {
            return encodeURIComponent(data);
        }
        var keys = Object.keys(data);
        if (keys.length === 0) {
            return null;
        }
        var s = [];
        function add(prefix, key, value) {
            if (Array.isArray(value)) {
                value.forEach(function (v, i) {
                    if (typeof v === 'object') {
                        add(prefix, key + '[' + i + ']', v);
                    } else {
                        add(prefix, key + '[]', v);
                    }
                });
            } else if (typeof value === 'object') {
                Object.keys(value).forEach(function (v) {
                    add(prefix, key + '[' + v + ']', value[v]);
                });
            } else {
                s.push(encodeURIComponent(prefix + key) + '=' + encodeURIComponent(value));
            }
        }
        keys.forEach(function (key) {
            add('', key, data[key]);
        });
        return s.join('&').replace(/%20/g, '+');
    }
    exports.encodeParams = encodeParams;
    function sendAPI(url, data, method, expectedDataType) {
        if (data === void 0) {
            data = {};
        }
        if (method === void 0) {
            method = 'get';
        }
        if (expectedDataType === void 0) {
            expectedDataType = 'json';
        }
        return send(api2absURL(url), data, method, expectedDataType);
    }
    exports.sendAPI = sendAPI;
    function getAPIJSON(url, data) {
        if (data === void 0) {
            data = {};
        }
        return getJSON(api2absURL(url), data);
    }
    exports.getAPIJSON = getAPIJSON;
    function getAPIData(url, data, expectedDataType) {
        if (data === void 0) {
            data = {};
        }
        if (expectedDataType === void 0) {
            expectedDataType = 'json';
        }
        return getData(api2absURL(url), data, expectedDataType);
    }
    exports.getAPIData = getAPIData;
}(require, exports, require('./plugin'), require('./main')));
},{"./main":13,"./plugin":19}],4:[function(require,module,exports){
(function (require, exports, events) {
    var ZoomLogic = function (_super) {
        __extends(ZoomLogic, _super);
        function ZoomLogic(v, meta) {
            _super.call(this);
            this.v = v;
            this.meta = meta;
        }
        ZoomLogic.prototype.zoomIn = function () {
            return this.zoom(1, 1);
        };
        ZoomLogic.prototype.zoomOut = function () {
            return this.zoom(-1, -1);
        };
        ZoomLogic.prototype.zoom = function (zoomX, zoomY) {
            if (!this.v) {
                return null;
            }
            function toDelta(x) {
                return x > 0 ? 0.2 : x < 0 ? -0.2 : 0;
            }
            var old = this.v.transform();
            var deltaX = toDelta(zoomX);
            var deltaY = toDelta(zoomY);
            return this.zoomSet(old.scale[0] + deltaX, old.scale[1] + deltaY);
        };
        Object.defineProperty(ZoomLogic.prototype, 'isWidthFixed', {
            get: function () {
                return this.meta && this.meta.scaling === 'height-only';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoomLogic.prototype, 'isHeightFixed', {
            get: function () {
                return this.meta && this.meta.scaling === 'width-only';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoomLogic.prototype, 'isFixedAspectRatio', {
            get: function () {
                return this.meta && this.meta.scaling === 'aspect';
            },
            enumerable: true,
            configurable: true
        });
        ZoomLogic.prototype.zoomSet = function (zoomX, zoomY) {
            if (!this.v) {
                return null;
            }
            var old = this.v.transform();
            var s = [
                zoomX,
                zoomY
            ];
            switch (this.meta ? this.meta.scaling : 'free') {
            case 'width-only':
                s[1] = old.scale[1];
                break;
            case 'height-only':
                s[0] = old.scale[0];
                break;
            }
            if (s[0] <= 0) {
                s[0] = 0.001;
            }
            if (s[1] <= 0) {
                s[1] = 0.001;
            }
            if (this.meta && this.meta.scaling === 'aspect') {
                s[0] = s[1] = Math.min.apply(Math, s);
            }
            this.fire('zoom', {
                scale: s,
                rotate: old.rotate
            }, old);
            return this.v.transform(s, old.rotate);
        };
        ZoomLogic.prototype.zoomTo = function (w, h) {
            if (!this.v) {
                return null;
            }
            var ori = this.v.rawSize;
            return this.zoomSet(w / ori[0], h / ori[1]);
        };
        return ZoomLogic;
    }(events.EventHandler);
    exports.ZoomLogic = ZoomLogic;
    var ZoomBehavior = function (_super) {
        __extends(ZoomBehavior, _super);
        function ZoomBehavior(node, v, meta) {
            var _this = this;
            _super.call(this, v, meta);
            this.node = node;
            node.addEventListener('mousewheel', function (event) {
                if (!_this.v) {
                    return;
                }
                var ctrlKey = event.ctrlKey;
                var shiftKey = event.shiftKey;
                var altKey = event.altKey;
                var m = event.wheelDelta;
                _this.zoom(m * (ctrlKey || altKey ? 1 : 0), m * (ctrlKey || shiftKey ? 1 : 0));
                if (ctrlKey || shiftKey || altKey) {
                    event.preventDefault();
                }
            });
        }
        return ZoomBehavior;
    }(ZoomLogic);
    exports.ZoomBehavior = ZoomBehavior;
}(require, exports, require('./event')));
},{"./event":7}],5:[function(require,module,exports){
(function (require, exports, C, ajax, plugins, datatypes, tables_impl) {
    'use strict';
    var available = plugins.list('datatype');
    var cacheById = {};
    var cacheByName = {};
    var cacheByFQName = {};
    function clearCache(dataset) {
        if (dataset) {
            var desc = dataset.desc || dataset;
            delete cacheById[desc.id];
            delete cacheByName[desc.name];
            delete cacheByFQName[desc.fqname];
        } else {
            cacheById = {};
            cacheByName = {};
            cacheByFQName = {};
        }
    }
    exports.clearCache = clearCache;
    function cached(desc, result) {
        cacheById[desc.id] = result;
        cacheByFQName[desc.fqname] = result;
        cacheByName[desc.name] = result;
        return result;
    }
    function fixId(id) {
        var r = id.replace(/[!#$%&'\(\)\*\+,\.\/:;<=>\?@\[\\\]\^`\{\|}~_]/g, ' ');
        r = r.toLowerCase();
        r = r.split(/\s/).map(function (s, i) {
            return i === 0 ? s : s[0].toUpperCase() + s.substr(1);
        }).join('');
        return r;
    }
    exports.fixId = fixId;
    exports.random_id = C.random_id;
    function transformEntry(desc) {
        if (desc === undefined) {
            return desc;
        }
        desc.id = desc.id || fixId(desc.name + exports.random_id(5));
        desc.fqname = desc.fqname || desc.name;
        if (desc.id in cacheById) {
            return cacheById[desc.id];
        }
        var plugin = available.filter(function (p) {
            return p.id === desc.type;
        });
        if (plugin.length === 0) {
            return cached(desc, Promise.resolve(new datatypes.DataTypeBase(desc)));
        }
        return cached(desc, plugin[0].load().then(function (p) {
            return p.factory(desc);
        }));
    }
    function list(query) {
        var f = typeof query === 'function' ? query : C.constantTrue;
        var q = typeof query !== 'undefined' && typeof query !== 'function' ? query : {};
        var r = ajax.getAPIJSON('/dataset/', q).then(function (descs) {
            return Promise.all(descs.map(function (desc) {
                return transformEntry(desc);
            }));
        });
        if (f !== C.constantTrue) {
            r = r.then(function (arr) {
                return arr.filter(f);
            });
        }
        return r;
    }
    exports.list = list;
    function convertToTree(list) {
        var root = {
            children: [],
            name: '/',
            data: null
        };
        list.forEach(function (entry) {
            var path = entry.desc.fqname.split('/');
            var act = root;
            path.forEach(function (node) {
                var next = act.children.filter(function (d) {
                    return d.name === node;
                })[0];
                if (!next) {
                    next = {
                        children: [],
                        name: node,
                        data: null
                    };
                    act.children.push(next);
                }
                act = next;
            });
            act.data = entry;
        });
        return root;
    }
    exports.convertToTree = convertToTree;
    function tree(query) {
        return list(query).then(convertToTree);
    }
    exports.tree = tree;
    function getFirst(query) {
        if (typeof query === 'string' || query instanceof RegExp) {
            return getFirstByName(query);
        }
        query.limit = 1;
        return list(query).then(function (result) {
            if (result.length === 0) {
                return Promise.reject({
                    error: 'nothing found, matching',
                    args: query
                });
            }
            return result[0];
        });
    }
    exports.getFirst = getFirst;
    function getFirstByName(name) {
        return getFirstWithCache(name, cacheByName, 'name');
    }
    exports.getFirstByName = getFirstByName;
    function getFirstByFQName(name) {
        return getFirstWithCache(name, cacheByFQName, 'fqname');
    }
    exports.getFirstByFQName = getFirstByFQName;
    function getFirstWithCache(name, cache, attr) {
        if (attr === void 0) {
            attr = 'name';
        }
        var r = null, inCache = Object.keys(cache).some(function (n) {
                if (n.match(name) != null) {
                    r = cache[n];
                    return true;
                }
                return false;
            });
        if (inCache) {
            return r;
        }
        return getFirst((_a = {}, _a[attr] = typeof name === 'string' ? name : name.source, _a));
        var _a;
    }
    function getById(id) {
        if (id in cacheById) {
            return cacheById[id];
        }
        return ajax.getAPIJSON('/dataset/' + id + '/desc').then(transformEntry);
    }
    function get(persisted) {
        if (typeof persisted === 'string') {
            return getById(persisted);
        }
        if (persisted.root) {
            return get(persisted.root).then(function (parent) {
                return parent ? parent.restore(persisted) : null;
            });
        } else {
            return Promise.reject('cant restore non root and non data id');
        }
    }
    exports.get = get;
    function create(desc) {
        return transformEntry(desc);
    }
    exports.create = create;
    function prepareData(desc, file) {
        var data = new FormData();
        data.append('desc', JSON.stringify(desc));
        if (file) {
            data.append('file', file);
        }
        return data;
    }
    function upload(desc, file) {
        var data = prepareData(desc, file);
        return ajax.sendAPI('/dataset/', data, 'post').then(transformEntry);
    }
    exports.upload = upload;
    function update(entry, desc, file) {
        var data = prepareData(desc, file);
        return ajax.sendAPI('/dataset/' + entry.desc.id, data, 'put').then(function (desc) {
            clearCache(entry);
            return transformEntry(desc);
        });
    }
    exports.update = update;
    function modify(entry, desc, file) {
        var data = prepareData(desc, file);
        return ajax.sendAPI('/dataset/' + entry.desc.id, data, 'post').then(function (desc) {
            clearCache(entry);
            return transformEntry(desc);
        });
    }
    exports.modify = modify;
    function remove(entry) {
        var desc = entry.desc || entry;
        return ajax.sendAPI('/dataset/' + desc.id, {}, 'delete').then(function (result) {
            clearCache(desc);
            return true;
        });
    }
    exports.remove = remove;
    function convertToTable(list) {
        return tables_impl.wrapObjects({
            id: '_data',
            name: 'data',
            fqname: 'custom/data',
            type: 'table',
            idtype: '_data',
            size: [
                list.length,
                4
            ],
            columns: [
                {
                    name: 'Name',
                    value: { type: 'string' },
                    getter: function (d) {
                        return d.desc.name;
                    }
                },
                {
                    name: 'Type',
                    value: { type: 'string' },
                    getter: function (d) {
                        return d.desc.type;
                    }
                },
                {
                    name: 'Dimensions',
                    value: { type: 'string' },
                    getter: function (d) {
                        return d.dim.join(' x ');
                    }
                },
                {
                    name: 'ID Types',
                    value: { type: 'string' },
                    getter: function (d) {
                        return d.idtypes.join(' x ');
                    }
                }
            ]
        }, list, function (d) {
            return d.desc.name;
        });
    }
    exports.convertToTable = convertToTable;
    function convertTableToVectors(list) {
        var r = [];
        list.forEach(function (d) {
            if (d.desc.type === 'table') {
                r.push.apply(r, d.cols());
            } else {
                r.push(d);
            }
        });
        return r;
    }
    exports.convertTableToVectors = convertTableToVectors;
    function listAsTable(tablesAsVectors) {
        if (tablesAsVectors === void 0) {
            tablesAsVectors = false;
        }
        var l = list();
        if (tablesAsVectors) {
            l = l.then(convertTableToVectors);
        }
        return l.then(convertToTable);
    }
    exports.listAsTable = listAsTable;
}(require, exports, require('./main'), require('./ajax'), require('./plugin'), require('./datatype'), require('./table_impl')));
},{"./ajax":3,"./datatype":6,"./main":13,"./plugin":19,"./table_impl":25}],6:[function(require,module,exports){
(function (require, exports, C, idtypes, ranges) {
    'use strict';
    function isDataType(v) {
        if (v instanceof DataTypeBase) {
            return true;
        }
        return v instanceof idtypes.SelectAble && C.isFunction(v.idView) && C.isFunction(v.persist) && C.isFunction(v.restore) && 'desc' in v && 'dim' in v;
    }
    exports.isDataType = isDataType;
    function assignData(node, data) {
        node.__data__ = data;
    }
    exports.assignData = assignData;
    var DataTypeBase = function (_super) {
        __extends(DataTypeBase, _super);
        function DataTypeBase(desc) {
            _super.call(this);
            this.desc = desc;
        }
        Object.defineProperty(DataTypeBase.prototype, 'dim', {
            get: function () {
                return [];
            },
            enumerable: true,
            configurable: true
        });
        DataTypeBase.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return Promise.resolve(ranges.none());
        };
        DataTypeBase.prototype.idView = function (idRange) {
            return Promise.resolve(this);
        };
        Object.defineProperty(DataTypeBase.prototype, 'idtypes', {
            get: function () {
                return [];
            },
            enumerable: true,
            configurable: true
        });
        DataTypeBase.prototype.persist = function () {
            return this.desc.id;
        };
        DataTypeBase.prototype.restore = function (persisted) {
            return this;
        };
        DataTypeBase.prototype.toString = function () {
            return this.persist();
        };
        return DataTypeBase;
    }(idtypes.SelectAble);
    exports.DataTypeBase = DataTypeBase;
    function transpose(m) {
        if (m.length === 0 || m[0].length === 0) {
            return [];
        }
        var r = m[0].map(function (i) {
            return [i];
        });
        for (var i = 1; i < m.length; ++i) {
            m[i].forEach(function (v, i) {
                return r[i].push(v);
            });
        }
        return r;
    }
    exports.transpose = transpose;
    function maskImpl(arr, missing) {
        if (Array.isArray(arr)) {
            var vs = arr;
            if (vs.indexOf(missing) >= 0) {
                return vs.map(function (v) {
                    return v === missing ? NaN : v;
                });
            }
        }
        return arr === missing ? NaN : arr;
    }
    function mask(arr, desc) {
        if (desc.type === 'int' && 'missing' in desc) {
            return maskImpl(arr, desc.missing);
        }
        return arr;
    }
    exports.mask = mask;
    function categorical2partitioning(data, categories, options) {
        if (options === void 0) {
            options = {};
        }
        var m = C.mixin({
            skipEmptyCategories: true,
            colors: ['gray'],
            labels: null,
            name: 'Partitioning'
        }, options);
        var groups = categories.map(function (d, i) {
            return {
                name: m.labels ? m.labels[i] : d,
                color: m.colors[Math.min(i, m.colors.length - 1)],
                indices: []
            };
        });
        data.forEach(function (d, j) {
            var i = categories.indexOf(d);
            if (i >= 0) {
                groups[i].indices.push(j);
            }
        });
        if (m.skipEmptyCategories) {
            groups = groups.filter(function (g) {
                return g.indices.length > 0;
            });
        }
        var granges = groups.map(function (g) {
            return new ranges.Range1DGroup(g.name, g.color, ranges.Range1D.from(g.indices));
        });
        return ranges.composite(m.name, granges);
    }
    exports.categorical2partitioning = categorical2partitioning;
    function defineDataType(name, functions) {
        function DataType(desc) {
            DataTypeBase.call(this, desc);
            if (C.isFunction(this.init)) {
                this.init.apply(this, C.argList(arguments));
            }
        }
        C.extendClass(DataType, DataTypeBase);
        DataType.prototype.toString = function () {
            return name;
        };
        DataType.prototype = C.mixin(DataType.prototype, functions);
        return DataType;
    }
    exports.defineDataType = defineDataType;
}(require, exports, require('./main'), require('./idtype'), require('./range')));
},{"./idtype":9,"./main":13,"./range":20}],7:[function(require,module,exports){
(function (require, exports) {
    'use strict';
    var Event = function () {
        function Event(type, args, target, delegateTarget) {
            this.type = type;
            this.args = args;
            this.target = target;
            this.delegateTarget = delegateTarget;
            this.timeStamp = new Date();
            this.stopped = false;
            this.stopedPropagation = false;
        }
        Object.defineProperty(Event.prototype, 'currentTarget', {
            get: function () {
                return this.target;
            },
            enumerable: true,
            configurable: true
        });
        Event.prototype.isImmediatePropagationStopped = function () {
            return this.stopped;
        };
        Event.prototype.stopImmediatePropagation = function () {
            this.stopped = true;
        };
        Event.prototype.isPropagationStopped = function () {
            return this.stopedPropagation;
        };
        Event.prototype.stopPropagation = function () {
            this.stopedPropagation = true;
        };
        return Event;
    }();
    var SingleEventHandler = function () {
        function SingleEventHandler(type) {
            this.type = type;
            this.listeners = [];
        }
        SingleEventHandler.prototype.push = function (listener) {
            this.listeners.push(listener);
        };
        SingleEventHandler.prototype.remove = function (listener) {
            var i = this.listeners.indexOf(listener);
            if (i >= 0) {
                this.listeners.splice(i, 1);
                return true;
            }
            return false;
        };
        SingleEventHandler.prototype.fire = function (event) {
            if (this.listeners.length === 0) {
                return false;
            }
            var largs = [event].concat(event.args);
            if (this.listeners.length === 1) {
                this.listeners[0].apply(event, largs);
            } else {
                var l = this.listeners.slice(), ll = l.length;
                for (var i = 0; i < ll && !event.isImmediatePropagationStopped(); ++i) {
                    l[i].apply(event, largs);
                }
            }
            return true;
        };
        Object.defineProperty(SingleEventHandler.prototype, 'length', {
            get: function () {
                return this.listeners.length;
            },
            enumerable: true,
            configurable: true
        });
        return SingleEventHandler;
    }();
    function createEvent(event, args, target) {
        return new Event(event, args, target, target);
    }
    function propagateEvent(event, target) {
        return new Event(event.type, event.args, target, event.target);
    }
    var EventHandler = function () {
        function EventHandler() {
            this.handlers = {};
        }
        EventHandler.prototype.on = function (events, handler) {
            var _this = this;
            if (typeof events === 'string') {
                events.split(',').forEach(function (event) {
                    if (!_this.handlers.hasOwnProperty(event)) {
                        _this.handlers[event] = new SingleEventHandler(event);
                    }
                    _this.handlers[event].push(handler);
                });
            } else {
                Object.keys(events).forEach(function (event) {
                    var h = events[event];
                    _this.on(event, h);
                });
            }
            return this;
        };
        EventHandler.prototype.off = function (events, handler) {
            var _this = this;
            if (typeof events === 'string') {
                events.split(',').forEach(function (event) {
                    if (_this.handlers.hasOwnProperty(event)) {
                        var h = _this.handlers[event];
                        h.remove(handler);
                        if (h.length === 0) {
                            delete _this.handlers[event];
                        }
                    }
                });
            } else {
                Object.keys(events).forEach(function (event) {
                    var h = events[event];
                    _this.off(event, h);
                });
            }
            return this;
        };
        EventHandler.prototype.list = function () {
            var _this = this;
            var r = {};
            Object.keys(this.handlers).forEach(function (type) {
                r[type] = _this.handlers[type].length;
            });
            return r;
        };
        EventHandler.prototype.fire = function (events) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            events.split(',').forEach(function (event) {
                _this.fireEvent(createEvent(event, args, _this));
            });
            return this;
        };
        EventHandler.prototype.fireEvent = function (event) {
            if (this.handlers.hasOwnProperty(event.type)) {
                var h = this.handlers[event.type];
                return h.fire(event);
            }
            return false;
        };
        EventHandler.prototype.propagate = function (progatee) {
            var _this = this;
            var events = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                events[_i - 1] = arguments[_i];
            }
            progatee.on(events.join(','), function (event) {
                if (!event.isPropagationStopped()) {
                    _this.fireEvent(propagateEvent(event, _this));
                }
            });
        };
        return EventHandler;
    }();
    exports.EventHandler = EventHandler;
    var global = new EventHandler();
    exports.on = global.on.bind(global);
    exports.off = global.off.bind(global);
    exports.fire = global.fire.bind(global);
    exports.list = global.list.bind(global);
}(require, exports));
},{}],8:[function(require,module,exports){
(function (require, exports, C, _2D) {
    exports.CORNER = [];
    exports.CORNER.N = exports.CORNER[0] = 'n';
    exports.CORNER.NE = exports.CORNER[1] = 'ne';
    exports.CORNER.E = exports.CORNER[2] = 'e';
    exports.CORNER.SE = exports.CORNER[3] = 'se';
    exports.CORNER.S = exports.CORNER[4] = 's';
    exports.CORNER.SW = exports.CORNER[5] = 'sw';
    exports.CORNER.W = exports.CORNER[6] = 'w';
    exports.CORNER.NW = exports.CORNER[7] = 'nw';
    function vec(x, y) {
        if (y === void 0) {
            y = Number.NaN;
        }
        return _2D.vec(x, y);
    }
    exports.vec = vec;
    var AShape = function () {
        function AShape() {
        }
        AShape.prototype.shift = function () {
            if (typeof arguments[0] === 'number') {
                this.shiftImpl(arguments[0], arguments[1]);
            } else if (Array.isArray(arguments[0])) {
                this.shiftImpl(arguments[0][0], arguments[0][1]);
            } else {
                this.shiftImpl(arguments[0].x, arguments[0].y);
            }
            return this;
        };
        Object.defineProperty(AShape.prototype, 'center', {
            get: function () {
                return this.bs().xy;
            },
            enumerable: true,
            configurable: true
        });
        AShape.prototype.aabb = function () {
            throw new Error('not implemented');
        };
        AShape.prototype.corner = function (corner) {
            var r = this.aabb();
            switch (corner) {
            case exports.CORNER.N:
                return vec2(r.cx, r.y);
            case exports.CORNER.S:
                return vec2(r.cx, r.y2);
            case exports.CORNER.W:
                return vec2(r.x, r.cy);
            case exports.CORNER.E:
                return vec2(r.x2, r.cy);
            case exports.CORNER.NE:
                return vec2(r.x2, r.y);
            case exports.CORNER.NW:
                return r.xy;
            case exports.CORNER.SE:
                return vec2(r.x2, r.y2);
            case exports.CORNER.SW:
                return vec2(r.x, r.y2);
            }
            return this.center;
        };
        AShape.prototype.bs = function () {
            throw new Error('not implemented');
        };
        AShape.prototype.shiftImpl = function (x, y) {
            throw new Error('Not Implemented');
        };
        AShape.prototype.asIntersectionParams = function () {
            throw new Error('Not Implemented');
        };
        AShape.prototype.intersects = function (other) {
            return _2D.Intersection.intersectShapes(this, other);
        };
        return AShape;
    }();
    exports.AShape = AShape;
    var Rect = function (_super) {
        __extends(Rect, _super);
        function Rect(x, y, w, h) {
            if (x === void 0) {
                x = 0;
            }
            if (y === void 0) {
                y = 0;
            }
            if (w === void 0) {
                w = 0;
            }
            if (h === void 0) {
                h = 0;
            }
            _super.call(this);
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }
        Rect.prototype.eq = function (that) {
            return this.x === that.x && this.y === that.y && this.w === that.w && this.h === that.h;
        };
        Rect.prototype.toString = function () {
            return 'Rect(x=' + this.x + ',y=' + this.y + ',w=' + this.w + ',h=' + this.h + ')';
        };
        Object.defineProperty(Rect.prototype, 'xy', {
            get: function () {
                return _2D.vec(this.x, this.y);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, 'x2y2', {
            get: function () {
                return _2D.vec(this.x2, this.y2);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, 'size', {
            get: function () {
                return _2D.vec(this.w, this.h);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, 'cx', {
            get: function () {
                return this.x + this.w / 2;
            },
            set: function (val) {
                this.x = val - this.w / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, 'cy', {
            get: function () {
                return this.y + this.h / 2;
            },
            set: function (val) {
                this.y = val - this.y / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, 'x2', {
            get: function () {
                return this.x + this.w;
            },
            set: function (val) {
                this.w = val - this.x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, 'y2', {
            get: function () {
                return this.y + this.h;
            },
            set: function (val) {
                this.h = val - this.y;
            },
            enumerable: true,
            configurable: true
        });
        Rect.prototype.shiftImpl = function (x, y) {
            this.x += x;
            this.y += y;
        };
        Rect.prototype.aabb = function () {
            return this;
        };
        Rect.prototype.bs = function () {
            return circle(this.cx, this.cy, Math.sqrt(this.w * 2 + this.h * 2));
        };
        Rect.prototype.transform = function (scale, rotate) {
            return rect(this.x * scale[0], this.y * scale[1], this.w * scale[0], this.h * scale[1]);
        };
        Rect.prototype.asIntersectionParams = function () {
            return {
                name: 'Rectangle',
                params: [
                    this.xy,
                    this.x2y2
                ]
            };
        };
        return Rect;
    }(AShape);
    exports.Rect = Rect;
    var Circle = function (_super) {
        __extends(Circle, _super);
        function Circle(x, y, radius) {
            if (x === void 0) {
                x = 0;
            }
            if (y === void 0) {
                y = 0;
            }
            if (radius === void 0) {
                radius = 0;
            }
            _super.call(this);
            this.x = x;
            this.y = y;
            this.radius = radius;
        }
        Object.defineProperty(Circle.prototype, 'xy', {
            get: function () {
                return _2D.vec(this.x, this.y);
            },
            enumerable: true,
            configurable: true
        });
        Circle.prototype.toString = function () {
            return 'Circle(x=' + this.x + ',y=' + this.y + ',radius=' + this.radius + ')';
        };
        Circle.prototype.shiftImpl = function (x, y) {
            this.x += x;
            this.y += y;
        };
        Circle.prototype.aabb = function () {
            return rect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        };
        Circle.prototype.bs = function () {
            return this;
        };
        Circle.prototype.transform = function (scale, rotate) {
            return circle(this.x * scale[0], this.y * scale[1], this.radius * (scale[0] + scale[1]) / 2);
        };
        Circle.prototype.asIntersectionParams = function () {
            return {
                name: 'Circle',
                params: [
                    this.xy,
                    this.radius
                ]
            };
        };
        return Circle;
    }(AShape);
    exports.Circle = Circle;
    var Ellipse = function (_super) {
        __extends(Ellipse, _super);
        function Ellipse(x, y, radiusX, radiusY) {
            if (x === void 0) {
                x = 0;
            }
            if (y === void 0) {
                y = 0;
            }
            if (radiusX === void 0) {
                radiusX = 0;
            }
            if (radiusY === void 0) {
                radiusY = 0;
            }
            _super.call(this);
            this.x = x;
            this.y = y;
            this.radiusX = radiusX;
            this.radiusY = radiusY;
        }
        Object.defineProperty(Ellipse.prototype, 'xy', {
            get: function () {
                return _2D.vec(this.x, this.y);
            },
            enumerable: true,
            configurable: true
        });
        Ellipse.prototype.toString = function () {
            return 'Ellipse(x=' + this.x + ',y=' + this.y + ',radiusX=' + this.radiusX + +',radiusY=' + this.radiusY + ')';
        };
        Ellipse.prototype.shiftImpl = function (x, y) {
            this.x += x;
            this.y += y;
        };
        Ellipse.prototype.aabb = function () {
            return rect(this.x - this.radiusX, this.y - this.radiusY, this.radiusX * 2, this.radiusY * 2);
        };
        Ellipse.prototype.bs = function () {
            return circle(this.x, this.y, Math.max(this.radiusX, this.radiusY));
        };
        Ellipse.prototype.transform = function (scale, rotate) {
            return new Ellipse(this.x * scale[0], this.y * scale[1], this.radiusX * scale[0], this.radiusX * scale[1]);
        };
        Ellipse.prototype.asIntersectionParams = function () {
            return {
                name: 'Ellipse',
                params: [
                    this.xy,
                    this.radiusX,
                    this.radiusY
                ]
            };
        };
        return Ellipse;
    }(AShape);
    exports.Ellipse = Ellipse;
    var Line = function (_super) {
        __extends(Line, _super);
        function Line(x1, y1, x2, y2) {
            if (x1 === void 0) {
                x1 = 0;
            }
            if (y1 === void 0) {
                y1 = 0;
            }
            if (x2 === void 0) {
                x2 = 0;
            }
            if (y2 === void 0) {
                y2 = 0;
            }
            _super.call(this);
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
        }
        Object.defineProperty(Line.prototype, 'xy', {
            get: function () {
                return _2D.vec(this.x1, this.y1);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Line.prototype, 'x1y1', {
            get: function () {
                return this.xy;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Line.prototype, 'x2y2', {
            get: function () {
                return _2D.vec(this.x2, this.y2);
            },
            enumerable: true,
            configurable: true
        });
        Line.prototype.toString = function () {
            return 'Line(x1=' + this.x1 + ',y1=' + this.y1 + ',x2=' + this.x2 + +',y2=' + this.y2 + ')';
        };
        Line.prototype.shiftImpl = function (x, y) {
            this.x1 += x;
            this.y1 += y;
            this.x2 += x;
            this.y2 += y;
        };
        Line.prototype.aabb = function () {
            return rect(Math.min(this.x1, this.x2), Math.min(this.y1, this.y2), Math.abs(this.x1 - this.x2), Math.abs(this.y1 - this.y2));
        };
        Line.prototype.bs = function () {
            var x = 0.5 * (this.x1 + this.x2);
            var y = 0.5 * (this.y1 + this.y2);
            return circle(x, y, Math.max(Math.abs(this.x1 - this.x2), Math.abs(this.y1 - this.y2)) / 2);
        };
        Line.prototype.transform = function (scale, rotate) {
            return new Line(this.x1 * scale[0], this.y1 * scale[1], this.x2 * scale[0], this.y2 * scale[1]);
        };
        Line.prototype.asIntersectionParams = function () {
            return {
                name: 'Line',
                params: [
                    this.xy,
                    this.x2y2
                ]
            };
        };
        return Line;
    }(AShape);
    exports.Line = Line;
    var Polygon = function (_super) {
        __extends(Polygon, _super);
        function Polygon(points) {
            if (points === void 0) {
                points = [];
            }
            _super.call(this);
            this.points = points;
        }
        Polygon.prototype.push = function () {
            if (arguments.length === 2 && typeof arguments[0] === 'number') {
                this.points.push(vec2(arguments[0], arguments[1]));
            } else {
                this.points.push.apply(this.points, C.argList(arguments));
            }
        };
        Polygon.prototype.toString = function () {
            return 'Polygon(' + this.points.join(',') + ')';
        };
        Polygon.prototype.shiftImpl = function (x, y) {
            this.points.forEach(function (p) {
                p.x += x;
                p.y += y;
            });
        };
        Object.defineProperty(Polygon.prototype, 'length', {
            get: function () {
                return this.points.length;
            },
            enumerable: true,
            configurable: true
        });
        Polygon.prototype.aabb = function () {
            var min_x = Number.POSITIVE_INFINITY, min_y = Number.POSITIVE_INFINITY, max_x = Number.NEGATIVE_INFINITY, max_y = Number.NEGATIVE_INFINITY;
            this.points.forEach(function (p) {
                if (p.x < min_x) {
                    min_x = p.x;
                }
                if (p.y < min_y) {
                    min_y = p.y;
                }
                if (p.x > max_x) {
                    max_x = p.x;
                }
                if (p.y > max_y) {
                    max_y = p.y;
                }
            });
            return rect(min_x, min_y, max_x - min_x, max_y - min_y);
        };
        Polygon.prototype.bs = function () {
            var mean_x = 0, mean_y = 0;
            this.points.forEach(function (p) {
                mean_x += p.x;
                mean_y += p.y;
            });
            mean_x /= this.length;
            mean_y /= this.length;
            var radius = 0;
            this.points.forEach(function (p) {
                var dx = p.x - mean_x;
                var dy = p.y - mean_y;
                var d = dx * dx + dy * dy;
                if (d > radius) {
                    radius = d;
                }
            });
            return circle(mean_x, mean_y, Math.sqrt(radius));
        };
        Polygon.prototype.transform = function (scale, rotate) {
            return polygon(this.points.map(function (p) {
                return vec2(p.x * scale[0], p.y * scale[1]);
            }));
        };
        Polygon.prototype.pointInPolygon = function (point) {
            var length = this.points.length;
            var counter = 0;
            var x_inter;
            var p1 = this.points[0];
            for (var i = 1; i <= length; i++) {
                var p2 = this.points[i % length];
                if (point.y > Math.min(p1.y, p2.y)) {
                    if (point.y <= Math.max(p1.y, p2.y)) {
                        if (point.x <= Math.max(p1.x, p2.x)) {
                            if (p1.y !== p2.y) {
                                x_inter = (point.y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x;
                                if (p1.x === p2.x || point.x <= x_inter) {
                                    counter++;
                                }
                            }
                        }
                    }
                }
                p1 = p2;
            }
            return counter % 2 === 1;
        };
        Object.defineProperty(Polygon.prototype, 'area', {
            get: function () {
                var area = 0;
                var length = this.points.length;
                for (var i = 0; i < length; i++) {
                    var h1 = this.points[i];
                    var h2 = this.points[(i + 1) % length];
                    area += h1.x * h2.y - h2.x * h1.y;
                }
                return area / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Polygon.prototype, 'centroid', {
            get: function () {
                var length = this.points.length;
                var area6x = 6 * this.area;
                var x_sum = 0;
                var y_sum = 0;
                for (var i = 0; i < length; i++) {
                    var p1 = this.points[i];
                    var p2 = this.points[(i + 1) % length];
                    var cross = p1.x * p2.y - p2.x * p1.y;
                    x_sum += (p1.x + p2.x) * cross;
                    y_sum += (p1.y + p2.y) * cross;
                }
                return vec2(x_sum / area6x, y_sum / area6x);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Polygon.prototype, 'isClockwise', {
            get: function () {
                return this.area < 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Polygon.prototype, 'isCounterClockwise', {
            get: function () {
                return this.area > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Polygon.prototype, 'isConcave', {
            get: function () {
                var positive = 0;
                var negative = 0;
                var length = this.points.length;
                for (var i = 0; i < length; i++) {
                    var p0 = this.points[i];
                    var p1 = this.points[(i + 1) % length];
                    var p2 = this.points[(i + 2) % length];
                    var v0 = _2D.Vector2D.fromPoints(p0, p1);
                    var v1 = _2D.Vector2D.fromPoints(p1, p2);
                    var cross = v0.cross(v1);
                    if (cross < 0) {
                        negative++;
                    } else {
                        positive++;
                    }
                }
                return negative !== 0 && positive !== 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Polygon.prototype, 'isConvex', {
            get: function () {
                return !this.isConvex;
            },
            enumerable: true,
            configurable: true
        });
        Polygon.prototype.asIntersectionParams = function () {
            return {
                name: 'Polygon',
                params: [this.points.slice()]
            };
        };
        return Polygon;
    }(AShape);
    exports.Polygon = Polygon;
    function vec2(x, y) {
        return _2D.vec(x, y);
    }
    exports.vec2 = vec2;
    function rect(x, y, w, h) {
        return new Rect(x, y, w, h);
    }
    exports.rect = rect;
    function circle(x, y, radius) {
        return new Circle(x, y, radius);
    }
    exports.circle = circle;
    function ellipse(x, y, radiusX, radiusY) {
        return new Ellipse(x, y, radiusX, radiusY);
    }
    exports.ellipse = ellipse;
    function line(x1, y1, x2, y2) {
        return new Line(x1, y1, x2, y2);
    }
    exports.line = line;
    function polygon() {
        if (Array.isArray(arguments[0])) {
            return new Polygon(arguments[0]);
        }
        return new Polygon(C.argList(arguments));
    }
    exports.polygon = polygon;
    function wrap(obj) {
        if (!obj) {
            return obj;
        }
        if (obj instanceof AShape) {
            return obj;
        }
        if (obj.hasOwnProperty('x') && obj.hasOwnProperty('y')) {
            if (obj.hasOwnProperty('radius') || obj.hasOwnProperty('r')) {
                return circle(obj.x, obj.y, obj.hasOwnProperty('radius') ? obj.radius : obj.r);
            }
            if ((obj.hasOwnProperty('radiusX') || obj.hasOwnProperty('rx')) && (obj.hasOwnProperty('radiusY') || obj.hasOwnProperty('ry'))) {
                return ellipse(obj.x, obj.y, obj.hasOwnProperty('radiusX') ? obj.radiusX : obj.rx, obj.hasOwnProperty('radiusY') ? obj.radiusY : obj.ry);
            }
            if (obj.hasOwnProperty('w') && obj.hasOwnProperty('h')) {
                return rect(obj.x, obj.y, obj.w, obj.h);
            }
            if (obj.hasOwnProperty('width') && obj.hasOwnProperty('height')) {
                return rect(obj.x, obj.y, obj.width, obj.height);
            }
        }
        if (obj.hasOwnProperty('x1') && obj.hasOwnProperty('y1') && obj.hasOwnProperty('x2') && obj.hasOwnProperty('y2')) {
            return line(obj.x1, obj.y1, obj.x2, obj.y2);
        }
        if (Array.isArray(obj) && obj.length > 0 && obj[0].hasOwnProperty('x') && obj[0].hasOwnProperty('y')) {
            return polygon(obj);
        }
        return obj;
    }
    exports.wrap = wrap;
}(require, exports, require('./main'), require('./2D')));
},{"./2D":2,"./main":13}],9:[function(require,module,exports){
(function (require, exports, C, ajax, events, ranges) {
    'use strict';
    var cache = {}, filledUp = false;
    exports.defaultSelectionType = 'selected';
    exports.hoverSelectionType = 'hovered';
    (function (SelectOperation) {
        SelectOperation[SelectOperation['SET'] = 0] = 'SET';
        SelectOperation[SelectOperation['ADD'] = 1] = 'ADD';
        SelectOperation[SelectOperation['REMOVE'] = 2] = 'REMOVE';
    }(exports.SelectOperation || (exports.SelectOperation = {})));
    var SelectOperation = exports.SelectOperation;
    function toSelectOperation(event) {
        var ctryKeyDown, shiftDown, altDown, metaDown;
        if (typeof event === 'boolean') {
            ctryKeyDown = event;
            altDown = arguments[1] || false;
            shiftDown = arguments[2] || false;
            metaDown = arguments[3] || false;
        } else {
            ctryKeyDown = event.ctrlKey || false;
            altDown = event.altKey || false;
            shiftDown = event.shiftKey || false;
            metaDown = event.metaKey || false;
        }
        if (ctryKeyDown || shiftDown) {
            return SelectOperation.ADD;
        } else if (altDown || metaDown) {
            return SelectOperation.REMOVE;
        }
        return SelectOperation.SET;
    }
    exports.toSelectOperation = toSelectOperation;
    var IDType = function (_super) {
        __extends(IDType, _super);
        function IDType(id, name, names, internal) {
            if (internal === void 0) {
                internal = false;
            }
            _super.call(this);
            this.id = id;
            this.name = name;
            this.names = names;
            this.internal = internal;
            this.sel = {};
            this.name2id_cache = {};
            this.id2name_cache = {};
        }
        IDType.prototype.persist = function () {
            var _this = this;
            var s = {};
            Object.keys(this.sel).forEach(function (type) {
                return s[type] = _this.sel[type].toString();
            });
            return {
                sel: s,
                name: this.name,
                names: this.names
            };
        };
        IDType.prototype.restore = function (persisted) {
            var _this = this;
            this.name = persisted.name;
            this.names = persisted.names;
            Object.keys(persisted.sel).forEach(function (type) {
                return _this.sel[type] = ranges.parse(persisted.sel[type]);
            });
            return this;
        };
        IDType.prototype.toString = function () {
            return this.name;
        };
        IDType.prototype.selectionTypes = function () {
            return Object.keys(this.sel);
        };
        IDType.prototype.selections = function (type) {
            if (type === void 0) {
                type = exports.defaultSelectionType;
            }
            if (this.sel.hasOwnProperty(type)) {
                return this.sel[type];
            }
            return this.sel[type] = ranges.none();
        };
        IDType.prototype.select = function (r_or_t, r_or_op, op) {
            if (op === void 0) {
                op = SelectOperation.SET;
            }
            function asRange(v) {
                if (Array.isArray(v)) {
                    return ranges.list(v);
                }
                return v;
            }
            var type = typeof r_or_t === 'string' ? r_or_t.toString() : exports.defaultSelectionType;
            var range = asRange(typeof r_or_t === 'string' ? r_or_op : r_or_t);
            op = typeof r_or_t === 'string' ? op : r_or_op ? r_or_op : SelectOperation.SET;
            return this.selectImpl(range, op, type);
        };
        IDType.prototype.selectImpl = function (range, op, type) {
            if (op === void 0) {
                op = SelectOperation.SET;
            }
            if (type === void 0) {
                type = exports.defaultSelectionType;
            }
            var b = this.selections(type);
            var new_ = ranges.none();
            switch (op) {
            case SelectOperation.SET:
                new_ = range;
                break;
            case SelectOperation.ADD:
                new_ = b.union(range);
                break;
            case SelectOperation.REMOVE:
                new_ = b.without(range);
                break;
            }
            if (b.eq(new_)) {
                return b;
            }
            this.sel[type] = new_;
            var added = op !== SelectOperation.REMOVE ? range : ranges.none();
            var removed = op === SelectOperation.ADD ? ranges.none() : op === SelectOperation.SET ? b : range;
            this.fire('select', type, new_, added, removed, b);
            this.fire('select-' + type, new_, added, removed, b);
            return b;
        };
        IDType.prototype.clear = function (type) {
            if (type === void 0) {
                type = exports.defaultSelectionType;
            }
            return this.selectImpl(ranges.none(), SelectOperation.SET, type);
        };
        IDType.prototype.fillMapCache = function (ids, names) {
            var _this = this;
            ids.forEach(function (id, i) {
                var name = names[i];
                _this.name2id_cache[name] = id;
                _this.id2name_cache[id] = name;
            });
        };
        IDType.prototype.map = function (names) {
            var _this = this;
            var to_resolve = names.filter(function (name) {
                return !(name in _this.name2id_cache);
            });
            if (to_resolve.length === 0) {
                return Promise.resolve(names.map(function (name) {
                    return _this.name2id_cache[name];
                }));
            }
            return ajax.getAPIJSON('/idtype/' + this.id + '/map', { ids: to_resolve }).then(function (ids) {
                to_resolve.forEach(function (name, i) {
                    _this.name2id_cache[name] = ids[i];
                });
                return names.map(function (name) {
                    return _this.name2id_cache[name];
                });
            });
        };
        IDType.prototype.unmap = function (ids_) {
            var _this = this;
            var ids = ids_ instanceof ranges.Range ? ids_ : ranges.list(ids_);
            var to_resolve = [];
            ids.dim(0).forEach(function (name) {
                return !(name in _this.id2name_cache) ? to_resolve.push(name) : null;
            });
            if (to_resolve.length === 0) {
                var r = [];
                ids.dim(0).forEach(function (name) {
                    return r.push(_this.id2name_cache[name]);
                });
                return Promise.resolve(r);
            }
            return ajax.getAPIJSON('/idtype/' + this.id + '/unmap', { ids: ranges.list(to_resolve).toString() }).then(function (result) {
                to_resolve.forEach(function (name, i) {
                    _this.id2name_cache[name] = result[i];
                });
                var r = [];
                ids.dim(0).forEach(function (name) {
                    return r.push(_this.id2name_cache[name]);
                });
                return r;
            });
        };
        return IDType;
    }(events.EventHandler);
    exports.IDType = IDType;
    function toId(elem) {
        return elem.id;
    }
    exports.toId = toId;
    function isId(id) {
        return function (elem) {
            return elem && elem.id === id;
        };
    }
    exports.isId = isId;
    var ObjectManager = function (_super) {
        __extends(ObjectManager, _super);
        function ObjectManager(id, name) {
            _super.call(this, id, name, name + 's', true);
            this.instances = [];
            this.pool = new C.IdPool();
        }
        ObjectManager.prototype.nextId = function (item) {
            var n = this.pool.checkOut();
            if (item) {
                item.id = n;
                this.instances[n] = item;
                this.fire('add', n, item);
            }
            return n;
        };
        ObjectManager.prototype.push = function () {
            var _this = this;
            var items = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                items[_i - 0] = arguments[_i];
            }
            items.forEach(function (item) {
                _this.instances[item.id] = item;
                _this.fire('add', item.id, item);
            });
        };
        ObjectManager.prototype.byId = function (id) {
            return this.instances[id];
        };
        ObjectManager.prototype.forEach = function (callbackfn, thisArg) {
            var _this = this;
            this.instances.forEach(function (item, i) {
                return _this.pool.isCheckedOut(i) ? callbackfn.call(thisArg, item) : null;
            });
        };
        Object.defineProperty(ObjectManager.prototype, 'entries', {
            get: function () {
                var _this = this;
                return this.instances.filter(function (item, i) {
                    return _this.pool.isCheckedOut(i);
                });
            },
            enumerable: true,
            configurable: true
        });
        ObjectManager.prototype.remove = function (item) {
            var _this = this;
            var old = null;
            if (typeof item.id === 'number') {
                item = item.id;
            }
            if (typeof item === 'number') {
                old = this.instances[item];
                delete this.instances[item];
                this.fire('remove', item, old);
            }
            this.selectionTypes().forEach(function (type) {
                _this.select(type, [item], SelectOperation.REMOVE);
            });
            this.pool.checkIn(item);
            return old;
        };
        ObjectManager.prototype.selectedObjects = function (type) {
            if (type === void 0) {
                type = exports.defaultSelectionType;
            }
            var s = this.selections(type);
            return s.filter(this.instances);
        };
        return ObjectManager;
    }(IDType);
    exports.ObjectManager = ObjectManager;
    var LocalIDAssigner = function () {
        function LocalIDAssigner() {
            this.pool = new C.IdPool();
            this.lookup = {};
        }
        LocalIDAssigner.prototype.unmapOne = function (id) {
            return this.unmap([id])[0];
        };
        LocalIDAssigner.prototype.unmap = function (ids) {
            var _this = this;
            var keys = Object.keys(this.lookup);
            return ids.map(function (id) {
                for (var k in keys) {
                    if (_this.lookup[k] === id) {
                        return k;
                    }
                }
                return null;
            });
        };
        LocalIDAssigner.prototype.mapOne = function (id) {
            if (id in this.lookup) {
                return this.lookup[id];
            }
            this.lookup[id] = this.pool.checkOut();
            return this.lookup[id];
        };
        LocalIDAssigner.prototype.map = function (ids) {
            return ranges.list.apply(ranges, ids.map(this.mapOne.bind(this)));
        };
        return LocalIDAssigner;
    }();
    exports.LocalIDAssigner = LocalIDAssigner;
    function createLocalAssigner() {
        var pool = new C.IdPool();
        var lookup = {};
        function mapOne(id) {
            if (id in lookup) {
                return lookup[id];
            }
            lookup[id] = pool.checkOut();
            return lookup[id];
        }
        return function (ids) {
            return ranges.list.apply(ranges, ids.map(mapOne));
        };
    }
    exports.createLocalAssigner = createLocalAssigner;
    function asRange(v) {
        if (Array.isArray(v)) {
            return ranges.list.apply(ranges, v);
        }
        return v;
    }
    function asSelectOperation(v) {
        if (!v) {
            return SelectOperation.SET;
        }
        if (typeof v === 'string') {
            switch (v.toLowerCase()) {
            case 'add':
                return SelectOperation.ADD;
            case 'remove':
                return SelectOperation.REMOVE;
            default:
                return SelectOperation.SET;
            }
        }
        return +v;
    }
    function fillWithNone(r, ndim) {
        while (r.ndim < ndim) {
            r.dims[r.ndim] = ranges.Range1D.none();
        }
        return r;
    }
    var SelectAble = function (_super) {
        __extends(SelectAble, _super);
        function SelectAble() {
            var _this = this;
            _super.apply(this, arguments);
            this.numSelectListeners = 0;
            this.selectionListeners = [];
            this.singleSelectionListener = function (event, type, act, added, removed) {
                _this.ids().then(function (ids) {
                    act = ids.indexOf(act);
                    added = ids.indexOf(added);
                    removed = ids.indexOf(removed);
                    if (act.isNone && added.isNone && removed.isNone) {
                        return;
                    }
                    fillWithNone(act, ids.ndim);
                    fillWithNone(added, ids.ndim);
                    fillWithNone(removed, ids.ndim);
                    _this.fire('select', type, act, added, removed);
                    _this.fire('select-' + type, act, added, removed);
                });
            };
            this.selectionCache = [];
            this.accumulateEvents = -1;
        }
        SelectAble.prototype.ids = function (range) {
            throw new Error('not implemented');
        };
        SelectAble.prototype.fromIdRange = function (idRange) {
            if (idRange === void 0) {
                idRange = ranges.all();
            }
            return this.ids().then(function (ids) {
                return ids.indexOf(idRange);
            });
        };
        Object.defineProperty(SelectAble.prototype, 'idtypes', {
            get: function () {
                throw new Error('not implemented');
            },
            enumerable: true,
            configurable: true
        });
        SelectAble.prototype.selectionListener = function (idtype, index, total) {
            var _this = this;
            var selectionListener = function (event, type, act, added, removed) {
                _this.selectionCache[index] = {
                    act: act,
                    added: added,
                    removed: removed
                };
                if (_this.accumulateEvents < 0 || ++_this.accumulateEvents === total) {
                    _this.fillAndSend(type, index);
                }
            };
            return selectionListener;
        };
        SelectAble.prototype.fillAndSend = function (type, trigger) {
            var _this = this;
            var ids = this.idtypes;
            var full = ids.map(function (id, i) {
                var entry = _this.selectionCache[i];
                if (entry) {
                    return entry;
                }
                return {
                    act: id.selections(type),
                    added: ranges.none(),
                    removed: ranges.none()
                };
            });
            var act = ranges.join(full.map(function (entry) {
                return entry.act;
            }));
            var added = ranges.join(full.map(function (entry) {
                return entry.added;
            }));
            var removed = ranges.join(full.map(function (entry) {
                return entry.removed;
            }));
            this.selectionCache = [];
            this.accumulateEvents = -1;
            this.ids().then(function (ids) {
                act = ids.indexOf(act);
                added = ids.indexOf(added);
                removed = ids.indexOf(removed);
                if (act.isNone && added.isNone && removed.isNone) {
                    return;
                }
                fillWithNone(act, ids.ndim);
                fillWithNone(added, ids.ndim);
                fillWithNone(removed, ids.ndim);
                _this.fire('select', type, act, added, removed);
                _this.fire('select-' + type, act, added, removed);
            });
        };
        SelectAble.prototype.on = function (events, handler) {
            var _this = this;
            if (typeof events === 'string' && events === 'select' || events.slice(0, 'select-'.length) === 'select-') {
                this.numSelectListeners++;
                if (this.numSelectListeners === 1) {
                    var idt = this.idtypes;
                    if (idt.length === 1) {
                        this.selectionListeners.push(this.singleSelectionListener);
                        idt[0].on('select', this.singleSelectionListener);
                    } else {
                        idt.forEach(function (idtype, i) {
                            var s = _this.selectionListener(idtype, i, idt.length);
                            _this.selectionListeners.push(s);
                            idtype.on('select', s);
                        });
                    }
                }
            }
            return _super.prototype.on.call(this, events, handler);
        };
        SelectAble.prototype.off = function (events, handler) {
            var _this = this;
            if (typeof events === 'string' && events === 'select' || events.match('^select-') === 'select-') {
                this.numSelectListeners--;
                if (this.numSelectListeners === 0) {
                    this.idtypes.forEach(function (idtype, i) {
                        return idtype.off('select', _this.selectionListeners[i]);
                    });
                    this.selectionListeners = [];
                }
            }
            return _super.prototype.off.call(this, events, handler);
        };
        SelectAble.prototype.selections = function (type) {
            var _this = this;
            if (type === void 0) {
                type = exports.defaultSelectionType;
            }
            return this.ids().then(function (ids) {
                var r = ranges.join(_this.idtypes.map(function (idtype) {
                    return idtype.selections(type);
                }));
                return ids.indexRangeOf(r);
            });
        };
        SelectAble.prototype.select = function () {
            var a = C.argList(arguments);
            var dim = typeof a[0] === 'number' ? +a.shift() : -1, type = typeof a[0] === 'string' ? a.shift() : exports.defaultSelectionType, range = asRange(a[0]), op = asSelectOperation(a[1]);
            return this.selectImpl(range, op, type, dim);
        };
        SelectAble.prototype.selectImpl = function (range, op, type, dim) {
            var _this = this;
            if (op === void 0) {
                op = SelectOperation.SET;
            }
            if (type === void 0) {
                type = exports.defaultSelectionType;
            }
            if (dim === void 0) {
                dim = -1;
            }
            return this.ids().then(function (ids) {
                var types = _this.idtypes;
                if (dim === -1) {
                    range = ids.preMultiply(range);
                    _this.accumulateEvents = 0;
                    var r = ranges.join(range.split().map(function (r, i) {
                        return types[i].select(type, r, op);
                    }));
                    if (_this.accumulateEvents > 0) {
                        _this.fillAndSend(type, -1);
                    }
                    while (r.ndim < types.length) {
                        r.dim(r.ndim);
                    }
                    return ids.indexRangeOf(r);
                } else {
                    ids = ids.split()[dim];
                    range = ids.preMultiply(range);
                    types[dim].select(type, range, op);
                    return ids.indexRangeOf(range);
                }
            });
        };
        SelectAble.prototype.clear = function () {
            var a = C.argList(arguments);
            var dim = typeof a[0] === 'number' ? +a.shift : -1;
            var type = typeof a[0] === 'string' ? a[0] : exports.defaultSelectionType;
            return this.selectImpl(ranges.none(), SelectOperation.SET, type, dim);
        };
        return SelectAble;
    }(events.EventHandler);
    exports.SelectAble = SelectAble;
    function fillUpData(entries) {
        entries.forEach(function (row) {
            var entry = cache[row.id];
            var new_ = false;
            if (entry) {
                entry.name = row.name;
                entry.names = row.names;
            } else {
                entry = new IDType(row.id, row.name, row.names);
                new_ = true;
            }
            cache[row.id] = entry;
            if (new_) {
                events.fire('register.idtype', entry);
            }
        });
    }
    function fillUp() {
        if (filledUp) {
            return;
        }
        filledUp = true;
        ajax.getAPIJSON('/idtype').then(function (c) {
            fillUpData(c);
            return cache;
        });
    }
    function toPlural(name) {
        if (name[name.length - 1] === 'y') {
            return name.slice(0, name.length - 1) + 'ies';
        }
        return name + 's';
    }
    function resolve(id) {
        if (id instanceof IDType) {
            return id;
        } else {
            return register(id, new IDType(id, id, toPlural(id)));
        }
    }
    exports.resolve = resolve;
    function list() {
        fillUp();
        return Object.keys(cache).map(function (d) {
            return cache[d];
        });
    }
    exports.list = list;
    function register(id, idtype) {
        fillUp();
        if (cache.hasOwnProperty(id)) {
            return cache[id];
        }
        cache[id] = idtype;
        events.fire('register.idtype', idtype);
        return idtype;
    }
    exports.register = register;
    function persist() {
        var r = {};
        Object.keys(cache).forEach(function (id) {
            r[id] = cache[id].persist();
        });
        return r;
    }
    exports.persist = persist;
    function restore(persisted) {
        Object.keys(persisted).forEach(function (id) {
            resolve(id).restore(persisted[id]);
        });
    }
    exports.restore = restore;
    function clearSelection(type) {
        if (type === void 0) {
            type = exports.defaultSelectionType;
        }
        Object.keys(cache).forEach(function (id) {
            return cache[id].clear(type);
        });
    }
    exports.clearSelection = clearSelection;
}(require, exports, require('./main'), require('./ajax'), require('./event'), require('./range')));
},{"./ajax":3,"./event":7,"./main":13,"./range":20}],10:[function(require,module,exports){
(function (require, exports) {
    'use strict';
    var AIterator = function () {
        function AIterator() {
        }
        AIterator.prototype.hasNext = function () {
            return false;
        };
        AIterator.prototype.next = function () {
            return null;
        };
        AIterator.prototype.forEach = function (callbackfn, thisArg) {
            var i = 0;
            while (this.hasNext()) {
                callbackfn.call(thisArg, this.next(), i++);
            }
        };
        AIterator.prototype.map = function (callbackfn, thisArg) {
            return new TransformIterator(this, callbackfn, thisArg);
        };
        AIterator.prototype.asList = function () {
            var r = [];
            while (this.hasNext()) {
                r.push(this.next());
            }
            return r;
        };
        Object.defineProperty(AIterator.prototype, 'isIncreasing', {
            get: function () {
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIterator.prototype, 'isDecreasing', {
            get: function () {
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIterator.prototype, 'byOne', {
            get: function () {
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AIterator.prototype, 'byMinusOne', {
            get: function () {
                return false;
            },
            enumerable: true,
            configurable: true
        });
        return AIterator;
    }();
    exports.AIterator = AIterator;
    var Iterator = function (_super) {
        __extends(Iterator, _super);
        function Iterator(from, to, step) {
            _super.call(this);
            this.from = from;
            this.to = to;
            this.step = step;
            this.act = this.from;
        }
        Iterator.prototype.hasNext = function () {
            return this.act !== this.to && (this.step > 0 && this.act < this.to || this.step < 0 && this.act > this.to);
        };
        Iterator.prototype.next = function () {
            if (!this.hasNext()) {
                throw new RangeError('end of iterator');
            }
            var r = this.act;
            this.act += this.step;
            if (this.step < 0 && this.act < this.to) {
                this.act = this.to;
            } else if (this.step > 0 && this.act > this.to) {
                this.act = this.to;
            }
            return r;
        };
        Object.defineProperty(Iterator.prototype, 'isIncreasing', {
            get: function () {
                return this.step > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Iterator.prototype, 'isDecreasing', {
            get: function () {
                return this.step < 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Iterator.prototype, 'byOne', {
            get: function () {
                return this.step === 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Iterator.prototype, 'byMinusOne', {
            get: function () {
                return this.step === -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Iterator.prototype, 'size', {
            get: function () {
                if (this.byOne) {
                    return Math.max(this.to - this.from, 0);
                } else if (this.byMinusOne) {
                    return Math.max(this.from - this.to, 0);
                }
                var d = this.isIncreasing ? this.to - this.from + 1 : this.from - this.to + 1;
                var s = Math.abs(this.step);
                if (d <= 0) {
                    return 0;
                }
                return Math.floor(d / s);
            },
            enumerable: true,
            configurable: true
        });
        return Iterator;
    }(AIterator);
    exports.Iterator = Iterator;
    var ListIterator = function (_super) {
        __extends(ListIterator, _super);
        function ListIterator(arr) {
            _super.call(this);
            this.arr = arr;
            this.it = new Iterator(0, arr.length, 1);
        }
        ListIterator.prototype.hasNext = function () {
            return this.it.hasNext();
        };
        ListIterator.prototype.next = function () {
            if (!this.hasNext()) {
                throw new RangeError('end of iterator');
            }
            return this.arr[this.it.next()];
        };
        ListIterator.prototype.asList = function () {
            return this.arr.slice();
        };
        return ListIterator;
    }(AIterator);
    exports.ListIterator = ListIterator;
    var SingleIterator = function (_super) {
        __extends(SingleIterator, _super);
        function SingleIterator(value) {
            _super.call(this);
            this.value = value;
            this.delivered = false;
        }
        SingleIterator.prototype.hasNext = function () {
            return !this.delivered;
        };
        SingleIterator.prototype.next = function () {
            if (!this.hasNext()) {
                throw new RangeError('end of iterator');
            }
            this.delivered = true;
            return this.value;
        };
        SingleIterator.prototype.asList = function () {
            return [this.value];
        };
        Object.defineProperty(SingleIterator.prototype, 'isIncreasing', {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SingleIterator.prototype, 'isDecreasing', {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SingleIterator.prototype, 'byOne', {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SingleIterator.prototype, 'byMinusOne', {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        return SingleIterator;
    }(AIterator);
    exports.SingleIterator = SingleIterator;
    var ConcatIterator = function (_super) {
        __extends(ConcatIterator, _super);
        function ConcatIterator(its) {
            _super.call(this);
            this.its = its;
            this.act = its.shift();
        }
        ConcatIterator.prototype.hasNext = function () {
            var currentHasNext = false;
            while (!(currentHasNext = this.act.hasNext()) && this.its.length > 0) {
                this.act = this.its.shift();
            }
            return currentHasNext;
        };
        ConcatIterator.prototype.next = function () {
            if (!this.hasNext()) {
                throw new RangeError('end of iterator');
            }
            return this.act.next();
        };
        ConcatIterator.prototype.asList = function () {
            var r = [];
            while (this.hasNext()) {
                r.push(this.next());
            }
            return r;
        };
        Object.defineProperty(ConcatIterator.prototype, 'isIncreasing', {
            get: function () {
                return this.its.every(function (it) {
                    return it.isIncreasing;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConcatIterator.prototype, 'isDecreasing', {
            get: function () {
                return this.its.every(function (it) {
                    return it.isDecreasing;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConcatIterator.prototype, 'byOne', {
            get: function () {
                return this.its.every(function (it) {
                    return it.byOne;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConcatIterator.prototype, 'byMinusOne', {
            get: function () {
                return this.its.every(function (it) {
                    return it.byMinusOne;
                });
            },
            enumerable: true,
            configurable: true
        });
        return ConcatIterator;
    }(AIterator);
    exports.ConcatIterator = ConcatIterator;
    var EmptyIterator = function (_super) {
        __extends(EmptyIterator, _super);
        function EmptyIterator() {
            _super.apply(this, arguments);
            this.isIncreasing = false;
            this.isDecreasing = false;
            this.byOne = false;
            this.byMinusOne = false;
        }
        EmptyIterator.prototype.hasNext = function () {
            return false;
        };
        EmptyIterator.prototype.next = function () {
            throw new RangeError('end of iterator');
        };
        EmptyIterator.prototype.asList = function () {
            return [];
        };
        return EmptyIterator;
    }(AIterator);
    exports.EmptyIterator = EmptyIterator;
    var TransformIterator = function (_super) {
        __extends(TransformIterator, _super);
        function TransformIterator(it, f, thisArg) {
            _super.call(this);
            this.it = it;
            this.f = f;
            this.thisArg = thisArg;
        }
        TransformIterator.prototype.hasNext = function () {
            return this.it.hasNext();
        };
        TransformIterator.prototype.next = function () {
            if (!this.hasNext()) {
                throw new RangeError('end of iterator');
            }
            return this.f.call(this.thisArg, this.it.next());
        };
        Object.defineProperty(TransformIterator.prototype, 'isIncreasing', {
            get: function () {
                return this.it.isIncreasing;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransformIterator.prototype, 'isDecreasing', {
            get: function () {
                return this.it.isDecreasing;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransformIterator.prototype, 'byOne', {
            get: function () {
                return this.it.byOne;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransformIterator.prototype, 'byMinusOne', {
            get: function () {
                return this.it.byMinusOne;
            },
            enumerable: true,
            configurable: true
        });
        return TransformIterator;
    }(AIterator);
    function empty() {
        return new EmptyIterator();
    }
    exports.empty = empty;
    function concat() {
        var its = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            its[_i - 0] = arguments[_i];
        }
        if (its.length === 0) {
            return empty();
        } else if (its.length === 1) {
            return its[0];
        }
        return new ConcatIterator(its);
    }
    exports.concat = concat;
    function range(from, to, step) {
        return new Iterator(from, to, step);
    }
    exports.range = range;
    function single(value) {
        return new SingleIterator(value);
    }
    exports.single = single;
    function forList(arr) {
        return new ListIterator(arr);
    }
    exports.forList = forList;
}(require, exports));
},{}],11:[function(require,module,exports){
(function (require, exports, geom) {
    var ALayoutElem = function () {
        function ALayoutElem(options) {
            if (options === void 0) {
                options = {};
            }
            this.options = options;
        }
        ALayoutElem.prototype.getBounds = function () {
            return geom.rect(0, 0, 0, 0);
        };
        ALayoutElem.prototype.getLocation = function () {
            return this.getBounds().xy;
        };
        ALayoutElem.prototype.getSize = function () {
            return this.getBounds().size;
        };
        ALayoutElem.prototype.layoutOption = function (name, default_) {
            if (default_ === void 0) {
                default_ = null;
            }
            if (this.options.hasOwnProperty(name)) {
                return this.options[name];
            }
            return default_;
        };
        return ALayoutElem;
    }();
    exports.ALayoutElem = ALayoutElem;
    var HTMLLayoutElem = function (_super) {
        __extends(HTMLLayoutElem, _super);
        function HTMLLayoutElem(node, options) {
            if (options === void 0) {
                options = {};
            }
            _super.call(this, options);
            this.node = node;
        }
        HTMLLayoutElem.prototype.setBounds = function (x, y, w, h) {
            var unit = this.layoutOption('unit', 'px'), style = this.node.style;
            style.left = x + unit;
            style.top = y + unit;
            style.width = w + unit;
            style.height = h + unit;
            return null;
        };
        HTMLLayoutElem.prototype.getBounds = function () {
            var unit = this.layoutOption('unit', 'px'), style = this.node.style;
            function v(f) {
                if (f.length >= unit.length && f.substring(f.length - unit.length) === unit) {
                    f = f.substring(0, f.length - unit.length);
                    return parseFloat(f);
                }
                return 0;
            }
            return geom.rect(v(style.left), v(style.top), v(style.width), v(style.height));
        };
        return HTMLLayoutElem;
    }(ALayoutElem);
    function wrapDOM(node, options) {
        if (options === void 0) {
            options = {};
        }
        return new HTMLLayoutElem(node, options);
    }
    exports.wrapDOM = wrapDOM;
    exports.no_padding = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    function isDefault(v) {
        return v < 0 || isNaN(v);
    }
    function grab(v_def, v) {
        return isDefault(v_def) ? v : v_def;
    }
    function waitFor(promises, redo) {
        if (redo === void 0) {
            redo = false;
        }
        promises = promises.filter(function (p) {
            return p != null;
        });
        if (promises.length === 0) {
            return Promise.resolve(redo);
        } else if (promises.length === 1) {
            return promises[0].then(function () {
                return redo;
            });
        }
        return Promise.all(promises).then(function () {
            return redo;
        });
    }
    function layers(elems, w, h, parent) {
        return waitFor(elems.map(function (elem) {
            var x = grab(elem.layoutOption('prefX', Number.NaN), 0);
            var y = grab(elem.layoutOption('prefY', Number.NaN), 0);
            return elem.setBounds(x, y, w - x, h - y);
        }));
    }
    exports.layers = layers;
    function flowLayout(horizontal, gap, padding) {
        if (padding === void 0) {
            padding = {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            };
        }
        function getSize(w, h, child, value) {
            if (horizontal) {
                return [
                    value,
                    grab(child.layoutOption('prefHeight', Number.NaN), h)
                ];
            } else {
                return [
                    grab(child.layoutOption('prefWidth', Number.NaN), w),
                    value
                ];
            }
        }
        function FlowLayout(elems, w, h, parent) {
            w -= padding.left + padding.right;
            h -= padding.top + padding.bottom;
            var freeSpace = (horizontal ? w : h) - gap * (elems.length - 1);
            var unbound = 0, fixUsed = 0, ratioSum = 0;
            elems.forEach(function (elem) {
                var fix = elem.layoutOption(horizontal ? 'prefWidth' : 'prefHeight', Number.NaN);
                var ratio = elem.layoutOption('ratio', Number.NaN);
                if (isDefault(fix) && isDefault(ratio)) {
                    unbound++;
                } else if (fix >= 0) {
                    fixUsed += fix;
                } else {
                    ratioSum += ratio;
                }
            });
            var ratioMax = ratioSum < 1 ? 1 : ratioSum;
            var unboundedSpace = (freeSpace - fixUsed - freeSpace * ratioSum / ratioMax) / unbound;
            var sizes = elems.map(function (elem) {
                var fix = elem.layoutOption(horizontal ? 'prefWidth' : 'prefHeight', Number.NaN);
                var ratio = elem.layoutOption('ratio', Number.NaN);
                if (isDefault(fix) && isDefault(ratio)) {
                    return getSize(w, h, elem, unboundedSpace);
                } else if (fix >= 0) {
                    return getSize(w, h, elem, fix);
                } else {
                    var value = ratio / ratioMax * freeSpace;
                    return getSize(w, h, elem, value);
                }
            });
            var x_acc = padding.left;
            var y_acc = padding.top;
            var promises = [];
            elems.forEach(function (elem, i) {
                var s = sizes[i];
                promises.push(elem.setBounds(x_acc, y_acc, s[0], s[1]));
                if (horizontal) {
                    x_acc += s[0] + gap;
                } else {
                    y_acc += s[1] + gap;
                }
            });
            return waitFor(promises);
        }
        return FlowLayout;
    }
    exports.flowLayout = flowLayout;
    function distributeLayout(horizontal, defaultValue, padding) {
        if (padding === void 0) {
            padding = exports.no_padding;
        }
        function setBounds(x, y, w, h, child, value) {
            if (horizontal) {
                return child.setBounds(x, y, value, grab(child.layoutOption('prefHeight', Number.NaN), h));
            } else {
                return child.setBounds(x, y, grab(child.layoutOption('prefWidth', Number.NaN), w), value);
            }
        }
        function DistributeLayout(elems, w, h, parent) {
            w -= padding.left + padding.right;
            h -= padding.top + padding.bottom;
            var freeSpace = horizontal ? w : h;
            var fixUsed = 0;
            elems.forEach(function (elem) {
                var fix = elem.layoutOption(horizontal ? 'prefWidth' : 'prefHeight', Number.NaN);
                if (isDefault(fix)) {
                    fix = defaultValue;
                }
                fixUsed += fix;
            });
            var gap = (freeSpace - fixUsed) / (elems.length - 1);
            var x_acc = padding.left;
            var y_acc = padding.top;
            if (elems.length === 1) {
                if (horizontal) {
                    x_acc += (freeSpace - fixUsed) / 2;
                } else {
                    y_acc += (freeSpace - fixUsed) / 2;
                }
            }
            var promises = [];
            elems.forEach(function (elem) {
                var fix = elem.layoutOption(horizontal ? 'prefWidth' : 'prefHeight', Number.NaN);
                if (isDefault(fix)) {
                    fix = defaultValue;
                }
                promises.push(setBounds(x_acc, y_acc, w, h, elem, fix));
                if (horizontal) {
                    x_acc += fix + gap;
                } else {
                    y_acc += fix + gap;
                }
            });
            return waitFor(promises);
        }
        return DistributeLayout;
    }
    exports.distributeLayout = distributeLayout;
    function borderLayout(horizontal, gap, percentages, padding) {
        if (percentages === void 0) {
            percentages = {
                top: 0.2,
                left: 0.2,
                right: 0.2,
                bottom: 0.2
            };
        }
        if (padding === void 0) {
            padding = exports.no_padding;
        }
        function BorderLayout(elems, w, h, parent) {
            w -= padding.left + padding.right;
            h -= padding.top + padding.bottom;
            var x = padding.top, y = padding.left, wc = w, hc = h;
            var pos = {
                top: [],
                center: [],
                left: [],
                right: [],
                bottom: []
            };
            elems.forEach(function (elem) {
                var border = elem.layoutOption('border', 'center');
                if (!pos.hasOwnProperty(border)) {
                    border = 'center';
                }
                pos[border].push(pos);
            });
            var promises = [];
            if (pos.top.length > 0) {
                y += h * percentages.top;
                hc -= h * percentages.top;
                promises.push(flowLayout(true, gap)(pos.top, w, h * percentages.top, parent));
            }
            if (pos.bottom.length > 0) {
                hc -= h * percentages.bottom;
                promises.push(flowLayout(true, gap)(pos.bottom, w, h * percentages.bottom, parent));
            }
            if (pos.left.length > 0) {
                x += w * percentages.left;
                wc -= w * percentages.left;
                promises.push(flowLayout(false, gap)(pos.left, w * percentages.left, hc, parent));
            }
            if (pos.right.length > 0) {
                wc -= w * percentages.right;
                promises.push(flowLayout(false, gap)(pos.right, w * percentages.right, hc, parent));
            }
            if (pos.center.length > 0) {
                promises.push(flowLayout(true, gap)(pos.center, wc, hc, parent));
            }
            return waitFor(promises);
        }
        return BorderLayout;
    }
    exports.borderLayout = borderLayout;
}(require, exports, require('./geom')));
},{"./geom":8}],12:[function(require,module,exports){
(function (require, exports, plugins, events, geom) {
    var AView = function (_super) {
        __extends(AView, _super);
        function AView() {
            _super.call(this);
            this._layoutOptions = {};
        }
        Object.defineProperty(AView.prototype, 'data', {
            get: function () {
                return [];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AView.prototype, 'idtypes', {
            get: function () {
                return [];
            },
            enumerable: true,
            configurable: true
        });
        AView.prototype.setBounds = function (x, y, w, h) {
            return null;
        };
        AView.prototype.getBounds = function () {
            return geom.rect(0, 0, 0, 0);
        };
        AView.prototype.setLayoutOption = function (name, value) {
            this._layoutOptions[name] = value;
        };
        AView.prototype.layoutOption = function (name, default_) {
            if (default_ === void 0) {
                default_ = null;
            }
            if (this._layoutOptions.hasOwnProperty(name)) {
                return this._layoutOptions[name];
            }
            return default_;
        };
        return AView;
    }(events.EventHandler);
    exports.AView = AView;
    function convertDesc(desc) {
        var d = desc;
        d.type = d.type || 'main';
        d.location = d.location || 'center';
        return d;
    }
    function list() {
        return plugins.list('view').map(convertDesc);
    }
    exports.list = list;
}(require, exports, require('./plugin'), require('./event'), require('./geom')));
},{"./event":7,"./geom":8,"./plugin":19}],13:[function(require,module,exports){
(function (require, exports, module) {
    'use strict';
    if (!window.Promise) {
        var r = require;
        r(['es6-promise']);
    }
    exports.version = '0.0.1-alpha';
    exports.server_url = '/api';
    exports.server_json_suffix = '';
    function _init(config) {
        exports.server_url = config.apiUrl || '/api';
        exports.server_json_suffix = config.apiJSONSuffix || '';
        exports.registry = {
            baseUrl: config.registry && config.registry.baseUrl || '',
            relativeUrl: config.registry && config.registry.relativeUrl || '..',
            extensions: config.registry && config.registry.extensions || []
        };
    }
    exports._init = _init;
    if (module != null && typeof module.config === 'function') {
        _init(module.config());
    }
    function mixin(a) {
        var bs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            bs[_i - 1] = arguments[_i];
        }
        function extend(r, b) {
            Object.keys(b).forEach(function (key) {
                var v = b[key];
                if (Object.prototype.toString.call(v) === '[object Object]') {
                    r[key] = r[key] != null ? extend(r[key], v) : v;
                } else {
                    r[key] = v;
                }
            });
            return r;
        }
        bs.forEach(function (b) {
            if (b) {
                a = extend(a, b);
            }
        });
        return a;
    }
    exports.mixin = mixin;
    function isUndefined(obj) {
        return typeof obj === 'undefined';
    }
    exports.isUndefined = isUndefined;
    function bind(f, thisArg) {
        var _this = this;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return function () {
            var largs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                largs[_i - 0] = arguments[_i];
            }
            return f.apply(thisArg ? thisArg : _this, args.concat(largs));
        };
    }
    exports.bind = bind;
    function getter() {
        var attr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            attr[_i - 0] = arguments[_i];
        }
        if (attr.length === 1) {
            return function (obj) {
                return obj[attr[0]];
            };
        }
        return function (obj) {
            return attr.map(function (a) {
                return obj[a];
            });
        };
    }
    exports.getter = getter;
    function isFunction(f) {
        return typeof f === 'function';
    }
    exports.isFunction = isFunction;
    function identity(d) {
        return d;
    }
    exports.identity = identity;
    function noop() {
    }
    exports.noop = noop;
    function constant(r) {
        if (typeof r === 'boolean' && r === true) {
            return constantTrue;
        }
        if (typeof r === 'boolean' && r === false) {
            return constantFalse;
        }
        return function () {
            return r;
        };
    }
    exports.constant = constant;
    function constantTrue() {
        return true;
    }
    exports.constantTrue = constantTrue;
    function constantFalse() {
        return true;
    }
    exports.constantFalse = constantFalse;
    function callable(obj, f) {
        function CallAbleFactory() {
            var that;
            function CallAble() {
                that[f].apply(that, argList(arguments));
            }
            that = CallAble;
            mixin(CallAble, obj);
            return CallAble;
        }
        return CallAbleFactory;
    }
    exports.callable = callable;
    function search(arr, f) {
        var r = undefined;
        arr.some(function (v) {
            if (f(v)) {
                r = v;
                return true;
            }
            return false;
        });
        return r;
    }
    exports.search = search;
    function indexOf(arr, f) {
        var r = -1;
        arr.some(function (v, i) {
            if (f(v)) {
                r = i;
                return true;
            }
            return false;
        });
        return r;
    }
    exports.indexOf = indexOf;
    function argList(args) {
        if (arguments.length > 1) {
            return Array.prototype.slice.call(arguments);
        } else {
            return Array.prototype.slice.call(args);
        }
    }
    exports.argList = argList;
    function indexRange(n) {
        return Array.apply(null, { length: n }).map(Number.call, Number);
    }
    function argSort(arr, compareFn, thisArg) {
        var indices = indexRange(arr.length);
        return indices.sort(function (a, b) {
            return compareFn.call(thisArg, arr[a], arr[b]);
        });
    }
    exports.argSort = argSort;
    function argFilter(arr, callbackfn, thisArg) {
        var indices = indexRange(arr.length);
        return indices.filter(function (value, index) {
            return callbackfn.call(thisArg, arr[value], index);
        });
    }
    exports.argFilter = argFilter;
    function random_id(length) {
        if (length === void 0) {
            length = 8;
        }
        var id = '';
        while (id.length < length) {
            id += Math.random().toString(36).slice(-8);
        }
        return id.substr(0, length);
    }
    exports.random_id = random_id;
    function onDOMNodeRemoved(node, callback, thisArg) {
        var arr;
        var body = document.getElementsByTagName('body')[0];
        if (!Array.isArray(node)) {
            arr = [node];
        } else {
            arr = node;
        }
        arr.forEach(function (n) {
            function l(evt) {
                var act = n;
                while (act) {
                    if (evt.target === act) {
                        node = null;
                        n.removeEventListener('DOMNodeRemoved', l);
                        body.removeEventListener('DOMNodeRemoved', l);
                        callback.call(thisArg, n);
                        return;
                    }
                    act = act.parentNode;
                }
            }
            n.addEventListener('DOMNodeRemoved', l);
            body.addEventListener('DOMNodeRemoved', l);
        });
    }
    exports.onDOMNodeRemoved = onDOMNodeRemoved;
    var idCounter = {};
    function uniqueId(domain) {
        if (domain === void 0) {
            domain = '_default';
        }
        if (!idCounter.hasOwnProperty(domain)) {
            idCounter[domain] = 0;
        }
        return idCounter[domain]++;
    }
    exports.uniqueId = uniqueId;
    function flagId(domain, id) {
        if (isNaN(id) || id < 0) {
            return id;
        }
        if (!idCounter.hasOwnProperty(domain)) {
            idCounter[domain] = id + 1;
        } else {
            idCounter[domain] = Math.max(idCounter[domain], id + 1);
        }
        return id;
    }
    exports.flagId = flagId;
    function uniqueString(domain) {
        if (domain === void 0) {
            domain = '_default';
        }
        return domain + uniqueId(domain);
    }
    exports.uniqueString = uniqueString;
    function extendClass(subClass, baseClass) {
        for (var p in baseClass) {
            if (baseClass.hasOwnProperty(p)) {
                subClass[p] = baseClass[p];
            }
        }
        function __() {
            this.constructor = subClass;
        }
        __.prototype = baseClass.prototype;
        subClass.prototype = new __();
    }
    exports.extendClass = extendClass;
    var IdPool = function () {
        function IdPool() {
            this.counter = 0;
            this.free = [];
        }
        IdPool.prototype.checkOut = function () {
            if (this.free.length === 0) {
                return this.counter++;
            } else {
                return this.free.shift();
            }
        };
        IdPool.prototype.checkIn = function (id) {
            if (id === this.counter - 1) {
                this.counter--;
            } else {
                this.free.push(id);
            }
        };
        IdPool.prototype.isCheckedOut = function (id) {
            return id < this.counter && this.free.indexOf(id) < 0;
        };
        Object.defineProperty(IdPool.prototype, 'size', {
            get: function () {
                return this.counter - this.free.length;
            },
            enumerable: true,
            configurable: true
        });
        return IdPool;
    }();
    exports.IdPool = IdPool;
    var PropertyHandler = function () {
        function PropertyHandler(code) {
            this.map = {};
            if (code) {
                this.parse(code);
            }
        }
        PropertyHandler.prototype.is = function (name) {
            return this.getProp(name, null) != null;
        };
        PropertyHandler.prototype.getProp = function (name, default_) {
            if (this.map.hasOwnProperty(name)) {
                return this.map[name];
            }
            return default_;
        };
        PropertyHandler.prototype.getInt = function (name, default_) {
            var l = this.getProp(name, null);
            if (l === null) {
                return default_;
            }
            if (l.match(/[0-9-.]/) != null) {
                return parseInt(l, 10);
            }
            return parseInt(l, 36);
        };
        PropertyHandler.prototype.removeProp = function (name) {
            if (this.map.hasOwnProperty(name)) {
                delete this.map[name];
                return true;
            }
            return false;
        };
        PropertyHandler.prototype.toString = function () {
            var _this = this;
            var r = [];
            Object.keys(this.map).forEach(function (key) {
                r.push(encodeURIComponent(key) + '=' + encodeURIComponent(_this.map[key]));
            });
            return r.join('&');
        };
        PropertyHandler.prototype.parse = function (code) {
            var _this = this;
            if (code === void 0) {
                code = '';
            }
            this.map = {};
            if (code.length <= 1) {
                return;
            }
            code.substr(1).split('&').forEach(function (item) {
                var s = item.split('='), k = decodeURIComponent(s[0]), v = s[1] && decodeURIComponent(s[1]);
                if (k in _this.map) {
                    var old = _this.map[k];
                    if (!Array.isArray(old)) {
                        _this.map[k] = [
                            old,
                            v
                        ];
                    } else {
                        _this.map[k].push(v);
                    }
                } else {
                    _this.map[k] = v;
                }
            });
        };
        return PropertyHandler;
    }();
    var HashProperties = function (_super) {
        __extends(HashProperties, _super);
        function HashProperties() {
            var _this = this;
            _super.call(this);
            this.updated = function () {
                _this.parse(location.hash);
            };
            this.map = history.state;
            if (!this.map) {
                this.parse(location.hash);
            }
            window.addEventListener('hashchange', this.updated, false);
        }
        HashProperties.prototype.setInt = function (name, value, update) {
            if (update === void 0) {
                update = true;
            }
            var v = String(value);
            if (value > 100) {
                v = value.toString(36);
            }
            this.setProp(name, String(value), update);
        };
        HashProperties.prototype.setProp = function (name, value, update) {
            if (update === void 0) {
                update = true;
            }
            this.map[name] = value;
            if (update) {
                this.update();
            }
        };
        HashProperties.prototype.removeProp = function (name, update) {
            if (update === void 0) {
                update = true;
            }
            if (this.map.hasOwnProperty(name)) {
                delete this.map[name];
                if (update) {
                    this.update();
                }
                return true;
            }
            return false;
        };
        HashProperties.prototype.update = function () {
            window.removeEventListener('hashchange', this.updated, false);
            history.pushState(this.map, 'State ' + Date.now(), '#' + this.toString());
            window.addEventListener('hashchange', this.updated, false);
        };
        return HashProperties;
    }(PropertyHandler);
    exports.hash = new HashProperties();
    exports.param = new PropertyHandler(location.search);
    function delayedCall(callback, timeToDelay, thisCallback) {
        if (timeToDelay === void 0) {
            timeToDelay = 100;
        }
        if (thisCallback === void 0) {
            thisCallback = this;
        }
        var tm = -1;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            if (tm >= 0) {
                clearTimeout(tm);
                tm = -1;
            }
            args.unshift(thisCallback);
            tm = setTimeout(callback.bind.apply(callback, args), timeToDelay);
        };
    }
    exports.delayedCall = delayedCall;
    function offset(element) {
        if (!element) {
            return {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
        }
        var obj = element.getBoundingClientRect();
        return {
            left: obj.left + window.pageXOffset,
            top: obj.top + window.pageYOffset,
            width: obj.width,
            height: obj.height
        };
    }
    exports.offset = offset;
    function bounds(element) {
        if (!element) {
            return {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            };
        }
        var obj = element.getBoundingClientRect();
        return {
            x: obj.left,
            y: obj.top,
            w: obj.width,
            h: obj.height
        };
    }
    exports.bounds = bounds;
    function hasDnDType(e, type) {
        var types = e.dataTransfer.types;
        if (isFunction(types.indexOf)) {
            return types.indexOf(type) >= 0;
        }
        if (isFunction(types.includes)) {
            return types.includes(type);
        }
        return false;
    }
    exports.hasDnDType = hasDnDType;
    function copyDnD(e) {
        var dT = e.dataTransfer;
        return e.ctrlKey && dT.effectAllowed.match(/copy/gi) || !dT.effectAllowed.match(/move/gi);
    }
    exports.copyDnD = copyDnD;
    function updateDropEffect(e) {
        var dT = e.dataTransfer;
        if (copyDnD(e)) {
            dT.dropEffect = 'copy';
        } else {
            dT.dropEffect = 'move';
        }
    }
    exports.updateDropEffect = updateDropEffect;
    function resolveIn(milliseconds) {
        if (milliseconds <= 0) {
            return Promise.resolve(null);
        }
        return new Promise(function (resolve) {
            setTimeout(resolve, milliseconds);
        });
    }
    exports.resolveIn = resolveIn;
}(require, exports, module));
},{}],14:[function(require,module,exports){
(function (require, exports, C, ajax, ranges) {
    'use strict';
    function map(source, target) {
        var that = this;
        if (arguments.length === 2) {
            return function () {
                var args = C.argList(arguments);
                args.unshift(target);
                args.unshift(source);
                return map.apply(that, args);
            };
        }
        var args = C.argList(arguments);
        args.shift();
        args.shift();
        var id = args.shift(), range;
        if (Array.isArray(id)) {
            range = ranges.list(id);
        } else if (ranges.is(id)) {
            range = id;
        } else {
            args.unshift(id);
            range = ranges.list(args);
        }
        return mapImpl(source, target, range);
    }
    exports.map = map;
    var cache = {};
    function mapImpl(source, target, range) {
        var key = source.toString() + '->' + target.toString() + ':' + range.toString();
        if (cache.hasOwnProperty(key)) {
            return cache[key];
        }
        var r = ajax.getAPIJSON('/mapper/map', {
            source: source.toString(),
            target: target.toString(),
            range: range.toString()
        }).then(function (data) {
            return ranges.parse(data.range);
        });
        cache[key] = r;
        return r;
    }
}(require, exports, require('./main'), require('./ajax'), require('./range')));
},{"./ajax":3,"./main":13,"./range":20}],15:[function(require,module,exports){
(function (require, exports, ranges, C) {
    var Statistics = function () {
        function Statistics() {
            this.min = NaN;
            this.max = NaN;
            this.sum = 0;
            this.mean = 0;
            this._var = 0;
            this.n = 0;
            this.nans = 0;
            this.moment2 = NaN;
            this.moment3 = NaN;
            this.moment4 = NaN;
        }
        Object.defineProperty(Statistics.prototype, 'var', {
            get: function () {
                return this.n > 1 ? this._var / (this.n - 1) : 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Statistics.prototype, 'sd', {
            get: function () {
                return Math.sqrt(this.var);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Statistics.prototype, 'kurtosis', {
            get: function () {
                if (this.n === 0) {
                    return 0;
                }
                return this.n * this.moment4 / (this.moment2 * this.moment2) - 3;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Statistics.prototype, 'skewness', {
            get: function () {
                if (this.n === 0) {
                    return 0;
                }
                return Math.sqrt(this.n) * this.moment3 / Math.pow(this.moment2, 3 / 2);
            },
            enumerable: true,
            configurable: true
        });
        Statistics.prototype.push = function (x) {
            x = +x;
            if (isNaN(x)) {
                this.nans++;
                return;
            }
            this.n++;
            this.sum += x;
            if (x < this.min || isNaN(this.min)) {
                this.min = x;
            }
            if (this.max < x || isNaN(this.max)) {
                this.max = x;
            }
            if (this.n === 1) {
                this.mean = x;
                this._var = 0;
                this.moment2 = this.moment3 = this.moment4 = 0;
            } else {
                var mean_m1 = this.mean;
                this.mean = mean_m1 + (x - mean_m1) / this.n;
                this._var = this._var + (x - mean_m1) * (x - this.mean);
                var delta = x - mean_m1;
                var delta_n = delta / this.n;
                var delta_n2 = delta_n * delta_n;
                var term1 = delta * delta_n * (this.n - 1);
                this.moment4 += term1 * delta_n2 * (this.n * this.n - 3 * this.n + 3) + 6 * delta_n2 * this.moment2 - 4 * delta_n * this.moment3;
                this.moment3 += term1 * delta_n * (this.n - 2) - 3 * delta_n * this.moment2;
                this.moment2 += term1;
            }
        };
        return Statistics;
    }();
    function computeStats() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i - 0] = arguments[_i];
        }
        var r = new Statistics();
        arr.forEach(function (a) {
            return a.forEach(r.push, r);
        });
        return r;
    }
    exports.computeStats = computeStats;
    function hist(arr, indices, size, bins, range) {
        var r = new Histogram(bins, range);
        r.pushAll(arr, indices, size);
        return r;
    }
    exports.hist = hist;
    function categoricalHist(arr, indices, size, categories, labels, colors) {
        var r = new CatHistogram(categories, labels, colors);
        r.pushAll(arr, indices, size);
        return r;
    }
    exports.categoricalHist = categoricalHist;
    function rangeHist(range) {
        return new RangeHistogram(range);
    }
    exports.rangeHist = rangeHist;
    function wrapHist(hist, value_range) {
        return new Histogram(hist.length, value_range, hist);
    }
    exports.wrapHist = wrapHist;
    var AHistogram = function () {
        function AHistogram(bins, hist) {
            this.missing_ = 0;
            this.missingRange_ = ranges.none();
            this.bins_ = [];
            for (var i = 0; i < bins; ++i) {
                this.bins_.push(hist && hist.length > i ? hist[i] : 0);
            }
        }
        Object.defineProperty(AHistogram.prototype, 'largestFrequency', {
            get: function () {
                return Math.max(Math.max.apply(Math, this.bins_), this.missing_);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AHistogram.prototype, 'largestBin', {
            get: function () {
                return Math.max.apply(Math, this.bins_);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AHistogram.prototype, 'count', {
            get: function () {
                return this.validCount + this.missing_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AHistogram.prototype, 'validCount', {
            get: function () {
                return this.bins_.reduce(function (p, s) {
                    return p + s;
                }, 0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AHistogram.prototype, 'bins', {
            get: function () {
                return this.bins_.length;
            },
            enumerable: true,
            configurable: true
        });
        AHistogram.prototype.binOf = function (value) {
            return -1;
        };
        AHistogram.prototype.frequency = function (bin) {
            return this.bins_[bin];
        };
        AHistogram.prototype.range = function (bin) {
            return this.ranges_ ? this.ranges_[bin] : ranges.none();
        };
        Object.defineProperty(AHistogram.prototype, 'missing', {
            get: function () {
                return this.missing_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AHistogram.prototype, 'missingRange', {
            get: function () {
                return this.missingRange_;
            },
            enumerable: true,
            configurable: true
        });
        AHistogram.prototype.pushAll = function (arr, indices, size) {
            var _this = this;
            var binindex = [], missingindex = [];
            for (var i = this.bins - 1; i >= 0; --i) {
                binindex.push([]);
            }
            if (indices) {
                var it = indices.iter(size);
                arr.forEach(function (x) {
                    var index = it.next();
                    var bin = _this.binOf(x);
                    if (bin < 0) {
                        _this.missing_++;
                        missingindex.push(index);
                    } else {
                        _this.bins_[bin]++;
                        binindex[bin].push(index);
                    }
                });
                this.ranges_ = binindex.map(function (d) {
                    return ranges.list(d.sort().filter(function (di, i, a) {
                        return di !== a[i - 1];
                    }));
                });
                this.missingRange_ = ranges.list(missingindex.sort().filter(function (di, i, a) {
                    return di !== a[i - 1];
                }));
            } else {
                arr.forEach(function (x) {
                    var bin = _this.binOf(x);
                    if (bin < 0) {
                        _this.missing_++;
                    } else {
                        _this.bins_[bin]++;
                    }
                });
                this.ranges_ = null;
                this.missingRange_ = null;
            }
        };
        AHistogram.prototype.forEach = function (callbackfn, thisArg) {
            return this.bins_.forEach(callbackfn, thisArg);
        };
        return AHistogram;
    }();
    var Histogram = function (_super) {
        __extends(Histogram, _super);
        function Histogram(bins, value_range, hist) {
            _super.call(this, bins, hist);
            this.value_range = value_range;
        }
        Histogram.prototype.binOf = function (value) {
            if (typeof value === 'number') {
                return this.binOfImpl(value);
            }
            return -1;
        };
        Histogram.prototype.binOfImpl = function (value) {
            if (isNaN(value)) {
                return -1;
            }
            var n = (value - this.value_range[0]) / (this.value_range[1] - this.value_range[0]);
            var bin = Math.round(n * (this.bins - 1));
            if (bin < 0) {
                bin = 0;
            }
            if (bin >= this.bins) {
                bin = this.bins - 1;
            }
            return bin;
        };
        return Histogram;
    }(AHistogram);
    var CatHistogram = function (_super) {
        __extends(CatHistogram, _super);
        function CatHistogram(values, categories, colors) {
            _super.call(this, values.length);
            this.values = values;
            this.categories = categories;
            this.colors = colors;
        }
        CatHistogram.prototype.binOf = function (value) {
            return this.values.indexOf(value);
        };
        return CatHistogram;
    }(AHistogram);
    var RangeHistogram = function () {
        function RangeHistogram(range_) {
            this.range_ = range_;
        }
        Object.defineProperty(RangeHistogram.prototype, 'categories', {
            get: function () {
                return this.range_.groups.map(function (g) {
                    return g.name;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RangeHistogram.prototype, 'colors', {
            get: function () {
                return this.range_.groups.map(function (g) {
                    return g.color;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RangeHistogram.prototype, 'largestFrequency', {
            get: function () {
                return Math.max.apply(Math, this.range_.groups.map(function (g) {
                    return g.length;
                }));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RangeHistogram.prototype, 'largestBin', {
            get: function () {
                return this.largestFrequency;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RangeHistogram.prototype, 'count', {
            get: function () {
                return this.range_.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RangeHistogram.prototype, 'validCount', {
            get: function () {
                return this.count;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RangeHistogram.prototype, 'bins', {
            get: function () {
                return this.range_.groups.length;
            },
            enumerable: true,
            configurable: true
        });
        RangeHistogram.prototype.binOf = function (value) {
            return C.indexOf(this.range_.groups, function (g) {
                return g.name === value;
            });
        };
        RangeHistogram.prototype.frequency = function (bin) {
            return this.range_.groups[bin].length;
        };
        RangeHistogram.prototype.range = function (bin) {
            return ranges.list(this.range_.groups[bin]);
        };
        Object.defineProperty(RangeHistogram.prototype, 'missing', {
            get: function () {
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RangeHistogram.prototype, 'missingRange', {
            get: function () {
                return ranges.none();
            },
            enumerable: true,
            configurable: true
        });
        RangeHistogram.prototype.forEach = function (callbackfn, thisArg) {
            return this.range_.groups.forEach(function (g, i) {
                return callbackfn.call(thisArg, g.length, i);
            });
        };
        return RangeHistogram;
    }();
}(require, exports, require('./range'), require('./main')));
},{"./main":13,"./range":20}],16:[function(require,module,exports){
(function (require, exports) {
    'use strict';
}(require, exports));
},{}],17:[function(require,module,exports){
(function (require, exports, C, ajax, ranges, idtypes, datatypes, vector_impl, math) {
    'use strict';
    function flatten(arr, indices, select) {
        if (select === void 0) {
            select = 0;
        }
        var r = [], dim = [
                arr.length,
                arr[0].length
            ];
        if (select === 0) {
            r = r.concat.apply(r, arr);
        } else {
            for (var i = 0; i < dim[1]; ++i) {
                arr.forEach(function (ai) {
                    r.push(ai[i]);
                });
            }
        }
        return {
            data: r,
            indices: indices.dim(select).repeat(dim[1 - select])
        };
    }
    var MatrixBase = function (_super) {
        __extends(MatrixBase, _super);
        function MatrixBase(_root) {
            _super.call(this);
            this._root = _root;
        }
        MatrixBase.prototype.size = function () {
            throw new Error('not implemented');
        };
        Object.defineProperty(MatrixBase.prototype, 'dim', {
            get: function () {
                return this.size();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatrixBase.prototype, 'length', {
            get: function () {
                return this.nrow * this.ncol;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatrixBase.prototype, 'nrow', {
            get: function () {
                return this.dim[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatrixBase.prototype, 'ncol', {
            get: function () {
                return this.dim[1];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatrixBase.prototype, 'indices', {
            get: function () {
                return ranges.range([
                    0,
                    this.nrow
                ], [
                    0,
                    this.ncol
                ]);
            },
            enumerable: true,
            configurable: true
        });
        MatrixBase.prototype.data = function () {
            throw new Error('not implemented');
        };
        MatrixBase.prototype.view = function () {
            if (typeof arguments[0] === 'string') {
                return this.dynview(arguments[0]);
            }
            var range = arguments.length === 0 ? ranges.all() : arguments[0];
            if (range.isAll) {
                return this._root;
            }
            return new MatrixView(this._root, range);
        };
        MatrixBase.prototype.dynview = function (filter) {
            return null;
        };
        MatrixBase.prototype.slice = function (col) {
            return new SliceColVector(this, col);
        };
        MatrixBase.prototype.stats = function () {
            return this.data().then(function (d) {
                return math.computeStats.apply(math, d);
            });
        };
        MatrixBase.prototype.hist = function (bins, range, containedIds) {
            var _this = this;
            if (range === void 0) {
                range = ranges.all();
            }
            if (containedIds === void 0) {
                containedIds = 0;
            }
            var v = this._root.valuetype;
            return this.data().then(function (d) {
                var flat = flatten(d, _this.indices, containedIds);
                switch (v.type) {
                case 'categorical':
                    return math.categoricalHist(flat.data, flat.indices, flat.data.length, v.categories.map(function (d) {
                        return typeof d === 'string' ? d : d.name;
                    }), v.categories.map(function (d) {
                        return typeof d === 'string' ? d : d.name || d.label;
                    }), v.categories.map(function (d) {
                        return typeof d === 'string' ? 'gray' : d.color || 'gray';
                    }));
                case 'real':
                case 'int':
                    return math.hist(flat.data, flat.indices, flat.data.length, bins ? bins : Math.round(Math.sqrt(_this.length)), v.range);
                default:
                    return null;
                }
            });
        };
        MatrixBase.prototype.idView = function (idRange) {
            var _this = this;
            if (idRange === void 0) {
                idRange = ranges.all();
            }
            if (idRange.isAll) {
                return Promise.resolve(this._root);
            }
            return this.ids().then(function (ids) {
                return _this.view(ids.indexOf(idRange));
            });
        };
        MatrixBase.prototype.reduce = function (f, this_f, valuetype, idtype) {
            return new ProjectedVector(this, f, this_f, valuetype, idtype);
        };
        MatrixBase.prototype.restore = function (persisted) {
            if (persisted && persisted.f) {
                return this.reduce(eval(persisted.f), this, persisted.valuetype, persisted.idtype ? idtypes.resolve(persisted.idtype) : undefined);
            } else if (persisted && persisted.range) {
                return this.view(ranges.parse(persisted.range));
            } else if (persisted && persisted.transposed) {
                return this.t;
            } else if (persisted && persisted.col) {
                return this.slice(+persisted.col);
            } else if (persisted && persisted.row) {
                return this.t.slice(+persisted.row);
            } else {
                return this;
            }
        };
        return MatrixBase;
    }(idtypes.SelectAble);
    exports.MatrixBase = MatrixBase;
    function adapterOne2Two(loader) {
        return {
            rowIds: function (desc, range) {
                return loader(desc).then(function (d) {
                    return range.preMultiply(d.rowIds, desc.size);
                });
            },
            rows: function (desc, range) {
                return loader(desc).then(function (d) {
                    return range.dim(0).filter(d.rows, desc.size[0]);
                });
            },
            colIds: function (desc, range) {
                return loader(desc).then(function (d) {
                    return range.preMultiply(d.colIds, desc.size);
                });
            },
            cols: function (desc, range) {
                return loader(desc).then(function (d) {
                    return range.dim(1).filter(d.cols, desc.size[1]);
                });
            },
            ids: function (desc, range) {
                return loader(desc).then(function (data) {
                    return range.preMultiply(data.ids, desc.size);
                });
            },
            at: function (desc, i, j) {
                return loader(desc).then(function (data) {
                    return data[i][j];
                });
            },
            data: function (desc, range) {
                return loader(desc).then(function (d) {
                    return range.filter(d.data, desc.size);
                });
            }
        };
    }
    function maskIt(desc) {
        return function (v) {
            return datatypes.mask(v, desc);
        };
    }
    function viaAPI2Loader() {
        var rowIds = null, rows = null, colIds = null, cols = null, data = null, hist = null;
        var r = {
            rowIds: function (desc, range) {
                if (rowIds == null) {
                    rowIds = ajax.getAPIJSON('/dataset/matrix/' + desc.id + '/rowIds').then(function (ids) {
                        return ranges.parse(ids);
                    });
                }
                return rowIds.then(function (d) {
                    return d.preMultiply(range, desc.size);
                });
            },
            rows: function (desc, range) {
                if (rows == null) {
                    rows = ajax.getAPIJSON('/dataset/matrix/' + desc.id + '/rows');
                }
                return rows.then(function (d) {
                    return range.dim(0).filter(d, desc.size[0]);
                });
            },
            colIds: function (desc, range) {
                if (colIds == null) {
                    colIds = ajax.getAPIJSON('/dataset/matrix/' + desc.id + '/colIds').then(function (ids) {
                        return ranges.parse(ids);
                    });
                }
                return colIds.then(function (d) {
                    return d.preMultiply(range, desc.size);
                });
            },
            cols: function (desc, range) {
                if (cols == null) {
                    cols = ajax.getAPIJSON('/dataset/matrix/' + desc.id + '/cols');
                }
                return cols.then(function (d) {
                    return range.dim(1).filter(d, desc.size[1]);
                });
            },
            ids: function (desc, range) {
                if (range.ndim === 1) {
                    return r.rowIds(desc, range);
                }
                range.dim(0);
                range.dim(1);
                var split = range.split();
                return Promise.all([
                    r.rowIds(desc, split[0] || ranges.all()),
                    r.colIds(desc, split[1] || ranges.all())
                ]).then(function (idsA) {
                    return ranges.join(idsA);
                });
            },
            hist: function (desc, range, bins) {
                if (bins === void 0) {
                    bins = NaN;
                }
                if (range.isAll && isNaN(bins)) {
                    if (hist == null) {
                        hist = ajax.getAPIJSON('/dataset/matrix/' + desc.id + '/hist').then(function (hist) {
                            return math.wrapHist(hist, desc.value.range);
                        });
                    }
                    return hist;
                }
                var args = { range: range.toString() };
                if (!isNaN(bins)) {
                    args.bins = bins;
                }
                return ajax.getAPIJSON('/dataset/matrix/' + desc.id + '/hist', args).then(function (hist) {
                    return math.wrapHist(hist, desc.value.range);
                });
            },
            at: function (desc, i, j) {
                return r.data(desc, ranges.list([i], [j])).then(function (data) {
                    return datatypes.mask(data[0][0], desc);
                });
            },
            data: function (desc, range) {
                if (range.isAll) {
                    if (data == null) {
                        data = ajax.getAPIJSON('/dataset/matrix/' + desc.id + '/raw').then(maskIt(desc));
                    }
                    return data;
                }
                if (data != null) {
                    return data.then(function (d) {
                        return range.filter(d, desc.size);
                    });
                }
                var size = desc.size;
                if (size[0] * size[1] < 1000 || desc.loadAtOnce) {
                    data = ajax.getAPIJSON('/dataset/matrix/' + desc.id + '/raw').then(maskIt(desc));
                    return data.then(function (d) {
                        return range.filter(d, desc.size);
                    });
                }
                return ajax.getAPIData('/dataset/matrix/' + desc.id + '/raw', { range: range.toString() }).then(maskIt(desc));
            },
            heatmapUrl: function (desc, range, options) {
                var args = {
                    format: options.format || 'png',
                    range: range.toString()
                };
                if (options.transpose === true) {
                    args.format_transpose = true;
                }
                if (options.range) {
                    args.format_min = options.range[0];
                    args.format_max = options.range[1];
                }
                if (options.palette) {
                    args.format_palette = options.palette;
                }
                return ajax.api2absURL('/dataset/matrix/' + desc.id + '/data', args);
            }
        };
        return r;
    }
    var Matrix = function (_super) {
        __extends(Matrix, _super);
        function Matrix(desc, loader) {
            _super.call(this, null);
            this.desc = desc;
            this.loader = loader;
            this._root = this;
            var d = desc;
            this.valuetype = d.value;
            this.rowtype = idtypes.resolve(d.rowtype);
            this.coltype = idtypes.resolve(d.coltype);
            this.t = new TransposedMatrix(this);
        }
        Object.defineProperty(Matrix.prototype, 'idtypes', {
            get: function () {
                return [
                    this.rowtype,
                    this.coltype
                ];
            },
            enumerable: true,
            configurable: true
        });
        Matrix.prototype.at = function (i, j) {
            return this.loader.at(this.desc, i, j);
        };
        Matrix.prototype.data = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.loader.data(this.desc, range);
        };
        Matrix.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.loader.ids(this.desc, range);
        };
        Matrix.prototype.cols = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.loader.cols(this.desc, range);
        };
        Matrix.prototype.colIds = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.loader.colIds(this.desc, range);
        };
        Matrix.prototype.rows = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.loader.rows(this.desc, range);
        };
        Matrix.prototype.rowIds = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.loader.rowIds(this.desc, range);
        };
        Matrix.prototype.hist = function (bins, range, containedIds) {
            if (range === void 0) {
                range = ranges.all();
            }
            if (containedIds === void 0) {
                containedIds = 0;
            }
            if (this.loader.hist) {
                return this.loader.hist(this.desc, range, bins);
            }
            return _super.prototype.hist.call(this, bins, range, containedIds);
        };
        Matrix.prototype.size = function () {
            return this.desc.size;
        };
        Matrix.prototype.persist = function () {
            return this.desc.id;
        };
        Matrix.prototype.heatmapUrl = function (range, options) {
            if (range === void 0) {
                range = ranges.all();
            }
            if (options === void 0) {
                options = {};
            }
            if (this.loader.heatmapUrl) {
                return this.loader.heatmapUrl(this.desc, range, options);
            }
            return null;
        };
        return Matrix;
    }(MatrixBase);
    exports.Matrix = Matrix;
    var TransposedMatrix = function (_super) {
        __extends(TransposedMatrix, _super);
        function TransposedMatrix(base) {
            _super.call(this, base);
            this.t = base;
        }
        Object.defineProperty(TransposedMatrix.prototype, 'desc', {
            get: function () {
                return this._root.desc;
            },
            enumerable: true,
            configurable: true
        });
        TransposedMatrix.prototype.persist = function () {
            return {
                root: this._root.persist(),
                transposed: true
            };
        };
        Object.defineProperty(TransposedMatrix.prototype, 'valuetype', {
            get: function () {
                return this._root.valuetype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransposedMatrix.prototype, 'rowtype', {
            get: function () {
                return this._root.coltype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransposedMatrix.prototype, 'coltype', {
            get: function () {
                return this._root.rowtype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransposedMatrix.prototype, 'idtypes', {
            get: function () {
                return [
                    this.rowtype,
                    this.coltype
                ];
            },
            enumerable: true,
            configurable: true
        });
        TransposedMatrix.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.t.ids(range ? range.swap() : undefined).then(function (ids) {
                return ids.swap();
            });
        };
        TransposedMatrix.prototype.cols = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.t.rows(range ? range.swap() : undefined);
        };
        TransposedMatrix.prototype.colIds = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.t.rowIds(range ? range.swap() : undefined);
        };
        TransposedMatrix.prototype.rows = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.t.cols(range ? range.swap() : undefined);
        };
        TransposedMatrix.prototype.rowIds = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.t.colIds(range ? range.swap() : undefined);
        };
        TransposedMatrix.prototype.view = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            if (range.isAll) {
                return this;
            }
            return new MatrixView(this._root, range.swap()).t;
        };
        TransposedMatrix.prototype.slice = function (col) {
            return new SliceRowVector(this._root, col);
        };
        TransposedMatrix.prototype.size = function () {
            var s = this.t.dim;
            return [
                s[1],
                s[0]
            ];
        };
        TransposedMatrix.prototype.at = function (i, j) {
            return this.t.at(j, i);
        };
        TransposedMatrix.prototype.data = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.t.data(range ? range.swap() : undefined).then(function (data) {
                return datatypes.transpose(data);
            });
        };
        TransposedMatrix.prototype.hist = function (bins, range, containedIds) {
            if (range === void 0) {
                range = ranges.all();
            }
            if (containedIds === void 0) {
                containedIds = 0;
            }
            return this.t.hist(bins, range ? range.swap() : undefined, 1 - containedIds);
        };
        TransposedMatrix.prototype.heatmapUrl = function (range, options) {
            if (range === void 0) {
                range = ranges.all();
            }
            if (options === void 0) {
                options = {};
            }
            options.transpose = options.transpose !== true;
            return this.t.heatmapUrl(range ? range.swap() : undefined, options);
        };
        return TransposedMatrix;
    }(MatrixBase);
    var MatrixView = function (_super) {
        __extends(MatrixView, _super);
        function MatrixView(root, range, t) {
            _super.call(this, root);
            this.range = range;
            this.t = t;
            this.range = range;
            range.dim(0);
            range.dim(1);
            if (!t) {
                this.t = new MatrixView(root.t, range.swap(), this);
            }
        }
        Object.defineProperty(MatrixView.prototype, 'desc', {
            get: function () {
                return this._root.desc;
            },
            enumerable: true,
            configurable: true
        });
        MatrixView.prototype.persist = function () {
            return {
                root: this._root.persist(),
                range: this.range.toString()
            };
        };
        MatrixView.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this._root.ids(this.range.preMultiply(range, this._root.dim));
        };
        MatrixView.prototype.cols = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this._root.cols(this.range.preMultiply(range, this._root.dim));
        };
        MatrixView.prototype.colIds = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this._root.colIds(this.range.preMultiply(range, this._root.dim));
        };
        MatrixView.prototype.rows = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this._root.rows(this.range.preMultiply(range, this._root.dim));
        };
        MatrixView.prototype.rowIds = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this._root.rowIds(this.range.preMultiply(range, this._root.dim));
        };
        MatrixView.prototype.size = function () {
            return this.range.size(this._root.dim);
        };
        MatrixView.prototype.at = function (i, j) {
            var inverted = this.range.invert([
                i,
                j
            ], this._root.dim);
            return this._root.at(inverted[0], inverted[1]);
        };
        MatrixView.prototype.data = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this._root.data(this.range.preMultiply(range, this._root.dim));
        };
        MatrixView.prototype.hist = function (bins, range, containedIds) {
            if (range === void 0) {
                range = ranges.all();
            }
            if (containedIds === void 0) {
                containedIds = 0;
            }
            return this._root.hist(bins, this.range.preMultiply(range, this._root.dim), containedIds);
        };
        MatrixView.prototype.heatmapUrl = function (range, options) {
            if (range === void 0) {
                range = ranges.all();
            }
            if (options === void 0) {
                options = {};
            }
            return this._root.heatmapUrl(this.range.preMultiply(range, this._root.dim), options);
        };
        MatrixView.prototype.view = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            if (range.isAll) {
                return this;
            }
            return new MatrixView(this._root, this.range.preMultiply(range, this.dim));
        };
        Object.defineProperty(MatrixView.prototype, 'valuetype', {
            get: function () {
                return this._root.valuetype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatrixView.prototype, 'rowtype', {
            get: function () {
                return this._root.rowtype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatrixView.prototype, 'coltype', {
            get: function () {
                return this._root.coltype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatrixView.prototype, 'idtypes', {
            get: function () {
                return [
                    this.rowtype,
                    this.coltype
                ];
            },
            enumerable: true,
            configurable: true
        });
        return MatrixView;
    }(MatrixBase);
    var SliceColVector = function (_super) {
        __extends(SliceColVector, _super);
        function SliceColVector(m, col) {
            _super.call(this, null);
            this.m = m;
            this.col = col;
            this.colRange = ranges.Range1D.from([this.col]);
            this.desc = {
                name: m.desc.name + '-c' + col,
                fqname: m.desc.fqname + '-c' + col,
                id: m.desc.id + '-c' + col,
                type: 'vector',
                size: this.dim,
                value: this.valuetype
            };
            this._root = this;
        }
        SliceColVector.prototype.persist = function () {
            return {
                root: this.m.persist(),
                col: this.col
            };
        };
        SliceColVector.prototype.restore = function (persisted) {
            var r = this;
            if (persisted && persisted.range) {
                r = r.view(ranges.parse(persisted.range));
            }
            return r;
        };
        Object.defineProperty(SliceColVector.prototype, 'valuetype', {
            get: function () {
                return this.m.valuetype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SliceColVector.prototype, 'idtype', {
            get: function () {
                return this.m.rowtype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SliceColVector.prototype, 'idtypes', {
            get: function () {
                return [this.idtype];
            },
            enumerable: true,
            configurable: true
        });
        SliceColVector.prototype.size = function () {
            return this.m.nrow;
        };
        SliceColVector.prototype.names = function (range) {
            return this.m.rows(range);
        };
        SliceColVector.prototype.ids = function (range) {
            return this.m.rowIds(range);
        };
        SliceColVector.prototype.at = function (i) {
            return this.m.at(i, this.col);
        };
        SliceColVector.prototype.data = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            var r = ranges.list(range.dim(0), this.colRange);
            return this.m.data(r).then(function (d) {
                if (d.length > 0 && Array.isArray(d[0])) {
                    return d.map(function (di) {
                        return di[0];
                    });
                }
                return d;
            });
        };
        SliceColVector.prototype.sort = function (compareFn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argSort(d, compareFn, thisArg);
                return _this.view(ranges.list(indices));
            });
        };
        SliceColVector.prototype.map = function (callbackfn, thisArg) {
            return null;
        };
        SliceColVector.prototype.filter = function (callbackfn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argFilter(d, callbackfn, thisArg);
                return _this.view(ranges.list(indices));
            });
        };
        return SliceColVector;
    }(vector_impl.VectorBase);
    var SliceRowVector = function (_super) {
        __extends(SliceRowVector, _super);
        function SliceRowVector(m, row) {
            _super.call(this, null);
            this.m = m;
            this.row = row;
            this.rowRange = ranges.Range1D.from([this.row]);
            this.desc = {
                name: m.desc.name + '-r' + row,
                fqname: m.desc.fqname + '-r' + row,
                id: m.desc.id + '-r' + row,
                type: 'vector',
                size: this.dim,
                value: this.valuetype
            };
            this._root = this;
        }
        SliceRowVector.prototype.persist = function () {
            return {
                root: this.m.persist(),
                row: this.row
            };
        };
        SliceRowVector.prototype.restore = function (persisted) {
            var r = this;
            if (persisted && persisted.range) {
                r = r.view(ranges.parse(persisted.range));
            }
            return r;
        };
        Object.defineProperty(SliceRowVector.prototype, 'valuetype', {
            get: function () {
                return this.m.valuetype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SliceRowVector.prototype, 'idtype', {
            get: function () {
                return this.m.coltype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SliceRowVector.prototype, 'idtypes', {
            get: function () {
                return [this.idtype];
            },
            enumerable: true,
            configurable: true
        });
        SliceRowVector.prototype.size = function () {
            return this.m.ncol;
        };
        SliceRowVector.prototype.names = function (range) {
            return this.m.cols(range);
        };
        SliceRowVector.prototype.ids = function (range) {
            return this.m.colIds(range);
        };
        SliceRowVector.prototype.at = function (i) {
            return this.m.at(this.row, i);
        };
        SliceRowVector.prototype.data = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            var r = ranges.list(this.rowRange, range.dim(0));
            return this.m.data(r).then(function (d) {
                return d[0];
            });
        };
        SliceRowVector.prototype.sort = function (compareFn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argSort(d, compareFn, thisArg);
                return _this.view(ranges.list(indices));
            });
        };
        SliceRowVector.prototype.map = function (callbackfn, thisArg) {
            return null;
        };
        SliceRowVector.prototype.filter = function (callbackfn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argFilter(d, callbackfn, thisArg);
                return _this.view(ranges.list(indices));
            });
        };
        return SliceRowVector;
    }(vector_impl.VectorBase);
    var ProjectedVector = function (_super) {
        __extends(ProjectedVector, _super);
        function ProjectedVector(m, f, this_f, valuetype, _idtype) {
            if (this_f === void 0) {
                this_f = m;
            }
            if (valuetype === void 0) {
                valuetype = m.valuetype;
            }
            if (_idtype === void 0) {
                _idtype = m.rowtype;
            }
            _super.call(this, null);
            this.m = m;
            this.f = f;
            this.this_f = this_f;
            this.valuetype = valuetype;
            this._idtype = _idtype;
            this.desc = {
                name: m.desc.name + '-p',
                fqname: m.desc.fqname + '-p',
                type: 'vector',
                id: m.desc.id + '-p',
                size: this.dim,
                value: this.valuetype
            };
            this._root = this;
        }
        ProjectedVector.prototype.persist = function () {
            return {
                root: this.m.persist(),
                f: this.f.toString(),
                valuetype: this.valuetype === this.m.valuetype ? undefined : this.valuetype,
                idtype: this.idtype === this.m.rowtype ? undefined : this.idtype.name
            };
        };
        ProjectedVector.prototype.restore = function (persisted) {
            var r = this;
            if (persisted && persisted.range) {
                r = r.view(ranges.parse(persisted.range));
            }
            return r;
        };
        Object.defineProperty(ProjectedVector.prototype, 'idtype', {
            get: function () {
                return this._idtype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProjectedVector.prototype, 'idtypes', {
            get: function () {
                return [this._idtype];
            },
            enumerable: true,
            configurable: true
        });
        ProjectedVector.prototype.size = function () {
            return this.m.nrow;
        };
        ProjectedVector.prototype.names = function (range) {
            return this.m.rows(range);
        };
        ProjectedVector.prototype.ids = function (range) {
            return this.m.rowIds(range);
        };
        ProjectedVector.prototype.at = function (i) {
            var _this = this;
            return this.m.data(ranges.list(i)).then(function (d) {
                return _this.f.call(_this.this_f, d[0]);
            });
        };
        ProjectedVector.prototype.data = function (range) {
            var _this = this;
            return this.m.data(range).then(function (d) {
                return d.map(_this.f, _this.this_f);
            });
        };
        ProjectedVector.prototype.sort = function (compareFn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argSort(d, compareFn, thisArg);
                return _this.view(ranges.list(indices));
            });
        };
        ProjectedVector.prototype.map = function (callbackfn, thisArg) {
            return null;
        };
        ProjectedVector.prototype.filter = function (callbackfn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argFilter(d, callbackfn, thisArg);
                return _this.view(ranges.list(indices));
            });
        };
        return ProjectedVector;
    }(vector_impl.VectorBase);
    function create(desc, loader) {
        if (C.isFunction(desc.loader)) {
            return new Matrix(desc, adapterOne2Two(desc.loader));
        }
        return new Matrix(desc, loader ? loader : viaAPI2Loader());
    }
    exports.create = create;
}(require, exports, require('./main'), require('./ajax'), require('./range'), require('./idtype'), require('./datatype'), require('./vector_impl'), require('./math')));
},{"./ajax":3,"./datatype":6,"./idtype":9,"./main":13,"./math":15,"./range":20,"./vector_impl":27}],18:[function(require,module,exports){
(function (require, exports, C, vis, ranges, geom) {
    var ProxyMetaData = function () {
        function ProxyMetaData(proxy) {
            this.proxy = proxy;
        }
        Object.defineProperty(ProxyMetaData.prototype, 'scaling', {
            get: function () {
                var p = this.proxy();
                return p ? p.scaling : 'free';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProxyMetaData.prototype, 'rotation', {
            get: function () {
                var p = this.proxy();
                return p ? p.rotation : 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProxyMetaData.prototype, 'sizeDependsOnDataDimension', {
            get: function () {
                var p = this.proxy();
                return p ? p.sizeDependsOnDataDimension : [
                    false,
                    false
                ];
            },
            enumerable: true,
            configurable: true
        });
        return ProxyMetaData;
    }();
    function selectVis(initial, visses) {
        switch (typeof initial) {
        case 'number':
            return visses[Math.max(0, Math.min(initial, visses.length - 1))];
        case 'string':
            return visses[Math.max(0, C.indexOf(visses, function (v) {
                return v.id === initial;
            }))];
        default:
            return visses[Math.max(0, visses.indexOf(initial))];
        }
    }
    function clearNode(parent) {
        var node = parent.firstChild;
        while ((node = parent.firstChild) != null) {
            parent.removeChild(node);
        }
    }
    function createNode(parent, type, clazz) {
        if (type === void 0) {
            type = 'div';
        }
        var node = document.createElement(type);
        if (clazz) {
            clazz.split(' ').forEach(function (c) {
                return node.classList.add(c);
            });
        }
        parent.appendChild(node);
        return node;
    }
    var MultiForm = function (_super) {
        __extends(MultiForm, _super);
        function MultiForm(data, parent, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            _super.call(this);
            this.data = data;
            this.options = options;
            this.metaData_ = new ProxyMetaData(function () {
                return _this.actDesc;
            });
            this.options = C.mixin({
                initialVis: 0,
                all: {}
            }, options);
            this.node = createNode(parent, 'div', 'multiform');
            parent.__data__ = data;
            vis.assignVis(this.node, this);
            this.visses = vis.list(data);
            this.build();
        }
        Object.defineProperty(MultiForm.prototype, 'asMetaData', {
            get: function () {
                return this.metaData_;
            },
            enumerable: true,
            configurable: true
        });
        MultiForm.prototype.build = function () {
            this.content = createNode(this.node, 'div', 'content');
            this.switchTo(this.options.initialVis);
        };
        MultiForm.prototype.destroy = function () {
            if (this.actVis && C.isFunction(this.actVis.destroy)) {
                this.actVis.destroy();
            }
            _super.prototype.destroy.call(this);
        };
        MultiForm.prototype.persist = function () {
            return {
                id: this.actDesc ? this.actDesc.id : null,
                content: this.actVis && C.isFunction(this.actVis.persist) ? this.actVis.persist() : null
            };
        };
        MultiForm.prototype.restore = function (persisted) {
            var that = this;
            if (persisted.id) {
                var selected = C.search(this.visses, function (e) {
                    return e.id === persisted.id;
                });
                if (selected) {
                    return this.switchTo(selected).then(function (vis) {
                        if (vis && persisted.content && C.isFunction(vis.restore)) {
                            return Promise.resolve(vis.restore(persisted.content)).then(function () {
                                return that;
                            });
                        }
                        return that;
                    });
                }
            }
            return Promise.resolve(that);
        };
        MultiForm.prototype.locate = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var p = this.actVisPromise || Promise.resolve(null);
            return p.then(function () {
                var aa = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    aa[_i - 0] = arguments[_i];
                }
                var vis = aa.length > 0 ? aa[0] : undefined;
                if (vis && C.isFunction(vis.locate)) {
                    return vis.locate.apply(vis, args);
                } else {
                    return Promise.resolve(aa.length === 1 ? undefined : new Array(args.length));
                }
            });
        };
        MultiForm.prototype.locateById = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var p = this.actVisPromise || Promise.resolve(null);
            return p.then(function () {
                var aa = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    aa[_i - 0] = arguments[_i];
                }
                var vis = aa.length > 0 ? aa[0] : undefined;
                if (vis && C.isFunction(vis.locateById)) {
                    return vis.locateById.apply(vis, args);
                } else {
                    return Promise.resolve(aa.length === 1 ? undefined : new Array(args.length));
                }
            });
        };
        MultiForm.prototype.transform = function (scale, rotate) {
            var _this = this;
            if (this.actVis) {
                if (arguments.length === 0) {
                    return this.actVis.transform();
                } else {
                    var t = function (event, new_, old) {
                        _this.fire('transform', new_, old);
                    };
                    this.actVis.on('transform', t);
                    var r = this.actVis.transform(scale, rotate);
                    this.actVis.off('transform', t);
                    return r;
                }
            }
            if (this.actVisPromise && arguments.length > 0) {
                this.actVisPromise.then(function (v) {
                    return _this.transform(scale, rotate);
                });
                return;
            }
            return {
                scale: [
                    1,
                    1
                ],
                rotate: 0
            };
        };
        Object.defineProperty(MultiForm.prototype, 'act', {
            get: function () {
                return this.actDesc;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiForm.prototype, 'actLoader', {
            get: function () {
                return this.actVisPromise;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiForm.prototype, 'size', {
            get: function () {
                if (this.actVis) {
                    return this.actVis.size;
                }
                return [
                    100,
                    100
                ];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiForm.prototype, 'rawSize', {
            get: function () {
                if (this.actVis) {
                    return this.actVis.rawSize;
                }
                return [
                    100,
                    100
                ];
            },
            enumerable: true,
            configurable: true
        });
        MultiForm.prototype.switchTo = function (param) {
            var _this = this;
            var vis = selectVis(param, this.visses);
            if (vis === this.actDesc) {
                return this.actVisPromise;
            }
            if (this.actVis) {
                this.actVis.destroy();
                this.actVis = null;
                this.actVisPromise = null;
            }
            clearNode(this.content);
            var bak = this.actDesc;
            this.actDesc = vis;
            this.markReady(false);
            this.fire('change', vis, bak);
            this.actVis = null;
            this.actVisPromise = null;
            if (vis) {
                return this.actVisPromise = vis.load().then(function (plugin) {
                    if (_this.actDesc !== vis) {
                        return null;
                    }
                    _this.actVis = plugin.factory(_this.data, _this.content, C.mixin({}, _this.options.all, _this.options[vis.id] || {}));
                    _this.actVis.on('ready', function () {
                        return _this.markReady();
                    });
                    _this.fire('changed', vis, bak);
                    return _this.actVis;
                });
            } else {
                return Promise.resolve(null);
            }
        };
        return MultiForm;
    }(vis.AVisInstance);
    exports.MultiForm = MultiForm;
    var GridElem = function () {
        function GridElem(range, pos, data) {
            this.range = range;
            this.pos = pos;
            this.data = data;
        }
        GridElem.prototype.setContent = function (c) {
            this.content = c;
            this.content.__data__ = this.data;
        };
        GridElem.prototype.subrange = function (r) {
            var ri = this.range.intersect(r);
            return this.range.indexOf(ri);
        };
        Object.defineProperty(GridElem.prototype, 'hasOne', {
            get: function () {
                return this.actVis != null;
            },
            enumerable: true,
            configurable: true
        });
        GridElem.prototype.destroy = function () {
            if (this.actVis && C.isFunction(this.actVis.destroy)) {
                this.actVis.destroy();
            }
        };
        Object.defineProperty(GridElem.prototype, 'size', {
            get: function () {
                return this.actVis ? this.actVis.size : [
                    100,
                    100
                ];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridElem.prototype, 'rawSize', {
            get: function () {
                return this.actVis ? this.actVis.rawSize : [
                    100,
                    100
                ];
            },
            enumerable: true,
            configurable: true
        });
        GridElem.prototype.persist = function () {
            return {
                range: this.range.toString(),
                content: this.actVis && C.isFunction(this.actVis.persist) ? this.actVis.persist() : null
            };
        };
        GridElem.prototype.restore = function (persisted) {
            return null;
        };
        GridElem.prototype.switchDestroy = function () {
            clearNode(this.content);
            if (this.actVis && C.isFunction(this.actVis.destroy)) {
                this.actVis.destroy();
            }
            this.actVis = null;
        };
        GridElem.prototype.build = function (plugin, options) {
            this.actVis = plugin.factory(this.data, this.content, options);
            vis.assignVis(this.content, this.actVis);
            return this.actVis;
        };
        Object.defineProperty(GridElem.prototype, 'location', {
            get: function () {
                var offset = C.offset(this.content);
                return {
                    x: offset.left,
                    y: offset.top
                };
            },
            enumerable: true,
            configurable: true
        });
        GridElem.prototype.transform = function (scale, rotate) {
            if (this.actVis) {
                if (arguments.length > 0) {
                    return this.actVis.transform(scale, rotate);
                } else {
                    return this.actVis.transform();
                }
            }
            return {
                scale: [
                    1,
                    1
                ],
                rotate: 0
            };
        };
        return GridElem;
    }();
    function sum(arr) {
        return arr.reduce(function (v, x) {
            return v + x;
        }, 0);
    }
    function max(arr, acc) {
        if (arr.length === 0) {
            return NaN;
        }
        return arr.reduce(function (p, act) {
            return Math.max(p, acc(act));
        }, -Infinity);
    }
    var MultiFormGrid = function (_super) {
        __extends(MultiFormGrid, _super);
        function MultiFormGrid(data, range, parent, viewFactory, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            _super.call(this);
            this.data = data;
            this.range = range;
            this.options = options;
            this.metaData_ = new ProxyMetaData(function () {
                return _this.actDesc;
            });
            this.options = C.mixin({
                initialVis: 0,
                singleRowOptimization: true
            }, options);
            this.node = createNode(parent, 'div', 'multiformgrid');
            parent.__data__ = data;
            vis.assignVis(this.node, this);
            this.visses = vis.list(data);
            var dims = this.dims = range.dims.map(function (dim) {
                if (dim instanceof ranges.CompositeRange1D) {
                    return dim.groups;
                } else if (dim instanceof ranges.Range1DGroup) {
                    return [dim];
                } else {
                    return [ranges.asUngrouped(dim)];
                }
            });
            var grid = this.grid = [];
            function product(level, range, pos) {
                if (level === dims.length) {
                    var r = range.length === 0 ? ranges.all() : ranges.list(range.slice());
                    grid.push(new GridElem(r, pos.slice(), viewFactory(data, r, pos.slice())));
                } else {
                    dims[level].forEach(function (group, i) {
                        range.push(group);
                        pos.push(i);
                        product(level + 1, range, pos);
                        range.pop();
                        pos.pop();
                    });
                }
            }
            product(0, [], []);
            this.build();
        }
        Object.defineProperty(MultiFormGrid.prototype, 'dimSizes', {
            get: function () {
                return this.dims.map(function (d) {
                    return d.length;
                });
            },
            enumerable: true,
            configurable: true
        });
        MultiFormGrid.prototype.toElem = function (pos) {
            var s = this.dimSizes;
            if (s.length === 1) {
                return this.grid[pos[0]];
            }
            return this.grid[pos[0] * s[1] + (pos[1] || 0)];
        };
        MultiFormGrid.prototype.getRange = function () {
            var indices = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                indices[_i - 0] = arguments[_i];
            }
            var elem = this.toElem(indices);
            return elem.range;
        };
        MultiFormGrid.prototype.getData = function () {
            var indices = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                indices[_i - 0] = arguments[_i];
            }
            var elem = this.toElem(indices);
            return elem.data;
        };
        MultiFormGrid.prototype.getBounds = function () {
            var indices = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                indices[_i - 0] = arguments[_i];
            }
            var elem = this.toElem(indices);
            var absloc = elem.location;
            var size = elem.size;
            var parentLoc = C.offset(this.content);
            return geom.rect(absloc.x - parentLoc.left, absloc.y - parentLoc.top, size[0], size[1]);
        };
        Object.defineProperty(MultiFormGrid.prototype, 'asMetaData', {
            get: function () {
                return this.metaData_;
            },
            enumerable: true,
            configurable: true
        });
        MultiFormGrid.prototype.build = function () {
            var _this = this;
            this.content = this.node;
            var wrap = this.options.wrap || C.identity;
            if (this.dims.length === 1) {
                if (this.options.singleRowOptimization) {
                    this.grid.forEach(function (elem) {
                        return elem.setContent(wrap(createNode(_this.node, 'div', 'content gridrow'), elem.data, elem.range, elem.pos));
                    });
                } else {
                    this.grid.forEach(function (elem) {
                        var n = createNode(_this.node, 'div', 'gridrow');
                        var nn = createNode(n, 'div', 'content');
                        nn.style.display = 'inline-block';
                        elem.setContent(wrap(nn, elem.data, elem.range, elem.pos));
                    });
                }
            } else {
                var ndim = this.dimSizes;
                for (var i = 0; i < ndim[0]; ++i) {
                    var row = createNode(this.node, 'div', 'gridrow');
                    for (var j = 0; j < ndim[1]; ++j) {
                        var elem = this.grid[i * ndim[1] + j];
                        var nn = createNode(row, 'div', 'content');
                        nn.style.display = 'inline-block';
                        elem.setContent(wrap(nn, elem.data, elem.range, elem.pos));
                    }
                }
            }
            this.switchTo(this.options.initialVis);
        };
        MultiFormGrid.prototype.destroy = function () {
            this.grid.forEach(function (elem) {
                elem.destroy();
            });
            _super.prototype.destroy.call(this);
        };
        MultiFormGrid.prototype.transform = function (scale, rotate) {
            if (this.grid[0].hasOne) {
                var bak = this.grid[0].transform();
                if (arguments.length > 0) {
                    this.grid.forEach(function (g) {
                        return g.transform(scale, rotate);
                    });
                    this.fire('transform', {
                        scale: scale,
                        rotate: rotate
                    }, bak);
                }
                return bak;
            }
            return {
                scale: [
                    1,
                    1
                ],
                rotate: 0
            };
        };
        MultiFormGrid.prototype.persist = function () {
            return {
                id: this.actDesc ? this.actDesc.id : null,
                contents: this.grid.map(function (elem) {
                    return elem.persist();
                })
            };
        };
        MultiFormGrid.prototype.restore = function (persisted) {
            var that = this;
            if (persisted.id) {
                var selected = C.search(this.visses, function (e) {
                    return e.id === persisted.id;
                });
                if (selected) {
                    return this.switchTo(selected).then(function (vis) {
                        if (vis && persisted.content && C.isFunction(vis.restore)) {
                            return Promise.resolve(vis.restore(persisted.content)).then(function () {
                                return that;
                            });
                        }
                        return Promise.resolve(that);
                    });
                }
            }
            return Promise.resolve(that);
        };
        MultiFormGrid.prototype.locateGroup = function (range) {
            if (range.isAll || range.isNone) {
                var s = this.size;
                return Promise.resolve(geom.rect(0, 0, s[0], s[1]));
            }
            var parentLoc = C.offset(this.content);
            function relativePos(pos) {
                return {
                    x: pos.x - parentLoc.left,
                    y: pos.y - parentLoc.top
                };
            }
            function filterTo() {
                var inElems = [], i, matched, g;
                for (i = 0; i < this.grid.length; ++i) {
                    g = this.grid[i];
                    matched = g.subrange(range);
                    if (!matched.isNone) {
                        inElems.push({
                            g: g,
                            pos: relativePos(g.location),
                            r: matched
                        });
                    }
                }
                return inElems;
            }
            var inElems = filterTo.call(this);
            if (inElems.length === 1) {
                return inElems[0].g.actVis.locate(inElems[0].r).then(function (loc) {
                    return loc ? loc.shift(inElems[0].pos) : loc;
                });
            }
            return Promise.all(inElems.map(function (elem) {
                return elem.g.actVis.locate(elem.r);
            })).then(function (locations) {
                locations = locations.map(function (loc, i) {
                    return loc ? loc.shift(inElems[i].pos) : loc;
                }).filter(function (loc) {
                    return loc != null;
                });
                var base = locations[0].aabb(), x = base.x, y = base.y, x2 = base.x2, y2 = base.y2;
                locations.forEach(function (loc) {
                    var aab = loc.aabb();
                    x = Math.min(x, aab.x);
                    y = Math.min(y, aab.y);
                    x2 = Math.min(x2, aab.x2);
                    y2 = Math.min(y2, aab.y2);
                });
                return geom.rect(x, y, x2 - x, y2 - y);
            });
        };
        MultiFormGrid.prototype.locateGroupById = function (range) {
            var _this = this;
            return this.data.ids().then(function (ids) {
                return _this.locateGroup(ids.indexOf(range));
            });
        };
        MultiFormGrid.prototype.locate = function () {
            var p = this.actVisPromise || Promise.resolve(null), args = C.argList(arguments);
            return p.then(function (visses) {
                var _this = this;
                if (!visses) {
                    return Promise.resolve(arguments.length === 1 ? undefined : new Array(args.length));
                }
                if (visses.length === 1) {
                    return visses[0].locate.apply(visses[0], args);
                } else {
                    if (arguments.length === 1) {
                        return this.locateGroup(arguments[0]);
                    } else {
                        return Promise.all(args.map(function (arg) {
                            return _this.locateGroup(arg);
                        }));
                    }
                }
            });
        };
        MultiFormGrid.prototype.locateById = function () {
            var range = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                range[_i - 0] = arguments[_i];
            }
            var p = this.actVisPromise || Promise.resolve(null), args = C.argList(arguments);
            return p.then(function (visses) {
                var _this = this;
                if (!visses) {
                    return Promise.resolve(arguments.length === 1 ? undefined : new Array(args.length));
                }
                if (visses.length === 1) {
                    return visses[0].locateById.apply(visses[0], args);
                } else {
                    if (args.length === 1) {
                        return this.locateGroupById(args[0]);
                    } else {
                        return Promise.all(args.map(function (arg) {
                            return _this.locateGroupById(arg);
                        }));
                    }
                }
            });
        };
        Object.defineProperty(MultiFormGrid.prototype, 'act', {
            get: function () {
                return this.actDesc;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiFormGrid.prototype, 'actLoader', {
            get: function () {
                return this.actVisPromise;
            },
            enumerable: true,
            configurable: true
        });
        MultiFormGrid.prototype.gridSize = function (raw) {
            if (raw === void 0) {
                raw = false;
            }
            var sizes = this.grid.map(raw ? function (elem) {
                return elem.rawSize;
            } : function (elem) {
                return elem.size;
            });
            if (this.dims.length === 1) {
                return {
                    cols: [max(sizes, function (s) {
                            return s[0];
                        })],
                    rows: sizes.map(function (s) {
                        return s[1];
                    }),
                    grid: sizes.map(function (s) {
                        return [s];
                    })
                };
            } else {
                var cols = this.dims[1].length;
                var grid = this.dims[0].map(function (row, i) {
                    return sizes.slice(i * cols, (i + 1) * cols);
                });
                return {
                    cols: this.dims[1].map(function (d, i) {
                        return max(grid, function (row) {
                            return row[i][0];
                        });
                    }),
                    rows: grid.map(function (row) {
                        return max(row, function (s) {
                            return s[1];
                        });
                    }),
                    grid: grid
                };
            }
        };
        Object.defineProperty(MultiFormGrid.prototype, 'size', {
            get: function () {
                var gridSize = this.gridSize();
                return [
                    sum(gridSize.cols),
                    sum(gridSize.rows)
                ];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultiFormGrid.prototype, 'rawSize', {
            get: function () {
                var gridSize = this.gridSize(true);
                return [
                    sum(gridSize.cols),
                    sum(gridSize.rows)
                ];
            },
            enumerable: true,
            configurable: true
        });
        MultiFormGrid.prototype.switchTo = function (param) {
            var _this = this;
            var vis = selectVis(param, this.visses);
            if (vis === this.actDesc) {
                return this.actVisPromise;
            }
            this.grid.forEach(function (elem) {
                return elem.switchDestroy();
            });
            var bak = this.actDesc;
            this.actDesc = vis;
            this.markReady(false);
            this.fire('change', vis, bak);
            this.actVisPromise = null;
            if (vis) {
                return this.actVisPromise = vis.load().then(function (plugin) {
                    if (_this.actDesc !== vis) {
                        return null;
                    }
                    var options = C.mixin({}, _this.options.all, _this.options[vis.id] || {});
                    var r = _this.grid.map(function (elem) {
                        return elem.build(plugin, options);
                    });
                    var c = r.length;
                    r.forEach(function (ri) {
                        ri.on('ready', function () {
                            c--;
                            if (c === 0) {
                                _this.markReady();
                            }
                        });
                    });
                    _this.fire('changed', vis, bak);
                    return r;
                });
            } else {
                return Promise.resolve([]);
            }
        };
        return MultiFormGrid;
    }(vis.AVisInstance);
    exports.MultiFormGrid = MultiFormGrid;
    function toAvailableVisses(forms) {
        if (forms.length === 0) {
            return [];
        }
        if (forms.length === 1) {
            return forms[0].visses;
        }
        return forms[0].visses.filter(function (vis) {
            return forms.every(function (f) {
                return f.visses.indexOf(vis) >= 0;
            });
        });
    }
    exports.toAvailableVisses = toAvailableVisses;
    function addIconVisChooser(toolbar) {
        var forms = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            forms[_i - 1] = arguments[_i];
        }
        var s = document.createElement('div');
        toolbar.insertBefore(s, toolbar.firstChild);
        var visses = toAvailableVisses(forms);
        visses.forEach(function (v) {
            var child = createNode(s, 'i');
            v.iconify(child);
            child.__data__ = v;
            child.onclick = function () {
                return forms.forEach(function (f) {
                    return f.switchTo(v);
                });
            };
        });
    }
    exports.addIconVisChooser = addIconVisChooser;
    function addSelectVisChooser(toolbar) {
        var forms = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            forms[_i - 1] = arguments[_i];
        }
        var s = document.createElement('select');
        toolbar.insertBefore(s, toolbar.firstChild);
        var visses = toAvailableVisses(forms);
        visses.forEach(function (v, i) {
            var child = createNode(s, 'option');
            child.__data__ = v;
            child.setAttribute('value', String(i));
            child.textContent = v.name;
        });
        s.onchange = function () {
            return forms.forEach(function (f) {
                return f.switchTo(visses[s.selectedIndex]);
            });
        };
    }
    exports.addSelectVisChooser = addSelectVisChooser;
    function create(data, parent, options) {
        return new MultiForm(data, parent, options);
    }
    exports.create = create;
    function createGrid(data, range, parent, viewFactory, options) {
        return new MultiFormGrid(data, range, parent, viewFactory, options);
    }
    exports.createGrid = createGrid;
}(require, exports, require('./main'), require('./vis'), require('./range'), require('./geom')));
},{"./geom":8,"./main":13,"./range":20,"./vis":28}],19:[function(require,module,exports){
(function (require, exports, requir_e, C) {
    function toInstance(instance, desc) {
        return {
            desc: desc,
            impl: instance,
            factory: instance[desc.factory]
        };
    }
    function loadHelper(desc) {
        return function () {
            if (desc.instance || desc.loader) {
                return Promise.resolve(desc.instance || desc.loader()).then(function (impl) {
                    return toInstance(impl, desc);
                });
            }
            return new Promise(function (resolve) {
                requir_e([desc.module], function (m) {
                    resolve(toInstance(m, desc));
                });
            });
        };
    }
    function parsePlugin(desc, baseUrl, relativeUrl) {
        if (baseUrl === void 0) {
            baseUrl = '';
        }
        if (relativeUrl === void 0) {
            relativeUrl = '..';
        }
        desc = C.mixin({
            name: desc.id,
            folder: desc.folder,
            file: 'main',
            factory: 'create',
            description: '',
            version: '1.0'
        }, desc);
        desc = C.mixin({
            'module': desc.folder + '/' + desc.file,
            baseUrl: baseUrl + '/' + desc.folder
        }, desc);
        desc.module = relativeUrl + '/' + desc.module;
        desc.load = loadHelper(desc);
        return desc;
    }
    function parsePlugins(descs, baseUrl, relativeUrl) {
        if (baseUrl === void 0) {
            baseUrl = '';
        }
        if (relativeUrl === void 0) {
            relativeUrl = '..';
        }
        return descs.map(function (desc) {
            return parsePlugin(desc, baseUrl, relativeUrl);
        });
    }
    var _extensions = [];
    function list(filter) {
        if (filter === void 0) {
            filter = C.constantTrue;
        }
        if (typeof filter === 'string') {
            var v = filter;
            filter = function (desc) {
                return desc.type === v;
            };
        }
        if (_extensions.length === 0) {
            _extensions = parsePlugins(C.registry.extensions, C.registry.baseUrl, C.registry.relativeUrl);
        }
        if (filter === C.constantTrue) {
            return _extensions;
        }
        return _extensions.filter(filter);
    }
    exports.list = list;
    function push(desc, baseUrl, relativeUrl) {
        if (baseUrl === void 0) {
            baseUrl = C.registry.baseUrl;
        }
        if (relativeUrl === void 0) {
            relativeUrl = C.registry.relativeUrl;
        }
        if (_extensions.length === 0) {
            _extensions = parsePlugins(C.registry.extensions, C.registry.baseUrl, C.registry.relativeUrl);
        }
        var p = parsePlugin(desc, baseUrl, relativeUrl);
        _extensions.push(p);
        return p;
    }
    exports.push = push;
    function pushAll(descs, baseUrl, relativeUrl) {
        if (baseUrl === void 0) {
            baseUrl = C.registry.baseUrl;
        }
        if (relativeUrl === void 0) {
            relativeUrl = C.registry.relativeUrl;
        }
        return descs.map(function (desc) {
            return push(desc, baseUrl, relativeUrl);
        });
    }
    exports.pushAll = pushAll;
    function load(plugins) {
        if (plugins.length === 0) {
            return Promise.resolve([]);
        }
        return new Promise(function (resolve) {
            if (plugins.every(function (desc) {
                    return !!desc.instance || !!desc.loader;
                })) {
                Promise.all(plugins.map(function (p) {
                    return p.instance || p.loader();
                })).then(function (impls) {
                    return impls.map(function (impl, i) {
                        return toInstance(impl, plugins[i]);
                    });
                }).then(resolve);
            } else {
                requir_e(plugins.map(function (desc) {
                    return desc.module;
                }), function () {
                    var impls = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        impls[_i - 0] = arguments[_i];
                    }
                    resolve(impls.map(function (p, i) {
                        return toInstance(p, plugins[i]);
                    }));
                });
            }
        });
    }
    exports.load = load;
}(require, exports, require, require('./main')));
},{"./main":13}],20:[function(require,module,exports){
(function (require, exports, C, Iterator) {
    'use strict';
    function fix(v, size) {
        return v < 0 ? size + 1 + v : v;
    }
    var RangeElem = function () {
        function RangeElem(from, to, step) {
            if (to === void 0) {
                to = -1;
            }
            if (step === void 0) {
                step = 1;
            }
            this.from = from;
            this.to = to;
            this.step = step;
        }
        Object.defineProperty(RangeElem.prototype, 'isAll', {
            get: function () {
                return this.from === 0 && this.to === -1 && this.step === 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RangeElem.prototype, 'isSingle', {
            get: function () {
                return this.from + this.step === this.to;
            },
            enumerable: true,
            configurable: true
        });
        RangeElem.all = function () {
            return new RangeElem(0, -1, 1);
        };
        RangeElem.none = function () {
            return new RangeElem(0, 0, 1);
        };
        RangeElem.single = function (val) {
            return new SingleRangeElem(val);
        };
        RangeElem.range = function (from, to, step) {
            if (to === void 0) {
                to = -1;
            }
            if (step === void 0) {
                step = 1;
            }
            if (from + step === to) {
                return RangeElem.single(from);
            }
            return new RangeElem(from, to, step);
        };
        RangeElem.prototype.size = function (size) {
            var t = fix(this.to, size), f = fix(this.from, size);
            if (this.step === 1) {
                return Math.max(t - f, 0);
            } else if (this.step === -1) {
                return Math.max(f - t, 0);
            }
            var d = this.step > 0 ? t - f + 1 : f - t + 1;
            var s = Math.abs(this.step);
            if (d <= 0) {
                return 0;
            }
            return Math.floor(d / s);
        };
        RangeElem.prototype.clone = function () {
            return new RangeElem(this.from, this.to, this.step);
        };
        RangeElem.prototype.reverse = function () {
            var t = this.from < 0 ? this.from : this.from + 1;
            var f = this.to < 0 ? this.to : this.to - 1;
            return new RangeElem(f, t, -this.step);
        };
        RangeElem.prototype.invert = function (index, size) {
            if (this.isAll) {
                return index;
            }
            return fix(this.from, size) + index * this.step;
        };
        RangeElem.prototype.iter = function (size) {
            return Iterator.range(fix(this.from, size), fix(this.to, size), this.step);
        };
        Object.defineProperty(RangeElem.prototype, '__iterator__', {
            get: function () {
                return this.iter();
            },
            enumerable: true,
            configurable: true
        });
        RangeElem.prototype.contains = function (value, size) {
            var f = fix(this.from, size);
            var t = fix(this.to, size);
            if (this.step === -1) {
                return value <= f && value > t;
            } else {
                return value >= f && value < t;
            }
        };
        RangeElem.prototype.toString = function () {
            if (this.isAll) {
                return '';
            }
            if (this.isSingle) {
                return this.from.toString();
            }
            var r = this.from + ':' + this.to;
            if (this.step !== 1) {
                r += ':' + this.step;
            }
            return r;
        };
        RangeElem.parse = function (code) {
            if (code.length === 0) {
                return RangeElem.all();
            }
            var parts = code.split(':');
            if (parts.length === 1) {
                return RangeElem.single(parseFloat(parts[0]));
            } else if (parts.length === 2) {
                return new RangeElem(parseFloat(parts[0]), parseFloat(parts[1]));
            }
            return new RangeElem(parseFloat(parts[0]), parseFloat(parts[1]), parseFloat(parts[2]));
        };
        return RangeElem;
    }();
    exports.RangeElem = RangeElem;
    var SingleRangeElem = function () {
        function SingleRangeElem(from) {
            this.from = from;
        }
        Object.defineProperty(SingleRangeElem.prototype, 'step', {
            get: function () {
                return 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SingleRangeElem.prototype, 'to', {
            get: function () {
                return this.from + 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SingleRangeElem.prototype, 'isAll', {
            get: function () {
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SingleRangeElem.prototype, 'isSingle', {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        SingleRangeElem.prototype.size = function (size) {
            return 1;
        };
        SingleRangeElem.prototype.clone = function () {
            return new SingleRangeElem(this.from);
        };
        SingleRangeElem.prototype.contains = function (value, size) {
            return fix(this.from, size) === value;
        };
        SingleRangeElem.prototype.reverse = function () {
            return this.clone();
        };
        SingleRangeElem.prototype.invert = function (index, size) {
            return fix(this.from, size) + index;
        };
        SingleRangeElem.prototype.iter = function (size) {
            return Iterator.single(fix(this.from, size));
        };
        Object.defineProperty(SingleRangeElem.prototype, '__iterator__', {
            get: function () {
                return this.iter();
            },
            enumerable: true,
            configurable: true
        });
        SingleRangeElem.prototype.toString = function () {
            return this.from.toString();
        };
        return SingleRangeElem;
    }();
    exports.SingleRangeElem = SingleRangeElem;
    var Range1D = function () {
        function Range1D(arg) {
            if (arg instanceof Range1D) {
                this.arr = arg.arr;
            } else if (Array.isArray(arg)) {
                this.arr = arg;
            } else {
                this.arr = [];
            }
        }
        Object.defineProperty(Range1D.prototype, 'length', {
            get: function () {
                return this.size();
            },
            enumerable: true,
            configurable: true
        });
        Range1D.all = function () {
            return new Range1D([RangeElem.all()]);
        };
        Range1D.none = function () {
            return new Range1D();
        };
        Range1D.from = function (indices) {
            return new Range1D(Range1D.compress(indices));
        };
        Range1D.compress = function (indices) {
            if (indices.length === 0) {
                return [];
            } else if (indices.length === 1) {
                return [RangeElem.single(indices[0])];
            }
            var r = new Array(), deltas = indices.slice(1).map(function (e, i) {
                    return e - indices[i];
                }), start = 0, act = 1, i = 0;
            while (act < indices.length) {
                while (deltas[start] === deltas[act - 1] && act < indices.length) {
                    act++;
                }
                if (act === start + 1) {
                    r.push(RangeElem.single(indices[start]));
                } else {
                    if (Math.abs(deltas[start]) === 1) {
                        r.push(RangeElem.range(indices[start], indices[act - 1] + deltas[start], deltas[start]));
                    } else {
                        for (i = start; i < act; i++) {
                            r.push(RangeElem.single(indices[i]));
                        }
                    }
                }
                start = act;
                act += 1;
            }
            while (start < indices.length) {
                r.push(RangeElem.single(indices[start++]));
            }
            return r;
        };
        Object.defineProperty(Range1D.prototype, 'isAll', {
            get: function () {
                return this.arr.length === 1 && this.at(0).isAll;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Range1D.prototype, 'isNone', {
            get: function () {
                return this.arr.length === 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Range1D.prototype, 'isList', {
            get: function () {
                return this.arr.every(function (d) {
                    return d.isSingle;
                });
            },
            enumerable: true,
            configurable: true
        });
        Range1D.prototype.push = function () {
            var items = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                items[_i - 0] = arguments[_i];
            }
            function p(item) {
                if (typeof item === 'string') {
                    return RangeElem.parse(item.toString());
                } else if (typeof item === 'number') {
                    return RangeElem.single(item);
                } else if (Array.isArray(item)) {
                    return new RangeElem(item[0], item[1], item[2]);
                }
                return item;
            }
            return this.arr.push.apply(this.arr, items.map(p));
        };
        Range1D.prototype.pushSlice = function (from, to, step) {
            if (to === void 0) {
                to = -1;
            }
            if (step === void 0) {
                step = 1;
            }
            this.arr.push(new RangeElem(from, to, step));
        };
        Range1D.prototype.pushList = function (indices) {
            this.arr.push.apply(this.arr, Range1D.compress(indices));
        };
        Range1D.prototype.setSlice = function (from, to, step) {
            if (to === void 0) {
                to = -1;
            }
            if (step === void 0) {
                step = 1;
            }
            this.arr.length = 0;
            this.pushSlice(from, to, step);
        };
        Range1D.prototype.setList = function (indices) {
            this.arr.length = 0;
            this.pushList(indices);
        };
        Range1D.prototype.at = function (index) {
            if (index < 0) {
                index += this.length;
            }
            if (index < 0 || index >= this.arr.length) {
                return RangeElem.none();
            }
            return this.arr[index];
        };
        Range1D.prototype.size = function (size) {
            var t = this.arr.map(function (d) {
                return d.size(size);
            });
            return t.reduce(function (a, b) {
                return a + b;
            }, 0);
        };
        Object.defineProperty(Range1D.prototype, 'isIdentityRange', {
            get: function () {
                return this.arr.length === 1 && this.arr[0].from === 0 && this.arr[0].step === 1;
            },
            enumerable: true,
            configurable: true
        });
        Range1D.prototype.repeat = function (ntimes) {
            if (ntimes === void 0) {
                ntimes = 1;
            }
            if (ntimes === 1) {
                return this;
            }
            var r = this.arr.slice();
            for (var i = 1; i < ntimes; ++i) {
                r.push.apply(r, this.arr);
            }
            return new Range1D(r);
        };
        Range1D.prototype.preMultiply = function (sub, size) {
            if (this.isAll) {
                return sub.clone();
            }
            if (sub.isAll) {
                return this.clone();
            }
            if (sub.isNone || this.isNone) {
                return Range1D.none();
            }
            if (this.isIdentityRange) {
                return sub.clone();
            }
            var l = this.iter(size).asList();
            var mapImpl = function (sub) {
                var s = sub.iter(l.length);
                var r = [];
                s.forEach(function (i) {
                    if (i >= 0 && i < l.length) {
                        r.push(l[i]);
                    }
                });
                return sub.fromLike(r);
            };
            if (sub instanceof CompositeRange1D) {
                return composite(sub.name, sub.groups.map(mapImpl));
            } else {
                return mapImpl(sub);
            }
        };
        Range1D.prototype.union = function (other, size) {
            if (this.isAll || other.isNone) {
                return this.clone();
            }
            if (other.isAll || this.isNone) {
                return other.clone();
            }
            var r = this.iter(size).asList();
            var it2 = other.iter(size);
            it2.forEach(function (i) {
                if (r.indexOf(i) < 0) {
                    r.push(i);
                }
            });
            return other.fromLike(r.sort());
        };
        Range1D.prototype.intersect = function (other, size) {
            if (this.isNone || other.isNone) {
                return Range1D.none();
            }
            if (this.isAll) {
                return other.clone();
            }
            if (other.isAll) {
                return this.clone();
            }
            var it1 = this.iter(size).asList();
            var it2 = other.iter(size);
            var r = [];
            it2.forEach(function (i) {
                if (it1.indexOf(i) >= 0) {
                    r.push(i);
                }
            });
            return other.fromLike(r.sort());
        };
        Range1D.prototype.toSet = function (size) {
            return this.removeDuplicates(size);
        };
        Range1D.prototype.without = function (without, size) {
            if (this.isNone || without.isNone) {
                return this.clone();
            }
            if (without.isAll) {
                return Range1D.none();
            }
            var it1 = this.iter(size);
            var it2 = without.iter(size).asList();
            var r = [];
            it1.forEach(function (i) {
                if (it2.indexOf(i) < 0) {
                    r.push(i);
                }
            });
            return Range1D.from(r.sort());
        };
        Range1D.prototype.clone = function () {
            return new Range1D(this.arr.map(function (d) {
                return d.clone();
            }));
        };
        Range1D.prototype.invert = function (index, size) {
            if (this.isAll) {
                return index;
            }
            if (this.isNone) {
                return -1;
            }
            var act = 0, s = this.arr[0].size(size), total = s;
            while (total > index && act < this.length) {
                act++;
                s = this.arr[act].size(size);
                total += s;
            }
            if (act >= this.arr.length) {
                return -1;
            }
            return this.arr[act - 1].invert(index - total + s, size);
        };
        Range1D.prototype.indexOf = function () {
            if (arguments[0] instanceof Range) {
                return this.indexRangeOf(arguments[0], arguments[1]);
            }
            var arr;
            var base = this.iter().asList();
            if (arguments.length === 1) {
                if (typeof arguments[0] === 'number') {
                    return base.indexOf(arguments[0]);
                }
                arr = arguments[0];
            } else {
                arr = C.argList(arguments);
            }
            if (arr.length === 0) {
                return [];
            }
            return arr.map(function (index, i) {
                return base.indexOf(index);
            });
        };
        Range1D.prototype.indexRangeOf = function (r, size) {
            if (r.isNone || this.isNone) {
                return r.fromLike([]);
            }
            if (r.isAll) {
                return Range1D.all();
            }
            var mapImpl;
            if (this.isIdentityRange) {
                var end = this.arr[0].to;
                mapImpl = function (d, result) {
                    if (d >= 0 && d < end) {
                        result.push(d);
                    }
                };
            } else {
                var arr = this.iter().asList();
                mapImpl = function (d, result) {
                    var i = arr.indexOf(d);
                    if (i >= 0) {
                        result.push(i);
                    }
                };
            }
            if (r instanceof CompositeRange1D) {
                return composite(r.name, r.groups.map(function (g) {
                    var result = [];
                    g.forEach(function (d) {
                        return mapImpl(d, result);
                    });
                    return g.fromLike(result);
                }));
            } else {
                var result = [];
                r.forEach(function (d) {
                    return mapImpl(d, result);
                });
                return r.fromLike(result);
            }
        };
        Range1D.prototype.filter = function (data, size, transform) {
            if (transform === void 0) {
                transform = C.identity;
            }
            if (this.isAll) {
                return data.map(transform);
            }
            var it = this.iter(size);
            if (it.byOne && it instanceof Iterator.Iterator) {
                return data.slice(it.from, it.to).map(transform);
            } else {
                var r = [];
                while (it.hasNext()) {
                    r.push(transform(data[it.next()]));
                }
                return r;
            }
        };
        Range1D.prototype.iter = function (size) {
            if (this.isList) {
                return Iterator.forList(this.arr.map(function (d) {
                    return d.from;
                }));
            }
            return Iterator.concat.apply(Iterator, this.arr.map(function (d) {
                return d.iter(size);
            }));
        };
        Object.defineProperty(Range1D.prototype, '__iterator__', {
            get: function () {
                return this.iter();
            },
            enumerable: true,
            configurable: true
        });
        Range1D.prototype.asList = function (size) {
            return this.iter(size).asList();
        };
        Object.defineProperty(Range1D.prototype, 'first', {
            get: function () {
                if (this.isNone) {
                    return null;
                }
                return this.arr[0].from;
            },
            enumerable: true,
            configurable: true
        });
        Range1D.prototype.forEach = function (callbackfn, thisArg) {
            return this.iter().forEach(callbackfn, thisArg);
        };
        Range1D.prototype.contains = function (value, size) {
            return this.arr.some(function (elem) {
                return elem.contains(value, size);
            });
        };
        Range1D.prototype.sort = function (cmp) {
            if (cmp === void 0) {
                cmp = function (a, b) {
                    return a - b;
                };
            }
            var arr = this.iter().asList();
            var r = arr.sort(cmp);
            return this.fromLike(r);
        };
        Range1D.prototype.removeDuplicates = function (size) {
            var arr = this.iter().asList();
            arr = arr.sort();
            arr = arr.filter(function (di, i) {
                return di !== arr[i - 1];
            });
            return Range1D.from(arr);
        };
        Range1D.prototype.reverse = function () {
            var a = this.arr.map(function (r) {
                return r.reverse();
            });
            a.reverse();
            return new Range1D(a);
        };
        Range1D.prototype.toString = function () {
            if (this.isAll) {
                return '';
            }
            if (this.length === 1) {
                return this.arr[0].toString();
            }
            return '(' + this.arr.join(',') + ')';
        };
        Range1D.prototype.eq = function (other) {
            if (this === other || this.isAll && other.isAll || this.isNone && other.isNone) {
                return true;
            }
            return this.toString() === other.toString();
        };
        Range1D.prototype.fromLike = function (indices) {
            return Range1D.from(indices);
        };
        return Range1D;
    }();
    exports.Range1D = Range1D;
    var Range1DGroup = function (_super) {
        __extends(Range1DGroup, _super);
        function Range1DGroup(name, color, base) {
            _super.call(this, base);
            this.name = name;
            this.color = color;
        }
        Range1DGroup.prototype.preMultiply = function (sub, size) {
            var r = _super.prototype.preMultiply.call(this, sub, size);
            return new Range1DGroup(this.name, this.color, r);
        };
        Range1DGroup.prototype.union = function (other, size) {
            var r = _super.prototype.union.call(this, other, size);
            return new Range1DGroup(this.name, this.color, r);
        };
        Range1DGroup.prototype.intersect = function (other, size) {
            var r = _super.prototype.intersect.call(this, other, size);
            return new Range1DGroup(this.name, this.color, r);
        };
        Range1DGroup.prototype.without = function (without, size) {
            var r = _super.prototype.without.call(this, without, size);
            return new Range1DGroup(this.name, this.color, r);
        };
        Range1DGroup.prototype.clone = function () {
            return new Range1DGroup(this.name, this.color, _super.prototype.clone.call(this));
        };
        Range1DGroup.prototype.toString = function () {
            return '"' + this.name + '""' + this.color + '"' + _super.prototype.toString.call(this);
        };
        Range1DGroup.prototype.toSet = function (size) {
            return new Range1DGroup(this.name, this.color, _super.prototype.toSet.call(this, size));
        };
        Range1DGroup.prototype.fromLike = function (indices) {
            return new Range1DGroup(this.name, this.color, _super.prototype.fromLike.call(this, indices));
        };
        return Range1DGroup;
    }(Range1D);
    exports.Range1DGroup = Range1DGroup;
    function asUngrouped(range) {
        return new Range1DGroup('unnamed', 'gray', range);
    }
    exports.asUngrouped = asUngrouped;
    function composite(name, groups) {
        return new CompositeRange1D(name, groups);
    }
    exports.composite = composite;
    function toBase(groups) {
        if (groups.length === 1) {
            return groups[0];
        }
        var r = groups[0].iter().asList();
        groups.slice(1).forEach(function (g) {
            g.iter().forEach(function (i) {
                if (r.indexOf(i) < 0) {
                    r.push(i);
                }
            });
        });
        return Range1D.from(r);
    }
    var CompositeRange1D = function (_super) {
        __extends(CompositeRange1D, _super);
        function CompositeRange1D(name, groups, base) {
            _super.call(this, base ? base : toBase(groups));
            this.name = name;
            this.groups = groups;
        }
        CompositeRange1D.prototype.preMultiply = function (sub, size) {
            var r = this.groups.length > 1 ? _super.prototype.preMultiply.call(this, sub, size) : undefined;
            return new CompositeRange1D(this.name, this.groups.map(function (g) {
                return g.preMultiply(sub, size);
            }), r);
        };
        CompositeRange1D.prototype.union = function (other, size) {
            var r = this.groups.length > 1 ? _super.prototype.union.call(this, other, size) : undefined;
            return new CompositeRange1D(this.name, this.groups.map(function (g) {
                return g.union(other, size);
            }), r);
        };
        CompositeRange1D.prototype.intersect = function (other, size) {
            var r = this.groups.length > 1 ? _super.prototype.intersect.call(this, other, size) : undefined;
            return new CompositeRange1D(this.name, this.groups.map(function (g) {
                return g.intersect(other, size);
            }), r);
        };
        CompositeRange1D.prototype.without = function (without, size) {
            var r = this.groups.length > 1 ? _super.prototype.without.call(this, without, size) : undefined;
            return new CompositeRange1D(this.name, this.groups.map(function (g) {
                return g.without(without, size);
            }), r);
        };
        CompositeRange1D.prototype.clone = function () {
            var r = this.groups.length > 1 ? _super.prototype.clone.call(this) : undefined;
            return new CompositeRange1D(name, this.groups.map(function (g) {
                return g.clone();
            }), r);
        };
        CompositeRange1D.prototype.sort = function (cmp) {
            var r = this.groups.length > 1 ? _super.prototype.sort.call(this, cmp) : undefined;
            return new CompositeRange1D(this.name, this.groups.map(function (g) {
                return g.sort(cmp);
            }), r);
        };
        CompositeRange1D.prototype.toSet = function (size) {
            var r = this.groups.length > 1 ? _super.prototype.toSet.call(this, size) : undefined;
            return new CompositeRange1D(this.name, this.groups.map(function (g) {
                return g.toSet(size);
            }), r);
        };
        CompositeRange1D.prototype.toString = function () {
            return '"' + this.name + '"{' + this.groups.join(',') + '}';
        };
        return CompositeRange1D;
    }(Range1D);
    exports.CompositeRange1D = CompositeRange1D;
    var Range = function () {
        function Range(dims) {
            if (dims === void 0) {
                dims = new Array();
            }
            this.dims = dims;
        }
        Object.defineProperty(Range.prototype, 'isAll', {
            get: function () {
                return this.dims.every(function (dim) {
                    return dim.isAll;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Range.prototype, 'isNone', {
            get: function () {
                return this.dims.every(function (dim) {
                    return dim.isNone;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Range.prototype, 'first', {
            get: function () {
                return this.dim(0).first;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Range.prototype, 'ndim', {
            get: function () {
                return this.dims.length;
            },
            enumerable: true,
            configurable: true
        });
        Range.prototype.eq = function (other) {
            if (this === other || this.isAll && other.isAll || this.isNone && other.isNone) {
                return true;
            }
            return this.toString() === other.toString();
        };
        Range.prototype.preMultiply = function (other, size) {
            if (this.isAll) {
                return other.clone();
            }
            if (other.isAll) {
                return this.clone();
            }
            var r = new Range();
            this.dims.forEach(function (d, i) {
                r.dims[i] = d.preMultiply(other.dim(i), size ? size[i] : undefined);
            });
            return r;
        };
        Range.prototype.union = function (other, size) {
            if (this.isAll || other.isNone) {
                return this.clone();
            }
            if (other.isAll || this.isNone) {
                return other.clone();
            }
            var r = new Range();
            this.dims.forEach(function (d, i) {
                r.dims[i] = d.union(other.dim(i), size ? size[i] : undefined);
            });
            return r;
        };
        Range.prototype.intersect = function (other, size) {
            if (this.isNone || other.isNone) {
                return none();
            }
            if (this.isAll) {
                return other.clone();
            }
            if (other.isAll) {
                return this.clone();
            }
            var r = new Range();
            this.dims.forEach(function (d, i) {
                r.dims[i] = d.intersect(other.dim(i), size ? size[i] : undefined);
            });
            return r;
        };
        Range.prototype.without = function (without, size) {
            if (this.isNone || without.isNone) {
                return this.clone();
            }
            if (without.isAll) {
                return none();
            }
            var r = new Range();
            this.dims.forEach(function (d, i) {
                r.dims[i] = d.without(without.dim(i), size ? size[i] : undefined);
            });
            return r;
        };
        Range.prototype.clone = function () {
            var r = new Range();
            this.dims.forEach(function (d, i) {
                r.dims[i] = d.clone();
            });
            return r;
        };
        Range.prototype.swap = function () {
            var r = new Range();
            r.dims = this.dims.map(function (d) {
                return d.clone();
            }).reverse();
            return r;
        };
        Range.prototype.filter = function (data, size) {
            if (this.isAll) {
                return data;
            }
            var ndim = this.ndim;
            var that = this;
            function filterDim(i) {
                if (i >= ndim) {
                    return C.identity;
                }
                var d = that.dim(i);
                var next = filterDim(i + 1);
                var s = size ? size[i] : undefined;
                return function (elem) {
                    return Array.isArray(elem) ? d.filter(elem, s, next) : elem;
                };
            }
            var f = filterDim(0);
            return f(data);
        };
        Range.prototype.dim = function (dimension) {
            var r = this.dims[dimension];
            if (r) {
                return r;
            }
            this.dims[dimension] = Range1D.all();
            return this.dims[dimension];
        };
        Range.prototype.invert = function (indices, size) {
            var _this = this;
            if (this.isAll) {
                return indices;
            }
            return indices.map(function (index, i) {
                return _this.dim(i).invert(index, size ? size[i] : undefined);
            });
        };
        Range.prototype.indexRangeOf = function (r, size) {
            if (r.isNone || this.isNone) {
                return none();
            }
            if (this.isNone || r.isAll) {
                return this.clone();
            }
            return new Range(this.dims.map(function (d, i) {
                return d.indexRangeOf(r.dim(i), size ? size[i] : undefined);
            }));
        };
        Range.prototype.indexOf = function () {
            var _this = this;
            if (arguments[0] instanceof Range) {
                return this.indexRangeOf(arguments[0], arguments[1]);
            }
            var arr;
            if (arguments.length === 1) {
                if (typeof arguments[0] === 'number') {
                    return this.dim(0).indexOf(arguments[0]);
                }
                arr = arguments[0];
            } else {
                arr = C.argList(arguments);
            }
            if (arr.length === 0) {
                return [];
            }
            return arr.map(function (index, i) {
                return _this.dim(i).indexOf(index);
            });
        };
        Range.prototype.size = function (size) {
            if (this.isAll) {
                return size;
            }
            return this.dims.map(function (r, i) {
                return r.size(size ? size[i] : undefined);
            });
        };
        Range.prototype.split = function () {
            return this.dims.map(function (dim) {
                return new Range([dim]);
            });
        };
        Range.prototype.toString = function () {
            return this.dims.map(function (d) {
                return d.toString();
            }).join(',');
        };
        return Range;
    }();
    exports.Range = Range;
    function all() {
        return new Range();
    }
    exports.all = all;
    function none() {
        var r = new Range();
        r.dims = [
            Range1D.none(),
            Range1D.none()
        ];
        return r;
    }
    exports.none = none;
    function is(obj) {
        return obj instanceof Range;
    }
    exports.is = is;
    function range() {
        if (arguments.length === 0) {
            return all();
        }
        var r = new Range();
        if (Array.isArray(arguments[0])) {
            C.argList(arguments).forEach(function (arr, i) {
                if (arr.length === 0) {
                    return;
                }
                r.dim(i).setSlice(arr[0], arr[1], arr[2]);
            });
        }
        if (typeof arguments[0] === 'number') {
            r.dim(0).setSlice(arguments[0], arguments[1], arguments[2]);
        }
        return r;
    }
    exports.range = range;
    function join() {
        if (arguments.length === 0) {
            return all();
        }
        var r = new Range();
        var ranges = arguments[0];
        if (!Array.isArray(ranges)) {
            ranges = C.argList(arguments);
        }
        r.dims = ranges.map(function (r) {
            return r.dim(0);
        });
        return r;
    }
    exports.join = join;
    function list() {
        if (arguments.length === 0) {
            return all();
        }
        var r = new Range();
        if (Array.isArray(arguments[0]) && arguments[0][0] instanceof Range1D) {
            r.dims = arguments[0];
        } else if (Array.isArray(arguments[0])) {
            C.argList(arguments).forEach(function (arr, i) {
                if (arr instanceof Range1D) {
                    r.dims[i] = arr;
                } else {
                    r.dim(i).setList(arr);
                }
            });
        } else if (typeof arguments[0] === 'number') {
            r.dim(0).setList(C.argList(arguments));
        } else if (arguments[0] instanceof Range1D) {
            r.dims = C.argList(arguments);
        }
        return r;
    }
    exports.list = list;
    function parseRange(code) {
        var act = 0, c;
        var dims = new Array(), t;
        code = code.trim();
        while (act < code.length) {
            c = code.charAt(act);
            switch (c) {
            case '"':
                t = parseNamedRange1D(code, act);
                act = t.act + 1;
                dims.push(t.dim);
                break;
            case ',':
                act++;
                dims.push(Range1D.all());
                break;
            default:
                t = parseRange1D(code, act);
                act = t.act + 1;
                dims.push(t.dim);
                break;
            }
        }
        if (code.charAt(code.length - 1) === ',') {
            dims.push(Range1D.all());
        }
        var r = new Range(dims);
        return r;
    }
    function parseNamedRange1D(code, act) {
        act += 1;
        var end = code.indexOf('"', act);
        var name = code.slice(act, end);
        var r;
        act = end + 1;
        switch (code.charAt(act)) {
        case '"':
            end = code.indexOf('"', act + 1);
            r = parseRange1D(code, end + 1);
            return {
                dim: new Range1DGroup(name, code.slice(act + 1, end), r.dim),
                act: r.act
            };
        case '{':
            var groups = [];
            while (code.charAt(act) !== '}') {
                r = parseNamedRange1D(code, act + 1);
                groups.push(r.dim);
                act = r.act;
            }
            return {
                dim: new CompositeRange1D(name, groups),
                act: r.act + 1
            };
        default:
            return {
                dim: Range1D.all(),
                act: act
            };
        }
    }
    function parseRange1D(code, act) {
        var next, r = new Range1D();
        switch (code.charAt(act)) {
        case ',':
        case '}':
            next = act;
            r = Range1D.all();
            break;
        case '(':
            next = code.indexOf(')', act);
            if (next > act + 1) {
                r.push.apply(r, code.slice(act + 1, next).split(',').map(RangeElem.parse));
            }
            next += 1;
            break;
        default:
            next = code.indexOf('}', act);
            var n2 = code.indexOf(',', act);
            if (next >= 0 && n2 >= 0) {
                next = Math.min(next, n2);
            } else if (next < 0) {
                next = n2;
            }
            if (next < 0) {
                next = code.length;
            }
            r = new Range1D([RangeElem.parse(code.slice(act, next))]);
            break;
        }
        return {
            act: next,
            dim: r
        };
    }
    function parse() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (args.length === 0) {
            return all();
        }
        if (args.length === 1 && args[0] instanceof Range) {
            return args[0];
        }
        if (args.length === 1 && Array.isArray(args[0]) && typeof args[0][0] === 'number') {
            return list(args[0]);
        }
        return parseRange(args.map(String).join(','));
    }
    exports.parse = parse;
}(require, exports, require('./main'), require('./iterator')));
},{"./iterator":10,"./main":13}],21:[function(require,module,exports){
(function (require, exports) {
    var context = {};
    function store(key, value) {
        var bak = context[key];
        context[key] = value;
        return bak;
    }
    exports.store = store;
    function remove(key) {
        delete context[key];
    }
    exports.remove = remove;
    function has(key) {
        return key in context;
    }
    exports.has = has;
    function retrieve(key, default_) {
        if (default_ === void 0) {
            default_ = null;
        }
        return has(key) ? context[key] : default_;
    }
    exports.retrieve = retrieve;
}(require, exports));
},{}],22:[function(require,module,exports){
(function (require, exports, ranges, idtypes, math) {
    'use strict';
    function guessColor(stratification, group) {
        switch (group.toLowerCase()) {
        case 'male':
            return 'blue';
        case 'female':
            return 'red';
        case 'deceased':
            return '#e41a1b';
        case 'living':
            return '#377eb8';
        }
        return 'gray';
    }
    exports.guessColor = guessColor;
    var StratificationGroup = function (_super) {
        __extends(StratificationGroup, _super);
        function StratificationGroup(root, groupIndex, groupDesc) {
            _super.call(this);
            this.root = root;
            this.groupIndex = groupIndex;
            this.groupDesc = groupDesc;
        }
        Object.defineProperty(StratificationGroup.prototype, 'desc', {
            get: function () {
                return this.root.desc;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StratificationGroup.prototype, 'groups', {
            get: function () {
                return [this.groupDesc];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StratificationGroup.prototype, 'ngroups', {
            get: function () {
                return 1;
            },
            enumerable: true,
            configurable: true
        });
        StratificationGroup.prototype.group = function (groupIndex) {
            if (groupIndex === 0) {
                return this;
            }
            return null;
        };
        Object.defineProperty(StratificationGroup.prototype, 'idtype', {
            get: function () {
                return this.root.idtype;
            },
            enumerable: true,
            configurable: true
        });
        StratificationGroup.prototype.hist = function (bins, range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.range().then(function (r) {
                return math.rangeHist(r);
            });
        };
        StratificationGroup.prototype.vector = function () {
            return Promise.all([
                this.root.vector(),
                this.rangeGroup()
            ]).then(function (arr) {
                return arr[0].view(ranges.list(arr[1]));
            });
        };
        StratificationGroup.prototype.origin = function () {
            return this.root.origin();
        };
        StratificationGroup.prototype.range = function () {
            return this.rangeGroup().then(function (g) {
                return new ranges.CompositeRange1D(g.name, [g]);
            });
        };
        StratificationGroup.prototype.idRange = function () {
            var _this = this;
            return this.root.idRange().then(function (r) {
                var g = r.groups[_this.groupIndex];
                return new ranges.CompositeRange1D(g.name, [g]);
            });
        };
        StratificationGroup.prototype.rangeGroup = function () {
            var _this = this;
            return this.root.range().then(function (r) {
                return r.groups[_this.groupIndex];
            });
        };
        StratificationGroup.prototype.names = function (range) {
            var _this = this;
            if (range === void 0) {
                range = ranges.all();
            }
            return this.rangeGroup().then(function (g) {
                var r = ranges.list(g).preMultiply(range);
                return _this.root.names(r);
            });
        };
        StratificationGroup.prototype.ids = function (range) {
            var _this = this;
            if (range === void 0) {
                range = ranges.all();
            }
            return this.rangeGroup().then(function (g) {
                var r = ranges.list(g).preMultiply(range);
                return _this.root.ids(r);
            });
        };
        StratificationGroup.prototype.idView = function (idRange) {
            if (idRange === void 0) {
                idRange = ranges.all();
            }
            return Promise.reject('not implemented');
        };
        StratificationGroup.prototype.toString = function () {
            return this.persist();
        };
        Object.defineProperty(StratificationGroup.prototype, 'idtypes', {
            get: function () {
                return [this.idtype];
            },
            enumerable: true,
            configurable: true
        });
        StratificationGroup.prototype.size = function () {
            return [this.length];
        };
        Object.defineProperty(StratificationGroup.prototype, 'length', {
            get: function () {
                return this.groupDesc.size;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StratificationGroup.prototype, 'dim', {
            get: function () {
                return this.size();
            },
            enumerable: true,
            configurable: true
        });
        StratificationGroup.prototype.persist = function () {
            return {
                root: this.root.persist(),
                group: this.groupIndex
            };
        };
        StratificationGroup.prototype.restore = function (persisted) {
            return this;
        };
        return StratificationGroup;
    }(idtypes.SelectAble);
    exports.StratificationGroup = StratificationGroup;
}(require, exports, require('./range'), require('./idtype'), require('./math')));
},{"./idtype":9,"./math":15,"./range":20}],23:[function(require,module,exports){
(function (require, exports, C, ajax, ranges, idtypes, datatypes, datas, vector_impl, math, def) {
    'use strict';
    function createRangeFromGroups(name, groups) {
        return ranges.composite(name, groups.map(function (g) {
            var r = new ranges.Range1DGroup(g.name, g.color || 'gray', ranges.parse(g.range).dim(0));
            return r;
        }));
    }
    function viaAPILoader() {
        var _data = undefined;
        return function (desc) {
            if (_data) {
                return _data;
            }
            _data = ajax.getAPIJSON('/dataset/' + desc.id).then(function (data) {
                var d = {
                    rowIds: ranges.parse(data.rowIds),
                    rows: data.rows,
                    range: createRangeFromGroups(desc.name, data.groups)
                };
                return d;
            });
            return _data;
        };
    }
    function viaDataLoader(rows, rowIds, range) {
        var _data = undefined;
        return function (desc) {
            if (_data) {
                return Promise.resolve(_data);
            }
            _data = {
                rowIds: ranges.list(rowIds),
                rows: rows,
                range: range
            };
            return Promise.resolve(_data);
        };
    }
    var Stratification = function (_super) {
        __extends(Stratification, _super);
        function Stratification(desc, loader) {
            _super.call(this, desc);
            this.desc = desc;
            this.loader = loader;
            var d = desc;
            this._idtype = idtypes.resolve(d.idtype);
        }
        Object.defineProperty(Stratification.prototype, 'idtype', {
            get: function () {
                return this._idtype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Stratification.prototype, 'groups', {
            get: function () {
                return this.desc.groups;
            },
            enumerable: true,
            configurable: true
        });
        Stratification.prototype.group = function (group) {
            return new def.StratificationGroup(this, group, this.groups[group]);
        };
        Stratification.prototype.load = function () {
            return this.loader(this.desc);
        };
        Stratification.prototype.hist = function (bins, range) {
            return this.range().then(function (r) {
                return math.rangeHist(r);
            });
        };
        Stratification.prototype.vector = function () {
            var _this = this;
            if (this._v) {
                return this._v;
            }
            this._v = this.load().then(function (data) {
                return new StratificationVector(_this, data.range, _this.desc);
            });
            return this._v;
        };
        Stratification.prototype.origin = function () {
            if ('origin' in this.desc) {
                return datas.getFirstByFQName(this.desc.origin);
            }
            return Promise.reject('no origin specified');
        };
        Stratification.prototype.range = function () {
            return this.load().then(function (data) {
                return data.range;
            });
        };
        Stratification.prototype.idRange = function () {
            var that = this;
            return this.load().then(function (data) {
                var ids = data.rowIds.dim(0);
                var range = data.range;
                return ids.preMultiply(range, that.dim[0]);
            });
        };
        Stratification.prototype.names = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            var that = this;
            return this.load().then(function (data) {
                return range.filter(data.rows, that.dim);
            });
        };
        Stratification.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            var that = this;
            return this.load().then(function (data) {
                return data.rowIds.preMultiply(range, that.dim);
            });
        };
        Object.defineProperty(Stratification.prototype, 'idtypes', {
            get: function () {
                return [this.idtype];
            },
            enumerable: true,
            configurable: true
        });
        Stratification.prototype.size = function () {
            return this.desc.size;
        };
        Object.defineProperty(Stratification.prototype, 'length', {
            get: function () {
                return this.size()[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Stratification.prototype, 'ngroups', {
            get: function () {
                return this.desc.ngroups;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Stratification.prototype, 'dim', {
            get: function () {
                return this.size();
            },
            enumerable: true,
            configurable: true
        });
        Stratification.prototype.persist = function () {
            return this.desc.id;
        };
        return Stratification;
    }(datatypes.DataTypeBase);
    exports.Stratification = Stratification;
    var StratificationVector = function (_super) {
        __extends(StratificationVector, _super);
        function StratificationVector(strat, range, desc) {
            _super.call(this, null);
            this.strat = strat;
            this.range = range;
            this._cache = null;
            this._root = this;
            this.valuetype = {
                type: 'categorical',
                categories: range.groups.map(function (g) {
                    return {
                        name: g.name,
                        label: g.name,
                        color: g.color
                    };
                })
            };
            this.desc = {
                name: desc.name,
                fqname: desc.fqname,
                id: desc.id,
                type: 'vector',
                value: this.valuetype
            };
        }
        Object.defineProperty(StratificationVector.prototype, 'idtype', {
            get: function () {
                return this.strat.idtype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StratificationVector.prototype, 'idtypes', {
            get: function () {
                return [this.idtype];
            },
            enumerable: true,
            configurable: true
        });
        StratificationVector.prototype.persist = function () {
            return { root: this.strat.persist() };
        };
        StratificationVector.prototype.restore = function (persisted) {
            var r = this;
            if (persisted && persisted.range) {
                r = r.view(ranges.parse(persisted.range));
            }
            return r;
        };
        StratificationVector.prototype.load = function () {
            if (this._cache !== null) {
                return this._cache;
            }
            var r = [];
            this.range.groups.forEach(function (g) {
                g.forEach(function () {
                    return r.push(g.name);
                });
            });
            return this._cache = Promise.resolve(r);
        };
        StratificationVector.prototype.at = function (i) {
            return this.load().then(function (d) {
                return d[i];
            });
        };
        StratificationVector.prototype.data = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            var that = this;
            return this.load().then(function (data) {
                return range.filter(data, that.dim);
            });
        };
        StratificationVector.prototype.names = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.strat.names(range);
        };
        StratificationVector.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.strat.ids(range);
        };
        StratificationVector.prototype.size = function () {
            return this.strat.size();
        };
        StratificationVector.prototype.sort = function (compareFn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argSort(d, compareFn, thisArg);
                return _this.view(ranges.list(indices));
            });
        };
        StratificationVector.prototype.map = function (callbackfn, thisArg) {
            return null;
        };
        StratificationVector.prototype.filter = function (callbackfn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argFilter(d, callbackfn, thisArg);
                return _this.view(ranges.list(indices));
            });
        };
        return StratificationVector;
    }(vector_impl.VectorBase);
    exports.StratificationVector = StratificationVector;
    function create(desc) {
        return new Stratification(desc, viaAPILoader());
    }
    exports.create = create;
    function wrap(desc, rows, rowIds, range) {
        return new Stratification(desc, viaDataLoader(rows, rowIds, range));
    }
    exports.wrap = wrap;
    function wrapCategoricalVector(v) {
        var desc = {
            id: v.desc.id + '-s',
            type: 'stratification',
            name: v.desc.name + '-s',
            fqname: v.desc.fqname + '-s',
            ngroups: v.desc.value.categories.length,
            size: v.dim
        };
        function loader() {
            return Promise.all([
                v.groups(),
                v.ids(),
                v.names()
            ]).then(function (args) {
                return {
                    range: args[0],
                    rowIds: args[1],
                    rows: args[2]
                };
            });
        }
        return new Stratification(desc, loader);
    }
    exports.wrapCategoricalVector = wrapCategoricalVector;
}(require, exports, require('./main'), require('./ajax'), require('./range'), require('./idtype'), require('./datatype'), require('./data'), require('./vector_impl'), require('./math'), require('./stratification')));
},{"./ajax":3,"./data":5,"./datatype":6,"./idtype":9,"./main":13,"./math":15,"./range":20,"./stratification":22,"./vector_impl":27}],24:[function(require,module,exports){
arguments[4][16][0].apply(exports,arguments)
},{"dup":16}],25:[function(require,module,exports){
(function (require, exports, C, ajax, ranges, idtypes, datatypes, vector_impl) {
    'use strict';
    var TableBase = function (_super) {
        __extends(TableBase, _super);
        function TableBase(_root) {
            _super.call(this);
            this._root = _root;
        }
        Object.defineProperty(TableBase.prototype, 'dim', {
            get: function () {
                return this.size();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableBase.prototype, 'nrow', {
            get: function () {
                return this.dim[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableBase.prototype, 'ncol', {
            get: function () {
                return this.dim[1];
            },
            enumerable: true,
            configurable: true
        });
        TableBase.prototype.size = function () {
            throw new Error('not implemented');
        };
        TableBase.prototype.view = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return new TableView(this._root, range);
        };
        TableBase.prototype.idView = function (idRange) {
            var _this = this;
            if (idRange === void 0) {
                idRange = ranges.all();
            }
            return this.ids().then(function (ids) {
                return _this.view(ids.indexOf(idRange));
            });
        };
        TableBase.prototype.reduce = function (f, this_f, valuetype, idtype) {
            return new MultITableVector(this, f, this_f, valuetype, idtype);
        };
        TableBase.prototype.restore = function (persisted) {
            if (persisted && persisted.f) {
                return this.reduce(eval(persisted.f), this, persisted.valuetype, persisted.idtype ? idtypes.resolve(persisted.idtype) : undefined);
            } else if (persisted && persisted.range) {
                return this.view(ranges.parse(persisted.range));
            } else {
                return this;
            }
        };
        return TableBase;
    }(idtypes.SelectAble);
    exports.TableBase = TableBase;
    function toObjects(data, vecs) {
        return data.map(function (row) {
            var r = {};
            vecs.forEach(function (col, i) {
                r[col.name] = datatypes.mask(row[i], col.value);
            });
            return r;
        });
    }
    function viaAPILoader() {
        var _loader = undefined;
        return function (desc) {
            if (_loader) {
                return _loader;
            }
            return _loader = ajax.getAPIJSON('/dataset/' + desc.id).then(function (data) {
                data.rowIds = ranges.parse(data.rowIds);
                data.objs = toObjects(data.data, desc.columns);
                data.data = datatypes.transpose(data.data);
                if (desc.columns.some(function (col) {
                        return col.value && 'missing' in col.value;
                    })) {
                    data.data = data.data.map(function (col, i) {
                        return datatypes.mask(col, desc.columns[i].value);
                    });
                }
                return data;
            });
        };
    }
    function viaDataLoader(data, nameProperty) {
        var _data = undefined;
        return function (desc) {
            if (_data) {
                return Promise.resolve(_data);
            }
            var name = C.isFunction(nameProperty) ? nameProperty : C.getter(nameProperty.toString());
            function toGetter(col) {
                if (col.getter) {
                    return col.getter;
                }
                return function (d) {
                    return d[col.name];
                };
            }
            var getters = desc.columns.map(toGetter);
            var objs = data.map(function (row) {
                var r = { _: row };
                desc.columns.forEach(function (col, i) {
                    r[col.name] = getters[i](row);
                });
                return r;
            });
            var rows = data.map(name);
            _data = {
                rowIds: desc.rowassigner ? desc.rowassigner.map(rows) : ranges.range(0, data.length),
                rows: rows,
                objs: objs,
                data: getters.map(function (getter) {
                    return data.map(getter);
                })
            };
            return Promise.resolve(_data);
        };
    }
    var Table = function (_super) {
        __extends(Table, _super);
        function Table(desc, loader) {
            var _this = this;
            _super.call(this, null);
            this.desc = desc;
            this.loader = loader;
            this._root = this;
            var d = desc;
            this.rowtype = idtypes.resolve(d.idtype || d.rowtype);
            this.vectors = d.columns.map(function (cdesc, i) {
                return new TableVector(_this, i, cdesc);
            });
        }
        Table.prototype.load = function () {
            return this.loader(this.desc);
        };
        Object.defineProperty(Table.prototype, 'idtypes', {
            get: function () {
                return [this.rowtype];
            },
            enumerable: true,
            configurable: true
        });
        Table.prototype.col = function (i) {
            return this.vectors[i];
        };
        Table.prototype.cols = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return range.filter(this.vectors, [this.ncol]);
        };
        Table.prototype.at = function (i, j) {
            return this.load().then(function (d) {
                return d.data[j][i];
            });
        };
        Table.prototype.data = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            var that = this;
            return this.load().then(function (data) {
                return datatypes.transpose(range.swap().filter(data.data, that.swap(that.size())));
            });
        };
        Table.prototype.objects = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            var that = this;
            return this.load().then(function (data) {
                return range.filter(data.objs, that.size());
            });
        };
        Table.prototype.rows = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            var that = this;
            return this.load().then(function (d) {
                return range.dim(0).filter(d.rows, that.nrow);
            });
        };
        Table.prototype.rowIds = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            var that = this;
            return this.load().then(function (data) {
                return data.rowIds.preMultiply(range, that.dim);
            });
        };
        Table.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.rowIds(range);
        };
        Table.prototype.swap = function (d) {
            return d.slice(0).reverse();
        };
        Table.prototype.size = function () {
            return this.desc.size;
        };
        Table.prototype.persist = function () {
            return this.desc.id;
        };
        Table.prototype.restore = function (persisted) {
            if (persisted && typeof persisted.col === 'number') {
                return this.col(persisted.col);
            }
            return _super.prototype.restore.call(this, persisted);
        };
        return Table;
    }(TableBase);
    exports.Table = Table;
    var TableView = function (_super) {
        __extends(TableView, _super);
        function TableView(root, range) {
            _super.call(this, root);
            this.range = range;
            this.range = range;
        }
        Object.defineProperty(TableView.prototype, 'desc', {
            get: function () {
                return this._root.desc;
            },
            enumerable: true,
            configurable: true
        });
        TableView.prototype.persist = function () {
            return {
                root: this._root.persist(),
                range: this.range.toString()
            };
        };
        TableView.prototype.restore = function (persisted) {
            var r = this;
            if (persisted && persisted.range) {
                r = r.view(ranges.parse(persisted.range));
            }
            return r;
        };
        TableView.prototype.size = function () {
            return this.range.size(this._root.dim);
        };
        TableView.prototype.at = function (i, j) {
            var inverted = this.range.invert([
                i,
                j
            ], this._root.dim);
            return this._root.at(inverted[0], inverted[1]);
        };
        TableView.prototype.col = function (i) {
            var inverted = this.range.invert([
                0,
                i
            ], this._root.dim);
            return this._root.col(inverted[1]);
        };
        TableView.prototype.cols = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this._root.cols(this.range.swap().preMultiply(range, this._root.dim));
        };
        TableView.prototype.data = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this._root.data(this.range.preMultiply(range, this._root.dim));
        };
        TableView.prototype.objects = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this._root.objects(this.range.preMultiply(range, this._root.dim));
        };
        TableView.prototype.rows = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this._root.rows(this.range.preMultiply(range, this._root.dim));
        };
        TableView.prototype.rowIds = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this._root.rowIds(this.range.preMultiply(range, this._root.dim));
        };
        TableView.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.rowIds(range);
        };
        TableView.prototype.view = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            if (range.isAll) {
                return this;
            }
            return new TableView(this._root, this.range.preMultiply(range, this.dim));
        };
        Object.defineProperty(TableView.prototype, 'rowtype', {
            get: function () {
                return this._root.rowtype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableView.prototype, 'idtypes', {
            get: function () {
                return [this.rowtype];
            },
            enumerable: true,
            configurable: true
        });
        return TableView;
    }(TableBase);
    var TableVector = function (_super) {
        __extends(TableVector, _super);
        function TableVector(table, index, desc) {
            _super.call(this, null);
            this.table = table;
            this.index = index;
            this.desc = desc;
            this._root = this;
            this.valuetype = desc.value;
            this.desc.fqname = table.desc.fqname + '/' + this.desc.name;
            this.desc.type = 'vector';
        }
        Object.defineProperty(TableVector.prototype, 'idtype', {
            get: function () {
                return this.table.rowtype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TableVector.prototype, 'idtypes', {
            get: function () {
                return [this.idtype];
            },
            enumerable: true,
            configurable: true
        });
        TableVector.prototype.persist = function () {
            return {
                root: this.table.persist(),
                col: this.index
            };
        };
        TableVector.prototype.restore = function (persisted) {
            var r = this;
            if (persisted && persisted.range) {
                r = r.view(ranges.parse(persisted.range));
            }
            return r;
        };
        TableVector.prototype.load = function () {
            var that = this;
            return this.table.load().then(function (data) {
                return data.data[that.index];
            });
        };
        TableVector.prototype.at = function (i) {
            return this.load().then(function (d) {
                return d[i];
            });
        };
        TableVector.prototype.data = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            var that = this;
            return this.load().then(function (data) {
                return range.filter(data, that.dim);
            });
        };
        TableVector.prototype.names = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.table.rows(range);
        };
        TableVector.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.table.rowIds(range);
        };
        TableVector.prototype.size = function () {
            return this.table.nrow;
        };
        TableVector.prototype.sort = function (compareFn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argSort(d, compareFn, thisArg);
                return _this.view(ranges.list(indices));
            });
        };
        TableVector.prototype.map = function (callbackfn, thisArg) {
            return null;
        };
        TableVector.prototype.filter = function (callbackfn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argFilter(d, callbackfn, thisArg);
                return _this.view(ranges.list(indices));
            });
        };
        return TableVector;
    }(vector_impl.VectorBase);
    exports.TableVector = TableVector;
    var MultITableVector = function (_super) {
        __extends(MultITableVector, _super);
        function MultITableVector(table, f, this_f, valuetype, _idtype) {
            if (this_f === void 0) {
                this_f = table;
            }
            if (valuetype === void 0) {
                valuetype = null;
            }
            if (_idtype === void 0) {
                _idtype = table.rowtype;
            }
            _super.call(this, null);
            this.table = table;
            this.f = f;
            this.this_f = this_f;
            this.valuetype = valuetype;
            this._idtype = _idtype;
            this.desc = {
                name: table.desc.name + '-p',
                fqname: table.desc.fqname + '-p',
                type: 'vector',
                id: table.desc.id + '-p'
            };
            this._root = this;
        }
        Object.defineProperty(MultITableVector.prototype, 'idtype', {
            get: function () {
                return this._idtype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultITableVector.prototype, 'idtypes', {
            get: function () {
                return [this.idtype];
            },
            enumerable: true,
            configurable: true
        });
        MultITableVector.prototype.persist = function () {
            return {
                root: this.table.persist(),
                f: this.f.toString(),
                valuetype: this.valuetype ? this.valuetype : undefined,
                idtype: this.idtype === this.table.rowtype ? undefined : this.idtype.name
            };
        };
        MultITableVector.prototype.restore = function (persisted) {
            var r = this;
            if (persisted && persisted.range) {
                r = r.view(ranges.parse(persisted.range));
            }
            return r;
        };
        MultITableVector.prototype.size = function () {
            return this.table.nrow;
        };
        MultITableVector.prototype.names = function (range) {
            return this.table.rows(range);
        };
        MultITableVector.prototype.ids = function (range) {
            return this.table.rowIds(range);
        };
        MultITableVector.prototype.at = function (i) {
            var _this = this;
            return this.table.data(ranges.list(i)).then(function (d) {
                return _this.f.call(_this.this_f, d[0]);
            });
        };
        MultITableVector.prototype.data = function (range) {
            var _this = this;
            return this.table.data(range).then(function (d) {
                return d.map(_this.f, _this.this_f);
            });
        };
        MultITableVector.prototype.sort = function (compareFn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argSort(d, compareFn, thisArg);
                return _this.view(ranges.list(indices));
            });
        };
        MultITableVector.prototype.map = function (callbackfn, thisArg) {
            return null;
        };
        MultITableVector.prototype.filter = function (callbackfn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argFilter(d, callbackfn, thisArg);
                return _this.view(ranges.list(indices));
            });
        };
        return MultITableVector;
    }(vector_impl.VectorBase);
    function create(desc) {
        if (C.isFunction(desc.loader)) {
            return new Table(desc, desc.loader);
        }
        return new Table(desc, viaAPILoader());
    }
    exports.create = create;
    function wrapObjects(desc, data, nameProperty) {
        return new Table(desc, viaDataLoader(data, nameProperty));
    }
    exports.wrapObjects = wrapObjects;
    var VectorTable = function (_super) {
        __extends(VectorTable, _super);
        function VectorTable(desc, vectors) {
            _super.call(this, null);
            this.desc = desc;
            this.vectors = vectors;
            this._root = this;
            var d = desc;
            var ref = vectors[0].desc;
            d.idtype = ref.idtype;
            d.size = [
                vectors[0].length,
                vectors.length
            ];
            d.columns = vectors.map(function (v) {
                return v.desc;
            });
            this.rowtype = vectors[0].idtype;
        }
        Object.defineProperty(VectorTable.prototype, 'idtypes', {
            get: function () {
                return [this.rowtype];
            },
            enumerable: true,
            configurable: true
        });
        VectorTable.prototype.col = function (i) {
            return this.vectors[i];
        };
        VectorTable.prototype.cols = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return range.filter(this.vectors, [this.ncol]);
        };
        VectorTable.prototype.at = function (i, j) {
            return this.col(i).at(j);
        };
        VectorTable.prototype.data = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return Promise.all(this.vectors.map(function (v) {
                return v.data(range);
            })).then(function (arr) {
                var r = arr[0].map(function (i) {
                    return [i];
                });
                arr.slice(1).forEach(function (ai) {
                    return ai.forEach(function (d, i) {
                        return r[i].push(d);
                    });
                });
                return r;
            });
        };
        VectorTable.prototype.objects = function (range) {
            var _this = this;
            if (range === void 0) {
                range = ranges.all();
            }
            return Promise.all(this.vectors.map(function (v) {
                return v.data(range);
            })).then(function (arr) {
                var names = _this.vectors.map(function (d) {
                    return d.desc.name;
                });
                var r = arr[0].map(function (i) {
                    return _a = {}, _a[names[0]] = i, _a;
                    var _a;
                });
                arr.slice(1).forEach(function (ai, j) {
                    var name = names[j + 1];
                    ai.forEach(function (d, i) {
                        return r[i][name] = d;
                    });
                });
                return r;
            });
        };
        VectorTable.prototype.rows = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.col(0).names(range);
        };
        VectorTable.prototype.rowIds = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.col(0).ids(range);
        };
        VectorTable.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.rowIds(range);
        };
        VectorTable.prototype.size = function () {
            return [
                this.col(0).length,
                this.vectors.length
            ];
        };
        VectorTable.prototype.persist = function () {
            return this.desc.id;
        };
        VectorTable.prototype.restore = function (persisted) {
            if (persisted && typeof persisted.col === 'number') {
                return this.col(persisted.col);
            }
            return _super.prototype.restore.call(this, persisted);
        };
        return VectorTable;
    }(TableBase);
    exports.VectorTable = VectorTable;
    function fromVectors(desc, vecs) {
        return new VectorTable(desc, vecs);
    }
    exports.fromVectors = fromVectors;
}(require, exports, require('./main'), require('./ajax'), require('./range'), require('./idtype'), require('./datatype'), require('./vector_impl')));
},{"./ajax":3,"./datatype":6,"./idtype":9,"./main":13,"./range":20,"./vector_impl":27}],26:[function(require,module,exports){
arguments[4][16][0].apply(exports,arguments)
},{"dup":16}],27:[function(require,module,exports){
(function (require, exports, C, ajax, ranges, idtypes, datatypes, math, stratification) {
    'use strict';
    var VectorBase = function (_super) {
        __extends(VectorBase, _super);
        function VectorBase(_root) {
            _super.call(this);
            this._root = _root;
        }
        Object.defineProperty(VectorBase.prototype, 'dim', {
            get: function () {
                return [this.length];
            },
            enumerable: true,
            configurable: true
        });
        VectorBase.prototype.data = function (range) {
            throw new Error('not implemented');
        };
        VectorBase.prototype.size = function () {
            throw new Error('not implemented');
        };
        Object.defineProperty(VectorBase.prototype, 'length', {
            get: function () {
                return this.size();
            },
            enumerable: true,
            configurable: true
        });
        VectorBase.prototype.view = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return new VectorView(this._root, range);
        };
        VectorBase.prototype.idView = function (idRange) {
            var _this = this;
            if (idRange === void 0) {
                idRange = ranges.all();
            }
            return this.ids().then(function (ids) {
                return _this.view(ids.indexOf(idRange));
            });
        };
        VectorBase.prototype.stats = function () {
            return this.data().then(function (d) {
                return math.computeStats(d);
            });
        };
        Object.defineProperty(VectorBase.prototype, 'indices', {
            get: function () {
                return ranges.range(0, this.length);
            },
            enumerable: true,
            configurable: true
        });
        VectorBase.prototype.groups = function () {
            var _this = this;
            var v = this._root.valuetype;
            if (v.type === 'categorical') {
                return this.data().then(function (d) {
                    var options = { name: _this._root.desc.id };
                    if (v.categories[0].color) {
                        options.colors = v.categories.map(function (d) {
                            return d.color;
                        });
                    }
                    if (v.categories[0].label) {
                        options.labels = v.categories.map(function (d) {
                            return d.label;
                        });
                    }
                    return datatypes.categorical2partitioning(d, v.categories.map(function (d) {
                        return typeof d === 'string' ? d : d.name;
                    }), options);
                });
            } else {
                return Promise.resolve(ranges.composite(this._root.desc.id, [ranges.asUngrouped(this.indices.dim(0))]));
            }
        };
        VectorBase.prototype.stratification = function () {
            var _this = this;
            return this.groups().then(function (range) {
                return new StratificationVector(_this, range);
            });
        };
        VectorBase.prototype.hist = function (bins, range) {
            var _this = this;
            if (range === void 0) {
                range = ranges.all();
            }
            var v = this._root.valuetype;
            return this.data(range).then(function (d) {
                switch (v.type) {
                case 'categorical':
                    return math.categoricalHist(d, _this.indices.dim(0), d.length, v.categories.map(function (d) {
                        return typeof d === 'string' ? d : d.name;
                    }), v.categories.map(function (d) {
                        return typeof d === 'string' ? d : d.name || d.label;
                    }), v.categories.map(function (d) {
                        return typeof d === 'string' ? 'gray' : d.color || 'gray';
                    }));
                case 'real':
                case 'int':
                    return math.hist(d, _this.indices.dim(0), d.length, bins ? bins : Math.round(Math.sqrt(_this.length)), v.range);
                default:
                    return null;
                }
            });
        };
        VectorBase.prototype.every = function (callbackfn, thisArg) {
            return this.data().then(function (d) {
                return d.every(callbackfn, thisArg);
            });
        };
        VectorBase.prototype.some = function (callbackfn, thisArg) {
            return this.data().then(function (d) {
                return d.some(callbackfn, thisArg);
            });
        };
        VectorBase.prototype.forEach = function (callbackfn, thisArg) {
            this.data().then(function (d) {
                return d.forEach(callbackfn, thisArg);
            });
        };
        VectorBase.prototype.reduce = function (callbackfn, initialValue, thisArg) {
            function helper() {
                return callbackfn.apply(thisArg, C.argList(arguments));
            }
            return this.data().then(function (d) {
                return d.reduce(helper, initialValue);
            });
        };
        VectorBase.prototype.reduceRight = function (callbackfn, initialValue, thisArg) {
            function helper() {
                return callbackfn.apply(thisArg, C.argList(arguments));
            }
            return this.data().then(function (d) {
                return d.reduceRight(helper, initialValue);
            });
        };
        VectorBase.prototype.restore = function (persisted) {
            var r = this;
            if (persisted && persisted.range) {
                r = r.view(ranges.parse(persisted.range));
            }
            return r;
        };
        return VectorBase;
    }(idtypes.SelectAble);
    exports.VectorBase = VectorBase;
    function viaAPILoader() {
        var _loader = undefined;
        return function (desc) {
            if (_loader) {
                return _loader;
            }
            return _loader = ajax.getAPIJSON('/dataset/' + desc.id).then(function (data) {
                data.rowIds = ranges.parse(data.rowIds);
                return data;
            });
        };
    }
    function viaDataLoader(rows, rowIds, data) {
        var _data = undefined;
        return function (desc) {
            if (_data) {
                return Promise.resolve(_data);
            }
            _data = {
                rowIds: ranges.parse(rowIds),
                rows: rows,
                data: data
            };
            return Promise.resolve(_data);
        };
    }
    var Vector = function (_super) {
        __extends(Vector, _super);
        function Vector(desc, loader) {
            _super.call(this, null);
            this.desc = desc;
            this.loader = loader;
            this._root = this;
            var d = desc;
            this.valuetype = d.value;
            this._idtype = idtypes.resolve(d.idtype);
        }
        Object.defineProperty(Vector.prototype, 'idtype', {
            get: function () {
                return this._idtype;
            },
            enumerable: true,
            configurable: true
        });
        Vector.prototype.load = function () {
            return this.loader(this.desc);
        };
        Vector.prototype.at = function (i) {
            return this.load().then(function (d) {
                return d.data[i];
            });
        };
        Vector.prototype.data = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            var that = this;
            return this.load().then(function (data) {
                return datatypes.mask(range.filter(data.data, that.dim), that.valuetype);
            });
        };
        Vector.prototype.names = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            var that = this;
            return this.load().then(function (data) {
                return range.filter(data.rows, that.dim);
            });
        };
        Vector.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            var that = this;
            return this.load().then(function (data) {
                return data.rowIds.preMultiply(range, that.dim);
            });
        };
        Object.defineProperty(Vector.prototype, 'idtypes', {
            get: function () {
                return [this.idtype];
            },
            enumerable: true,
            configurable: true
        });
        Vector.prototype.size = function () {
            return this.desc.size;
        };
        Vector.prototype.sort = function (compareFn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argSort(d, compareFn, thisArg);
                return _this.view(ranges.list(indices));
            });
        };
        Vector.prototype.map = function (callbackfn, thisArg) {
            return null;
        };
        Vector.prototype.filter = function (callbackfn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argFilter(d, callbackfn, thisArg);
                return _this.view(ranges.list(indices));
            });
        };
        Vector.prototype.persist = function () {
            return this.desc.id;
        };
        return Vector;
    }(VectorBase);
    exports.Vector = Vector;
    var VectorView = function (_super) {
        __extends(VectorView, _super);
        function VectorView(root, range) {
            _super.call(this, root);
            this.range = range;
        }
        Object.defineProperty(VectorView.prototype, 'desc', {
            get: function () {
                return this._root.desc;
            },
            enumerable: true,
            configurable: true
        });
        VectorView.prototype.persist = function () {
            return {
                root: this._root.persist(),
                range: this.range.toString()
            };
        };
        VectorView.prototype.size = function () {
            return this.range.size(this._root.dim)[0];
        };
        VectorView.prototype.at = function (i) {
            var inverted = this.range.invert([i], this._root.dim);
            return this._root.at(inverted[0]);
        };
        VectorView.prototype.data = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this._root.data(this.range.preMultiply(range, this._root.dim));
        };
        VectorView.prototype.names = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this._root.names(this.range.preMultiply(range, this._root.dim));
        };
        VectorView.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this._root.ids(this.range.preMultiply(range, this._root.dim));
        };
        VectorView.prototype.view = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            if (range.isAll) {
                return this;
            }
            return new VectorView(this._root, this.range.preMultiply(range, this.dim));
        };
        Object.defineProperty(VectorView.prototype, 'valuetype', {
            get: function () {
                return this._root.valuetype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VectorView.prototype, 'idtype', {
            get: function () {
                return this._root.idtype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VectorView.prototype, 'idtypes', {
            get: function () {
                return [this.idtype];
            },
            enumerable: true,
            configurable: true
        });
        VectorView.prototype.sort = function (compareFn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argSort(d, compareFn, thisArg);
                return _this.view(_this.range.preMultiply(ranges.list(indices)));
            });
        };
        VectorView.prototype.map = function (callbackfn, thisArg) {
            return null;
        };
        VectorView.prototype.filter = function (callbackfn, thisArg) {
            var _this = this;
            return this.data().then(function (d) {
                var indices = C.argFilter(d, callbackfn, thisArg);
                return _this.view(_this.range.preMultiply(ranges.list(indices)));
            });
        };
        return VectorView;
    }(VectorBase);
    var StratificationVector = function (_super) {
        __extends(StratificationVector, _super);
        function StratificationVector(v, r) {
            _super.call(this, {
                id: v.desc.id + '-s',
                name: v.desc.name,
                fqname: v.desc.fqname,
                type: 'stratification',
                size: v.dim,
                ngroups: r.groups.length,
                groups: r.groups.map(function (ri) {
                    return {
                        name: ri.name,
                        color: ri.color,
                        size: ri.length
                    };
                })
            });
            this.v = v;
            this.r = r;
        }
        Object.defineProperty(StratificationVector.prototype, 'idtype', {
            get: function () {
                return this.v.idtype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StratificationVector.prototype, 'groups', {
            get: function () {
                return this.desc.groups;
            },
            enumerable: true,
            configurable: true
        });
        StratificationVector.prototype.group = function (group) {
            return new stratification.StratificationGroup(this, group, this.groups[group]);
        };
        StratificationVector.prototype.hist = function (bins, range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.range().then(function (r) {
                return math.rangeHist(r);
            });
        };
        StratificationVector.prototype.vector = function () {
            return Promise.resolve(this.v);
        };
        StratificationVector.prototype.origin = function () {
            return this.vector();
        };
        StratificationVector.prototype.range = function () {
            return Promise.resolve(this.r);
        };
        StratificationVector.prototype.idRange = function () {
            var _this = this;
            var that = this;
            return this.ids().then(function (ids) {
                var range = _this.r;
                return ids.dim(0).preMultiply(range, that.dim[0]);
            });
        };
        StratificationVector.prototype.names = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.v.names(range);
        };
        StratificationVector.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return this.v.ids(range);
        };
        Object.defineProperty(StratificationVector.prototype, 'idtypes', {
            get: function () {
                return [this.idtype];
            },
            enumerable: true,
            configurable: true
        });
        StratificationVector.prototype.size = function () {
            return this.desc.size;
        };
        Object.defineProperty(StratificationVector.prototype, 'length', {
            get: function () {
                return this.size()[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StratificationVector.prototype, 'ngroups', {
            get: function () {
                return this.desc.ngroups;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StratificationVector.prototype, 'dim', {
            get: function () {
                return this.size();
            },
            enumerable: true,
            configurable: true
        });
        StratificationVector.prototype.persist = function () {
            return {
                root: this.v.persist(),
                asstrat: true
            };
        };
        return StratificationVector;
    }(datatypes.DataTypeBase);
    exports.StratificationVector = StratificationVector;
    function create(desc) {
        if (C.isFunction(desc.loader)) {
            return new Vector(desc, desc.loader);
        }
        return new Vector(desc, viaAPILoader());
    }
    exports.create = create;
    function wrap(desc, rows, rowIds, data) {
        return new Vector(desc, viaDataLoader(rows, rowIds, data));
    }
    exports.wrap = wrap;
}(require, exports, require('./main'), require('./ajax'), require('./range'), require('./idtype'), require('./datatype'), require('./math'), require('./stratification')));
},{"./ajax":3,"./datatype":6,"./idtype":9,"./main":13,"./math":15,"./range":20,"./stratification":22}],28:[function(require,module,exports){
(function (require, exports, C, plugins, events) {
    function assignVis(node, vis) {
        node.__vis__ = vis;
    }
    exports.assignVis = assignVis;
    var AVisInstance = function (_super) {
        __extends(AVisInstance, _super);
        function AVisInstance() {
            _super.apply(this, arguments);
            this.id = C.uniqueId('vis');
            this._built = false;
        }
        AVisInstance.prototype.option = function (name, value) {
            return null;
        };
        AVisInstance.prototype.persist = function () {
            return null;
        };
        Object.defineProperty(AVisInstance.prototype, 'isBuilt', {
            get: function () {
                return this._built;
            },
            enumerable: true,
            configurable: true
        });
        AVisInstance.prototype.markReady = function (built) {
            if (built === void 0) {
                built = true;
            }
            this._built = built;
            if (built) {
                this.fire('ready');
            }
        };
        AVisInstance.prototype.locate = function () {
            var range = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                range[_i - 0] = arguments[_i];
            }
            if (range.length === 1) {
                return this.locateImpl(range[0]);
            }
            return Promise.all(range.map(this.locateImpl, this));
        };
        AVisInstance.prototype.locateById = function () {
            var _this = this;
            var range = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                range[_i - 0] = arguments[_i];
            }
            return this.data.ids().then(function (ids) {
                if (range.length === 1) {
                    return _this.locateImpl(ids.indexOf(range[0]));
                }
                return Promise.all(range.map(function (r) {
                    return _this.locateImpl(ids.indexOf(r));
                }));
            });
        };
        AVisInstance.prototype.locateImpl = function (range) {
            return Promise.resolve(null);
        };
        AVisInstance.prototype.restore = function (persisted) {
            return Promise.resolve(this);
        };
        AVisInstance.prototype.update = function () {
        };
        AVisInstance.prototype.destroy = function () {
            var n = this.node;
            if (n && n.parentNode && !(window.event && window.event.type === 'DOMNodeRemoved' && window.event.target === n)) {
                n.parentNode.removeChild(n);
            }
            this.fire('destroyed');
        };
        AVisInstance.prototype.transform = function () {
            return {
                scale: [
                    1,
                    1
                ],
                rotate: 0
            };
        };
        Object.defineProperty(AVisInstance.prototype, 'rawSize', {
            get: function () {
                return [
                    100,
                    100
                ];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AVisInstance.prototype, 'size', {
            get: function () {
                var t = this.transform();
                var r = this.rawSize;
                return [
                    r[0] * t.scale[0],
                    r[1] * t.scale[1]
                ];
            },
            enumerable: true,
            configurable: true
        });
        return AVisInstance;
    }(events.EventHandler);
    exports.AVisInstance = AVisInstance;
    function extrapolateFilter(r) {
        var v = r.filter;
        if (typeof v === 'undefined') {
            r.filter = C.constantTrue;
        } else if (typeof v === 'string') {
            r.filter = function (data) {
                return data && data.desc.type && data.desc.type.match(v);
            };
        } else if (Array.isArray(v)) {
            r.filter = function (data) {
                return data && data && (data.desc.type && data.desc.type.match(v[0])) && (!data.desc.value || data.desc.value.type.match(v[1]));
            };
        }
    }
    function extrapolateIconify(r) {
        if (C.isFunction(r.iconify)) {
            return;
        }
        r.iconify = function iconfiy(node) {
            node.title = this.name;
            if (this.iconcss) {
                node.classList.add('fa');
                node.classList.add(this.iconcss);
            } else if (this.icon) {
                node.classList.add('fa');
                node.classList.add('fa-fw');
                node.style.width = '1em';
                node.style['background-image'] = 'url(' + this.baseUrl + '/' + this.icon + ')';
                node.innerHTML = '&nbsp';
            } else {
                node.innerText = this.name.substr(0, 1).toUpperCase();
            }
        };
    }
    function extrapolateSize(r) {
        r.scaling = r.scaling || 'free';
        if (Array.isArray(r.sizeDependsOnDataDimension) && typeof r.sizeDependsOnDataDimension[0] === 'boolean') {
        } else if (typeof r.sizeDependsOnDataDimension === 'boolean') {
            r.sizeDependsOnDataDimension = [
                r.sizeDependsOnDataDimension,
                r.sizeDependsOnDataDimension
            ];
        } else {
            r.sizeDependsOnDataDimension = [
                false,
                false
            ];
        }
    }
    function extrapolateRotation(r) {
        var m = {
            free: NaN,
            no: 0,
            transpose: 90,
            swap: 180
        };
        if (typeof r.rotation === 'string' && r.rotation in m) {
            r.rotation = m[r.rotation];
        } else if (typeof r.rotation === 'number') {
            r.rotation = +r.rotation;
        } else if (r.rotation === null) {
            r.rotation = NaN;
        } else {
            r.rotation = 0;
        }
    }
    function toVisPlugin(plugin) {
        var r = plugin;
        extrapolateFilter(r);
        extrapolateIconify(r);
        extrapolateSize(r);
        extrapolateRotation(r);
        return r;
    }
    function list(data) {
        return plugins.list('vis').map(toVisPlugin).filter(function (desc) {
            return desc.filter(data);
        });
    }
    exports.list = list;
}(require, exports, require('./main'), require('./plugin'), require('./event')));
},{"./event":7,"./main":13,"./plugin":19}],29:[function(require,module,exports){
(function (require, exports, C_, data_, ranges_, idtypes_, events_, geom_) {
    exports.C = C_;
    exports.data = data_;
    exports.ranges = ranges_;
    exports.idtypes = idtypes_;
    exports.geom = geom_;
    exports.events = events_;
}(require, exports, require('./main'), require('./data'), require('./range'), require('./idtype'), require('./event'), require('./geom')));
},{"./data":5,"./event":7,"./geom":8,"./idtype":9,"./main":13,"./range":20}],30:[function(require,module,exports){
(function (require, exports, ajax, d3) {
    'use strict';
    var D3Adapter = function () {
        function D3Adapter() {
        }
        D3Adapter.prototype.send = function (url, data, method, expectedDataType) {
            if (data === void 0) {
                data = {};
            }
            if (method === void 0) {
                method = 'get';
            }
            if (expectedDataType === void 0) {
                expectedDataType = 'json';
            }
            return new Promise(function (resolve, reject) {
                if (method === 'get' || method === 'head') {
                    data = ajax.encodeParams(data);
                    if (data) {
                        url += (/\?/.test(url) ? '&' : '?') + data;
                    }
                    data = null;
                }
                var xhr = d3.xhr(url);
                if (!(data instanceof FormData)) {
                    xhr.header('Content-Type', 'application/x-www-form-urlencoded');
                }
                xhr.send(method, data instanceof FormData ? data : ajax.encodeParams(data), function (error, _raw) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(parse(_raw, expectedDataType));
                    }
                });
            });
        };
        return D3Adapter;
    }();
    function create() {
        return new D3Adapter();
    }
    exports.create = create;
    function parse(_raw, dataType) {
        if (dataType === void 0) {
            dataType = 'json';
        }
        if (dataType === 'json') {
            return JSON.parse(_raw.responseText);
        }
        return _raw.responseText;
    }
}(require, exports, require('../caleydo_core/ajax'), require('d3')));
},{"../caleydo_core/ajax":3,"d3":undefined}],31:[function(require,module,exports){
(function (require, exports, C, idtypes, vis, geom, d3) {
    'use strict';
    function transform(x, y, rotate, scaleX, scaleY) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        if (rotate === void 0) {
            rotate = 0;
        }
        if (scaleX === void 0) {
            scaleX = 1;
        }
        if (scaleY === void 0) {
            scaleY = 1;
        }
        var t = d3.transform('');
        t.translate = [
            x,
            y
        ];
        t.rotate = rotate;
        t.scale = [
            scaleX,
            scaleY
        ];
        return t;
    }
    exports.transform = transform;
    function selectionUtil(data, $data, selector) {
        var l = function (event, type, selected) {
            var all = $data.selectAll(selector);
            all.classed('select-' + type, false);
            var sub = selected.filter(all[0]);
            if (sub.length > 0) {
                d3.selectAll(sub).classed('select-' + type, true);
            }
        };
        data.on('select', l);
        C.onDOMNodeRemoved($data.node(), function () {
            data.off('select', l);
        });
        data.selections().then(function (selected) {
            l(null, 'selected', selected);
        });
        return function (d, i) {
            data.select(0, [i], idtypes.toSelectOperation(d3.event));
        };
    }
    exports.selectionUtil = selectionUtil;
    function defineVis(name, defaultOptions, initialSize, build, functions) {
        C.extendClass(VisTechnique, vis.AVisInstance);
        function VisTechnique(data, parent, options) {
            vis.AVisInstance.call(this, data, parent, options);
            this.data = data;
            this.name = name;
            this.$parent = d3.select(parent);
            this.initialSize = d3.functor(initialSize);
            this.options = C.mixin({}, d3.functor(defaultOptions).call(this, data, options || {}), options);
            if (C.isFunction(this.init)) {
                this.init(data);
            }
            this.$node = build.call(this, this.$parent, this.data, this.size);
            this.$node.datum(data);
            this.$node.node().__vis__ = this;
        }
        VisTechnique.prototype.toString = function () {
            return name;
        };
        VisTechnique.prototype.option = function (name, value) {
            if (arguments.length === 1) {
                return this.options[name];
            } else {
                var b = this.options[name];
                if (b === value) {
                    return b;
                }
                this.fire('option', name, value, b);
                this.fire('option.' + name, value, b);
                this.options[name] = value;
                this.updatedOption(name, value);
                return b;
            }
        };
        VisTechnique.prototype.updatedOption = function (name, value) {
        };
        VisTechnique.prototype.transform = function (scale, rotate) {
            var bak = {
                scale: this.options.scale || [
                    1,
                    1
                ],
                rotate: this.options.rotate || 0
            };
            if (arguments.length === 0) {
                return bak;
            }
            var size = this.rawSize;
            if (this.node.tagName.toLowerCase() === 'svg') {
                this.$node.attr({
                    width: size[0] * scale[0],
                    height: size[1] * scale[1]
                }).style('transform', 'rotate(' + rotate + 'deg)');
                this.$node.select('g').attr('transform', 'scale(' + scale[0] + ',' + scale[1] + ')');
            } else {
                this.$node.style('transform', 'rotate(' + rotate + 'deg)scale(' + scale[0] + ',' + scale[1] + ')');
            }
            var new_ = {
                scale: scale,
                rotate: rotate
            };
            this.fire('transform', new_, bak);
            this.options.scale = scale;
            this.options.rotate = rotate;
            return new_;
        };
        VisTechnique.prototype.locateImpl = function (range) {
            var r = this.locateIt(range);
            if (!r) {
                return null;
            }
            var that = this;
            return r.then(function (shape) {
                shape = geom.wrap(shape);
                return shape ? shape.transform(that.options.scale || [
                    1,
                    1
                ], that.options.rotate || 0) : shape;
            });
        };
        VisTechnique.prototype.locateIt = function (range) {
            return null;
        };
        Object.defineProperty(VisTechnique.prototype, 'node', {
            get: function () {
                return this.$node.node();
            },
            enumerable: true
        });
        Object.defineProperty(VisTechnique.prototype, 'rawSize', {
            get: function () {
                return this.initialSize(this.data);
            },
            enumerable: true
        });
        Object.keys(functions || {}).forEach(function (f) {
            VisTechnique.prototype[f] = functions[f];
        });
        return VisTechnique;
    }
    exports.defineVis = defineVis;
}(require, exports, require('../caleydo_core/main'), require('../caleydo_core/idtype'), require('../caleydo_core/vis'), require('../caleydo_core/geom'), require('d3')));
},{"../caleydo_core/geom":8,"../caleydo_core/idtype":9,"../caleydo_core/main":13,"../caleydo_core/vis":28,"d3":undefined}],32:[function(require,module,exports){
var m_css = require('css'), pluginValue0;
m_css.load('./style', function () {
}, function (r) {
    pluginValue0 = r;
});
(function (require, exports, d3, C, data, events) {
    var DataBrowser = function (_super) {
        __extends(DataBrowser, _super);
        function DataBrowser(parent, options) {
            if (options === void 0) {
                options = {};
            }
            _super.call(this);
            this.parent = parent;
            this.options = options;
            this.options = C.mixin({
                layout: 'tree',
                draggable: true,
                filter: C.constantTrue
            }, options);
            this.$node = this.build(parent);
        }
        DataBrowser.prototype.build = function (parent) {
            if (this.options.layout === 'tree') {
                return this.buildTree(parent);
            } else if (this.options.layout === 'list') {
                return this.buildList(parent);
            }
            return d3.select(parent);
        };
        DataBrowser.prototype.buildTree = function (parent) {
            var $node = d3.select(parent).append('ul').classed('databrowser', true).classed('fa-ul', true);
            var that = this;
            function buildLevel($level) {
                var $childs = $level.selectAll('li').data(function (d) {
                    return d.children;
                });
                var $childs_enter = $childs.enter().append('li').classed('collapsed', true);
                var $label = $childs_enter.append('span').on('click', function (d) {
                    if (d.children.length > 0) {
                        var $parent = d3.select(this.parentNode);
                        var collapse = !$parent.classed('collapsed');
                        $parent.classed('collapsed', collapse);
                        that.fire('toggleCollapse', d, collapse);
                        $parent.select('i').classed('fa-chevron-down', !collapse).classed('fa-chevron-right', collapse);
                    } else {
                        that.fire('select', d.data);
                    }
                }).call(makeDraggable, function (d) {
                    return d.data;
                });
                $label.append('i').attr('class', 'fa-li fa');
                $label.append('span');
                $childs_enter.append('ul').classed('fa-ul', true);
                $childs.select('i').classed('fa-chevron-right', function (d) {
                    return d.children.length > 0;
                }).classed('fa-file-o', function (d) {
                    return d.children.length === 0;
                });
                $childs.select('span').attr('draggable', function (d) {
                    return d.data !== null && that.options.draggable;
                });
                $childs.select('span span').text(function (d) {
                    var r = d.name;
                    if (d.children.length > 0) {
                        r = r + (' (' + d.children.length + ')');
                    }
                    if (d.data !== null) {
                        r = r + (' [' + d.data.dim.join(',') + ']');
                    }
                    return r;
                });
                $childs.each(function (d) {
                    if (d.children.length > 0) {
                        buildLevel(d3.select(this).select('ul'));
                    }
                });
                $childs.exit().remove();
            }
            data.tree(this.options.filter).then(function (root) {
                $node.datum(root);
                buildLevel($node);
            });
            return $node;
        };
        DataBrowser.prototype.buildList = function (parent) {
            var $node = d3.select(parent).append('ul').classed('databrowser', true).classed('fa-ul', true);
            data.list(this.options.filter).then(function (list) {
                var $li = $node.selectAll('li').data(list);
                var $li_enter = $li.enter().append('li').append('span').call(makeDraggable);
                $li_enter.append('i').attr('class', 'fa-li fa fa-file-o');
                $li_enter.append('span');
                $li.select('span span').text(function (d) {
                    return d.desc.name;
                });
                $li.exit().remove();
            });
            return $node;
        };
        return DataBrowser;
    }(events.EventHandler);
    exports.DataBrowser = DataBrowser;
    var DropDataItemHandler = function (_super) {
        __extends(DropDataItemHandler, _super);
        function DropDataItemHandler(elem, handler, options) {
            if (options === void 0) {
                options = {};
            }
            _super.call(this);
            this.handler = handler;
            this.options = { types: [] };
            C.mixin(this.options, options);
            this.register(d3.select(elem));
        }
        DropDataItemHandler.prototype.checkType = function (e) {
            if (this.options.types.length === 0) {
                return C.hasDnDType(e, 'application/caleydo-data-item');
            }
            return this.options.types.some(function (t) {
                return C.hasDnDType(e, 'application/caleydo-data-' + t);
            });
        };
        DropDataItemHandler.prototype.register = function ($node) {
            var _this = this;
            $node.on('dragenter', function () {
                var e = d3.event;
                var xy = d3.mouse($node.node());
                if (_this.checkType(e)) {
                    _this.fire('enter', {
                        x: xy[0],
                        y: xy[1]
                    });
                    return false;
                }
            }).on('dragover', function () {
                var e = d3.event;
                var xy = d3.mouse($node.node());
                if (_this.checkType(e)) {
                    e.preventDefault();
                    C.updateDropEffect(e);
                    _this.fire('over', {
                        x: xy[0],
                        y: xy[1]
                    });
                    return false;
                }
            }).on('dragleave', function () {
                _this.fire('leave');
            }).on('drop', function () {
                var e = d3.event;
                e.preventDefault();
                var xy = d3.mouse($node.node());
                if (C.hasDnDType(e, 'application/caleydo-data-item')) {
                    var id = JSON.parse(e.dataTransfer.getData('application/caleydo-data-item'));
                    data.get(id).then(function (d) {
                        _this.fire('drop', d, e.dataTransfer.dropEffect, {
                            x: xy[0],
                            y: xy[1]
                        });
                        if (_this.handler) {
                            _this.handler(d, e.dataTransfer.dropEffect, {
                                x: xy[0],
                                y: xy[1]
                            });
                        }
                    });
                    return false;
                }
            });
        };
        return DropDataItemHandler;
    }(events.EventHandler);
    exports.DropDataItemHandler = DropDataItemHandler;
    function makeDropable(elem, onDrop, options) {
        if (options === void 0) {
            options = {};
        }
        return new DropDataItemHandler(elem, onDrop, options);
    }
    exports.makeDropable = makeDropable;
    function makeDraggable(sel, data_getter) {
        if (data_getter === void 0) {
            data_getter = C.identity;
        }
        sel.attr('draggable', true).on('dragstart', function (d) {
            var e = d3.event;
            var data = data_getter(d);
            if (data) {
                e.dataTransfer.effectAllowed = 'copy';
                e.dataTransfer.setData('text/plain', data.desc.name);
                e.dataTransfer.setData('application/json', JSON.stringify(data.desc));
                var p = JSON.stringify(data.persist());
                e.dataTransfer.setData('application/caleydo-data-item', p);
                e.dataTransfer.setData('application/caleydo-data-' + data.desc.type, p);
                e.dataTransfer.setData('application/caleydo-data-item-' + p, p);
            }
        });
    }
    exports.makeDraggable = makeDraggable;
    function create(parent, options) {
        if (options === void 0) {
            options = {};
        }
        return new DataBrowser(parent, options);
    }
    exports.create = create;
}(require, exports, require('d3'), require('../caleydo_core/main'), require('../caleydo_core/data'), require('../caleydo_core/event'), pluginValue0));
},{"../caleydo_core/data":5,"../caleydo_core/event":7,"../caleydo_core/main":13,"css":undefined,"d3":undefined}],33:[function(require,module,exports){
(function (require, exports, d3, layout, geom) {
    'use strict';
    var SVGTransformLayoutElem = function (_super) {
        __extends(SVGTransformLayoutElem, _super);
        function SVGTransformLayoutElem($elem, rawWidth, rawHeight, options) {
            if (options === void 0) {
                options = {};
            }
            _super.call(this, options);
            this.$elem = $elem;
            this.rawWidth = rawWidth;
            this.rawHeight = rawHeight;
        }
        SVGTransformLayoutElem.prototype.setBounds = function (x, y, w, h) {
            var t = d3.transform(this.$elem.attr('transform'));
            t.translate[0] = x;
            t.translate[1] = y;
            t.scale[0] = w / this.rawWidth;
            t.scale[1] = h / this.rawHeight;
            this.$elem.attr('transform', t.toString());
            return null;
        };
        SVGTransformLayoutElem.prototype.getBounds = function () {
            var t = d3.transform(this.$elem.attr('transform'));
            return geom.rect(t.translate[0], t.translate[1], this.rawWidth * t.scale[0], this.rawHeight * t.scale[1]);
        };
        return SVGTransformLayoutElem;
    }(layout.ALayoutElem);
    var SVGRectLayoutElem = function (_super) {
        __extends(SVGRectLayoutElem, _super);
        function SVGRectLayoutElem($elem, options) {
            if (options === void 0) {
                options = {};
            }
            _super.call(this, options);
            this.$elem = $elem;
        }
        SVGRectLayoutElem.prototype.setBounds = function (x, y, w, h) {
            this.$elem.attr({
                x: x,
                y: y,
                width: w,
                height: h
            });
            return null;
        };
        SVGRectLayoutElem.prototype.getBounds = function () {
            return geom.rect(parseFloat(this.$elem.attr('x')), parseFloat(this.$elem.attr('y')), parseFloat(this.$elem.attr('width')), parseFloat(this.$elem.attr('height')));
        };
        return SVGRectLayoutElem;
    }(layout.ALayoutElem);
    var HTMLLayoutElem = function (_super) {
        __extends(HTMLLayoutElem, _super);
        function HTMLLayoutElem(node, options) {
            if (options === void 0) {
                options = {};
            }
            _super.call(this, options);
            this.targetBounds = null;
            this.$node = d3.select(node);
        }
        HTMLLayoutElem.prototype.setBounds = function (x, y, w, h) {
            var _this = this;
            var unit = this.layoutOption('unit', 'px'), doAnimate = this.layoutOption('animate', false) === true;
            var targetBounds = geom.rect(x, y, w, h);
            var extra = this.layoutOption('set-call', null);
            var duration = this.layoutOption('animation-duration', 200);
            var t = doAnimate && duration > 0 ? this.$node.transition().duration(duration) : this.$node;
            t.style({
                left: x + unit,
                top: y + unit,
                width: w + unit,
                height: h + unit
            });
            if (extra) {
                t.call(extra);
            }
            extra = this.layoutOption('onSetBounds', null);
            if (doAnimate) {
                this.targetBounds = targetBounds;
                var d = new Promise(function (resolve) {
                    setTimeout(function () {
                        _this.targetBounds = null;
                        if (extra) {
                            extra();
                        }
                        resolve(null);
                    }, duration);
                });
                return d;
            }
            if (extra) {
                extra();
            }
            return Promise.resolve(null);
        };
        HTMLLayoutElem.prototype.getBounds = function () {
            if (this.targetBounds) {
                return this.targetBounds;
            }
            var unit = this.layoutOption('unit', 'px'), style = this.$node.node().style;
            function v(f) {
                if (f.length >= unit.length && f.substring(f.length - unit.length) === unit) {
                    f = f.substring(0, f.length - unit.length);
                    return parseFloat(f);
                }
                return 0;
            }
            return geom.rect(v(style.left), v(style.top), v(style.width), v(style.height));
        };
        return HTMLLayoutElem;
    }(layout.ALayoutElem);
    function wrapSVGTransform($elem, rawWidth, rawHeight, options) {
        if (options === void 0) {
            options = {};
        }
        return new SVGTransformLayoutElem($elem, rawWidth, rawHeight, options);
    }
    exports.wrapSVGTransform = wrapSVGTransform;
    function wrapSVGRect($elem, options) {
        if (options === void 0) {
            options = {};
        }
        return new SVGRectLayoutElem($elem, options);
    }
    exports.wrapSVGRect = wrapSVGRect;
    function wrapDom(elem, options) {
        if (options === void 0) {
            options = {};
        }
        return new HTMLLayoutElem(elem, options);
    }
    exports.wrapDom = wrapDom;
}(require, exports, require('d3'), require('../caleydo_core/layout'), require('../caleydo_core/geom')));
},{"../caleydo_core/geom":8,"../caleydo_core/layout":11,"d3":undefined}],34:[function(require,module,exports){
(function (require, exports, C, d3, ranges, matrix_impl, table_impl, idtypes) {
    'use strict';
    function parseRemoteMatrix(url, options) {
        if (options === void 0) {
            options = {};
        }
        return new Promise(function (resolve, reject) {
            d3.text(url, function (error, data) {
                if (error) {
                    reject(error);
                }
                var rows = d3.csv.parseRows(data);
                resolve(parseMatrix(rows, options));
            });
        });
    }
    exports.parseRemoteMatrix = parseRemoteMatrix;
    function isNumeric(obj) {
        return obj - parseFloat(obj) + 1 >= 0;
    }
    function guessValue(arr) {
        if (arr.length === 0) {
            return { type: 'string' };
        }
        var test = arr[0];
        if (typeof test === 'number' || isNumeric(test)) {
            return {
                type: 'real',
                range: d3.extent(arr.map(parseFloat))
            };
        }
        var values = d3.set(arr);
        if (values.size() < arr.length * 0.2 || values.size() < 8) {
            return {
                type: 'categorical',
                categories: values.values()
            };
        }
        return { type: 'string' };
    }
    function parseMatrix(data, rows_or_options, cols_def, options) {
        if (options === void 0) {
            options = {};
        }
        var rows = Array.isArray(rows_or_options) ? rows_or_options : data.map(function (r) {
            return r[0];
        });
        var cols = cols_def ? cols_def : data[0].slice(1);
        if (typeof rows_or_options === 'object') {
            options = rows_or_options;
        }
        options = options || {};
        var id = C.uniqueString('localData');
        var localdesc = {
            type: 'matrix',
            id: id,
            name: id,
            fqname: id,
            rowtype: '_rows',
            coltype: '_cols',
            rowassigner: idtypes.createLocalAssigner(),
            colassigner: idtypes.createLocalAssigner()
        };
        C.mixin(localdesc, options);
        var ddesc = localdesc;
        ddesc.size = ddesc.size || [
            rows.length,
            cols.length
        ];
        var realdata = Array.isArray(rows_or_options) ? data : data.slice(1).map(function (r) {
            return r.slice(1);
        });
        ddesc.value = ddesc.value || guessValue([].concat.apply([], realdata));
        if (ddesc.value.type === 'real') {
            realdata = realdata.map(function (row) {
                return row.map(parseFloat);
            });
        }
        var loader = {
            rowIds: function (desc, range) {
                return Promise.resolve(localdesc.rowassigner(range.filter(rows)));
            },
            colIds: function (desc, range) {
                return Promise.resolve(localdesc.rowassigner(range.filter(cols)));
            },
            ids: function (desc, range) {
                var rc = localdesc.rowassigner(range.dim(0).filter(rows));
                var cc = localdesc.colassigner(range.dim(1).filter(cols));
                return Promise.resolve(ranges.join(rc, cc));
            },
            at: function (desc, i, j) {
                return Promise.resolve(realdata[i][j]);
            },
            rows: function (desc, range) {
                return Promise.resolve(range.filter(rows));
            },
            cols: function (desc, range) {
                return Promise.resolve(range.filter(cols));
            },
            data: function (desc, range) {
                return Promise.resolve(range.filter(realdata));
            }
        };
        return matrix_impl.create(localdesc, loader);
    }
    exports.parseMatrix = parseMatrix;
    function parseRemoteTable(url, options) {
        if (options === void 0) {
            options = {};
        }
        return new Promise(function (resolve, reject) {
            d3.csv(url, function (error, data) {
                if (error) {
                    reject(error);
                }
                resolve(parseObjects(data, options));
            });
        });
    }
    exports.parseRemoteTable = parseRemoteTable;
    function to_objects(data, cols) {
        return data.map(function (row) {
            var r = {};
            cols.forEach(function (col, i) {
                return r[col] = row[i];
            });
            return r;
        });
    }
    function parseTable(data, options) {
        if (options === void 0) {
            options = {};
        }
        var id = C.uniqueString('localData');
        var localdesc = {
            type: 'table',
            id: id,
            name: id,
            fqname: id,
            idtype: '_rows',
            rowassigner: idtypes.createLocalAssigner()
        };
        C.mixin(localdesc, options);
        var rows = data.map(function (r) {
            return r[0];
        });
        var cols = data[0].slice(1);
        var realdata = data.slice(1).map(function (r) {
            return r.slice(1);
        });
        var ddesc = localdesc;
        ddesc.size = ddesc.size || [
            rows.length,
            cols.length
        ];
        ddesc.columns = ddesc.columns || cols.map(function (col, i) {
            return {
                name: col,
                value: guessValue(realdata.map(function (row) {
                    return row[i];
                }))
            };
        });
        realdata = realdata.map(function (row) {
            return ddesc.columns.map(function (col, i) {
                return col.value.type === 'real' ? parseFloat(row[i]) : row[i];
            });
        });
        var objs = to_objects(realdata, cols);
        ddesc.loader = function (desc) {
            var r = {
                rowIds: localdesc.rowassigner(rows),
                rows: rows,
                objs: objs,
                data: realdata
            };
            return Promise.resolve(r);
        };
        return table_impl.create(localdesc);
    }
    exports.parseTable = parseTable;
    function to_list(objs, cols) {
        return objs.map(function (obj) {
            return cols.map(function (c) {
                return obj[c];
            });
        });
    }
    function parseObjects(data, options) {
        if (options === void 0) {
            options = {};
        }
        var id = C.uniqueString('localData');
        var localdesc = {
            type: 'table',
            id: id,
            name: id,
            fqname: id,
            idtype: '_rows',
            rowassigner: idtypes.createLocalAssigner(),
            keyProperty: '_id'
        };
        C.mixin(localdesc, options);
        var rows = data.map(function (r, i) {
            return r[localdesc.keyProperty] || i;
        });
        var cols = Object.keys(data[0]);
        var objs = data;
        var realdata = to_list(objs, cols);
        var ddesc = localdesc;
        ddesc.dim = ddesc.dim || [
            rows.length,
            cols.length
        ];
        ddesc.columns = ddesc.columns || cols.map(function (col, i) {
            return {
                name: col,
                value: guessValue(realdata.map(function (row) {
                    return row[i];
                }))
            };
        });
        ddesc.loader = function (desc) {
            var r = {
                rowIds: localdesc.rowassigner(rows),
                rows: rows,
                objs: objs,
                data: realdata
            };
            return Promise.resolve(r);
        };
        return table_impl.create(localdesc);
    }
    exports.parseObjects = parseObjects;
}(require, exports, require('../caleydo_core/main'), require('d3'), require('../caleydo_core/range'), require('../caleydo_core/matrix_impl'), require('../caleydo_core/table_impl'), require('../caleydo_core/idtype')));
},{"../caleydo_core/idtype":9,"../caleydo_core/main":13,"../caleydo_core/matrix_impl":17,"../caleydo_core/range":20,"../caleydo_core/table_impl":25,"d3":undefined}],35:[function(require,module,exports){
(function (require, exports, d3, events, idtypes, C) {
    var SelectionIDType = function () {
        function SelectionIDType(idType, parent, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            this.idType = idType;
            this.l = function (event, type, selection) {
                _this.update(type, selection);
            };
            this.options = {
                useNames: false,
                addClear: true,
                selectionTypes: [
                    idtypes.defaultSelectionType,
                    idtypes.hoverSelectionType
                ],
                filterSelectionTypes: C.constantTrue
            };
            C.mixin(this.options, options);
            idType.on('select', this.l);
            this.$div = parent.append('div');
            this.$div.append('span').text(idType.name);
            if (this.options.addClear) {
                this.$div.append('span').text(' (clear)').style('cursor', 'pointer').attr('title', 'click to clear selection').on('click', function () {
                    _this.options.selectionTypes.forEach(function (s) {
                        return idType.clear(s);
                    });
                });
            }
            this.$ul = this.$div.append('div');
            this.options.selectionTypes.forEach(function (s) {
                return _this.update(s, idType.selections(s));
            });
        }
        SelectionIDType.prototype.update = function (type, selection) {
            if (!this.options.filterSelectionTypes(type)) {
                return;
            }
            this.$div.classed('no-selection-' + type, selection.isNone);
            var elem = this.$ul.select('span.select-' + type);
            if (selection.isNone) {
                elem.remove();
                return;
            }
            if (elem.empty()) {
                elem = this.$ul.append('span').classed('select-' + type, true);
            }
            if (this.options.useNames && this.idType.id.charAt(0) !== '_' && !this.idType.internal) {
                this.idType.unmap(selection).then(function (names) {
                    elem.text(names.join(', '));
                });
            } else {
                var ids = selection.dim(0).asList();
                elem.text(ids.join(', '));
            }
        };
        SelectionIDType.prototype.destroy = function () {
            this.idType.off('select', this.l);
        };
        return SelectionIDType;
    }();
    exports.SelectionIDType = SelectionIDType;
    var SelectionInfo = function () {
        function SelectionInfo(parent, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            this.parent = parent;
            this.handler = [];
            this.listener = function (event, idtype) {
                if (_this.options.filter(idtype)) {
                    _this.handler.push(new SelectionIDType(idtype, _this.$div, _this.options));
                }
            };
            this.options = {
                useNames: false,
                addClear: true,
                selectionTypes: [
                    idtypes.defaultSelectionType,
                    idtypes.hoverSelectionType
                ],
                filterSelectionTypes: C.constantTrue,
                filter: C.constantTrue
            };
            C.mixin(this.options, options);
            this.build(d3.select(parent));
        }
        SelectionInfo.prototype.build = function (parent) {
            var _this = this;
            var $div = this.$div = parent.append('div').classed('selectioninfo', true);
            C.onDOMNodeRemoved($div.node(), this.destroy, this);
            events.on('register.idtype', this.listener);
            idtypes.list().forEach(function (d) {
                _this.listener(null, d);
            });
        };
        SelectionInfo.prototype.destroy = function () {
            events.off('register.idtype', this.listener);
            this.handler.forEach(function (h) {
                return h.destroy();
            });
            this.handler.length = 0;
        };
        return SelectionInfo;
    }();
    exports.SelectionInfo = SelectionInfo;
    function createFor(idtype, parent, options) {
        return new SelectionIDType(idtype, d3.select(parent), options);
    }
    exports.createFor = createFor;
    function create(parent, options) {
        if (options === void 0) {
            options = {};
        }
        return new SelectionInfo(parent, options);
    }
    exports.create = create;
}(require, exports, require('d3'), require('../caleydo_core/event'), require('../caleydo_core/idtype'), require('../caleydo_core/main')));
},{"../caleydo_core/event":7,"../caleydo_core/idtype":9,"../caleydo_core/main":13,"d3":undefined}],36:[function(require,module,exports){
(function (require, exports, C, ajax, idtypes, datatypes, ranges, events) {
    var AttributeContainer = function (_super) {
        __extends(AttributeContainer, _super);
        function AttributeContainer() {
            _super.apply(this, arguments);
            this._attrs = {};
        }
        AttributeContainer.prototype.persist = function () {
            if (Object.keys(this._attrs).length > 0) {
                return { attrs: C.mixin({}, this._attrs) };
            }
            return {};
        };
        AttributeContainer.prototype.setAttr = function (attr, value) {
            var bak = this._attrs[attr];
            if (bak === value && !Array.isArray(bak)) {
                return;
            }
            this._attrs[attr] = value;
            this.fire('attr-' + attr, value, bak);
            this.fire('setAttr', attr, value, bak);
        };
        AttributeContainer.prototype.hasAttr = function (attr) {
            return attr in this._attrs;
        };
        AttributeContainer.prototype.getAttr = function (attr, default_) {
            if (default_ === void 0) {
                default_ = null;
            }
            if (attr in this._attrs) {
                return this._attrs[attr];
            }
            return default_;
        };
        Object.defineProperty(AttributeContainer.prototype, 'attrs', {
            get: function () {
                return Object.keys(this._attrs);
            },
            enumerable: true,
            configurable: true
        });
        AttributeContainer.prototype.restore = function (persisted) {
            if (persisted.attrs) {
                this._attrs = persisted.attrs;
            }
            return this;
        };
        return AttributeContainer;
    }(events.EventHandler);
    exports.AttributeContainer = AttributeContainer;
    var GraphNode = function (_super) {
        __extends(GraphNode, _super);
        function GraphNode(type, id) {
            if (type === void 0) {
                type = 'node';
            }
            if (id === void 0) {
                id = NaN;
            }
            _super.call(this);
            this.type = type;
            this.outgoing = [];
            this.incoming = [];
            this._id = NaN;
            this._id = C.flagId('graph_node', id);
        }
        Object.defineProperty(GraphNode.prototype, 'id', {
            get: function () {
                if (isNaN(this._id)) {
                    this._id = C.uniqueId('graph_node');
                }
                return this._id;
            },
            enumerable: true,
            configurable: true
        });
        GraphNode.prototype.persist = function () {
            var r = _super.prototype.persist.call(this);
            r.type = this.type;
            r.id = this.id;
            return r;
        };
        GraphNode.prototype.restore = function (persisted) {
            _super.prototype.restore.call(this, persisted);
            this.type = persisted.type;
            this._id = C.flagId('graph_node', persisted.id);
            return this;
        };
        return GraphNode;
    }(AttributeContainer);
    exports.GraphNode = GraphNode;
    var GraphEdge = function (_super) {
        __extends(GraphEdge, _super);
        function GraphEdge(type, source, target, id) {
            if (type === void 0) {
                type = 'edge';
            }
            if (source === void 0) {
                source = null;
            }
            if (target === void 0) {
                target = null;
            }
            if (id === void 0) {
                id = NaN;
            }
            _super.call(this);
            this.type = type;
            this.source = source;
            this.target = target;
            this._id = NaN;
            this._id = C.flagId('graph_edge', id);
            if (source && target) {
                this.init();
            }
        }
        Object.defineProperty(GraphEdge.prototype, 'id', {
            get: function () {
                if (isNaN(this._id)) {
                    this._id = C.uniqueId('graph_edge');
                }
                return this._id;
            },
            enumerable: true,
            configurable: true
        });
        GraphEdge.prototype.init = function () {
            this.source.outgoing.push(this);
            this.target.incoming.push(this);
        };
        GraphEdge.prototype.takeDown = function () {
            if (this.source) {
                this.source.outgoing.splice(this.source.outgoing.indexOf(this), 1);
            }
            if (this.target) {
                this.target.incoming.splice(this.target.incoming.indexOf(this), 1);
            }
        };
        GraphEdge.prototype.toString = function () {
            return this.source + ' ' + this.type + ' ' + this.target;
        };
        GraphEdge.prototype.persist = function () {
            var r = _super.prototype.persist.call(this);
            r.type = this.type;
            r.id = this.id;
            r.source = this.source.id;
            r.target = this.target.id;
            return r;
        };
        GraphEdge.prototype.restore = function (p, nodes) {
            _super.prototype.restore.call(this, p);
            this.type = p.type;
            this._id = C.flagId('graph_edge', p.id);
            this.source = nodes(p.source);
            this.target = nodes(p.target);
            this.init();
            return this;
        };
        return GraphEdge;
    }(AttributeContainer);
    exports.GraphEdge = GraphEdge;
    function isType(type) {
        return function (edge) {
            return type instanceof RegExp ? type.test(edge.type) : edge.type === type;
        };
    }
    exports.isType = isType;
    var AGraph = function (_super) {
        __extends(AGraph, _super);
        function AGraph() {
            _super.apply(this, arguments);
        }
        Object.defineProperty(AGraph.prototype, 'nodes', {
            get: function () {
                return [];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AGraph.prototype, 'nnodes', {
            get: function () {
                return this.nodes.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AGraph.prototype, 'edges', {
            get: function () {
                return [];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AGraph.prototype, 'nedges', {
            get: function () {
                return this.edges.length;
            },
            enumerable: true,
            configurable: true
        });
        return AGraph;
    }(idtypes.SelectAble);
    exports.AGraph = AGraph;
    var defaultGraphFactory = {
        makeNode: function (p) {
            return new GraphNode().restore(p);
        },
        makeEdge: function (p, lookup) {
            return new GraphEdge().restore(p, lookup);
        }
    };
    var GraphProxy = function (_super) {
        __extends(GraphProxy, _super);
        function GraphProxy(desc) {
            _super.call(this, desc);
            this._impl = null;
            this._loaded = null;
        }
        Object.defineProperty(GraphProxy.prototype, 'nnodes', {
            get: function () {
                if (this._loaded) {
                    return this._loaded.nnodes;
                }
                var size = this.desc.size;
                return size[0] || 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphProxy.prototype, 'nedges', {
            get: function () {
                if (this._loaded) {
                    return this._loaded.nedges;
                }
                var size = this.desc.size;
                return size[1] || 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphProxy.prototype, 'dim', {
            get: function () {
                return [
                    this.nnodes,
                    this.nedges
                ];
            },
            enumerable: true,
            configurable: true
        });
        GraphProxy.prototype.impl = function (factory) {
            var _this = this;
            if (factory === void 0) {
                factory = defaultGraphFactory;
            }
            if (this._impl) {
                return this._impl;
            }
            var type = this.desc.storage || 'remote';
            if (type === 'memory') {
                this._loaded = new MemoryGraph(this.desc, [], [], factory);
                this._impl = Promise.resolve(this._loaded);
            } else if (type === 'local') {
                this._loaded = LocalStorageGraph.load(this.desc, factory, localStorage);
                this._impl = Promise.resolve(this._loaded);
            } else if (type === 'session') {
                this._loaded = LocalStorageGraph.load(this.desc, factory, sessionStorage);
                this._impl = Promise.resolve(this._loaded);
            } else if (type === 'given' && this.desc.graph instanceof GraphBase) {
                this._loaded = this.desc.graph;
                this._impl = Promise.resolve(this._loaded);
            } else {
                this._impl = RemoteStoreGraph.load(this.desc, factory).then(function (graph) {
                    return _this._loaded = graph;
                });
            }
            return this._impl;
        };
        GraphProxy.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            if (this._impl) {
                return this._impl.then(function (i) {
                    return i.ids(range);
                });
            }
            return Promise.resolve(ranges.none());
        };
        Object.defineProperty(GraphProxy.prototype, 'idtypes', {
            get: function () {
                return [
                    '_nodes',
                    '_edges'
                ].map(idtypes.resolve);
            },
            enumerable: true,
            configurable: true
        });
        return GraphProxy;
    }(datatypes.DataTypeBase);
    exports.GraphProxy = GraphProxy;
    function create(desc) {
        return new GraphProxy(desc);
    }
    exports.create = create;
    var GraphBase = function (_super) {
        __extends(GraphBase, _super);
        function GraphBase(desc, _nodes, _edges) {
            if (_nodes === void 0) {
                _nodes = [];
            }
            if (_edges === void 0) {
                _edges = [];
            }
            _super.call(this);
            this.desc = desc;
            this._nodes = _nodes;
            this._edges = _edges;
        }
        Object.defineProperty(GraphBase.prototype, 'nodes', {
            get: function () {
                return this._nodes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GraphBase.prototype, 'edges', {
            get: function () {
                return this._edges;
            },
            enumerable: true,
            configurable: true
        });
        GraphBase.prototype.addNode = function (n) {
            this._nodes.push(n);
            this.fire('add_node', n);
            return this;
        };
        GraphBase.prototype.updateNode = function (n) {
            this.fire('update_node', n);
            return this;
        };
        GraphBase.prototype.updateEdge = function (e) {
            this.fire('update_edge', e);
            return this;
        };
        GraphBase.prototype.removeNode = function (n) {
            var i = this._nodes.indexOf(n);
            if (i < 0) {
                return null;
            }
            this._nodes.splice(i, 1);
            this.fire('remove_node', n);
            return this;
        };
        GraphBase.prototype.addEdge = function (e_or_s, type, t) {
            if (e_or_s instanceof GraphEdge) {
                var e = e_or_s;
                this._edges.push(e);
                this.fire('add_edge', e, e.type, e.source, e.target);
                return;
            }
            return this.addEdge(new GraphEdge(type, e_or_s, t));
        };
        GraphBase.prototype.removeEdge = function (e) {
            var i = this._edges.indexOf(e);
            if (i < 0) {
                return null;
            }
            e.takeDown();
            this._edges.splice(i, 1);
            this.fire('remove_edge', e);
            return this;
        };
        Object.defineProperty(GraphBase.prototype, 'dim', {
            get: function () {
                return [
                    this._nodes.length,
                    this._edges.length
                ];
            },
            enumerable: true,
            configurable: true
        });
        GraphBase.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            return Promise.resolve(ranges.list(this._nodes.map(function (n) {
                return n.id;
            }), this._edges.map(function (n) {
                return n.id;
            })));
        };
        GraphBase.prototype.selectNode = function (node, op) {
            if (op === void 0) {
                op = idtypes.SelectOperation.SET;
            }
            this.select(0, [this._nodes.indexOf(node)], op);
        };
        GraphBase.prototype.selectedNodes = function () {
            var _this = this;
            return this.selections().then(function (r) {
                var nodes = [];
                r.dim(0).forEach(function (index) {
                    return nodes.push(_this._nodes[index]);
                });
                return nodes;
            });
        };
        GraphBase.prototype.selectEdge = function (edge, op) {
            if (op === void 0) {
                op = idtypes.SelectOperation.SET;
            }
            this.select(1, [this._edges.indexOf(edge)], op);
        };
        GraphBase.prototype.selectedEdges = function () {
            var _this = this;
            return this.selections().then(function (r) {
                var edges = [];
                r.dim(1).forEach(function (index) {
                    return edges.push(_this._edges[index]);
                });
                return edges;
            });
        };
        Object.defineProperty(GraphBase.prototype, 'idtypes', {
            get: function () {
                return [
                    '_nodes',
                    '_edges'
                ].map(idtypes.resolve);
            },
            enumerable: true,
            configurable: true
        });
        GraphBase.prototype.clear = function () {
            this._nodes = [];
            this._edges = [];
            return this;
        };
        GraphBase.prototype.persist = function () {
            var r = { root: this.desc.id };
            r.nodes = this.nodes.map(function (s) {
                return s.persist();
            });
            r.edges = this.edges.map(function (l) {
                return l.persist();
            });
            return r;
        };
        return GraphBase;
    }(AGraph);
    exports.GraphBase = GraphBase;
    var MemoryGraph = function (_super) {
        __extends(MemoryGraph, _super);
        function MemoryGraph(desc, _nodes, _edges, factory) {
            if (_nodes === void 0) {
                _nodes = [];
            }
            if (_edges === void 0) {
                _edges = [];
            }
            if (factory === void 0) {
                factory = defaultGraphFactory;
            }
            _super.call(this, desc, _nodes, _edges);
            this.factory = factory;
        }
        MemoryGraph.prototype.restore = function (persisted) {
            var _this = this;
            var lookup = {}, lookupFun = function (id) {
                    return lookup[id];
                };
            persisted.nodes.forEach(function (p) {
                var n = _this.factory.makeNode(p);
                lookup[n.id] = n;
                _this.addNode(n);
            });
            persisted.edges.forEach(function (p) {
                var n = _this.factory.makeEdge(p, lookupFun);
                _this.addEdge(n);
            });
            return this;
        };
        return MemoryGraph;
    }(GraphBase);
    exports.MemoryGraph = MemoryGraph;
    var RemoteStoreGraph = function (_super) {
        __extends(RemoteStoreGraph, _super);
        function RemoteStoreGraph(desc, _nodes, _edges) {
            var _this = this;
            if (_nodes === void 0) {
                _nodes = [];
            }
            if (_edges === void 0) {
                _edges = [];
            }
            _super.call(this, desc, _nodes, _edges);
            this.updateHandler = function (event) {
                var s = event.target;
                if (s instanceof GraphNode) {
                    _this.updateNode(s);
                }
                if (s instanceof GraphEdge) {
                    _this.updateEdge(s);
                }
            };
            this._wait_for_synced = 0;
        }
        RemoteStoreGraph.load = function (desc, factory) {
            var r = new RemoteStoreGraph(desc, [], []);
            return r.load(factory);
        };
        RemoteStoreGraph.prototype.load = function (factory) {
            var _this = this;
            return ajax.sendAPI('/dataset/graph/' + this.desc.id + '/data').then(function (r) {
                _this.loadImpl(r.nodes, r.edges, factory);
                _this.fire('sync_load,sync', --_this._wait_for_synced);
                return _this;
            });
        };
        RemoteStoreGraph.prototype.loadImpl = function (nodes, edges, factory) {
            var _this = this;
            var lookup = {}, lookupFun = function (id) {
                    return lookup[id];
                };
            nodes.forEach(function (n) {
                var nn = factory.makeNode(n);
                lookup[nn.id] = nn;
                nn.on('setAttr', _this.updateHandler);
                _super.prototype.addNode.call(_this, nn);
            });
            edges.forEach(function (n) {
                var nn = factory.makeEdge(n, lookupFun);
                nn.on('setAttr', _this.updateHandler);
                _super.prototype.addEdge.call(_this, nn);
            });
            this.fire('loaded');
        };
        Object.defineProperty(RemoteStoreGraph.prototype, 'activeSyncOperations', {
            get: function () {
                return this._wait_for_synced;
            },
            enumerable: true,
            configurable: true
        });
        RemoteStoreGraph.prototype.addNode = function (n) {
            var _this = this;
            _super.prototype.addNode.call(this, n);
            n.on('setAttr', this.updateHandler);
            this.fire('sync_start_node,sync_start', ++this._wait_for_synced, 'add_node', n);
            return ajax.sendAPI('/dataset/graph/' + this.desc.id + '/node', { desc: JSON.stringify(n.persist()) }, 'post').then(function (r) {
                _this.fire('sync_node,sync', --_this._wait_for_synced, n);
                return _this;
            });
        };
        RemoteStoreGraph.prototype.updateNode = function (n) {
            var _this = this;
            _super.prototype.updateNode.call(this, n);
            this.fire('sync_start_node,sync_start', ++this._wait_for_synced, 'update_node', n);
            return ajax.sendAPI('/dataset/graph/' + this.desc.id + '/node/' + n.id, { desc: JSON.stringify(n.persist()) }, 'put').then(function (r) {
                _this.fire('sync_node,sync', --_this._wait_for_synced, n);
                return _this;
            });
        };
        RemoteStoreGraph.prototype.removeNode = function (n) {
            var _this = this;
            if (!_super.prototype.removeNode.call(this, n)) {
                return Promise.reject('invalid node');
            }
            n.off('setAttr', this.updateHandler);
            this.fire('sync_start_node,sync_start', ++this._wait_for_synced, 'remove_node', n);
            return ajax.sendAPI('/dataset/graph/' + this.desc.id + '/node/' + n.id, {}, 'delete').then(function (r) {
                _this.fire('sync_node,sync', --_this._wait_for_synced, n);
                return _this;
            });
        };
        RemoteStoreGraph.prototype.addEdge = function (e_or_s, type, t) {
            var _this = this;
            if (e_or_s instanceof GraphEdge) {
                _super.prototype.addEdge.call(this, e_or_s);
                var e = e_or_s;
                e.on('setAttr', this.updateHandler);
                this.fire('sync_start_edge,sync_start', ++this._wait_for_synced, 'add_edge', e);
                return ajax.sendAPI('/dataset/graph/' + this.desc.id + '/edge', { desc: JSON.stringify(e.persist()) }, 'post').then(function (r) {
                    _this.fire('sync_edge,sync', --_this._wait_for_synced, e);
                    return _this;
                });
            }
            return _super.prototype.addEdge.call(this, e_or_s, type, t);
        };
        RemoteStoreGraph.prototype.removeEdge = function (e) {
            var _this = this;
            if (!_super.prototype.removeEdge.call(this, e)) {
                return Promise.reject('invalid edge');
            }
            e.off('setAttr', this.updateHandler);
            this.fire('sync_start_edge,sync_start', ++this._wait_for_synced, 'remove_edge', e);
            return ajax.sendAPI('/dataset/graph/' + this.desc.id + '/edge/' + e.id, {}, 'delete').then(function (r) {
                _this.fire('sync_edge,sync', --_this._wait_for_synced, e);
                return _this;
            });
        };
        RemoteStoreGraph.prototype.updateEdge = function (e) {
            var _this = this;
            _super.prototype.updateEdge.call(this, e);
            this.fire('sync_start_edge,sync_start', ++this._wait_for_synced, 'update_edge', e);
            return ajax.sendAPI('/dataset/graph/' + this.desc.id + '/edge/' + e.id, { desc: JSON.stringify(e.persist()) }, 'put').then(function (r) {
                _this.fire('sync_edge,sync', --_this._wait_for_synced, e);
                return _this;
            });
        };
        RemoteStoreGraph.prototype.clear = function () {
            var _this = this;
            if (this.nnodes === 0 && this.nedges === 0) {
                return Promise.resolve(this);
            }
            this.nodes.forEach(function (n) {
                return n.off('setAttr', _this.updateHandler);
            });
            this.edges.forEach(function (n) {
                return n.off('setAttr', _this.updateHandler);
            });
            _super.prototype.clear.call(this);
            this.fire('sync_start', ++this._wait_for_synced, 'clear');
            return ajax.sendAPI('/dataset/graph/' + this.desc.id + '/node', {}, 'delete').then(function (r) {
                _this.fire('sync');
                return _this;
            });
        };
        return RemoteStoreGraph;
    }(GraphBase);
    exports.RemoteStoreGraph = RemoteStoreGraph;
    var LocalStorageGraph = function (_super) {
        __extends(LocalStorageGraph, _super);
        function LocalStorageGraph(desc, _nodes, _edges, storage) {
            var _this = this;
            if (_nodes === void 0) {
                _nodes = [];
            }
            if (_edges === void 0) {
                _edges = [];
            }
            if (storage === void 0) {
                storage = sessionStorage;
            }
            _super.call(this, desc, _nodes, _edges);
            this.storage = storage;
            this.updateHandler = function (event) {
                var s = event.target;
                if (s instanceof GraphNode) {
                    _this.updateNode(s);
                }
                if (s instanceof GraphEdge) {
                    _this.updateEdge(s);
                }
            };
        }
        LocalStorageGraph.load = function (desc, factory, storage, reset) {
            if (storage === void 0) {
                storage = sessionStorage;
            }
            if (reset === void 0) {
                reset = false;
            }
            var r = new LocalStorageGraph(desc, [], [], storage);
            if (!reset) {
                r.load(factory);
            }
            return r;
        };
        LocalStorageGraph.clone = function (graph, factory, storage) {
            if (storage === void 0) {
                storage = sessionStorage;
            }
            var r = new LocalStorageGraph(graph.desc, [], [], storage);
            r.restoreDump(graph.persist(), factory);
            return r;
        };
        Object.defineProperty(LocalStorageGraph.prototype, 'uid', {
            get: function () {
                return 'graph' + this.desc.id;
            },
            enumerable: true,
            configurable: true
        });
        LocalStorageGraph.prototype.load = function (factory) {
            var _this = this;
            var uid = this.uid;
            if (!this.storage.hasOwnProperty(uid + '.nodes')) {
                return;
            }
            var node_ids = JSON.parse(this.storage.getItem(uid + '.nodes'));
            var lookup = {}, lookupFun = function (id) {
                    return lookup[id];
                };
            node_ids.forEach(function (id) {
                var n = JSON.parse(_this.storage.getItem(uid + '.node.' + id));
                var nn = factory.makeNode(n);
                lookup[nn.id] = nn;
                nn.on('setAttr', _this.updateHandler);
                _super.prototype.addNode.call(_this, nn);
            });
            var edges_ids = JSON.parse(this.storage.getItem(uid + '.edges'));
            edges_ids.forEach(function (id) {
                var n = JSON.parse(_this.storage.getItem(uid + '.edge.' + id));
                var nn = factory.makeEdge(n, lookupFun);
                nn.on('setAttr', _this.updateHandler);
                _super.prototype.addEdge.call(_this, nn);
            });
            this.fire('loaded');
        };
        LocalStorageGraph.delete = function (desc, storage) {
            if (storage === void 0) {
                storage = sessionStorage;
            }
            var uid = 'graph' + desc.id;
            JSON.parse(storage.getItem(uid + '.nodes')).forEach(function (id) {
                storage.removeItem(uid + '.node.' + id);
            });
            storage.removeItem(uid + '.nodes');
            JSON.parse(storage.getItem(uid + '.edges')).forEach(function (id) {
                storage.removeItem(uid + '.edge.' + id);
            });
            storage.removeItem(uid + '.edges');
            return true;
        };
        LocalStorageGraph.prototype.restoreDump = function (persisted, factory) {
            var _this = this;
            var lookup = {}, lookupFun = function (id) {
                    return lookup[id];
                };
            persisted.nodes.forEach(function (p) {
                var n = factory.makeNode(p);
                lookup[n.id] = n;
                _this.addNode(n);
            });
            persisted.edges.forEach(function (p) {
                var n = factory.makeEdge(p, lookupFun);
                _this.addEdge(n);
            });
            return this;
        };
        LocalStorageGraph.prototype.addNode = function (n) {
            _super.prototype.addNode.call(this, n);
            var uid = this.uid;
            this.storage.setItem(uid + '.node.' + n.id, JSON.stringify(n.persist()));
            this.storage.setItem(uid + '.nodes', JSON.stringify(this.nodes.map(function (d) {
                return d.id;
            })));
            n.on('setAttr', this.updateHandler);
            return this;
        };
        LocalStorageGraph.prototype.updateNode = function (n) {
            _super.prototype.updateNode.call(this, n);
            var uid = this.uid;
            this.storage.setItem(uid + '.node.' + n.id, JSON.stringify(n.persist()));
            return this;
        };
        LocalStorageGraph.prototype.removeNode = function (n) {
            if (!_super.prototype.removeNode.call(this, n)) {
                return null;
            }
            var uid = this.uid;
            this.storage.setItem(uid + '.nodes', JSON.stringify(this.nodes.map(function (d) {
                return d.id;
            })));
            this.storage.removeItem(uid + '.node.' + n.id);
            n.off('setAttr', this.updateHandler);
            return this;
        };
        LocalStorageGraph.prototype.addEdge = function (e_or_s, type, t) {
            if (e_or_s instanceof GraphEdge) {
                _super.prototype.addEdge.call(this, e_or_s);
                var e = e_or_s;
                var uid = this.uid;
                this.storage.setItem(uid + '.edges', JSON.stringify(this.edges.map(function (d) {
                    return d.id;
                })));
                this.storage.setItem(uid + '.edge.' + e.id, JSON.stringify(e.persist()));
                e.on('setAttr', this.updateHandler);
                return this;
            }
            return _super.prototype.addEdge.call(this, e_or_s, type, t);
        };
        LocalStorageGraph.prototype.removeEdge = function (e) {
            if (!_super.prototype.removeEdge.call(this, e)) {
                return null;
            }
            var uid = this.uid;
            this.storage.setItem(uid + '.edges', JSON.stringify(this.edges.map(function (d) {
                return d.id;
            })));
            this.storage.removeItem(uid + '.edge.' + e.id);
            e.off('setAttr', this.updateHandler);
            return this;
        };
        LocalStorageGraph.prototype.updateEdge = function (e) {
            _super.prototype.updateEdge.call(this, e);
            var uid = this.uid;
            this.storage.setItem(uid + '.edge.' + e.id, JSON.stringify(e.persist()));
            return this;
        };
        LocalStorageGraph.prototype.clear = function () {
            var _this = this;
            var nnodes = this.nnodes, nedges = this.nedges;
            if (nnodes === 0 && nedges === 0) {
                return this;
            }
            this.nodes.forEach(function (n) {
                return n.off('setAttr', _this.updateHandler);
            });
            this.edges.forEach(function (n) {
                return n.off('setAttr', _this.updateHandler);
            });
            _super.prototype.clear.call(this);
            var uid = this.uid;
            JSON.parse(this.storage.getItem(uid + '.nodes')).forEach(function (id) {
                _this.storage.removeItem(uid + '.node.' + id);
            });
            this.storage.removeItem(uid + '.nodes');
            JSON.parse(this.storage.getItem(uid + '.edges')).forEach(function (id) {
                _this.storage.removeItem(uid + '.edge.' + id);
            });
            this.storage.removeItem(uid + '.edges');
        };
        LocalStorageGraph.prototype.persist = function () {
            var r = { root: this.desc.id };
            r.nodes = this.nodes.map(function (s) {
                return s.persist();
            });
            r.edges = this.edges.map(function (l) {
                return l.persist();
            });
            return r;
        };
        return LocalStorageGraph;
    }(GraphBase);
    exports.LocalStorageGraph = LocalStorageGraph;
}(require, exports, require('../caleydo_core/main'), require('../caleydo_core/ajax'), require('../caleydo_core/idtype'), require('../caleydo_core/datatype'), require('../caleydo_core/range'), require('../caleydo_core/event')));
},{"../caleydo_core/ajax":3,"../caleydo_core/datatype":6,"../caleydo_core/event":7,"../caleydo_core/idtype":9,"../caleydo_core/main":13,"../caleydo_core/range":20}],37:[function(require,module,exports){
(function (require, exports, C, geom, _2D, idtypes, ranges, plugins, d3) {
    var VisWrapper = function () {
        function VisWrapper(v, dirtyEvents) {
            var _this = this;
            this.v = v;
            this.dirtyEvents = dirtyEvents;
            this.callbacks = [];
            this.lookup = d3.map();
            this.l = function () {
                _this.callbacks.forEach(function (c) {
                    return c(_this);
                });
            };
            this.dirtyEvents.forEach(function (event) {
                return v.on(event, _this.l);
            });
            this.v.data.idtypes.forEach(function (idtype, i) {
                _this.lookup.set(idtype.id, i);
            });
        }
        Object.defineProperty(VisWrapper.prototype, 'vis', {
            get: function () {
                return this.v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisWrapper.prototype, 'id', {
            get: function () {
                return this.v.id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisWrapper.prototype, 'location', {
            get: function () {
                return this.v.location;
            },
            enumerable: true,
            configurable: true
        });
        VisWrapper.prototype.dimOf = function (idtype) {
            if (!this.lookup.has(idtype.id)) {
                return -1;
            }
            return this.lookup.get(idtype.id);
        };
        Object.defineProperty(VisWrapper.prototype, 'data', {
            get: function () {
                return this.v.data;
            },
            enumerable: true,
            configurable: true
        });
        VisWrapper.prototype.ids = function () {
            return this.v.ids();
        };
        Object.defineProperty(VisWrapper.prototype, 'idtypes', {
            get: function () {
                return this.data.idtypes;
            },
            enumerable: true,
            configurable: true
        });
        VisWrapper.prototype.locate = function () {
            var range = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                range[_i - 0] = arguments[_i];
            }
            return this.v.locate.apply(this.vis, range);
        };
        VisWrapper.prototype.locateById = function () {
            var range = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                range[_i - 0] = arguments[_i];
            }
            return this.v.locateById.apply(this.vis, range);
        };
        VisWrapper.prototype.destroy = function () {
            var _this = this;
            this.dirtyEvents.forEach(function (event) {
                return _this.v.off(event, _this.l);
            });
        };
        return VisWrapper;
    }();
    function toId(a, b) {
        a = typeof a === 'number' ? a : a.id;
        b = typeof b === 'number' ? b : b.id;
        return Math.min(a, b) + '-' + Math.max(a, b);
    }
    var lineGlobal = d3.svg.line().interpolate('linear-closed').x(C.getter('x')).y(C.getter('y'));
    var Link = function () {
        function Link(a, b, idtype, all, options) {
            this.a = a;
            this.b = b;
            this.idtype = idtype;
            this.all = all;
            this.options = options;
            this.id = toId(a, b);
        }
        Link.prototype.update = function ($g) {
            var _this = this;
            var a = this.a, b = this.b, al = a.location.aabb(), bl = b.location.aabb(), tmp;
            if (bl.x2 < al.x - 10) {
                tmp = b;
                b = a;
                a = tmp;
                tmp = bl;
                bl = al;
                al = tmp;
            }
            if (this.options.animate) {
                $g.transition().duration(this.options.duration).style('opacity', 0);
            }
            if (!this.shouldRender(a, al, b, bl)) {
                this.render([], $g);
                if (this.options.animate) {
                    $g.transition().duration(this.options.duration).style('opacity', 1);
                }
                return;
            }
            var f = this.options.reprs[Math.abs(this.mode($g)) - 1].load().then(function (plugin) {
                return plugin.factory(_this, a, al, b, bl);
            });
            return f.then(function (llinks) {
                if (_this.options.interactive !== false) {
                    llinks.unshift({
                        clazz: 'rel-back',
                        d: lineGlobal.interpolate('linear-closed')([
                            al.corner('ne'),
                            bl.corner('nw'),
                            bl.corner('sw'),
                            al.corner('se')
                        ]),
                        id: 'background'
                    });
                }
                _this.render(llinks, $g);
                if (_this.options.animate) {
                    $g.transition().duration(_this.options.duration).style('opacity', 1);
                }
                return null;
            });
        };
        Object.defineProperty(Link.prototype, 'line', {
            get: function () {
                return lineGlobal;
            },
            enumerable: true,
            configurable: true
        });
        Link.prototype.createBand = function (aa, bb, ida, idb, union, id, clazz) {
            var ul = union.length;
            var l = [
                aa.corner('ne'),
                bb.corner('nw')
            ];
            var r = [];
            function addBlock(ar, br, id, clazz, ashift, bshift) {
                var ll = l.slice();
                var a_dir = _2D.Vector2D.fromPoints(l[0], aa.corner('se'));
                var b_dir = _2D.Vector2D.fromPoints(l[1], bb.corner('sw'));
                ll.push(l[1].add(b_dir.multiply(br)));
                ll.push(l[0].add(a_dir.multiply(ar)));
                if (ashift > 0) {
                    ll[0].addEquals(a_dir.multiplyEquals(ashift));
                }
                if (bshift > 0) {
                    ll[1].addEquals(b_dir.multiplyEquals(bshift));
                }
                r.push({
                    clazz: clazz,
                    d: lineGlobal.interpolate('linear-closed')(ll),
                    id: id,
                    range: ranges.list(union)
                });
            }
            var s = this.idtype.selections().dim(0);
            var selected = !s.isNone ? union.intersect(s).length : 0;
            if (selected > 0) {
                addBlock(selected / ida.length, selected / idb.length, id + '-sel', clazz + ' select-' + idtypes.defaultSelectionType, 0, 0);
            }
            addBlock(ul / ida.length, ul / idb.length, id, clazz, selected / ida.length, selected / idb.length);
            if (this.options.hover) {
                s = this.idtype.selections(idtypes.hoverSelectionType).dim(0);
                var hovered = !s.isNone ? union.intersect(s).length : 0;
                if (hovered > 0) {
                    addBlock(hovered / ida.length, hovered / idb.length, id + '-sel', clazz + ' select-' + idtypes.hoverSelectionType, 0, 0);
                }
            }
            return r;
        };
        Link.prototype.shouldRender = function (a, aa, b, bb) {
            var _this = this;
            if (aa.x2 < bb.x - 10) {
            } else {
                return false;
            }
            var shape = geom.polygon(aa.corner('ne'), bb.corner('nw'), bb.corner('sw'), aa.corner('se'));
            return this.all.every(function (other) {
                if (other === _this.a || other === _this.b) {
                    return true;
                }
                var o = other.location;
                var int = shape.intersects(o);
                return !int.intersects;
            });
        };
        Link.prototype.mode = function ($g) {
            var m = +$g.attr('data-mode');
            if (m) {
                return m;
            }
            m = this.options.mode || 1;
            if (typeof m === 'string') {
                m = 1 + C.indexOf(this.options.reprs, function (c) {
                    return c.id === m;
                });
            }
            return m;
        };
        Link.prototype.setMode = function ($g, value) {
            $g.attr('data-mode', value);
            this.update($g);
        };
        Link.prototype.nextMode = function ($g) {
            var mode = this.mode($g), l = this.options.reprs.length;
            if (l === 1) {
                return;
            }
            if (mode > 0) {
                mode = mode === l.length ? -mode + 1 : mode + 1;
            } else if (mode < 0) {
                mode = mode === -1 ? -mode + 1 : mode + 1;
            }
            this.setMode($g, mode);
        };
        Link.prototype.render = function (links, $g) {
            var _this = this;
            var $links = $g.selectAll('path').data(links, function (d) {
                return d.id;
            });
            var $links_enter = $links.enter().append('path').on('click', function (link) {
                if (link.range && _this.options.canSelect()) {
                    _this.idtype.select(link.range, idtypes.toSelectOperation(d3.event));
                }
                d3.event.preventDefault();
                d3.event.stopPropagation();
            });
            if (this.options.hover) {
                $links_enter.on('mouseenter', function (link) {
                    if (link.range && _this.options.canHover()) {
                        _this.idtype.select(idtypes.hoverSelectionType, link.range);
                    }
                    d3.event.preventDefault();
                    d3.event.stopPropagation();
                }).on('mouseleave', function (link) {
                    if (link.range && _this.options.canHover()) {
                        _this.idtype.clear(idtypes.hoverSelectionType);
                    }
                    d3.event.preventDefault();
                    d3.event.stopPropagation();
                });
            }
            $links.exit().remove();
            $links.attr({
                'class': function (d) {
                    return d.clazz;
                },
                d: function (d) {
                    return d.d;
                }
            });
            if (this.options.interactive !== false) {
                $g.select('path.rel-back').on('contextmenu', function () {
                    _this.nextMode($g);
                    d3.event.preventDefault();
                });
            }
        };
        return Link;
    }();
    var LinkIDTypeContainer = function () {
        function LinkIDTypeContainer(idtype, parent, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            this.idtype = idtype;
            this.parent = parent;
            this.options = options;
            this.listener = function (event, type, selected, added, removed) {
                return _this.selectionUpdate(type, selected, added, removed);
            };
            this.change = function (elem) {
                return _this.changed(elem);
            };
            this.arr = [];
            idtype.on('select', this.listener);
            this.$node = d3.select(parent).append('svg');
            this.$node.style({
                left: '0px',
                top: '0px',
                opacity: 1
            });
            this.$node.append('g');
            C.onDOMNodeRemoved(this.$node.node(), this.destroy, this);
        }
        LinkIDTypeContainer.prototype.selectionUpdate = function (type, selected, added, removed) {
            this.renderAll();
        };
        LinkIDTypeContainer.prototype.hide = function () {
            this.$node.select('g').selectAll('g').transition().duration(this.options.duration).style('opacity', 0);
        };
        LinkIDTypeContainer.prototype.show = function () {
            this.$node.select('g').selectAll('g').transition().duration(this.options.duration).style('opacity', 1);
        };
        LinkIDTypeContainer.prototype.changed = function (elem) {
            if (this.arr.length > 1) {
                this.render(elem);
            }
        };
        LinkIDTypeContainer.prototype.moveSVG = function () {
            var l = this.arr[0].location.aabb();
            this.arr.forEach(function (a) {
                var b = a.location.aabb(), d = 0;
                if (b.x < l.x) {
                    d = l.x - b.x;
                    l.x -= d;
                    l.w += d;
                }
                if (b.x2 > l.x2) {
                    l.x2 = b.x2;
                }
                if (b.y < l.y) {
                    d = l.y - b.y;
                    l.y -= d;
                    l.h += d;
                }
                if (b.y2 > l.y2) {
                    l.y2 = b.y2;
                }
            });
            this.$node.attr({
                width: l.w,
                height: l.h
            });
            this.$node.style({
                left: l.x + 'px',
                top: l.y + 'px'
            });
            this.$node.select('g').attr('transform', 'translate(' + -l.x + ',' + -l.y + ')');
        };
        LinkIDTypeContainer.prototype.prepareCombinations = function () {
            var $root = this.$node.select('g');
            var combinations = [];
            var l = this.arr.length, i, j, a, b, filter = this.options.filter || C.constantTrue;
            for (i = 0; i < l; ++i) {
                a = this.arr[i];
                for (j = 0; j < i; ++j) {
                    b = this.arr[j];
                    if (filter(a.vis, b.vis)) {
                        combinations.push(new Link(a, b, this.idtype, this.arr, this.options));
                    }
                }
            }
            var $combi = $root.selectAll('g').data(combinations, function (l) {
                return l.id;
            });
            $combi.enter().append('g').attr('data-id', function (l) {
                return l.id;
            }).style('opacity', this.options.animate ? 0 : 1);
            if (this.options.animate) {
                $combi.exit().transition().duration(this.options.duration).style('opacity', 0).remove();
            } else {
                $combi.exit().remove();
            }
        };
        LinkIDTypeContainer.prototype.update = function () {
            this.moveSVG();
            this.prepareCombinations();
            return this.renderAll();
        };
        LinkIDTypeContainer.prototype.renderAll = function () {
            var $root = this.$node.select('g');
            var i, j, ai, aj, l = this.arr.length;
            var promises = [];
            for (i = 0; i < l; ++i) {
                ai = this.arr[i];
                for (j = 1; j < l; ++j) {
                    aj = this.arr[j];
                    var id = toId(ai, aj);
                    var $g = $root.select('g[data-id="' + id + '"]');
                    $g.each(function (link) {
                        promises.push(link.update(d3.select(this)));
                    });
                }
            }
            return Promise.all(promises);
        };
        LinkIDTypeContainer.prototype.render = function (elem) {
            this.moveSVG();
            this.prepareCombinations();
            var $root = this.$node.select('g');
            var promises = [];
            this.arr.forEach(function (o) {
                if (o !== elem) {
                    var id = toId(o, elem);
                    $root.select('g[data-id="' + id + '"]').each(function (link) {
                        promises.push(link.update(d3.select(this)));
                    });
                }
            });
            return Promise.all(promises);
        };
        LinkIDTypeContainer.prototype.destroy = function () {
            this.idtype.off('select', this.listener);
        };
        LinkIDTypeContainer.prototype.push = function (elem, triggerUpdate) {
            if (triggerUpdate === void 0) {
                triggerUpdate = true;
            }
            var idtypes = elem.idtypes;
            if (idtypes.indexOf(this.idtype) >= 0) {
                this.arr.push(elem);
                elem.callbacks.push(this.change);
                if (this.arr.length > 1 && triggerUpdate) {
                    this.render(elem);
                }
            }
        };
        LinkIDTypeContainer.prototype.remove = function (elem, triggerUpdate) {
            if (triggerUpdate === void 0) {
                triggerUpdate = true;
            }
            var index = this.arr.indexOf(elem);
            if (index >= 0) {
                this.arr.splice(index, 1);
                elem.callbacks.splice(elem.callbacks.indexOf(this.change), 1);
                this.prepareCombinations();
            }
            if (this.arr.length === 0) {
                this.$node.remove();
            }
            return this.arr.length > 0;
        };
        return LinkIDTypeContainer;
    }();
    var LinkContainer = function () {
        function LinkContainer(parent, dirtyEvents, options) {
            if (options === void 0) {
                options = {};
            }
            this.parent = parent;
            this.dirtyEvents = dirtyEvents;
            this.arr = [];
            this.node = document.createElement('div');
            this.links = [];
            this.options = {
                reprs: plugins.list('link-representation').sort(function (a, b) {
                    return b.granularity - a.granularity;
                }),
                animate: true,
                duration: 100,
                filter: C.constantTrue,
                idTypeFilter: C.constantTrue,
                hover: false,
                canSelect: C.constantTrue,
                canHover: C.constantFalse
            };
            parent.appendChild(this.node);
            this.node.classList.add('link-container');
            C.onDOMNodeRemoved(this.node, this.destroy, this);
            C.mixin(this.options, options);
        }
        LinkContainer.prototype.hide = function () {
            this.links.forEach(function (l) {
                return l.hide();
            });
        };
        LinkContainer.prototype.show = function () {
            this.links.forEach(function (l) {
                return l.show();
            });
        };
        LinkContainer.prototype.update = function () {
            this.links.forEach(function (l) {
                return l.update();
            });
        };
        LinkContainer.prototype.push = function (arg) {
            var _this = this;
            var elems = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                elems[_i - 1] = arguments[_i];
            }
            var triggerUpdate = arg !== false;
            if (typeof arg !== 'boolean') {
                elems.unshift(arg);
            }
            var idTypeFilter = this.options.idTypeFilter;
            elems.forEach(function (elem) {
                var w = new VisWrapper(elem, _this.dirtyEvents);
                _this.arr.push(w);
                var idtypes = w.idtypes.filter(function (idtype, i) {
                    return idTypeFilter(idtype, i, elem);
                });
                _this.links.forEach(function (l) {
                    l.push(w, triggerUpdate);
                    var index = idtypes.indexOf(l.idtype);
                    if (index >= 0) {
                        idtypes.splice(index, 1);
                    }
                });
                idtypes.forEach(function (idtype) {
                    var n = new LinkIDTypeContainer(idtype, _this.node, _this.options);
                    n.push(w, triggerUpdate);
                    _this.links.push(n);
                });
            });
        };
        LinkContainer.prototype.remove = function (arg, elem) {
            var triggerUpdate = arg !== false;
            if (typeof arg !== 'boolean') {
                elem = arg;
            }
            var index = C.indexOf(this.arr, function (w) {
                return w.vis === elem;
            });
            if (index < 0) {
                return false;
            }
            var w = this.arr[index];
            w.destroy();
            this.links = this.links.filter(function (l) {
                return l.remove(w, triggerUpdate);
            });
            this.arr.splice(index, 1);
            return true;
        };
        LinkContainer.prototype.clear = function () {
            this.arr.forEach(function (a) {
                return a.destroy();
            });
            this.links = [];
            this.arr = [];
        };
        LinkContainer.prototype.destroy = function () {
            this.node.parentElement.removeChild(this.node);
            this.arr.forEach(VisWrapper.prototype.destroy.call);
        };
        return LinkContainer;
    }();
    exports.LinkContainer = LinkContainer;
}(require, exports, require('../caleydo_core/main'), require('../caleydo_core/geom'), require('../caleydo_core/2D'), require('../caleydo_core/idtype'), require('../caleydo_core/range'), require('../caleydo_core/plugin'), require('d3')));
},{"../caleydo_core/2D":2,"../caleydo_core/geom":8,"../caleydo_core/idtype":9,"../caleydo_core/main":13,"../caleydo_core/plugin":19,"../caleydo_core/range":20,"d3":undefined}],38:[function(require,module,exports){
(function (require, exports, geom, ranges) {
    function createBlockRep(context, a, aa, b, bb) {
        var adim = a.dimOf(context.idtype), bdim = b.dimOf(context.idtype);
        return Promise.all([
            a.ids(),
            b.ids()
        ]).then(function (ids) {
            var ida = ids[0].dim(adim);
            var idb = ids[1].dim(bdim);
            return context.createBand(aa, bb, ida, idb, ida.intersect(idb), 'block', 'rel-block');
        });
    }
    exports.createBlockRep = createBlockRep;
    function toArray(a) {
        if (!Array.isArray(a)) {
            return [a];
        }
        return a;
    }
    function createGroupRep(context, a, aa, b, bb) {
        var adim = a.dimOf(context.idtype), bdim = b.dimOf(context.idtype);
        function toGroups(ids) {
            if (ids instanceof ranges.CompositeRange1D) {
                return ids.groups;
            } else {
                return [ranges.asUngrouped(ids)];
            }
        }
        return Promise.all([
            a.ids(),
            b.ids()
        ]).then(function (ids) {
            var groupa = toGroups(ids[0].dim(adim));
            var groupb = toGroups(ids[1].dim(bdim));
            var ars = groupa.map(function (group) {
                var r = ranges.all();
                r.dims[adim] = group;
                return r;
            });
            var brs = groupb.map(function (group) {
                var r = ranges.all();
                r.dims[bdim] = group;
                return r;
            });
            return Promise.all([
                Promise.resolve({
                    groupa: groupa,
                    groupb: groupb
                }),
                a.locateById.apply(a, ars),
                b.locateById.apply(b, brs)
            ]);
        }).then(function (data) {
            function more(locs) {
                return function (g, i) {
                    return {
                        g: g,
                        len: g.length,
                        loc: locs[i] ? locs[i].aabb() : null
                    };
                };
            }
            var groupa = data[0].groupa.map(more(toArray(data[1])));
            var groupb = data[0].groupb.map(more(toArray(data[2])));
            var r = [];
            groupa.forEach(function (ga) {
                groupb.forEach(function (gb) {
                    var int = ga.g.intersect(gb.g);
                    var l = int.length;
                    if (l === 0) {
                        return;
                    }
                    var id = ga.g.name + '-' + gb.g.name;
                    if (ga.loc && gb.loc) {
                        r.push.apply(r, context.createBand(ga.loc, gb.loc, ga.g, gb.g, int, id, 'rel-group'));
                        ga.loc.y += ga.loc.h * (l / ga.len);
                        gb.loc.y += gb.loc.h * (l / gb.len);
                    }
                });
            });
            return r;
        });
    }
    exports.createGroupRep = createGroupRep;
    function selectCorners(a, b) {
        var ac = a.aabb(), bc = b.aabb();
        if (ac.cx > bc.cx) {
            return [
                'w',
                'e'
            ];
        } else {
            return [
                'e',
                'w'
            ];
        }
    }
    function createItemRep(context, a, aa, b, bb) {
        var adim = a.dimOf(context.idtype), bdim = b.dimOf(context.idtype), amulti = a.data.dim.length > 1, bmulti = b.data.dim.length > 1;
        function toPoint(loc, other, multi) {
            if (!multi) {
                return loc.center;
            }
            var c = selectCorners(loc, other);
            return loc.corner(c[0]);
        }
        return Promise.all([
            a.ids(),
            b.ids()
        ]).then(function (ids) {
            var ida = ids[0].dim(adim);
            var idb = ids[1].dim(bdim);
            var union = ida.intersect(idb);
            var ars = [], brs = [];
            union.forEach(function (index) {
                var r = ranges.all();
                r.dim(adim).setList([index]);
                ars.push(r);
                r = ranges.all();
                r.dim(bdim).setList([index]);
                brs.push(r);
            });
            return Promise.all([
                Promise.resolve(union),
                a.locateById.apply(a, ars),
                b.locateById.apply(b, brs)
            ]);
        }).then(function (locations) {
            var union = locations[0], loca = toArray(locations[1]), locb = toArray(locations[2]);
            var r = [];
            context.line.interpolate('linear');
            var selections = context.idtype.selections().dim(0);
            union.forEach(function (id, i) {
                var la = geom.wrap(loca[i]);
                var lb = geom.wrap(locb[i]);
                if (la && lb) {
                    r.push({
                        clazz: 'rel-item' + (selections.contains(id) ? ' select-selected' : ''),
                        id: id,
                        d: context.line([
                            toPoint(la, lb, amulti),
                            toPoint(lb, la, bmulti)
                        ])
                    });
                }
            });
            return r;
        });
    }
    exports.createItemRep = createItemRep;
}(require, exports, require('../caleydo_core/geom'), require('../caleydo_core/range')));
},{"../caleydo_core/geom":8,"../caleydo_core/range":20}],39:[function(require,module,exports){
(function (require, exports, d3, ranges, C) {
    'use strict';
    var _id = 0, line = d3.svg.line();
    function nextID() {
        return _id++;
    }
    function selectCorners(a, b) {
        var ac = a.aabb(), bc = b.aabb();
        if (ac.cx > bc.cx) {
            return [
                'w',
                'e'
            ];
        } else {
            return [
                'e',
                'w'
            ];
        }
    }
    var LinksRenderer = function () {
        function LinksRenderer(parent) {
            this.visses = [];
            this.observing = d3.map();
            this.$parent = d3.select(parent);
            this.$div = this.$parent.append('div').attr({ 'class': 'layer layer1 links' });
            this.$svg = this.$div.append('svg').attr({
                width: '100%',
                height: '100%'
            });
        }
        LinksRenderer.prototype.register = function (idtype) {
            var that = this;
            function l() {
                that.update(idtype);
            }
            idtype.on('select', l);
            return {
                idtype: idtype,
                l: l,
                visses: [],
                push: function (vis, dimension) {
                    this.visses.push({
                        vis: vis,
                        dim: dimension,
                        id: nextID()
                    });
                },
                remove: function (vis) {
                    var i, v = this.visses;
                    for (i = v.length - 1; i >= 0; --i) {
                        if (v[i].vis === vis) {
                            v.splice(i, 1);
                        }
                    }
                }
            };
        };
        LinksRenderer.prototype.unregister = function (entry) {
            var idtype = entry.idtype;
            idtype.off('select', entry.l);
        };
        LinksRenderer.prototype.push = function (vis) {
            var _this = this;
            this.visses.push(vis);
            var observing = this.observing;
            vis.data.idtypes.forEach(function (idtype, i) {
                if (observing.has(idtype.name)) {
                    observing.get(idtype.name).push(vis, i);
                } else {
                    var r = _this.register(idtype);
                    r.push(vis, i);
                    observing.set(idtype.name, r);
                    _this.updateIDTypes();
                }
            });
            this.update();
        };
        LinksRenderer.prototype.remove = function (vis) {
            var _this = this;
            var i = this.visses.indexOf(vis);
            if (i >= 0) {
                this.visses.splice(i, 1);
            }
            var observing = this.observing;
            vis.data.idtypes.forEach(function (idtype) {
                var r = observing.get(idtype.name);
                r.remove(vis);
                if (r.visses.length === 0) {
                    _this.unregister(r);
                    observing.remove(idtype.name);
                    _this.updateIDTypes();
                }
            });
            this.update();
        };
        LinksRenderer.prototype.update = function (idtype) {
            function prepareCombinations(entry, $group) {
                var combinations = [];
                var l = entry.visses.length, i, j, a, b;
                for (i = 0; i < l; ++i) {
                    a = entry.visses[i].id;
                    for (j = 0; j < i; ++j) {
                        b = entry.visses[j].id;
                        combinations.push(Math.min(a, b) + '-' + Math.max(a, b));
                    }
                }
                var $combi = $group.selectAll('g').data(combinations);
                $combi.enter().append('g');
                $combi.exit().remove();
                $combi.attr('data-id', C.identity);
            }
            function createLinks(existing, id, locs, $group) {
                if (existing.length === 0) {
                    return;
                }
                existing.forEach(function (ex) {
                    var swap = id > ex.id;
                    var group = Math.min(id, ex.id) + '-' + Math.max(id, ex.id);
                    var $g = $group.select('g[data-id="' + group + '"]');
                    var links = [];
                    locs.forEach(function (loc, i) {
                        if (loc && ex.locs[i]) {
                            var cs = selectCorners(loc, ex.locs[i]);
                            var r = [
                                loc.corner(cs[0]),
                                ex.locs[i].corner(cs[1])
                            ];
                            links.push(swap ? r.reverse() : r);
                        }
                    });
                    var $links = $g.selectAll('path').data(links);
                    $links.enter().append('path').attr('class', 'select-selected');
                    $links.exit().remove();
                    $links.attr('d', function (d) {
                        return line(d);
                    });
                });
            }
            function addLinks(entry) {
                var $group = this.$svg.select('g[data-idtype="' + entry.idtype.name + '"]');
                if (entry.visses.length <= 1) {
                    $group.selectAll('*').remove();
                    return;
                }
                var selected = entry.idtype.selections();
                if (selected.isNone) {
                    $group.selectAll('*').remove();
                    return;
                }
                console.log(entry.idtype.name, selected.toString());
                prepareCombinations(entry, $group);
                var loaded = [];
                entry.visses.forEach(function (entry) {
                    var id = entry.id;
                    entry.vis.data.ids().then(function (ids) {
                        var dim = ids.dim(entry.dim);
                        var locations = [], tolocate = [];
                        selected.dim(0).iter().forEach(function (id) {
                            var mapped = dim.indexOf(id);
                            if (mapped < 0) {
                                locations.push(-1);
                            } else {
                                locations.push(tolocate.length);
                                tolocate.push(ranges.list(mapped));
                            }
                        });
                        if (tolocate.length === 0) {
                            return;
                        }
                        entry.vis.locate.apply(entry.vis, tolocate).then(function (located) {
                            var fulllocations;
                            if (tolocate.length === 1) {
                                fulllocations = locations.map(function (index) {
                                    return index < 0 ? undefined : located;
                                });
                            } else {
                                fulllocations = locations.map(function (index) {
                                    return located[index];
                                });
                            }
                            createLinks(loaded, id, fulllocations, $group);
                            loaded.push({
                                id: id,
                                locs: fulllocations
                            });
                        });
                    });
                });
            }
            if (idtype) {
                addLinks.call(this, this.observing.get(idtype.name));
            } else {
                this.observing.values().forEach(addLinks, this);
            }
        };
        LinksRenderer.prototype.updateIDTypes = function () {
            var $g = this.$svg.selectAll('g').data(this.observing.values());
            $g.enter().append('g');
            $g.exit().remove();
            $g.attr('data-idtype', function (d) {
                return d.idtype.name;
            });
        };
        return LinksRenderer;
    }();
    exports.LinksRenderer = LinksRenderer;
    function create(parent) {
        return new LinksRenderer(parent);
    }
    exports.create = create;
}(require, exports, require('d3'), require('../caleydo_core/range'), require('../caleydo_core/main')));
},{"../caleydo_core/main":13,"../caleydo_core/range":20,"d3":undefined}],40:[function(require,module,exports){
(function (require, exports, C, plugins, datas, graph, idtypes, ranges, datatypes, session) {
    exports.cat = {
        data: 'data',
        selection: 'selection',
        visual: 'visual',
        layout: 'layout',
        logic: 'logic',
        custom: 'custom',
        annotation: 'annotation'
    };
    exports.op = {
        create: 'create',
        update: 'update',
        remove: 'remove'
    };
    function ref(v, name, category, hash) {
        if (category === void 0) {
            category = exports.cat.data;
        }
        if (hash === void 0) {
            hash = name + '_' + category;
        }
        return {
            v: Promise.resolve(v),
            value: v,
            name: name,
            category: category,
            hash: hash
        };
    }
    exports.ref = ref;
    function persistData(v) {
        if (v instanceof Element) {
            var e = v, id = e.getAttribute('id');
            return {
                type: 'element',
                id: id
            };
        }
        if (datatypes.isDataType(v)) {
            var e = v;
            return {
                type: 'dataset',
                id: e.desc.id,
                persist: e.persist()
            };
        }
        if (typeof v === 'string' || typeof v === 'number') {
            return {
                type: 'primitive',
                v: v
            };
        }
        return null;
    }
    function restoreData(v) {
        if (!v) {
            return null;
        }
        switch (v.type) {
        case 'element':
            if (v.id) {
                return Promise.resolve(document.getElementById(v.id));
            }
            return null;
        case 'dataset':
            return datas.get(v.persist);
        case 'primitive':
            return Promise.resolve(v.v);
        }
        return null;
    }
    var ObjectNode = function (_super) {
        __extends(ObjectNode, _super);
        function ObjectNode(_v, name, category, hash, description) {
            if (category === void 0) {
                category = exports.cat.data;
            }
            if (hash === void 0) {
                hash = name + '_' + category;
            }
            if (description === void 0) {
                description = '';
            }
            _super.call(this, 'object');
            this._v = _v;
            this._persisted = null;
            if (_v != null) {
                this._promise = Promise.resolve(_v);
            }
            _super.prototype.setAttr.call(this, 'name', name);
            _super.prototype.setAttr.call(this, 'category', category);
            _super.prototype.setAttr.call(this, 'hash', hash);
            _super.prototype.setAttr.call(this, 'description', description);
        }
        Object.defineProperty(ObjectNode.prototype, 'value', {
            get: function () {
                this.checkPersisted();
                return this._v;
            },
            set: function (v) {
                this._v = v;
                if (this._promise == null) {
                    this._promise = Promise.resolve(v);
                }
                this._persisted = null;
            },
            enumerable: true,
            configurable: true
        });
        ObjectNode.prototype.checkPersisted = function () {
            var _this = this;
            if (this._persisted != null) {
                this._promise = restoreData(this._persisted);
                if (this._promise) {
                    this._promise.then(function (v) {
                        _this._v = v;
                    });
                }
                this._persisted = null;
            }
        };
        Object.defineProperty(ObjectNode.prototype, 'v', {
            get: function () {
                this.checkPersisted();
                return this._promise;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectNode.prototype, 'name', {
            get: function () {
                return _super.prototype.getAttr.call(this, 'name', '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectNode.prototype, 'category', {
            get: function () {
                return _super.prototype.getAttr.call(this, 'category', '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectNode.prototype, 'hash', {
            get: function () {
                return _super.prototype.getAttr.call(this, 'hash', '');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectNode.prototype, 'description', {
            get: function () {
                return _super.prototype.getAttr.call(this, 'description', '');
            },
            enumerable: true,
            configurable: true
        });
        ObjectNode.prototype.persist = function () {
            var r = _super.prototype.persist.call(this);
            if (!r.attrs) {
                r.attrs = {};
            }
            r.attrs.v = this._persisted ? this._persisted : persistData(this.value);
            return r;
        };
        ObjectNode.prototype.restore = function (p) {
            this._persisted = p.attrs.v;
            delete p.attrs.v;
            _super.prototype.restore.call(this, p);
            return this;
        };
        ObjectNode.restore = function (p) {
            var r = new ObjectNode(null, p.attrs.name, p.attrs.category, p.attrs.hash || p.attrs.name + '_' + p.attrs.category);
            return r.restore(p);
        };
        Object.defineProperty(ObjectNode.prototype, 'createdBy', {
            get: function () {
                var r = this.incoming.filter(graph.isType('creates'))[0];
                return r ? r.source : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectNode.prototype, 'removedBy', {
            get: function () {
                var r = this.incoming.filter(graph.isType('removes'))[0];
                return r ? r.source : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectNode.prototype, 'requiredBy', {
            get: function () {
                return this.incoming.filter(graph.isType('requires')).map(function (e) {
                    return e.source;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectNode.prototype, 'partOf', {
            get: function () {
                return this.incoming.filter(graph.isType('consistsOf')).map(function (e) {
                    return e.source;
                });
            },
            enumerable: true,
            configurable: true
        });
        ObjectNode.prototype.toString = function () {
            return this.name;
        };
        return ObjectNode;
    }(graph.GraphNode);
    exports.ObjectNode = ObjectNode;
    function getCurrentUser() {
        return session.retrieve('username', 'Anonymous');
    }
    var ActionMetaData = function () {
        function ActionMetaData(category, operation, name, timestamp, user) {
            if (timestamp === void 0) {
                timestamp = Date.now();
            }
            if (user === void 0) {
                user = getCurrentUser();
            }
            this.category = category;
            this.operation = operation;
            this.name = name;
            this.timestamp = timestamp;
            this.user = user;
        }
        ActionMetaData.restore = function (p) {
            return new ActionMetaData(p.category, p.operation, p.name, p.timestamp, p.user);
        };
        ActionMetaData.prototype.eq = function (that) {
            return this.category === that.category && this.operation === that.operation && this.name === that.name;
        };
        ActionMetaData.prototype.inv = function (that) {
            if (this.category !== that.category) {
                return false;
            }
            if (this.operation === exports.op.update) {
                return that.operation === exports.op.update;
            }
            return this.operation === exports.op.create ? that.operation === exports.op.remove : that.operation === exports.op.create;
        };
        ActionMetaData.prototype.toString = function () {
            return this.category + ':' + this.operation + ' ' + this.name;
        };
        return ActionMetaData;
    }();
    exports.ActionMetaData = ActionMetaData;
    function meta(name, category, operation, timestamp, user) {
        if (category === void 0) {
            category = exports.cat.data;
        }
        if (operation === void 0) {
            operation = exports.op.update;
        }
        if (timestamp === void 0) {
            timestamp = Date.now();
        }
        if (user === void 0) {
            user = getCurrentUser();
        }
        return new ActionMetaData(category, operation, name, timestamp, user);
    }
    exports.meta = meta;
    function action(meta, id, f, inputs, parameter) {
        if (inputs === void 0) {
            inputs = [];
        }
        if (parameter === void 0) {
            parameter = {};
        }
        return {
            meta: meta,
            id: id,
            f: f,
            inputs: inputs,
            parameter: parameter
        };
    }
    exports.action = action;
    function byIndex(a, b) {
        var ai = +a.getAttr('index', 0);
        var bi = +b.getAttr('index', 0);
        return ai - bi;
    }
    var ActionNode = function (_super) {
        __extends(ActionNode, _super);
        function ActionNode(meta, f_id, f, parameter) {
            if (parameter === void 0) {
                parameter = {};
            }
            _super.call(this, 'action');
            this.f = f;
            _super.prototype.setAttr.call(this, 'meta', meta);
            _super.prototype.setAttr.call(this, 'f_id', f_id);
            _super.prototype.setAttr.call(this, 'parameter', parameter);
        }
        ActionNode.prototype.clone = function () {
            return new ActionNode(this.meta, this.f_id, this.f, this.parameter);
        };
        Object.defineProperty(ActionNode.prototype, 'name', {
            get: function () {
                return this.meta.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionNode.prototype, 'meta', {
            get: function () {
                return _super.prototype.getAttr.call(this, 'meta');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionNode.prototype, 'f_id', {
            get: function () {
                return _super.prototype.getAttr.call(this, 'f_id');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionNode.prototype, 'parameter', {
            get: function () {
                return _super.prototype.getAttr.call(this, 'parameter');
            },
            set: function (value) {
                _super.prototype.setAttr.call(this, 'parameter', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionNode.prototype, 'onceExecuted', {
            get: function () {
                return _super.prototype.getAttr.call(this, 'onceExecuted', false);
            },
            set: function (value) {
                if (this.onceExecuted !== value) {
                    _super.prototype.setAttr.call(this, 'onceExecuted', value);
                }
            },
            enumerable: true,
            configurable: true
        });
        ActionNode.restore = function (r, factory) {
            var a = new ActionNode(ActionMetaData.restore(r.attrs.meta), r.attrs.f_id, factory(r.attrs.f_id), r.attrs.parameter);
            return a.restore(r);
        };
        ActionNode.prototype.toString = function () {
            return this.meta.name;
        };
        Object.defineProperty(ActionNode.prototype, 'inversedBy', {
            get: function () {
                var r = this.incoming.filter(graph.isType('inverses'))[0];
                return r ? r.source : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionNode.prototype, 'inverses', {
            get: function () {
                var r = this.outgoing.filter(graph.isType('inverses'))[0];
                return r ? r.target : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionNode.prototype, 'isInverse', {
            get: function () {
                return this.outgoing.filter(graph.isType('inverses'))[0] != null;
            },
            enumerable: true,
            configurable: true
        });
        ActionNode.prototype.getOrCreateInverse = function (graph) {
            var i = this.inversedBy;
            if (i) {
                return i;
            }
            if (this.inverter) {
                return graph.createInverse(this, this.inverter);
            }
            this.inverter = null;
            return null;
        };
        ActionNode.prototype.updateInverse = function (graph, inverter) {
            var i = this.inversedBy;
            if (i) {
                var c = inverter.call(this, this.requires, this.creates, this.removes);
                i.parameter = c.parameter;
                this.inverter = null;
            } else if (!this.isInverse) {
                graph.createInverse(this, inverter);
                this.inverter = null;
            } else {
                this.inverter = inverter;
            }
        };
        ActionNode.prototype.execute = function (graph, withinMilliseconds) {
            var r = this.f.call(this, this.requires, this.parameter, graph, withinMilliseconds);
            return Promise.resolve(r);
        };
        ActionNode.prototype.equals = function (that) {
            if (!(this.meta.category === that.meta.category && that.meta.operation === that.meta.operation)) {
                return false;
            }
            if (this.f_id !== that.f_id) {
                return false;
            }
            return true;
        };
        Object.defineProperty(ActionNode.prototype, 'uses', {
            get: function () {
                return this.outgoing.filter(graph.isType(/(creates|removes|requires)/)).map(function (e) {
                    return e.target;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionNode.prototype, 'creates', {
            get: function () {
                return this.outgoing.filter(graph.isType('creates')).map(function (e) {
                    return e.target;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionNode.prototype, 'removes', {
            get: function () {
                return this.outgoing.filter(graph.isType('removes')).sort(byIndex).map(function (e) {
                    return e.target;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionNode.prototype, 'requires', {
            get: function () {
                return this.outgoing.filter(graph.isType('requires')).sort(byIndex).map(function (e) {
                    return e.target;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionNode.prototype, 'resultsIn', {
            get: function () {
                var r = this.outgoing.filter(graph.isType('resultsIn'))[0];
                return r ? r.target : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionNode.prototype, 'previous', {
            get: function () {
                var r = this.incoming.filter(graph.isType('next'))[0];
                return r ? r.source : null;
            },
            enumerable: true,
            configurable: true
        });
        return ActionNode;
    }(graph.GraphNode);
    exports.ActionNode = ActionNode;
    var StateNode = function (_super) {
        __extends(StateNode, _super);
        function StateNode(name, description) {
            if (description === void 0) {
                description = '';
            }
            _super.call(this, 'state');
            _super.prototype.setAttr.call(this, 'name', name);
            _super.prototype.setAttr.call(this, 'description', description);
        }
        Object.defineProperty(StateNode.prototype, 'name', {
            get: function () {
                return _super.prototype.getAttr.call(this, 'name');
            },
            set: function (value) {
                _super.prototype.setAttr.call(this, 'name', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateNode.prototype, 'description', {
            get: function () {
                return _super.prototype.getAttr.call(this, 'description', '');
            },
            set: function (value) {
                _super.prototype.setAttr.call(this, 'description', value);
            },
            enumerable: true,
            configurable: true
        });
        StateNode.restore = function (p) {
            var r = new StateNode(p.attrs.name);
            return r.restore(p);
        };
        Object.defineProperty(StateNode.prototype, 'consistsOf', {
            get: function () {
                return this.outgoing.filter(graph.isType('consistsOf')).map(function (e) {
                    return e.target;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateNode.prototype, 'resultsFrom', {
            get: function () {
                return this.incoming.filter(graph.isType('resultsIn')).map(function (e) {
                    return e.source;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateNode.prototype, 'creator', {
            get: function () {
                var from = this.incoming.filter(graph.isType('resultsIn')).map(function (e) {
                    return e.source;
                }).filter(function (s) {
                    return !s.isInverse;
                });
                if (from.length === 0) {
                    return null;
                }
                return from[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateNode.prototype, 'next', {
            get: function () {
                return this.outgoing.filter(graph.isType('next')).map(function (e) {
                    return e.target;
                }).filter(function (s) {
                    return !s.isInverse;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateNode.prototype, 'previousState', {
            get: function () {
                var a = this.creator;
                if (a) {
                    return a.previous;
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateNode.prototype, 'previousStates', {
            get: function () {
                return this.resultsFrom.map(function (n) {
                    return n.previous;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateNode.prototype, 'nextStates', {
            get: function () {
                return this.next.map(function (n) {
                    return n.resultsIn;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateNode.prototype, 'nextState', {
            get: function () {
                var r = this.next[0];
                return r ? r.resultsIn : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateNode.prototype, 'path', {
            get: function () {
                var p = this.previousState, r = [];
                r.unshift(this);
                if (p) {
                    p.pathImpl(r);
                }
                return r;
            },
            enumerable: true,
            configurable: true
        });
        StateNode.prototype.pathImpl = function (r) {
            var p = this.previousState;
            r.unshift(this);
            if (p && r.indexOf(p) < 0) {
                p.pathImpl(r);
            }
        };
        StateNode.prototype.toString = function () {
            return this.name;
        };
        return StateNode;
    }(graph.GraphNode);
    exports.StateNode = StateNode;
    exports.DEFAULT_DURATION = 1500;
    exports.DEFAULT_TRANSITION = 0;
    var SlideNode = function (_super) {
        __extends(SlideNode, _super);
        function SlideNode() {
            _super.call(this, 'story');
        }
        Object.defineProperty(SlideNode.prototype, 'name', {
            get: function () {
                return _super.prototype.getAttr.call(this, 'name', '');
            },
            set: function (value) {
                _super.prototype.setAttr.call(this, 'name', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlideNode.prototype, 'isTextOnly', {
            get: function () {
                return !this.outgoing.some(graph.isType('jumpTo'));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlideNode.prototype, 'state', {
            get: function () {
                var edge = this.outgoing.filter(graph.isType('jumpTo'))[0];
                return edge ? edge.target : null;
            },
            enumerable: true,
            configurable: true
        });
        SlideNode.restore = function (dump) {
            return new SlideNode().restore(dump);
        };
        Object.defineProperty(SlideNode.prototype, 'next', {
            get: function () {
                var n = this.outgoing.filter(graph.isType('next'))[0];
                return n ? n.target : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlideNode.prototype, 'nexts', {
            get: function () {
                return this.outgoing.filter(graph.isType('next')).map(function (n) {
                    return n.target;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlideNode.prototype, 'previous', {
            get: function () {
                var n = this.incoming.filter(graph.isType('next'))[0];
                return n ? n.source : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlideNode.prototype, 'slideIndex', {
            get: function () {
                var p = this.previous;
                return 1 + (p ? p.slideIndex : 0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlideNode.prototype, 'duration', {
            get: function () {
                return this.getAttr('duration', exports.DEFAULT_DURATION);
            },
            set: function (value) {
                this.setAttr('duration', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlideNode.prototype, 'transition', {
            get: function () {
                return this.getAttr('transition', exports.DEFAULT_TRANSITION);
            },
            set: function (value) {
                this.setAttr('transition', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlideNode.prototype, 'annotations', {
            get: function () {
                return this.getAttr('annotations', []);
            },
            enumerable: true,
            configurable: true
        });
        SlideNode.prototype.setAnnotation = function (index, ann) {
            var old = this.annotations;
            old[index] = ann;
            this.setAttr('annotations', old);
        };
        SlideNode.prototype.updateAnnotation = function (ann) {
            this.setAttr('annotations', this.annotations);
        };
        SlideNode.prototype.removeAnnotation = function (index) {
            var old = this.annotations;
            old.splice(index, 1);
            this.setAttr('annotations', old);
        };
        SlideNode.prototype.removeAnnotationElem = function (elem) {
            var old = this.annotations;
            old.splice(old.indexOf(elem), 1);
            this.setAttr('annotations', old);
        };
        SlideNode.prototype.pushAnnotation = function (ann) {
            var old = this.annotations;
            old.push(ann);
            this.setAttr('annotations', old);
            this.fire('push-annotations', ann, old);
        };
        Object.defineProperty(SlideNode.prototype, 'isStart', {
            get: function () {
                return this.previous == null;
            },
            enumerable: true,
            configurable: true
        });
        SlideNode.makeText = function (title) {
            var s = new SlideNode();
            if (title) {
                s.pushAnnotation({
                    type: 'text',
                    pos: [
                        25,
                        25
                    ],
                    text: '# ${name}'
                });
                s.name = title;
            }
            return s;
        };
        return SlideNode;
    }(graph.GraphNode);
    exports.SlideNode = SlideNode;
    function removeNoops(path) {
        return path.filter(function (a) {
            return a.f_id !== 'noop';
        });
    }
    function compositeCompressor(cs) {
        return function (path) {
            path = removeNoops(path);
            var before;
            do {
                before = path.length;
                cs.forEach(function (c) {
                    return path = c(path);
                });
            } while (before > path.length);
            return path;
        };
    }
    function createCompressor(path) {
        var toload = plugins.list('actionCompressor').filter(function (plugin) {
            return path.some(function (action) {
                return action.f_id.match(plugin.matches) != null;
            });
        });
        return plugins.load(toload).then(function (loaded) {
            return compositeCompressor(loaded.map(function (l) {
                return l.factory;
            }));
        });
    }
    function compress(path) {
        return createCompressor(path).then(function (compressor) {
            var before;
            do {
                before = path.length;
                path = compressor(path);
            } while (before > path.length);
            return path;
        });
    }
    exports.compress = compress;
    function findCommon(a, b) {
        var c = 0;
        while (c < a.length && c < b.length && a[c] === b[c]) {
            c++;
        }
        if (c === 0) {
            return null;
        }
        return {
            i: c - 1,
            j: c - 1
        };
    }
    function asFunction(i) {
        if (!C.isFunction(i)) {
            return C.constant(i);
        }
        return i;
    }
    function noop(inputs, parameter) {
        return { inverse: createNoop() };
    }
    function createNoop() {
        return {
            meta: meta('noop', exports.cat.custom),
            id: 'noop',
            f: noop,
            inputs: [],
            parameter: {}
        };
    }
    function createLazyCmdFunctionFactory() {
        var facts = plugins.list('actionFactory');
        function resolveFun(id) {
            if (id === 'noop') {
                return Promise.resolve(noop);
            }
            var factory = facts.filter(function (f) {
                return id.match(f.creates) != null;
            })[0];
            if (factory == null) {
                return Promise.reject('no factory found for ' + id);
            }
            return factory.load().then(function (f) {
                return f.factory(id);
            });
        }
        var lazyFunction = function (id) {
            var _resolved = null;
            return function (inputs, parameters) {
                var that = this, args = C.argList(arguments);
                if (_resolved == null) {
                    _resolved = resolveFun(id);
                }
                return _resolved.then(function (f) {
                    return f.apply(that, args);
                });
            };
        };
        return function (id) {
            return lazyFunction(id);
        };
    }
    function provenanceGraphFactory() {
        var factory = createLazyCmdFunctionFactory();
        var types = {
            action: ActionNode,
            state: StateNode,
            object: ObjectNode,
            story: SlideNode
        };
        return {
            makeNode: function (n) {
                return types[n.type].restore(n, factory);
            },
            makeEdge: function (n, lookup) {
                return new graph.GraphEdge().restore(n, lookup);
            }
        };
    }
    (function (ProvenanceGraphDim) {
        ProvenanceGraphDim[ProvenanceGraphDim['Action'] = 0] = 'Action';
        ProvenanceGraphDim[ProvenanceGraphDim['Object'] = 1] = 'Object';
        ProvenanceGraphDim[ProvenanceGraphDim['State'] = 2] = 'State';
        ProvenanceGraphDim[ProvenanceGraphDim['Slide'] = 3] = 'Slide';
    }(exports.ProvenanceGraphDim || (exports.ProvenanceGraphDim = {})));
    var ProvenanceGraphDim = exports.ProvenanceGraphDim;
    var LocalStorageProvenanceGraphManager = function () {
        function LocalStorageProvenanceGraphManager(options) {
            if (options === void 0) {
                options = {};
            }
            this.options = {
                storage: localStorage,
                prefix: 'clue',
                application: 'unknown'
            };
            C.mixin(this.options, options);
        }
        LocalStorageProvenanceGraphManager.prototype.list = function () {
            var _this = this;
            var lists = JSON.parse(this.options.storage.getItem(this.options.prefix + '_provenance_graphs') || '[]');
            var l = lists.map(function (id) {
                return JSON.parse(_this.options.storage.getItem(_this.options.prefix + '_provenance_graph.' + id));
            });
            return Promise.resolve(l);
        };
        LocalStorageProvenanceGraphManager.prototype.getGraph = function (desc) {
            return Promise.resolve(graph.LocalStorageGraph.load(desc, provenanceGraphFactory(), this.options.storage));
        };
        LocalStorageProvenanceGraphManager.prototype.get = function (desc) {
            return this.getGraph(desc).then(function (impl) {
                return new ProvenanceGraph(desc, impl);
            });
        };
        LocalStorageProvenanceGraphManager.prototype.clone = function (graph) {
            var desc = this.createDesc();
            return this.getGraph(desc).then(function (new_) {
                new_.restoreDump(graph.persist(), provenanceGraphFactory());
                return new ProvenanceGraph(desc, new_);
            });
        };
        LocalStorageProvenanceGraphManager.prototype.import = function (json) {
            var desc = this.createDesc();
            return this.getGraph(desc).then(function (new_) {
                new_.restoreDump(json, provenanceGraphFactory());
                return new ProvenanceGraph(desc, new_);
            });
        };
        LocalStorageProvenanceGraphManager.prototype.delete = function (desc) {
            var lists = JSON.parse(this.options.storage.getItem(this.options.prefix + '_provenance_graphs') || '[]');
            lists.splice(lists.indexOf(desc.id), 1);
            graph.LocalStorageGraph.delete(desc);
            this.options.storage.setItem(this.options.prefix + '_provenance_graphs', JSON.stringify(lists));
            return Promise.resolve(true);
        };
        LocalStorageProvenanceGraphManager.prototype.createDesc = function () {
            var _this = this;
            var lists = JSON.parse(this.options.storage.getItem(this.options.prefix + '_provenance_graphs') || '[]');
            var id = this.options.prefix + (lists.length > 0 ? String(1 + d3.max(lists.map(function (d) {
                return parseInt(d.slice(_this.options.prefix.length), 10);
            }))) : '0');
            var desc = {
                type: 'provenance_graph',
                name: 'Local Workspace#' + id,
                fqname: this.options.prefix + '.Provenance Graph #' + id,
                id: id,
                local: true,
                size: [
                    0,
                    0
                ],
                attrs: {
                    graphtype: 'provenance_graph',
                    of: this.options.application
                },
                creator: getCurrentUser(),
                ts: Date.now(),
                description: ''
            };
            lists.push(id);
            this.options.storage.setItem(this.options.prefix + '_provenance_graphs', JSON.stringify(lists));
            this.options.storage.setItem(this.options.prefix + '_provenance_graph.' + id, JSON.stringify(desc));
            return desc;
        };
        LocalStorageProvenanceGraphManager.prototype.create = function () {
            var desc = this.createDesc();
            return this.get(desc);
        };
        return LocalStorageProvenanceGraphManager;
    }();
    exports.LocalStorageProvenanceGraphManager = LocalStorageProvenanceGraphManager;
    function toSlidePath(s) {
        var r = [];
        while (s) {
            if (r.indexOf(s) >= 0) {
                return r;
            }
            r.push(s);
            s = s.next;
        }
        return r;
    }
    exports.toSlidePath = toSlidePath;
    var RemoteStorageProvenanceGraphManager = function () {
        function RemoteStorageProvenanceGraphManager(options) {
            if (options === void 0) {
                options = {};
            }
            this.options = { application: 'unknown' };
            C.mixin(this.options, options);
        }
        RemoteStorageProvenanceGraphManager.prototype.list = function () {
            var _this = this;
            return datas.list(function (d) {
                return d.desc.type === 'graph' && d.desc.attrs.graphtype === 'provenance_graph' && d.desc.attrs.of === _this.options.application;
            }).then(function (d) {
                return d.map(function (di) {
                    return di.desc;
                });
            });
        };
        RemoteStorageProvenanceGraphManager.prototype.getGraph = function (desc) {
            return datas.get(desc.id).then(function (graph) {
                return graph.impl(provenanceGraphFactory());
            });
        };
        RemoteStorageProvenanceGraphManager.prototype.get = function (desc) {
            return this.getGraph(desc).then(function (impl) {
                return new ProvenanceGraph(desc, impl);
            });
        };
        RemoteStorageProvenanceGraphManager.prototype.delete = function (desc) {
            return datas.remove(desc);
        };
        RemoteStorageProvenanceGraphManager.prototype.import = function (json) {
            var desc = {
                type: 'graph',
                attrs: {
                    graphtype: 'provenance_graph',
                    of: this.options.application
                },
                name: 'Workspace for ' + this.options.application,
                creator: getCurrentUser(),
                ts: Date.now(),
                description: '',
                nodes: json.nodes,
                edges: json.edges
            };
            return datas.upload(desc).then(function (graph) {
                return graph.impl(provenanceGraphFactory());
            }).then(function (impl) {
                return new ProvenanceGraph(impl.desc, impl);
            });
        };
        RemoteStorageProvenanceGraphManager.prototype.create = function () {
            var desc = {
                type: 'graph',
                attrs: {
                    graphtype: 'provenance_graph',
                    of: this.options.application
                },
                name: 'Workspace for ' + this.options.application,
                creator: getCurrentUser(),
                ts: Date.now(),
                description: ''
            };
            return datas.upload(desc).then(function (graph) {
                return graph.impl(provenanceGraphFactory());
            }).then(function (impl) {
                return new ProvenanceGraph(impl.desc, impl);
            });
        };
        return RemoteStorageProvenanceGraphManager;
    }();
    exports.RemoteStorageProvenanceGraphManager = RemoteStorageProvenanceGraphManager;
    var MixedStorageProvenanceGraphManager = function () {
        function MixedStorageProvenanceGraphManager(options) {
            if (options === void 0) {
                options = {};
            }
            this.remote = new RemoteStorageProvenanceGraphManager(options);
            this.local = new LocalStorageProvenanceGraphManager(options);
        }
        MixedStorageProvenanceGraphManager.prototype.listRemote = function () {
            return this.remote.list();
        };
        MixedStorageProvenanceGraphManager.prototype.listLocal = function () {
            return this.local.list();
        };
        MixedStorageProvenanceGraphManager.prototype.list = function () {
            return Promise.all([
                this.listLocal(),
                this.listRemote()
            ]).then(function (arr) {
                return arr[0].concat(arr[1]);
            });
        };
        MixedStorageProvenanceGraphManager.prototype.delete = function (desc) {
            if (desc.local) {
                return this.local.delete(desc);
            } else {
                return this.remote.delete(desc);
            }
        };
        MixedStorageProvenanceGraphManager.prototype.get = function (desc) {
            if (desc.local) {
                return this.local.get(desc);
            } else {
                return this.remote.get(desc);
            }
        };
        MixedStorageProvenanceGraphManager.prototype.getGraph = function (desc) {
            if (desc.local) {
                return this.local.getGraph(desc);
            } else {
                return this.remote.getGraph(desc);
            }
        };
        MixedStorageProvenanceGraphManager.prototype.cloneLocal = function (desc) {
            return this.getGraph(desc).then(this.local.clone.bind(this.local));
        };
        MixedStorageProvenanceGraphManager.prototype.importLocal = function (json) {
            return this.local.import(json);
        };
        MixedStorageProvenanceGraphManager.prototype.importRemote = function (json) {
            return this.remote.import(json);
        };
        MixedStorageProvenanceGraphManager.prototype.import = function (json) {
            return this.importLocal(json);
        };
        MixedStorageProvenanceGraphManager.prototype.createLocal = function () {
            return this.local.create();
        };
        MixedStorageProvenanceGraphManager.prototype.createRemote = function () {
            return this.remote.create();
        };
        MixedStorageProvenanceGraphManager.prototype.create = function () {
            return this.createLocal();
        };
        return MixedStorageProvenanceGraphManager;
    }();
    exports.MixedStorageProvenanceGraphManager = MixedStorageProvenanceGraphManager;
    function findMetaObject(find) {
        return function (obj) {
            return find === obj || (obj.value === null || obj.value === find.value) && find.hash === obj.hash;
        };
    }
    var ProvenanceGraph = function (_super) {
        __extends(ProvenanceGraph, _super);
        function ProvenanceGraph(desc, backend) {
            _super.call(this, desc);
            this.backend = backend;
            this._actions = [];
            this._objects = [];
            this._states = [];
            this._slides = [];
            this.act = null;
            this.lastAction = null;
            this.currentlyRunning = false;
            this.executeCurrentActionWithin = -1;
            this.nextQueue = [];
            this.propagate(this.backend, 'sync', 'add_edge', 'add_node', 'sync_node', 'sync_edge', 'sync_start');
            if (this.backend.nnodes === 0) {
                this.act = new StateNode('Start');
                this._states.push(this.act);
                this.backend.addNode(this.act);
            } else {
                var act = desc.act;
                this._actions = this.backend.nodes.filter(function (n) {
                    return n instanceof ActionNode;
                });
                this._objects = this.backend.nodes.filter(function (n) {
                    return n instanceof ObjectNode;
                });
                this._states = this.backend.nodes.filter(function (n) {
                    return n instanceof StateNode;
                });
                this._slides = this.backend.nodes.filter(function (n) {
                    return n instanceof SlideNode;
                });
                this.act = act >= 0 ? this.getStateById(act) : this._states[0];
            }
        }
        Object.defineProperty(ProvenanceGraph.prototype, 'dim', {
            get: function () {
                return [
                    this._actions.length,
                    this._objects.length,
                    this._states.length,
                    this._slides.length
                ];
            },
            enumerable: true,
            configurable: true
        });
        ProvenanceGraph.prototype.ids = function (range) {
            if (range === void 0) {
                range = ranges.all();
            }
            var to_id = function (a) {
                return a.id;
            };
            var actions = ranges.Range1D.from(this._actions.map(to_id));
            var objects = ranges.Range1D.from(this._objects.map(to_id));
            var states = ranges.Range1D.from(this._states.map(to_id));
            var stories = ranges.Range1D.from(this._slides.map(to_id));
            return Promise.resolve(range.preMultiply(ranges.list(actions, objects, states, stories)));
        };
        ProvenanceGraph.prototype.selectState = function (state, op, type, extras) {
            if (op === void 0) {
                op = idtypes.SelectOperation.SET;
            }
            if (type === void 0) {
                type = idtypes.defaultSelectionType;
            }
            if (extras === void 0) {
                extras = {};
            }
            this.fire('select_state,select_state_' + type, state, type, op, extras);
            this.select(ProvenanceGraphDim.State, type, state ? [this._states.indexOf(state)] : [], op);
        };
        ProvenanceGraph.prototype.selectSlide = function (state, op, type, extras) {
            if (op === void 0) {
                op = idtypes.SelectOperation.SET;
            }
            if (type === void 0) {
                type = idtypes.defaultSelectionType;
            }
            if (extras === void 0) {
                extras = {};
            }
            this.fire('select_slide,select_slide_' + type, state, type, op, extras);
            this.select(ProvenanceGraphDim.Slide, type, state ? [this._slides.indexOf(state)] : [], op);
        };
        ProvenanceGraph.prototype.selectAction = function (action, op, type) {
            if (op === void 0) {
                op = idtypes.SelectOperation.SET;
            }
            if (type === void 0) {
                type = idtypes.defaultSelectionType;
            }
            this.fire('select_action,select_action_' + type, action, type, op);
            this.select(ProvenanceGraphDim.Action, type, action ? [this._actions.indexOf(action)] : [], op);
        };
        ProvenanceGraph.prototype.selectedStates = function (type) {
            if (type === void 0) {
                type = idtypes.defaultSelectionType;
            }
            var sel = this.idtypes[ProvenanceGraphDim.State].selections(type);
            if (sel.isNone) {
                return [];
            }
            var lookup = {};
            this._states.forEach(function (s) {
                return lookup[s.id] = s;
            });
            var nodes = [];
            sel.dim(0).forEach(function (id) {
                var n = lookup[id];
                if (n) {
                    nodes.push(n);
                }
            });
            return nodes;
        };
        ProvenanceGraph.prototype.selectedSlides = function (type) {
            if (type === void 0) {
                type = idtypes.defaultSelectionType;
            }
            var sel = this.idtypes[ProvenanceGraphDim.Slide].selections(type);
            if (sel.isNone) {
                return [];
            }
            var lookup = {};
            this._slides.forEach(function (s) {
                return lookup[s.id] = s;
            });
            var nodes = [];
            sel.dim(0).forEach(function (id) {
                var n = lookup[id];
                if (n) {
                    nodes.push(n);
                }
            });
            return nodes;
        };
        Object.defineProperty(ProvenanceGraph.prototype, 'idtypes', {
            get: function () {
                return [
                    '_provenance_actions',
                    '_provenance_objects',
                    '_provenance_states',
                    '_provenance_stories'
                ].map(idtypes.resolve);
            },
            enumerable: true,
            configurable: true
        });
        ProvenanceGraph.prototype.clear = function () {
            this.backend.clear();
            this._states = [];
            this._actions = [];
            this._objects = [];
            this._slides = [];
            this.act = null;
            this.lastAction = null;
            this.act = new StateNode('start');
            this._states.push(this.act);
            this.backend.addNode(this.act);
            this.fire('clear');
        };
        Object.defineProperty(ProvenanceGraph.prototype, 'states', {
            get: function () {
                return this._states;
            },
            enumerable: true,
            configurable: true
        });
        ProvenanceGraph.prototype.getStateById = function (id) {
            return C.search(this._states, function (s) {
                return s.id === id;
            });
        };
        Object.defineProperty(ProvenanceGraph.prototype, 'actions', {
            get: function () {
                return this._actions;
            },
            enumerable: true,
            configurable: true
        });
        ProvenanceGraph.prototype.getActionById = function (id) {
            return C.search(this._actions, function (s) {
                return s.id === id;
            });
        };
        Object.defineProperty(ProvenanceGraph.prototype, 'objects', {
            get: function () {
                return this._objects;
            },
            enumerable: true,
            configurable: true
        });
        ProvenanceGraph.prototype.getObjectById = function (id) {
            return C.search(this._objects, function (s) {
                return s.id === id;
            });
        };
        Object.defineProperty(ProvenanceGraph.prototype, 'stories', {
            get: function () {
                return this._slides;
            },
            enumerable: true,
            configurable: true
        });
        ProvenanceGraph.prototype.getSlideById = function (id) {
            return C.search(this._slides, function (s) {
                return s.id === id;
            });
        };
        ProvenanceGraph.prototype.getSlideChains = function () {
            return this.stories.filter(function (n) {
                return n.isStart;
            });
        };
        ProvenanceGraph.prototype.getSlides = function () {
            return this.getSlideChains().map(toSlidePath);
        };
        Object.defineProperty(ProvenanceGraph.prototype, 'edges', {
            get: function () {
                return this.backend.edges;
            },
            enumerable: true,
            configurable: true
        });
        ProvenanceGraph.prototype.addEdge = function (s, type, t, attrs) {
            if (attrs === void 0) {
                attrs = {};
            }
            var l = new graph.GraphEdge(type, s, t);
            Object.keys(attrs).forEach(function (attr) {
                return l.setAttr(attr, attrs[attr]);
            });
            this.backend.addEdge(l);
            return l;
        };
        ProvenanceGraph.prototype.createAction = function (meta, f_id, f, inputs, parameter) {
            if (inputs === void 0) {
                inputs = [];
            }
            if (parameter === void 0) {
                parameter = {};
            }
            var r = new ActionNode(meta, f_id, f, parameter);
            return this.initAction(r, inputs);
        };
        ProvenanceGraph.prototype.initAction = function (r, inputs) {
            var _this = this;
            if (inputs === void 0) {
                inputs = [];
            }
            var inobjects = inputs.map(function (i) {
                return _this.findInArray(_this._objects, i);
            });
            this._actions.push(r);
            this.backend.addNode(r);
            this.fire('add_action', r);
            inobjects.forEach(function (obj, i) {
                _this.addEdge(r, 'requires', obj, { index: i });
            });
            return r;
        };
        ProvenanceGraph.prototype.createInverse = function (action, inverter) {
            var _this = this;
            var creates = action.creates, removes = action.removes;
            var i = inverter.call(action, action.requires, creates, removes);
            var inverted = this.createAction(i.meta, i.id, i.f, i.inputs, i.parameter);
            inverted.onceExecuted = true;
            this.addEdge(inverted, 'inverses', action);
            removes.forEach(function (c, i) {
                _this.addEdge(inverted, 'creates', c, { index: i });
            });
            creates.forEach(function (c) {
                _this.addEdge(inverted, 'removes', c);
            });
            this.addEdge(action.resultsIn, 'next', inverted);
            this.addEdge(inverted, 'resultsIn', action.previous);
            return inverted;
        };
        ProvenanceGraph.prototype.push = function (arg, f_id, f, inputs, parameter) {
            var _this = this;
            if (f_id === void 0) {
                f_id = '';
            }
            if (f === void 0) {
                f = null;
            }
            if (inputs === void 0) {
                inputs = [];
            }
            if (parameter === void 0) {
                parameter = {};
            }
            return this.inOrder(function () {
                if (arg instanceof ActionMetaData) {
                    return _this.run(_this.createAction(arg, f_id, f, inputs, parameter));
                } else {
                    var a = arg;
                    return _this.run(_this.createAction(a.meta, a.id, a.f, a.inputs || [], a.parameter || {}));
                }
            });
        };
        ProvenanceGraph.prototype.findObject = function (value) {
            var r = C.search(this._objects, function (obj) {
                return obj.value === value;
            });
            if (r) {
                return r;
            }
            return null;
        };
        ProvenanceGraph.prototype.addObject = function (value, name, category, hash) {
            if (name === void 0) {
                name = value ? value.toString() : 'Null';
            }
            if (category === void 0) {
                category = exports.cat.data;
            }
            if (hash === void 0) {
                hash = name + '_' + category;
            }
            return this.addObjectImpl(value, name, category, hash, true);
        };
        ProvenanceGraph.prototype.addJustObject = function (value, name, category, hash) {
            if (name === void 0) {
                name = value ? value.toString() : 'Null';
            }
            if (category === void 0) {
                category = exports.cat.data;
            }
            if (hash === void 0) {
                hash = name + '_' + category;
            }
            return this.addObjectImpl(value, name, category, hash, false);
        };
        ProvenanceGraph.prototype.addObjectImpl = function (value, name, category, hash, createEdge) {
            if (name === void 0) {
                name = value ? value.toString() : 'Null';
            }
            if (category === void 0) {
                category = exports.cat.data;
            }
            if (hash === void 0) {
                hash = name + '_' + category;
            }
            if (createEdge === void 0) {
                createEdge = false;
            }
            var r = new ObjectNode(value, name, category, hash);
            this._objects.push(r);
            this.backend.addNode(r);
            if (createEdge) {
                this.addEdge(this.act, 'consistsOf', r);
            }
            this.fire('add_object', r);
            return r;
        };
        ProvenanceGraph.prototype.resolve = function (arr) {
            var _this = this;
            return arr.map(function (r) {
                if (r instanceof ObjectNode) {
                    return r;
                }
                if (r._resolvesTo instanceof ObjectNode) {
                    return r._resolvesTo;
                }
                var result = _this.addJustObject(r.value, r.name, r.category, r.hash);
                r._resolvesTo = result;
                return result;
            });
        };
        ProvenanceGraph.prototype.findInArray = function (arr, r) {
            if (r instanceof ObjectNode) {
                return r;
            }
            if (r._resolvesTo instanceof ObjectNode) {
                return r._resolvesTo;
            }
            var result = C.search(arr, findMetaObject(r));
            r._resolvesTo = result;
            return result;
        };
        ProvenanceGraph.prototype.findOrAddObject = function (i, name, type) {
            return this.findOrAddObjectImpl(i, name, type, true);
        };
        ProvenanceGraph.prototype.findOrAddJustObject = function (i, name, type) {
            return this.findOrAddObjectImpl(i, name, type, false);
        };
        ProvenanceGraph.prototype.findOrAddObjectImpl = function (i, name, type, createEdge) {
            if (createEdge === void 0) {
                createEdge = false;
            }
            var r, j = i;
            if (i instanceof ObjectNode) {
                return i;
            }
            if (j._resolvesTo instanceof ObjectNode) {
                return j._resolvesTo;
            }
            if (j.hasOwnProperty('value') && j.hasOwnProperty('name')) {
                j.category = j.category || exports.cat.data;
                r = C.search(this._objects, findMetaObject(j));
                if (r) {
                    if (r.value === null) {
                        r.value = j.value;
                    }
                    j._resolvesTo = r;
                    return r;
                }
                return this.addObjectImpl(j.value, j.name, j.category, j.hash, createEdge);
            } else {
                r = C.search(this._objects, function (obj) {
                    return (obj.value === null || obj.value === i) && (name === null || obj.name === name) && (type === null || type === obj.category);
                });
                if (r) {
                    if (r.value === null) {
                        r.value = i;
                    }
                    return r;
                }
                return this.addObjectImpl(i, name, type, name + '_' + type, createEdge);
            }
        };
        ProvenanceGraph.prototype.inOrder = function (f) {
            var _this = this;
            if (this.currentlyRunning) {
                var helper;
                var r = new Promise(function (resolve) {
                    helper = resolve.bind(_this);
                });
                this.nextQueue.push(helper);
                return r.then(f);
            } else {
                return f();
            }
        };
        ProvenanceGraph.prototype.run = function (action, withinMilliseconds) {
            var _this = this;
            if (withinMilliseconds === void 0) {
                withinMilliseconds = -1;
            }
            var current = this.act, next = action.resultsIn, newState = false;
            if (!next) {
                newState = true;
                this.addEdge(current, 'next', action);
                next = this.makeState(action.meta.name);
                this.addEdge(action, 'resultsIn', next);
            }
            this.fire('execute', action);
            if (C.hash.is('debug')) {
                console.log('execute ' + action.meta + ' ' + action.f_id);
            }
            this.currentlyRunning = true;
            if (C.isFunction(withinMilliseconds)) {
                withinMilliseconds = withinMilliseconds();
            }
            this.executeCurrentActionWithin = withinMilliseconds;
            var runningAction = action.execute(this, this.executeCurrentActionWithin).then(function (result) {
                result = C.mixin({
                    created: [],
                    removed: [],
                    inverse: null,
                    consumed: 0
                }, result);
                _this.fire('executed', action, result);
                var firstTime = !action.onceExecuted;
                action.onceExecuted = true;
                if (firstTime) {
                    var created = _this.resolve(result.created);
                    created.forEach(function (c, i) {
                        _this.addEdge(action, 'creates', c, { index: i });
                    });
                    var requires = action.requires;
                    var removed = result.removed.map(function (r) {
                        return _this.findInArray(requires, r);
                    });
                    removed.forEach(function (c) {
                        c.value = null;
                        _this.addEdge(action, 'removes', c);
                    });
                    if (newState) {
                        var objs = current.consistsOf;
                        objs.push.apply(objs, created);
                        removed.forEach(function (r) {
                            var i = objs.indexOf(r);
                            objs.splice(i, 1);
                        });
                        objs.forEach(function (obj) {
                            return _this.addEdge(next, 'consistsOf', obj);
                        });
                    }
                    _this.fire('executed_first', action, next);
                } else {
                    action.creates.forEach(function (c, i) {
                        c.value = result.created[i].value;
                    });
                    action.removes.forEach(function (c) {
                        return c.value = null;
                    });
                }
                result.inverse = asFunction(result.inverse);
                action.updateInverse(_this, result.inverse);
                _this.switchToImpl(action, next);
                return {
                    action: action,
                    state: next,
                    created: created,
                    removed: removed,
                    consumed: result.consumed
                };
            });
            runningAction.then(function (result) {
                var q = _this.nextQueue.shift();
                if (q) {
                    q();
                } else {
                    _this.currentlyRunning = false;
                }
            });
            return runningAction;
        };
        ProvenanceGraph.prototype.switchToImpl = function (action, state) {
            var bak = this.act;
            this.act = state;
            this.fire('switch_state', state, bak);
            bak = this.lastAction;
            this.lastAction = action;
            this.fire('switch_action', action, bak);
        };
        ProvenanceGraph.prototype.runChain = function (actions, withinMilliseconds) {
            var _this = this;
            if (withinMilliseconds === void 0) {
                withinMilliseconds = -1;
            }
            if (actions.length === 0) {
                if (withinMilliseconds > 0) {
                    return C.resolveIn(withinMilliseconds).then(function () {
                        return [];
                    });
                }
                return Promise.resolve([]);
            }
            var last = actions[actions.length - 1];
            return compress(actions).then(function (torun) {
                var r = Promise.resolve([]);
                var remaining = withinMilliseconds;
                function guessTime(index) {
                    var left = torun.length - index;
                    return function () {
                        return remaining < 0 ? -1 : remaining / left;
                    };
                }
                function updateTime(consumed) {
                    remaining -= consumed;
                }
                torun.forEach(function (action, i) {
                    r = r.then(function (results) {
                        return _this.run(action, withinMilliseconds < 0 ? -1 : guessTime(i)).then(function (result) {
                            results.push(result);
                            updateTime(result.consumed);
                            return results;
                        });
                    });
                });
                return r.then(function (results) {
                    if (_this.act !== last.resultsIn) {
                        _this.switchToImpl(last, last.resultsIn);
                    }
                    return results;
                });
            });
        };
        ProvenanceGraph.prototype.undo = function () {
            var _this = this;
            if (!this.lastAction) {
                return Promise.resolve(null);
            }
            if (this.lastAction.inverses != null) {
                return this.jumpTo(this.act.previousState);
            } else {
                return this.inOrder(function () {
                    return _this.run(_this.lastAction.getOrCreateInverse(_this));
                });
            }
        };
        ProvenanceGraph.prototype.jumpTo = function (state, withinMilliseconds) {
            var _this = this;
            if (withinMilliseconds === void 0) {
                withinMilliseconds = -1;
            }
            return this.inOrder(function () {
                var actions = [], act = _this.act;
                if (act === state) {
                    return withinMilliseconds >= 0 ? C.resolveIn(withinMilliseconds).then(function () {
                        return [];
                    }) : Promise.resolve([]);
                }
                var act_path = act.path, target_path = state.path;
                var common = findCommon(act_path, target_path);
                if (common) {
                    var to_revert = act_path.slice(common.i + 1).reverse(), to_forward = target_path.slice(common.j + 1);
                    actions = actions.concat(to_revert.map(function (r) {
                        return r.resultsFrom[0].getOrCreateInverse(_this);
                    }));
                    actions = actions.concat(to_forward.map(function (r) {
                        return r.resultsFrom[0];
                    }));
                }
                return _this.runChain(actions, withinMilliseconds);
            });
        };
        ProvenanceGraph.prototype.fork = function (action, target) {
            var all = [];
            var queue = [action.resultsIn];
            while (queue.length > 0) {
                var next = queue.shift();
                if (all.indexOf(next) >= 0) {
                    continue;
                }
                all.push(next);
                queue.push.apply(queue, next.nextStates);
            }
            if (all.indexOf(target) >= 0) {
                return false;
            }
            var targetObjects = target.consistsOf;
            var sourceObjects = action.previous.consistsOf;
            var removedObjects = sourceObjects.filter(function (o) {
                return targetObjects.indexOf(o) < 0;
            });
            this.copyBranch(action, target, removedObjects);
            this.fire('forked_branch', action, target);
            return true;
        };
        ProvenanceGraph.prototype.copyAction = function (action, appendTo) {
            var clone = this.initAction(action.clone(), action.requires);
            this.addEdge(appendTo, 'next', clone);
            var s = this.makeState(action.resultsIn.name, action.resultsIn.description);
            this.addEdge(clone, 'resultsIn', s);
            return s;
        };
        ProvenanceGraph.prototype.copyBranch = function (action, target, removedObject) {
            var queue = [{
                    a: action,
                    b: target
                }];
            while (queue.length > 0) {
                var next = queue.shift();
                var b = next.b;
                var a = next.a;
                if (!a.requires.some(function (ai) {
                        return removedObject.indexOf(ai) >= 0;
                    })) {
                    b = this.copyAction(a, next.b);
                }
                queue.push.apply(queue, a.resultsIn.next.map(function (aa) {
                    return {
                        a: aa,
                        b: b
                    };
                }));
            }
        };
        ProvenanceGraph.prototype.makeState = function (name, description) {
            if (description === void 0) {
                description = '';
            }
            var s = new StateNode(name, description);
            this._states.push(s);
            this.backend.addNode(s);
            this.fire('add_state', s);
            return s;
        };
        ProvenanceGraph.prototype.persist = function () {
            var r = this.backend.persist();
            r.act = this.act ? this.act.id : null;
            r.lastAction = this.lastAction ? this.lastAction.id : null;
            return r;
        };
        ProvenanceGraph.prototype.wrapAsSlide = function (state) {
            var node = new SlideNode();
            node.name = state.name;
            this.addEdge(node, 'jumpTo', state);
            this._slides.push(node);
            this.backend.addNode(node);
            this.fire('add_slide', node);
            return node;
        };
        ProvenanceGraph.prototype.cloneSingleSlideNode = function (state) {
            var clone = state.state != null ? this.wrapAsSlide(state.state) : this.makeTextSlide();
            state.attrs.forEach(function (attr) {
                if (attr !== 'annotations') {
                    clone.setAttr(attr, state.getAttr(attr, null));
                }
            });
            clone.setAttr('annotations', state.annotations.map(function (a) {
                return C.mixin({}, a);
            }));
            return clone;
        };
        ProvenanceGraph.prototype.extractSlide = function (states, addStartEnd) {
            var _this = this;
            if (addStartEnd === void 0) {
                addStartEnd = true;
            }
            var addSlide = function (node) {
                _this._slides.push(node);
                _this.backend.addNode(node);
                _this.fire('add_slide', node);
                return node;
            };
            var slide = addStartEnd ? addSlide(SlideNode.makeText('Unnamed Story')) : null, prev = slide;
            states.forEach(function (s, i) {
                var node = addSlide(new SlideNode());
                node.name = s.name;
                _this.addEdge(node, 'jumpTo', s);
                if (prev) {
                    _this.addEdge(prev, 'next', node);
                } else {
                    slide = node;
                }
                prev = node;
            });
            if (addStartEnd) {
                var last = SlideNode.makeText('Thanks');
                addSlide(last);
                this.addEdge(prev, 'next', last);
            }
            this.fire('extract_slide', slide);
            this.selectSlide(slide);
            return slide;
        };
        ProvenanceGraph.prototype.startNewSlide = function (title, states) {
            if (states === void 0) {
                states = [];
            }
            var s = this.makeTextSlide(title);
            if (states.length > 0) {
                var s2 = this.extractSlide(states, false);
                this.addEdge(s, 'next', s2);
            }
            this.fire('start_slide', s);
            return s;
        };
        ProvenanceGraph.prototype.makeTextSlide = function (title) {
            var s = SlideNode.makeText(title);
            this._slides.push(s);
            this.backend.addNode(s);
            this.fire('add_slide', s);
            return s;
        };
        ProvenanceGraph.prototype.insertIntoSlide = function (toInsert, slide, beforeIt) {
            if (beforeIt === void 0) {
                beforeIt = false;
            }
            this.moveSlide(toInsert, slide, beforeIt);
        };
        ProvenanceGraph.prototype.appendToSlide = function (slide, elem) {
            var s = toSlidePath(slide);
            return this.moveSlide(elem, s[s.length - 1], false);
        };
        ProvenanceGraph.prototype.moveSlide = function (node, to, beforeIt) {
            var _this = this;
            if (beforeIt === void 0) {
                beforeIt = false;
            }
            if (beforeIt && node.next === to || !beforeIt && node.previous === to) {
                return;
            }
            var prev = node.previous;
            if (prev) {
                node.nexts.forEach(function (n) {
                    _this.addEdge(prev, 'next', n);
                });
            }
            this.edges.filter(function (e) {
                return (e.source === node || e.target === node) && e.type === 'next';
            }).forEach(function (e) {
                _this.backend.removeEdge(e);
            });
            if (beforeIt) {
                var tprev = to.previous;
                if (tprev) {
                    this.edges.filter(function (e) {
                        return e.target === to && e.type === 'next';
                    }).forEach(function (e) {
                        _this.backend.removeEdge(e);
                    });
                    this.addEdge(tprev, 'next', node);
                    this.addEdge(node, 'next', to);
                }
                this.addEdge(node, 'next', to);
            } else {
                var tnexts = to.nexts;
                if (tnexts.length > 0) {
                    this.edges.filter(function (e) {
                        return e.source === to && e.type === 'next';
                    }).forEach(function (e) {
                        _this.backend.removeEdge(e);
                    });
                    tnexts.forEach(function (next) {
                        _this.addEdge(node, 'next', next);
                    });
                }
                this.addEdge(to, 'next', node);
            }
            this.fire('move_slide', node, to, beforeIt);
        };
        ProvenanceGraph.prototype.removeSlideNode = function (node) {
            var _this = this;
            var prev = node.previous;
            if (prev) {
                node.nexts.forEach(function (n) {
                    _this.addEdge(prev, 'next', n);
                });
            }
            this.edges.filter(function (e) {
                return e.source === node || e.target === node;
            }).forEach(function (e) {
                _this.backend.removeEdge(e);
            });
            this._slides.splice(this._slides.indexOf(node), 1);
            this.backend.removeNode(node);
            this.fire('remove_slide', node);
        };
        ProvenanceGraph.prototype.removeFullSlide = function (node) {
            while (node.previous) {
                node = node.previous;
            }
            var bak = node;
            while (node) {
                var next = node.next;
                this.removeSlideNode(node);
                node = next;
            }
            this.fire('destroy_slide', bak);
        };
        ProvenanceGraph.prototype.setSlideJumpToTarget = function (node, state) {
            var old = node.outgoing.filter(graph.isType('jumpTo'))[0];
            if (old) {
                this.backend.removeEdge(old);
            }
            if (state) {
                this.addEdge(node, 'jumpTo', state);
            }
            this.fire('set_jump_target', node, old ? old.target : null, state);
        };
        return ProvenanceGraph;
    }(datatypes.DataTypeBase);
    exports.ProvenanceGraph = ProvenanceGraph;
    function findLatestPath(state) {
        var path = state.path.slice();
        while ((state = state.nextState) != null && path.indexOf(state) < 0) {
            path.push(state);
        }
        return path;
    }
    exports.findLatestPath = findLatestPath;
}(require, exports, require('../caleydo_core/main'), require('../caleydo_core/plugin'), require('../caleydo_core/data'), require('../caleydo_graph/main'), require('../caleydo_core/idtype'), require('../caleydo_core/range'), require('../caleydo_core/datatype'), require('../caleydo_core/session')));
},{"../caleydo_core/data":5,"../caleydo_core/datatype":6,"../caleydo_core/idtype":9,"../caleydo_core/main":13,"../caleydo_core/plugin":19,"../caleydo_core/range":20,"../caleydo_core/session":21,"../caleydo_graph/main":36}],41:[function(require,module,exports){
(function (require, exports, d3, C, events) {
    function normalize(arr) {
        var sum = arr.reduce(function (a, b) {
            return a + b;
        }, 0);
        return arr.map(function (i) {
            return i / sum;
        });
    }
    var CLUEMode = function () {
        function CLUEMode(exploration, authoring, presentation) {
            this.coord = normalize([
                exploration,
                authoring,
                presentation
            ]);
        }
        Object.defineProperty(CLUEMode.prototype, 'exploration', {
            get: function () {
                return this.coord[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CLUEMode.prototype, 'authoring', {
            get: function () {
                return this.coord[1];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CLUEMode.prototype, 'presentation', {
            get: function () {
                return this.coord[2];
            },
            enumerable: true,
            configurable: true
        });
        CLUEMode.prototype.value = function (index) {
            if (typeof index === 'number') {
                return this.coord[index];
            } else if (typeof index === 'string') {
                var lookup = {
                    e: this.coord[0],
                    a: this.coord[1],
                    p: this.coord[2]
                };
                return lookup[index.charAt(0).toLowerCase()];
            }
            return null;
        };
        Object.defineProperty(CLUEMode.prototype, 'isAtomic', {
            get: function () {
                return this.exploration === 1 || this.authoring === 1 || this.presentation === 1;
            },
            enumerable: true,
            configurable: true
        });
        CLUEMode.prototype.toString = function () {
            if (this.exploration === 1) {
                return 'E';
            }
            if (this.authoring === 1) {
                return 'A';
            }
            if (this.presentation === 1) {
                return 'P';
            }
            return '(' + this.coord.map(function (s) {
                return d3.round(s, 3).toString();
            }).join('-') + ')';
        };
        return CLUEMode;
    }();
    exports.CLUEMode = CLUEMode;
    function mode(exploration, authoring, presentation) {
        return new CLUEMode(exploration, authoring, presentation);
    }
    exports.modes = {
        Exploration: mode(1, 0, 0),
        Authoring: mode(0, 1, 0),
        Presentation: mode(0, 0, 1)
    };
    function fromString(s) {
        if (s === 'P') {
            return exports.modes.Presentation;
        } else if (s === 'A') {
            return exports.modes.Authoring;
        } else if (s === 'E') {
            return exports.modes.Exploration;
        }
        var coords = s.slice(1, s.length - 1).split('-').map(parseFloat);
        return new CLUEMode(coords[0], coords[1], coords[2]);
    }
    function defaultMode() {
        return fromString(C.hash.getProp('clue', 'E'));
    }
    var ModeWrapper = function (_super) {
        __extends(ModeWrapper, _super);
        function ModeWrapper() {
            _super.call(this);
            this._mode = defaultMode();
            events.fire('clue.modeChanged', this._mode, this._mode);
        }
        Object.defineProperty(ModeWrapper.prototype, 'mode', {
            get: function () {
                return this._mode;
            },
            set: function (value) {
                if (this._mode === value) {
                    return;
                }
                if (value.isAtomic) {
                    value = fromString(value.toString());
                }
                var bak = this._mode;
                this._mode = value;
                C.hash.setProp('clue', value.toString());
                this.fire('modeChanged', value, bak);
                events.fire('clue.modeChanged', value, bak);
            },
            enumerable: true,
            configurable: true
        });
        return ModeWrapper;
    }(events.EventHandler);
    var _instance = new ModeWrapper();
    exports.on = ModeWrapper.prototype.on.bind(_instance);
    exports.off = ModeWrapper.prototype.off.bind(_instance);
    function getMode() {
        return _instance.mode;
    }
    exports.getMode = getMode;
    function setMode(value) {
        _instance.mode = value;
    }
    exports.setMode = setMode;
    var ButtonModeSelector = function () {
        function ButtonModeSelector(parent, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            this.options = { size: 'xs' };
            C.mixin(this.options, options);
            this.$node = this.build(d3.select(parent));
            var listener = function (event, new_) {
                _this.$node.selectAll('label').classed('active', function (d) {
                    return d === new_;
                }).select('input').property('checked', function (d) {
                    return d === new_;
                });
            };
            _instance.on('modeChanged', listener);
            C.onDOMNodeRemoved(this.$node.node(), function () {
                _instance.off('modeChanged', listener);
            });
        }
        ButtonModeSelector.prototype.build = function ($parent) {
            var _this = this;
            var $root = $parent.append('div').classed('clue_buttonmodeselector', true).classed('btn-group', true).attr('data-toggle', 'buttons');
            var $modes = $root.selectAll('label').data([
                exports.modes.Exploration,
                exports.modes.Authoring,
                exports.modes.Presentation
            ]);
            $modes.enter().append('label').attr('class', function (d) {
                return 'btn btn-' + _this.options.size + ' clue-' + d.toString();
            }).classed('active', function (d) {
                return d === getMode();
            }).html(function (d, i) {
                var label = [
                    'Exploration',
                    'Authoring',
                    'Presentation'
                ][i];
                return '<input type="radio" name="clue_mode" autocomplete="off" value="' + d.toString() + '" ' + (d === getMode() ? 'checked="checked"' : '') + '> ' + label;
            }).on('click', function (d) {
                setMode(d);
            });
            return $root;
        };
        return ButtonModeSelector;
    }();
    exports.ButtonModeSelector = ButtonModeSelector;
    var SliderModeSelector = function () {
        function SliderModeSelector(parent, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            this.options = {};
            C.mixin(this.options, options);
            this.$node = d3.select(parent).append('div').classed('clue_modeselector', true).datum(this);
            this.build(this.$node);
            var listener = function (event, new_) {
                _this.$node.select('label.clue-E input').property('value', Math.round(new_.exploration * 100));
                _this.$node.select('label.clue-A input').property('value', Math.round(new_.authoring * 100));
                _this.$node.select('label.clue-P input').property('value', Math.round(new_.presentation * 100));
            };
            _instance.on('modeChanged', listener);
            C.onDOMNodeRemoved(this.$node.node(), function () {
                _instance.off('modeChanged', listener);
            });
        }
        SliderModeSelector.prototype.build = function ($parent) {
            var $root = $parent.append('div').classed('clue_slidermodeselector', true);
            var $modes = $root.selectAll('label').data([
                exports.modes.Exploration,
                exports.modes.Authoring,
                exports.modes.Presentation
            ]);
            function normalize(eap, driven_by) {
                var base = eap[driven_by];
                eap[driven_by] = 0;
                var factor = (1 - base) / d3.sum(eap);
                eap = eap.map(function (v) {
                    return v * factor;
                });
                eap[driven_by] = base;
                return eap;
            }
            function updateMode(driven_by) {
                if (driven_by === void 0) {
                    driven_by = -1;
                }
                var e = parseFloat($modes.select('label.clue-E input').property('value')) / 100;
                var a = parseFloat($modes.select('label.clue-A input').property('value')) / 100;
                var p = parseFloat($modes.select('label.clue-P input').property('value')) / 100;
                if (driven_by >= 0) {
                    _a = normalize([
                        e,
                        a,
                        p
                    ], driven_by), e = _a[0], a = _a[1], p = _a[2];
                }
                setMode(mode(e, a, p));
                var _a;
            }
            $modes.enter().append('label').attr('class', function (d) {
                return 'clue-' + d.toString();
            }).text(function (d, i) {
                return [
                    'Exploration',
                    'Authoring',
                    'Presentation'
                ][i];
            }).append('input').attr({
                type: 'range',
                min: 0,
                max: 100,
                value: function (d, i) {
                    return getMode().value(i) * 100;
                }
            }).on('input', function (d, i) {
                updateMode(i);
            });
            return $root;
        };
        return SliderModeSelector;
    }();
    exports.SliderModeSelector = SliderModeSelector;
    var TriangleModeSelector = function () {
        function TriangleModeSelector(parent, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            this.options = {
                height: 15,
                offset: 5
            };
            this.e = [
                0,
                30
            ];
            this.a = [
                30,
                0
            ];
            this.p = [
                60,
                30
            ];
            C.mixin(this.options, options);
            this.e[1] = this.a[0] = this.p[1] = this.options.height;
            this.p[0] = this.options.height * 2;
            this.$node = d3.select(parent).append('div').classed('clue_trianglemodeselector', true).datum(this);
            this.build(this.$node);
            var listener = function (event, new_) {
                var c = _this.toCoordinates(new_);
                _this.$node.select('circle.point').attr({
                    cx: c[0],
                    cy: c[1]
                });
            };
            _instance.on('modeChanged', listener);
            C.onDOMNodeRemoved(this.$node.node(), function () {
                _instance.off('modeChanged', listener);
            });
        }
        TriangleModeSelector.prototype.toCoordinates = function (m) {
            var x = m.exploration * this.e[0] + m.authoring * this.a[0] + m.presentation * this.p[0];
            var y = m.exploration * this.e[1] + m.authoring * this.a[1] + m.presentation * this.p[1];
            return [
                x,
                y
            ];
        };
        TriangleModeSelector.prototype.fromCoordinates = function (x, y) {
            var x1 = this.e[0], x2 = this.a[0], x3 = this.p[0], y1 = this.e[1], y2 = this.a[1], y3 = this.p[1];
            var e = Math.max(0, Math.min(1, ((y2 - y3) * (x - x3) + (x3 - x2) * (y - y3)) / ((y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3))));
            var a = Math.max(0, Math.min(1, ((y3 - y3) * (x - x3) + (x1 - x3) * (y - y3)) / ((y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3))));
            var s = e + a;
            if (s > 1) {
                e /= s;
                a /= s;
            }
            var p = 1 - e - a;
            return mode(e, a, p);
        };
        TriangleModeSelector.prototype.build = function ($parent) {
            var _this = this;
            var $root = $parent.append('svg').classed('clue_trianglemodeselector', true).attr({
                width: this.p[0] + this.options.offset,
                height: this.p[1] + this.options.offset
            });
            var that = this;
            var $g = $root.append('g').attr('transform', 'translate(' + this.options.offset / 2 + ',' + this.options.offset / 2 + ')');
            $g.append('path').attr('d', d3.svg.line().interpolate('linear-closed')([
                this.e,
                this.a,
                this.p
            ])).on('click', function () {
                var xy = d3.mouse(this);
                var m = that.fromCoordinates(xy[0], xy[1]);
                setMode(m);
            });
            var xy = this.toCoordinates(getMode());
            $g.append('circle').classed('point', true).attr({
                cx: xy[0],
                cy: xy[1],
                r: 2
            }).call(d3.behavior.drag().on('drag', function () {
                var m = _this.fromCoordinates(d3.event.x, d3.event.y);
                setMode(m);
            }));
            return $root;
        };
        return TriangleModeSelector;
    }();
    exports.TriangleModeSelector = TriangleModeSelector;
    function create(parent, options) {
        if (options === void 0) {
            options = {};
        }
        return createTriangle(parent, options);
    }
    exports.create = create;
    function createTriangle(parent, options) {
        if (options === void 0) {
            options = {};
        }
        return new TriangleModeSelector(parent, options);
    }
    exports.createTriangle = createTriangle;
    function createButton(parent, options) {
        if (options === void 0) {
            options = {};
        }
        return new ButtonModeSelector(parent, options);
    }
    exports.createButton = createButton;
    function createSlider(parent, options) {
        if (options === void 0) {
            options = {};
        }
        return new SliderModeSelector(parent, options);
    }
    exports.createSlider = createSlider;
}(require, exports, require('d3'), require('../caleydo_core/main'), require('../caleydo_core/event')));
},{"../caleydo_core/event":7,"../caleydo_core/main":13,"d3":undefined}],42:[function(require,module,exports){
(function (require, exports, provenance, C) {
    var disabled = {};
    function transform(inputs, parameter) {
        var v = inputs[0].value, transform = parameter.transform, bak = parameter.old || v.transform();
        disabled['transform-' + v.id] = true;
        v.transform(transform.scale, transform.rotate);
        delete disabled['transform-' + v.id];
        return { inverse: createTransform(inputs[0], bak, transform) };
    }
    function createTransform(v, t, old) {
        if (old === void 0) {
            old = null;
        }
        return {
            meta: provenance.meta('transform ' + v.toString(), provenance.cat.visual),
            id: 'transform',
            f: transform,
            inputs: [v],
            parameter: {
                transform: t,
                old: old
            }
        };
    }
    exports.createTransform = createTransform;
    function changeVis(inputs, parameter) {
        var v = inputs[0].value, to = parameter.to, from = parameter.from || v.act.id;
        disabled['switch-' + v.id] = true;
        return v.switchTo(to).then(function () {
            delete disabled['switch-' + v.id];
            return { inverse: createChangeVis(inputs[0], from, to) };
        });
    }
    function createChangeVis(v, to, from) {
        if (from === void 0) {
            from = null;
        }
        return {
            meta: provenance.meta('switch vis ' + v.toString(), provenance.cat.visual),
            id: 'changeVis',
            f: changeVis,
            inputs: [v],
            parameter: {
                to: to,
                from: from
            }
        };
    }
    exports.createChangeVis = createChangeVis;
    function setOption(inputs, parameter) {
        var v = inputs[0].value, name = parameter.name, value = parameter.value, bak = parameter.old || v.option(name);
        disabled['option-' + v.id] = true;
        v.option(name, value);
        delete disabled['option-' + v.id];
        return { inverse: createSetOption(inputs[0], name, bak, value) };
    }
    function createSetOption(v, name, value, old) {
        if (old === void 0) {
            old = null;
        }
        return {
            meta: provenance.meta('set option "' + name + +'" of "' + v.toString() + ' to "' + value + '"', provenance.cat.visual),
            id: 'setOption',
            f: setOption,
            inputs: [v],
            parameter: {
                name: name,
                value: value,
                old: old
            }
        };
    }
    exports.createSetOption = createSetOption;
    function attach(graph, v) {
        var m = v.value, id = m.id;
        if (C.isFunction(m.switchTo)) {
            m.on('changed', function (event, new_, old) {
                if (disabled['switch-' + id] !== true) {
                    console.log('push switch');
                    graph.push(createChangeVis(v, new_.id, old ? old.id : null));
                }
            });
        }
        m.on('transform', function (event, new_, old) {
            if (disabled['transform-' + id] !== true) {
                console.log('push transform');
                graph.push(createTransform(v, new_, old));
            }
        });
        m.on('option', function (event, name, new_, old) {
            if (disabled['option-' + id] !== true) {
                console.log('push option');
                graph.push(createSetOption(v, name, new_, old));
            }
        });
    }
    exports.attach = attach;
    function createCmd(id) {
        switch (id) {
        case 'transform':
            return transform;
        case 'changeVis':
            return changeVis;
        case 'setOption':
            return setOption;
        }
        return null;
    }
    exports.createCmd = createCmd;
}(require, exports, require('./main'), require('../caleydo_core/main')));
},{"../caleydo_core/main":13,"./main":40}],43:[function(require,module,exports){
(function (require, exports, C, d3) {
    exports.FACTOR = 1;
    exports.MIN_DURATION = -1;
    exports.MIN_TRANSITION = -1;
    var Player = function () {
        function Player(graph, controls, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            this.graph = graph;
            this.anim = -1;
            this.options = { step: 1000 };
            C.mixin(this.options, options);
            var $controls = d3.select(controls);
            var that = this;
            this.$play = $controls.select('[data-player="play"]').on('click', function () {
                var $i = d3.select(this);
                if ($i.classed('fa-play') && that.start()) {
                    $i.classed('fa-play', false).classed('fa-pause', true);
                } else {
                    that.pause();
                    $i.classed('fa-play', true).classed('fa-pause', false);
                }
            });
            $controls.select('[data-player="stop"]').on('click', function () {
                that.stop();
            });
            $controls.select('[data-player="forward"]').on('click', function () {
                that.forward();
            });
            $controls.select('[data-player="backward"]').on('click', function () {
                that.backward();
            });
            d3.select(document).on('keydown.playpause', function () {
                var k = d3.event;
                if (k.keyCode === 19) {
                    k.preventDefault();
                    var event = document.createEvent('MouseEvents');
                    event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    _this.$play.node().dispatchEvent(event);
                }
            });
        }
        Player.prototype.start = function () {
            var _this = this;
            var l = this.graph.getSlideChains();
            var act = this.graph.selectedSlides()[0] || l[l.length - 1];
            if (act) {
                this.render(act).then(function () {
                    _this.anim = setTimeout(_this.next.bind(_this), act.duration * exports.FACTOR);
                });
                return true;
            } else {
                return false;
            }
        };
        Player.prototype.render = function (story) {
            this.graph.selectSlide(story);
            return Promise.resolve(story);
        };
        Player.prototype.stopAnim = function () {
            if (this.anim >= 0) {
                clearTimeout(this.anim);
                this.anim = -1;
            }
        };
        Player.prototype.stop = function () {
            var _this = this;
            this.stopAnim();
            this.render(null).then(function () {
                _this.$play.classed('fa-play', true).classed('fa-pause', false);
            });
        };
        Player.prototype.pause = function () {
            this.stopAnim();
        };
        Player.prototype.next = function () {
            var _this = this;
            var r = this.forward();
            if (r) {
                r.then(function (act) {
                    _this.anim = setTimeout(_this.next.bind(_this), act.duration * exports.FACTOR);
                });
            }
        };
        Player.prototype.forward = function () {
            this.stopAnim();
            var current = this.graph.selectedSlides()[0];
            var act = current.next;
            if (act == null) {
                this.stop();
                return null;
            } else {
                return this.render(act);
            }
        };
        Player.prototype.backward = function () {
            this.stopAnim();
            var current = this.graph.selectedSlides()[0];
            var act = current.previous;
            if (act == null) {
                this.stop();
                return null;
            } else {
                return this.render(act);
            }
        };
        return Player;
    }();
    exports.Player = Player;
}(require, exports, require('../caleydo_core/main'), require('d3')));
},{"../caleydo_core/main":13,"d3":undefined}],44:[function(require,module,exports){
(function (require, exports, idtypes, events, provenance, C, ranges) {
    var disabler = new events.EventHandler();
    function select(inputs, parameter, graph, within) {
        var idtype = idtypes.resolve(parameter.idtype), range = ranges.parse(parameter.range), type = parameter.type;
        var bak = parameter.old ? ranges.parse(parameter.old) : idtype.selections(type);
        if (C.hash.is('debug')) {
            console.log('select', range.toString());
        }
        disabler.fire('disable-' + idtype.id);
        idtype.select(type, range);
        disabler.fire('enable-' + idtype.id);
        return createSelection(idtype, type, bak, range, parameter.animated).then(function (cmd) {
            return {
                inverse: cmd,
                consumed: parameter.animated ? within : 0
            };
        });
    }
    function capitalize(s) {
        return s.split(' ').map(function (d) {
            return d[0].toUpperCase() + d.slice(1);
        }).join(' ');
    }
    function meta(idtype, type, range) {
        var l = range.dim(0).length;
        var title = type === idtypes.defaultSelectionType ? '' : capitalize(type) + ' ';
        var p;
        if (l === 0) {
            title += 'no ' + idtype.names;
            p = Promise.resolve(title);
        } else if (l === 1) {
            title += idtype.name + ' ';
            p = idtype.unmap(range).then(function (r) {
                title += r[0];
                return title;
            });
        } else if (l < 3) {
            title += idtype.names + ' (';
            p = idtype.unmap(range).then(function (r) {
                title += r.join(', ') + ')';
                return title;
            });
        } else {
            title += range.dim(0).length + ' ' + idtype.names;
            p = Promise.resolve(title);
        }
        return p.then(function (title) {
            return provenance.meta(title, provenance.cat.selection);
        });
    }
    function createSelection(idtype, type, range, old, animated) {
        if (old === void 0) {
            old = null;
        }
        if (animated === void 0) {
            animated = false;
        }
        return meta(idtype, type, range).then(function (meta) {
            return {
                meta: meta,
                id: 'select',
                f: select,
                parameter: {
                    idtype: idtype.id,
                    range: range.toString(),
                    type: type,
                    old: old.toString(),
                    animated: animated
                }
            };
        });
    }
    exports.createSelection = createSelection;
    function compressSelection(path) {
        var lastByIDType = {};
        path.forEach(function (p) {
            if (p.f_id === 'select') {
                var para = p.parameter;
                lastByIDType[para.idtype + '@' + para.type] = p;
            }
        });
        return path.filter(function (p) {
            if (p.f_id !== 'select') {
                return true;
            }
            var para = p.parameter;
            return lastByIDType[para.idtype + '@' + para.type] === p;
        });
    }
    exports.compressSelection = compressSelection;
    var SelectionTypeRecorder = function () {
        function SelectionTypeRecorder(idtype, graph, type, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            this.idtype = idtype;
            this.graph = graph;
            this.type = type;
            this.options = options;
            this.l = function (event, type, sel, added, removed, old) {
                createSelection(_this.idtype, type, sel, old, _this.options.animated).then(function (cmd) {
                    return _this.graph.push(cmd);
                });
            };
            this._enable = this.enable.bind(this);
            this._disable = this.disable.bind(this);
            this.typeRecorders = [];
            if (this.type) {
                this.typeRecorders = this.type.split(',').map(function (ttype) {
                    var t = function (event, sel, added, removed, old) {
                        return _this.l(event, ttype, sel, added, removed, old);
                    };
                    return t;
                });
            }
            this.enable();
            disabler.on('enable-' + this.idtype.id, this._enable);
            disabler.on('disable-' + this.idtype.id, this._disable);
        }
        SelectionTypeRecorder.prototype.disable = function () {
            var _this = this;
            if (this.type) {
                this.type.split(',').forEach(function (ttype, i) {
                    _this.idtype.off('select-' + ttype, _this.typeRecorders[i]);
                });
            } else {
                this.idtype.off('select', this.l);
            }
        };
        SelectionTypeRecorder.prototype.enable = function () {
            var _this = this;
            if (this.type) {
                this.type.split(',').forEach(function (ttype, i) {
                    _this.idtype.on('select-' + ttype, _this.typeRecorders[i]);
                });
            } else {
                this.idtype.on('select', this.l);
            }
        };
        SelectionTypeRecorder.prototype.destroy = function () {
            this.disable();
            disabler.off('enable-' + this.idtype.id, this._enable);
            disabler.off('disable-' + this.idtype.id, this._disable);
        };
        return SelectionTypeRecorder;
    }();
    var SelectionRecorder = function () {
        function SelectionRecorder(graph, type, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            this.graph = graph;
            this.type = type;
            this.options = options;
            this.handler = [];
            this.adder = function (event, idtype) {
                if (_this.options.filter(idtype)) {
                    _this.handler.push(new SelectionTypeRecorder(idtype, _this.graph, _this.type, _this.options));
                }
            };
            this.options = C.mixin({
                filter: C.constantTrue,
                animated: false
            }, this.options);
            events.on('register.idtype', this.adder);
            idtypes.list().forEach(function (d) {
                _this.adder(null, d);
            });
        }
        SelectionRecorder.prototype.destroy = function () {
            events.off('register.idtype', this.adder);
            this.handler.forEach(function (h) {
                return h.destroy();
            });
            this.handler.length = 0;
        };
        return SelectionRecorder;
    }();
    exports.SelectionRecorder = SelectionRecorder;
    function create(graph, type, options) {
        if (options === void 0) {
            options = {};
        }
        return new SelectionRecorder(graph, type, options);
    }
    exports.create = create;
    function createCmd(id) {
        switch (id) {
        case 'select':
            return select;
        }
        return null;
    }
    exports.createCmd = createCmd;
}(require, exports, require('../caleydo_core/idtype'), require('../caleydo_core/event'), require('./main'), require('../caleydo_core/main'), require('../caleydo_core/range')));
},{"../caleydo_core/event":7,"../caleydo_core/idtype":9,"../caleydo_core/main":13,"../caleydo_core/range":20,"./main":40}],45:[function(require,module,exports){
(function (require, exports, html2canvas) {
    'use strict';
    window.html2canvas = html2canvas;
    function takeCanvas(element, size) {
        return html2canvas(element, {
            width: size ? size[0] : null,
            height: size ? size[1] : null
        });
    }
    exports.takeCanvas = takeCanvas;
    function createThumbnailCanvas(canvas, width) {
        if (width === void 0) {
            width = 64;
        }
        var elem = document.createElement('canvas');
        var height = Math.round(width / canvas.width * canvas.height);
        elem.width = width;
        elem.height = height;
        var ctx = elem.getContext('2d');
        ctx.drawImage(canvas, 0, 0, width, height);
        return elem;
    }
    exports.createThumbnailCanvas = createThumbnailCanvas;
    function toString(canvas) {
        return canvas.toDataURL('image/png');
    }
    exports.toString = toString;
    function createThumbnail(canvas, width) {
        if (width === void 0) {
            width = 64;
        }
        return toString(createThumbnailCanvas(canvas, width));
    }
    exports.createThumbnail = createThumbnail;
    function take(element, size) {
        return takeCanvas(element).then(toString);
    }
    exports.take = take;
    function create() {
        return {
            takeCanvas: takeCanvas,
            take: take
        };
    }
    exports.create = create;
}(require, exports, require('html2canvas')));
},{"html2canvas":undefined}],46:[function(require,module,exports){
(function (require, exports, ajax, session) {
    function login(username, password, remember) {
        if (remember === void 0) {
            remember = false;
        }
        return ajax.send('/login', {
            username: username,
            password: password,
            remember: remember
        }, 'post').then(function (user) {
            session.store('user', user.name);
            session.store('user_obj', user);
            return user;
        }).catch(function (error) {
            session.remove('user');
            session.remove('user_obj');
        });
    }
    exports.login = login;
    function logout() {
        return ajax.send('/logout', {}, 'post').then(function (user) {
            session.remove('user');
            session.remove('user_obj');
        });
    }
    exports.logout = logout;
    function bindLoginForm(form, callback) {
        ajax.getJSON('/loggedinas').then(function (user) {
            return callback(null, user);
        }).catch(function (error) {
        });
        form.onsubmit = function (event) {
            var username = form.login_username.value;
            var password = form.login_password.value;
            var rememberMe = form.login_remember.checked;
            login(username, password, rememberMe).then(function (user) {
                return callback(null, user);
            }).catch(function (error) {
                return callback(error, null);
            });
            event.stopPropagation();
            event.preventDefault();
        };
    }
    exports.bindLoginForm = bindLoginForm;
}(require, exports, require('../caleydo_core/ajax'), require('../caleydo_core/session')));
},{"../caleydo_core/ajax":3,"../caleydo_core/session":21}],47:[function(require,module,exports){
var m_css = require('css'), pluginValue0;
m_css.load('./style', function () {
}, function (r) {
    pluginValue0 = r;
});
(function (require, exports, d3) {
    function getTooltip() {
        var t = d3.select('body > div.tooltip');
        if (t.empty()) {
            t = d3.select('body').append('div').attr('class', 'tooltip').style('display', 'block').style('opacity', 0);
        }
        return t;
    }
    function bind(toLabel, delay) {
        if (delay === void 0) {
            delay = 200;
        }
        var labelfor = d3.functor(toLabel);
        return function (selection) {
            selection.on('mouseenter.tooltip', function (d, i) {
                var tooltip = getTooltip();
                tooltip.html(labelfor.call(this, d, i)).style('left', d3.event.pageX + 5 + 'px').style('top', d3.event.pageY - 28 + 'px');
                tooltip.style('display', 'block').interrupt().transition().delay(delay).duration(200).style('opacity', 0.9);
            }).on('mouseleave.tooltip', function () {
                var tooltip = getTooltip();
                tooltip.interrupt().transition().duration(200).style('opacity', 0).each('end', function () {
                    d3.select(this).style('display', 'none');
                });
            });
        };
    }
    exports.bind = bind;
}(require, exports, require('d3'), pluginValue0));
},{"css":undefined,"d3":undefined}],48:[function(require,module,exports){
var m_css = require('css'), pluginValue0;
m_css.load('./style', function () {
}, function (r) {
    pluginValue0 = r;
});
(function (exports, d3, C, utils) {
    exports.Axis = utils.defineVis('Axis', {
        shift: 10,
        tickSize: 2,
        orient: 'left',
        r: 2
    }, [
        50,
        300
    ], function ($parent, data, size) {
        var o = this.options, that = this;
        var $svg = $parent.append('svg').attr({
            width: size[0],
            height: size[1],
            'class': 'axis'
        });
        $svg.data(this);
        var $root = $svg.append('g');
        var $axis = this.$axis = $root.append('g').attr('class', 'makeover');
        var $points = this.$points = $root.append('g');
        var s = this.scale = d3.scale.linear().domain(data.desc.value.range).range([
            o.shift,
            (o.orient === 'left' || o.orient === 'right' ? size[1] : size[0]) - o.shift
        ]).clamp(true);
        var axis = this.axis = d3.svg.axis().tickSize(o.tickSize).orient(o.orient).scale(s);
        switch (o.orient) {
        case 'left':
            $points.attr('transform', 'translate(' + (size[0] - o.shift) + ',0)');
            $axis.attr('transform', 'translate(' + (size[0] - o.shift) + ',0)');
            break;
        case 'right':
            $points.attr('transform', 'translate(' + o.shift + ',0)');
            $axis.attr('transform', 'translate(' + o.shift + ',0)');
            break;
        case 'top':
            $points.attr('transform', 'translate(0, ' + o.shift + ')');
            $axis.attr('transform', 'translate(0,' + o.shift + ')');
            break;
        case 'bottom':
            $points.attr('transform', 'translate(0, ' + (size[1] - o.shift) + ')');
            $axis.attr('transform', 'translate(0,' + (size[1] - o.shift) + ')');
            break;
        }
        $axis.call(axis);
        var onClick = utils.selectionUtil(this.data, $points, 'circle');
        var cxy = o.orient === 'left' || o.orient === 'right' ? 'cy' : 'cx';
        data.data().then(function (arr) {
            var $p = $points.selectAll('circle').data(arr);
            $p.enter().append('circle').attr('r', o.r).on('click', onClick);
            $p.exit().remove();
            $p.attr(cxy, s);
            that.markReady();
        });
        return $svg;
    }, {
        locateImpl: function (range) {
            var that = this;
            if (range.isAll || range.isNone) {
                var r = this.scale.range();
                return Promise.resolve(that.wrap({
                    y: r[0],
                    h: r[1] - r[0]
                }));
            }
            return this.data.data(range).then(function (data) {
                var ex = d3.extent(data, that.scale);
                return that.wrap({
                    y: ex[0],
                    h: ex[1] - ex[0]
                });
            });
        },
        transform: function (scale, rotate) {
            var bak = {
                scale: this.options.scale || [
                    1,
                    1
                ],
                rotate: this.options.rotate || 0
            };
            if (arguments.length === 0) {
                return bak;
            }
            var o = this.options;
            var size = this.rawSize;
            this.$node.attr({
                width: size[0] * scale[0],
                height: size[1] * scale[1]
            }).style('transform', 'rotate(' + rotate + 'deg)');
            this.scale.range([
                o.shift,
                (o.orient === 'left' || o.orient === 'right' ? size[1] * scale[1] : size[0] * scale[0]) - o.shift
            ]);
            var cxy = o.orient === 'left' || o.orient === 'right' ? 'cy' : 'cx';
            this.$points.selectAll('circle').attr(cxy, this.scale);
            this.$axis.call(this.axis);
            var new_ = {
                scale: scale,
                rotate: rotate
            };
            this.fire('transform', new_, bak);
            this.options.scale = scale;
            this.options.rotate = rotate;
            return new_;
        },
        wrap: function (base) {
            var s = this.rawSize;
            switch (this.options.orient) {
            case 'left':
                base.x = s[0] - this.options.shift;
                base.w = 0;
                break;
            case 'right':
                base.x = this.options.shift;
                base.w = 0;
                break;
            case 'top':
                base.x = base.y;
                base.w = base.h;
                base.y = this.options.shift;
                base.h = 0;
                break;
            case 'bottom':
                base.x = base.y;
                base.w = base.h;
                base.y = s[1] - this.options.shift;
                base.h = 0;
                break;
            }
            base.x -= this.options.r;
            base.y -= this.options.r;
            base.w += 2 * this.options.r;
            base.h += 2 * this.options.r;
            return base;
        }
    });
    function create(data, parent, options) {
        return new exports.Axis(data, parent, options);
    }
    exports.create = create;
}(exports, require('d3'), require('../caleydo_core/main'), require('../caleydo_d3/d3util'), pluginValue0));
},{"../caleydo_core/main":13,"../caleydo_d3/d3util":31,"css":undefined,"d3":undefined}],49:[function(require,module,exports){
var m_css = require('css'), pluginValue0;
m_css.load('./style', function () {
}, function (r) {
    pluginValue0 = r;
});
(function (exports, d3, C, idtypes, geom, d3utils) {
    exports.BarPlot = d3utils.defineVis('BarPLot', {
        cssClass: '',
        width: 100,
        heighti: 10,
        min: 0,
        max: NaN
    }, function (data) {
        return [
            this.options.width,
            data.dim[0] * this.options.heighti
        ];
    }, function ($parent, data, size) {
        var o = this.options, that = this;
        var $svg = $parent.append('svg').attr({
            width: size[0],
            height: size[1],
            'class': 'barplot ' + o.cssClass
        });
        var xscale = that.xscale = d3.scale.linear().range([
            0,
            100
        ]);
        var yscale = that.yscale = d3.scale.linear().range([
            0,
            100
        ]);
        var onClick = function (d, i) {
            data.select(0, [i], idtypes.toSelectOperation(d3.event));
        };
        var l = function (event, type, selected) {
            $svg.selectAll('rect').classed('select-' + type, false);
            if (selected.isNone) {
                return;
            }
            var dim0 = selected.dim(0);
            if (selected.isAll) {
                $svg.selectAll('rect').classed('select-' + type, true);
            } else {
                dim0.forEach(function (j) {
                    $svg.selectAll('rect:nth-child(' + (j + 1) + ')').classed('select-' + type, true);
                });
            }
        };
        data.on('select', l);
        C.onDOMNodeRemoved($svg.node(), function () {
            data.off('select', l);
        });
        data.data().then(function (_data) {
            yscale.domain([
                0,
                data.length
            ]);
            if (isNaN(o.min) || isNaN(o.max)) {
                var minmax = d3.extent(_data);
                if (isNaN(o.min)) {
                    o.min = minmax[0];
                }
                if (isNaN(o.max)) {
                    o.max = minmax[1];
                }
            }
            xscale.domain([
                o.min,
                o.max
            ]);
            var $m = $svg.selectAll('rect').data(_data);
            $m.enter().append('rect').on('click', onClick);
            $m.attr({
                y: function (d, i) {
                    return yscale(i);
                },
                height: function (d) {
                    return yscale(1);
                },
                width: function (d) {
                    return xscale(d);
                }
            });
            that.markReady();
            data.selections().then(function (selected) {
                l(null, 'selected', selected);
            });
        });
        return $svg;
    }, {
        locateIt: function (range) {
            var o = this.options, that = this;
            var ex_i = d3.extent(range.dim(0).iter().asList());
            return this.data.data(range).then(function (data) {
                var ex_v = d3.extent(data);
                return geom.rect(that.xscale(ex_v[0]) / 100 * o.width, ex_i[0] * o.heighti, that.xscale(ex_v[1]) / 100 * o.width, (ex_i[1] + 1) * o.heighti);
            });
        }
    });
    exports.create = function createBarPlot(data, parent, options) {
        return new exports.BarPlot(data, parent, options);
    };
}(exports, require('d3'), require('../caleydo_core/main'), require('../caleydo_core/idtype'), require('../caleydo_core/geom'), require('../caleydo_d3/d3util'), pluginValue0));
},{"../caleydo_core/geom":8,"../caleydo_core/idtype":9,"../caleydo_core/main":13,"../caleydo_d3/d3util":31,"css":undefined,"d3":undefined}],50:[function(require,module,exports){
var m_css = require('css'), pluginValue0;
m_css.load('./style', function () {
}, function (r) {
    pluginValue0 = r;
});
(function (exports, d3, tooltip, C, d3utils) {
    function createText(stats) {
        var r = '<table><tbody>';
        var keys = [
            'min',
            'max',
            'sum',
            'mean',
            'var',
            'sd',
            'n',
            'nans',
            'moment2',
            'moment3',
            'moment4',
            'kurtosis',
            'skewness'
        ];
        keys.forEach(function (key) {
            var value = stats[key];
            r = r + '<tr><td>' + key + '</td><td>' + value + '</td></tr>';
        });
        r = r + '</tbody></table>';
        return r;
    }
    exports.BoxPlot = d3utils.defineVis('BoxPlot', {}, [
        300,
        50
    ], function ($parent, data, size) {
        var $svg = $parent.append('svg').attr({
            width: size[0],
            height: size[1],
            'class': 'box'
        });
        var $t = $svg.append('g');
        var s = this.scale = d3.scale.linear().domain(this.data.desc.value.range).range([
            0,
            size[0]
        ]).clamp(true);
        $t.append('path').attr({
            d: 'M0,0 L0,$ M0,\xA7 L%,\xA7 M%,0 L%,$'.replace(/%/g, size[0]).replace(/\$/g, size[1]).replace(/\§/g, size[1] / 2),
            'class': 'axis'
        });
        var that = this;
        data.stats().then(function (stats) {
            var text = createText(stats);
            $t.append('rect').attr({
                x: s(stats.mean - stats.sd),
                y: '10%',
                width: s(stats.sd * 2),
                height: '80%',
                'class': 'box'
            }).call(tooltip.bind(text));
            $t.append('line').attr({
                x1: s(stats.mean),
                x2: s(stats.mean),
                y1: '10%',
                y2: '90%',
                'class': 'mean'
            });
            that.markReady();
        });
        return $svg;
    }, {
        locateIt: function (range) {
            var that = this;
            if (range.isAll || range.isNone) {
                var r = this.scale.range();
                return {
                    x: r[0],
                    w: r[1] - r[0],
                    y: 0,
                    h: 50
                };
            }
            return this.data.data(range).then(function (data) {
                var ex = d3.extent(data, that.scale);
                return {
                    x: ex[0],
                    w: ex[1] - ex[0],
                    y: 0,
                    h: 50
                };
            });
        }
    });
    function create(data, parent) {
        return new exports.BoxPlot(data, parent);
    }
    exports.create = create;
}(exports, require('d3'), require('../caleydo_tooltip/main'), require('../caleydo_core/main'), require('../caleydo_d3/d3util'), pluginValue0));
},{"../caleydo_core/main":13,"../caleydo_d3/d3util":31,"../caleydo_tooltip/main":47,"css":undefined,"d3":undefined}],51:[function(require,module,exports){
(function (exports, d3, C, idtypes, tooltip, d3utils) {
    function createCategoricalHistData(hist) {
        var categories = hist.categories, cols = hist.colors || d3.scale.category10().range(), total = hist.validCount;
        var data = [], acc = 0;
        hist.forEach(function (b, i) {
            data[i] = {
                v: b,
                acc: acc,
                ratio: b / total,
                range: hist.range(i),
                name: typeof categories[i] === 'string' ? categories[i] : categories[i].name,
                color: categories[i].color === undefined ? cols[i] : categories[i].color
            };
            acc += b;
        });
        return data;
    }
    function createNumericalHistData(hist, range) {
        var data = [], cols = d3.scale.linear().domain(range).range([
                '#111111',
                '#999999'
            ]), total = hist.validCount, binWidth = (range[1] - range[0]) / hist.bins, acc = 0;
        hist.forEach(function (b, i) {
            data[i] = {
                v: b,
                acc: acc,
                ratio: b / total,
                range: hist.range(i),
                name: 'Bin ' + (i + 1) + ' (center: ' + d3.round((i + 0.5) * binWidth, 2) + ')',
                color: cols((i + 0.5) * binWidth)
            };
            acc += b;
        });
        return data;
    }
    function createHistData(hist, desc, data) {
        if (desc.type === 'stratification') {
            return createCategoricalHistData(hist);
        }
        if (data.valuetype.type === 'categorical') {
            return createCategoricalHistData(hist);
        }
        return createNumericalHistData(hist, data.valuetype.range);
    }
    function resolveHistMax(hist, totalHeight) {
        var op = d3.functor(totalHeight);
        return Promise.resolve(op(hist)).then(function (r) {
            if (r === true) {
                return hist.validCount;
            }
            if (r === false) {
                return hist.largestBin;
            }
            return r;
        });
    }
    exports.Histogram = d3utils.defineVis('HistogramVis', function (data) {
        return {
            nbins: Math.floor(Math.sqrt(data.desc.type === 'matrix' ? data.ncol * data.nrow : data.length)),
            total: true,
            duration: 200
        };
    }, [
        200,
        100
    ], function ($parent, data, size) {
        var o = this.options, that = this;
        var $svg = $parent.append('svg').attr({
            width: size[0],
            height: size[1],
            'class': 'histogram'
        });
        var $t = $svg.append('g');
        var $data = $t.append('g');
        var $highlight = $t.append('g').style('pointer-events', 'none').classed('select-selected', true);
        var xscale = that.xscale = d3.scale.ordinal().rangeBands([
            0,
            size[0]
        ], 0.1);
        var yscale = that.yscale = d3.scale.linear().range([
            0,
            size[1]
        ]);
        var l = function (event, type, selected) {
            if (!that.hist_data) {
                return;
            }
            var highlights = that.hist_data.map(function (entry, i) {
                var s = entry.range.intersect(selected);
                return {
                    i: i,
                    v: s.size()[0]
                };
            }).filter(function (entry) {
                return entry.v > 0;
            });
            var $m = $highlight.selectAll('rect').data(highlights);
            $m.enter().append('rect').attr('width', xscale.rangeBand());
            $m.attr({
                x: function (d) {
                    return xscale(d.i);
                },
                y: function (d) {
                    return yscale(yscale.domain()[1] - d.v);
                },
                height: 0
            });
            $m.transition().duration(o.duration).attr('height', function (d) {
                return yscale(d.v);
            });
            $m.exit().remove();
        };
        data.on('select', l);
        C.onDOMNodeRemoved($data.node(), function () {
            data.off('select', l);
        });
        var onClick = function (d) {
            data.select(0, d.range, idtypes.toSelectOperation(d3.event));
        };
        this.data.hist(Math.floor(o.nbins)).then(function (hist) {
            that.hist = hist;
            xscale.domain(d3.range(hist.bins));
            return resolveHistMax(hist, that.options.total);
        }).then(function (hist_max) {
            var hist = that.hist;
            yscale.domain([
                0,
                hist_max
            ]);
            var hist_data = that.hist_data = createHistData(hist, that.data.desc, that.data);
            var $m = $data.selectAll('rect').data(hist_data);
            $m.enter().append('rect').attr('width', xscale.rangeBand()).call(tooltip.bind(function (d) {
                return d.name + ' ' + d.v + ' entries (' + Math.round(d.ratio * 100) + '%)';
            })).on('click', onClick);
            $m.attr({
                x: function (d, i) {
                    return xscale(i);
                },
                fill: function (d) {
                    return d.color;
                },
                y: function (d) {
                    return yscale(yscale.domain()[1] - d.v);
                },
                height: function (d) {
                    return yscale(d.v);
                }
            });
            that.markReady();
            data.selections().then(function (selected) {
                l(null, 'selected', selected);
            });
        });
        return $svg;
    }, {
        locateImpl: function (range) {
            var that = this, size = this.rawSize;
            if (range.isAll || range.isNone) {
                return Promise.resolve({
                    x: 0,
                    y: 0,
                    w: size[0],
                    h: size[1]
                });
            }
            return this.data.data(range).then(function (data) {
                var ex = d3.extent(data, function (value) {
                    return that.hist.binOf(value);
                });
                var h0 = that.hist_data[ex[0]];
                var h1 = that.hist_data[ex[1]];
                return Promise.resolve({
                    x: that.xscale(ex[0]),
                    width: that.xscale(ex[1]) - that.xscale(ex[0]) + that.xscale.rangeBand(),
                    height: that.yscale(Math.max(h0.v, h1.v)),
                    y: that.yscale(that.yscale.domain()[1] - Math.max(h0.v, h1.v))
                });
            });
        }
    });
    exports.Mosaic = d3utils.defineVis('MosaicVis', {
        width: 20,
        initialScale: 10,
        duration: 200,
        heightTo: null,
        selectAble: true
    }, function (data) {
        return [
            this.options.width,
            data.dim[0]
        ];
    }, function ($parent, data, size) {
        var o = this.options, that = this;
        var $svg = $parent.append('svg').attr({
            width: size[0],
            height: size[1],
            'class': 'mosaic'
        });
        var $scale = $svg.append('g').attr('transform', 'scale(' + o.scale[0] + ',' + o.scale[1] + ')');
        var $data = $scale.append('g');
        var $highlight = $scale.append('g').style('pointer-events', 'none').classed('select-selected', true);
        var l = function (event, type, selected) {
            if (!that.hist_data) {
                return;
            }
            var highlights = that.hist_data.map(function (entry, i) {
                var s = entry.range.intersect(selected);
                return {
                    i: i,
                    acc: entry.acc,
                    v: s.size()[0]
                };
            }).filter(function (entry) {
                return entry.v > 0;
            });
            var $m = $highlight.selectAll('rect').data(highlights);
            $m.enter().append('rect').attr('width', '100%').classed('select-selected', true);
            $m.attr({
                y: function (d) {
                    return d.acc;
                },
                height: function (d) {
                    return d.v;
                }
            }).style('opacity', 0);
            $m.transition().duration(o.duration).style('opacity', 1);
            $m.exit().remove();
        };
        if (o.selectAble) {
            data.on('select', l);
            C.onDOMNodeRemoved($data.node(), function () {
                data.off('select', l);
            });
        }
        var onClick = o.selectAble ? function (d) {
            data.select(0, d.range, idtypes.toSelectOperation(d3.event));
        } : null;
        this.data.hist(Math.floor(o.nbins)).then(function (hist) {
            that.hist = hist;
            var hist_data = that.hist_data = createHistData(hist, data.desc, data);
            var $m = $data.selectAll('rect').data(hist_data);
            $m.enter().append('rect').attr('width', '100%').call(tooltip.bind(function (d) {
                return d.name + ' ' + d.v + ' entries (' + Math.round(d.ratio * 100) + '%)';
            })).on('click', onClick);
            $m.attr({
                y: function (d) {
                    return d.acc;
                },
                height: function (d) {
                    return d.v;
                },
                fill: function (d) {
                    return d.color;
                }
            });
            that.fire('built');
            that.markReady();
            if (o.selectAble) {
                data.selections().then(function (selected) {
                    l(null, 'selected', selected);
                });
            }
        });
        return $svg;
    }, {
        init: function () {
            this.options.scale = [
                1,
                this.options.initialScale
            ];
            if (this.options.heightTo) {
                this.options.scale[1] = this.options.heightTo / this.data.dim[0];
            }
        },
        locateIt: function locateIt(range) {
            var that = this;
            if (range.isAll || range.isNone) {
                return Promise.resolve({
                    x: 0,
                    y: 0,
                    w: this.rawSize[0],
                    h: this.data.length
                });
            }
            return this.data.data(range).then(function (data) {
                var ex = d3.extent(data, function (value) {
                    return that.hist.binOf(value);
                });
                var h0 = that.hist_data[ex[0]];
                var h1 = that.hist_data[ex[1]];
                var y = Math.min(h0.acc, h1.acc);
                var y2 = Math.max(h0.acc + h0.v, h1.acc + h1.v);
                return Promise.resolve({
                    x: 0,
                    width: that.rawSize[0],
                    height: y2 - y,
                    y: y
                });
            });
        }
    });
    function toPolygon(start, end, radius) {
        var r = [
            {
                x: radius,
                y: radius
            },
            {
                x: radius + Math.cos(start) * radius,
                y: radius + Math.sin(start) * radius
            },
            {
                x: radius + Math.cos(end) * radius,
                y: radius + Math.sin(end) * radius
            }
        ];
        if (end - start > Math.PI) {
            r.splice(2, 0, {
                x: radius + Math.cos((end - start) * 0.5) * radius,
                y: radius + Math.sin((end - start) * 0.5) * radius
            });
        }
        return geom.polygon(r);
    }
    exports.Pie = d3utils.defineVis('Pie', {
        radius: 50,
        innerRadius: 0,
        duration: 200,
        total: true
    }, function () {
        var r = this.options.radius;
        return [
            r * 2,
            r * 2
        ];
    }, function ($parent, data, size) {
        var o = this.options, that = this;
        var $svg = $parent.append('svg').attr({
            width: size[0],
            height: size[1],
            'class': 'pie'
        });
        var $base = $svg.append('g').attr('transform', 'translate(' + o.radius + ',' + o.radius + ')');
        var $data = $base.append('g');
        var $highlight = $base.append('g').style('pointer-events', 'none').classed('select-selected', true);
        var scale = this.scale = d3.scale.linear().range([
            0,
            2 * Math.PI
        ]);
        var arc = this.arc = d3.svg.arc().innerRadius(o.innerRadius).outerRadius(o.radius).startAngle(function (d) {
            return scale(d.start);
        }).endAngle(function (d) {
            return scale(d.end);
        });
        var l = function (event, type, selected) {
            if (!that.hist_data) {
                return;
            }
            var highlights = that.hist_data.map(function (entry) {
                var s = entry.range.intersect(selected);
                return {
                    start: entry.start,
                    end: entry.start + s.size()[0]
                };
            }).filter(function (entry) {
                return entry.start < entry.end;
            });
            var $m = $highlight.selectAll('path').data(highlights);
            $m.enter().append('path');
            $m.exit().remove();
            $m.attr('d', arc);
        };
        data.on('select', l);
        C.onDOMNodeRemoved($data.node(), function () {
            data.off('select', l);
        });
        data.hist().then(function (hist) {
            that.hist = hist;
            return resolveHistMax(hist, that.options.total);
        }).then(function (total) {
            var hist = that.hist;
            scale.domain([
                0,
                total
            ]);
            var hist_data = that.hist_data = [], prev = 0, cats = hist.categories;
            var cols = hist.colors || d3.scale.category10().range();
            hist.forEach(function (b, i) {
                hist_data[i] = {
                    name: typeof cats[i] === 'string' ? cats[i] : cats[i].name,
                    start: prev,
                    size: b,
                    ratio: b / total,
                    end: prev + b,
                    color: cats[i].color === undefined ? cols[i] : cats[i].color,
                    range: hist.range(i)
                };
                prev += b;
            });
            var $m = $data.selectAll('path').data(hist_data);
            $m.enter().append('path').call(tooltip.bind(function (d) {
                return d.name + ' ' + d.size + ' entries (' + Math.round(d.ratio * 100) + '%)';
            })).on('click', function (d) {
                data.select(0, d.range, idtypes.toSelectOperation(d3.event));
            });
            $m.attr('d', arc).attr('fill', function (d) {
                return d.color;
            }).style('opacity', 0);
            $m.transition().duration(o.duration).delay(function (d, i) {
                return i * o.duration;
            }).style('opacity', 1);
            that.markReady();
            data.selections().then(function (selected) {
                l(null, 'selected', selected);
            });
        });
        return $svg;
    }, {
        locateIt: function (range) {
            var that = this, o = this.options;
            if (range.isAll || range.isNone) {
                return Promise.resolve({
                    x: o.radius,
                    y: o.radius,
                    radius: o.radius
                });
            }
            return this.data.data(range).then(function (data) {
                var ex = d3.extent(data, function (value) {
                    return that.hist.binOf(value);
                });
                var startAngle = that.scale(that.hist_data[ex[0]].start);
                var endAngle = that.scale(that.hist_data[ex[1]].end);
                return Promise.resolve(toPolygon(startAngle, endAngle, o.radius));
            });
        },
        updatedOption: function (name, value) {
            if (name === 'innerRadius' || name === 'radius' || name === 'total') {
                this.updateVis();
            }
        },
        updateVis: function () {
            var o = this.options;
            this.arc.innerRadius(o.innerRadius).outerRadius(o.radius);
            this.scale.domain([
                0,
                o.total || this.hist.count
            ]);
            $svg.selectAll('path').transition().attr('d', this.arc);
        },
        transform: function (scale, rotate) {
            var bak = {
                scale: this.options.scale || [
                    1,
                    1
                ],
                rotate: this.options.rotate || 0
            };
            if (arguments.length === 0) {
                return bak;
            }
            this.$node.attr({
                width: this.options.radius * 2 * scale[0],
                height: this.options.radius * 2 * scale[1]
            }).style('transform', 'rotate(' + rotate + 'deg)');
            this.$node.select('g').attr('transform', 'scale(' + scale[0] + ',' + scale[1] + ')translate(' + this.options.radius + ',' + this.options.radius + ')');
            var new_ = {
                scale: scale,
                rotate: rotate
            };
            this.fire('transform', new_, bak);
            this.options.scale = scale;
            this.options.rotate = rotate;
            return new_;
        }
    });
    exports.create = function createHistogram(data, parent, options) {
        return new exports.Histogram(data, parent, options);
    };
    exports.createMosaic = function createMosaic(data, parent, options) {
        return new exports.Mosaic(data, parent, options);
    };
    exports.createPie = function createPie(data, parent, options) {
        return new exports.Pie(data, parent, options);
    };
}(exports, require('d3'), require('../caleydo_core/main'), require('../caleydo_core/idtype'), require('../caleydo_tooltip/main'), require('../caleydo_d3/d3util')));
},{"../caleydo_core/idtype":9,"../caleydo_core/main":13,"../caleydo_d3/d3util":31,"../caleydo_tooltip/main":47,"d3":undefined}],52:[function(require,module,exports){
var m_css = require('css'), pluginValue0;
m_css.load('./style', function () {
}, function (r) {
    pluginValue0 = r;
});
(function (require, exports, d3, d3utils, vis, idtypes, geom, ranges, C) {
    'use strict';
    function defaultColor(value) {
        if (value.type === 'categorical') {
            return value.categories.map(function (c) {
                return c.color;
            });
        }
        var r = value.range;
        if (r[0] < 0 && r[1] > 0) {
            return [
                'blue',
                'white',
                'red'
            ];
        }
        return [
            'white',
            'red'
        ];
    }
    function defaultDomain(value) {
        if (value.type === 'categorical') {
            return value.categories.map(function (c) {
                return c.name;
            });
        }
        var r = value.range;
        if (r[0] < 0 && r[1] > 0) {
            return [
                Math.min(r[0], -r[1]),
                Math.max(-r[0], r[1])
            ];
        }
        return r;
    }
    function toScale(value) {
        if (value.type === 'categorical') {
            return d3.scale.ordinal();
        }
        return d3.scale.linear();
    }
    var HeatMapDOMRenderer = function () {
        function HeatMapDOMRenderer(selectAble) {
            if (selectAble === void 0) {
                selectAble = true;
            }
            this.selectAble = selectAble;
        }
        HeatMapDOMRenderer.prototype.rescale = function ($node, dim, scale) {
            $node.attr({
                width: dim[1] * scale[0],
                height: dim[0] * scale[1]
            });
            $node.select('g').attr('transform', 'scale(' + scale[0] + ',' + scale[1] + ')');
        };
        HeatMapDOMRenderer.prototype.recolor = function ($node, data, color, scale) {
            this.color = color;
            $node.selectAll('rect').attr('fill', function (d) {
                return color(d);
            });
        };
        HeatMapDOMRenderer.prototype.redraw = function ($node, scale) {
            var _this = this;
            $node.selectAll('rect').attr('fill', function (d) {
                return _this.color(d);
            });
        };
        HeatMapDOMRenderer.prototype.build = function (data, $parent, scale, c, onReady) {
            var dims = data.dim, that = this;
            var width = dims[1], height = dims[0];
            var $svg = $parent.append('svg').attr({
                width: width * scale[0],
                height: height * scale[1],
                'class': 'heatmap'
            });
            var $g = $svg.append('g').attr('transform', 'scale(' + scale[0] + ',' + scale[1] + ')');
            this.color = c;
            data.data().then(function (arr) {
                var $rows = $g.selectAll('g').data(arr);
                $rows.enter().append('g').each(function (row, i) {
                    var $cols = d3.select(this).selectAll('rect').data(row);
                    var $cols_enter = $cols.enter().append('rect').attr({
                        width: 1,
                        height: 1,
                        x: function (d, j) {
                            return j;
                        },
                        y: i,
                        fill: function (d) {
                            return c(d);
                        }
                    });
                    if (that.selectAble) {
                        $cols_enter.on('click', function (d, j) {
                            data.select([
                                [i],
                                [j]
                            ], idtypes.toSelectOperation(d3.event));
                        });
                    }
                    $cols_enter.append('title').text(String);
                });
                onReady();
            });
            var l = function (event, type, selected) {
                $g.selectAll('rect').classed('select-' + type, false);
                if (selected.isNone) {
                    return;
                }
                var dim0 = selected.dim(0), dim1 = selected.dim(1);
                if (selected.isAll) {
                    $g.selectAll('rect').classed('select-' + type, true);
                } else if (dim0.isAll || dim0.isNone) {
                    dim1.forEach(function (j) {
                        $g.selectAll('g > rect:nth-child(' + (j + 1) + ')').classed('select-' + type, true);
                    });
                } else if (dim1.isAll || dim1.isNone) {
                    dim0.forEach(function (i) {
                        $g.selectAll('g:nth-child(' + (i + 1) + ') > rect').classed('select-' + type, true);
                    });
                } else {
                    dim0.forEach(function (i) {
                        var row = $g.select('g:nth-child(' + (i + 1) + ')');
                        dim1.forEach(function (j) {
                            row.select('rect:nth-child(' + (j + 1) + ')').classed('select-' + type, true);
                        });
                    });
                }
            };
            if (this.selectAble) {
                data.on('select', l);
                C.onDOMNodeRemoved($g.node(), function () {
                    data.off('select', l);
                });
                data.selections().then(function (selected) {
                    l(null, 'selected', selected);
                });
            }
            return $svg;
        };
        return HeatMapDOMRenderer;
    }();
    var AHeatMapCanvasRenderer = function () {
        function AHeatMapCanvasRenderer(selectAble) {
            if (selectAble === void 0) {
                selectAble = true;
            }
            this.selectAble = selectAble;
        }
        AHeatMapCanvasRenderer.prototype.rescale = function ($node, dim, scale) {
            var _this = this;
            $node.selectAll('canvas.heatmap-selection').attr({
                width: dim[1] * scale[0],
                height: dim[0] * scale[1]
            });
            if (this.selectAble) {
                $node.datum().selections().then(function (selected) {
                    _this.redrawSelection($node.select('canvas.heatmap-selection').node(), dim, 'selected', selected);
                });
            }
        };
        AHeatMapCanvasRenderer.prototype.redrawSelection = function (canvas, dim, type, selected) {
            var ctx = canvas.getContext('2d');
            ctx.save();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'orange';
            if (selected.isNone) {
                ctx.restore();
                return;
            }
            if (selected.isAll) {
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.restore();
                return;
            }
            var dim0 = selected.dim(0), dim1 = selected.dim(1);
            ctx.scale(canvas.width / dim[1], canvas.height / dim[0]);
            if (dim0.isAll || dim0.isNone) {
                dim1.forEach(function (j) {
                    ctx.fillRect(j, 0, 1, dim[0]);
                });
            } else if (dim1.isAll || dim1.isNone) {
                dim0.forEach(function (i) {
                    ctx.fillRect(0, i, dim[1], 1);
                });
            } else {
                dim0.forEach(function (i) {
                    dim1.forEach(function (j) {
                        ctx.fillRect(j, i, 1, 1);
                    });
                });
            }
            ctx.restore();
        };
        AHeatMapCanvasRenderer.prototype.buildSelection = function (data, $root, scale) {
            var _this = this;
            if (!this.selectAble) {
                return;
            }
            var dims = data.dim;
            var width = dims[1], height = dims[0];
            var $selection = $root.append('canvas').attr({
                width: width * scale[0],
                height: height * scale[1],
                'class': 'heatmap-selection'
            });
            var toCoord = function (evt) {
                var c = $selection.node(), rect = c.getBoundingClientRect();
                var x = evt.clientX - rect.left, y = evt.clientY - rect.top;
                var i = Math.floor(width * x / c.width), j = Math.floor(height * y / c.height);
                return [
                    j,
                    i
                ];
            };
            $selection.on('click', function () {
                var ij = toCoord(d3.event);
                data.select([
                    [ij[0]],
                    [ij[1]]
                ], idtypes.toSelectOperation(d3.event));
            });
            var l = function (event, type, selected) {
                _this.redrawSelection($selection.node(), dims, type, selected);
            };
            data.on('select', l);
            C.onDOMNodeRemoved($selection.node(), function () {
                data.off('select', l);
            });
            data.selections().then(function (selected) {
                _this.redrawSelection($selection.node(), dims, 'selected', selected);
            });
        };
        return AHeatMapCanvasRenderer;
    }();
    var HeatMapCanvasRenderer = function (_super) {
        __extends(HeatMapCanvasRenderer, _super);
        function HeatMapCanvasRenderer(selectAble) {
            if (selectAble === void 0) {
                selectAble = true;
            }
            _super.call(this, selectAble);
            this.ready = false;
        }
        HeatMapCanvasRenderer.prototype.rescale = function ($node, dim, scale) {
            $node.selectAll('canvas').attr({
                width: dim[1] * scale[0],
                height: dim[0] * scale[1]
            });
            if (this.ready) {
                this.redrawImpl(this.imageData, $node, scale);
            }
            _super.prototype.rescale.call(this, $node, dim, scale);
        };
        HeatMapCanvasRenderer.prototype.redraw = function ($node, scale) {
            if (this.ready) {
                this.redrawImpl(this.imageData, $node, scale);
            }
        };
        HeatMapCanvasRenderer.prototype.recolor = function ($node, data, color, scale) {
            var _this = this;
            var rgba = this.imageData.data;
            if (this.ready) {
                data.data().then(function (arr) {
                    _this.genImage(rgba, arr, data.ncol, color);
                    _this.redrawImpl(_this.imageData, $node, scale);
                });
            }
        };
        HeatMapCanvasRenderer.prototype.genImage = function (rgba, arr, ncol, c) {
            arr.forEach(function (row, j) {
                var t = j * ncol;
                row.forEach(function (cell, i) {
                    var color = d3.rgb(c(cell));
                    rgba[(t + i) * 4] = color.r;
                    rgba[(t + i) * 4 + 1] = color.g;
                    rgba[(t + i) * 4 + 2] = color.b;
                    rgba[(t + i) * 4 + 3] = 255;
                });
            });
        };
        HeatMapCanvasRenderer.prototype.redrawImpl = function (imageData, $root, scale) {
            var context = $root.select('canvas').node().getContext('2d');
            context.msImageSmoothingEnabled = false;
            context.imageSmoothingEnabled = false;
            if (scale[0] === 1 && scale[1] === 1) {
                context.putImageData(imageData, 0, 0);
            } else {
                var tmp = document.createElement('canvas');
                tmp.width = imageData.width;
                tmp.height = imageData.height;
                var d = tmp.getContext('2d');
                d.putImageData(imageData, 0, 0);
                context.save();
                context.scale(scale[0], scale[1]);
                context.drawImage(tmp, 0, 0);
                context.restore();
                d3.select(tmp).remove();
            }
        };
        HeatMapCanvasRenderer.prototype.build = function (data, $parent, scale, c, onReady) {
            var _this = this;
            var dims = data.dim;
            var width = dims[1], height = dims[0];
            var $root = $parent.append('div').attr('class', 'heatmap');
            var $canvas = $root.append('canvas').attr({
                width: width * scale[0],
                height: height * scale[1],
                'class': 'heatmap-data'
            });
            this.imageData = $canvas.node().getContext('2d').createImageData(width, height);
            var rgba = this.imageData.data;
            data.data().then(function (arr) {
                _this.ready = true;
                _this.genImage(rgba, arr, data.ncol, c);
                onReady();
            });
            _super.prototype.buildSelection.call(this, data, $root, scale);
            return $root;
        };
        return HeatMapCanvasRenderer;
    }(AHeatMapCanvasRenderer);
    var HeatMapImageRenderer = function (_super) {
        __extends(HeatMapImageRenderer, _super);
        function HeatMapImageRenderer(selectAble) {
            if (selectAble === void 0) {
                selectAble = true;
            }
            _super.call(this, selectAble);
            this.ready = false;
        }
        HeatMapImageRenderer.prototype.rescale = function ($node, dim, scale) {
            $node.selectAll('canvas').attr({
                width: dim[1] * scale[0],
                height: dim[0] * scale[1]
            });
            if (this.ready) {
                this.redrawImpl($node, scale);
            }
            _super.prototype.rescale.call(this, $node, dim, scale);
        };
        HeatMapImageRenderer.prototype.redraw = function ($node, scale) {
            if (this.ready) {
                this.redrawImpl($node, scale);
            }
        };
        HeatMapImageRenderer.prototype.redrawImpl = function ($root, scale) {
            var canvas = $root.select('canvas').node();
            var ctx = canvas.getContext('2d');
            ctx.msImageSmoothingEnabled = false;
            ctx.imageSmoothingEnabled = false;
            if (scale[0] === 1 && scale[1] === 1) {
                ctx.drawImage(this.image, 0, 0);
            } else {
                ctx.save();
                ctx.scale(scale[0], scale[1]);
                ctx.drawImage(this.image, 0, 0);
                ctx.restore();
            }
        };
        HeatMapImageRenderer.prototype.recolor = function ($node, data, color, scale) {
            this.color = color;
            this.redrawImpl($node, scale);
        };
        HeatMapImageRenderer.prototype.build = function (data, $parent, scale, c, onReady) {
            var _this = this;
            this.color = c;
            var dims = data.dim;
            var width = dims[1], height = dims[0];
            var $root = $parent.append('div').attr('class', 'heatmap');
            $root.append('canvas').attr({
                width: width * scale[0],
                height: height * scale[1],
                'class': 'heatmap-data'
            });
            this.image = new Image();
            this.image.onload = function () {
                _this.ready = true;
                onReady();
            };
            var args = { range: c.domain() };
            function arrEqual(a, b) {
                if (a.length !== b.length) {
                    return false;
                }
                return a.every(function (ai, i) {
                    return ai === b[i];
                });
            }
            var colors = c.range();
            if (arrEqual(colors, [
                    'black',
                    'white'
                ])) {
            } else if (arrEqual(colors, [
                    'white',
                    'red'
                ])) {
                args.palette = 'white_red';
            } else if (arrEqual(colors, [
                    'blue',
                    'white',
                    'red'
                ])) {
                args.palette = 'blue_white_red';
            }
            this.image.src = data.heatmapUrl(ranges.all(), args);
            _super.prototype.buildSelection.call(this, data, $root, scale);
            return $root;
        };
        return HeatMapImageRenderer;
    }(AHeatMapCanvasRenderer);
    function createRenderer(d, selectAble, forceThumbnails) {
        if (selectAble === void 0) {
            selectAble = true;
        }
        if (forceThumbnails === void 0) {
            forceThumbnails = false;
        }
        var cells = d.length;
        if (cells <= 1000) {
            return new HeatMapDOMRenderer(selectAble);
        }
        var url = d.heatmapUrl();
        if (url && forceThumbnails) {
            return new HeatMapImageRenderer(selectAble);
        } else if (cells < 5000 || url === null) {
            return new HeatMapCanvasRenderer(selectAble);
        } else {
            return new HeatMapImageRenderer(selectAble);
        }
    }
    var HeatMap = function (_super) {
        __extends(HeatMap, _super);
        function HeatMap(data, parent, options) {
            _super.call(this);
            this.data = data;
            this.parent = parent;
            this.options = options;
            var value = this.data.desc.value;
            this.options = C.mixin({
                initialScale: 10,
                scaleTo: null,
                color: defaultColor(value),
                domain: defaultDomain(value),
                duration: 200,
                selectAble: true,
                forceThumbnails: false
            }, options);
            this.options.scale = [
                this.options.initialScale,
                this.options.initialScale
            ];
            if (this.options.scaleTo) {
                var raw = this.data.dim;
                this.options.scale = this.options.scaleTo.map(function (d, i) {
                    return d / raw[i];
                });
            }
            this.options.rotate = 0;
            this.colorer = toScale(value).domain(this.options.domain).range(this.options.color);
            this.renderer = createRenderer(data, this.options.selectAble, this.options.forceThumbnails);
            this.$node = this.build(d3.select(parent));
            this.$node.datum(data);
            vis.assignVis(this.$node.node(), this);
        }
        Object.defineProperty(HeatMap.prototype, 'rawSize', {
            get: function () {
                var d = this.data.dim;
                return [
                    d[1],
                    d[0]
                ];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HeatMap.prototype, 'node', {
            get: function () {
                return this.$node.node();
            },
            enumerable: true,
            configurable: true
        });
        HeatMap.prototype.option = function (name, val) {
            if (arguments.length === 1) {
                return this.options[name];
            } else {
                this.fire('option', name, val, this.options[name]);
                this.fire('option.' + name, val, this.options[name]);
                this.options[name] = val;
                switch (name) {
                case 'color':
                case 'domain':
                    this.recolor();
                    break;
                }
            }
        };
        HeatMap.prototype.locateImpl = function (range) {
            var dims = this.data.dim;
            var width = dims[1], height = dims[0], o = this.options;
            function l(r, max, s) {
                if (r.isAll || r.isNone) {
                    return [
                        0,
                        max * s
                    ];
                }
                var ex = d3.extent(r.iter().asList());
                return [
                    ex[0] * s,
                    (ex[1] - ex[0] + 1) * s
                ];
            }
            var xw = l(range.dim(1), width, o.scale[0]);
            var yh = l(range.dim(0), height, o.scale[1]);
            return Promise.resolve(geom.rect(xw[0], yh[0], xw[1], yh[1]));
        };
        HeatMap.prototype.transform = function (scale, rotate) {
            if (rotate === void 0) {
                rotate = 0;
            }
            var bak = {
                scale: this.options.scale || [
                    1,
                    1
                ],
                rotate: this.options.rotate || 0
            };
            if (arguments.length === 0) {
                return bak;
            }
            var dims = this.data.dim;
            this.$node.style('transform', 'rotate(' + rotate + 'deg)');
            if (bak.scale[0] !== scale[0] || bak.scale[1] !== scale[1]) {
                this.renderer.rescale(this.$node, dims, scale);
            }
            var new_ = {
                scale: scale,
                rotate: rotate
            };
            this.fire('transform', new_, bak);
            this.options.scale = scale;
            this.options.rotate = rotate;
            return new_;
        };
        HeatMap.prototype.recolor = function () {
            var c = this.colorer;
            c.domain(this.options.domain).range(this.options.color);
            this.renderer.recolor(this.$node, this.data, c, this.options.scale);
        };
        HeatMap.prototype.build = function ($parent) {
            var _this = this;
            return this.renderer.build(this.data, $parent, this.options.scale, this.colorer, function () {
                _this.renderer.redraw(_this.$node, _this.options.scale);
                _this.markReady();
            });
        };
        return HeatMap;
    }(vis.AVisInstance);
    exports.HeatMap = HeatMap;
    var HeatMap1D = function (_super) {
        __extends(HeatMap1D, _super);
        function HeatMap1D(data, parent, options) {
            _super.call(this);
            this.data = data;
            this.parent = parent;
            this.options = options;
            var value = this.data.desc.value;
            this.options = C.mixin({
                initialScale: 10,
                color: defaultColor(value),
                domain: defaultDomain(value),
                width: 20,
                heightTo: null
            }, options);
            this.options.scale = [
                1,
                this.options.initialScale
            ];
            if (this.options.heightTo) {
                this.options.scale[1] = this.options.heightTo / this.data.dim[0];
            }
            this.options.rotate = 0;
            this.colorer = toScale(value).domain(this.options.domain).range(this.options.color);
            this.$node = this.build(d3.select(parent));
            this.$node.datum(data);
            vis.assignVis(this.$node.node(), this);
        }
        Object.defineProperty(HeatMap1D.prototype, 'rawSize', {
            get: function () {
                var d = this.data.dim;
                return [
                    this.options.width,
                    d[0]
                ];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HeatMap1D.prototype, 'node', {
            get: function () {
                return this.$node.node();
            },
            enumerable: true,
            configurable: true
        });
        HeatMap1D.prototype.option = function (name, val) {
            if (arguments.length === 1) {
                return this.options[name];
            } else {
                this.fire('option', name, val, this.options[name]);
                this.fire('option.' + name, val, this.options[name]);
                this.options[name] = val;
                switch (name) {
                case 'color':
                case 'domain':
                    this.recolor();
                    break;
                }
            }
        };
        HeatMap1D.prototype.locateImpl = function (range) {
            var dims = this.data.dim;
            var height = dims[0];
            function l(r, max, s) {
                if (r.isAll || r.isNone) {
                    return [
                        0,
                        max * s
                    ];
                }
                var ex = d3.extent(r.iter().asList());
                return [
                    ex[0] * s,
                    (ex[1] - ex[0] + 1) * s
                ];
            }
            var yh = l(range.dim(0), height, this.options.scale[1]);
            return Promise.resolve(geom.rect(0, yh[0], 20, yh[1]));
        };
        HeatMap1D.prototype.transform = function (scale, rotate) {
            if (rotate === void 0) {
                rotate = 0;
            }
            var bak = {
                scale: this.options.scale || [
                    1,
                    1
                ],
                rotate: this.options.rotate || 0
            };
            if (arguments.length === 0) {
                return bak;
            }
            var dims = this.data.dim;
            var width = this.options.width, height = dims[0];
            this.$node.attr({
                width: width * scale[0],
                height: height * scale[1]
            }).style('transform', 'rotate(' + rotate + 'deg)');
            this.$node.select('g').attr('transform', 'scale(' + scale[0] + ',' + scale[1] + ')');
            var new_ = {
                scale: scale,
                rotate: rotate
            };
            this.fire('transform', new_, bak);
            this.options.scale = scale;
            this.options.rotate = rotate;
            return new_;
        };
        HeatMap1D.prototype.recolor = function () {
            var c = this.colorer;
            c.domain(this.options.domain).range(this.options.color);
            this.$node.selectAll('rect').attr('fill', function (d) {
                return c(d);
            });
        };
        HeatMap1D.prototype.build = function ($parent) {
            var _this = this;
            var dims = this.data.dim;
            var width = this.options.width, height = dims[0];
            var $svg = $parent.append('svg').attr({
                width: width,
                height: height * this.options.initialScale,
                'class': 'heatmap'
            });
            var $g = $svg.append('g').attr('transform', 'scale(1,' + this.options.initialScale + ')');
            var c = this.colorer;
            var data = this.data;
            data.data().then(function (arr) {
                var $rows = $g.selectAll('rect').data(arr);
                var onClick = d3utils.selectionUtil(data, $g, 'rect');
                $rows.enter().append('rect').on('click', onClick).attr({
                    width: _this.options.width,
                    height: 1
                }).append('title').text(C.identity);
                $rows.attr({
                    fill: function (d) {
                        return c(d);
                    },
                    y: function (d, i) {
                        return i;
                    }
                });
                $rows.exit().remove();
            });
            return $svg;
        };
        return HeatMap1D;
    }(vis.AVisInstance);
    exports.HeatMap1D = HeatMap1D;
    function create(data, parent, options) {
        if (data.desc.type === 'matrix') {
            return new HeatMap(data, parent, options);
        } else if (data.desc.type === 'vector') {
            return new HeatMap1D(data, parent, options);
        }
        return null;
    }
    exports.create = create;
}(require, exports, require('d3'), require('../caleydo_d3/d3util'), require('../caleydo_core/vis'), require('../caleydo_core/idtype'), require('../caleydo_core/geom'), require('../caleydo_core/range'), require('../caleydo_core/main'), pluginValue0));
},{"../caleydo_core/geom":8,"../caleydo_core/idtype":9,"../caleydo_core/main":13,"../caleydo_core/range":20,"../caleydo_core/vis":28,"../caleydo_d3/d3util":31,"css":undefined,"d3":undefined}],53:[function(require,module,exports){
var m_css = require('css'), pluginValue0;
m_css.load('./style', function () {
}, function (r) {
    pluginValue0 = r;
});
(function (require, exports, d3, vis, C) {
    var KaplanMeierPlot = function (_super) {
        __extends(KaplanMeierPlot, _super);
        function KaplanMeierPlot(data, parent, options) {
            if (options === void 0) {
                options = {};
            }
            _super.call(this);
            this.data = data;
            this.parent = parent;
            this.options = {
                scale: [
                    1,
                    1
                ],
                rotate: 0,
                width: 300,
                height: 300,
                maxTime: function (died) {
                    return died[died.length - 1];
                }
            };
            this.line = d3.svg.line().interpolate('step');
            C.mixin(this.options, options);
            this.$node = this.build(d3.select(parent));
            this.$node.datum(data);
            vis.assignVis(this.$node.node(), this);
        }
        Object.defineProperty(KaplanMeierPlot.prototype, 'rawSize', {
            get: function () {
                return [
                    this.options.width,
                    this.options.height
                ];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KaplanMeierPlot.prototype, 'node', {
            get: function () {
                return this.$node.node();
            },
            enumerable: true,
            configurable: true
        });
        KaplanMeierPlot.prototype.locateImpl = function (range) {
            return Promise.resolve(null);
        };
        KaplanMeierPlot.prototype.transform = function (scale, rotate) {
            if (rotate === void 0) {
                rotate = 0;
            }
            var bak = {
                scale: this.options.scale || [
                    1,
                    1
                ],
                rotate: this.options.rotate || 0
            };
            if (arguments.length === 0) {
                return bak;
            }
            var width = this.options.width, height = this.options.height;
            this.$node.attr({
                width: width * scale[0],
                height: height * scale[1]
            }).style('transform', 'rotate(' + rotate + 'deg)');
            this.$node.select('g').attr('transform', 'scale(' + scale[0] + ',' + scale[1] + ')');
            var new_ = {
                scale: scale,
                rotate: rotate
            };
            this.fire('transform', new_, bak);
            this.options.scale = scale;
            this.options.rotate = rotate;
            return new_;
        };
        KaplanMeierPlot.prototype.build = function ($parent) {
            var _this = this;
            var width = this.options.width, height = this.options.height, scale = this.options.scale || [
                    1,
                    1
                ];
            var $svg = $parent.append('svg').attr({
                width: width * scale[0],
                height: height * scale[1],
                'class': 'kaplanmeier'
            });
            var $g = $svg.append('g');
            var xscale = d3.scale.linear().range([
                0,
                width
            ]);
            var yscale = d3.scale.linear().range([
                0,
                height
            ]);
            this.line.x(function (d) {
                return xscale(d[0]);
            }).y(function (d) {
                return yscale(d[1]);
            });
            this.data.data().then(function (arr) {
                var died = arr.filter(function (a) {
                    return !isNaN(a);
                }).map(function (a) {
                    return Math.abs(a);
                });
                died.sort(d3.ascending);
                yscale.domain([
                    0,
                    arr.length
                ]);
                Promise.resolve(d3.functor(_this.options.maxTime)(died)).then(function (maxAxisTime) {
                    xscale.domain([
                        0,
                        maxAxisTime
                    ]);
                    var points = [[
                                0,
                                0
                            ]], prev_i = 0;
                    for (var i = 1; i < died.length; ++i) {
                        while (died[i] === died[i - 1] && i < died.length) {
                            ++i;
                        }
                        points.push([
                            died[prev_i],
                            prev_i + 1
                        ]);
                        prev_i = i;
                    }
                    if (died.length > 0) {
                        points.push([
                            died[prev_i],
                            prev_i + 1
                        ]);
                    }
                    points.push([
                        maxAxisTime,
                        died.length
                    ]);
                    $g.append('path').datum(points).attr('d', _this.line);
                    _this.markReady();
                });
            });
            return $svg;
        };
        return KaplanMeierPlot;
    }(vis.AVisInstance);
    exports.KaplanMeierPlot = KaplanMeierPlot;
    function create(data, parent, options) {
        return new KaplanMeierPlot(data, parent, options);
    }
    exports.create = create;
}(require, exports, require('d3'), require('../caleydo_core/vis'), require('../caleydo_core/main'), pluginValue0));
},{"../caleydo_core/main":13,"../caleydo_core/vis":28,"css":undefined,"d3":undefined}],54:[function(require,module,exports){
var m_css = require('css'), pluginValue0;
m_css.load('./style', function () {
}, function (r) {
    pluginValue0 = r;
});
(function (exports, d3, C, tooltip, d3tuils) {
    exports.ScatterPlot = d3tuils.defineVis('ScatterPlot', {}, [
        300,
        300
    ], function ($parent, data, size) {
        var width = size[0], height = size[1];
        var xcol = 0;
        var ycol = 1;
        var svg = $parent.append('svg').attr({
            width: width,
            height: height
        });
        var that = this;
        Promise.all([
            data.data(),
            data.rows()
        ]).then(function (promise) {
            var arr = promise[0];
            var rowNames = promise[1];
            var x = d3.scale.linear().domain([
                    0,
                    d3.max(arr.map(function (d) {
                        return d[xcol];
                    }))
                ]).range([
                    0,
                    width
                ]), y = d3.scale.linear().domain([
                    0,
                    d3.max(arr.map(function (d) {
                        return d[ycol];
                    }))
                ]).range([
                    height,
                    0
                ]);
            svg.selectAll('circle').data(arr).enter().append('circle').attr('cx', function (d) {
                return x(d[xcol]);
            }).attr('cy', function (d) {
                return y(d[ycol]);
            }).attr('r', 2).call(tooltip.bind(function (d, i) {
                return rowNames[i];
            }));
        });
        function update() {
            that.data.data().then(function (arr) {
                var x = d3.scale.linear().domain([
                        0,
                        d3.max(arr.map(function (d) {
                            return d[xcol];
                        }))
                    ]).range([
                        0,
                        width
                    ]), y = d3.scale.linear().domain([
                        0,
                        d3.max(arr.map(function (d) {
                            return d[ycol];
                        }))
                    ]).range([
                        height,
                        0
                    ]);
                svg.selectAll('circle').transition().ease('linear').duration(1000).attr('cx', function (d) {
                    return x(d[xcol]);
                }).attr('cy', function (d) {
                    return y(d[ycol]);
                });
            });
        }
        var $xaxis = $parent.append('select').on('change', function () {
            xcol = this.selectedIndex;
            update();
        });
        var $yaxis = $parent.append('select').on('change', function () {
            ycol = this.selectedIndex;
            update();
        });
        data.cols().then(function (cols) {
            var $x = $xaxis.selectAll('option').data(cols);
            $x.enter().append('option');
            $x.attr('value', function (d, i) {
                return i;
            }).text(C.identity).each(function (d, i) {
                if (i == xcol) {
                    d3.select(this).attr('selected', 'selected');
                }
            });
            $x.exit().remove();
            var $y = $yaxis.selectAll('option').data(cols);
            $y.enter().append('option');
            $y.attr('value', function (d, i) {
                return i;
            }).text(C.identity).each(function (d, i) {
                if (i == ycol) {
                    d3.select(this).attr('selected', 'selected');
                }
            });
            $y.exit().remove();
        });
        return svg;
    });
    function create(data, parent, options) {
        return new exports.ScatterPlot(data, parent, options);
    }
    exports.create = create;
}(exports, require('d3'), require('../caleydo_core/main'), require('../caleydo_tooltip/main'), require('../caleydo_d3/d3util'), pluginValue0));
},{"../caleydo_core/main":13,"../caleydo_d3/d3util":31,"../caleydo_tooltip/main":47,"css":undefined,"d3":undefined}],55:[function(require,module,exports){
var m_css = require('css'), pluginValue0;
m_css.load('./style', function () {
}, function (r) {
    pluginValue0 = r;
});
(function (require, exports, d3, vis, geom, utils, C) {
    var Table = function (_super) {
        __extends(Table, _super);
        function Table(data, parent) {
            _super.call(this);
            this.data = data;
            this.parent = parent;
            this.options = {};
            var $p = d3.select(parent);
            switch (data.desc.type) {
            case 'matrix':
                this.$node = this.build($p, [
                    this.data.cols(),
                    this.data.rows(),
                    this.data.data()
                ]);
                break;
            case 'table':
                this.$node = this.build($p, [
                    this.data.cols().map(function (v) {
                        return v.name;
                    }),
                    this.data.rows(),
                    this.data.data()
                ]);
                break;
            case 'vector':
                this.$node = this.build($p, [
                    [this.data.desc.name],
                    this.data.names(),
                    this.data.data().then(function (data) {
                        return data.map(function (d) {
                            return [d];
                        });
                    })
                ]);
                break;
            }
            this.$node.datum(data);
            vis.assignVis(this.$node.node(), this);
        }
        Object.defineProperty(Table.prototype, 'rawSize', {
            get: function () {
                var dim = this.data.dim;
                return [
                    (dim[1] || 1) * 200,
                    dim[0] * 22
                ];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Table.prototype, 'node', {
            get: function () {
                return this.$node.node();
            },
            enumerable: true,
            configurable: true
        });
        Table.prototype.locateImpl = function (range) {
            var $tbody = d3.select(this.node).select('tbody');
            var offset = $tbody.node().offsetTop, w = $tbody.node().clientWidth;
            var a, b;
            if (range.isAll || range.isNone) {
                b = $tbody.select('tr:last').node();
                return Promise.resolve(geom.rect(0, offset, w, b.offsetTop + b.clientHeight));
            }
            var ex = d3.extent(range.dim(0).iter().asList());
            a = $tbody.select('tr:nth-child(' + (ex[0] + 1) + ')').node();
            b = $tbody.select('tr:nth-child(' + (ex[1] + 1) + ')').node();
            return Promise.resolve(geom.rect(0, a.offsetTop, w, b.offsetTop + b.clientHeight - a.offsetTop));
        };
        Table.prototype.transform = function (scale, rotate) {
            if (rotate === void 0) {
                rotate = 0;
            }
            var bak = {
                scale: this.options.scale || [
                    1,
                    1
                ],
                rotate: this.options.rotate || 0
            };
            if (arguments.length === 0) {
                return bak;
            }
            this.$node.style('transform', 'rotate(' + rotate + 'deg)scale(' + scale[0] + ',' + scale[1] + ')');
            var new_ = {
                scale: scale,
                rotate: rotate
            };
            this.fire('transform', new_, bak);
            this.options.scale = scale;
            this.options.rotate = rotate;
            return new_;
        };
        Table.prototype.build = function ($parent, promises) {
            var _this = this;
            var $table = $parent.append('table').attr('class', 'table');
            $table.append('thead').append('tr');
            $table.append('tbody');
            var onClick = utils.selectionUtil(this.data, $table.select('tbody'), 'tr');
            Promise.all(promises).then(function (arr) {
                var cols = arr[0], rows = arr[1], d = arr[2];
                var $headers = $table.select('thead tr').selectAll('th').data(['ID'].concat(cols));
                $headers.enter().append('th');
                $headers.text(C.identity);
                $headers.exit().remove();
                var $rows = $table.select('tbody').selectAll('tr').data(d);
                $rows.enter().append('tr').on('click', onClick);
                $rows.each(function (row, i) {
                    var $header = d3.select(this).selectAll('th').data(rows.slice(i, i + 1));
                    $header.enter().append('th');
                    $header.text(C.identity);
                    $header.exit().remove();
                    var $row = d3.select(this).selectAll('td').data(row);
                    $row.enter().append('td');
                    $row.text(C.identity);
                    $row.exit().remove();
                });
                $rows.exit().remove();
                _this.markReady();
            });
            return $table;
        };
        return Table;
    }(vis.AVisInstance);
    exports.Table = Table;
    function create(data, parent) {
        return new Table(data, parent);
    }
    exports.create = create;
}(require, exports, require('d3'), require('../caleydo_core/vis'), require('../caleydo_core/geom'), require('../caleydo_d3/d3util'), require('../caleydo_core/main'), pluginValue0));
},{"../caleydo_core/geom":8,"../caleydo_core/main":13,"../caleydo_core/vis":28,"../caleydo_d3/d3util":31,"css":undefined,"d3":undefined}],56:[function(require,module,exports){
var m_css = require('css'), pluginValue0;
m_css.load('./style', function () {
}, function (r) {
    pluginValue0 = r;
});
(function (require, exports, d3, vis, C) {
    'use strict';
    var ForceDirectedGraphVis = function (_super) {
        __extends(ForceDirectedGraphVis, _super);
        function ForceDirectedGraphVis(data, parent, options) {
            _super.call(this);
            this.data = data;
            this.parent = parent;
            this.options = {
                scale: [
                    1,
                    1
                ],
                rotate: 0,
                colors: true
            };
            C.mixin(this.options, options);
            this.$node = this.build(d3.select(parent));
            this.$node.datum(data);
            vis.assignVis(this.$node.node(), this);
        }
        Object.defineProperty(ForceDirectedGraphVis.prototype, 'rawSize', {
            get: function () {
                return [
                    300,
                    300
                ];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ForceDirectedGraphVis.prototype, 'node', {
            get: function () {
                return this.$node.node();
            },
            enumerable: true,
            configurable: true
        });
        ForceDirectedGraphVis.prototype.option = function (name, val) {
            if (arguments.length === 1) {
                return this.options[name];
            } else {
                this.fire('option', name, val, this.options[name]);
                this.fire('option.' + name, val, this.options[name]);
                this.options[name] = val;
            }
        };
        ForceDirectedGraphVis.prototype.transform = function (scale, rotate) {
            if (rotate === void 0) {
                rotate = 0;
            }
            var bak = {
                scale: this.options.scale || [
                    1,
                    1
                ],
                rotate: this.options.rotate || 0
            };
            if (arguments.length === 0) {
                return bak;
            }
            var raw = this.rawSize;
            this.$node.style('transform', 'rotate(' + rotate + 'deg)');
            this.$node.attr('width', raw[0] * scale[0]).attr('height', raw[1] * scale[1]);
            this.$node.select('g').attr('transform', 'scale(' + scale[0] + ',' + scale[1] + ')');
            var new_ = {
                scale: scale,
                rotate: rotate
            };
            this.fire('transform', new_, bak);
            this.options.scale = scale;
            this.options.rotate = rotate;
            return new_;
        };
        ForceDirectedGraphVis.prototype.build = function ($parent) {
            var _this = this;
            var scaleFactor = this.options.scale, size = this.size;
            var $svg = $parent.append('svg').attr({
                width: size[0],
                height: size[1],
                'class': 'graph-force'
            });
            var $root = $svg.append('g').attr('transform', 'scale(' + scaleFactor[0] + ',' + scaleFactor[1] + ')');
            var colors = d3.scale.category20().range();
            this.data.impl().then(function (graph) {
                var nodes = graph.nodes.map(function (n) {
                    return { v: n };
                });
                var lookup = d3.map(nodes, function (d) {
                    return String(d.v.id);
                });
                var edges = graph.edges.map(function (n) {
                    return {
                        v: n,
                        source: lookup.get(String(n.source.id)),
                        target: lookup.get(String(n.target.id))
                    };
                });
                var f = d3.layout.force().size(_this.rawSize);
                f.nodes(nodes).links(edges);
                var $links = $root.selectAll('.edge').data(edges);
                $links.enter().append('line').classed('edge', true);
                $links.attr('data-type', function (d) {
                    return d.v.type;
                });
                $links.exit().remove();
                var $nodes = $root.selectAll('.node').data(nodes);
                $nodes.enter().append('circle').classed('node', true).attr('r', 5).call(f.drag).on('click', function (d) {
                    console.log(d.v);
                }).append('title');
                $nodes.attr('data-type', function (d) {
                    return d.v.type;
                });
                if (_this.options.colors) {
                    $links.style('stroke', function (d) {
                        var c = lookup[d.v.type];
                        if (!c) {
                            c = colors.shift();
                            lookup[d.v.type] = c;
                        }
                        return c;
                    });
                    $nodes.style('fill', function (d) {
                        var c = lookup[d.v.type];
                        if (!c) {
                            c = colors.shift();
                            lookup[d.v.type] = c;
                        }
                        return c;
                    });
                }
                $nodes.select('title').text(function (d) {
                    return d.v.id + ' ' + d.v.type;
                });
                f.on('tick', function () {
                    $links.attr({
                        x1: function (d) {
                            return d.source.x;
                        },
                        y1: function (d) {
                            return d.source.y;
                        },
                        x2: function (d) {
                            return d.target.x;
                        },
                        y2: function (d) {
                            return d.target.y;
                        }
                    });
                    $nodes.attr({
                        cx: function (d) {
                            return d.x;
                        },
                        cy: function (d) {
                            return d.y;
                        }
                    });
                });
                _this.markReady();
                f.start();
            });
            return $svg;
        };
        return ForceDirectedGraphVis;
    }(vis.AVisInstance);
    exports.ForceDirectedGraphVis = ForceDirectedGraphVis;
    function create(data, parent, options) {
        return new ForceDirectedGraphVis(data, parent, options);
    }
    exports.create = create;
}(require, exports, require('d3'), require('../caleydo_core/vis'), require('../caleydo_core/main'), pluginValue0));
},{"../caleydo_core/main":13,"../caleydo_core/vis":28,"css":undefined,"d3":undefined}],57:[function(require,module,exports){
var m_css = require('css'), pluginValue0;
m_css.load('./style', function () {
}, function (r) {
    pluginValue0 = r;
});
(function (exports, d3, C, idtypes, LineUpJS, d3utils) {
    'use strict';
    function deriveColumns(columns) {
        return columns.map(function (col) {
            var r = { column: col.desc.name };
            if (col.desc.color) {
                r.color = col.desc.color;
            } else if (col.desc.cssClass) {
                r.cssClass = col.desc.cssClass;
            }
            if (col.desc.lineup) {
                Object.keys(col.desc.lineup).forEach(function (k) {
                    r[k] = col.desc.lineup[k];
                });
            }
            var val = col.desc.value;
            switch (val.type) {
            case 'string':
                r.type = 'string';
                break;
            case 'categorical':
                r.type = 'categorical';
                r.categories = col.desc.categories;
                break;
            case 'real':
            case 'int':
                r.type = 'number';
                r.domain = val.range;
                break;
            default:
                r.type = 'string';
                break;
            }
            return r;
        });
    }
    exports.LineUp = d3utils.defineVis('LineUp', { rowNames: false }, function (data) {
        var dim = data.dim;
        return [
            Math.min(dim[1] * 100, 1000),
            Math.min(dim[0] * 20, 600)
        ];
    }, function build($parent) {
        var $div = $parent.append('div');
        var that = this;
        var rowNames = this.option('rowNames', false) === true;
        var columns = deriveColumns(this.data.cols());
        if (rowNames) {
            columns.unshift({
                type: 'string',
                label: 'Row',
                column: '_name'
            });
        }
        var listener = function (event, act) {
            if (that.lineup) {
                that.lineup.data.setSelection(act.dim(0).asList());
            }
        };
        that.data.on('select-selected', listener);
        C.onDOMNodeRemoved($div.node(), function () {
            that.data.off('select-selected', listener);
        });
        var listener = function (event, act) {
            if (that.lineup) {
                that.lineup.data.setSelection(act.dim(0).asList());
            }
        };
        that.data.on('select-selected', listener);
        C.onDOMNodeRemoved($div.node(), function () {
            that.data.off('select-selected', listener);
        });
        Promise.all([
            this.data.objects(),
            this.data.rowIds(),
            rowNames ? this.data.rows() : Promise.resolve([])
        ]).then(function (promise) {
            var arr = promise[0];
            var rowIds = promise[1].dim(0).asList();
            var names = promise[2];
            var data = arr.map(function (obj, i) {
                return C.mixin({
                    _name: names[i],
                    _id: rowIds[i]
                }, obj);
            });
            that.provider = LineUpJS.createLocalStorage(data, columns);
            var dump = that.option('dump');
            if (dump) {
                that.provider.restore(dump);
            }
            that.lineup = LineUpJS.create(that.provider, $div, that.option('lineup'));
            that.lineup.on('hoverChanged', function (data_index) {
                var id = null;
                if (data_index < 0) {
                    that.data.clear(idtypes.hoverSelectionType);
                } else {
                    id = data[data_index]._id;
                    that.data.select(idtypes.hoverSelectionType, [data_index]);
                }
                that.fire(idtypes.hoverSelectionType, id);
            });
            that.lineup.on('multiSelectionChanged', function (data_indices) {
                if (data_indices.length === 0) {
                    that.data.clear(idtypes.defaultSelectionType);
                } else {
                    that.data.select(idtypes.defaultSelectionType, data_indices);
                }
                that.fire(idtypes.defaultSelectionType, data_indices.length === 0 ? null : data[data_indices[0]]._id);
            });
            that.provider.deriveDefault();
            that.lineup.update();
            that.data.selections().then(function (act) {
                if (!act.isNone) {
                    listener(null, act);
                }
            });
            that.markReady();
        });
        return $div;
    }, {
        transform: function (scale, rotate) {
            var bak = {
                scale: this.options.scale || [
                    1,
                    1
                ],
                rotate: this.options.rotate || 0
            };
            if (arguments.length === 0) {
                return bak;
            }
            this.$node.style('transform', 'rotate(' + rotate + 'deg)scale(' + scale[0] + ',' + scale[1] + ')');
            var new_ = {
                scale: scale,
                rotate: rotate
            };
            this.fire('transform', new_, bak);
            this.options.scale = scale;
            this.options.rotate = rotate;
            return new_;
        },
        update: function () {
            if (this.lineup) {
                this.lineup.update();
            }
        }
    });
    exports.create = function (data, parent, options) {
        return new exports.LineUp(data, parent, options);
    };
}(exports, require('d3'), require('../caleydo_core/main'), require('../caleydo_core/idtype'), require('lineupjs'), require('../caleydo_d3/d3util'), require('font-awesome'), pluginValue0));
},{"../caleydo_core/idtype":9,"../caleydo_core/main":13,"../caleydo_d3/d3util":31,"css":undefined,"d3":undefined,"font-awesome":undefined,"lineupjs":undefined}],58:[function(require,module,exports){
(function (require, exports, $, events, C, behaviors, geom, idtypes) {
    function makeDraggable($div, window) {
        var convertDrag = function (ui) {
            return {
                position: ui.position,
                offset: ui.offset
            };
        };
        $div.draggable({
            scroll: true,
            handle: 'div.ui-widget-header h3',
            start: function (event, ui) {
                window.fire('drag_start', convertDrag(ui));
            },
            stop: function (event, ui) {
                window.fire('drag_stop', convertDrag(ui));
            },
            drag: function (event, ui) {
                window.fire('drag', convertDrag(ui));
            }
        });
    }
    function destroyDraggable($div) {
        $div.draggable('destroy');
    }
    function makeResizeable($div, window, options) {
        if (options === void 0) {
            options = {};
        }
        var convertResize = function (ui) {
            return {
                originalPosition: ui.originalPosition,
                originalSize: ui.originalSize,
                position: ui.position,
                size: ui.size
            };
        };
        $div.resizable($.extend({
            start: function (event, ui) {
                window.fire('resize_start', convertResize(ui));
            },
            stop: function (event, ui) {
                window.fire('resize_stop', convertResize(ui));
            },
            resize: function (event, ui) {
                window.fire('resize', convertResize(ui));
            },
            autoHide: true,
            delay: 150,
            distance: 10
        }, options));
    }
    function destroyResizeable($div) {
        $div.resizable('destroy');
    }
    function makeAnimatedHeader($div, $header) {
        $div.on({
            mouseenter: function () {
                $header.css('opacity', 1);
            },
            mouseleave: function () {
                $header.css('opacity', 0);
            }
        });
        $header.css('opacity', 0);
    }
    function destroyAnimatedHeader($div, $header) {
        $div.off('mouseenter').off('mouseleave');
        $header.css('opacity', null);
    }
    exports.manager = new idtypes.ObjectManager('uiwindow', 'Window');
    var UIWindow = function (_super) {
        __extends(UIWindow, _super);
        function UIWindow(parent, options) {
            var _this = this;
            _super.call(this);
            this._data = {};
            this.id = exports.manager.nextId(this);
            this.options = C.mixin({
                resizeable: true,
                draggable: true
            }, options);
            this.$parent = $(parent);
            this.$div = $('<div/>').appendTo(this.$parent).addClass('ui-widget-content window').css({
                left: 0,
                top: 0,
                'z-index': 0
            });
            this.$div.on({
                mouseenter: function () {
                    exports.manager.select(idtypes.hoverSelectionType, [_this.id], idtypes.SelectOperation.ADD);
                    _this.fire('mouseenter', _this);
                },
                mouseleave: function () {
                    exports.manager.select(idtypes.hoverSelectionType, [_this.id], idtypes.SelectOperation.REMOVE);
                    _this.fire('mouseleave', _this);
                }
            });
            this.$header = $('<div>').appendTo(this.$div).addClass('ui-widget-header');
            $('<h3>').appendTo(this.$header).disableSelection();
            this.toolbar = new ToolBar(this.$header[0]);
            this.$content = $('<div class="content"/>').appendTo(this.$div);
            if (this.options.draggable) {
                makeDraggable(this.$div, this);
            }
            if (this.options.resizeable) {
                makeResizeable(this.$content, this);
            }
            if (this.options.animatedHeader) {
                makeAnimatedHeader(this.$div, this.$header);
            }
            this.toolbar.bindTo(this);
        }
        UIWindow.prototype.data = function (name, value) {
            if (arguments.length === 1) {
                return this._data[name];
            }
            var bak = this._data[name];
            this._data[name] = value;
            return bak;
        };
        UIWindow.prototype.close = function () {
            this.$div.remove();
            exports.manager.remove(this);
            this.fire('removed', this);
        };
        UIWindow.prototype.incZLevel = function () {
            return this.changeZLevel(+1);
        };
        UIWindow.prototype.decZLevel = function () {
            return this.changeZLevel(+1);
        };
        UIWindow.prototype.changeZLevel = function (delta) {
            if (delta < 0) {
                this.$div.css('z-index', '-=' + -delta);
            } else {
                this.$div.css('z-index', '+=' + delta);
            }
        };
        UIWindow.prototype.persist = function () {
            return {
                title: this.title,
                size: this.size,
                pos: this.pos,
                options: this.options
            };
        };
        UIWindow.prototype.restore = function (persisted) {
            var bak = this.options;
            this.options = persisted.options;
            if (this.options.draggable !== bak.draggable) {
                if (this.options.draggable) {
                    makeDraggable(this.$div, this);
                } else {
                    destroyDraggable(this.$div);
                }
            }
            if (this.options.resizeable !== bak.resizeable) {
                if (this.options.resizeable) {
                    makeResizeable(this.$content, this);
                } else {
                    destroyResizeable(this.$content);
                }
            }
            if (this.options.animatedHeader !== bak.animatedHeader) {
                if (this.options.animatedHeader) {
                    makeAnimatedHeader(this.$div, this.$header);
                } else {
                    destroyAnimatedHeader(this.$div, this.$header);
                }
            }
            this.title = persisted.title;
            this.size = persisted.size;
            this.pos = persisted.pos;
            return this;
        };
        Object.defineProperty(UIWindow.prototype, 'title', {
            get: function () {
                return this.$header.find('h3').text();
            },
            set: function (val) {
                this.$header.find('h3').html(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIWindow.prototype, 'size', {
            get: function () {
                return [
                    this.$content.width(),
                    this.$content.height()
                ];
            },
            set: function (val) {
                this.$content.css('width', val[0]);
                this.$content.css('height', val[1]);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIWindow.prototype, 'contentSize', {
            get: function () {
                var s = this.size;
                return [
                    s[0],
                    s[1] - (this.options.animatedHeader ? 0 : 20)
                ];
            },
            set: function (val) {
                this.size = [
                    val[0],
                    val[1] + (this.options.animatedHeader ? 0 : 20)
                ];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIWindow.prototype, 'contentPos', {
            get: function () {
                var p = this.pos;
                var pp = this.$content.position();
                p[0] += pp.left;
                p[1] += pp.top;
                return p;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIWindow.prototype, 'pos', {
            get: function () {
                var p = this.$div.position();
                return [
                    p.left,
                    p.top
                ];
            },
            set: function (val) {
                this.$div.css('left', val[0] + 'px');
                this.$div.css('top', val[1] + 'px');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIWindow.prototype, 'node', {
            get: function () {
                return this.$content[0];
            },
            enumerable: true,
            configurable: true
        });
        return UIWindow;
    }(events.EventHandler);
    exports.UIWindow = UIWindow;
    var ToolBar = function () {
        function ToolBar(parent) {
            this.builder = [];
            this.$node = $('<div class="toolbar" />').appendTo(parent);
        }
        ToolBar.prototype.bindTo = function (window) {
            this.window = window;
            this.$node.empty();
            if (window) {
                this.rebuild();
            }
        };
        ToolBar.prototype.rebuild = function () {
            var _this = this;
            this.builder.forEach(function (b) {
                return b.call(_this, _this.window, _this.$node[0]);
            });
            this.addButton('fa-caret-square-o-up', 'Move Up', function (window) {
                window.incZLevel();
            });
            this.addButton('fa-caret-square-o-down', 'Move Down', function (window) {
                window.decZLevel();
            });
            this.addButton('fa-close', 'Close', function (window) {
                window.close();
            });
        };
        ToolBar.prototype.addButton = function (icon, title, callback) {
            var _this = this;
            $('<i class="fa ' + icon + '">').appendTo(this.$node).click(function () {
                callback.call(_this, _this.window);
            }).attr('title', title);
        };
        Object.defineProperty(ToolBar.prototype, 'node', {
            get: function () {
                return this.$node[0];
            },
            enumerable: true,
            configurable: true
        });
        return ToolBar;
    }();
    exports.ToolBar = ToolBar;
    var StaticToolBar = function (_super) {
        __extends(StaticToolBar, _super);
        function StaticToolBar(parent) {
            _super.call(this, parent);
        }
        StaticToolBar.prototype.push = function (window) {
            var _this = this;
            window.on('mouseenter', function (_, w) {
                _this.bindTo(w);
            }).on('mouseleave', function (_, w) {
                _this.bindTo(null);
            }).on('removed', function (_, w) {
                if (_this.window === w) {
                    _this.bindTo(null);
                }
            });
        };
        return StaticToolBar;
    }(ToolBar);
    exports.StaticToolBar = StaticToolBar;
    var VisWindow = function (_super) {
        __extends(VisWindow, _super);
        function VisWindow(parent, options) {
            _super.call(this, parent, options);
            if (this.options.zoomAble) {
                this.zoom = new behaviors.ZoomBehavior(this.node, null, null);
                this.propagate(this.zoom, 'zoom');
            }
        }
        Object.defineProperty(VisWindow.prototype, 'vis', {
            get: function () {
                return this.vis_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VisWindow.prototype, 'visMeta', {
            get: function () {
                return this.visMeta_;
            },
            enumerable: true,
            configurable: true
        });
        VisWindow.prototype.attachVis = function (vis_or_factory) {
            var _this = this;
            var v, meta;
            if (C.isFunction(vis_or_factory)) {
                var r = vis_or_factory(this.node);
                v = r.vis;
                meta = r.meta;
            } else {
                v = arguments[0];
                meta = arguments[1];
            }
            this.vis_ = v;
            this.visMeta_ = meta;
            this.data('vis', this.vis_);
            this.data('visMeta', this.visMeta_);
            if (this.zoom) {
                this.zoom.v = v;
                this.zoom.meta = meta;
            }
            this.title = v.data.desc.name;
            var that = this;
            function updateResizeAble() {
                if (that.options.resizeable) {
                    var $content = $(that.node);
                    var oldAspectRatio = $content.resizable('option', 'aspectRatio');
                    var oldHandles = $content.resizable('option', 'handles');
                    var newAspectRatio = false;
                    var newHandles = 'e,s,se';
                    switch (meta.scaling) {
                    case 'aspect':
                        newAspectRatio = true;
                        break;
                    case 'width-only':
                        newHandles = 'e';
                        break;
                    case 'height-only':
                        newHandles = 's';
                        break;
                    }
                    if (newAspectRatio !== oldAspectRatio || newHandles !== oldHandles) {
                        destroyResizeable($content);
                        makeResizeable($content, that, {
                            aspectRatio: newAspectRatio,
                            handles: newHandles
                        });
                    }
                }
            }
            updateResizeAble();
            this.on('resize', function (event, pos) {
                if (_this.zoom) {
                    _this.zoom.zoomTo(pos.size.width, pos.size.height);
                }
            });
            this.contentSize = v.size;
            v.on('changed', function () {
                _this.contentSize = v.size;
                updateResizeAble();
            });
            v.on('transform', function () {
                _this.contentSize = v.size;
            });
            this.on('removed', function () {
                v.destroy();
            });
            return this.vis_;
        };
        VisWindow.prototype.adapter = function (vis) {
            var that = this;
            var r = {
                data: vis.data,
                locate: function () {
                    if (!C.isFunction(vis.locate)) {
                        return Promise.resolve(arguments.length === 1 ? undefined : new Array(arguments.length));
                    }
                    return vis.locate.apply(vis, C.argList(arguments)).then(function (r) {
                        var p = that.contentPos;
                        if (Array.isArray(r)) {
                            return r.map(function (loc) {
                                return loc ? geom.wrap(loc).shift(p) : loc;
                            });
                        } else {
                            return r ? geom.wrap(r).shift(p) : r;
                        }
                    });
                },
                locateById: function () {
                    if (!C.isFunction(vis.locateById)) {
                        return Promise.resolve(arguments.length === 1 ? undefined : new Array(arguments.length));
                    }
                    return vis.locateById.apply(vis, C.argList(arguments)).then(function (r) {
                        var p = that.contentPos;
                        if (Array.isArray(r)) {
                            return r.map(function (loc) {
                                return loc ? geom.wrap(loc).shift(p) : loc;
                            });
                        } else {
                            return r ? geom.wrap(r).shift(p) : r;
                        }
                    });
                }
            };
            return r;
        };
        return VisWindow;
    }(UIWindow);
    exports.VisWindow = VisWindow;
    function create(parent, options) {
        return new UIWindow(parent, options);
    }
    exports.create = create;
    function createVisWindow(parent, options) {
        return new VisWindow(parent, options);
    }
    exports.createVisWindow = createVisWindow;
}(require, exports, require('jquery'), require('../caleydo_core/event'), require('../caleydo_core/main'), require('../caleydo_core/behavior'), require('../caleydo_core/geom'), require('../caleydo_core/idtype'), require('jquery-ui'), require('font-awesome')));
},{"../caleydo_core/behavior":4,"../caleydo_core/event":7,"../caleydo_core/geom":8,"../caleydo_core/idtype":9,"../caleydo_core/main":13,"font-awesome":undefined,"jquery":undefined,"jquery-ui":undefined}],59:[function(require,module,exports){
(function (require, exports, C, cmode, d3, marked, idtype_1, player) {
    var modeFeatures = {
        isEditable: function () {
            return cmode.getMode().authoring > 0.8;
        }
    };
    var Renderer = function () {
        function Renderer($main, graph, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            this.$main = $main;
            this.graph = graph;
            this.options = {
                animation: true,
                duration: 100,
                markdown: true,
                renderSubtitle: false,
                subtitlePattern: '${name}'
            };
            this.prev = Promise.resolve(null);
            this.l = function (event, state, type, op, extras) {
                return _this.render(state, extras.withTransition !== false);
            };
            this.updateAnnotations = function () {
                return _this.renderAnnotationsImpl(_this.act);
            };
            this.rerender = function () {
                return _this.render(_this.act);
            };
            this.act = null;
            this.renderer = this.rendererImpl.bind(this);
            C.mixin(this.options, options);
            this.graph.on('select_slide_' + idtype_1.defaultSelectionType, this.l);
            C.onDOMNodeRemoved($main.node(), this.destroy.bind(this));
            cmode.on('modeChanged', this.rerender);
        }
        Renderer.prototype.rendererImpl = function (d) {
            if (modeFeatures.isEditable() && d.length === 0) {
                return '<i class="placeholder">Enter Text by Clicking (MarkDown supported)</i>';
            }
            if (this.act) {
                var vars = {
                    name: this.act.name,
                    duration: this.act.duration,
                    slide_number: this.act.slideIndex
                };
                var s = this.act.state;
                if (s) {
                    vars.state_name = s.name;
                    vars.state_notes = s.getAttr('notes');
                    var a = s.creator;
                    if (a) {
                        var aa = a.meta;
                        vars.action_name = aa.name;
                        vars.action_category = aa.category;
                        vars.action_operation = aa.operation;
                        vars.action_user = aa.user;
                        vars.action_ts = new Date(aa.timestamp);
                    }
                }
                d = this.replaceVariables(d, vars);
            }
            return this.options.markdown ? marked(d) : d;
        };
        Renderer.prototype.replaceVariables = function (d, vars) {
            return d.replace(/\$\{([^}]+)\}/gi, function (match, variable) {
                var r = vars[variable];
                if (r) {
                    return r;
                }
                return '${' + variable + '}?';
            });
        };
        Renderer.prototype.destroy = function () {
            this.graph.off('select_slide_' + idtype_1.defaultSelectionType, this.l);
            cmode.off('modeChanged', this.rerender);
        };
        Renderer.prototype.render = function (state, withTransition) {
            var _this = this;
            if (withTransition === void 0) {
                withTransition = true;
            }
            if (this.act) {
                this.act.off('push-annotations,attr-name,attr-duration', this.updateAnnotations);
            }
            this.prev = this.prev.then(function () {
                var takedown = _this.hideOld();
                _this.act = state;
                if (!state) {
                    return takedown;
                }
                _this.act.on('push-annotations,attr-name,attr-duration', _this.updateAnnotations);
                if (cmode.getMode().exploration > 0.8) {
                    return takedown;
                }
                var next = Promise.resolve(null);
                if (state.isTextOnly) {
                    next = _this.renderText(state);
                } else {
                    next = _this.graph.jumpTo(state.state, state.transition <= 0 || !withTransition ? player.MIN_TRANSITION : state.transition * player.FACTOR);
                }
                var all = [
                    takedown,
                    next,
                    _this.renderAnnotations(state)
                ];
                if (_this.options.renderSubtitle) {
                    all.push(_this.renderSubtitle(state));
                }
                return Promise.all(all);
            });
            return this.prev;
        };
        Renderer.prototype.renderAnnotationsImpl = function (state) {
            var _this = this;
            var that = this;
            var editable = modeFeatures.isEditable() && state != null;
            var $anns = this.$main.selectAll('div.annotation').data(state ? state.annotations : [], function (d, i) {
                return d.type + i;
            });
            var $anns_enter = $anns.enter().append('div').attr('class', function (d) {
                return d.type + '-annotation annotation';
            });
            var updateTransform = function (d) {
                return 'translate(' + d.pos[0] + ',' + d.pos[1] + ')rotate(' + (d.rotation || 0) + 'deg)';
            };
            $anns_enter.append('button').attr('tabindex', -1).attr('class', 'btn btn-default btn-xs fa fa-arrows').call(d3.behavior.drag().on('drag', function (d, i) {
                var mouse = d3.mouse(this.parentNode.parentNode);
                var bounds = C.bounds(this.parentNode.parentNode);
                d.pos = [
                    mouse[0] * 100 / bounds.w,
                    mouse[1] * 100 / bounds.h
                ];
                state.updateAnnotation(d);
                d3.select(this.parentNode).style('left', d.pos[0] + '%').style('top', d.pos[1] + '%');
            }));
            $anns_enter.append('button').attr('tabindex', -1).attr('class', 'btn btn-default btn-xs fa fa-times').on('click', function (d, i) {
                d3.select(this.parentNode).remove();
                state.removeAnnotationElem(d);
                d3.event.preventDefault();
            });
            $anns.filter(function (d) {
                return d.type === 'text' || !d.hasOwnProperty('type');
            }).call(function ($texts, $texts_enter) {
                var onEdit = function (d, i) {
                    var $elem = d3.select(this);
                    if (!d3.select(this.parentNode).classed('editable')) {
                        return;
                    }
                    $elem.on('click', null);
                    $elem.append('textarea').property('value', d.text).on('blur', function () {
                        d.text = this.value;
                        state.updateAnnotation(d);
                        $elem.html(that.renderer(this.value)).on('click', onEdit);
                    });
                };
                $texts_enter.append('div').classed('text', true).on('click', onEdit);
                $texts.select('div.text').html(function (d) {
                    return _this.renderer(d.text);
                }).style({
                    width: function (d) {
                        return d.size ? d.size[0] + 'px' : null;
                    },
                    height: function (d) {
                        return d.size ? d.size[1] + 'px' : null;
                    },
                    transform: updateTransform
                }).each(function (d) {
                    if (d.styles) {
                        d3.select(this).style(d.styles);
                    }
                });
            }, $anns_enter.filter(function (d) {
                return d.type === 'text' || !d.hasOwnProperty('type');
            }));
            $anns.filter(function (d) {
                return d.type === 'arrow';
            }).call(function ($arrows, $arrows_enter) {
                var $svg_enter = $arrows_enter.insert('svg', ':first-child').attr({
                    width: function (d) {
                        return 30 + Math.abs(d.at[0]);
                    },
                    height: function (d) {
                        return 30 + Math.abs(d.at[1]);
                    }
                }).style({
                    left: function (d) {
                        return -15 + Math.min(0, d.at[0]) + 'px';
                    },
                    top: function (d) {
                        return -15 + Math.min(0, d.at[1]) + 'px';
                    }
                });
                $svg_enter.append('defs').append('marker').attr({
                    id: function (d, i) {
                        return 'clue_text_arrow_marker' + i;
                    },
                    viewBox: '0 0 10 10',
                    refX: 6,
                    refY: 5,
                    markerWidth: 4,
                    markerHeight: 3,
                    markerUnits: 'strokeWidth',
                    orient: 'auto'
                }).append('path').attr('d', 'M 0 0 L 10 5 L 0 10 z');
                $svg_enter.append('g').append('line').classed('arrow', true).attr({
                    'marker-end': function (d, i) {
                        return 'url(#clue_text_arrow_marker' + i + ')';
                    }
                });
                var $svg = $arrows.select('svg');
                function updateShift() {
                    $svg.attr({
                        width: function (d) {
                            return 30 + Math.abs(d.at[0]);
                        },
                        height: function (d) {
                            return 30 + Math.abs(d.at[1]);
                        }
                    }).style({
                        left: function (d) {
                            return -15 + Math.min(0, d.at[0]) + 'px';
                        },
                        top: function (d) {
                            return -15 + Math.min(0, d.at[1]) + 'px';
                        }
                    });
                    $svg.select('g').attr('transform', function (d) {
                        return 'translate(' + (-Math.min(0, d.at[0]) + 15) + ',' + (-Math.min(0, d.at[1]) + 15) + ')';
                    });
                }
                $svg_enter.select('g').append('circle').classed('anchor', true).attr('r', 5);
                $svg.select('circle').style({
                    cx: function (d) {
                        return d.at[0];
                    },
                    cy: function (d) {
                        return d.at[1];
                    }
                }).call(d3.behavior.drag().on('drag', function (d, i) {
                    var e = d3.event;
                    d.at = [
                        e.x,
                        e.y
                    ];
                    state.updateAnnotation(d);
                    d3.select(this).style({
                        cx: d.at[0],
                        cy: d.at[1]
                    });
                    $svg.select('line[data-index="' + i + '"]').attr({
                        x2: d.at[0],
                        y2: d.at[1]
                    });
                    updateShift();
                }));
                updateShift();
                $svg.select('line').attr({
                    'data-index': function (d, i) {
                        return i;
                    },
                    x2: function (d) {
                        return d.at[0];
                    },
                    y2: function (d) {
                        return d.at[1];
                    }
                }).each(function (d) {
                    if (d.styles) {
                        d3.select(this).style(d.styles);
                    }
                });
            }, $anns_enter.filter(function (d) {
                return d.type === 'arrow';
            }));
            $anns.filter(function (d) {
                return d.type === 'frame';
            }).call(function ($frames, $frames_enter) {
                $frames.style({
                    width: function (d) {
                        return d.size[0] + '%';
                    },
                    height: function (d) {
                        return d.size[1] + '%';
                    }
                }).each(function (d) {
                    if (d.styles) {
                        d3.select(this).style(d.styles);
                    }
                });
                $frames_enter.append('button').attr('tabindex', -1).attr('class', 'btn btn-default btn-xs fa fa-expand fa-flip-horizontal').call(d3.behavior.drag().on('drag', function (d, i) {
                    var mouse = d3.mouse(this.parentNode.parentNode);
                    var bounds = C.bounds(this.parentNode.parentNode);
                    d.size = [
                        mouse[0] * 100 / bounds.w - d.pos[0],
                        mouse[1] * 100 / bounds.h - d.pos[1]
                    ];
                    state.updateAnnotation(d);
                    d3.select(this.parentNode).style({
                        width: function (d) {
                            return d.size ? d.size[0] + '%' : null;
                        },
                        height: function (d) {
                            return d.size ? d.size[1] + '%' : null;
                        }
                    });
                }));
            }, $anns_enter.filter(function (d) {
                return d.type === 'frame';
            }));
            $anns.style({
                left: function (d) {
                    return d.pos[0] + '%';
                },
                top: function (d) {
                    return d.pos[1] + '%';
                }
            }).classed('editable', editable);
            $anns.exit().remove();
            return $anns;
        };
        Renderer.prototype.renderAnnotations = function (state) {
            var _this = this;
            return new Promise(function (resolve) {
                var $anns = _this.renderAnnotationsImpl(state);
                if (_this.options.animation && !$anns.empty() && _this.options.duration > 0) {
                    $anns.style('opacity', 0).transition().duration(_this.options.duration).style('opacity', 1);
                    C.resolveIn(_this.options.duration).then(function () {
                        return resolve($anns.node());
                    });
                } else {
                    $anns.style('opacity', 1);
                    resolve($anns.node());
                }
            });
        };
        Renderer.prototype.hideOld = function () {
            var _this = this;
            return new Promise(function (resolve) {
                var $div = _this.$main.classed('hide-all-non-annotations', false).selectAll('div.annotation, div.text-overlay, div.add-text-annotation, div.subtitle-annotation');
                if (_this.options.animation && !$div.empty() && _this.options.duration > 0) {
                    $div.transition().duration(_this.options.duration).style('opacity', 0).remove();
                    C.resolveIn(_this.options.duration).then(function () {
                        return resolve();
                    });
                } else {
                    $div.remove();
                    resolve();
                }
            });
        };
        Renderer.prototype.renderSubtitle = function (overlay) {
            var _this = this;
            return new Promise(function (resolve) {
                _this.$main.append('div').attr('class', 'subtitle-annotation').html(_this.renderer(_this.options.subtitlePattern));
                resolve(_this.$main.node());
            });
        };
        Renderer.prototype.renderText = function (overlay) {
            var _this = this;
            var t = overlay.transition * player.FACTOR;
            return C.resolveIn(t).then(function () {
                _this.$main.classed('hide-all-non-annotations', true);
                return _this.$main.node();
            });
        };
        return Renderer;
    }();
    exports.Renderer = Renderer;
    function create(main, graph) {
        var instance = new Renderer(d3.select(main), graph);
        return { render: instance.render.bind(instance) };
    }
    exports.create = create;
}(require, exports, require('../caleydo_core/main'), require('../caleydo_provenance/mode'), require('d3'), require('marked'), require('../caleydo_core/idtype'), require('../caleydo_provenance/player')));
},{"../caleydo_core/idtype":9,"../caleydo_core/main":13,"../caleydo_provenance/mode":41,"../caleydo_provenance/player":43,"d3":undefined,"marked":undefined}],60:[function(require,module,exports){
(function (require, exports, C, $, idtypes, provenance, cmode, dialogs, d3, vis, utils) {
    function extractTags(text) {
        var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
        var match;
        var matches = [];
        while (match = regex.exec(text)) {
            matches.push(match[1]);
        }
        return matches;
    }
    var LevelOfDetail;
    (function (LevelOfDetail) {
        LevelOfDetail[LevelOfDetail['ExtraSmall'] = 0] = 'ExtraSmall';
        LevelOfDetail[LevelOfDetail['Small'] = 1] = 'Small';
        LevelOfDetail[LevelOfDetail['Medium'] = 2] = 'Medium';
        LevelOfDetail[LevelOfDetail['Large'] = 3] = 'Large';
    }(LevelOfDetail || (LevelOfDetail = {})));
    var DOI_LARGE = 0.9;
    var DOI_MEDIUM = 0.7;
    var DOI_SMALL = 0.4;
    function getLevelOfDetail() {
        var mode = cmode.getMode();
        if (mode.presentation > 0.3) {
            return LevelOfDetail.ExtraSmall;
        }
        if (mode.authoring >= 0.8) {
            return LevelOfDetail.Large;
        }
        return LevelOfDetail.Medium;
    }
    var StateRepr = function () {
        function StateRepr(s, graph) {
            this.s = s;
            this.graph = graph;
            this.xy = [
                0,
                0
            ];
            this.selected = false;
            this.parent = null;
            this.children = [];
            this.a = null;
            this.doi = 0.1;
            this.a = s.creator;
        }
        Object.defineProperty(StateRepr.prototype, 'thumbnail', {
            get: function () {
                return 'url(' + utils.thumbnail_url(this.graph, this.s) + ')';
            },
            enumerable: true,
            configurable: true
        });
        StateRepr.prototype.build = function (lookup, line) {
            var p = this.s.previousState;
            if (p) {
                this.parent = lookup[p.id];
                if (line.indexOf(this) >= 0) {
                    this.parent.children.unshift(this);
                } else {
                    this.parent.children.push(this);
                }
            }
        };
        Object.defineProperty(StateRepr.prototype, 'flatChildren', {
            get: function () {
                var r = this.children.slice();
                this.children.forEach(function (c) {
                    return r.push.apply(r, c.flatChildren);
                });
                return r;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateRepr.prototype, 'cx', {
            get: function () {
                return this.xy[0] + 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateRepr.prototype, 'cy', {
            get: function () {
                return this.xy[1] + 13;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateRepr.prototype, 'lod_local', {
            get: function () {
                if (this.doi >= DOI_LARGE) {
                    return LevelOfDetail.Large;
                }
                if (this.doi >= DOI_MEDIUM) {
                    return LevelOfDetail.Medium;
                }
                if (this.doi >= DOI_SMALL) {
                    return LevelOfDetail.Small;
                }
                return LevelOfDetail.ExtraSmall;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateRepr.prototype, 'lod', {
            get: function () {
                var global = getLevelOfDetail();
                var local = this.lod_local;
                return global < local ? global : local;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateRepr.prototype, 'size', {
            get: function () {
                switch (this.lod) {
                case LevelOfDetail.Large:
                    return [
                        50,
                        40
                    ];
                case LevelOfDetail.Medium:
                    return [
                        30,
                        18
                    ];
                case LevelOfDetail.Small:
                    return [
                        30,
                        18
                    ];
                default:
                    return [
                        10,
                        7
                    ];
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateRepr.prototype, 'name', {
            get: function () {
                return this.s.name;
            },
            enumerable: true,
            configurable: true
        });
        StateRepr.toRepr = function (graph, highlight, options) {
            if (options === void 0) {
                options = {};
            }
            var lookup = {};
            var selected = graph.act;
            var selected_path = selected.path.reverse();
            var lod = getLevelOfDetail();
            var size = graph.states.length;
            var toState = function (s) {
                var r = new StateRepr(s, graph);
                var a = s.creator;
                var meta = a ? a.meta : provenance.meta('No', 'none', 'none');
                var category = highlight.category[meta.category] ? 1 : 0;
                var operation = highlight.operation[meta.operation] ? 1 : 0;
                var bookmark = s.getAttr('starred', false) ? 1 : 0;
                var tags = highlight.tags.length > 0 ? s.getAttr('tags', []).some(function (d) {
                    return highlight.tags.indexOf(d) >= 0;
                }) ? 1 : 0 : 0;
                var is_selected = s === selected ? 3 : 0;
                var inpath = selected_path.indexOf(s) >= 0 ? Math.max(-2.5, 6 - selected_path.indexOf(s)) : -2.5;
                var sizePenality = Math.max(-1, -size / 10);
                var sum = 6 + is_selected + inpath + sizePenality;
                r.doi = d3.round(Math.max(0, Math.min(10, sum)) / 10, 1);
                if (category + operation + bookmark + tags > 0) {
                    r.doi = Math.max(r.doi, DOI_SMALL);
                }
                if (!utils.areThumbnailsAvailable(graph) || options.thumbnails === false) {
                    r.doi = Math.min(r.doi, DOI_LARGE - 0.01);
                }
                r.selected = s === selected;
                lookup[s.id] = r;
                return r;
            };
            var states = (lod < LevelOfDetail.Medium ? selected_path : graph.states).map(toState);
            var line = selected.path.map(function (p) {
                return lookup[p.id];
            });
            states.forEach(function (s) {
                return s.build(lookup, line);
            });
            this.layout(states, line);
            return states;
        };
        StateRepr.layout = function (states, line) {
            var byLevel = [];
            var root = states.filter(function (s) {
                return s.parent === null;
            })[0];
            byLevel.push([root]);
            byLevel.push(root.children.slice());
            while (byLevel[byLevel.length - 1].length > 0) {
                byLevel.push([].concat.apply([], byLevel[byLevel.length - 1].map(function (c) {
                    return c.children.slice();
                })));
            }
            byLevel.forEach(function (level, i) {
                if (i < line.length) {
                    level.splice(level.indexOf(line[i]), 1);
                    level.unshift(line[i]);
                }
            });
            var changed = false, loop = 0;
            do {
                changed = false;
                loop++;
                byLevel.forEach(function (level, i) {
                    for (var j = 0; j < level.length; ++j) {
                        var s = level[j];
                        if (s) {
                            s.xy = [
                                j,
                                i
                            ];
                            if (s.children.length > 0) {
                                var start = byLevel[i + 1].indexOf(s.children[0]);
                                changed = changed || start !== j;
                                if (start < j) {
                                    byLevel[i + 1].splice.apply(byLevel[i + 1], [
                                        start,
                                        0
                                    ].concat(d3.range(j - start).map(function (d) {
                                        return null;
                                    })));
                                } else if (j < start && j > 0) {
                                    level.splice.apply(level, [
                                        j,
                                        0
                                    ].concat(d3.range(start - j).map(function (d) {
                                        return null;
                                    })));
                                    s.xy[0] = start;
                                    j = start;
                                }
                            }
                        }
                    }
                });
            } while (changed && loop < 5);
            byLevel = byLevel.filter(function (d) {
                return d.length > 0;
            });
            byLevel.forEach(function (level) {
                var s = level[0];
                if (s && s.lod === LevelOfDetail.Small) {
                    s.doi = 0.8;
                }
            });
            var colwidths = [], rowheights = [];
            states.forEach(function (s) {
                colwidths[s.xy[0]] = Math.max(colwidths[s.xy[0]] || 0, s.size[0]);
                rowheights[s.xy[1]] = Math.max(rowheights[s.xy[1]] || 0, s.size[1]);
            });
            var acccolwidths = colwidths.reduce(function (arr, b, i) {
                    arr[i + 1] = arr[arr.length - 1] + b;
                    return arr;
                }, [0]), accrowheights = rowheights.reduce(function (arr, b, i) {
                    arr[i + 1] = arr[arr.length - 1] + b;
                    return arr;
                }, [0]);
            acccolwidths.shift();
            states.forEach(function (s) {
                var xy = s.xy;
                var x = acccolwidths[acccolwidths.length - 1] - acccolwidths[xy[0]] + 5;
                var y = accrowheights[xy[1]];
                s.xy = [
                    x,
                    y
                ];
            });
        };
        StateRepr.toIcon = function (repr) {
            if (!repr.a) {
                return '';
            }
            var meta = repr.a.meta;
            var cat_icons = {
                visual: 'bar-chart',
                data: 'database',
                logic: 'gear',
                layout: 'desktop',
                selection: 'pencil-square'
            };
            var type_icons = {
                create: 'plus',
                update: 'refresh',
                remove: 'remove'
            };
            return '<span title="' + meta.name + ' @ ' + meta.timestamp + ' (' + meta.user + ')"><i class="fa fa-' + cat_icons[meta.category] + '"></i><i class="super fa fa-' + type_icons[meta.operation] + '"></i></span>';
        };
        StateRepr.render = function ($elem) {
            $elem.classed('doi-xs', function (d) {
                return d.lod === LevelOfDetail.ExtraSmall;
            }).classed('doi-sm', function (d) {
                return d.lod === LevelOfDetail.Small;
            }).classed('doi', function (d) {
                return d.lod === LevelOfDetail.Medium;
            }).classed('doi-lg', function (d) {
                return d.lod === LevelOfDetail.Large;
            }).classed('select-selected', function (d) {
                return d.selected;
            }).classed('bookmarked', function (d) {
                return d.s.getAttr('starred', false);
            }).attr('data-doi', function (d) {
                return d.doi;
            }).attr('title', function (d) {
                return d.name;
            });
            $elem.select('span.icon').html(StateRepr.toIcon);
            $elem.select('span.slabel').text(function (d) {
                return d.name;
            });
            $elem.select('i.bookmark').classed('fa-bookmark-o', function (d) {
                return !d.s.getAttr('starred', false);
            }).classed('fa-bookmark', function (d) {
                return d.s.getAttr('starred', false);
            });
            $elem.select('div.sthumbnail').style('background-image', function (d) {
                return d.lod === LevelOfDetail.Large ? d.thumbnail : null;
            });
            $elem.transition().style({
                'padding-left': function (d) {
                    return d.xy[0] + 4 + 'px';
                },
                top: function (d) {
                    return d.xy[1] + 'px';
                }
            });
        };
        StateRepr.prototype.showDialog = function () {
            var d = this;
            var icon = StateRepr.toIcon(d);
            var title = d.s.name;
            var dia = dialogs.generateDialog('<span class="icon">' + icon + '</span>' + title);
            var thumbnail = utils.thumbnail_url(d.graph, d.s, {
                width: 512,
                format: 'png'
            });
            var notes = d.s.getAttr('note', '');
            var starred = d.s.getAttr('starred', false);
            var $body = d3.select(dia.body);
            $body.html('\n    <form class="state_info" onsubmit="return false">\n      <span class="star fa fa-' + (starred ? 'bookmark-o' : 'bookmark-o') + '" title="bookmark this state for latter use"></span>\n      <div class="img"><img src="' + thumbnail + '"></div>\n      <div class="form-group">\n        <label>Name</label>\n        <input type="text" class="form-control" placeholder="name" value="' + title + '">\n      </div>\n      <div class="form-group">\n        <label>Notes</label>\n        <textarea class="form-control" placeholder="place for notes... (#tags will be automatically extracted)">' + notes + '</textarea>\n      </div>\n      <div class="form-group">\n        <label>Extracted Tags</label>\n        <input type="text" class="form-control readonly" readonly="readonly" value="' + extractTags(notes).join(' ') + '">\n      </div>\n    </form>');
            $body.select('span.star').on('click', function () {
                d.s.setAttr('starred', !d.s.getAttr('starred', false));
                $(this).toggleClass('fa-bookmark-o').toggleClass('fa-bookmark');
                return false;
            });
            $body.select('textarea').on('input', function () {
                $body.select('input.readonly').property('value', extractTags(this.value).join(' '));
            });
            dia.onHide(function () {
                var name = $body.select('input').property('value');
                d.s.name = name;
                var val = $body.select('textarea').property('value');
                d.s.setAttr('tags', extractTags(val));
                d.s.setAttr('note', val);
            });
            dia.show();
        };
        return StateRepr;
    }();
    var LayoutedProvVis = function (_super) {
        __extends(LayoutedProvVis, _super);
        function LayoutedProvVis(data, parent, options) {
            var _this = this;
            _super.call(this);
            this.data = data;
            this.parent = parent;
            this.options = options;
            this.trigger = C.bind(this.update, this);
            this.triggerStoryHighlight = C.bind(this.updateStoryHighlight, this);
            this.onStateAdded = function (event, state) {
                state.on('setAttr', _this.trigger);
            };
            this.onSelectionChanged = function (event, type, act) {
                var selectedStates = _this.data.selectedStates(type);
                _this.$node.selectAll('div.state').classed('select-' + type, function (d) {
                    var isSelected = selectedStates.indexOf(d.s) >= 0;
                    if (isSelected && type === idtypes.defaultSelectionType) {
                        this.scrollIntoView();
                    }
                    return isSelected;
                });
            };
            this.line = d3.svg.line().interpolate('step-after').x(function (d) {
                return d.cx;
            }).y(function (d) {
                return d.cy;
            });
            this.dim = [
                200,
                100
            ];
            this.highlight = {
                category: {
                    data: false,
                    visual: false,
                    selection: false,
                    logic: false,
                    layout: false,
                    none: false
                },
                operation: {
                    create: false,
                    remove: false,
                    update: false,
                    none: false
                },
                tags: []
            };
            this.options = C.mixin({ thumbnails: true }, options);
            this.options.scale = [
                1,
                1
            ];
            this.options.rotate = 0;
            this.$node = this.build(d3.select(parent));
            C.onDOMNodeRemoved(this.node, this.destroy, this);
            this.bind();
            this.update();
        }
        LayoutedProvVis.prototype.bind = function () {
            var _this = this;
            this.data.on('switch_state,forked_branch,clear', this.trigger);
            this.data.on('add_slide,move_slide,remove_slide', this.triggerStoryHighlight);
            this.data.on('add_state', this.onStateAdded);
            this.data.on('select', this.onSelectionChanged);
            this.data.states.forEach(function (s) {
                s.on('setAttr', _this.trigger);
            });
            cmode.on('modeChanged', this.trigger);
        };
        LayoutedProvVis.prototype.destroy = function () {
            var _this = this;
            _super.prototype.destroy.call(this);
            this.data.off('switch_state,clear', this.trigger);
            this.data.off('add_slide,move_slidey,remove_slide', this.triggerStoryHighlight);
            this.data.off('add_state', this.onStateAdded);
            this.data.off('select', this.onSelectionChanged);
            this.data.states.forEach(function (s) {
                s.off('setAttr', _this.trigger);
            });
            cmode.off('modeChanged', this.trigger);
        };
        Object.defineProperty(LayoutedProvVis.prototype, 'rawSize', {
            get: function () {
                return this.dim;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayoutedProvVis.prototype, 'node', {
            get: function () {
                return this.$node.node();
            },
            enumerable: true,
            configurable: true
        });
        LayoutedProvVis.prototype.option = function (name, val) {
            if (arguments.length === 1) {
                return this.options[name];
            } else {
                this.fire('option.' + name, val, this.options[name]);
                this.options[name] = val;
            }
        };
        LayoutedProvVis.prototype.locateImpl = function (range) {
            return Promise.resolve(null);
        };
        LayoutedProvVis.prototype.build = function ($parent) {
            var $p = $parent.append('aside').attr({ 'class': 'provenance-layout-vis' }).style('transform', 'rotate(' + this.options.rotate + 'deg)');
            $p.html('\n      <div>\n        <h2><i class="fa fa-code-fork fa-rotate-180"></i> Provenance <i class="fa fa-filter"></i></h2>\n        <form class="form-inline toolbar" style="display:none" onsubmit="return false;">\n        <div class="btn-group" data-toggle="buttons">\n          <label class="btn btn-default btn-xs" title="data actions">\n            <input type="checkbox" autocomplete="off" name="category" value="data" > <i class="fa fa-database"></i>\n          </label>\n          <label class="btn btn-default btn-xs" title="visual actions">\n            <input type="checkbox" autocomplete="off" name="category" value="visual"> <i class="fa fa-bar-chart"></i>\n          </label>\n          <label class="btn btn-default btn-xs" title="selection actions">\n            <input type="checkbox" autocomplete="off" name="category" value="selection"> <i class="fa fa-pencil-square"></i>\n          </label>\n          <label class="btn btn-default btn-xs" title="layout actions">\n            <input type="checkbox" autocomplete="off" name="category" value="layout"> <i class="fa fa-desktop"></i>\n          </label>\n          <label class="btn btn-default btn-xs" title="logic actions">\n            <input type="checkbox" autocomplete="off" name="category" value="logic"> <i class="fa fa-gear"></i>\n          </label>\n        </div>\n\n        <div class="btn-group" data-toggle="buttons">\n          <label class="btn btn-default btn-xs" title="create actions">\n            <input type="checkbox" autocomplete="off" name="operation" value="create"> <i class="fa fa-plus"></i>\n          </label>\n          <label class="btn btn-default btn-xs" title="update actions">\n            <input type="checkbox" autocomplete="off" name="operation" value="update"> <i class="fa fa-refresh"></i>\n          </label>\n          <label class="btn btn-default btn-xs" title="remove actions">\n            <input type="checkbox" autocomplete="off" name="operation" value="remove"> <i class="fa fa-remove"></i>\n          </label>\n        </div>\n\n        <div class="btn-group" data-toggle="buttons">\n          <div class="form-group btn-group">\n            <div class="btn-group btn-group-xs" role="group">\n              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"\n                      aria-expanded="false">\n                <i class="fa fa-tags"></i><span class="caret"></span>\n              </button>\n              <div class="dropdown-menu dropdown-menu-right">\n                <div class="input-group input-group-sm">\n                  <span class="input-group-addon" title="tagged states"><i class="fa fa-tags"></i></span>\n                  <input name="tags" type="text" class="form-control input-sm" placeholder="tags">\n                </div>\n              </div>\n            </div>\n          </div>\n         </div>\n        </form>\n      </div>\n      <div style="position: relative">\n        <svg>\n          <g transform="translate(1,1)" class="edges"></g>\n          <g transform="translate(1,1)" class="storyhighlights" style="display:none">\n            <path class="story"></path>\n          </g>\n        </svg>\n        <div class="states"></div>\n      </div>\n      <div class="legend">\n        <div class="btn-group-vertical" data-toggle="buttons">\n          <label class="btn btn-default btn-xs" title="data actions">\n            <input type="checkbox" autocomplete="off" name="category" value="data"> <i class="fa fa-database"></i> Data\n          </label>\n          <label class="btn btn-default btn-xs" title="visual actions">\n            <input type="checkbox" autocomplete="off" name="category" value="visual"> <i class="fa fa-bar-chart"></i> Visual\n          </label>\n          <label class="btn btn-default btn-xs" title="selection actions">\n            <input type="checkbox" autocomplete="off" name="category" value="selection" > <i class="fa fa-pencil-square"></i> Selections\n          </label>\n          <label class="btn btn-default btn-xs" title="layout actions">\n            <input type="checkbox" autocomplete="off" name="category" value="layout"> <i class="fa fa-desktop"></i> Layout\n          </label>\n          <label class="btn btn-default btn-xs" title="logic actions">\n            <input type="checkbox" autocomplete="off" name="category" value="logic"> <i class="fa fa-gear"></i> Analysis\n          </label>\n        </div>\n      </div>\n    ');
            var jp = $($p.node());
            var that = this;
            jp.find('form.toolbar input, .legend input').on('change', function () {
                if (this.type === 'text') {
                    that.highlight.tags = this.value.split(' ');
                    jp.find('button[data-toggle="dropdown"]').toggleClass('active', that.highlight.tags.length > 0);
                } else {
                    that.highlight[this.name][this.value] = this.checked;
                }
                that.update();
            });
            jp.find('*[data-toggle="buttons"],.btn[data-toggle="button"]').button();
            jp.find('h2 i').on('click', function () {
                jp.find('form.toolbar').toggle('fast');
            });
            return $p;
        };
        LayoutedProvVis.prototype.onStateClick = function (d) {
            d3.event.stopPropagation();
            this.data.selectState(d.s, idtypes.toSelectOperation(d3.event));
            this.data.jumpTo(d.s);
        };
        LayoutedProvVis.prototype.update = function () {
            var _this = this;
            var that = this;
            var graph = this.data;
            var lod = getLevelOfDetail();
            this.$node.classed('large', lod === LevelOfDetail.Large);
            this.$node.classed('medium', lod === LevelOfDetail.Medium);
            this.$node.classed('small', lod === LevelOfDetail.Small);
            this.$node.classed('xsmall', lod === LevelOfDetail.ExtraSmall);
            var states = StateRepr.toRepr(graph, this.highlight, { thumbnails: this.options.thumbnails });
            var $states = this.$node.select('div.states').selectAll('div.state').data(states, function (d) {
                return '' + d.s.id;
            });
            var $states_enter = $states.enter().append('div').classed('state', true).attr('data-id', function (d) {
                return d.s.id;
            }).append('div').on('click', this.onStateClick.bind(this)).on('mouseenter', function (d) {
                return graph.selectState(d.s, idtypes.SelectOperation.SET, idtypes.hoverSelectionType);
            }).on('mouseleave', function (d) {
                return graph.selectState(d.s, idtypes.SelectOperation.REMOVE, idtypes.hoverSelectionType);
            }).attr('draggable', true).on('dragstart', function (d) {
                var e = d3.event;
                e.dataTransfer.effectAllowed = 'copy';
                e.dataTransfer.setData('text/plain', d.s.name);
                e.dataTransfer.setData('application/caleydo-prov-state', String(d.s.id));
            }).on('dragenter', function () {
                if (C.hasDnDType(d3.event, 'application/caleydo-prov-state')) {
                    d3.select(this).classed('hover', true);
                    return false;
                }
            }).on('dragover', function () {
                if (C.hasDnDType(d3.event, 'application/caleydo-prov-state')) {
                    d3.event.preventDefault();
                    C.updateDropEffect(d3.event);
                    return false;
                }
            }).on('dragleave', function () {
                d3.select(this).classed('hover', false);
            }).on('drop', function (d) {
                d3.select(this).classed('hover', false);
                var e = d3.event;
                e.preventDefault();
                var state = that.data.getStateById(parseInt(e.dataTransfer.getData('application/caleydo-prov-state'), 10));
                that.data.fork(state.creator, d.s);
                return false;
            });
            var $inner = $states_enter;
            $inner.append('i').attr('class', 'fa fa-circle glyph');
            $inner.append('span').classed('icon', true);
            $inner.append('span').classed('slabel', true);
            $inner.append('div').classed('sthumbnail', true);
            var $toolbar_enter = $states_enter.append('div').classed('toolbar', true);
            $toolbar_enter.append('i').attr('class', 'fa bookmark fa-bookmark-o').on('click', function (d) {
                var v = !d.s.getAttr('starred', false);
                d.s.setAttr('starred', v);
                d3.select(this).classed('fa-bookmark', v).classed('fa-bookmark-o', !v);
                d3.event.stopPropagation();
                d3.event.preventDefault();
            });
            $toolbar_enter.append('i').attr('class', 'fa fa-edit').on('click', function (d) {
                d.showDialog();
                d3.event.stopPropagation();
                d3.event.preventDefault();
            });
            $states.call(StateRepr.render);
            $states.exit().remove();
            var edges = [];
            states.forEach(function (s) {
                edges.push.apply(edges, s.children.map(function (c) {
                    return {
                        s: s,
                        t: c
                    };
                }));
            });
            this.dim = [
                d3.max(states, function (s) {
                    return s.xy[0] + s.size[0];
                }) + (lod >= LevelOfDetail.Medium ? 200 : 0),
                d3.max(states, function (s) {
                    return s.xy[1] + s.size[1];
                })
            ];
            this.$node.select('svg').attr('width', this.dim[0]).attr('height', this.dim[1]);
            var $edges = this.$node.select('svg g.edges').selectAll('path').data(edges, function (d) {
                return d.s.s.id + '-' + d.t.s.id;
            });
            $edges.enter().append('path');
            $edges.transition().attr('d', function (d) {
                return _this.line([
                    d.s,
                    d.t
                ]);
            });
            $edges.exit().remove();
            this.updateStoryHighlight();
        };
        LayoutedProvVis.prototype.updateStoryHighlight = function () {
            var $g = this.$node.select('svg g.storyhighlights');
            var $states = this.$node.select('div.states').selectAll('div.state');
            var states = $states.data();
            var lookup = {};
            states.forEach(function (s) {
                return lookup[s.s.id] = s;
            });
            var firstSlide = this.data.selectedSlides()[0] || this.data.getSlideChains()[0];
            if (firstSlide) {
                $g.style('display', null);
                while (firstSlide.previous) {
                    firstSlide = firstSlide.previous;
                }
                var line = provenance.toSlidePath(firstSlide).map(function (s) {
                    return s.state ? lookup[s.state.id] : null;
                }).filter(function (d) {
                    return !!d;
                });
                $states.classed('story_member', function (d) {
                    return line.indexOf(d) >= 0;
                });
                $g.select('path').attr('d', this.line.interpolate('linear')(line));
                this.line.interpolate('step-after');
            } else {
                $g.style('display', 'none');
            }
        };
        return LayoutedProvVis;
    }(vis.AVisInstance);
    exports.LayoutedProvVis = LayoutedProvVis;
    function create(data, parent, options) {
        if (options === void 0) {
            options = {};
        }
        return new LayoutedProvVis(data, parent, options);
    }
    exports.create = create;
}(require, exports, require('../caleydo_core/main'), require('jquery'), require('../caleydo_core/idtype'), require('../caleydo_provenance/main'), require('../caleydo_provenance/mode'), require('../wrapper_bootstrap_fontawesome/dialogs'), require('d3'), require('../caleydo_core/vis'), require('./utils')));
},{"../caleydo_core/idtype":9,"../caleydo_core/main":13,"../caleydo_core/vis":28,"../caleydo_provenance/main":40,"../caleydo_provenance/mode":41,"../wrapper_bootstrap_fontawesome/dialogs":65,"./utils":63,"d3":undefined,"jquery":undefined}],61:[function(require,module,exports){
(function (require, exports, C, provenance, idtypes, cmode, dialogs, d3, vis, utils, marked, player) {
    function to_duration(d) {
        var mm_ss = d3.time.format('%M:%S');
        return mm_ss(new Date(d));
    }
    function to_starting_time(d, story) {
        if (!d) {
            return d3.sum(story, function (d) {
                return d.duration + d.transition;
            });
        }
        var i = story.indexOf(d);
        return story.slice(0, i).reduce(function (a, b) {
            return a + b.duration + b.transition;
        }, d.transition);
    }
    var LevelOfDetail;
    (function (LevelOfDetail) {
        LevelOfDetail[LevelOfDetail['None'] = 0] = 'None';
        LevelOfDetail[LevelOfDetail['Small'] = 1] = 'Small';
        LevelOfDetail[LevelOfDetail['Medium'] = 2] = 'Medium';
        LevelOfDetail[LevelOfDetail['Large'] = 3] = 'Large';
    }(LevelOfDetail || (LevelOfDetail = {})));
    function getLevelOfDetail() {
        var mode = cmode.getMode();
        if (mode.presentation >= 0.8) {
            return LevelOfDetail.Large;
        }
        if (mode.exploration > 0.3) {
            return LevelOfDetail.None;
        }
        if (mode.authoring >= 0.8) {
            return LevelOfDetail.Large;
        }
        return LevelOfDetail.Medium;
    }
    function isEditAble() {
        return getLevelOfDetail() >= LevelOfDetail.Large;
    }
    var VerticalStoryVis = function (_super) {
        __extends(VerticalStoryVis, _super);
        function VerticalStoryVis(data, parent, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            _super.call(this);
            this.data = data;
            this.parent = parent;
            this.trigger = C.bind(this.update, this);
            this.onSelectionChanged = function (event, slide, type, op, extras) {
                _this.$node.selectAll('div.story:not(.placeholder)').classed('select-' + type, function (d) {
                    var isSelected = d === slide;
                    if (isSelected && type === idtypes.defaultSelectionType) {
                        this.scrollIntoView();
                    }
                    return isSelected;
                });
                if (type === idtypes.defaultSelectionType) {
                    _this.updateTimeIndicator(slide, extras.withTransition !== false);
                }
            };
            this.onStateSelectionChanged = function (event, state, type, op, extras) {
                if (!state || extras.slideSelected === true) {
                    return;
                }
                var slide = cmode.getMode().exploration < 0.8 ? _this.findSlideForState(state) : null;
                var selected = _this.data.selectedSlides(type);
                if (slide && selected.indexOf(slide) >= 0 || !slide && selected.length === 0) {
                    return;
                }
                if (type === idtypes.defaultSelectionType) {
                    _this.data.selectSlide(slide, idtypes.SelectOperation.SET, idtypes.defaultSelectionType, { withTransition: false });
                } else {
                    _this.data.selectSlide(slide, idtypes.SelectOperation.SET, type);
                }
            };
            this.options = {
                scale: [
                    1,
                    1
                ],
                rotate: 0,
                class: 'vertical',
                xy: 'y',
                wh: 'height',
                topleft: 'top',
                thumbnails: true
            };
            this.duration2pixel = d3.scale.linear().domain([
                0,
                10000
            ]).range([
                VerticalStoryVis.MIN_HEIGHT,
                200
            ]);
            this.story = null;
            this.player = null;
            this.options = C.mixin(this.options, options);
            if (this.options.class === 'horizontal') {
                this.options.xy = 'x';
                this.options.wh = 'width';
                this.options.topleft = 'left';
            }
            this.$node = this.build(d3.select(parent));
            C.onDOMNodeRemoved(this.node, this.destroy, this);
            this.player = new player.Player(data, this.node.querySelector('#player_controls'));
            this.bind();
            this.story = this.data.selectedSlides()[0] || this.data.getSlideChains()[0];
            this.update();
        }
        VerticalStoryVis.prototype.findSlideForState = function (state) {
            if (!this.story) {
                return null;
            }
            return C.search(provenance.toSlidePath(this.story), function (s) {
                return s.state === state;
            });
        };
        VerticalStoryVis.prototype.bind = function () {
            this.data.on('select_slide', this.onSelectionChanged);
            this.data.on('select_state', this.onStateSelectionChanged);
            this.data.on('start_slide,destroy_slide', this.trigger);
            cmode.on('modeChanged', this.trigger);
        };
        VerticalStoryVis.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.data.off('select_slide', this.onSelectionChanged);
            this.data.off('select_state', this.onStateSelectionChanged);
            this.data.off('start_slide,destroy_slide', this.trigger);
            cmode.off('modeChanged', this.trigger);
        };
        Object.defineProperty(VerticalStoryVis.prototype, 'rawSize', {
            get: function () {
                return [
                    300,
                    500
                ];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VerticalStoryVis.prototype, 'node', {
            get: function () {
                return this.$node.node();
            },
            enumerable: true,
            configurable: true
        });
        VerticalStoryVis.prototype.option = function (name, val) {
            if (arguments.length === 1) {
                return this.options[name];
            } else {
                this.fire('option.' + name, val, this.options[name]);
                this.options[name] = val;
            }
        };
        VerticalStoryVis.prototype.locateImpl = function (range) {
            return Promise.resolve(null);
        };
        VerticalStoryVis.prototype.transform = function (scale, rotate) {
            if (rotate === void 0) {
                rotate = 0;
            }
            var bak = {
                scale: this.options.scale || [
                    1,
                    1
                ],
                rotate: this.options.rotate || 0
            };
            if (arguments.length === 0) {
                return bak;
            }
            var dims = this.data.dim;
            var width = 20, height = dims[0];
            this.$node.attr({
                width: width * scale[0],
                height: height * scale[1]
            }).style('transform', 'rotate(' + rotate + 'deg)');
            var new_ = {
                scale: scale,
                rotate: rotate
            };
            this.fire('transform', new_, bak);
            this.options.scale = scale;
            this.options.rotate = rotate;
            return new_;
        };
        VerticalStoryVis.prototype.switchTo = function (story) {
            if (story) {
                var story_start = story;
                while (story_start.previous) {
                    story_start = story_start.previous;
                }
                this.story = story_start;
                this.data.selectSlide(story);
            } else {
                this.story = null;
            }
            this.update();
        };
        VerticalStoryVis.prototype.build = function ($parent) {
            var $node = $parent.append('aside').attr({ 'class': 'provenance-story-vis ' + this.options.class }).style('transform', 'rotate(' + this.options.rotate + 'deg)');
            $node.html('\n      <div>\n        <h2><i class="fa fa-video-camera"></i> Story <i class="fa fa-plus-circle"></i></h2>\n        <form class="form-inline toolbar" style="display: none" onsubmit="return false;">\n        <div class="btn-group btn-group-xs" role="group">\n          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"\n                  aria-expanded="false">\n            Select<span class="caret"></span>\n          </button>\n          <ul class="dropdown-menu" id="story_list">\n            <!--<li><a href="#">A</a></li>-->\n          </ul>\n        </div>\n        <div class="btn-group btn-group-xs" data-toggle="buttons">\n          <button class="btn btn-default btn-xs" data-create="plus" title="create a new story"><i class="fa fa-plus"></i> New Story</button>\n          <button class="btn btn-default btn-xs" data-create="clone" title="create a new story by extracting the current path"><i class="fa fa-files-o"></i> Extract</button>\n          <button class="btn btn-default btn-xs" data-create="bookmark" title="create a new story by extracting all bookmarked ones"><i class="fa fa-bookmark"></i> Bookmarked</button>\n        </div>\n        </form>\n      </div>\n      <div class="stories ' + this.options.class + '">\n        <div class="line"></div>\n        <div class="time_marker"><i class="fa fa-circle"></i></div>\n      </div>\n      <div><div id="player_controls">\n        <button data-player="backward" class="btn btn-xs btn-default fa fa-step-backward"\n                  title="Step Backward"></button>\n          <button data-player="play" class="btn btn-default btn fa fa-play" title="Play"></button>\n          <button data-player="forward" class="btn btn-xs btn-default fa fa-step-forward" title="Step Forward"></button>\n          </div>\n       </div>\n    ');
            var that = this;
            $node.selectAll('button[data-create]').on('click', function () {
                var create = this.dataset.create;
                var story;
                switch (create) {
                case 'plus':
                    story = that.data.startNewSlide('Welcome');
                    break;
                case 'clone':
                    var state = that.data.selectedStates()[0] || that.data.act;
                    story = that.data.startNewSlide('My story to ' + (state ? state.name : 'heaven'), state ? state.path : []);
                    break;
                case 'bookmark':
                    var states = that.data.states.filter(function (d) {
                        return d.getAttr('starred', false);
                    });
                    story = that.data.startNewSlide('My favorite findings', states);
                    break;
                }
                that.switchTo(story);
                return false;
            });
            var jp = $($node.node());
            jp.find('.dropdown-toggle').dropdown();
            jp.find('h2 i').on('click', function () {
                jp.find('form.toolbar').toggle('fast');
            });
            if (this.data.getSlideChains().length === 0) {
                jp.find('form.toolbar').toggle('fast');
            }
            return $node;
        };
        VerticalStoryVis.prototype.pushAnnotation = function (ann) {
            var selected = this.data.selectedSlides()[0];
            if (selected) {
                selected.pushAnnotation(ann);
            }
        };
        VerticalStoryVis.prototype.onSlideClick = function (d) {
            this.data.selectSlide(d, idtypes.SelectOperation.SET, idtypes.defaultSelectionType, { withTransition: false });
            if (d && d.state) {
                this.data.selectState(d.state, idtypes.SelectOperation.SET, idtypes.defaultSelectionType, { slideSelected: true });
            }
        };
        VerticalStoryVis.prototype.dndSupport = function (elem) {
            var that = this;
            elem.on('dragenter', function (d) {
                if (C.hasDnDType(d3.event, 'application/caleydo-prov-state') || C.hasDnDType(d3.event, 'application/caleydo-prov-story') || C.hasDnDType(d3.event, 'application/caleydo-prov-story-text')) {
                    d3.select(this).classed('hover', true);
                    return false;
                }
            }).on('dragover', function (d) {
                if (C.hasDnDType(d3.event, 'application/caleydo-prov-state') || C.hasDnDType(d3.event, 'application/caleydo-prov-story') || C.hasDnDType(d3.event, 'application/caleydo-prov-story-text')) {
                    d3.event.preventDefault();
                    C.updateDropEffect(d3.event);
                    return false;
                }
            }).on('dragleave', function (d) {
                d3.select(this).classed('hover', false);
            }).on('drop', function (d) {
                d3.select(this).classed('hover', false);
                var e = d3.event;
                e.preventDefault();
                var full_story = provenance.toSlidePath(that.story);
                var d_story = d.isPlaceholder ? d.to : d;
                var insertIntoStory = function (new_) {
                    if (d_story == null) {
                        var bak = that.story;
                        that.story = new_;
                        if (bak) {
                            that.data.insertIntoSlide(new_, bak, true);
                        }
                    } else {
                        that.data.insertIntoSlide(new_, d_story, false);
                    }
                    that.update();
                };
                if (C.hasDnDType(e, 'application/caleydo-prov-state')) {
                    var state = that.data.getStateById(parseInt(e.dataTransfer.getData('application/caleydo-prov-state'), 10));
                    insertIntoStory(that.data.wrapAsSlide(state));
                } else if (C.hasDnDType(e, 'application/application/caleydo-prov-story-text')) {
                    insertIntoStory(that.data.makeTextSlide());
                } else if (C.hasDnDType(e, 'application/caleydo-prov-story')) {
                    var story = that.data.getSlideById(parseInt(e.dataTransfer.getData('application/caleydo-prov-story'), 10));
                    if (full_story.indexOf(story) >= 0 && e.dataTransfer.dropEffect !== 'copy') {
                        if (d_story == null) {
                            if (story !== that.story) {
                                var bak = that.story;
                                that.story = story;
                                that.data.moveSlide(story, bak, true);
                                that.update();
                            }
                        } else {
                            var ref = d_story;
                            if (ref !== story) {
                                if (story === that.story) {
                                    that.story = story.next;
                                }
                                that.data.moveSlide(story, ref, false);
                                that.update();
                            }
                        }
                    } else {
                        insertIntoStory(that.data.cloneSingleSlideNode(story));
                    }
                }
                return false;
            });
        };
        VerticalStoryVis.prototype.changeDuration = function ($elem) {
            var that = this;
            $elem.call(d3.behavior.drag().origin(function () {
                return {
                    x: 0,
                    y: 0
                };
            }).on('drag', function (d, i) {
                var e = d3.event;
                var $elem = d3.select(this.parentElement);
                var height = Math.max(that.duration2pixel.range()[0], that.duration2pixel(d.duration) + e[that.options.xy]);
                $elem.style(that.options.wh, height + 'px');
                var change = that.duration2pixel.invert(height) - d.duration;
                var durations = that.$node.selectAll('div.story').filter(function (d) {
                    return !d.isPlaceholder;
                });
                var stories = provenance.toSlidePath(that.story);
                durations.select('div.duration span').text(function (k) {
                    var index = stories.indexOf(k);
                    return to_duration(to_starting_time(k, stories) + (index > i ? change : 0));
                });
                that.$node.select('div.story.placeholder div.duration span').text(to_duration(to_starting_time(null, stories) + change));
            }).on('dragend', function (d) {
                var h = parseInt(d3.select(this.parentElement).style(that.options.wh), 10);
                d.duration = that.duration2pixel.invert(h);
            }));
        };
        VerticalStoryVis.prototype.changeTransition = function ($elem) {
            var that = this;
            $elem.call(d3.behavior.drag().origin(function () {
                return {
                    x: 0,
                    y: 0
                };
            }).on('drag', function (d, i) {
                var e = d3.event;
                var $elem = d3.select(this.parentElement);
                var offset = Math.max(0, that.duration2pixel(d.transition) - VerticalStoryVis.MIN_HEIGHT + e[that.options.xy]);
                $elem.style('margin-' + that.options.topleft, offset + 'px');
                var change = that.duration2pixel.invert(offset + VerticalStoryVis.MIN_HEIGHT) - d.transition;
                var durations = that.$node.selectAll('div.story').filter(function (d) {
                    return !d.isPlaceholder;
                });
                var stories = provenance.toSlidePath(that.story);
                durations.select('div.duration span').text(function (k) {
                    var index = stories.indexOf(k);
                    return to_duration(to_starting_time(k, stories) + (index >= i ? change : 0));
                });
                that.$node.select('div.story.placeholder div.duration span').text(to_duration(to_starting_time(null, stories) + change));
            }).on('dragend', function (d) {
                var h = parseInt(d3.select(this.parentElement).style('margin-' + that.options.topleft), 10);
                d.transition = that.duration2pixel.invert(h + VerticalStoryVis.MIN_HEIGHT);
            }));
        };
        VerticalStoryVis.prototype.storyInteraction = function (elem) {
            var graph = this.data;
            elem.attr('draggable', true).on('dragstart', function (d) {
                if (!isEditAble()) {
                    d3.event.preventDefault();
                    return;
                }
                var e = d3.event;
                e.dataTransfer.effectAllowed = 'copyMove';
                e.dataTransfer.setData('text/plain', d.name);
                e.dataTransfer.setData('application/caleydo-prov-story', String(d.id));
            }).on('click', this.onSlideClick.bind(this)).on('mouseenter', function (d) {
                if (d.state != null) {
                    graph.selectState(d.state, idtypes.SelectOperation.SET, idtypes.hoverSelectionType);
                }
                graph.selectSlide(d, idtypes.SelectOperation.SET, idtypes.hoverSelectionType);
            }).on('mouseleave', function (d) {
                if (d.state != null) {
                    graph.selectState(d.state, idtypes.SelectOperation.REMOVE, idtypes.hoverSelectionType);
                }
                graph.selectSlide(d, idtypes.SelectOperation.REMOVE, idtypes.hoverSelectionType);
            });
        };
        VerticalStoryVis.prototype.createToolbar = function ($elem) {
            var _this = this;
            var $toolbar_enter = $elem.append('div').classed('toolbar', true);
            $toolbar_enter.append('i').attr('class', 'fa fa-edit').on('click', function (d) {
                d3.event.stopPropagation();
                d3.event.preventDefault();
                dialogs.prompt(d.name, {
                    title: 'Edit name',
                    placeholder: 'Markdown supported...',
                    multiline: true
                }).then(function (text) {
                    d.name = text;
                    _this.update();
                });
                return false;
            });
            $toolbar_enter.append('i').attr('class', 'fa fa-copy').attr('title', 'clone slide').on('click', function (d) {
                d3.event.stopPropagation();
                d3.event.preventDefault();
                _this.data.moveSlide(_this.data.cloneSingleSlideNode(d), d, false);
                _this.update();
                return false;
            });
            $toolbar_enter.append('i').attr('class', 'fa fa-remove').attr('title', 'remove slide').on('click', function (d) {
                d3.event.stopPropagation();
                d3.event.preventDefault();
                if (d === _this.story) {
                    _this.story = _this.story.next;
                    if (_this.story === null) {
                        _this.data.removeFullSlide(d);
                        return;
                    }
                }
                _this.data.removeSlideNode(d);
                _this.update();
            });
        };
        VerticalStoryVis.prototype.createLastPlaceholder = function ($p) {
            var that = this;
            $p.html('<div>\n       <button class="btn btn-default btn-xs" data-add="text" title="add text slide"><i class="fa fa-file-text-o"></i></button>\n       <button class="btn btn-default btn-xs" data-add="extract" title="add current state"><i class="fa fa-file-o"></i></button>\n       <button class="btn btn-default btn-xs" data-add="extract_all" title="add path to current state"><i class="fa fa-files-o"></i></button>\n       </div>\n       <div class="duration"><span>00:00</span><i class="fa fa-circle"></i></div>\n      ');
            $p.selectAll('button[data-add]').on('click', function () {
                var create = this.dataset.add;
                var path = provenance.toSlidePath(that.story);
                var last = path[path.length - 1];
                switch (create) {
                case 'text':
                    if (last) {
                        that.data.moveSlide(that.data.makeTextSlide('Unnamed'), last, false);
                    } else {
                        that.story = that.data.startNewSlide('Welcome');
                    }
                    break;
                case 'extract':
                    var state = that.data.selectedStates()[0] || that.data.act;
                    var new_ = that.data.extractSlide([state], false);
                    if (last) {
                        that.data.moveSlide(new_, last, false);
                    } else {
                        that.story = new_;
                    }
                    break;
                case 'extract_all':
                    var state2 = that.data.selectedStates()[0] || that.data.act;
                    var new2_ = that.data.extractSlide(state2.path, false);
                    if (last) {
                        that.data.moveSlide(new2_, last, false);
                    } else {
                        that.story = new2_;
                    }
                    break;
                }
                that.update();
            });
        };
        VerticalStoryVis.prototype.updateSelection = function () {
            var _this = this;
            var stories = this.data.getSlideChains();
            var $stories = this.$node.select('.dropdown-menu').selectAll('li').data(stories);
            $stories.enter().insert('li').append('a').attr('href', '#').on('click', function (d) {
                _this.switchTo(d);
                d3.event.preventDefault();
            });
            $stories.select('a').text(function (d) {
                return d.name;
            });
            $stories.exit().remove();
        };
        VerticalStoryVis.prototype.update = function () {
            var _this = this;
            this.updateSelection();
            var story_raw = provenance.toSlidePath(this.story);
            var story = story_raw.length > 0 ? [{
                    id: 'f-1',
                    i: -1,
                    isPlaceholder: true,
                    to: null
                }] : [];
            story_raw.forEach(function (s, i) {
                story.push(s);
            });
            story.push({
                id: 'l' + (story_raw.length - 1),
                i: story_raw.length - 1,
                isPlaceholder: true,
                to: story_raw[story_raw.length - 1],
                isLastPlaceholder: true
            });
            var to_id = function (d) {
                return String(d.id);
            };
            var lod = getLevelOfDetail();
            this.$node.classed('large', lod === LevelOfDetail.Large).classed('medium', lod === LevelOfDetail.Medium).classed('small', lod === LevelOfDetail.Small);
            this.$node.select('div.stories').classed('large', lod === LevelOfDetail.Large).classed('medium', lod === LevelOfDetail.Medium).classed('small', lod === LevelOfDetail.Small).classed('no-thumbnails', !this.options.thumbnails);
            var $states = this.$node.select('div.stories').selectAll('div.story').data(story, to_id);
            var $states_enter = $states.enter().append('div').classed('story', true);
            var $story_enter = $states_enter.filter(function (d) {
                return !d.isPlaceholder;
            });
            var $placeholder_enter = $states_enter.filter(function (d) {
                return d.isPlaceholder;
            }).classed('placeholder', true);
            $story_enter.call(this.storyInteraction.bind(this));
            $story_enter.append('div').classed('preview', true);
            $story_enter.append('div').classed('slabel', true);
            $story_enter.call(this.createToolbar.bind(this));
            $story_enter.append('div').classed('duration', true).html('<span></span><i class="fa fa-circle"></i>');
            $story_enter.append('div').classed('dragger', true).call(this.changeDuration.bind(this)).call(this.dndSupport.bind(this));
            $story_enter.append('div').classed('dragger-transition', true).call(this.changeTransition.bind(this));
            $placeholder_enter.call(this.dndSupport.bind(this));
            {
                var p = $placeholder_enter.filter(function (d) {
                    return d.isLastPlaceholder;
                });
                p.call(this.createLastPlaceholder.bind(this));
            }
            $states.order();
            var $stories = $states.filter(function (d) {
                return !d.isPlaceholder;
            });
            $stories.classed('text', function (d) {
                return d.isTextOnly;
            });
            $stories.attr('data-id', function (d) {
                return d.id;
            });
            $stories.attr('title', function (d) {
                return d.name + '\n' + (d.transition > 0 ? '(' + to_duration(d.transition) + ')' : '') + '(' + to_duration(d.duration) + ')';
            });
            $stories.select('div.preview').style('background-image', lod < LevelOfDetail.Medium || !this.options.thumbnails ? null : function (d) {
                return d.isTextOnly ? 'url(../clue/assets/text.png)' : 'url(' + utils.thumbnail_url(_this.data, d.state) + ')';
            });
            $stories.select('div.slabel').html(function (d) {
                return d.name ? marked(d.name) : '';
            });
            $stories.select('div.duration span').text(function (d, i) {
                return '' + to_duration(to_starting_time(d, story_raw));
            });
            $stories.style(this.options.wh, function (d) {
                return _this.duration2pixel(d.duration) + 'px';
            });
            $stories.style('margin-' + this.options.topleft, function (d) {
                return _this.duration2pixel(d.transition) - VerticalStoryVis.MIN_HEIGHT + 'px';
            });
            $states.filter(function (d) {
                return d.isLastPlaceholder;
            }).select('div.duration span').text(to_duration(to_starting_time(null, story_raw)));
            $states.exit().remove();
        };
        VerticalStoryVis.prototype.updateTimeIndicator = function (slide, withTransition) {
            var $marker = this.$node.select('div.time_marker');
            if (!slide) {
                $marker.style('display', 'none');
                return;
            }
            var bounds = C.bounds(this.$node.node().querySelector('div.story[data-id="' + slide.id + '"]'));
            var base = C.bounds(this.$node.node().querySelector('div.stories'));
            var t = $marker.transition().ease('linear').duration(slide.transition < 0 || !withTransition ? player.MIN_TRANSITION : slide.transition * player.FACTOR).style('top', bounds.y - base.y + 'px');
            t.transition().ease('linear').duration(slide.duration < 0 || !withTransition ? player.MIN_DURATION : slide.duration * player.FACTOR).style('top', bounds.y - base.y + bounds.h - 4 + 'px');
        };
        VerticalStoryVis.MIN_HEIGHT = 20;
        return VerticalStoryVis;
    }(vis.AVisInstance);
    exports.VerticalStoryVis = VerticalStoryVis;
    function create(data, parent, options) {
        if (options === void 0) {
            options = {};
        }
        return new VerticalStoryVis(data, parent, options);
    }
    exports.create = create;
}(require, exports, require('../caleydo_core/main'), require('../caleydo_provenance/main'), require('../caleydo_core/idtype'), require('../caleydo_provenance/mode'), require('../wrapper_bootstrap_fontawesome/dialogs'), require('d3'), require('../caleydo_core/vis'), require('./utils'), require('marked'), require('../caleydo_provenance/player')));
},{"../caleydo_core/idtype":9,"../caleydo_core/main":13,"../caleydo_core/vis":28,"../caleydo_provenance/main":40,"../caleydo_provenance/mode":41,"../caleydo_provenance/player":43,"../wrapper_bootstrap_fontawesome/dialogs":65,"./utils":63,"d3":undefined,"marked":undefined}],62:[function(require,module,exports){
var m_text = require('text'), pluginValue0;
m_text.load('./template.html', function () {
}, function (r) {
    pluginValue0 = r;
});
var m_css = require('css'), pluginValue1;
m_css.load('./style', function () {
}, function (r) {
    pluginValue1 = r;
});
(function (require, exports, template, C, header, datas, vis, prov, d3, $, prov_sel, cmode, provvis2, storyvis, events, renderer, login, session, dialogs) {
    function chooseProvenanceGraph(manager, $ul) {
        var graph = C.hash.getProp('clue_graph', null);
        $ul.select('#provenancegraph_new_remote').on('click', function () {
            d3.event.preventDefault();
            if (session.retrieve('logged_in') === true) {
                C.hash.removeProp('clue_slide', false);
                C.hash.removeProp('clue_state', false);
                C.hash.setProp('clue_graph', 'new_remote');
                window.location.reload();
            }
        });
        $ul.select('#provenancegraph_new').on('click', function () {
            C.hash.removeProp('clue_slide', false);
            C.hash.removeProp('clue_state', false);
            C.hash.setProp('clue_graph', 'new');
            window.location.reload();
            d3.event.preventDefault();
        });
        function loadGraph(desc) {
            C.hash.setProp('clue_graph', desc.id);
            window.location.reload();
        }
        d3.selectAll('#provenancegraph_import, #provenancegraph_import_remote').on('click', function () {
            d3.event.preventDefault();
            d3.event.stopPropagation();
            var remote = this.id === 'provenancegraph_import_remote';
            var d = dialogs.generateDialog('Select File', 'Upload');
            d.body.innerHTML = '<input type="file" placeholder="Select File to Upoad">';
            d3.select(d.body).select('input').on('change', function () {
                var file = d3.event.target.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var data_s = e.target.result;
                    var dump = JSON.parse(data_s);
                    (remote ? manager.importRemote(dump) : manager.importLocal(dump)).then(function (graph) {
                        loadGraph(graph.desc);
                    });
                };
                reader.readAsText(file);
            });
            d.show();
        });
        return manager.list().then(function (list) {
            var $list = $ul.select('#provenancegraph_list').selectAll('li.graph').data(list);
            $list.enter().insert('li', ':first-child').classed('graph', true).html(function (d) {
                return '<a href="#clue_graph=' + d.id + '"><span class="glyphicon glyphicon-file"></span> ' + d.name + ' </a>';
            }).select('a').on('click', function (d) {
                d3.event.preventDefault();
                loadGraph(d);
            });
            var format = d3.time.format.utc('%Y-%m-%dT%H:%M');
            $('#provenancegraph_list li.graph a').popover({
                html: true,
                placement: 'left',
                trigger: 'manual',
                title: function () {
                    var graph = d3.select(this).datum();
                    return '' + graph.name;
                },
                content: function () {
                    var graph = d3.select(this).datum();
                    var creator = graph.creator;
                    var description = graph.description || '';
                    var ts = graph.ts ? format(new Date(graph.ts)) : 'Unknown';
                    var nnodes = graph.size[0];
                    var nedges = graph.size[1];
                    var $elem = $('\n            <div class="container-fluid">\n            <div class="row">\n                <div class="col-sm-3">creator:</div>\n                <div class="col-sm-9">' + creator + '</div>\n            </div>\n            <div class="row">\n                <div class="col-sm-3">created:</div>\n                <div class="col-sm-9">' + ts + '</div>\n            </div>\n            <div class="row">\n                <div class="col-sm-3">description:</div>\n                <div class="col-sm-9">' + description + '</div>\n            </div>\n            <div class="row">\n                <div class="col-sm-3">nodes/edges:</div>\n                <div class="col-sm-9">' + nnodes + '/' + nedges + '</div>\n            </div>\n            <div class="row">\n                <div class="col-sm-12 text-right">\n                    <button class="btn btn-primary" ' + (session.retrieve('logged_in', false) !== true && !graph.local ? 'disabled="disabled"' : '') + ' data-action="select" data-toggle="modal" ><span class="fa fa-open"></span> Select</button>\n                    <button class="btn btn-primary" data-action="clone" data-toggle="modal"><span class="fa fa-clone"></span> Clone</button>\n                    <button class="btn btn-danger" ' + (session.retrieve('logged_in', false) !== true && !graph.local ? 'disabled="disabled"' : '') + ' data-toggle="modal"><span class="glyphicon glyphicon-remove"></span> Delete</button>\n                </div>\n            </div>\n        </div>');
                    $elem.find('button.btn-danger').on('click', function () {
                        dialogs.areyousure('Are you sure to delete: "' + graph.name + '"').then(function (deleteIt) {
                            if (deleteIt) {
                                manager.delete(graph);
                            }
                        });
                    });
                    $elem.find('button.btn-primary').on('click', function () {
                        var isSelect = this.dataset.action === 'select';
                        if (isSelect) {
                            loadGraph(graph);
                        } else {
                            manager.cloneLocal(graph).then(function (graph) {
                                return loadGraph(graph.desc);
                            });
                        }
                        return false;
                    });
                    return $elem;
                }
            }).parent().on({
                mouseenter: function () {
                    $(this).find('a').popover('show');
                },
                mouseleave: function () {
                    $(this).find('a').popover('hide');
                }
            });
            var loggedIn = session.retrieve('logged_in', false) === true;
            if (graph === 'new_remote' && loggedIn) {
                return manager.createRemote();
            }
            if (graph === null || graph === 'new') {
                return manager.createLocal();
            }
            var desc = list.filter(function (d) {
                return d.id === graph;
            })[0];
            if (desc) {
                if (desc.local || loggedIn) {
                    return manager.get(desc);
                }
                return manager.cloneLocal(desc);
            }
            return manager.create();
        }).then(function (graph) {
            C.hash.setProp('clue_graph', graph.desc.id);
            $ul.select('#provenancegraph_name').text(graph.desc.name);
            return graph;
        });
    }
    function injectHeadlessSupport(wrapper) {
        var w = window;
        w.__caleydo = w.__caleydo || {};
        w.__caleydo.clue = wrapper;
        wrapper.on('jumped_to', function () {
            setTimeout(function () {
                document.body.classList.add('clue_jumped');
                prompt('clue_done_magic_key', 'test');
            }, 5000);
        });
    }
    var CLUEWrapper = function (_super) {
        __extends(CLUEWrapper, _super);
        function CLUEWrapper(body, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            _super.call(this);
            this.options = {
                app: 'CLUE',
                application: '/clue',
                id: 'clue',
                recordSelectionTypes: 'selected',
                animatedSelections: false,
                thumbnails: true
            };
            var that = this;
            C.mixin(this.options, options);
            body.innerHTML = template;
            if (C.hash.is('clue_headless')) {
                console.log('init headless mode');
                injectHeadlessSupport(this);
                d3.select('body').classed('headless', true);
            }
            this.manager = new prov.MixedStorageProvenanceGraphManager({
                prefix: this.options.id,
                storage: sessionStorage,
                application: this.options.application
            });
            this.header = header.create(body.querySelector('div.box'), {
                app: this.options.app,
                inverse: false
            });
            this.header.wait();
            this.createLogin();
            {
                var ul = document.createElement('ul');
                var $ul = d3.select(ul).attr('class', 'nav navbar-nav navbar-right').html('\n      <li class="dropdown">\n            <a class="active" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"\n               aria-expanded="false"><i class="fa fa-code-fork fa-lg fa-rotate-180"></i></a>\n            <ul class="dropdown-menu" id="provenancegraph_list">\n                <li role="separator" class="divider"></li>\n                <li><a href="#" id="provenancegraph_import"><span class="glyphicon glyphicon-import"></span> Import ...</a></li>\n                <li><a href="#" class="login_required disabled" disabled="disabled" id="provenancegraph_import_remote"><span class="glyphicon glyphicon-import"></span> Import Remote ...</a></li>\n                <li><a href="#" id="provenancegraph_export"><span class="glyphicon glyphicon-export"></span> Export ...</a></li>\n                <li role="separator" class="divider"></li>\n                <li><a href="#" id="provenancegraph_new"><span class="glyphicon glyphicon-upload"></span> New ...</a></li>\n                <li><a href="#" class="login_required disabled" disabled="disabled" id="provenancegraph_new_remote"><span class="glyphicon glyphicon-upload"></span> New Remote...</a></li>\n            </ul>\n        </li>');
                this.header.insertCustomRightMenu(ul);
                d3.select('#provenancegraph_export').on('click', function () {
                    d3.event.preventDefault();
                    d3.event.stopPropagation();
                    _this.graph.then(function (g) {
                        console.log(g);
                        var r = g.persist();
                        console.log(r);
                        var str = JSON.stringify(r, null, '\t');
                        var blob = new Blob([str], { type: 'application/json;charset=utf-8' });
                        var a = new FileReader();
                        a.onload = function (e) {
                            return window.open(e.target.result, '_blank');
                        };
                        a.readAsDataURL(blob);
                    });
                    return false;
                });
                d3.select(this.header.options).append('button').text('Show').attr('class', 'btn btn-default').on('click', function () {
                    _this.graph.then(function (g) {
                        return datas.create({
                            id: g.desc.id,
                            name: g.desc.name,
                            fqname: g.desc.fqname,
                            type: 'graph',
                            storage: 'given',
                            graph: g.backend
                        });
                    }).then(function (proxy) {
                        var l = vis.list(proxy);
                        if (l.length <= 0) {
                            return;
                        }
                        l[0].load().then(function (force) {
                            var p = dialogs.generateDialog('Provenance Graph');
                            force.factory(proxy, p.body);
                            p.show();
                        });
                    });
                    return false;
                });
                this.graph = chooseProvenanceGraph(this.manager, $ul);
            }
            cmode.createButton(body.querySelector('header'), { size: 'sm' });
            this.$main = d3.select(body).select('main');
            this.graph.then(function (graph) {
                graph.on('sync_start,sync', function (event) {
                    d3.select('nav span.glyphicon-cog').classed('fa-spin', event.type !== 'sync');
                });
                prov_sel.create(graph, _this.options.recordSelectionTypes, {
                    filter: function (idtype) {
                        return idtype && idtype.name[0] !== '_';
                    },
                    animated: _this.options.animatedSelections
                });
                _this.$main_ref = graph.findOrAddObject(_this.$main, 'Application', 'visual');
                var r = renderer.create(_this.$main.node(), graph);
                provvis2.create(graph, body.querySelector('div.content'), { thumbnails: _this.options.thumbnails });
                _this.storyvis = storyvis.create(graph, body.querySelector('div.content'), {
                    render: r.render,
                    thumbnails: _this.options.thumbnails
                });
                graph.on('select_slide_selected', function (event, state) {
                    d3.select('aside.annotations').style('display', state ? null : 'none');
                });
                d3.select('aside.annotations > div:first-of-type').call(d3.behavior.drag().on('drag', function () {
                    var mouse = d3.mouse(this.parentElement.parentElement);
                    d3.select(this.parentElement).style({
                        left: mouse[0] + 'px',
                        top: mouse[1] + 'px'
                    });
                }));
                d3.selectAll('aside.annotations button[data-ann]').on('click', function () {
                    var create = this.dataset.ann;
                    var ann;
                    switch (create) {
                    case 'text':
                        ann = {
                            type: 'text',
                            pos: [
                                10,
                                10
                            ],
                            text: ''
                        };
                        break;
                    case 'arrow':
                        ann = {
                            type: 'arrow',
                            pos: [
                                10,
                                10
                            ],
                            at: [
                                200,
                                200
                            ]
                        };
                        break;
                    case 'frame':
                        ann = {
                            type: 'frame',
                            pos: [
                                10,
                                10
                            ],
                            size: [
                                20,
                                20
                            ]
                        };
                        break;
                    }
                    if (that.storyvis && ann) {
                        that.storyvis.pushAnnotation(ann);
                    }
                });
                graph.on('switch_state', function (event, state) {
                    if (state) {
                        C.hash.setInt('clue_state', state.id);
                    } else {
                        C.hash.removeProp('clue_state');
                    }
                });
                graph.on('select_slide_selected', function (event, state) {
                    if (state) {
                        C.hash.setInt('clue_slide', state.id);
                    } else {
                        C.hash.removeProp('clue_slide');
                    }
                });
                {
                    var $right = $('aside.provenance-layout-vis');
                    var $right_story = $(_this.storyvis.node);
                    _this.propagate(cmode, 'modeChanged');
                    var update = function (new_) {
                        $('body').attr('data-clue', new_.toString());
                        if (new_.presentation > 0.8) {
                            $right.animate({ width: 'hide' }, 'fast');
                        } else {
                            $right.animate({ width: 'show' }, 'fast');
                        }
                        if (new_.exploration > 0.8) {
                            $right_story.animate({ width: 'hide' }, 'fast');
                        } else {
                            $right_story.animate({ width: 'show' }, 'fast');
                        }
                    };
                    cmode.on('modeChanged', function (event, new_) {
                        return update(new_);
                    });
                    _this.fire('modeChanged', cmode.getMode());
                    update(cmode.getMode());
                }
                d3.select('#bookmarkState').on('click', function () {
                    graph.act.setAttr('starred', true);
                });
                d3.select('#attachNote form').on('submit', function () {
                    var note = d3.select('#attachNote_note').property('value');
                    graph.act.setAttr('note', note);
                    $('#attachNote').modal('hide');
                    document.querySelector('#attachNote form').reset();
                    d3.event.preventDefault();
                    d3.event.stopPropagation();
                });
                d3.select('#undoStep').on('click', function () {
                    graph.undo();
                });
                d3.select(document).on('keydown.player', function () {
                    var k = d3.event;
                    if (k.keyCode === 90 && k.ctrlKey) {
                        k.preventDefault();
                        graph.undo();
                    } else if (k.keyCode === 37 && k.ctrlKey) {
                        cmode.setMode(cmode.modes.Exploration);
                    } else if ((k.keyCode === 38 || k.keyCode === 40) && k.ctrlKey) {
                        cmode.setMode(cmode.modes.Authoring);
                    } else if (k.keyCode === 39 && k.ctrlKey) {
                        cmode.setMode(cmode.modes.Presentation);
                    }
                });
                _this.fire('loaded_graph', graph);
                _this.header.ready();
            });
        }
        CLUEWrapper.prototype.createLogin = function () {
            {
                var ul = document.createElement('ul');
                ul.classList.add('nav', 'navbar-nav', 'navbar-right');
                ul.innerHTML = '\n      <li id="login_menu"><a data-toggle="modal" data-target="#loginDialog" href="#"><span class="glyphicon glyphicon-user"></span></a></li>\n        <li style="display: none" class="dropdown" id="user_menu">\n            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"\n               aria-expanded="false"><span class="glyphicon glyphicon-user"></span> Unknown</a>\n            <ul class="dropdown-menu">\n                <li role="separator" class="divider"></li>\n                <li><a href="#" id="logout_link">Logout</a></li>\n            </ul>\n        </li>';
                this.header.insertCustomRightMenu(ul);
            }
            var that = this;
            $('#loginDialog div.modal-body').load('../caleydo_security_flask/_login_form.html', function () {
                var $form = $(this).find('form'), $alert = $form.parent().find('div.alert');
                $alert.hide();
                login.bindLoginForm($form[0], function (error, user) {
                    $('#login_menu').hide();
                    var $base = $('#user_menu').show();
                    session.store('logged_in', !error);
                    if (!error) {
                        session.store('username', user.name);
                        session.store('user', user);
                        $form.removeClass('has-error');
                        $base.find('> a:first').text(user.name);
                        $('#loginDialog').modal('hide');
                        $('.login_required.disabled').removeClass('disabled').attr('disabled', null);
                    } else {
                        that.header.ready();
                        $form.addClass('has-error');
                        $alert.html(error).show();
                    }
                });
            });
            $('#logout_link').on('click', function () {
                this.header.wait();
                login.logout().then(function () {
                    session.store('logged_in', false);
                    $('#user_menu').hide();
                    $('#login_menu').show();
                    $('.login_required').addClass('disabled');
                });
            });
        };
        CLUEWrapper.prototype.jumpToStory = function (story) {
            var _this = this;
            console.log('jump to stored story', story);
            return this.graph.then(function (graph) {
                var s = graph.getSlideById(story);
                if (s) {
                    console.log('jump to stored story', s.id);
                    _this.storyvis.switchTo(s);
                    var next;
                    if (C.hash.is('clue_autoplay')) {
                        _this.storyvis.player.start();
                        next = Promise.resolve();
                    } else {
                        next = _this.storyvis.player.render(s);
                    }
                    return next.then(function () {
                        _this.fire('jumped_to', s);
                        _this.header.ready();
                        return _this;
                    });
                }
                _this.fire('jumped_to', null);
                _this.header.ready();
                return Promise.reject('story not found');
            });
        };
        CLUEWrapper.prototype.jumpToState = function (state) {
            var _this = this;
            console.log('jump to stored state', state);
            return this.graph.then(function (graph) {
                var s = graph.getStateById(state);
                if (s) {
                    console.log('jump to stored', s.id);
                    return graph.jumpTo(s).then(function () {
                        console.log('jumped to stored', s.id);
                        _this.fire('jumped_to', s);
                        _this.header.ready();
                        return _this;
                    });
                }
                _this.fire('jumped_to', null);
                _this.header.ready();
                return Promise.reject('state not found');
            });
        };
        CLUEWrapper.prototype.jumpToStored = function () {
            var target_story = C.hash.getInt('clue_slide', null);
            if (target_story !== null) {
                return this.jumpToStory(target_story);
            }
            var target_state = C.hash.getInt('clue_state', null);
            if (target_state !== null) {
                return this.jumpToState(target_state);
            }
            this.fire('jumped_to', null);
            this.header.ready();
            return Promise.resolve(this);
        };
        CLUEWrapper.prototype.reset = function () {
            var _this = this;
            this.graph.then(function (graph) {
                graph.jumpTo(graph.states[0]).then(function () {
                    graph.clear();
                    _this.$main_ref = graph.findOrAddObject(_this.$main, 'Application', 'visual');
                    cmode.setMode(cmode.modes.Exploration);
                });
            });
        };
        return CLUEWrapper;
    }(events.EventHandler);
    exports.CLUEWrapper = CLUEWrapper;
    function create(body, options) {
        if (options === void 0) {
            options = {};
        }
        return new CLUEWrapper(body, options);
    }
    exports.create = create;
}(require, exports, pluginValue0, require('../caleydo_core/main'), require('../wrapper_bootstrap_fontawesome/header'), require('../caleydo_core/data'), require('../caleydo_core/vis'), require('../caleydo_provenance/main'), require('d3'), require('jquery'), require('../caleydo_provenance/selection'), require('../caleydo_provenance/mode'), require('./provvis2'), require('./storyvis2'), require('../caleydo_core/event'), require('./annotation'), require('../caleydo_security_flask/login'), require('../caleydo_core/session'), require('../wrapper_bootstrap_fontawesome/dialogs'), require('font-awesome'), require('bootstrap'), pluginValue1));
},{"../caleydo_core/data":5,"../caleydo_core/event":7,"../caleydo_core/main":13,"../caleydo_core/session":21,"../caleydo_core/vis":28,"../caleydo_provenance/main":40,"../caleydo_provenance/mode":41,"../caleydo_provenance/selection":44,"../caleydo_security_flask/login":46,"../wrapper_bootstrap_fontawesome/dialogs":65,"../wrapper_bootstrap_fontawesome/header":66,"./annotation":59,"./provvis2":60,"./storyvis2":61,"bootstrap":undefined,"css":undefined,"d3":undefined,"font-awesome":undefined,"jquery":undefined,"text":undefined}],63:[function(require,module,exports){
(function (require, exports, C, ajax) {
    function thumbnail_url(graph, state, options) {
        if (options === void 0) {
            options = {};
        }
        var o = {
            width: 128,
            format: 'jpg'
        };
        C.mixin(o, options);
        if (state.hasAttr('thumbnail')) {
            return state.getAttr('thumbnail');
        }
        var d = graph.desc;
        if (d.attrs && d.attrs.of && !d.local) {
            return ajax.api2absURL('/clue/thumbnail' + d.attrs.of + '/' + graph.desc.id + '/' + state.id + '.' + o.format, { width: o.width });
        }
        return '../clue/assets/not_available.png';
    }
    exports.thumbnail_url = thumbnail_url;
    function preview_thumbnail_url(graph, state, options) {
        if (options === void 0) {
            options = {};
        }
        var o = {
            width: 128,
            format: 'jpg'
        };
        if (state.hasAttr('thumbnail')) {
            return state.getAttr('thumbnail');
        }
        var d = graph.desc;
        if (d.attrs && d.attrs.of && !d.local) {
            return ajax.api2absURL('/clue/preview_thumbnail' + d.attrs.of + '/' + graph.desc.id + '/' + state.id + '.' + o.format, { width: o.width });
        }
        return '../clue/assets/not_available.png';
    }
    exports.preview_thumbnail_url = preview_thumbnail_url;
    function screenshot_url(graph, state, options) {
        if (options === void 0) {
            options = {};
        }
        var o = {
            width: 128,
            format: 'jpg'
        };
        if (state.hasAttr('screenshot')) {
            return state.getAttr('screenshot');
        }
        var d = graph.desc;
        if (d.attrs && d.attrs.of && !d.local) {
            return ajax.api2absURL('screnshot' + d.attrs.of + '/' + graph.desc.id + '/' + state.id + '.' + o.format, { width: o.width });
        }
        return '../clue/assets/not_available.png';
    }
    exports.screenshot_url = screenshot_url;
    function areThumbnailsAvailable(graph) {
        var d = graph.desc;
        return d.attrs && d.attrs.of && !d.local;
    }
    exports.areThumbnailsAvailable = areThumbnailsAvailable;
}(require, exports, require('../caleydo_core/main'), require('../caleydo_core/ajax')));
},{"../caleydo_core/ajax":3,"../caleydo_core/main":13}],64:[function(require,module,exports){
(function (require, exports, $) {
    'use strict';
    function wrap(d) {
        var r = Promise.resolve(d);
        return r;
    }
    var JQueryAdapter = function () {
        function JQueryAdapter() {
        }
        JQueryAdapter.prototype.send = function (url, data, method, expectedDataType) {
            if (data === void 0) {
                data = {};
            }
            if (method === void 0) {
                method = 'get';
            }
            if (expectedDataType === void 0) {
                expectedDataType = 'json';
            }
            var o = {
                url: url,
                data: data,
                method: method,
                dataType: expectedDataType,
                cache: method === 'get'
            };
            if (data instanceof FormData) {
                o.contentType = false;
                o.processData = false;
            }
            return wrap($.ajax(o));
        };
        return JQueryAdapter;
    }();
    function create() {
        return new JQueryAdapter();
    }
    exports.create = create;
}(require, exports, require('jquery')));
},{"jquery":undefined}],65:[function(require,module,exports){
(function (require, exports, $, C) {
    function generateDialog(title, hide) {
        if (hide === void 0) {
            hide = 'OK';
        }
        var dialog = document.createElement('div');
        dialog.setAttribute('role', 'dialog');
        dialog.classList.add('modal', 'fade');
        dialog.innerHTML = '\n     <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="glyphicon glyphicon-remove-sign" title="Close"></span></button>\n          <h4 class="modal-title">' + title + '</h4>\n        </div>\n        <div class="modal-body">\n\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-default" data-dismiss="modal">' + hide + '</button>\n        </div>\n      </div>\n    </div>';
        document.body.appendChild(dialog);
        var $dialog = $(dialog);
        return {
            show: function () {
                return $dialog.modal('show');
            },
            hide: function () {
                return $dialog.modal('hide');
            },
            body: dialog.querySelector('.modal-body'),
            footer: dialog.querySelector('.modal-footer'),
            onHide: function (callback) {
                return $dialog.on('hidden.bs.modal', callback);
            },
            destroy: function () {
                return $dialog.remove();
            }
        };
    }
    exports.generateDialog = generateDialog;
    function msg(text, category) {
        if (category === void 0) {
            category = 'info';
        }
        return new Promise(function (resolve) {
            var div = $('<div class="alert alert-' + category + ' alert-dismissible fade in" role="alert">\n        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span class="glyphicon glyphicon-remove-sign" title="Close"></span></button>\n        ' + text + '\n    </div>').appendTo('body');
            div.on('closed.bs.alert', resolve);
            div.alert();
        });
    }
    exports.msg = msg;
    function prompt(text, options) {
        if (options === void 0) {
            options = {};
        }
        var o = {
            title: 'Input',
            placeholder: 'Enter...',
            multiline: false
        };
        if (typeof options === 'string') {
            options = { title: options };
        }
        C.mixin(o, options);
        return new Promise(function (resolve) {
            var dialog = generateDialog(o.title);
            if (o.multiline) {
                dialog.body.innerHTML = '<form><textarea class="form-control" rows="5" placeholder="' + o.placeholder + '" autofocus="autofocus">' + text + '</textarea></form>';
            } else {
                dialog.body.innerHTML = '<form><input type="text" class="form-control" value="' + text + '" autofocus="autofocus" placeholder="' + o.placeholder + '"></form>';
            }
            dialog.body.querySelector('form').onsubmit = function () {
                dialog.hide();
                return false;
            };
            dialog.onHide(function () {
                resolve(dialog.body.querySelector('input, textarea').value);
                dialog.destroy();
            });
            dialog.show();
        });
    }
    exports.prompt = prompt;
    function choose(items, options) {
        if (options === void 0) {
            options = {};
        }
        var o = {
            title: 'Choose',
            placeholder: 'Enter...',
            editable: false
        };
        if (typeof options === 'string') {
            options = { title: options };
        }
        C.mixin(o, options);
        return new Promise(function (resolve) {
            var dialog = generateDialog(o.title);
            var option = items.map(function (d) {
                return '<option value="' + d + '">' + d + '</option>';
            }).join('\n');
            if (o.editable) {
                dialog.body.innerHTML = '<form><input type="text" list="chooseList" class="form-control" autofocus="autofocus" placeholder="' + o.placeholder + '">\n        <datalist id="chooseList">' + option + '</datalist>\n      </form>';
            } else {
                dialog.body.innerHTML = '<form><select class="form-control">' + option + '</select></form>';
            }
            dialog.body.querySelector('form').onsubmit = function () {
                dialog.hide();
                return false;
            };
            dialog.onHide(function () {
                if (options.editable) {
                    resolve(dialog.body.querySelector('input').value);
                } else {
                    resolve(items[dialog.body.querySelector('select').selectedIndex]);
                }
                dialog.destroy();
            });
            dialog.show();
        });
    }
    exports.choose = choose;
    function areyousure(msg, options) {
        if (options === void 0) {
            options = {};
        }
        var o = {
            title: 'Are you sure?',
            button: '<span class="glyphicon glyphicon-remove"></span> Delete'
        };
        if (typeof options === 'string') {
            options = { title: options };
        }
        C.mixin(o, options);
        return new Promise(function (resolve) {
            var dialog = generateDialog(o.title, 'Cancel');
            dialog.body.innerHTML = msg;
            $('<button class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span> Delete</button>').appendTo(dialog.footer);
            var clicked = false;
            $(dialog.footer).find('button.btn-danger').on('click', function () {
                clicked = true;
                dialog.hide();
            });
            dialog.onHide(function () {
                dialog.destroy();
                resolve(clicked);
            });
            dialog.show();
        });
    }
    exports.areyousure = areyousure;
}(require, exports, require('jquery'), require('../caleydo_core/main'), require('bootstrap')));
},{"../caleydo_core/main":13,"bootstrap":undefined,"jquery":undefined}],66:[function(require,module,exports){
var m_text = require('text'), pluginValue0;
m_text.load('./header.html', function () {
}, function (r) {
    pluginValue0 = r;
});
var m_css = require('css'), pluginValue1;
m_css.load('./style.css', function () {
}, function (r) {
    pluginValue1 = r;
});
(function (require, exports, template, C, $) {
    function createLi(name, action, href) {
        if (href === void 0) {
            href = '#';
        }
        var li = document.createElement('li');
        li.innerHTML = '<a href="' + href + '">' + name + '</a>';
        if (action) {
            li.querySelector('a').onclick = action;
        }
        return li;
    }
    var AppHeader = function () {
        function AppHeader(parent, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            this.parent = parent;
            this._options = {
                prepend: true,
                app: 'Caleydo Web',
                addLogo: true,
                mainMenu: new Array(),
                rightMenu: new Array(),
                inverse: true
            };
            C.mixin(this._options, options);
            var helper = document.createElement('div');
            helper.innerHTML = template;
            var old = parent.firstChild;
            if (this._options.prepend && old) {
                while (helper.firstChild) {
                    parent.insertBefore(helper.firstChild, old);
                }
            } else {
                while (helper.firstChild) {
                    parent.appendChild(helper.firstChild);
                }
            }
            if (this._options.inverse) {
                document.querySelector('nav.navbar').classList.add('navbar-inverse');
            }
            var app = parent.querySelector('*[data-header="app"]');
            app.innerHTML = this._options.app;
            if (this._options.addLogo) {
                app.classList.add('caleydo_app');
            }
            this.mainMenu = parent.querySelector('*[data-header="main"]');
            this.rightMenu = parent.querySelector('*[data-header="rightmenu"]');
            this.about = parent.querySelector('*[data-header="about"]');
            this.options = parent.querySelector('*[data-header="options"]');
            this._options.mainMenu.forEach(function (l) {
                return _this.addMainMenu(l.name, l.action, l.href);
            });
            this._options.rightMenu.forEach(function (l) {
                return _this.addRightMenu(l.name, l.action, l.href);
            });
        }
        AppHeader.prototype.addMainMenu = function (name, action, href) {
            if (href === void 0) {
                href = '#';
            }
            var li = createLi(name, action, href);
            this.mainMenu.appendChild(li);
            return li;
        };
        AppHeader.prototype.insertCustomMenu = function (element) {
            this.rightMenu.parentElement.insertBefore(element, this.rightMenu);
        };
        AppHeader.prototype.insertCustomRightMenu = function (element) {
            this.rightMenu.parentElement.appendChild(element);
        };
        AppHeader.prototype.addRightMenu = function (name, action, href) {
            if (href === void 0) {
                href = '#';
            }
            var li = createLi(name, action, href);
            this.rightMenu.insertBefore(li, this.rightMenu.firstChild);
            return li;
        };
        AppHeader.prototype.wait = function () {
            $('#headerWaitingOverlay').fadeIn();
        };
        AppHeader.prototype.ready = function () {
            $('#headerWaitingOverlay').fadeOut();
        };
        return AppHeader;
    }();
    exports.AppHeader = AppHeader;
    function create(parent, options) {
        if (options === void 0) {
            options = {};
        }
        return new AppHeader(parent, options);
    }
    exports.create = create;
}(require, exports, pluginValue0, require('../caleydo_core/main'), require('jquery'), require('bootstrap'), pluginValue1));
},{"../caleydo_core/main":13,"bootstrap":undefined,"css":undefined,"jquery":undefined,"text":undefined}]},{},[1]);
 
});
