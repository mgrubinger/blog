<script>
	import IndexCard from "./IndexCard.svelte";

  export let items;
</script>

{#if items.length}
	<ul class="nolist blog-items">
		{#each items as item}
			<li>
				<IndexCard
					href="/blog/{item.slug}"
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
    display: flex;
    flex-direction: column;
    gap: var(--size-4);
  }
  </style>
