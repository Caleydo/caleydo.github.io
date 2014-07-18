---
layout: page
title: Projects
weight: 1
permalink: /projects/
---

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
