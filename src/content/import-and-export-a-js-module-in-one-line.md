---
date: 2021-01-14T00:00:00.000Z
short: export { namedImport } from './path/to/module';
created_at: 2023-01-17T15:39:00Z
updated_at: 2023-01-17T15:42:45Z
title: Import and Export a JS Module in one line
slug: import-and-export-a-js-module-in-one-line
category: blog
description: "When you need to immediately export a javascript module again
  (useful for creating index files):\r"
tags:
  - TIL
---


When you need to immediately export a javascript module again (useful for creating index files):

```js
export { namedImport } from './path/to/module';
```