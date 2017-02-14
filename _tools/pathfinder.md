---
layout: tool
title: Visualizing Paths
name: Pathfinder
key: pathfinder
permalink: /tools/pathfinder/
status: web
order: 2
standfirst: Interactive path visualization in large multivariate graphs.


teaser:
    lowres: papers/2016_eurovis_pathfinder.png
    highres: papers/2016_eurovis_pathfinder_teaser.png
publications:
 - 2016_eurovis_pathfinder

team:
- partl
- gratzl
- streit
- pfister
- schmalstieg
- lex

collaborators:
 - wassermann

videos:
 - 2016_eurovis_pathfinder_video

github:
 -
  url:  https://github.com/Caleydo/pathfinder/
  name: Pathfinder

web:
 -
  url: http://pathfinder.caleydoapp.org
  name: Pathfinder Web Version

---

The analysis of paths in graphs is highly relevant in many domains. Typically, path-related tasks are performed in node-link layouts. Unfortunately, graph layouts often do not scale to the size of many real world networks. Also, many networks are multivariate, i.e., contain rich attribute sets associated with the nodes and edges. These attributes are often critical in judging paths, but directly visualizing attributes in a graph layout exacerbates the scalability problem.

![Pathfinder Screenshot]({{site.baseurl}}/assets/images/papers/2016_eurovis_pathfinder_teaser.png)

With Pathfinder, we present visual analysis solutions dedicated to path-related tasks in large and highly multivariate graphs. We show that by focusing on paths, we can address the scalability problem of multivariate graph visualization, equipping analysts with a powerful tool to explore large graphs. Pathfinder is a technique that provides visual methods to query paths, while considering various constraints. The resulting set of paths is visualized in both a ranked list and as a node-link diagram. For the paths in the list, we display rich attribute data associated with nodes and edges, and the node-link diagram provides topological context. The paths can be ranked based on topological properties, such as path length or average node degree, and scores derived from attribute data.

Pathfinder is designed to scale to graphs with tens of thousands of nodes and edges by employing strategies such as incremental query results. You can [try Pathfinder](http://pathfinder.caleydoapp.org) with data from a coauthor network and biological pathways.
