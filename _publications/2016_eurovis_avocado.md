---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "AVOCADO: Visualization of Workflow-Derived Data Provenance for Reproducible Biomedical Research"
key: 2016_eurovis_avocado
permalink: /publications/2016_eurovis_avocado/
type: paper

# The shortname is used for auto-generated titels
shortname: AVOCADO
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2016_eurovis_avocado.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2016_eurovis_avocado_teaser.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- stitz
- Stefan Luger
- streit
- gehlenborg

journal-short: CGF (EuroVis '16)
year: 2016

bibentry: article
bib:
  journal: Computer Graphics Forum (EuroVis '16)
  booktitle: 
  editor: 
  publisher: 
  address: 
  doi: 10.1111/cgf.12924
  url: https://onlinelibrary.wiley.com/doi/10.1111/cgf.12924/abstract
  volume: 35
  number: 3
  pages: 481-490
  month: jun

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:

# Use if this paper is linked to an internal project. This will link to the project site
project:

# Use this if you have an external project website
#external-project: 

# The reference to the video entry
video: 2016_eurovis_avocado_video
# The reference to the preview viedo entry
#preview-video: 2016_eurovis_avocado_video_preview

# the prerint
pdf: 2016_eurovis_avocado.pdf
# A supplement PDF
supplement: 2016_eurovis_avocado_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
supplements:
#- name: Vials Conference Talk Slides
#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hostet
#code: https://github.com/Caleydo/pathfinder/

bibtex: 2016_eurovis_avocado.bib

abstract: "
<p>A major challenge of data-driven biomedical research lies in the collection and representation of data provenance information
to ensure reproducibility of findings. In order to communicate and reproduce multi-step analysis workflows executed on datasets
that contain data for dozens or hundreds of samples, it is crucial to be able to visualize the provenance graph at different levels
of aggregation. Most existing approaches are based on node-link diagrams, which do not scale to the complexity of typical
data provenance graphs. In our proposed approach we reduce the complexity of the graph using hierarchical and motif-based
aggregation. Based on user action and graph attributes a modular degree-of-interest (DoI) function is applied to expand parts
of the graph that are relevant to the user. This interest-driven adaptive provenance visualization approach allows users to
review and communicate complex multi-step analyses, which can be based on hundreds of files that are processed by numerous
workflows. We integrate our approach into an analysis platform that captures extensive data provenance information and
demonstrate its effectiveness by means of a biomedical usage scenario.</p>"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

We are grateful to Samuel Gratzl for input on the early design and the implementation of AVOCADO, and to the Refinery Platform team (Peter J Park, Shannan Ho Sui, Win Hide, Ilya Sytchev, Jennifer Marx, Scott Ouellette, Fritz Lekschas) for their help with the task definitions and the integration of AVOCADO. This work was funded by the Austrian Research Promotion Agency (FFG 840232), the Austrian Science Fund (FWF P27975-NBL), the US National Institutes of Health (R00 HG007583), and the Harvard Stem Cell Institute.