---
short: How to handle HTML Forms with multiple submits
created_at: 2023-05-04T12:07:52Z
updated_at: 2023-05-08T15:44:35Z
date: 2023-05-04T12:07:52.000Z
title: Form with multiple submit buttons
slug: form-with-multiple-submit-buttons
category: blog
description: "## tldr;\r"
tags:
  - TIL
  - JavaScript
  - HTML
---


## tldr;

A form can have multiple `input[type=submit]` (or `<button type=submit>`) elements. You can specify different values, targets, methods or even different actions for these. 

In JavaScript, the information which submit-button was used to submit the form can be accessed in the [SubmitEvents `submitter`](https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent/submitter) property.

### Example: 

<iframe src="https://stackblitz.com/edit/web-platform-cbuerh?embed=1&file=index.html&hideDevTools=1&hideExplorer=1&view=preview" width="100%" height="400px"></iframe>

---

Recently, I've been exploring the html `<form>` element more, mainly because it's such a central building block for [SvelteKit](https://kit.svelte.dev/) apps. Or, more precisely: forms have been a major building block for web applications forever, but I feel that it's importance and role has been neglected in the last decade or so of JavaScript-heavy SPAs. Personally, I feel that I have a knowledge gap around such an important building block, and maybe I'm not alone.

The example above has two sections:
1. Form with two submit buttons with the same `name` attribute, but different values. By default, hitting one of the two submits will submit the form and change the URL of the example website, depending on the value of the clicked element. Kinda like a radio group, but for distinct actions a user can take.
2. The same form, but this time intercepting the forms `submit` event and updating text on the website via JavaScript – again, depending on which button was used.

There are more things you can specify on a submit element, like the `action` to submit to or the forms `method`. See this [MDN page on the input[type=submit]](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit#additional_attributes) element.




