---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "Vials: Visualizing Alternative Splicing of Genes"
key: 2015_infovis_vials
permalink: /publications/2015_infovis_vials/
type: paper

# The shortname is used for auto-generated titels
shortname: Vials
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2015_infovis_vials.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2015_infovis_vials_teaser.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- strobelt
- Bilal Alsallakh
- Joseph Botors
- Brant Peterson
- Mark Borowsky
- pfister
- lex

journal: IEEE Transactions on Visualization and Computer Graphics (InfoVis ’15), vol. 22, no. 1, pp. 399-408
year: 2016
# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions" 
award:

doi: 10.1109/TVCG.2015.2467911
# The publisher URL - use only if no doi is available
publisher:

# Use if this paper is linked to an internal project. This will link to the project site
project:

# Use this if you have an external project website 
external-project: http://vials.io

# The reference to the video entry
video: 2015_infovis_vials_video
# The reference to the preview viedo entry 
preview-video: 2015_infovis_vials_video_preview

# the prerint
pdf: 2015_infovis_vials.pdf
# A supplement PDF
supplement: 2015_infovis_vials_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc. 
supplements:
- name: Vials Conference Talk Slides
  # use link instead of abslink if you want to link to the master directory
  abslink: http://vials.io/talk/
  # defaults to a download icon, use this if you want a link-out icon
  linksym: true

# Link to the repository where the code is hostet
code: https://github.com/caleydo/vials/

bibtex: 2015_infovis_vials.bib

abstract: "
<p>Alternative splicing is a process by which the same DNA sequence is used to assemble different proteins, called protein isoforms. Alternative splicing works by selectively omitting some of the coding regions (exons) typically associated with a gene. Detection of alternative splicing is difficult and uses a combination of advanced data acquisition methods and statistical inference. Knowledge about the abundance of isoforms is important for understanding both normal processes and diseases and to eventually improve treatment through targeted therapies. The data, however, is complex and current visualizations for isoforms are neither perceptually efficient nor scalable. To remedy this, we developed Vials, a novel visual analysis tool that enables analysts to explore the various datasets that scientists use to make judgments about isoforms: the abundance of reads associated with the coding regions of the gene, evidence for junctions, i.e., edges connecting the coding regions, and predictions of isoform frequencies. Vials is scalable as it allows for the simultaneous analysis of many samples in multiple groups. Our tool thus enables experts to (a) identify patterns of isoform abundance in groups of samples and (b) evaluate the quality of the data. We demonstrate the value of our tool in case studies using publicly available datasets.</p>"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Acknowledgements

We thank Samuel Gratzl for help with the framework, Nils Gehlenborg for comments on the manuscript, and Sebastian Hörsch and other members of the SDA team for their expertise and feedback. This work was supported in part by Novartis Institutes for BioMedical Research, the Austrian Science Fund (J 3437-N15), the Air Force Research Laboratory and DARPA grant FA8750-12-C-0300, and the US National Institutes of Health (U01 CA198935).
