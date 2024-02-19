<script>
	import IndexCard from "./IndexCard.svelte";

  export let items;
  console.log(items)
</script>

{#if items.length}
	<ul class="nolist blog-items">
		{#each items as item}
			<li>
				<IndexCard
					href="/notes/{item.slug}"
					title={item.title}
					stringData={new Date(item.date).toISOString().slice(0, 10)}
					ghMetadata={item.ghMetadata}
					{item}
				>
					{item.frontmatter.short || item.description}
				</IndexCard>
			</li>
		{/each}
	</ul>
{:else}
	<div>No blogposts found!</div>
{/if}

<style>
  .blog-items {
    display: grid;
    gap: var(--size-4);
    grid-template-columns: auto 1fr;
  }
  :global(.blog-items > li) {
    display: contents !important;
  }
  </style>
