---
layout: project
title: Relational Data Visualization
name: ConTour
key: contour
permalink: /projects/contour/
status: prototype
standfirst: Data-Driven Exploration of Multi-Relational Datasets for Drug Discovery
badge: New
teaser: 
    lowres: 2014_vast_contour.png
#     highres: StratomeX_highRes.png

publications:
- 2014_vast_contour

videos:
 - 2014_vast_contour_video

team:
 - partl
 - lex
 - streit 
 - strobelt
 - pfister
 - schmalstieg

collaborators:
 - wassermann 
 
---

Large scale data analysis is nowadays a crucial part of drug discovery. Biologists and chemists need to quickly explore and evaluate potentially effective yet safe compounds based on many datasets that are in relationship with each other. However, there is a is a lack of tools that support them in these processes. To remedy this, we developed ConTour, an interactive visual analytics technique that enables the exploration of these complex, multi-relational datasets. At its core ConTour lists all items of each dataset in a column. Relationships between the columns are revealed through interaction: selecting one or multiple items in one column highlights and resorts the items in other columns. Filters based on relationships enable drilling down into the large data space. To identify interesting items in the first place, ConTour employs advanced sorting strategies, including strategies based on connectivity strength and uniqueness, as well as sorting based on item attributes. ConTour also introduces interactive nesting of columns, a powerful method to show the related items of a child column for each item in the parent column. Within the columns, ConTour shows rich attribute data about the items as well as information about the connection strengths to other datasets. Finally, ConTour provides a number of detail views, which can show items from multiple datasets and their associated data at the same time. We demonstrate the utility of our system in case studies conducted with a team of chemical biologists, who investigate the effects of chemical compounds on cells and need to understand the underlying mechanisms.