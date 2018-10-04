---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "From Visual Exploration to Storytelling and Back Again"
key: 2016_eurovis_clue
type: paper

# The shortname is used for auto-generated titels
shortname: CLUE
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2016_eurovis_clue.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2016_eurovis_clue_teaser.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- gratzl
- lex
- gehlenborg
- Nicola Cosgrove
- streit

journal-short: CGF (EuroVis '16)
year: 2016

bibentry: article
bib:
  journal: Computer Graphics Forum (EuroVis '16)
  booktitle: 
  editor: 
  publisher: 
  address: 
  doi: 10.1111/cgf.12925
  url: https://onlinelibrary.wiley.com/doi/10.1111/cgf.12925/abstract
  volume: 35
  number: 3
  pages: 491--500
  month: jun

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:

# Use if this paper is linked to an internal project. This will link to the project site
project:

# Use this if you have an external project website
external-project: http://vistories.org

# The reference to the video entry
video: 2016_eurovis_clue_video
# The reference to the preview viedo entry
#preview-video: 2016_eurovis_clue_video_preview

# the prerint
pdf: 2016_eurovis_clue.pdf
# A supplement PDF
supplement: 2016_eurovis_clue_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
supplements:
 - name: Samuel Gratzl's Talk @ EuroVis'16 (PDF)
   link: 2016_eurovis_clue_talk.pdf
 - name: Samuel Gratzl's Talk  @ EuroVis'16 (PPTX)
   link: 2016_eurovis_clue_talk.pptx

# Link to the repository where the code is hostet
code: https://github.com/Caleydo/caleydo_clue/

abstract: "
<p>The primary goal of visual data exploration tools is to enable the discovery of new insights. To justify and reproduce insights, the discovery process needs to be documented and communicated. A common approach to documenting and presenting findings is to capture visualizations as images or videos. Images, however, are insufficient for telling the story of a visual discovery, as they lack full provenance information and context. Videos are difficult to produce and edit, particularly due to the non-linear nature of the exploratory process. Most importantly, however, neither approach provides the opportunity to return to any point in the exploration in order to review the state of the visualization in detail or to conduct additional analyses. In this paper we present <strong>CLUE</strong> (Capture, Label, Understand, Explain), a model that tightly integrates data exploration and presentation of discoveries. Based on provenance data captured during the exploration process, users can extract key steps, add annotations, and author 'Vistories', visual stories based on the history of the exploration. These Vistories can be shared for others to view, but also to retrace and extend the original analysis. We discuss how the CLUE approach can be integrated into visualization tools and provide a prototype implementation. Finally, we demonstrate the general applicability of the model in two usage scenarios: a Gapminder-inspired visualization to explore public health data and an example from molecular biology that illustrates how Vistories could be used in scientific journals.</p>"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Vistories

<div style="display: flex;align-items: baseline;">
<div style="width: 45%; margin: 0px 1em;">
    <a href="//vistories.org/v/gapminder" target="_blank">
    <img src="{{site.baseurl}}/assets/images/publications/{{ page.key }}_gapminder.png" alt="GapMinder usage scenario">
    </a>
    <div class="caption">
      <a href="//vistories.org/v/gapminder" target="_blank">
        <h3>GapMinder</h3>
      </a>
      <p>Comparing Wealth vs. Life Excepectancy over time, illustrating the basic concepts of Vistories.</p>
      <p></p>
    </div>
  </div>
<div style="width: 45%; margin: 0px 1em;">
    <a href="//vistories.org/v/stratomex" target="_blank">
    <img src="{{site.baseurl}}/assets/images/publications/{{ page.key }}.png" alt="StratomeX usage scenario">
    </a>
    <div class="caption">
      <a href="//vistories.org/v/stratomex" target="_blank">
        <h3>StratomeX</h3>
      </a>
      <p>Reproducing previously published Use Cases of the StratomeX visualization technique, highlighting reproducibility and storytelling aspects of Vistories.</p>
    </div>
  </div>
</div>

# Acknowledgements

This work was supported in part by the Austrian Science Fund (FWF P27975-NBL), the State of Upper Austria (FFG 851460), and the US National Institutes of Health (U01 CA198935).
