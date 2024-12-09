---
created_at: 2024-02-29T10:16:17Z
updated_at: 2024-02-29T10:16:18Z
date: 2024-02-29T10:16:17.000Z
title: Quickly serve a html document via https
slug: quickly-serve-a-html-document-via-https
category: blog
description: "I just needed to quickly serve a simple html document on a remote machine. \r"
tags:
  - TIL
---

I just needed to quickly serve a simple html document on a remote machine. 

Usually I would go for `npx serve` in the directory where the .html file resides. But [serve](https://www.npmjs.com/package/serve) does not support https, so I found this fork of vercels `serve` package: https://github.com/warren-bank/node-serve 

Just hit `npx @warren-bank/serve --ssl`

If no certificate is provided, you'll need to do the "this page is insecure but I still want to see it" dance in your browser, but that was enough for my use case (just needed a "secure context" to use secure browser APIs)

> Optionally, you can provide a real certificate/key/passphrase [as described in the docs](https://github.com/warren-bank/node-serve/blob/master/lib/serve/README.md#usage-by-example).
