---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "Fuzzy Spreadsheet: Understanding and Exploring Uncertainties in Tabular Calculations"
key: 2020_preprint_fuzzy_spreadsheets
# paper | preprint | poster
type: preprint
# optional url for a different site; defaults to data.caleydo.org
paper_content_url:


# The shortname is used for auto-generated titels
shortname: Fuzzy Spreadsheets
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2020_preprint_fuzzy_spreadsheets.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large:

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- dhanoa
- walchshofer
- hinterreiter
- Eduard Groeller
- streit

journal-short: Preprint
year: 2020

bibentry: article
bib:
  journal: Preprint
  booktitle:
  editor:
  publisher:
  address:
  doi:
  url: https://osf.io/j5g4b
  volume:
  number:
  pages:
  month:

preprint: https://osf.io/j5g4b # here you can put all preprint links (arxiv.org, osf.io,...)

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:

non_group_project: False

# Use if this paper is linked to an internal project. This will link to the project site
project:

# Use this if you have an external project website
external-project: https://jku-vds-lab.at/fuzzy-spreadsheet/

# The reference to the video entry
video: 2020_fuzzy_spreadsheets_video
# The reference to the preview video entry
#preview-video:

# the prerint
pdf: 2020_preprint_fuzzy_spreadsheets.pdf
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

abstract: "Spreadsheet-based tools provide a simple yet effective way of calculating values, which makes them the number-one choice for building and formalizing simple models for budget planning and many other applications. A cell in a spreadsheet holds one specific value and gives a discrete, overprecise view of the underlying model. Therefore, spreadsheets are of limited use when investigating the immanent uncertainties of such models and answering what-if questions. Existing extensions typically require a complex modelling process that cannot be smoothly embedded in a tabular layout. In Fuzzy Spreadsheet, a cell can hold and display a distribution of values. This integrated uncertainty handling immediately conveys sensitivity and robustness information. The fuzzification of the cells enables calculations not only with precise values but with distributions, and probabilities. We conservatively added and carefully crafted visuals to maintain the look and feel of traditional spreadsheet while facilitating what-if analyses. Given a user-specified reference cell, Fuzzy Spreadsheet automatically extracts and visualizes contextually relevant information, such as impact, uncertainty, and degree of neighborhood, for the selected and related cells. To evaluate its usability and the perceived mental effort required, we conducted a user study. The results show that our approach outperforms traditional spreadsheets in terms of answer correctness, response time, and perceived mental effort for almost all tasks tested."

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

This work was supported in part by the FFG, Contract No. 854184: "Pro2Future" is funded within the Austrian COMET Program Competence Centers for Excellent Technologies under the auspices of the Austrian Federal Ministry of Transport, Innovation and Technology, the Austrian Federal Ministry for Digital and Economic Affairs and of the Provinces of Upper Austria and Styria. COMET is managed by the Austrian Research Promotion Agency FFG.