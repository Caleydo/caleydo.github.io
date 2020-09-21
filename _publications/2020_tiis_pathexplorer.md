---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "Exploring Visual Patterns in Projected Human and Machine Decision-Making Paths"
key: 2020_tiis_pathexplorer
# paper | preprint | poster
type: preprint
# optional url for a different site; defaults to data.caleydo.org
paper_content_url: 


# The shortname is used for auto-generated titels
shortname: ProjectionPathExplorer
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2020_tiis_pathexplorer.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- hinterreiter
- steinparz
- schoefl
- stitz
- streit 

journal-short: ACM TiiS
year: 2020

bibentry: article
bib:
  journal: ACM Transactions on Interactive Intelligent Systems (TiiS), Special Issue on Interactive Visual Analytics for Making Explainable and Accountable Decisions (to appear)
  booktitle: 
  editor: 
  publisher:
  address: 
  doi: 
  url: https://arxiv.org/abs/2001.08372
  volume: 
  number: 
  pages: 
  month: 

preprint: https://arxiv.org/abs/2001.08372 # here you can put all preprint links (arxiv.org, osf.io,...)

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:

non_group_project: False

# Use if this paper is linked to an internal project. This will link to the project site
project: 

# Use this if you have an external project website
external-project: 

# The reference to the video entry
video: 
# The reference to the preview video entry
#preview-video:

# the prerint
pdf: 2020_tiis_pathexplorer.pdf
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

abstract: "In problem solving, the paths towards solutions can be viewed as a sequence of decisions. The decisions,
made by humans or computers, describe a trajectory through a high-dimensional representation space of the
problem. Using dimensionality reduction, these trajectories can be visualized in lower dimensional space. Such
embedded trajectories have previously been applied to a wide variety of data, but so far, almost exclusively 
the self-similarity of single trajectories has been analyzed. In contrast, we describe patterns emerging from
drawing many trajectories—for different initial conditions, end states, or solution strategies—in the same
embedding space. We argue that general statements about the problem solving tasks and solving strategies
can be made by interpreting these patterns. We explore and characterize such patterns in trajectories resulting
from human and machine-made decisions in a variety of application domains: logic puzzles (Rubik’s cube),
strategy games (chess), and optimization problems (neural network training). In the context of Rubik’s cube, we
present a physical interactive demonstrator that uses trajectory visualization to provide immediate feedback
to users regarding the consequences of their decisions. We also discuss the importance of suitably chosen
representation spaces and similarity metrics for the embedding."

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements
This work was supported in part by the State of Upper Austria (FFG851460, Human-Interpretable
Machine Learning) and the Austrian Science Fund (FWF P27975-NBL ).

