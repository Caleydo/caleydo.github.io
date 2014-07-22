---
layout: downloads
title: Downloads
tag: downloads
permalink: /downloads/
---

# Current Stable Release

[{{ site.releases.last.version }}]({{ site.releases.last.url }})

# Older Releases

{% for release in site.releases %}
{% if release != site.releases.last %}
[{{ release.version }}]({{ release.url }})
{% endif %}
{% endfor %}