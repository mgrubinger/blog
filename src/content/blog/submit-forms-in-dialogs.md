---
short: using method=dialog
publishedDate: 2023-02-20T19:59:58Z
updatedDate: 2023-02-20T20:06:36Z
date: 2023-02-20T19:59:58.000Z
title: Submit forms in dialogs
slug: submit-forms-in-dialogs
category: blog
description: If you're using a `<form>` element inside a `<dialog>` element, you
  might want to consider setting its `method` attribute to `dialog`.
tags:
  - TIL
---


If you're using a `<form>` element inside a `<dialog>` element, you might want to consider setting its `method` attribute to `dialog`.

This will cause the dialog to close automatically on form submission and set the value of the submit button to `dialog.returnValue`. It will not actually submit the form though.

More details:
- https://webkit.org/blog/12209/introducing-the-dialog-element/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method

I learned about this from [Dominik Reitzner](https://reitzner.at/) at the [Svelte Vienna Meetup](https://austria.sveltesociety.dev/chapters).