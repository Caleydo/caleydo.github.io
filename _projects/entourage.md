---
layout: project
title: EnTourage
key: entourage
permalink: /projects/entourage/
status: ongoing
standfirst: Visualizing Relationships between Biological Pathways using Contextual Subsets
website: http://entourage.caleydo.org
publications:
 - 2013-infovis-entourage
collaborators:
 - streit 
 - lex
 - partl
 - gratzl
---

Entourage is a visualization technique to efficiently perform multi-pathway analysis. It can help researchers to understand biological processes within cells. All the biochemical reactions that make everything in our bodies work interact in a highly complex network of biochemical reactions. Biologists are trying to capture this network and pharmacologists are interested in how we can influence this network, to, for example, stop a process from going wrong. In cancer, for example, a mutated gene might stop a cell from dying as "planned", leading to uncontrolled growth and thus to a tumor. A pharmacologists now wants to understand if a drug can stop that from happening. To get an idea whether this might work early on, he or she might use pathways. Pathways are subsets of the large network that only contain the parts that are really relevant for, e.g., a disease. Excluding the majority of the network is important so that we can understand what the important components are and that we can focus on them. However, sometimes its critical to see all the relationships, even those that are not included in the pathway. One of those situations is when you would like to check for side-effects of a drug, to see if, for example, a cancer drug you are working on has effects on the skin, e.g. producing rashes. Another question you might ask is: given a drug that I know targets a specific gene and that is used in one disease, can it be used in another disease that involves the same gene?

Entourage helps to find answers to this question by allowing to analyze multiple pathways at the same time. As display space is limited, it only shows one pathway that is currently in focus of the analysis (focus pathway) in full detail, while other pathways show contextually relevant information (context pathways). What is contextually relevant is determined by selecting a focus node. All context pathways that share this node adapt their displayed content to show only the surrounding of this node in the form of paths. Entourage also indicates all shared nodes between pathways by using the non-obstrusive, yet effective stubs of visual links, which can be expanded to full links that connect the shared nodes on demand.

Additionally, Entourage can be used for detailed experimental data analysis in the context of multiple pathways. It makes use of an extended version of the enRoute visualization technique, which allows to explore experimental data associated with nodes along a selected path in detail. In contrast to enRoute, Entourage offers the possibility to perform this detailed analysis even across multiple pathways by allowing to select a path that uses shared nodes as portals to other pathways and therefore to jump from one pathway to another.

