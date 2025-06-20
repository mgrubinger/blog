---
short: A tiny app that helps you decide what you should get for lunch
year: "2019"
date: 2019-06-13T00:00:00.000Z
type: web app
tasks: idea, development
tools: svelte, firebase
link: https://whatarewegoingtoeattoday.grooovinger.com/
cover: ./images/what-are-we-going-to-eat-today/210010707-22da87ab-95a3-4e6f-8bee-1f2bf9419347.png
publishedDate: 2022-12-29T21:02:38Z
updatedDate: 2023-01-10T17:07:25Z
title: What are we going to eat today?
slug: what-are-we-going-to-eat-today
category: blog
description: "Every day at around noon we face the same problem at the
  [Fluxguide](https://www.fluxguide.com) office: **What are we going to eat
  today?**\r"
tags:
  - Project
---


Every day at around noon we face the same problem at the [Fluxguide](https://www.fluxguide.com) office: **What are we going to eat today?**

Because of that, and, more importantly, because I really wanted to build something using [Svelte](https://svelte.dev), I decided to build *an app for that*.

Using *What are we going to eat today?* you can add all the possible things you can get for lunch (along with price and distance information) and then hit that bigass yellow button. Using Artificial Intelligence on a Blockchain and AR, the app decides to read your mind and suggest what you should get for lunch today.

(Ok, actually it is simply a simple dumb randomizing function.)

> This app has been retired in the meantime.

<iframe width="177" height="315" src="https://www.youtube.com/embed/ONdeBfgvK8E?rel=0&controls=0&showinfo=0&autoplay=1&fs=0&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

**Tech:** I used svelte to build the app, which was really easy to get started with. I especially like how many things are already baked in (transition, stores, settings tags in the `<head>` of your document, to name just a few) and still it's very simple to use.

For storing data as well as authentication, I used Google Firebase. It was quite easy to set up and use in a svelte app. Unfortunately I only discovered late in the process that it adds around 500kb to my Javascript-bundle. Uarg! Since this is just a fun side-project, I did not bother to implement an other data storing and auth solution.


The app was hosted on [Netlify](https://netlify.com/), of course.

![whatarewegoingtoeattoday01](./images/what-are-we-going-to-eat-today/210010707-22da87ab-95a3-4e6f-8bee-1f2bf9419347.png)

![whatarewegoingtoeattoday02](./images/what-are-we-going-to-eat-today/210010709-542c8b01-6ef5-4bdf-9679-1b157884af89.png)

![whatarewegoingtoeattoday03](./images/what-are-we-going-to-eat-today/210010712-355e48e2-866e-4b34-83c4-ab9faf9235fd.png)

![whatarewegoingtoeattoday04](./images/what-are-we-going-to-eat-today/210010713-c723957b-4a58-43ec-8732-9f6dcfede78c.png)
