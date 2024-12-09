---
date: 2021-06-23T22:00:00.000Z
short: How to reduce logging noise when using Cypress Testing Library
tags: []
created_at: 2022-09-13T15:42:22Z
updated_at: 2023-01-03T16:23:49Z
title: Cypress Testing Library Custom Error Message
slug: cypress-testing-library-custom-error-message
category: blog
description: "Cypress Testing Library outputs a rather verbose log message when
  it can't find an element using e.g. `findByRole`. The intention is to help
  you, the developer to fix the test and figure out which accessible elements
  _are_ available.\r"
---


Cypress Testing Library outputs a rather verbose log message when it can't find an element using e.g. `findByRole`. The intention is to help you, the developer to fix the test and figure out which accessible elements _are_ available.

However, I find this not very useful and too verbose, especially in a CI environment.

Luckily, Cypress Testing Library allows for customization of the message.

I use this configuration to limit the log messag length, while still keeping the relevant information about _which_ element was not found:

```js
// file: cypress/support/commands.js
import '@testing-library/cypress/add-commands';
import { configure } from '@testing-library/cypress'

configure({
  getElementError: (message, container) => {

    // truncate everything after 'Here are the accessible roles:'
    let indexOfRoleListMessage = message.indexOf('Here are the accessible roles:');
    let shortMessage = message.substring(0, indexOfRoleListMessage);

    // return a new error with the shorter message
    let error = new Error(shortMessage);
    error.name = 'AccessibleElementNotFoundError';
    return error;
  }
})
```