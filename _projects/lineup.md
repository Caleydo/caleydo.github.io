---
layout: project
title: Multi-Attribute Rankings
name: LineUp
key: lineup
permalink: /projects/lineup/
status: core
order: 3
standfirst: LineUp is an interactive technique designed to create, visualize and explore rankings of items based on a set of heterogeneous attributes.
help: http://help.caleydo.org/3.1/index.html#!views/stratomex/stratomex.md#LineUp

teaser: 
    lowres: 2013_infovis_lineup.png
#     highres: StratomeX_highRes.png

publications:
- 2013_infovis_lineup

videos: 
 - 2013_infovis_lineup_video
    
team:
 - gratzl 
 - gehlenborg
 - lex
 - pfister 
 - streit 
 - strobelt

collaborators:

github:
 -
  url: https://github.com/Caleydo/lineup.js
  name: LineUp.js
 - 
  url: https://github.com/Caleydo/caleydo
  name: Caleydo Core
 - 
  url: https://github.com/Caleydo/org.caleydo.vis.lineup.demos
  name: LineUp Demos
 - 
  url: https://github.com/Caleydo/org.caleydo.view.lineup
  name: LineUp View
---

# About

Rankings are a popular and universal approach to structuring otherwise unorganized collections of items by computing a rank for each item based on the value of one or more of its attributes. This allows us, for example, to prioritize tasks or to evaluate the performance of products relative to each other.

While the visualization of a ranking itself is straightforward, its interpretation is not, because the rank of an item represents only a summary of a potentially complicated relationship between its attributes and those of the other items. It is also common that alternative rankings exist which need to be compared and analyzed to gain insight into how multiple heterogeneous attributes affect the rankings. Advanced visual exploration tools are needed to make this process efficient.

In our paper we present a comprehensive analysis of requirements for the visualization of multi-attribute rankings. Based on these considerations, we propose LineUp - a novel and scalable visualization technique that uses bar charts. This interactive technique supports the ranking of items based on multiple heterogeneous attributes with different scales and semantics. It enables users to interactively combine attributes and flexibly refine parameters to explore the effect of changes in the attribute combination. This process can be employed to derive actionable insights as to which attributes of an item need to be modified in order for its rank to change.

Additionally, through integration of slope graphs, LineUp can also be used to compare multiple alternative rankings on the same set of items, for example, over time or across different attribute combinations. We evaluate the effectiveness of the proposed multi-attribute visualization technique in a qualitative study. The study shows that users are able to successfully solve complex ranking tasks in a short period of time.