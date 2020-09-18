---
# a custom URL for the content of this paper
paper_content_url: http://sci.utah.edu/~vdl/papers/
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "Lineage: Visualizing Multivariate Clinical Data in Genealogy Graphs"
key: 2018_tvcg_lineage
# paper | preprint | poster
type: paper
redirect_from: /publications/2017_preprint_lineage

# The shortname is used for auto-generated titels
shortname: Lineage
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2018_tvcg_lineage.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2018_tvcg_lineage_teaser.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- nobre
- gehlenborg
- Hilary Coon
- lex

journal-short: TVCG
year: 2018

bibentry: article
bib:
  journal: IEEE Transactions on Visualization and Computer Graphics, to appear
  booktitle: 
  editor: 
  publisher:
  address: 
  doi: 10.1109/TVCG.2018.2811488
  url: 
  volume: 
  number: 
  pages: 
  month: 

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:


# Use this if you have an external project website
external-project: https://lineage.caleydoapp.org

# The reference to the video entry
video: 2018_tvcg_lineage_video
# The reference to the preview viedo entry
#preview-video:

# the prerint
pdf: 2018_tvcg_lineage.pdf
# A supplement PDF
supplement: 2018_tvcg_lineage_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
supplements:
#- name: General UpSet
#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hostet
code: https://github.com/Caleydo/lineage


abstract: "
The majority of diseases that are a significant challenge for public and individual heath are caused by a combination of hereditary and environmental factors. In this paper we introduce Lineage, a novel visual analysis tool designed to support domain experts who study such multifactorial diseases in the context of genealogies. Incorporating familial relationships between cases with other data can provide insights into shared genomic variants and shared environmental exposures that may be implicated in such diseases. We introduce a data and task abstraction, and argue that the problem of analyzing such diseases based on genealogical, clinical, and genetic data can be mapped to a multivariate graph visualization problem. The main contribution of our design study is a novel visual representation for tree-like, multivariate graphs, which we apply to genealogies and clinical data about the individuals in these families. We introduce data-driven aggregation methods to scale to multiple families. By designing the genealogy graph layout to align with a tabular view, we are able to incorporate extensive, multivariate attributes in the analysis of the genealogy without cluttering the graph. We validate our designs by conducting case studies with our domain collaborators."

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

We thank Asmaa Aljuhani and Annie Cherkaev for their contributions. We also thank our collaborators and the Visualization Design Lab at the University of Utah for the feedback, and the Caleydo team for their technical support. 
This work was supported in part by the US National Institutes of Health (U01 CA198935, R00 HG007583, R01MH099134) and the DoD -- Office of Economic Adjustment (OEA), ST1605-16-01. We thank the Pedigree and Population Resource of the Huntsman Cancer Institute, University of Utah (funded in part by the Huntsman Cancer Foundation) for its role in the ongoing collection, maintenance, and support of the Utah Population Database (UPDB).  We also acknowledge support for the UPDB through grant P30 CA2014 from the National Cancer Institute, and from the University of Utah’s Program in Personalized Health and Center for Clinical and Translational Science.
