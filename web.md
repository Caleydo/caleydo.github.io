---
layout: web
title: Web | Caleydo
weight: 1
permalink: /web/
---


# Basics

## The Plugin System

TODO

## The Registry

Differences registry / directly from repository 

## Asyncronous Module Loading

TODO
 
# Getting Started

Use the [container](https://github.com/Caleydo/caleydo_web_container) repository to sets up the basic caleydo web platform. See the readme in the repository on how to install. 


# Creating an App

To create an app add a new folder that follows a specific structure to the plugin directory. 

What do the files in the app do:

  * index.html - standard html
  * main.js - this is where your custom javascript goes 
  * data - put data in this directory, define the data format via json in 
     * index.json defines the data
     * other files - contain the data
    
  * style.scss - contains your styles


# Data Structures 

The data structures are contained in the [core plugin](https://github.com/Caleydo/caleydo_core)/

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

# Plugin List

## Container
[https://github.com/Caleydo/caleydo_web_container](https://github.com/Caleydo/caleydo_web_container)



## web core

 * https://github.com/Caleydo/caleydo_core

## web utilities

 * https://github.com/Caleydo/caleydo_d3
 * https://github.com/Caleydo/caleydo_vis
 * https://github.com/Caleydo/caleydo_vis_lineup
 * https://github.com/Caleydo/caleydo_vis_proteinviewer
 * https://github.com/Caleydo/caleydo_vis_parco
 * https://github.com/Caleydo/sample_vis
 * https://github.com/Caleydo/wrapper_bootstrap_fontawesome
 * https://github.com/Caleydo/caleydo_provenance
 * https://github.com/Caleydo/caleydo_graph
 * https://github.com/Caleydo/caleydo_links
 * https://github.com/Caleydo/caleydo_window
 * https://github.com/Caleydo/caleydo_tooltip
 * https://github.com/Caleydo/caleydo_screenshot

## web apps
 * https://github.com/Caleydo/sample_app
 * https://github.com/Caleydo/demo_app
 * https://github.com/Caleydo/clue_demo
 * https://github.com/Caleydo/stratomex.js
 * https://github.com/Caleydo/sample_local_app
 * https://github.com/Caleydo/domino.js
 * https://github.com/Caleydo/entourage
 * https://github.com/Caleydo/particles
 * https://github.com/Caleydo/pathfinder
  * https://github.com/Caleydo/pathfinder_graph
  * https://github.com/Caleydo/pathfinder_ccle
 * https://github.com/Caleydo/vials
  * https://github.com/Caleydo/vials_server
 * https://github.com/Caleydo/mini_mds
 * https://github.com/Reemh/taco
  * https://github.com/Reemh/taco_server
	
## server
 * https://github.com/Caleydo/caleydo_server
 * https://github.com/Caleydo/caleydo_server_js

## python data provider
 * https://github.com/Caleydo/caleydo_data_hdf
 * https://github.com/Caleydo/caleydo_data_mongo
 * https://github.com/Caleydo/caleydo_data_sql

## python security
 * https://github.com/Caleydo/caleydo_security_flask
 * https://github.com/Caleydo/caleydo_security_store_unix
 * https://github.com/Caleydo/caleydo_security_store_pam
 * https://github.com/Caleydo/caleydo_security_store_ldap

## python utilities
 * https://github.com/Caleydo/sample_server_plugin
 * https://github.com/Caleydo/caleydo_graph_dot
 * https://github.com/Caleydo/caleydo_graph
 * https://github.com/Caleydo/caleydo_mapping

## bundles
 * https://github.com/Caleydo/bundle_web
 * https://github.com/Caleydo/bundle_python


