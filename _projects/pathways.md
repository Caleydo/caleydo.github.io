---
layout: project
title: Pathway Visualization
name: Entourage & enRoute
key: pathways
permalink: /projects/pathways/
status: core
order: 2
standfirst: Visualizing large & heterogeneous experimental data with <b>enRoute</b> and pathway interdependencies with <b>Entourage</b>.
help: http://help.caleydo.org/3.1/index.html#!views/pathway/pathway.md

teaser: 
    lowres: 2013_infovis_entourage.png
    highres: entourage_hires.png

publications:
 - 2013_infovis_entourage
 - 2013_bmc_enroute
 - 2012_biovis_enroute
 
videos: 
 - 2013_infovis_entourage_video
 - 2012_biovis_enroute_video
     
team:
 - lex
 - partl
 - streit
 - gratzl
 - pfister
 - schmalstieg
 
collaborators:
 - wassermann 

---

Pathways are graphs that model diverse biological processes on a molecular level. They depict the interaction of genes, proteins and other entities on a semantic level, as a small subset out of the overall biological network. This subset is curated for their functional relevance and generic for an organism or a specific disease state. While this approach is necessary to deal with the complexity of the networks, there are many situations where a broader view on the network is desirable, for example when investigating side-effects of drugs. Furthermore, it is necessary to understand the peculiarites of individual patients, samples, or cohorts with respect to a pathway, as pathways can be modulated, for example, through a disease. The integrated pathway visualization techniques in Caleydo aim to address these problems. **Entourage** provides contextual information for a focus pathway by visualizing relevant subsets in other pathways. **enRoute** visualizes experimental data in pathways. 

### Entourage

Entourage is a visualization technique to efficiently perform multi-pathway analysis. Pathways exclude the majority of the network as a strategy to focus on the important components. However, sometimes its critical to see relationships that are not included in the pathway. One of those situations is when you would like to check for side-effects of a drug, to see if, for example, a cancer drug could have effects on the skin, such as producing rashes.


Entourage helps to find answers to this question by allowing to analyze multiple pathways at the same time. As display space is limited, it only shows one pathway that is currently in focus of the analysis (focus pathway) in full detail, while other pathways show contextually relevant information (context pathways). What is contextually relevant is determined by selecting a focus node. All context pathways that share this node adapt their displayed content to show only the surrounding of this node in the form of paths. Entourage also indicates all shared nodes between pathways by using the non-obstrusive, yet effective stubs of visual links, which can be expanded to full links that connect the shared nodes on demand. The following figure shows the Glioma pathway in full and the context of two other pathways. We can see that all three pathways share similar paths. 

![Pathway Visualizations Overview]({{site.baseurl}}/assets/images/projects/entourage_basic.png)

Entourage allows analysts to dynamically define their focus and automatically finds related pathways in the context of an analysis. 

### enRoute

Entourage is integrated with enRoute, the visualization technique for experimental data in pathways. Biological pathways represent an important source of information when investigating experimental data in the context of cellular processes. Visualizing large and heterogeneous amounts of experimental data on top of pathways is, however, challenging. Most commonly, average expression values are shown as colors on top of a node, which allows to compare only very few experimental values at the same time.

enRoute addresses this problem by enabling analysts to dynamically extract paths from pathways. For the extracted, linear paths enRoute shows rich visualizations for the experimental data. The following figure shows the selected path in the pathway, highlighted in orange, with the enRoute view on its right. The pathway nodes are color coded for copy number changes. The enRoute view shows copy number, mutation and expression data, as well as drug response data for 120 cell lines from two different tissues (lung and breast). 

![Pathway Visualizations Overview]({{site.baseurl}}/assets/images/projects/enroute_basic.png)

### Integration

enRoute and Entourage are integrated into one comprehensive visualization system and include interfaces to select and rank pathways as well as to choose datasets and groupings to map onto the pathways or to display in enRoute, as shown in the following figure. 

![Pathway Visualizations Overview]({{site.baseurl}}/assets/images/projects/pathway_overview.png)