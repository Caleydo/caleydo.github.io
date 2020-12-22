---
layout: publication
# Quotes make the : possible, otherwise you can type this without quotes
title: "Visualization of Rubik's Cube Solution Algorithms"
# Keys must be unique to each paper, see section below for more details
key: 2019_eurova_rubik
# Select one of the options below
# paper | preprint | poster
type: paper 


# Auto-generates titles and alt-descriptors
shortname: Rubik
# Add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2019_eurova_rubik_small.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2019_eurova_rubik_large.png

# Authors in the "database" can be used with just their person "key"
authors:
- steinparz 
- hinterreiter
- stitz
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
bibentry: inproceedings
bib:
  journal: 
  booktitle: EuroVis Workshop on Visual Analytics (EuroVA '19)
  editor: Landesberger, Tatiana von and Turkay, Cagatay
  publisher: The Eurographics Association
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

# Use if this paper is linked to an internal project. This will link to the project site
project: 

# Use this if you have an external project website
external-project: 

non_group_project: False

# The reference to the video entry
video: 
# The reference to the preview viedo entry
#preview-video:

# the prerint
pdf: 2019_eurova_rubik.pdf
# A supplement PDF
supplement:

# Extra supplements, such as talk slides, data sets, etc.
supplements:
#- name: General UpSet
#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hosted
code: https://github.com/JKU-ICG/rubiks-cube-demonstrator
 

abstract: "
Rubik’s Cube is among the world’s most famous puzzle toys. Despite its relatively simple principle, it requires dedicated, carefully
planned algorithms to be solved. In this paper, we present an approach to visualize how different solution algorithms navigate
through the high-dimensional space of Rubik’s Cube states. We use t-distributed stochastic neighbor embedding (t-SNE) to
project feature vector representations of cube states to two dimensions. t-SNE preserves the similarity of cube states and leads to
clusters of intermediate states and bundles of cube solution pathways in the projection. Our prototype implementation allows
interactive exploration of differences between algorithms, showing detailed state information on demand."

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

This work was supported in part by the State of UpperAustria (FFG 851460, Human-Interpretable Machine Learning) and the Austrian Science Fund (FWF P27975-NBL).
