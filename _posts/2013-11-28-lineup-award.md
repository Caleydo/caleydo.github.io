---
layout: post
title:  "Press article about LineUp"
date:   2014-05-14 20:00:00
categories: event
---

Our paper _LineUp: Visual Analysis of Multi-Attribute Rankings_ has won the best paper award at IEEE InfoVis. 
{% for project in site.projects %}
{% if project.key == "lineup") %}
[Learn more about LineUp here.]({{ project.url }})
{% endif %}
{% endfor %}