---
short: No more matchMedia to check screen orientation
created_at: 2024-08-13T09:06:50Z
updated_at: 2024-08-13T09:11:51Z
date: 2024-08-13T09:06:50.000Z
title: Easy screen orientation management with the ScreenOrientation API
slug: easy-screen-orientation-management-with-the-screenorientation-api
category: blog
description: "The [ScreenOrientation
  API](https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation)
  recently reached Baseline support. This is a very handy API to check for the
  current orientation of the users device as well as reacting to changing
  orientation.\r"
tags:
  - TIL
  - JavaScript
---


The [ScreenOrientation API](https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation) recently reached Baseline support. This is a very handy API to check for the current orientation of the users device as well as reacting to changing orientation.

## Interface
### Type

`screen.orientation.type`

 lets you read the current device orientation (one of: `portrait-primary`, `portrait-secondary`, `landscape-primary`, `landscape-secondary`)

### Angle

`screen.orientation.angle` 

lets you read the current device angle in degrees (0-360)

### Change event

`change` 

event to react to change in orientation, e.g. `screen.orientation.addEventListener('change', handleOrientationChange)`

### Locks

ScreenOrientationAPI also lets you request on [orientation lock](https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/lock). This could be useful for games and other experience requiring a stable orientation.

## Browser support

Chromium-based browsers supported this API for ages, while [Safari recently added support in v16.4](https://caniuse.com/screen-orientation). So make sure to check for `screen.orientation` before using this API.

## Further reading

[Managing screen orientation on MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)

[Can I Use: Screen Orientation](https://caniuse.com/screen-orientation)
