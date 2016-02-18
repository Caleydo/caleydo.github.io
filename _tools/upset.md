---
layout: tool
title: Visualizing Intersecting Sets
name: UpSet
key: upset
permalink: /tools/upset/
status: web
order: 2
standfirst: Interactive set visualization for more than three sets.
help: https://github.com/VCG/upset/wiki/

teaser: 
    lowres: papers/2014_infovis_upset.png
    highres: papers/2014_infovis_upset_teaser.png
publications:
 - 2014_infovis_upset
 
videos: 
 - 2014_infovis_upset_video

team:
 - lex
 - gehlenborg
 - strobelt
 - Romain Vuillemot
 - pfister 


github:
 - 
  url: https://github.com/VCG/upset/
  name: UpSet
 - 
  url: https://github.com/hms-dbmi/UpSetR
  name: UpSetR, R version
  
web:
 - 
  url: http://vcg.github.io/upset/
  name: UpSet Web Version
 -
  url: https://upsetr.shinyapps.io/UpSetR-shiny/
  name: UpSetR Shiny Version

---

Understanding relationships between sets is an important analysis task that has received widespread attention in the visualization community. The major challenge in this context is the combinatorial explosion of the number of set intersections if the number of sets exceeds a trivial threshold. To address this, we introduce UpSet, a novel visualization technique for the quantitative analysis of sets, their intersections, and aggregates of intersections.

![UpSet Screenshot]({{site.baseurl}}/assets/images/papers/2014_infovis_upset_teaser.png)

UpSet is focused on creating task-driven aggregates, communicating the size and properties of aggregates and intersections, and a duality between the visualization of the elements in a dataset and their set membership. UpSet visualizes set intersections in a matrix layout and introduces aggregates based on groupings and queries. The matrix layout enables the effective representation of associated data, such as the number of elements in the aggregates and intersections, as well as additional summary statistics derived from subset or element attributes.

Sorting according to various measures enables a task-driven analysis of relevant intersections and aggregates. The elements represented in the sets and their associated attributes are visualized in a separate view. Queries based on containment in specific intersections, aggregates or driven by attribute filters are propagated between both views. UpSet also introduces several advanced visual encodings and interaction methods to overcome the problems of varying scales and to address scalability.


## Why UpSet?



## UpSet key features



## UpSetR - Creating UpSet plots in R

Many scientists use R as part of their analysis workflow. To allow those analysts to easily produce high-resolution figures of set intersections within their workflow that can be used in publications, we have developed an R version of UpSet. 

![UpSet Screenshot]({{site.baseurl}}/assets/images/projects/upset/upsetr.png)

UpSetR has many of the features of our interactive UpSet plots, specifically it comes with various ways to sort and filter intersections and can plot attributes about the elements in the various sets. The layout is slightly adapted - intersectiosn are plotted horizontally instead of vertically, which is beneficial for the typical aspect ratios found in papers. UpSetR does not include the aggregation features of UpSet, does not provide summary statistics about the intersections in line with the set cardinality, and does not provide access to the indivdual items. 

To learn more about UpSetR visit the [source code repository](https://github.com/hms-dbmi/UpSetR) which includes documentation on usage, or check out the released versions on [CRAN](https://cran.r-project.org/web/packages/UpSetR/), or try the [UpSetR shiny app](https://upsetr.shinyapps.io/UpSetR-shiny/). 

## Frequently Asked Questions
  
  * *How can I create high-resolution UpSet plots for a paper or other publication?*  
    There are two options: 
     *  If you prefer to use the interactive web-based version you can print the UpSet plot to a PDF and edit the PDF with a vector editing software such as Adobe Illustrator. 
     *  You can use [UpSetR](https://github.com/hms-dbmi/UpSetR), the R version of UpSet to create a static, high-res UpSet plot.
  
  * *Can I upload my own dataset to analyze in UpSet?*  
    Yes, you can use upset with data that can be accessed over the Internet. Go [here](https://github.com/VCG/upset/wiki) to learn how to do it.
  
  * *Can I download UpSet and use it locally for my confidential data?*  
    Yes, you can download upset from the [source code repository](https://github.com/VCG/upset), which also provides [some instructions on local deployment](https://github.com/VCG/upset/blob/master/README.md).
  
  * *Do you provide documentation for UpSet?*  
    Yes, through the [GitHub Wiki](https://github.com/VCG/upset/wiki). Right now it only covers data import, but more will follow soon. Don't forget to watch the videos! They give you a good idea on how things are done.
  
  * *Which Browsers are supported?*  
    We currently test only on the latest version of Google Chrome. Other recent browsers might work too.

