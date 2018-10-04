---
layout: publication
title: "Domino: Extracting, Comparing, and Manipulating Subsets across Multiple Tabular Datasets "
key: 2014_infovis_domino
type: paper

shortname: Domino
image: 2014_infovis_domino.png

# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2014_infovis_domino_teaser.png


authors:
- gratzl
- gehlenborg
- lex
- pfister
- streit

journal-short: TVCG (InfoVis '14)
year: 2014

bibentry: article
bib:
  journal: IEEE Transactions on Visualization and Computer Graphics (InfoVis '14)
  doi: 10.1109/TVCG.2014.2346260
  volume: 20
  number: 12
  pages: 2023--2032

award: IEEE InfoVis 2014 Honorable Mention Award

# use publisher only if no doi is available
publisher: 


external-project: https://caleydo.org/tools/domino/

video: 2014_infovis_domino_video
preview-video: 2014_infovis_domino_video_preview


pdf: 2014_infovis_domino.pdf
supplement:
supplements:
 - name: Music Dataset project (CAL)
   link: 2014_infovis_domino_number_ones.cal
 - name: Music Dataset Source Files + references (ZIP)
   link: 2014_infovis_domino_number_ones.zip
 - name: The Cancer Genome Atlas GBM project (CAL)
   link: 2014_infovis_domino_gbm_cancer.cal
 - name: Samuel Gratzl's Talk at InfoVis'14 (HTML)
   abslink: https://sgratzl.github.io/domino_vis2014/

abstract: "
<p>Answering questions about complex issues often requires analysts to take into account information contained in multiple interconnected datasets. A common strategy in analyzing and visualizing large and heterogeneous data is dividing it into meaningful subsets. Interesting subsets can then be selected and the associated data and the relationships between the subsets visualized. However, neither the extraction and manipulation nor the comparison of subsets is well supported by state-of-the-art techniques. </p>
<p>
In this paper we present Domino, a novel multiform visualization technique for effectively representing subsets and the relationships between them. By providing comprehensive tools to arrange, combine, and extract subsets, Domino allows users to create both common visualization techniques and advanced visualizations tailored to specific use cases. In addition to the novel technique, we present an implementation that enables analysts to manage the wide range of options that our approach offers. Innovative interactive features such as placeholders and live previews support rapid creation of complex analysis setups. We introduce the technique and the implementation using a simple example and demonstrate scalability and effectiveness in a use case from the field of cancer genomics.</p>"

---

# Acknowledgements

This work was supported in part by the Austrian Research Promotion Agency (840232), the Austrian Science Fund (J 3437-N15), the Air Force Research Laboratory and DARPA grant FA8750-12-C-0300, and the United States NIH/National Human Genome Research Institute (K99 HG007583).
