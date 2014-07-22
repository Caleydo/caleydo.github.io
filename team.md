---
layout: page
title: Team
weight: 5
permalink: /team/
---

### Team Members

{% for person in site.persons %}
<img alt="{{ person.first_name }} {{ person.last_name }}" class="person-image-small" src="{{ person.image }}">
[{{ person.first_name }} {{ person.last_name }}]({{ person.url }}), {{ person.organization }}
{% endfor %}