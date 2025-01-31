---
short: How to export/import JSDoc @typedef definitions in Svelte
publishedDate: 2024-02-09T12:11:20Z
updatedDate: 2024-02-09T12:13:57Z
date: 2024-02-09T12:11:20.000Z
title: Export JSDoc Type from Svelte Components
slug: export-jsdoc-type-from-svelte-components
category: blog
description: "The component which **defines the type** needs to do so in a
  `<script context=\"module\">` block (see [Svelte
  docs](https://svelte.dev/docs/svelte-components#script-context-module) on
  context=\"module\")\r"
tags:
  - svelte
  - jsdoc
---


The component which **defines the type** needs to do so in a `<script context="module">` block (see [Svelte docs](https://svelte.dev/docs/svelte-components#script-context-module) on context="module")

```js
// ReusableComponent.svelte
<script context="module">
/**
 * An option object for <Select>
 * @typedef {Object} SelectOption
 * @property {string} value the value of this option
 * @property {string} label the visible label to render
 */
</script>

// ... rest of the component
```



then, in the **importing component** you can refer to the type by importing it from the module:
```js
// MyComponent.svelte

<script>
import ReusableComponent from './ReusableComponent.svelte`

/** @type {import('./ReusableComponent.svelte').SelectOption[]} */
let optionsList = [
  {label: 'Option 1', value: 1},
  {label: 'Option 2', value: 2},
]
</script>
```
