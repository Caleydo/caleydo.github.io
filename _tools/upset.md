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
    lowres: 2014_infovis_upset.png
    highres: StratomeX_highRes.png

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
  
web-url: http://vcg.github.io/upset/
web-name: UpSet Web Version

---

Understanding relationships between sets is an important analysis task that has received widespread attention in the visualization community. The major challenge in this context is the combinatorial explosion of the number of set intersections if the number of sets exceeds a trivial threshold. To address this, we introduce UpSet, a novel visualization technique for the quantitative analysis of sets, their intersections, and aggregates of intersections.

![UpSet Screenshot]({{site.baseurl}}/assets/images/papers/2014_infovis_upset_teaser.png)

UpSet is focused on creating task-driven aggregates, communicating the size and properties of aggregates and intersections, and a duality between the visualization of the elements in a dataset and their set membership. UpSet visualizes set intersections in a matrix layout and introduces aggregates based on groupings and queries. The matrix layout enables the effective representation of associated data, such as the number of elements in the aggregates and intersections, as well as additional summary statistics derived from subset or element attributes.

Sorting according to various measures enables a task-driven analysis of relevant intersections and aggregates. The elements represented in the sets and their associated attributes are visualized in a separate view. Queries based on containment in specific intersections, aggregates or driven by attribute filters are propagated between both views. UpSet also introduces several advanced visual encodings and interaction methods to overcome the problems of varying scales and to address scalability.

# Frequently Asked Questions
  
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


# UpSet R Version

We have created a static version of UpSet for R called [UpSetR](https://github.com/hms-dbmi/UpSetR/releases). This can be used to create high-resolution UpSet plots for a paper or other publication.

UpSetR offers much of the same functionality as the interactive version but is adapted to the needs of a static representation. The R package is available on [GitHub](https://github.com/hms-dbmi/UpSetR/releases) and released versions are hosted also on [CRAN](https://cran.r-project.org/web/packages/UpSetR/).
