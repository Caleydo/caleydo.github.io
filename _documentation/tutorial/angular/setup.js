// Final matrix factory function used by Angular
var matrixFactory = function (stampit, eventStamp, matrixStamp) {
  // The final matrix object is composed of the object and matrix factory
  // functions.
  return stampit.compose(eventStamp, matrixStamp);
};

// Matrix selection service
var matrixSelectionService = function (
  stampit, eventStamp, matrixSelectionStamp
) {
  // App-wide selection service is initialized only once.
  var selections = stampit.compose(eventStamp, matrixSelectionStamp)();
  return selections;
};

var apiService = (function () {
  var Q;

  function api (_q_) {
    Q = _q_;
  }

  api.prototype.getData = function () {
    return Q.when(DUMMY_DATA);
  };

  return api;
}());

// App controller wrapper
var matrixAppCtrl = (function () {
  // Private
  var API;
  var MATRIX;
  var MATRIX_SELECTION;

  // App controller
  function matrixApp (_matrix_, _matrixSelection_, _api_) {
    MATRIX = _matrix_;
    MATRIX_SELECTION = _matrixSelection_;
    API = _api_;

    this.matrixPromise = API.getData().then(function (data) {
      this.data = data;
      this.matrix = MATRIX(null, this.data, true, true);

      // Set dimensionality.
      MATRIX_SELECTION.dimensions = this.matrix.getDimensionality();

      return this.matrix;
    }.bind(this));

    // Link matrix selection methods.
    this.selectCell = MATRIX_SELECTION.selectCell;
    this.selectColumn = MATRIX_SELECTION.selectColumn;
    this.selectRow = MATRIX_SELECTION.selectRow;
    this.cellSelected = MATRIX_SELECTION.cellSelected;
    this.columnSelected = MATRIX_SELECTION.columnSelected;
    this.rowSelected = MATRIX_SELECTION.rowSelected;
  }

  // When mouse leaves the table element.
  matrixApp.prototype.leaveTableBody = function () {
    this.hoveringRow = null;
    this.hoveringColumn = null;
  };

  // When mouse enters a column.
  matrixApp.prototype.enterColumn = function (id) {
    this.hoveringRow = null;
    this.hoveringColumn = id;
  };

  // When mouse enters a row.
  matrixApp.prototype.enterRow = function (id) {
    this.hoveringRow = id;
    this.hoveringColumn = null;
  };

  // When mouse enters a cell.
  matrixApp.prototype.enterCell = function (rowId, columnId) {
    this.hoveringRow = rowId;
    this.hoveringColumn = columnId;
  };

  return matrixApp;
}());

// Heat-map directive controller wrapper
var heatMapCtrl = (function () {
  // Private data
  var CALEYDO;
  var ELEMENT;
  var MATRIX_SELECTION;
  var OPTIONS = {
    color: ['#f0f2f4', '#cc79a7'],
    initialScale: 20
  };

  var _caleydoMatrix;
  var _caleydoHeatMap;

  // heat-map controller
  function heatMap (_element_, _caleydo_, _matrixSelection_) {
    // Set "constant" values.
    CALEYDO = _caleydo_;
    ELEMENT = _element_;
    MATRIX_SELECTION = _matrixSelection_;

    this.matrixPromise.then(function (matrix) {
        this.matrix = matrix;
      this.parseMatrix();
      this.draw();
      this.initEventListeners();
    }.bind(this));
  }

  heatMap.prototype.initEventListeners = function () {
    // Listen to Caleydo's selection events.
    _caleydoMatrix.on('select', function(event, type, selection) {
      var rowIds = selection.dim(0).asList();
      var columnIds = selection.dim(1).asList();
      console.log(type, columnIds, rowIds);
    });

    // Listen to Angular's cell selection events.
    MATRIX_SELECTION.on('cellSelected', function (selection) {
      //_caleydoMatrix.selectProduct(
      //    [[selection.column],[selection.row]],
      //  selection.selected ? 1 : 2
      //);
    });

    // Listen to Angular's column selection events.
    MATRIX_SELECTION.on('columnSelected', function (selection) {
        // Trigger a Caleydo range selection.
      // SelectionOperation:
      // 1 === ADD
      // 2 === REMOVE
      _caleydoMatrix.select(
        [[],[selection.column]],
        selection.selected ? 1 : 2
      );
    });

    // Listen to Angular's row selection events.
    MATRIX_SELECTION.on('rowSelected', function (selection) {
        // Trigger a Caleydo range selection.
      // SelectionOperation:
      // 1 === ADD
      // 2 === REMOVE
      _caleydoMatrix.select(
        [[selection.row],[]],
        selection.selected ? 1 : 2
      );
    });

    // Refresh heat-map when data changes
    this.matrix.on('dataChanged', this.refresh.bind(this));
  };

  // Draw heat-map
  heatMap.prototype.parseMatrix = function () {
    // Deep cloning is necessary due to:
    // https://github.com/Caleydo/caleydo_web_container/issues/144
    _caleydoMatrix = CALEYDO.d3.parser.parseMatrix(
      _.cloneDeep(this.matrix.getRawData())
    );
  }

  // Draw heat-map
  heatMap.prototype.draw = function () {
    _caleydoHeatMap = CALEYDO.vis.heatmap.create(
      _caleydoMatrix, ELEMENT[0], OPTIONS
    );
  }

  // Redraw heat-map
  heatMap.prototype.refresh = function () {
    this.clear();
    this.parseMatrix();
    this.draw();
  }

  // Remove all heat-map related DOM elements
  heatMap.prototype.clear = function () {
    _caleydoHeatMap.destroy();
  };

  return heatMap;
}());


// Heat-map directive definition
var heatMapDirective = function () {
  return {
    bindToController: {
      matrixPromise: '='
    },
    controller: 'heatMapCtrl',
    controllerAs: 'heatMap',
    restrict: 'E',
    replace: true,
    scope: {
      matrixPromise: '='
    },
    template: '<div id="caleydo-heat-map"><div>'
  }
};

/* ---------- Angular Linking ---------- */
angular
  .module('matrixApp', [])
  .constant('caleydo', window.Caleydo)
  .constant('stampit', window.stampit)
  .constant('eventStamp', eventStamp)
  .constant('matrixStamp', matrixStamp)
  .constant('matrixSelectionStamp', matrixSelectionStamp)
  .factory('matrix', ['stampit', 'eventStamp', 'matrixStamp', matrixFactory])
  .service('api', ['$q', apiService])
  .service('matrixSelection', [
    'stampit', 'eventStamp', 'matrixSelectionStamp', matrixSelectionService
  ])
  .controller('matrixAppCtrl', ['matrix', 'matrixSelection', 'api', matrixAppCtrl])
  .controller('heatMapCtrl', [
    '$element', 'caleydo', 'matrixSelection', heatMapCtrl
  ])
.directive('heatMap', [heatMapDirective]);