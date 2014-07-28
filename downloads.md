---
layout: downloads
title: Downloads | Caleydo
tag: downloads
permalink: /downloads/
softwares:
-  caleydo_3_1_3
-  lineup_3_1_1
-  furby_3_1_3beta1

---

Caleydo runs on **Windows**, **Mac OS X**, and **Linux**. We regularly test on Windows 7, Ubuntu/Kubuntu of the latest versions and Mac OS X.
Caleydo requires Java 7. Further installation details can be found when following the link.

# Current Stable Release

<ul class="release-icon-list">
{% for sw in page.softwares %}
{% for release in site.releases %}
{% if release.key == sw %}
<li><a href="{{ site.baseurl }}{{ release.url }}">{{ release.software }} {{ release.version }}</a> ({{release.description}})</li>
{% endif %}    
{% endfor %}
{% endfor %}
</ul>

# Older Releases

<ul class="release-icon-list">
{% for release in site.releases %}
{% if page.softwares contains release.key  %}
{% else %}
<li><a href="{{ site.baseurl }}{{ release.url }}">{{ release.software }} {{ release.version }}</a> ({{release.description}})</li>
{% endif %}
{% endfor %}
</ul>


# License and Source Code
Caledyo and the other listed projects are open source software under the new BSD license. You may download and redistribute the software. They come without any warranty; without even the implied warranty of merchantability or fitness for a particular purpose.

Caleydo source code:  [https://github.com/Caleydo/caleydo](https://github.com/Caleydo/caleydo)