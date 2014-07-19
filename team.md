---
layout: page
title: Team
weight: 5
permalink: /team/
---

### Team Members

{% for person in site.person %}
[{{ person.title }}]({{ person.url }})
{% endfor %}