---
date: 2022-10-25T00:00:00.000Z
short: ... for dynamic content
publishedDate: 2023-01-17T15:50:07Z
updatedDate: 2023-01-17T15:51:18Z
title: <template> element
slug: template-element
category: blog
description: "The `<template>` element  is useful if you want to dynamically
  create markup based on a predefined “template” (great naming right there).\r"
tags:
  - TIL
---


The `<template>` element  is useful if you want to dynamically create markup based on a predefined “template” (great naming right there).

Example markup:

```html
<template>
	<div>
		<h3>any markup, really</h3>
		<!-- watch out for FOUT if you also load relevant styles -->
		<link rel="stylesheet" href="url-to-stylesheet.css">
	</div>
</template>

<div class="my-target"></div>
```

Example script

```js
// grab the template
const template = document.getElementById('my-template');
// clone the templates content
const clonedTemplate = template.content.firstElementChild.cloneNode(true);
// optionally modify the cloned tree here
// append to `.my-target`
document.targetSelector('.my-target').appendChild(clonedTemplate);
```

> 👉 The first child of <template> (the <div>) is not strictly necessary, but as the [MDN article on <template>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) states, certain events like click do not work if the templates content is cloned directly (template.content.cloneNode(true)) instead of firstElementChild.cloneNode(true).

See: [<template>: The Content Template element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
