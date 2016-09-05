---
layout: documentation
title:  Integrate Caleydo's Matrix Visualization with Angular
permalink: /documentation/tutorial/angular/
nomenu: true
description: Learn how to integrate Caleydo into an Angular application.
---

> **WARNING**: This tutorial is still in beta. The following doesn't work yet:
>
> - Single cell selections are not linked due to ambiguous selection. (See [#141](https://github.com/Caleydo/caleydo_web_container/issues/141#issuecomment-187878355))
> - Caleydo's single cell selection API `.selectProduct()` does not work as intended. (See [#141](https://github.com/Caleydo/caleydo_web_container/issues/141#issuecomment-187409616))
> - Cells selected in the heat-map visualizations can't be completely deselected by the user.
> - Lodash shouldn't be needed. (See issue [#144](https://github.com/Caleydo/caleydo_web_container/issues/144))

This example demonstrates how to integrate the matrix-based heat-map visualization into an Angular application. This tutorial illustrates the integration through an Angular-based table representation of the matrix' data and Caleydo's heat-map visualization.

### The final app and usage

For the impatient reader, below is the final app. You can click on a cell in the table to highlight and edit it. Another click will deselect the cell again. A click on a column or row header will select the whole column or row respectively. Another click will deselect it. The heatmap currently supports single selections via a single mouse click. Clicking on a second cell will deselect the the previously selected cell. Holding _SHIFT_ allows multi-cell selections.
<iframe
    width='100%'
    height='450'
    src='//jsfiddle.net/flek/0t89d0n4/embedded/result/'
    allowfullscreen='allowfullscreen'
    frameborder='0'>
</iframe>

This tutorial assumes that you have decent knowledge about JavaScript and understand at least fundamentals of AngularJS.

The basic idea of integrating any library into Angular is to make Angular aware of that library and to _bind_ model changes to the third-party library. For this toy example we will create a custom directive for drawing a heat-map of an Angular model.

### The model

The model itself is nothing else but nested Array representing a matrix.

**Model:**

```javascript
{% include_relative data.js %}
```

### Some HTML

First we need to set up some HTML to display the matrix data in a table.

**HTML:**

```html
{% include_relative main.html %}
```

### JavaScript

In order to make Angular's table visualization a bit more interesting, a StampIt-based matrix and matrix selection factory functions are provided. If you're not comfortable with StampIt don't panic, it's basically just a helper library for creating custom objects.

**Stamps:**

```javascript
{% include_relative stamps.js %}
```

Using Angular's build-in two-way data binding we can make the table editable and automatically updateable by binding an _input_ field to the appropriate matrix cell.

Caleydo's heat-map is linked to the Angular app via custom events emitted by Angular's matrix and matrix selection, and Caleydo's matrix implementation.

Finally we have to make our JavaScript code available to Angular by registering all components; e.g. third-party libraries, services, factories, controllers and directives.

**Set-Up JavaScript:**

```javascript
{% include_relative setup.js %}
```

Et voilà, we're done:

<iframe
    width='100%'
    height='500'
    src='//jsfiddle.net/flek/0t89d0n4/embedded/result,js,css,html/'
    allowfullscreen='allowfullscreen'
    frameborder='0'>
</iframe>

### tl/dr;

Surely we also need some styling to make our example look pleasantly:

**SCSS:**

```scss
{% include_relative style.scss %}
```