---
layout: project
title: Furby
key: furby
permalink: /projects/furby/
status: ongoing
standfirst: "Fuzzy Force-Directed Bicluster Visualization"

teaser: 
    lowres: furby_lowRes.png

publications:
- 2014-bmc-furby

video: 2014-bmc-furby-video
    
team:
 - streit 
 - gratzl
 
collaborators:
 - Michael Gillhofer
 - Andreas Mitterecker
 - Andreas Mayr
 - Sepp Hochreiter
 
---

Cluster analysis is widely used to discover patterns in multi-dimensional data. Clustered heatmaps are the standard technique for visualizing one-way and two-way clustering results. In clustered heatmaps, rows and/or columns are reordered, resulting in a representation that shows the clusters as contiguous blocks. However, for biclustering results, where clusters can overlap, it is not possible to reorder the matrix in this way without duplicating rows and/or columns.

We present Furby, an interactive visualization technique for analyzing biclustering results. Our contribution is twofold. First, the technique provides an overview of a biclustering result, showing the actual data that forms the individual clusters together with the information which rows and columns they share. Second, for fuzzy clustering results, the proposed technique additionally enables analysts to interactively set the thresholds that transform the fuzzy (soft) clustering into hard clusters that can then be investigated using heatmaps or bar charts. Changes in the membership value thresholds are immediately reflected in the visualization. We demonstrate the value of Furby by loading biclustering results applied to a multi-tissue dataset into the visualization.

The proposed tool allows analysts to assess the overall quality of a biclustering result. Based on this high-level overview, analysts can then interactively explore the individual biclusters in detail. This novel way of handling fuzzy clustering results also supports analysts in finding the optimal thresholds that lead to the best clusters.