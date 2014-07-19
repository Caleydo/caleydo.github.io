---
layout: page
title: Projects
weight: 1
permalink: /projects/
---

Within Caleydo, we have several projects and objectives we want to achieve. On these pages we present those projects that together make up the Caleydo research project but also the software.

Not everything you can read about here is already in the stable branch and therefore publicly available. Some ideas might actually never reach that stage, others are more mature already.

For a list of funded research projects please look at our sponsors

### Current Projects

{% for project in site.projects %}
{% if project.status == "ongoing" %}
[{{ project.title }}]({{ project.url }})
{% endif %}
{% endfor %}

### Past Projects

{% for project in site.projects %}
{% if project.status == "completed" %}
[{{ project.title }}]({{ project.url }})
{% endif %}
{% endfor %} 
