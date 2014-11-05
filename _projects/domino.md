---
layout: project
title: Exploring Subsets of Tabular Datasets
name: Domino
key: domino
permalink: /projects/domino/
status: prototype
badge: New
standfirst: "Extracting, Comparing, and Manipulating Subsets across Multiple Tabular Datasets"

teaser: 
    lowres: domino_lowRes.png

publications:
 - 2014_infovis_domino

videos: 
 - 2014_infovis_domino_video
    
team:
 - gratzl
 - gehlenborg
 - lex
 - pfister 
 - streit 
 
collaborators:

github:
 - 
  url: https://github.com/Caleydo/org.caleydo.view.domino
  name: Domino
 - 
  url: https://github.com/Caleydo/caleydo
  name: Caleydo Core
---

Answering questions about complex issues often requires analysts to take into account information contained in multiple interconnected datasets. A common strategy in analyzing and visualizing large and heterogeneous data is to divide the data into meaningful subsets. In a next step, interesting subsets are selected and the associated data as well as the relationships between the subsets are visualized. However, neither the extraction and manipulation, nor the comparison of subsets is well supported by state-of-the-art techniques.

In this paper we present Domino, a novel multiform visualization technique for effectively representing subsets and the relationships between them. By providing comprehensive tools to arrange, combine, and extract subsets, Domino allows users to create both common visualization techniques and advanced visualizations tailored to specific use cases. In addition to the novel technique, we present an implementation that enables analysts to manage the wide range of options that our approach offers. Innovative interactive features such as placeholders and live previews support the rapid creation of complex analysis setups. We introduce the technique and the implementation using a simple example and demonstrate scalability and effectiveness in a use case from the field of cancer genomics.