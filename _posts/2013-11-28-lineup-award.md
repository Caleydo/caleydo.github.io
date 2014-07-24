---
layout: post
title:  "LineUp receives award!"
date:   2013-11-28 20:00:00
categories: event
---

Our paper _LineUp: Visual Analysis of Multi-Attribute Rankings_ has won the best paper award at IEEE InfoVis. 
{% for project in site.projects %}
{% if project.key == "lineup") %}
[Learn more about LineUp here.]({{ site.baseurl }}{{ project.url }})
{% endif %}
{% endfor %}