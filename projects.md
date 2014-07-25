---
layout: projects
title: Projects | Caleydo
weight: 1
permalink: /projects/
---

Within Caleydo, we have several projects and objectives we want to achieve. On these pages we present those components that together make up the Caleydo research project but also the software. Not everything you can read about here is already in the stable branch and therefore publicly available. Some ideas might actually never reach that stage, others are more mature already. For a list of funded research projects please look at our sponsors.

# Projects

<div class="cards">

{% for project in site.projects %}
{% if project.status == "ongoing" %}

  <div class="card">
    <div class="ribbon-wrapper"><div class="ribbon">NEW</div></div>
    <div class="card-image">
    <a href="{{ site.baseurl }}{{ project.url }}">
    {% if project.teaser.lowres %}
        <img src="../assets/images/projects/{{ project.teaser.lowres }}" alt="">
    {% else %}
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains.png" alt="">
    {% endif %}
    </a>
    </div>
    <div class="card-header">
      <a href="{{ site.baseurl }}{{ project.url }}">{{ project.title }}</a>
    </div>
    <div class="card-copy">
      <p>{{ project.standfirst }}</p>
    </div>
  </div>

{% endif %}
{% endfor %}

</div>
