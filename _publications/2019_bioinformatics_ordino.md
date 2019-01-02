---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "Ordino: visual analysis tool for ranking and exploring genes, cell lines, and tissue samples"
key: 2019_bioinformatics_ordino
# paper | preprint | poster
type: paper
# optional url for a different site; defaults to data.caleydo.org
#paper_content_url: https://doi.org/10.1101/277848


# The shortname is used for auto-generated titels
shortname: Ordino
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2019_bioinformatics_ordino.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2019_bioinformatics_ordino_teaser.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- streit
- gratzl
- stitz
- Andreas Wernitznig
- Thomas Zichner
- Christian Haslinger


journal-short: Bioinformatics
year: 2019

bibentry: article
bib:
  journal: Bioinformatics
  booktitle: 
  editor: 
  publisher: Oxford University Press
  address: 
  doi: 10.1101/277848
  url: 
  volume: 
  number: 
  pages: 
  month: 

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:

# Use if this paper is linked to an internal project. This will link to the project site
project: ordino

# Use this if you have an external project website
external-project: https://ordino.caleydoapp.org

# The reference to the video entry
video: 2019_bioinformatics_ordino_video
# The reference to the preview video entry
#preview-video:

# the prerint
pdf: 2019_bioinformatics_ordino.pdf
# A supplement PDF
supplement: 2019_bioinformatics_ordino_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
supplements:
#- name: General UpSet
#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hostet
code: https://github.com/Caleydo/ordino

abstract: "
<p>A common approach in data-driven knowledge discovery is to prioritize a collection of items, such as genes, cell lines, and tissue samples, based on a rich set of experimental data and metadata. Applications include, for instance, selecting the most appropriate cell line for an experiment or identifying genes that could serve as potential drug targets or biomarkers. This can be challenging due to the heterogeneity and size of the data as well as the fact that multiple attributes need to be considered in combination. Advanced visual exploration tools – going beyond static spreadsheet tools such as Microsoft Excel – are needed to aid this prioritization process. To address this task, we developed Ordino, an open-source, web-based visual analysis tool for flexible ranking, filtering, and exploring of cancer genomics data.</p>"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

We thank Christian Lehner for contributions to the implementation of the tool as well as Daniel Gerlach, Markus Bauer, and Anita Steiner for their contributions to data preparation and data handling. This work was supported by the Austrian Science Fund (P27975-NBL), the State of Upper Austria (FFG 851460), and Boehringer Ingelheim RCV. 
