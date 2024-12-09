---
short: A simple puzzle game about switching all the lights off. A remake of the
  1990s game Lights Out.
year: "2020"
date: 2020-01-01T00:00:00.000Z
type: PWA game
tasks: everything
tools: svelte, sveltekit, netlify, PWA
link: https://neolightsout.grooovinger.com/
cover: https://user-images.githubusercontent.com/465547/203114081-4b95cae1-d0e5-4619-8222-8935319ec75e.png
video: https://youtu.be/fUvCqCCmVsg
created_at: 2022-11-21T16:55:28Z
updated_at: 2023-01-10T17:04:57Z
title: neo:lights:out
slug: neolightsout
category: blog
description: "When I was a kid, I **loved** to play a game called Lights Out by
  Tiger Electronics.\r"
tags:
  - Project
---


When I was a kid, I **loved** to play a game called Lights Out by Tiger Electronics.

It was my first portable "game console", and this is what it looked like:

<iframe width="560" height="315" src="https://www.youtube.com/embed/pj0lVmhkx7M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*OMG, this commercial is gold!*

Recently a similar grid pattern reminded me of this game, so I decided to recreate it – but as a progressive web app.

While I'm not a big fan of the Neomorphism design trend, I wanted to play around with it to get an idea how the gradients and shadows are combined for that special look.

Stuff I used for this project:
- Svelte with ~~Sapper~~, which I highly enjoyed using _(upgraded to SvelteKit in the meantime)_
- Default Sapper Service Worker to enable offline mode
- CSS Grid, because – well – it's a grid!
- This handy [Neumorphism Generator](https://neumorphism.io)
- This [ancient Lights Out implementation](https://www.jaapsch.net/puzzles/javascript/lightjcl.htm) where I could copy the levels from
- [Figma](https://www.figma.com) for the favicon and other images
- [Netlify](https://www.netlify.com) for hosting the statically exported app, thanks so much!

<img width="746" alt="neolightsout_001" src="https://user-images.githubusercontent.com/465547/203114081-4b95cae1-d0e5-4619-8222-8935319ec75e.png"><br/>

![neolightsout_002](https://user-images.githubusercontent.com/465547/203114087-5e909541-b2b2-4dff-af9e-20d25d3405fa.png)

