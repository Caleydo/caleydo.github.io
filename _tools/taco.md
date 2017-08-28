---
layout: tool
title: Visualizing Changes in Tables Over Time
name: TACO
key: taco
permalink: /tools/taco/
redirect_from: /projects/taco.html
status: web
order: 6
badge:
standfirst: "Visualizing Changes in Tables Over Time"

# the path relative to assets/images
teaser:
    lowres: papers/2017_infovis_taco.png
    highres: papers/2017_infovis_taco_teaser.png

publications:
 - 2017_infovis_taco

videos:
 - 2017_infovis_taco_video

team:
 - Christina Niederer
 - stitz
 - Reem Hourieh
 - Florian Grassinger
 - Wolfgang Aigner
 - streit

collaborators:

github:
 -
  url: https://github.com/Caleydo/taco
  name: TACO
 -
  url: https://github.com/Caleydo/taco_server
  name: TACO Server

web:
 -
  url: https://taco.caleydoapp.org
  name: TACO Web Version
  
---

Multivariate, tabular data is one of the most common data structures used in many different domains.

Over time, tables can undergo changes in both structure and content, which results in multiple versions of the same table. A challenging task when working with such derived tables is to understand what exactly has changed between versions in terms of additions/deletions, reorder, merge/split, and content changes. For textual data, a variety of commonplace "diff" tools exist that support the task of investigating changes between revisions of a text. Although there are some comparison tools which assist users in inspecting differences between multiple table instances, the resulting visualizations are often difficult to interpret or do not scale to large tables with thousands of rows and columns.

To address these challenges, we developed TACO, an interactive comparison tool that visualizes effectively the differences between multiple tables at various levels of detail. With TACO we show (1) the aggregated differences between multiple table versions over time, (2) the aggregated changes between two selected table versions, and (3) detailed changes between the selection. To demonstrate the effectiveness of our approach, we show its application by means of two usage scenarios.
