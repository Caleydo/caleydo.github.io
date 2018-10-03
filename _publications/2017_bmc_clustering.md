---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "Interactive Visual Exploration And Refinement Of Cluster Assignments"
key: 2017_bmc_clustering
redirect_from: /publications/2017_preprint_clustering/
type: paper

# The shortname is used for auto-generated titels
shortname: Interactive Clustering
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2017_bmc_clustering.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2017_bmc_clustering_teaser.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- kern
- lex
- gehlenborg
- Chris R. Johnson

journal-short: BMC Bioinformatics 
year: 2017

bibentry: article
bib:
  journal: BMC Bioinformatics
  booktitle: 
  editor: 
  publisher: 
  address: 
  doi: 10.1186/s12859-017-1813-7
  url: http://biorxiv.org/content/early/2017/04/04/123844 
  volume: 18
  number: 1
  pages: 406
  month: apr

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:

# Use if this paper is linked to an internal project. This will link to the project site
project:

# Use this if you have an external project website
external-project: http://ec2-52-58-105-31.eu-central-1.compute.amazonaws.com/stratomex_clustering/

# The reference to the video entry
video: 2017_bmc_clustering_video
# The reference to the preview viedo entry
#preview-video:

# the prerint
pdf: 2017_bmc_clustering.pdf
# A supplement PDF
#supplement:

# Extra supplements, such as talk slides, data sets, etc.
supplements:
#- name: Vials Conference Talk Slides
#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hostet
code: https://github.com/K3rn1n4tor/stratomex_js

abstract: "
<p>Background: With ever-increasing amounts of data produced in biology research, scientists are in need of efficient data analysis methods. Cluster analysis, combined with visualization of the results, is one such method that can be used to make sense of large data volumes. At the same time, cluster analysis is known to be imperfect and depends on the choice of algorithms, parameters, and distance measures. Most clustering algorithms don't properly account for ambiguity in the source data, as records are often assigned to discrete clusters, even if an assignment is unclear. While there are metrics and visualization techniques that allow analysts to compare clusterings or to judge cluster quality, there is no comprehensive method that allows analysts to evaluate, compare, and refine cluster assignments based on the source data, derived scores, and contextual data. </p>
<p>Results: In this paper, we introduce a method that explicitly visualizes the quality of cluster assignments, allows comparisons of clustering results and enables analysts to manually curate and refine cluster assignments. Our methods are applicable to matrix data clustered with partitional, hierarchical, and fuzzy clustering algorithms. Furthermore, we enable analysts to explore clustering results in context of other data, for example, to observe whether a clustering of genomic data results in a meaningful differentiation in phenotypes.</p>
 <p>Conclusions: Our methods are integrated into Caleydo StratomeX, a popular, web-based, disease subtype analysis tool. We show in a usage scenario that our approach can reveal ambiguities in cluster assignments and produce improved clusterings that better differentiate genotypes and phenotypes.</p>"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

We thank Samuel Gratzl for his help with the implementation. This work was funded in part by the US National Institutes of Health (U01 CA198935, P41 GM103545-17, R00 HG007583) and supported by a fellowship of the FITweltweit program of the German Academic Exchange Service (DAAD).