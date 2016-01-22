---
layout: docu_code
title:  Data structure
permalink: /documentation/data_structure/
---

The data structures are implemented in the [core plugin](https://github.com/Caleydo/caleydo_core).

## Retrieving Datasets

### list

### get


## Range

## Matrix

## Table

# Selections

# Parsing

Json definition of a file.

Example:
```
[
  {
    "name": "Anscombe II",
    "path": "anscombe_II.csv",
    "type": "matrix",
    "size": [12, 2],
    "rowtype": "row",
    "coltype": "dimension",
    "separator": ";",
    "value": {
      "type": "real",
      "range": [0, 12]
    }
  }
]

```
### Required Attributes

`name`: Any string
`path`: the path to the data, TODO: relative to what? 
`type`: matrix|table - TODO what else?
`size`: an array with the rows and columns, TODO: can we do auto?

### Opional Attributes
`separator`: default:, any legal string


TODO: copy and revise content from Sam’s presentation
https://docs.google.com/presentation/d/1UiVb2b6-tgGoou3p_7NwEXt-g-WQ0wZHaE_xltdWIzI/edit
