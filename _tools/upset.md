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
 -
  url: https://github.com/ImSoErgodic/py-upset
  name: pyUpSet, Python version
  
web:
 - 
  url: https://vcg.github.io/upset/
  name: UpSet Web Version
 -
  url: https://upsetr.shinyapps.io/UpSetR-shiny/
  name: UpSetR Shiny Version

---

{% capture path %}{{ site.baseurl }}/assets/images/projects/upset/{% endcapture %}

Understanding relationships between sets is an important analysis task. The major challenge in this context is the combinatorial explosion of the number of set intersections if the number of sets exceeds a trivial threshold. To address this, we introduce UpSet, a novel visualization technique for the quantitative analysis of sets, their intersections, and aggregates of intersections.

![UpSet Screenshot]({{site.baseurl}}/assets/images/papers/2014_infovis_upset_teaser.png)

UpSet is focused on creating task-driven aggregates, communicating the size and properties of aggregates and intersections, and a duality between the visualization of the elements in a dataset and their set membership. UpSet visualizes set intersections in a matrix layout. The matrix layout enables the effective representation of associated data, such as the number of elements in the aggregates and intersections, as well as additional summary statistics.

Sorting according to various measures enables a task-driven analysis of relevant intersections and aggregates. The elements represented in the sets and their associated attributes are visualized in a separate view. Queries based on containment in specific intersections, aggregates, or driven by attribute filters are propagated between both views. UpSet also introduces several advanced visual encodings and interaction methods to overcome the problems of varying scales and to address scalability.

To get an idea of what UpSet is about, you can watch this 30-second video:

{% include video.html key="2014_infovis_upset_video_preview" %}


## Why UpSet?

