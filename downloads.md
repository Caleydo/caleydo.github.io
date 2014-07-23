---
layout: downloads
title: Downloads
tag: downloads
permalink: /downloads/
softwares:
-   name: Caleydo
    description: (includes EnTourage, enRoute, StratomeX, LineUp) 
    latest: 3.1.3
-   name: LineUp
    description: (standalone version)
    latest: 3.1.1
-   name: Furby
    description: (standalone version)
    latest: 3.1.3beta1

---

Caleydo runs on **Windows**, **Mac OS X**, and **Linux**. We regularly test on Windows 7, Ubuntu/Kubuntu of the latest versions and Mac OS X.
Caleydo requires Java 7. Further installation details can be found when following the link.

# Current Stable Release

{% for sw in page.softwares %}
{% for x in site.releases %}
{% if x.software == sw.name %}
{% if x.version == sw.latest %}
[{{ x.software }} {{ x.version }}]({{ x.url }}) {{sw.description}}
{% endif %}    
{% endif %}
{% endfor %}
{% endfor %}



        

# Older Releases

{% for sw in page.softwares %}
{% for x in site.releases %}
{% if x.software == sw.name %}
{% if x.version != sw.latest %}
[{{ x.software }} {{ x.version }}]({{ x.url }}) {{sw.description}}
{% endif %}    
{% endif %}
{% endfor %}
{% endfor %}