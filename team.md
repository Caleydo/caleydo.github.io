---
layout: page
title: Team
weight: 5
permalink: /team/
---

### Team Members

{% for person in site.persons %}
<img class="person-image-small" src="{{ person.image }}">
[{{ person.first_name }} {{ person.last_name }}]({{ person.url }}), {{ person.organization }}
<<<<<<< HEAD
=======
<img alt="{{ person.first_name }} {{ person.last_name }}" class="person-image" src="{{ person.image }}">
>>>>>>> dafb71c09b66f403a168184909129349fe967933
{% endfor %}