**See this related commentary:** [Points of view: Sets and intersections](https://dx.doi.org/10.1038/nmeth.3033). Alexander Lex, Nils Gehlenborg. Nature Methods, vol. 11, no. 8, pp. 779, 2014.

Venn diagrams are a horrible way to visualize intersections of more than three or four sets. The figure below shows an example of a six-set venn diagram [published in Nature](https://www.nature.com/nature/journal/v488/n7410/full/nature11241.html) that shows the relationship between the banana's genome and the genome of five other species. 

![UpSet Screenshot]({{path}}/banana.png)

While this figure looks fun and [generated quite a bit of hype](http://blog.openhelix.eu/?p=20201) is is also a **terrible visualization**. Try to extract any information from it. It's really hard to trace which intersection involves which sets. It's not obvious which is the biggest intersection from the visualization - you have to read the labels one by one. This is, unfortunately, not an isolated example, but this particular Venn diagram triggered us to develop UpSet. 

UpSet has three guiding principles:

 * Use **perceptually efficient visual encodings**, i.e., make it easy to read the data accurately.
 * Make it possible to not just visualize intersections, but to **visualize combinations of intersections** (e.g., all the intersections involving two particular sets). 
 * **Visualize attributes about the intersections**. It is not just the magnitude of an intersection that is interesting, but we also want to know whether the data associated with intersection is different or similar.
 
You might ask, how does the banana venn diagram look in UpSet? Here you go: 
 ![UpSet Screenshot]({{path}}/upsetr-banana.png)

(This figure was created with the UpSet R version.) Granted, that's a little hard to read because the figure is rather small. But we can simply remove the small intersections, and we get a nice plot which shows us the main features of the data: 

 ![UpSet Screenshot]({{path}}upsetr-banana_clipped.png)


Notice how easy it is to see trends: the vast majority of genes is shared between all plants, the first three species (Oryza_sativa, Sorghum_bicolor, and Brachypodium_distachyon) seem to be highly related, while the sixth species (Phoenix dactylifera) is most different from the others. 



## UpSet concept

<img style="float: right; padding-left: 5px;" src="{{path}}/matrix.png">

UpSet plots the intersections of a set as a matrix, as shown in the figure on the right. Each column corresponds to a set, and each row corresponds to one segment in a Venn diagram, as indicated in the figure. Cells are either empty (light-gray), indicating that this set is not part of that intersection, or filled, showing that the set is participating in the intersection. The first row in the figure is completely empty - it corresponds to all the elements that are in none of the sets, the second row corresponds to the elements that are only in the set A, (not in B or C),  etc. 


<img style="float: left; width: 350px; padding-right: 5px;" src="{{path}}/upset_explained.svg">
This layout is great, because we can plot the size of the intersections as bar charts right next ot the matrix, as you can see in the simple example on the left. This figure shows a Simpsons dataset in UpSet and in a corresponding Venn diagram. We can also sort in many different ways. Here we sort by the degree, i.e., by the number of sets that contribute to an intersection, but we can also dynamically sort by intersection size and other attributes. 

### Aggregation

<img style="float: right; padding-left: 5px;" src="{{path}}/matrix_aggregation.png">
In many cases, analysts are interested in understanding more complex set relationships than just individual intersections. UpSet addresses this by making use of aggregations. Aggregations summarize multiple intersection according to a specific pattern. The figure on the right shows an aggregation by sets. Note the extra row labeled "A" - it summarizes all of the intersections where A participates, as shown in the corresponding Venn diagram. These aggregations can show data just the same way as individual intersections can, but they can be collapsed to show only the aggregate, as is the case for B and C in the figure. 

<img style="float: left; width: 300px; padding-right: 5px;" src="{{path}}/aggregate.png">
UpSet supports various types of aggregation. The figure on the left, for example, aggregates the Simpsons dataset by degree, but aggregation by sets, pairwise aggregation, and nested aggregation is also possible. 


### Queries

A concept closely related to aggregation is querying: UpSet allows users to define a group of intersections that **must**, **may**, or **must not** include a specific set. The query in the following picture defines a subset of Simpsons characters that are either exclusively male or that have blue hair and aren't male. The first part of the query (first row) is indicated by two empty circles in the evil and blue hair cells. This part is combined as an "or" with the second part, that is set to "must" for blue hair, "may" for evil and "must not" for male. 

![Query Screenshot]({{path}}/query.png)

UpSet can also query based on attributes. For example, you could define a query that only includes all Simpsons characters that are older than 18 years. 



### Visualizing Attributes


UpSet visualizes numerical attributes of the intersections and aggregates as boxplots in line with the matrix rows (see image below). Additional attributes can be visualized for selections in the Element View, for example, in scatterplots or histograms. The figure below shows two queries, a violet and a green one. The green query is active (see the green overlays on the bars, the green table header and the green dots in the scatterplot). The violet query is evident in the scatterplot and is indicated with triangles on the bars. 




![UpSet Screenshot]({{path}}/upset_overview.png)

The elements of the active selection are shown in a scrollable table.

### More Information

For more details on the concept please refer to the [paper on UpSet]({{site.baseurl}}/publications/2014_infovis_upset/) or watch this video introducing the user interface: 

{% include video.html key="2014_infovis_upset_video" %}


In summary, if you want to visualize intersections of two or three sets - use a Venn diagram, everyone knows them. 
**For anything above three (and below ~40) sets - use UpSet!**


## UpSetR - Creating UpSet plots in R

Many scientists use R as part of their analysis workflow. To allow those analysts to easily produce high-resolution figures of set intersections within their workflow that can be used in publications, we have developed an R version of UpSet. 

![UpSet Screenshot]({{path}}/upsetr.png)

UpSetR has many of the features of our interactive UpSet plots, specifically it comes with various ways to sort and filter intersections and can plot attributes about the elements in the various sets. The layout is slightly adapted - intersections are plotted horizontally instead of vertically, which is beneficial for the typical aspect ratios found in papers. UpSetR does not include the aggregation features of UpSet, does not provide summary statistics about the intersections in line with the set cardinality, and does not provide access to the individual items. 

To learn more about UpSetR visit the [source code repository](https://github.com/hms-dbmi/UpSetR) which includes documentation on usage, or check out the released versions on [CRAN](https://cran.r-project.org/web/packages/UpSetR/), or try the [UpSetR shiny app](https://upsetr.shinyapps.io/UpSetR-shiny/). 

## pyUpSet - Creating UpSet plots in Python

pyUpSet has a similar use case to UpSetR but is developed for Python. While UpSetR is directly influenced by Caleydo team members, pyUpSet is developed independently, yet we appreciate the port. pyUpSet is [available on github](https://github.com/ImSoErgodic/py-upset). 

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


## Contact

If you have any questions, please [e-mail us](mailto:alex@sci.utah.edu;nils@hms.harvard.edu). If you found a bug, you can directly report it at the [GitHub project site](https://github.com/vcg/upset).

## Acknowledgements
We wish to thank our collaborators, Anne Mai Wassermann, Soohyun Lee, Michele Coscia and Frank Neffke for their time and expertise. We also thank Bilal Alsallakh, Silvia Miksch and the whole Radial Sets team for providing feedback and datasets.

Explore other set visualization techniques at [http://setviz.net/](http://setviz.net/)

UpSet is supported in part by the Austrian Science Fund (J 3437-N15), the Air Force Research Laboratory and DARPA grant FA8750-12-C-0300 and the United States NIH/National Human Genome Research Institute (K99 HG007583).

UpSet uses the D3 library for visualization. The music in the preview video is by Roulet, "I Can Make This", licensed under creative commons.
