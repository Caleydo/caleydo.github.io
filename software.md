---
layout: software
title: Software | JKU Visual Data Science Group
tag: software
permalink: /software/
softwares:
-  caleydo_3_1_5
-  lineup_3_1_1
-  furby_3_1_3beta1
-  domino_3_1_5

---

# Phovea Web Framework

The current focus of development is the Phovea web application framework. 

Phovea is made up of multiple plugins. You can find the Phovea plugin repositories at

[https://github.com/phovea/](https://github.com/phovea/) 

To get started with Phovea, please refer to the [Phovea Documentation](http://phovea.caleydo.org/)

# Caleydo Tools

Our team has built many apps based on Phovea. Demo versions of these prototypes are hosted at

[https://caleydoapp.org](https://caleydoapp.org)

Some other tools are also accessible via the [Tools page]({{site.baseurl}}/tools/) or via the [Publications page]({{site.baseurl}}/publications/). 

<br ><br >

# Discontinued: Caleydo Desktop Applications

Earlier work by the team produced a number of desktop applications. These are still available for download, but are not actively maintained. 

Caleydo Desktop runs on Windows, Mac OS, and Linux and is tested on Windows 7, Ubuntu/Kubuntu of the latest versions and Mac OS X. 

Caleydo Desktop requires Java 7. Further installation details can be found when following the links below.

## Last Caleydo Desktop Release

<ul class="release-icon-list">
{% for sw in page.softwares %}
{% for release in site.releases %}
{% if release.key == sw %}
<li><a href="{{ site.baseurl }}{{ release.url }}">{{ release.software }} {{ release.version }}</a> ({{release.description}})</li>
{% endif %}    
{% endfor %}
{% endfor %}
</ul>

## Older Releases

<ul class="release-icon-list">
{% for release in site.releases %}
{% if page.softwares contains release.key  %}
{% else %}
<li><a href="{{ site.baseurl }}{{ release.url }}">{{ release.software }} {{ release.version }}</a> ({{release.description}})</li>
{% endif %}
{% endfor %}
</ul>


# License and Source Code
Caledyo and all Caleydo projects are open source software under the [new BSD license](https://github.com/Caleydo/caleydo/blob/develop/LICENSE). You may download and redistribute the software provided you acknowledge the copyright holders. They come without any warranty; without even the implied warranty of merchantability or fitness for a particular purpose.

The Caleydo source code is available on GitHub:  [https://github.com/Caleydo/](https://github.com/Caleydo/)

Caleydo uses a variety of libraries and resources which we [gratefully acknowledge here]({{site.baseurl}}/acknowledgements/).

