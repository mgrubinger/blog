---
short: Faster npm ci installs
created_at: 2023-01-23T16:42:15Z
updated_at: 2023-01-23T16:42:15Z
date: 2023-01-23T16:42:15.000Z
title: "npm: only install production dependencies"
slug: npm-only-install-production-dependencies
category: blog
description: "In a production environment, you should not need node_dependencies
  from listed in the `devDependencies` section of your package.json.\r"
tags:
  - TIL
---


In a production environment, you should not need node_dependencies from listed in the `devDependencies` section of your package.json.

`NODE_ENV=production npm ci` will only install dependencies listed in `dependencies` of your package.json. `devDependencies` will not be installed.

Alternative: use `npm ci --omit=dev`
