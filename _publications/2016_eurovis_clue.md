---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "From Visual Exploration to Storytelling and Back Again"
key: 2016_eurovis_clue
permalink: /publications/2016_eurovis_clue/
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
- streit

journal: Computer Graphics Forum (EuroVis '16) (to appear)
year: 2016
# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:

doi:
# The publisher URL - use only if no doi is available
publisher:

# Use if this paper is linked to an internal project. This will link to the project site
project:

# Use this if you have an external project website
external-project: http://vistories.org

# The reference to the video entry
#video: 2016_eurovis_clue_video
# The reference to the preview viedo entry
#preview-video: 2016_eurovis_clue_video_preview

# the prerint
#pdf: 2016_eurovis_clue.pdf
# A supplement PDF
#supplement: 2015_infovis_vials_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
supplements:
#- name: Vials Conference Talk Slides
#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hostet
code: https://github.com/Caleydo/caleydo_clue/

bibtex: 2016_eurovis_clue.bib

abstract: "
<p>The primary goal of visual data exploration tools is to enable discovery of new insights. To justify such insights, the discovery process needs to be documented and communicated. A common approach to document and present such findings is to capture visualizations as images or videos. Images, however, are insufficient for telling the story of visual discovery, as they lack full provenance information and context. Videos are difficult to produce and edit, in particular due to the non-linear nature of the exploratory process. Most importantly, however, neither approach provides the opportunity to return to any point inthe exploration in order to review the state of the visualization in detail or to conduct additional analyses. In this paper we present <strong>CLUE</strong> (capture, label, understand, explain), a framework that tightly integrates data exploration and presentation of discoveries. Based on provenance data captured during the exploratory process, users can extract the key steps of the exploration, add annotations, and author “vistories” that can be shared for consumption, but that can also serve as the foundation for new discoveries. We discuss the integration of the CLUE approach in visualization tools and provide a prototypical implementation. Finally, we demonstrate the general applicability of the framework in two usage scenarios. The first one employs a Gapminder-inspired visualization to explore global public health data. The second usage scenario illustrate show CLUE can be used to create vistories for the publication of exploratory findings in scientific journals.</p>"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Vistories

<div style="display: flex;align-items: baseline;">
<div style="width: 48%">
    <a href="//vistories.org/gapminder.html" target="_blank">
    <img src="{{ site.baseurl }}/assets/images/papers/{{ page.key }}_gapminder.png" alt="GapMinder usage scenario">
    </a>
    <div class="caption">
      <a href="//vistories.org/gapminder.html" target="_blank">
        <h3>GapMinder</h3>
      </a>
      <p>Comparing Wealth vs. Life Excepectancy over time, illustrating the basic concepts of Vistories.</p>
      <p></p>
    </div>
  </div>
<div style="width: 48%">
    <a href="//vistories.org/stratomex.html" target="_blank">
    <img src="{{ site.baseurl }}/assets/images/papers/{{ page.key }}.png" alt="StratomeX usage scenario">
    </a>
    <div class="caption">
      <a href="//vistories.org/stratomex.html" target="_blank">
        <h3>StratomeX</h3>
      </a>
      <p>Reproducing previously published Use Cases of the StratomeX visualization technique, highlighting reproducibility and storytelling aspects of Vistories.</p>
    </div>
  </div>
</div>

# Acknowledgements

This work was supported in part by the Austrian Research Promotion Agency (840232) and the US National Institutes of Health (R00 HG007583 and U01 CA198935).
