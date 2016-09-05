// Very simple event factory
var eventStamp = stampit.init(function() {
  var stack = {};

  this.on = function (event, callback) {
    if (event in stack) {
      stack[event].push(callback);
    } else {
      stack[event] = [callback];
    }
    return this;
  };

  this.trigger = function (event, payload) {
    if (event in stack) {
      for (var i = stack[event].length; i--;) {
        stack[event][i](payload);
      }
    }
    return this;
  };
});

// Generic matrix factory function
var matrixStamp = stampit.init(function(stamp) {
  var THAT = stamp.instance;

  var data = stamp.args[0];
  var columnIds = stamp.args[1];
  var rowIds = stamp.args[2];

  // Update the column sums
  function updateColumnSums () {
    var sums = [];
    for (
      var row = rowIds ? 1 : 0,
          numRows = data.length;
      row < numRows;
      row++
    ) {
      for (
        var column = columnIds ? 1 : 0,
            numColumns = data[row].length;
        column < numColumns;
        column++
      ) {
        var realColumn = columnIds ? column - 1 : column;
        sums[realColumn] = sums[realColumn] ?
          sums[realColumn] + data[row][column] : data[row][column];
      }
    }
    THAT.columnSums = sums;
  }

  // Initialize column sums
  updateColumnSums();

  // Generates an empty array of length # columns
  // Note that this is barely a helper array to support _ngRepeat_.
  this.columnIds = (function () {
    return [].constructor(
      columnIds && data.length ?
        (rowIds ? data[0].length - 1 : data[0].length) : 0
    );
  }());

  // Returns column header entry
  this.columnHeader = function (column) {
    return columnIds ? data[0][rowIds ? column + 1 : column] : undefined;
  };

  // Generates an empty array of length # rows
  // Note that this is barely a helper array to support _ngRepeat_.
  this.rowIds = (function () {
    return [].constructor(
      rowIds && data.length ? (columnIds ? data.length - 1 : data.length) : 0
    );
  }());

  // Returns row header entry
  this.rowHeader = function (row) {
    return rowIds ? data[columnIds ? row + 1 : row][0] : undefined;
  };

  // Proxy that returns a mapped getter / setter function
  // This outer function will be called when Angular initialized the template.
  this.cell = function (column, row) {
    // The inner function will have have access to the specific _column_ and
    // _row_ and returns a getter / setter ultimately used by Angular to link
    // the model.
    return function (value) {
        if (typeof value === 'undefined') {
        return data[rowIds ? row + 1 : row][columnIds ? column + 1 : column];
      } else {
        data[rowIds ? row + 1 : row][columnIds ? column + 1 : column] = value;
            updateColumnSums();
        THAT.trigger('dataChanged', {
          rowId: row,
          columnId: column,
          value: value
        });
        return value;
      }
    }
  };

  // Returns the raw data object containing the column and row headers
  this.getRawData = function () {
    return data;
  };

  // Helper method to return the dimensionality
  this.getDimensionality = function () {
    return {
      columns: this.columnIds.length,
      rows: this.rowIds.length
    };
  }
});

// Factory function for matrix selections
var matrixSelectionStamp = stampit.init(function (stamp) {
  var THAT = stamp.instance;

  var selectedCells = {};
  var selectedColumns = {};
  var selectedRows = {};

  // Helper method to get index for a matrix cell.
  function getIndex (column, row) {
    return THAT.dimensions.columns * row + column;
  }

  // Select a single cell.
  this.selectCell = function (column, row, forceSelect) {
    var index = getIndex(column, row);

    selectedCells[index] = selectedCells[index] &&
      !forceSelect ? undefined : true;

    THAT.trigger('cellSelected', {
        row: row,
      column: column,
      selected: selectedCells[index]
    });
  };

  // Select a complete column.
  this.selectColumn = function (column, forceSelect) {
    selectedColumns[column] = selectedColumns[column] &&
      !forceSelect ? undefined : true;

    THAT.trigger('columnSelected', {
      column: column,
      selected: selectedColumns[column]
    });

    if (!selectedColumns[column]) {
      var rows = Object.keys(selectedCells);
      for (
        var i = column,
            len = (THAT.dimensions.rows - 1) * (THAT.dimensions.columns) + i;
        i < len;
        i += THAT.dimensions.columns
      ) {
        selectedCells[i] = undefined;
      }

      for (var i = rows.length; i--;) {
        selectedCells[rows[i]][column] = undefined;
      }
    }
  };

  // Select a complete row.
  this.selectRow = function (row, forceSelect) {
    selectedRows[row] = selectedRows[row] && !forceSelect ? undefined : true;

    THAT.trigger('rowSelected', {
      row: row,
      selected: selectedRows[row]
    });

    if (!selectedRows[row]) {
      for (
        var i = row * THAT.dimensions.columns,
            len = i + THAT.dimensions.columns;
        i < len;
        i++
      ) {
        selectedCells[i] = undefined;
      }
    }
  };

  // Helper method to check whether a cell is selected or not.
  this.cellSelected = function (column, row) {
    return selectedCells[getIndex(column, row)] ||
      THAT.columnSelected(column) || THAT.rowSelected(row);
  };

  // Helper method to check whether a column is selected or not.
  this.columnSelected = function (column) {
    return selectedColumns[column];
  };

  // Helper method to check whether a row is selected or not.
  this.rowSelected = function (row) {
    return selectedRows[row];
  };
}).refs({
    dimensions: {
    columns: 1,
    rows: 1
  }
});