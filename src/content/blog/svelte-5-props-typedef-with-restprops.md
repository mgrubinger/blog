---
short: How to combine restProps with a typed Props object
publishedDate: 2024-12-12T16:06:36Z
updatedDate: 2024-12-12T16:07:21Z
date: 2024-12-12T16:06:36.000Z
title: Svelte 5 Props @typedef with restProps
slug: svelte-5-props-typedef-with-restprops
category: blog
tags:
  - svelte
  - jsdoc
---


```js
  /**
   * @typedef {Object} Props
   * @property {string} name
   */

  /** @type {Props & Record<string, any>} */
  let { name, ...restProps } = $props();
```

Most of my Svelte 5 components are typed with a `@typdef` JSDoc declaration. This seems to be the easiest way to allow restProps (i.e. "everything else").

Do you have a better solution? Let me know :)
