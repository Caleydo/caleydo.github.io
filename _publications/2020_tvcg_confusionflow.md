---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "ConfusionFlow: A Model-Agnostic Visualization
for Temporal Analysis of Classifier Confusion"
# paper | preprint | poster
type: paper
# optional url for a different site; defaults to data.caleydo.org
paper_content_url: 

hide: False
non_group_project: False



# The shortname is used for auto-generated titels
shortname: ConfusionFlow
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2020_tvcg_confusionflow_small.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2020_tvcg_confusionflow_large.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- hinterreiter
- Peter Ruch
- stitz
- Martin Ennemoser
- Jürgen Bernard
- Hendrik Strobelt
- streit

journal-short: IEEE TVCG
year: 2020

bibentry: article
bib:
  journal: IEEE Transactions on Visualization and Computer Graphics (Early Access)
  booktitle: 
  editor: 
  publisher: 
  address: 
  doi: 10.1109/TVCG.2020.3012063
  url: 
  volume: 
  number: 
  pages: 
  month: 

preprint: https://arxiv.org/abs/1910.00969 # here you can put all preprint links (arxiv.org, osf.io,...)


# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:

non_group_project: False

# Use if this paper is linked to an internal project. This will link to the project site
project: 

# Use this if you have an external project website
external-project: 

# The reference to the video entry
video: 2020_tvcg_confusionflow_video
# The reference to the preview video entry
#preview-video:

# the prerint
pdf: 2020_tvcg_confusionflow.pdf
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
code: https://github.com/ConfusionFlow/confusionflow

abstract: "Classifiers are among the most widely used supervised machine learning algorithms. Many classification models exist, and
choosing the right one for a given task is difficult. During model selection and debugging, data scientists need to assess classifiers’
performances, evaluate their learning behavior over time, and compare different models. Typically, this analysis is based on
single-number performance measures such as accuracy. A more detailed evaluation of classifiers is possible by inspecting class errors.
The confusion matrix is an established way for visualizing these class errors, but it was not designed with temporal or comparative
analysis in mind. More generally, established performance analysis systems do not allow a combined temporal and comparative analysis
of class-level information. To address this issue, we propose ConfusionFlow, an interactive, comparative visualization tool that combines
the benefits of class confusion matrices with the visualization of performance characteristics over time. ConfusionFlow is model-agnostic
and can be used to compare performances for different model types, model architectures, and/or training and test datasets. We
demonstrate the usefulness of ConfusionFlow in a case study on instance selection strategies in active learning. We further assess the
scalability of ConfusionFlow and present a use case in the context of neural network pruning.
"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

This work was supported in part by the State of Upper Austria (FFG 851460, Human-Interpretable Machine Learning)
and the Austrian Science Fund (FWF P27975-NBL).
