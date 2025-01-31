---
date: 2021-01-12T00:00:00.000Z
short: using PerformanceNavigationTiming.type
publishedDate: 2023-01-17T15:34:45Z
updatedDate: 2023-01-17T15:36:28Z
title: Was the page navigated to using back or forward button?
slug: was-the-page-navigated-to-using-back-or-forward-button
category: blog
description: "```js\r"
tags:
  - TIL
---


```js
window.performance.getEntriesByType("navigation")[0].type === "back_forward";
```

This is how to detect if a page was loaded because the user navigated via back or forward buttons.

Possible values:
 - `back_forward` if the navigation happened because of a back or forward navigation
- `navigate` if the navigation happened because of a regular navigation event (like clicking a link).
- `reload` after reloading the page
- `prerender` if the navigation has happened during a prerender hint

See [PerformanceNavigationTiming.type on MDN](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/type)