---
date: 2021-01-01T00:00:00.000Z
year: "2021"
tools: SvelteKit, Colyseus, Matter.js, Supabase.io
short: A real-time multiplayer game
type: game
cover: https://user-images.githubusercontent.com/465547/207396769-02232676-3753-4320-bf9f-c538373ce698.png
created_at: 2022-12-13T16:59:15Z
updated_at: 2023-01-09T20:31:09Z
title: Autowuzzler
slug: autowuzzler
category: blog
description: "Autowuzzler is a virtual foosball (table soccer) multiplayer game.
  Invite your friends and shoot those goals. Play for free over at:
  [autowuzzler.com](https://www.autowuzzler.com/)\r"
tags:
  - Project
---


Autowuzzler is a virtual foosball (table soccer) multiplayer game. Invite your friends and shoot those goals. Play for free over at: [autowuzzler.com](https://www.autowuzzler.com/)

Note: This game is in public beta right now and far from finished (I have plenty of ideas how to take this further). If you  experience any issues, please do not hesitate to contact me ([@grooovinger](https://mastodon.social/@grooovinger) or hello@mgrubinger.at)


<img width="500" alt="autowuzzler-ingame-6players" src="https://user-images.githubusercontent.com/465547/207396769-02232676-3753-4320-bf9f-c538373ce698.png">

### Idea

During the first Covid-19 lockdown, I missed playing foosball with my colleagues at the Geizhals-office, so I decided to do something about it. While playing toy cars with my kid, I had the idea of mixing virtual toy cars with a foosball setup and combining it with a simple Join-via-PIN à la [kahoot.it](http://kahoot.it) to enable frictionless sessions.

### Gameplay

The game resembles a 2D topdown view of a foosball table. Each player is assigned to one of two teams and tries to kick the ball into the correct goal. The first team reaching 10 goals wins. 

### Joining a Game

To start a new game, a player creates a game PIN for a session. This game PIN can then be shared with friends as a unique URL to their game session. When a player first loads the game, they enter a nickname which will appear next to the players car. 

### Tech-Stack

This application is built on the following stack: 

- SvelteKit for the public app and frontend (autowuzzler.com)
- Colyseus.js as an authoritative real-time game server
- Matter.js for physics calculations
- [Supabase.io](http://Supabase.io) to store game PINs
- Hosting
    - Linode for the Node-server
    - Netlify for the public-facing (frontend) application


Read more about the idea, process and development of Autowuzzler on [Smashing Magazine](https://www.smashingmagazine.com/2021/10/real-time-multi-user-game/).

