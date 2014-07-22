---
layout: downloads
title: Downloads
tag: downloads
permalink: /downloads/
---

# Releases
 
{% for release in site.releases %}
[{{ release.version }}]({{ release.url }})
{% endfor %}
 
# Datasets

{% for dataset in site.datasets %}
[{{ dataset.name }}]({{ dataset.url }})
{% endfor %}

# Videos

{% for video in site.videos %}
[{{ video.name }}]({{ video.url }})
{% endfor %}