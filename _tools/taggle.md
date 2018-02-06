---
layout: tool
title: Scalable Visualization of Tabular Data through Aggregation
name: Taggle
key: taggle
permalink: /tools/taggle/
redirect_from: /projects/taggle.html
status: web
order: 7
badge:
standfirst: "Exploring and presenting large and complex tables using hierarchical aggregation of data subsets."

# the path relative to assets/images
teaser:
    lowres: papers/2017_preprint_taggle.png
    highres: papers/2017_preprint_taggle_teaser.png

publications:
 - 2017_preprint_taggle

videos:
 - 2017_preprint_taggle_video

team:
 - Katarina Furmanova
 - gratzl
 - stitz
 - Thomas Zichner
 - Miroslava Jaresova
 - ennemoser
 - lex
 - streit

collaborators:

github:
 -
  url: https://github.com/Caleydo/taggle
  name: Taggle

web:
 -
  url: https://taggle.caleydoapp.org
  name: Taggle Web Version
  
---

Visualization of tabular data&mdash;for both presentation and exploration purposes&mdash;is a well-researched area. Although effective visual presentations of complex tables are supported by various plotting libraries, creating such tables is a tedious process and requires scripting skills. In contrast, interactive table visualizations that are designed for exploration purposes either operate at the level of individual rows, where large parts of the table are accessible only via scrolling, or provide a high-level overview that often lacks context-preserving drill-down capabilities.

Taggle is a novel visualization technique for exploring and presenting large and complex tables that are composed of individual columns of categorical or numerical data and homogeneous matrices. The key contribution of Taggle is the hierarchical aggregation of data subsets, for which the user can also choose suitable visual representations.The aggregation strategy is complemented by the ability to sort hierarchically such that groups of items can be flexibly defined by combining categorical stratifications and by rich data selection and filtering capabilities. 
