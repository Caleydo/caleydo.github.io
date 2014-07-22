---
layout: publications
title: Publications
tag: publications
permalink: /publications/
---

# Peer-Reviewed Journal and Conference Papers

{% for publication in site.publications %}
<img alt="{{ publication.shortname }} screenshot" class="paper-image-small" src="{{ publication.image }}">
{{ publication.authors }} <br />
[{{ publication.title }}]({{ publication.url }})
{{ publication.journal }}
{% endfor %}

# Commentaries, Editorials, Book Chapters & Published Abstracts

# Theses