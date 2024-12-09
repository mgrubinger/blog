---
short: A collection of tricks and niceties you might find useful when working
  with Svelte.
created_at: 2023-05-08T15:50:48Z
updated_at: 2024-10-07T13:34:20Z
date: 2023-05-08T15:50:48.000Z
title: Svelte Tricks Collection
slug: svelte-tricks-collection
category: blog
description: "A collection of tricks and niceties you might find useful when
  working with Svelte. This list is intended to be updated from time to time.\r"
tags:
  - JavaScript
  - svelte
---


A collection of tricks and niceties you might find useful when working with Svelte. This list is intended to be updated from time to time.

1. [Style components using css variables](#style-components-using-css-variables)
2. [Forward events to parent component](#Forward-events-to-parent-component)
3. Locally global styles (with Svelte-Preprocess)
4. Loop over part of an Array
5. Dynamic import of components within template



---

## Style components using css variables

I can think of multiple options to apply external styling for a reusable component:

- Expose a `style` prop
- Expose a prop for different classes, which you can then apply to the individual elements inside the component
- Use the `:global()` selector in the parent component
- Use CSS Custom Properties (CSS vars).

<iframe width="100%" height="500px" src="https://stackblitz.com/edit/vitejs-vite-nkl1ru?ctl=1&embed=1&file=src/App.svelte&hideExplorer=1&view=preview"></iframe>

In the example above I used the CSS vars approach. The idea is, that you allow overriding of certain styles based on CSS vars that get applied to the component. Svelte supports setting CSS vars directly when using a component, like this:

`<Component --bg-color="blue" />`

> Note how you don't need the style attribute, just pass in the props via `--propname` attribute!

Then, in the `<style>` block of your reusable component, use the CSS variable – ideally with a fallback value:

```javascript
<style>
.mycomponent {
    --bg: var(--bg, red);
}
</style>
```

I think that’s a clean way to open up styling adjustments for a component. I think of this approach like a separate set of props, just for styling. You might also want to consider using special prefixes for these kind of variables to prevent naming clashes.

---

## Forward events to parent component

If you want a component to pass an event to its parent, all you need to do is to set the attribute on:<eventname> on the element triggering the event. Like this:

```html
// within InnerComponent.svelte
<div class="card">
  <button on:click type="button">Open</button> // <<-- note the on:click here
</div>

// within ParentComponent.svelte
<MyComponent on:click={openCard} />
```

This is not a secret trick, [it's even in the new official tutorial](https://learn.svelte.dev/tutorial/event-forwarding). I find it very useful and it's a svelte feature that just makes me authoring components such a joy.

---

## Locally global styles (with Svelte-Preprocess)

_(a weird name that I just made up)_

In Svelte, you can set individual CSS rules to be global using the `:global()` keyword in the `style` section. Sometimes you might want to have styles, that are global, but only as long as the element is a child of a certain element to prevent clashes.

Utilizing svelte-preprocess with Less or Sass and postcss you can write rules like this:

```html
<style lang="less">
.mycomponent {
  /* local styles of this component */

  :global {
    .dynamically-added-element {
        color: deeppink;
    /* global styles that are only available for elements with class dynamically-added-element which are children of .mycomponent */
    ...
    }
  }
}
</style>
```

Note that the `:global {}` block is a feature of [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md#globalstyle)

--- 

## Loop over part of an Array

To run an `each` loop over just a part of an array, use a dynamically constructed array straight in the template:

```javascript
{#each {length: 5} as _, index (index)}
    {@const item = items[index] }
    <!-- do stuff with {item} -->
{/each}
```

You might argue that extracting the slice of the array in the `<script>` area of a component is more readable. I agree.

--- 

## Dynamic import of components within template

To dynamically load a component, you can import it straight from the template using `#await`:

```javascript
{#await import("$lib/path/to/ComponentName.svelte") }
  <p>loading...</p>
{:then { default: ComponentName }}
  <ComponentName />
{/await}
```

Line number 5 destructures the imported module to get the `default` export (our svelte component) and renames it to `ComponentName`. Be careful not to accidently create request waterfalls by only loading components lazily your application does not need for the initial render.

