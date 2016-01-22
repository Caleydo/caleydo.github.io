Documentation pages are created as markdown file using the docu_code layout (_layouts/docu_code.html). This file also contains the Javascript code to preview and render code. The rendering of individual files is handled via a jekyll include, which is called like that: 

```
{% include code.html file="tutorial_visualize_matrix.html" %}
```

The include file is at `_includes/code.html`