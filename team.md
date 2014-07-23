---
layout: team
title: Team
weight: 2
tag: team
permalink: /team/
---

# Core Team

{% for person in site.persons %}
{% if person.role == "core") %}
<img alt="{{ person.first_name }} {{ person.last_name }}" class="person-image-small" src="{{ person.image }}">[{{ person.first_name }} {{ person.last_name }}]({{ person.website }}), {% for institution in site.institutions %}
{% if person.institution == institution.key %}
<a href="{{ institution.website }}">{{ institution.name }}</a>{% endif %}
{% endfor %}
{% endif %}
{% endfor %}

# Advisors

{% for person in site.persons %}
{% if person.role == "advisor") %}
<img alt="{{ person.first_name }} {{ person.last_name }}" class="person-image-small" src="{{ person.image }}">[{{ person.first_name }} {{ person.last_name }}]({{ person.website }}), {% for institution in site.institutions %}
{% if person.institution == institution.key %}
<a href="{{ institution.website }}">{{ institution.name }}</a>{% endif %}
{% endfor %}
{% endif %}
{% endfor %}


# Contributor

{% for person in site.persons %}
{% if person.role == "contributor") %}
<img alt="{{ person.first_name }} {{ person.last_name }}" class="person-image-small" src="{{ person.image }}">[{{ person.first_name }} {{ person.last_name }}]({{ person.website }}), {% for institution in site.institutions %}
{% if person.institution == institution.key %}
<a href="{{ institution.website }}">{{ institution.name }}</a>{% endif %}
{% endfor %}
{% endif %}
{% endfor %}

# Collaborators

{% for person in site.persons %}
{% if person.role == "collaborator") %}
<img alt="{{ person.first_name }} {{ person.last_name }}" class="person-image-small" src="{{ person.image }}">[{{ person.first_name }} {{ person.last_name }}]({{ person.website }}), {% for institution in site.institutions %}
{% if person.institution == institution.key %}
<a href="{{ institution.website }}">{{ institution.name }}</a>{% endif %}
{% endfor %}
{% endif %}
{% endfor %}

# Alumni

{% for person in site.persons %}
{% if person.role == "alumni") %}
<img alt="{{ person.first_name }} {{ person.last_name }}" class="person-image-small" src="{{ person.image }}">[{{ person.first_name }} {{ person.last_name }}]({{ person.website }}), {% for institution in site.institutions %}
{% if person.institution == institution.key %}
<a href="{{ institution.website }}">{{ institution.name }}</a>{% endif %}
{% endfor %}
{% endif %}
{% endfor %}