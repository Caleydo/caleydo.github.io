---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "Pathfinder: Visual Analysis of Paths in Graphs"
key: 2016_eurovis_pathfinder
type: paper

# The shortname is used for auto-generated titels
shortname: Pathfinder
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2016_eurovis_pathfinder.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2016_eurovis_pathfinder_teaser.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- partl
- gratzl
- streit
- Anne Mai Wassermann
- pfister
- schmalstieg
- lex

journal-short: CGF (EuroVis '16)
year: 2016

bibentry: article
bib:
  journal: Computer Graphics Forum (EuroVis '16)
  doi: 10.1111/cgf.12883
  volume: 35
  number: 3
  pages: 71--80
  month: jun

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award: EuroVis 2016 Honorable Mention Award

# Use if this paper is linked to an internal project. This will link to the project site
project:

# Use this if you have an external project website
external-project: https://pathfinder.caleydoapp.org/

# The reference to the video entry
video: 2016_eurovis_pathfinder_video
# The reference to the preview viedo entry
#preview-video: 2016_eurovis_clue_video_preview

# the prerint
pdf: 2016_eurovis_pathfinder.pdf
# A supplement PDF
supplement: 2016_eurovis_pathfinder_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
supplements:
#- name: Vials Conference Talk Slides
#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hostet
code: https://github.com/Caleydo/pathfinder/

abstract: "
<p>The analysis of paths in graphs is highly relevant in many domains. Typically, path-related tasks are performed in node-link layouts. Unfortunately, graph layouts often do not scale to the size of many real world networks. Also, many networks are multivariate, i.e., contain rich attribute sets associated with the nodes and edges. These attributes are often critical in judging paths, but directly visualizing attributes in a graph layout exacerbates the scalability problem. In this paper, we present visual analysis solutions dedicated to path-related tasks in large and highly multivariate graphs. We show that by focusing on paths, we can address the scalability problem of multivariate graph visualization, equipping analysts with a powerful tool to explore large graphs. We introduce Pathfinder, a technique that provides visual methods to query paths, while considering various constraints. The resulting set of paths is visualized in both a ranked list and as a node-link diagram. For the paths in the list, we display rich attribute data associated with nodes and edges, and the node-link diagram provides topological context. The paths can be ranked based on topological properties, such as path length or average node degree, and scores derived from attribute data. Pathfinder is designed to scale to graphs with tens of thousands of nodes and edges by employing strategies such as incremental query results. We demonstrate Pathfinder's fitness for use in scenarios with data from a coauthor network and biological pathways.</p>"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

This work was co-funded by the European Union's Seventh Framework Programme (600641, GoSmart: A Generic Open-end Simulation Environment for Minimally Invasive Cancer Treatment), the Austrian Research Promotion Agency (840232), the Austrian Science Fund (P27975-NBL), and the US National Institutes of Health (U01 CA198935).
