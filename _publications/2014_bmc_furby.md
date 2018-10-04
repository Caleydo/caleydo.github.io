---
layout: publication
title: "Furby: Fuzzy Force-Directed Bicluster Visualization"
key: 2014_bmc_furby
permalink: /publications/2014_bmc_furby/
type: paper
redirect_from: /projects/furby.html


shortname: furby
image: 2014_bmc_furby.png

authors:
- streit
- gratzl
- Michael Gillhofer
- Andreas Mayr
- Andreas Mitterecker
- Sepp Hochreiter

# Include a shortened name for the journal or conference/proceedings
journal-short: BMC
year: 2014

# Create BibTeX info, using one of the entry choices
# Articles have a "journal", and inproceedings have a "booktitle"
# Preprints are articles with the location of preprint mentioned in "journal"
# You can remove fields you don't need, or else leave them blank
# Try to include a DOI, or use the publisher URL below
# Specify new BibTeX fields by adding a new key and value inside "bib:"
bibentry: article
bib:
  journal: BMC Bioinformatics, 15(Suppl 6), p. S4
  booktitle: 
  editor: 
  doi: 10.1186/1471-2105-15-S6-S4
  publisher:
  address: 
  url: 
  volume: 15
  number: Suppl 6
  pages: S4
  month:

award:
note: 

project: furby

video: 2014_bmc_furby_video
preview-video:


pdf: 2014_bmc_furby.pdf
supplement:
supplements:
 - name: Multi Tissue Dataset (CAL)
   link: 2014_bmc_furby_multi_tissue_fabia20.cal
 - name: Multi Tissue Dataset (ZIP)
   link: 2014_bmc_furby_multi_tissue_fabia20.zip
 - name: Fabia R package export script (R-Script)
   link: 2014_bmc_furby_export_fabia.R
 - name: BiClust R package export script (R-Script)
   link: 2014_bmc_furby_export_biclust.R
bibtex: 2014_bmc_furby.bib

abstract: "
<p><b>Background:</b> Cluster analysis is widely used to discover patterns in multi-dimensional data. Clustered heatmaps are the standard technique for visualizing one-way and two-way clustering results. In clustered heatmaps, rows and/or columns are reordered, resulting in a representation that shows the clusters as contiguous blocks. However, for biclustering results, where clusters can overlap, it is not possible to reorder the matrix in this way without duplicating rows and/or columns.</p>
 <p><b>Results:</b> We present Furby, an interactive visualization technique for analyzing biclustering results. Our contribution is twofold. First, the technique provides an overview of a biclustering result, showing the actual data that forms the individual clusters together with the information which rows and columns they share. Second, for fuzzy clustering results, the proposed technique additionally enables analysts to interactively set the thresholds that transform the fuzzy (soft) clustering into hard clusters that can then be investigated using heatmaps or bar charts. Changes in the membership value thresholds are immediately reflected in the visualization. We demonstrate the value of Furby by loading biclustering results applied to a multi-tissue dataset into the visualization.</p>
<p><b>Conclusions:</b> The proposed tool allows analysts to assess the overall quality of a biclustering result. Based on this high-level overview, analysts can then interactively explore the individual biclusters in detail. This novel way of handling fuzzy clustering results also supports analysts in finding the optimal thresholds that lead to the best clusters.</p>"
 
---

Datasets
==========

The following projects contain public demo data, which can be used to test Furby. But everyone is welcome to load his/her own data, via the `Load BiCluster Results` tab within the Caleydo Startup-Wizard.

* <i class="fa fa-download"></i>&nbsp;[Caleydo-Project (CAL)]({{site.paper_content_url}}/2014_bmc_furby_multi_tissue_fabia20.cal) containing Microarray data from Broad Institute "Cancer Program Data Sets" which was produced by [Su et al. 2002](https://www.broadinstitute.org/cgi-bin/cancer/datasets.cgi). It consists of 102 samples and 5565 genes as was clustered using the FABIA algorithm.
* <i class="fa fa-download"></i>&nbsp;[Zip package (ZIP)]({{site.paper_content_url}}/2014_bmc_furby_multi_tissue_fabia20.zip) containing the exported CSV-files using to create the previous Caleydo-Project

Utilities
=========
We provide two helper R-Scripts, which simplify exporting R bicluster results in the correct format.

* <i class="fa fa-download"></i>&nbsp;[R-Script]({{site.paper_content_url}}/2014_bmc_furby_export_fabia.R) for exporting FABIA results, generated via the [fabia](https://www.bioconductor.org/packages/2.12/bioc/html/fabia.html) bioconductor package.
* <i class="fa fa-download"></i>&nbsp;[R-Script]({{site.paper_content_url}}/2014_bmc_furby_export_biclust.R) for exporting result from the [biclust](https://cran.r-project.org/web/packages/biclust/index.html) CRAN package.