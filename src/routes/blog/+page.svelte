<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { SITE_TITLE, POST_CATEGORIES } from '$lib/siteConfig';

	import IndexCard from '../../components/IndexCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	// technically this is a slighlty different type because doesnt have 'content' but we'll let it slide
	/** @type {import('$lib/types').ContentItem[]} */
	$: items = data.items;

</script>

<svelte:head>
	<title>{SITE_TITLE} Blog Index</title>
	<meta name="description" content={`Latest ${SITE_TITLE} posts`} />
</svelte:head>

<section>
	<div>
		<h1>Blog</h1>
	</div>

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
</section>

<style>
.blog-items {
  display: flex;
  flex-direction: column;
  gap: var(--size-8);
}
</style>
