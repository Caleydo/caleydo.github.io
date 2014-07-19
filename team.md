---
layout: page
title: Team
weight: 5
permalink: /team/
---

### Team Members

{% for person in site.persons %}
[{{ person.title }}]({{ person.url }})
{% endfor %}