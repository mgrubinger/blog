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
	<title>{SITE_TITLE} Projects</title>
	<meta name="description" content={`${SITE_TITLE} projects`} />
</svelte:head>

<section>
	<h1>Projects</h1>

	{#if items.length}
		<ul>
			{#each items as item}
				<li>
					<!-- <code>{item.data.date}</code> -->
					<IndexCard
						href={item.slug}
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
		<div>No blogposts found!</div>
	{/if}
</section>
