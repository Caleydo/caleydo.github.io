---
layout: page
title: Team
weight: 5
permalink: /team/
---

### Team Members

{% for person in site.persons %}
[{{ person.first_name }} {{ person.last_name }}]({{ person.url }}), {{ person.organization }}
<img alt="{{ person.first_name }} {{ person.last_name }}" class="person-image" src="{{ person.image }}">
{% endfor %}