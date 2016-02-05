---
layout: documentation
title: Data Structure
permalink: /documentation/data_structure/
---
## Introduction

Caleydo Web supports simple loading and handling of various data. It provides data structures for lazy loading and accessing data using [promises](TODO). These data structures are implemented in the [core plugin](https://github.com/Caleydo/caleydo_core).

## Loading Datasets

The way data is accessed in Caleydo Web can vary. For example, data could be loaded from a .csv file or retrieved from an SQL database. In the end, it up to different [plugins](../plugin_mechanism) how the data is accessed.

### Dataset Parsing

Tabular datasets in a form of .csv files can be loaded by providing the dataset file itself and a definition of the dataset. The definition is provided in an `index.json` file and could look like this:

{% highlight json %}

[
  {
    "id": "anscombe_II",
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

{% endhighlight %}

The following properties are common to all supported dataset types:

* `id` A string specifying a dataset id.
* `name` A string specifying the name of the dataset.
* `path` The path to the data file.
* `type` The dataset type. Currently `matrix`, `table`, `vector`, and `stratification` are supported.
* `size` The size of the dataset. In case of a matrix, number of rows and columns.
* `separator`: String that is used as separator in the data file. Default: ",".

An `index.json` file may contain definitions for multiple datasets. For more definition examples have a look at our [demo application](https://github.com/Caleydo/demo_app).

### Dataset Access

There are two basic ways to access the data files from the client code. The first way is the **get** method specified in `caleydo_core/data`. It takes the dataset id specified in the dataset defininition as parameter and returns a promise for an associated data structure object (Matrix, Table, Vector, Stratification). Note that this method involves code from the server side of Caleydo Web and thus will not work with the lightweight client library version.

The second way is the **parseRemoteMatrix** method specified in `caleydo_d3/parser`. It takes the dataset file path as argument and returns a promise for an associated data structure object. In this case, the `index.json` file must be located in the same directory as the dataset file. This method will also work for the client library version of Caleydo Web.

Another way to access datasets is to use the **list** method from `caleydo_core/data`. This method looks for dataset definitions in all Caleydo Web plugins. All found datasets are accessible via a promise to an array of datastructure objects. This method will not work in the client library version.

## Data Structures



### Matrix

We consider a matrix as a two-dimensional data structure with rows and columns. Both rows and columns specify ids for different entities, for example, the rows are patients and the columns are genes. As a result, all values in the matrix have the same meaning, such as "gene expression".

|         | Gene 1           | Gene 2  |  Gene 3 |
| ------------- |:-------------:| :-----:|:-----:|
| **Patient 1**     | 5.4 | 4.1 | 8.3 |
| **Patient 2**     | 0.8      |   2.0 |0.0 |
| **Patient 3** | 3.2   |    7.7 |10.0 |


The definition for a matrix datafile could look like this:



```
[
  {
    "name": "Anscombe II",
    "id": "anscombe_II",
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


Consider the following properties for a matrix:

* `rowtype` Id type for the rows.
* `coltype` Id type for the columns.
* `value` Description of the values in the matrix. The `type` property specifies the data type. Valid values `real`, `int`, `categorical`, and `string`. `range` specifies minimum and maximum values for numerical data types.

### Table

| Patient        | Gender        | Age  |  Value |
| ------------- |:-------------:| :-----:|:-----:|
| Patient 1     | male | 20 | 0.3 |
| Patient 2     | female      |   55 |0.1 |
| Patient 3 | male   |    32 |1.0 |



```json
  {
    "name": "Test Heterogeneous 10x4",
    "path": "test_h10x4.csv",
    "size": [10, 4],
    "type": "table",
    "idtype": "patient",
    "columns": [
    {
      "name": "Gender",
      "value": {
        "type": "categorical",
        "categories": [
          {
            "name": "male",
            "color": "blue"
          },
          {
            "name": "female",
            "color": "red"
          }
        ]
      }
    },
    {
      "name": "Age",
      "value": {
        "type": "int",
        "range": [0, 100]
      }
    },
    {
      "name": "Value",
      "value": {
        "type": "real",
        "range": [0, 1]
      }
    }
  ]
}
```


### Vector

| ID        | Value        |
| ------------- |:-------------:| 
| 1     | 0.3 |
| 2     | 1.0      | 
| 3 | 0.8   |
| 4 | 0.4   |
| 5 | 0.6   |

```
{
  "name": "Test 10",
  "path": "test_10.csv",
  "size": 10,
  "type": "vector",
  "idtype": "patient",
  "value": {
    "type": "real",
    "range": [0, 1]
  }
}
```

### Stratification

| ID        | Group        |
| ------------- |:-------------:| 
| 1     | one |
| 2     | two      | 
| 3 | one   |
| 4 | two   |
| 5 | two   |

```
{
  "name": "D2 Column KMeans 3",
  "origin": "demo_app/D2",
  "path": "d2t.3.csv",
  "separator": "\t",
  "size": [
    20
  ],
  "ngroups": 3,
  "groups": [
    {
      "name": "1",
      "size": 4
    },
    {
      "name": "2",
      "size": 11
    },
    {
      "name": "3",
      "size": 5
    }
  ],
  "type": "stratification",
  "idtype": "b",
  "ws": "random"
}
```