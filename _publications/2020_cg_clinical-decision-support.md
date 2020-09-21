---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "A Visual Approach to Explainable Computerized Clinical Decision Support"
key: 2020_cg_clinical-decision-support
# paper | preprint | poster
type: paper
# optional url for a different site; defaults to data.caleydo.org
paper_content_url: 


# The shortname is used for auto-generated titels
shortname: Clinical Decision Support
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2020_cg_clinical-decision-support.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- Juliane Müller 
- Matthaeus Stoehr
- Alexander Oeser
- Jan Gaebel
- streit 
- Andreas Dietz
- Steffen Oeltze-Jafra


journal-short: 
year: 2020

bibentry: article
bib:
  journal: Computer & Graphics, Special Section on VCBM 2019
  booktitle: 
  editor: 
  publisher:
  address: 
  doi: 10.1016/j.cag.2020.06.004
  url: 
  volume: 91
  number: 
  pages: 1-11
  month: 

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:

non_group_project: False

# Use if this paper is linked to an internal project. This will link to the project site
project: 

# Use this if you have an external project website
# external-project: https://dx.doi.org/10.1016/j.cag.2020.06.004

# The reference to the video entry
video: 
# The reference to the preview video entry
#preview-video:

# the prerint
pdf: 2020_cg_clinical-decision-support.pdf
# A supplement PDF
#supplement: 2017_preprint_taggle_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
supplements:
#- name: General UpSet
#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hostet
code: 

abstract: "Clinical Decision Support Systems (CDSS) provide assistance to physicians in clinical decision-making.
Based on patient-specific evidence items triggering the inferencing process, such as examination findings,
and expert-modeled or machine-learned clinical knowledge, these systems provide recommendations in
finding the right diagnosis or the optimal therapy. The acceptance of, and the trust in, a CDSS are highly
dependent on the transparency of the recommendation’s generation. Physicians must know both the key
influences leading to a specific recommendation and the contradictory facts. They must also be aware of
the certainty of a recommendation and its potential alternatives.
We present a glyph-based, interactive multiple views approach to explainable computerized clinical
decision support. Four linked views (1) provide a visual summary of all evidence items and their relevance for the computation result, (2) present linked textual information, such as clinical guidelines or
therapy details, (3) show the certainty of the computation result, which includes the recommendation
and a set of clinical scores, stagings etc., and (4) facilitate a guided investigation of the reasoning behind
the recommendation generation as well as convey the effect of updated evidence items. We demonstrate
our approach for a CDSS based on a causal Bayesian network representing the therapy of laryngeal cancer. The approach has been developed in close collaboration with physicians, and was assessed by six
expert otolaryngologists as being tailored to physicians’ needs in understanding a CDSS."

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

The research leading to this work was supported by the German
Federal Ministry of Education and Research (BMBF) (03Z1LN11)
and the Federal State of Saxony-Anhalt (FKZ: I 88).
