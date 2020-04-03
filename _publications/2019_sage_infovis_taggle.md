---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "Taggle: Combining Overview and Details in Tabular Data Visualizations"
key: 2019_sage_infovis_taggle
# paper | preprint | poster
type: paper
# optional url for a different site; defaults to data.caleydo.org
#paper_content_url: https://arxiv.org/abs/1712.05944


# The shortname is used for auto-generated titels
shortname: Taggle
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2019_sage_infovis_taggle.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2019_sage_infovis_taggle.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- Katarina Furmanova
- gratzl
- stitz
- Thomas Zichner
- Miroslava Jaresova
- ennemoser
- lex
- streit

journal-short: Information Visualization
year: 2019

bibentry: article
bib:
  journal: Information Visualization
  booktitle: 
  editor: 
  publisher: Sage
  address: 
  doi: 10.1177/1473871619878085
  url:
  volume: 19
  number: 2
  pages: 114-136
  month: 

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:

# Use if this paper is linked to an internal project. This will link to the project site
project: lineup

# Use this if you have an external project website
external-project: https://lineup.js.org

# The reference to the video entry
video: 2019_sage_infovis_taggle_video
# The reference to the preview video entry
#preview-video:

# the prerint
pdf: 2019_sage_infovis_taggle.pdf
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
code: https://github.com/lineupjs/lineupjs/

abstract: "
<p>Most tabular data visualization techniques focus on overviews, yet many practical analysis tasks are concerned with investigating individual items of interest. At the same time, relating an item to the rest of a potentially large table is important. 
In this work we present Taggle, a tabular visualization technique for exploring and presenting large and complex tables. Taggle takes an item-centric, spreadsheet-like approach, visualizing each row in the source data individually using visual encodings for the cells. At the same time, Taggle introduces data-driven aggregation of data subsets. The aggregation strategy is complemented by interaction methods tailored to answer specific analysis questions, such as sorting based on multiple columns and rich data selection and filtering capabilities. We demonstrate Taggle using a case study conducted by a domain expert on complex genomics data analysis for the purpose of drug discovery.</p>"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

We thank Bikram Kawan and Martin Ennemoser for their contributions to the initial prototype implementation as well as Christian Haslinger and Andreas Wernitznig for providing valuable conceptual feedback. This work was supported in part by Boehringer Ingelheim Regional Center Vienna; the State of Upper Austria (FFG \#851460); the Austrian Science Fund (FWF P27975-NBL); and the National Science Foundation (NSF IIS 1751238).
