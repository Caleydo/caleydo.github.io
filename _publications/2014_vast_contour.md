---
layout: publication
title: "ConTour: Data-Driven Exploration of Multi-Relational Datasets for Drug Discovery"
key: 2014_vast_contour
permalink: /publications/2014_vast_contour/
type: paper
redirect_from: /projects/contour.html

shortname: Contour
image: 2014_vast_contour.png
image_large: 2014_vast_contour_teaser.png

authors:
- partl
- lex
- strobelt
- Anne Mai Wassermann
- pfister
- schmalstieg

journal: IEEE Transactions on Visualization and Computer Graphics (VAST '14), 20(12), pp. 1883-1892
year: 2014
award:

doi:
# use publisher only if no doi is available
publisher:


project: contour

video: 2014_vast_contour_video
preview-video: 2014_vast_contour_video_preview


pdf: 2014_vast_contour.pdf
supplement:
bibtex: 2014_vast_contour.bib

abstract: "
<p>Large scale data analysis is nowadays a crucial part of drug discovery. Biologists and chemists need to quickly explore and evaluate potentially effective yet safe compounds based on many datasets that are in relationship with each other. However, there is a is a lack of tools that support them in these processes. To remedy this, we developed ConTour, an interactive visual analytics technique that enables the exploration of these complex, multi-relational datasets. At its core ConTour lists all items of each dataset in a column. Relationships between the columns are revealed through interaction: selecting one or multiple items in one column highlights and re-sorts the items in other columns. Filters based on relationships enable drilling down into the large data space. To identify interesting items in the first place, ConTour employs advanced sorting strategies, including strategies based on connectivity strength and uniqueness, as well as sorting based on item attributes. ConTour also introduces interactive nesting of columns, a powerful method to show the related items of a child column for each item in the parent column. Within the columns, ConTour shows rich attribute data about the items as well as information about the connection strengths to other datasets. Finally, ConTour provides a number of detail views, which can show items from multiple datasets and their associated data at the same time. We demonstrate the utility of our system in case studies conducted with a team of chemical biologists, who investigate the effects of chemical compounds on cells and need to understand the underlying mechanisms.</p>"

---

# Details 

In drug discovery, the analysis of multiple heterogeneous datasets is an integral part to evaluate effective yet safe compounds. ConTour is a visual analysis technique that allows analysts to effectively explore complex relationships between datasets. The figure below gives an overview of an exemplary setup of datasets that can be analyzed with ConTour.

<img src="{{site.baseurl}}/assets/images/projects/contour_data_graph.png" alt="Dataset Overview" style="width: 300px;"/>

The main visual interface of ConTour is simple yet effective. It displays the items of each dataset in a column. The way items are presented is tailored to the item type. For example, bar charts are used for biological fingerprints of compounds, which consist of many numerical attributes. The relationships between items of different columns are revealed through interaction: Selecting one or multiple items in one column brings all related items of other columns to the top and highlights them. Another possibility to reveal item relationships between columns is nesting. By putting one column into an other column, the child column lists all related items for each item in the parent column. To save space, the child items of each parent item can be collapsed into summary representations.
ConTour provides different ways to filter the data. Selection-based filters reduce the items in all columns to those that are related to the currently selected items. Attribute-based filters remove all items of a column whose attributes do not satisfy a certain filter criterion, like, for example, a value range for numerical attributes.
To quickly find the most interesting items, the items of a column can be sorted by some attribute, or ranked according to a parametrizable enrichment score. This score conveys how specific two items of different columns are related via the items of a third column. It can be used, for example, to identify fingerprint clusters that show an enrichment in compounds that modulate a specific pathway.
Finally, ConTour provides a number of detail views tailored to the different item types. For example, the detail view for compounds displays the chemical structure of multiple compounds. The pathway detail view shows one pathway graph with all of its contained genes and also indicates compounds that map to this pathway and associated fingerprint clusters.

![ConTour Overview]({{site.baseurl}}/assets/images/projects/contour_explained.png)

# Acknowledgements

We wish to thank Felix Reisen and Mark Borowsky for their valuable input and feedback.

This work was supported in part by the Austrian Science Fund (P22902, J 3437-N15), the Province of Styria HTI (A3-22.M-5/2012-21 “Tumor Heterogeneity”) and the Air Force Research Laboratory and DARPA grant FA8750-12-C-0300. Anne MaiWassermann is the recipient of a NIBR Presidential Postdoctoral Fellowship.