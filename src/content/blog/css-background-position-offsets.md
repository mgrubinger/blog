---
short: Improved positioning of CSS background images
publishedDate: 2023-03-14T07:55:42Z
updatedDate: 2023-03-14T08:05:10Z
date: 2023-03-14T07:55:42.000Z
title: CSS Background Position Offsets
slug: css-background-position-offsets
category: blog
description: "You can set an offset for CSS `background-position` to specify the
  position of a background image from right and/or bottom boundaries, like
  this:\r"
tags:
  - TIL
  - CSS
---


You can set an offset for CSS `background-position` to specify the position of a background image from right and/or bottom boundaries, like this:

```css
.my-element {
  background-image: url('path/to/image.png');
  background-position: right 10px bottom 5px;
```

This will place the image in the bottom-right corner, but move it 10px to the left and 5px towards the top. Kinda like setting a `transform: translateX(-10px, -5px)` (which you can't for background images).

So far I've only ever used `right bottom` or a percentage/pixel based position for background images, but background offset comes in handy when making sure a flush right or bottom background-icon is positioned exactly where you need it.

Also see [css-background-offsets on caniuse](https://caniuse.com/css-background-offsets)
