---
layout: publication
# Quotes make the : possible, otherwise you can type this without quotes
title: "TourDino: A Support View for Confirming Patterns in Tabular Data"
# Keys must be unique to each paper, see section below for more details
key: 2019_eurova_tourdino
# Select one of the options below
# paper | preprint | poster
type: paper 

# Uncomment the line below for publications which should only appear on a personal webpage
# personal: y

# Auto-generates titles and alt-descriptors
shortname: TourDino
# Add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2019_eurova_tourdino.png
# Add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2019_eurova_tourdino_teaser.png

# Authors in the "database" can be used with just their person "key"
authors:
- eckelt
- adelberger
- Thomas Zichner
- Andreas Wernitznig
- streit

# Include a shortened name for the journal or conference/proceedings
journal-short: EuroVA '19
year: 2019

# Create BibTeX info, using one of the entry choices
# Articles have a "journal", and inproceedings have a "booktitle"
# Preprints are articles with the location of preprint mentioned in "journal"
# You can remove fields you don't need, or else leave them blank
# Try to include a DOI, or use the publisher URL below
# Specify new BibTeX fields by adding a new key and value inside "bib:"
bibentry: article
bib:
  journal: EuroVis Workshop on Visual Analytics (EuroVA '19)
  booktitle: 
  editor: 
  publisher: https://diglib.eg.org/handle/10.2312/eurova20191119
  address: 
  doi: 10.2312/eurova.20191119
  url:
  volume: 
  number: 
  pages: 
  month: 


# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award: 

# Link to an official preprint server
preprint_server: 

# Links to a project hosted on VDL, or else externally on your own site
project:
external-project: https://tourdino.caleydoapp.org/

# The reference to the video entry
video: 2019_eurova_tourdino_video
# The reference to the preview viedo entry
#preview-video:

# the prerint
pdf: 2019_eurova_tourdino.pdf
# A supplement PDF
supplement:

# Extra supplements, such as talk slides, data sets, etc.
supplements:
- name: EuroVA'19 Presentation
  link: 2019_eurova_tourdino.pptx
#  # use link instead of abslink if you want to link to the master directory
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hosted
code: https://github.com/Caleydo/tourdino
 

abstract: "
Seeking relationships and patterns in tabular data is a common data exploration task.
To confirm hypotheses that are based on visual patterns observed during exploratory data analysis, users need to be able to quickly compare data subsets, and get further information on the significance of the result and the statistical test applied.

Existing tools, however, either focus on the comparison of a single data type, such as comparing numerical attributes only, or provide little or no statistical evaluation to assess a hypothesis. To fill this gap, we present TourDino, a support view that helps users who are not experts in statistics to verify generated hypotheses and confirm insights gained during the exploration of tabular data.

In TourDino we present an overview of the statistical significance of various row or column comparisons. On demand, we show further details, including the test score, a textual description, and a detail visualization explaining the results.
To demonstrate the efficacy of our approach, we have integrated TourDino in the Ordino drug discovery platform for the purpose of identifying new drug targets."

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

This work was supported in part by Boehringer Ingelheim Regional Center Vienna, the State of Upper Austria (FFG 851460), and the Austrian Science Fund (FWF P27975-NBL).
