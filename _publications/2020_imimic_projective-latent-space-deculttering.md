---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "Projective Latent Interventions for Understanding and Fine-tuning Classifiers"
key: 2020_imimic_projective-latent-interventions
# paper | preprint | poster
type: paper
# optional url for a different site; defaults to data.caleydo.org
paper_content_url: 


# The shortname is used for auto-generated titels
shortname: Projective Latent Interventions
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2020_imimic_projective-latent-interventions_small.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2020_imimic_projective-latent-interventions_large.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- hinterreiter
- streit 
- Bernhard Kainz

journal-short: iMIMIC
year: 2020

bibentry: inproceedings
bib:
  booktitle: Interpretable and Annotation-Efficient Learning for Medical Image Computing. Proceedings of the 3rd Workshop on Interpretability of Machine Intelligence in Medical Image Computing (iMIMIC 2020)
  publisher: Springer
  url: https://arxiv.org/abs/2006.12902 
  editor: Cardoso, Jaime and others
  series: Lecture Notes in Computer Science
  doi: 10.1007/978-3-030-61166-8_2
  url: 
  volume: 12446
  number: 
  pages: 13--22
  month: 
preprint: https://arxiv.org/abs/2006.12902 # here you can put all preprint links (arxiv.org, osf.io,...)

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award: Best Paper Award at iMIMIC 2020

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
pdf_local: assets/papers/2020_imimic_projective_latent_interventions.pdf
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

abstract: "High-dimensional latent representations learned by neural
network classifiers are notoriously hard to interpret. Especially in medical applications, model developers and domain experts desire a better
understanding of how these latent representations relate to the resulting classification performance. We present a framework for retraining
classifiers by backpropagating manual changes made to low-dimensional
embeddings of the latent space. This means that our technique allows the
practitioner to control the latent decision space in an intuitive way. Our
approach is based on parametric approximations of non-linear embedding
techniques such as
t-distributed stochastic neighbourhood embedding.
Using this approach, it is possible to manually shape and declutter the
latent space of image classifiers in order to better match the expectations
of domain experts or to fulfil specific requirements of classification tasks.
For instance, the performance for specific class pairs can be enhanced by
manually separating the class clusters in the embedding, without significantly affecting the overall performance of the other classes. We evaluate
our technique on a real-world scenario in fetal ultrasound imaging."

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements
This work was supported by the State of Upper Austria (Human-Interpretable  Machine  Learning)  and  the  Austrian  Federal  Ministry  of  Education,Science and Research via the Linz Institute of Technology (LIT-2019-7-SEE-117), andby the Wellcome Trust (IEH 102431 and EPSRC EP/S013687/1.)

