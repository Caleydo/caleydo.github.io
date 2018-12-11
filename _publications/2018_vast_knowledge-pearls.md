---
layout: publication
# Quotes make the : possible, otherwise you can type this without quotes
title: "KnowledgePearls: Provenance-Based Visualization Retrieval"
# Keys must be unique to each paper, see section below for more details
key: 2018_vast_knowledge-pearls
# Select one of the options below
type: paper 
# Uncomment the line below for publications which should only appear on a personal webpage
# personal: y

# Auto-generates titles and alt-descriptors
shortname: KnowledgePearls
# Add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/publications/
image: 2018_vast_knowledge-pearls.png
# Add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/publications/
image_large: 2018_vast_knowledge-pearls_teaser.png

# Authors in the "database" can be used with just their person "key"
authors:
- stitz
- gratzl
- Harald Piringer
- Thomas Zichner
- streit

# Include a shortened name for the journal or conference/proceedings
journal-short: TVCG (VAST'18) 
year: 2018

# Create BibTeX info, using one of the entry choices
# Articles have a "journal", and inproceedings have a "booktitle"
# Preprints are articles with the location of preprint mentioned in "journal"
# You can remove fields you don't need, or else leave them blank
# Try to include a DOI, or use the publisher URL below
# Specify new BibTeX fields by adding a new key and value inside "bib:"
bibentry: article
bib:
  journal: IEEE Transactions on Visualization and Computer Graphics (VAST '18)
  booktitle: 
  editor: 
  doi: 10.1109/TVCG.2018.2865024
  publisher:
  address: 
  url: 
  volume: 25
  number: 1
  pages: 120--130
  month:


# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award: 

# Link to an official preprint server
preprint_server: 

# Links to a project hosted on VDL, or else externally on your own site
project: 
external-project: http://knowledge-pearls.caleydo.org/

# The reference to the video entry
video: 2018_vast_knowledge-pearls_video
# The reference to the preview viedo entry
#preview-video:

# the prerint
pdf: 2018_vast_knowledge-pearls.pdf
# A supplement PDF
supplement: 2018_vast_knowledge-pearls-supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
supplements:
#- name: General UpSet
#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hosted
code: https://github.com/Caleydo/knowledge-pearls
 

abstract: "
Storing analytical provenance generates a knowledge base with a large potential for recalling previous results and guiding users in future analyses. However, without extensive manual creation of meta information and annotations by the users, search and retrieval of analysis states can become tedious.

We present KnowledgePearls, a solution for efficient retrieval of analysis states that are structured as provenance graphs containing automatically recorded user interactions and visualizations. As a core component, we describe a visual interface for querying and exploring analysis states based on their similarity to a partial definition of a requested analysis state. Depending on the use case, this definition may be provided explicitly by the user by formulating a search query or inferred from given reference states. We explain our approach using the example of efficient retrieval of demographic analyses by Hans Rosling and discuss our implementation for a fast look-up of previous states. Our approach is independent of the underlying visualization framework. We discuss the applicability for visualizations which are based on the declarative grammar Vega and we use a Vega-based implementation of Gapminder as guiding example. We additionally present a biomedical case study to illustrate how KnowledgePearls facilitates the exploration process by recalling states from earlier analyses."

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

We are grateful to Suzie Lee Hoops for proof-reading our work. This work was supported in part by Boehringer Ingelheim Regional Center Vienna, the Austrian Science Fund (FWF P27975-NBL), and the State of Upper Austria (FFG 851460). The VRVis Forschungs-GmbH is funded by COMET – Competence Centers for Excellent Technologies (854174) by BMVIT, BMWFW, Styria, Styrian Business Promotion Agency – SFG and Vienna Business Agency. The COMET Programme is managed by FFG.
