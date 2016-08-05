---
layout: theme
title: Cancer Analysis and Visualization
key: cancer
permalink: /cancer/
order: 1
standfirst: 

publications:
 - 2014_nm_stratomex
 - 2014_cga_characterizing
 - 2012_eurovis_stratomex 
 - 2011_infovis_visbricks
 - 2010_infovis_matchmaker
 
tools: 
 - stratomex
 - pathways
 - domino
 
videos: 
 - 2014_nm_stratomex_video
 
web-url: http://demo.caleydo.org/stratomex.js/
web-name: StratomeX Web Version

---

{% capture path %}{{ site.baseurl }}/assets/images/themes/{% endcapture %}



Caleydo provides a suite of tools for the analysis of Cancer data. We maintain and develop tools for analyzing cancer subtypes (StratomeX), visualizing genomic data in matrices (Domino), biological networks in the context of cancer data (Entourage, Pathfinder), and alternative splicing based on mRNA-seq data (Vials). 

<img style="float: right; padding-left: 5px; width: 400px" src="{{path}}/tcga_import.png">
Caleydo is currently transitioning from a standalone software tool that you had to download and install, to a web-based visualization platform. At the end of the transition period, we envision an **integrated visual analysis paltform** that also **provides access to all major public cancer datasets** including [TCGA](http://cancergenome.nih.gov/). 

At the moment, our standalone software provides access to all TCGA datasets published through the [BROAD Firehose Analysis pipeline](https://gdac.broadinstitute.org/) (see Figure on the right). Some of our web-based tools also already provide access to selected TCGA datasets. 

## Cancer Subtype Analysis


<img align="right" src="{{site.baseurl}}/assets/images/projects/stratomex_basic.png" alt="Basic StratomeX" width="300px">

Identification and characterization cancer subtypes can lead to refined therapeutic targeting, which is an important step towards improved patient outcomes. StratomeX, our integrated visual analysis tool, can be used to discover subtypes and suggest molecular differences relevant for therapeutic approaches. StratomeX allows analysts to explore various stratifications derived through various means in the context of the source data. The Figure on the right shows the relationship of mRNA clusters in the TCGA GBM dataset to the copy number alterations in EGFR. We can see that cluster three (orange highlight) strongly correlates with a high-level amplification of EGFR. 

StratomeX also enables the analysis of clinical data in this context: it is made to identify confounding factors of stratifications based on molecular data, e.g., to ensure that the differences are not only driven by tumor staging. It also allows analysts to judge patient outcomes by comparing, e.g., survival data for each subtype. Finally, StratomeX also visualizes over-representation in pathways. 
 
![StratomeX explained]({{site.baseurl}}/assets/images/projects/stratomex_explained.png) 


StratomeX also provides an **advanced query and data selection interface**. It enables analysts to ask specific questions, such as *Which other stratifications are similar to the selected one?*, or *Is there a pathway that is enriched for this patient group?*. A rich set of algorithms calculate rankings of potential matching datasets and stratifications, which are then presented using the [LineUp]({{site.baseurl}}/projects/lineup/) interface. T

StratomeX is currently available as a standalone tool and as a web-based tool. For more information about StratomeX visit the [tool page]({{site.baseurl}}/tools/stratomex/), visit the [Help Pages](http://help.caleydo.org/3.1/index.html#!views/stratomex/stratomex.md) or watch the instructional videos below.
 
## Biological Networks 

## Visualizing Alternative Splicing

## Visualizing Genomic Matrices


