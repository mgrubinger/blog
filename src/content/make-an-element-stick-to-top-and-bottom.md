---
date: 2020-08-12T08:00:00.000Z
published: true
short: Useful CSS to make an element stick to the top and bottom of a scroll
  container!
tags:
  - TIL
created_at: 2022-09-13T15:52:37Z
updated_at: 2023-01-09T20:32:43Z
title: Make an element stick to top and bottom!
slug: make-an-element-stick-to-top-and-bottom
category: blog
description: "It is possible to make an element stick to the top **and** bottom
  of a scroll container! You could say: \"Of course!\", but I guess I was just
  surprised it *actually* works.\r"
---


It is possible to make an element stick to the top **and** bottom of a scroll container! You could say: "Of course!", but I guess I was just surprised it *actually* works.

Here's the CSS:

```css
.i-am-sticky {
	position: sticky;
	top: 0; /* or any other value if you want some offset */
	bottom: 0; /* or any other value if you want some offset */
}
```

I find this especially useful for a *List/Detail* two-column layout where items in the right column shows details when item in the left column is selected (think Apple Mail etc). 

This way the selected item always stays visible to the user.

(Imagine trying to solve this using JS, urgh.)

### Demo:

Here's a quick demo:

https://codesandbox.io/embed/sticky-top-and-bottom-5s9ti