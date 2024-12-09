---
short: Use CSS to conditional styles depending if JavaScript is enabled
created_at: 2024-01-02T11:48:30Z
updated_at: 2024-01-03T15:12:08Z
date: 2024-01-02T11:48:30.000Z
title: CSS media query to check for JavaScript support
slug: css-media-query-to-check-for-javascript-support
category: blog
description: "You can now use CSS to check if JavaScript is supported using the
  new `Scripting` media query.\r"
tags:
  - CSS
---


You can now use CSS to check if JavaScript is supported using the new `Scripting` media query.

```css
@media (scripting: none) {
  .show-for-noscript-users {
    display: block;
  }
}
```

This example media query would show elements with the class `.show-for-noscript-users` if JavaScript is **disabled** in the users browser. 

```css
@media (scripting: enabled) {
  .show-for-script-users {
    display: block;
  }
}
```

This example media query would show elements with the class `.show-for-script-users` if JavaScript is **enabled** in the users browser. 


## Possible Values 

Possible values are:

- `enabled` – JavaScript is **enabled**
- `none` – JavaScript is **not enabled**
-  `initial-only` – JavaScript is only enabled during the initial page load, not afterwards.

### Initial Only?

This one is weird. It means that JavaScript is active during page load, but not afterwards. When would that happen? I can't think of a case, but [Chrome Platform Status](https://chromestatus.com/feature/5075009105559552) mentions that this can **never happen in a browser environment**. [This issue](https://github.com/w3c/csswg-drafts/issues/8621) mentions _printing_ environments. My conclusion is: good to know it's there, probably never going to use it.

## Browser support

Support is pretty decent as of January 2023, with Samsung Internet being the only major browser to not support it.

What happens if the browser does not recognize the media query? It will skip the whole block (query), so keep that in mind when using it.

## Use cases

### Get rid of noscript elements in a flex/grid layout

Traditionally we would use a combination of `<noscript>` and `<style>` elements to achieve styling that only applies to noscript environments (JavaScript disabled). However, sometimes an additional `<noscript>` element can break flex or grid layouts. Using this media query, we can set the `display` property of the `<noscript>` element to `contents` to skip it as a direct flex/grid child.

[Demo on CodePen: Grid with a second row of items only for noscript environments](https://codepen.io/mgrubinger/full/dyrGYzL) (Visit this link with JavaScript disabled to see the second row of the grid)

### Progressive Enhancement

According to [Progressive Enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement) (PE) approach to building resilient websites, we can use this media query to style things in a certain way if JavaScript is turned off, but _enhance_ the styles with additional rules for when JavaScript it turned _on_ (or vice versa, depending on the use case).

> Keep in mind that there are plenty of situations where JavaScript is **on**, but does not execute, or has not finished executing yet!


### Futher reading

[Scripting Media Query on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scripting)

[Scripting at Can I Use](https://caniuse.com/mdn-css_at-rules_media_scripting)
