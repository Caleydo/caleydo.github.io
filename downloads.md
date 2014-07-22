---
layout: downloads
title: Downloads
tag: downloads
permalink: /downloads/
---

{{ site.releases.last.content }}

# Older releases

{% for release in site.releases %}
{% if release != site.releases.last %}
[{{ release.version }}]({{ release.url }})
{% endif %}
{% endfor %}