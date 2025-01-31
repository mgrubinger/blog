---
date: 2021-01-20T00:00:00.000Z
short: For testing in non-secure environments
publishedDate: 2023-01-17T15:44:14Z
updatedDate: 2023-01-17T15:44:24Z
title: Mock navigator.share
slug: mock-navigatorshare
category: blog
description:
tags:
  - TIL
---


Sometimes you can't test the native **[[Navigator.share()](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)** API, e.g. when the site you're developing is not served via https.

I used this tiny logger to preview what *would* have been passed to `navigator.share()`

```js
!navigator.share && navigator.share = (...args) => {
  return new Promise(() => {
    console.log(...args)
  , () => {
     console.log("error");
  }})
}
```
