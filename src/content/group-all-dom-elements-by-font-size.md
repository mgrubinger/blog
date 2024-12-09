---
date: 2021-04-09T00:00:00.000Z
short: Debug the distribution of font-size of DOM elements on the page
created_at: 2023-01-17T15:47:19Z
updated_at: 2023-01-17T15:47:19Z
title: Group all DOM elements by font-size
slug: group-all-dom-elements-by-font-size
category: blog
description: "Group all elements on the current page by their font size:\r"
tags:
  - TIL
---


Group all elements on the current page by their font size:

```js
let elementsBySize = [];
[...$$('body *')].forEach(el => {
  let fontSize = window.getComputedStyle(el).fontSize;
  if(!elementsBySize[fontSize]) elementsBySize[fontSize] = [];
  elementsBySize[fontSize].push(el)
});
```

`elementsBySize` now contains an array with key: font size and value of an array containing all the elements with that font size.

*Note:* this only works in the chrome(ium) devtools, since it uses the $$ syntax. You can replace it with `document.querySelectorAll('*')`