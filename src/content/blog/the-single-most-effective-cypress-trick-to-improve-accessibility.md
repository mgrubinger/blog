---
short: Find and fix accessibility issues while writing Cypress tests.
publishedDate: 2024-08-19T15:05:41Z
updatedDate: 2024-09-01T15:57:10Z
date: 2024-08-19T15:05:41.000Z
title: The single most effective Cypress trick to improve accessibility
slug: the-single-most-effective-cypress-trick-to-improve-accessibility
category: blog
description: "_(Sorry for the stupid clickbaity title 😃)_\r"
tags:
  - testing
---


_(Sorry for the stupid clickbaity title 😃)_

## tl; dr

By selecting elements based on their accessible role and name using [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/), we effortlessly found accessibility issues while authoring Cypress tests.

---

[Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/) is a plugin for [Cypress](https://www.cypress.io/) that adds a bunch of additional commands to Cypress. The one I find most effective is **[`findByRole`](https://testing-library.com/docs/queries/byrole)**.

By using `findByRole()` as much as possible (versus selecting elements based on `class`, `id` or `data-test-id`), we caught a ton of accessibility issues while authoring tests.

We found some elements that had a wrong **role**, like interactive elements that had non-interactive roles (think: divs as buttons etc).

We also found many elements where the accessible **name** of an element did not describe what sighted users would see. An example would be a "close" button that also included an icon name in the accessible name.

As an additional benefit, you get to write tests by thinking about how your users would interact with the page. An example would be:

_"click on the button that reads 'login'"_
vs
_"click on the button with the test-id `data-test-id="login"`"_

This way, if classes or ids change (and they will!) your cypress tests will no longer break. But if the text content of an element is changed, your test _should_ and _will_ fail.

Overall this helped us write more natural tests while at the same time catching accessibility issues along the way. Highly recommended.

> **Side note:** if you use [Playwright](https://playwright.dev/) instead of Cypress, you can use [getByRole](https://playwright.dev/docs/locators#locate-by-role) which does the same thing.
