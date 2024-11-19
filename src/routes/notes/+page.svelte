<script>
	import BlogItemsList from '$components/BlogItemsList.svelte';

	import { SITE_TITLE, POST_CATEGORIES } from '$lib/siteConfig';


	
	/**
	 * @typedef {Object} Props
	 * @property {import('./$types').PageData} data
	 */

	/** @type {Props} */
	let { data } = $props();

	// technically this is a slighlty different type because doesnt have 'content' but we'll let it slide
	/** @type {import('$lib/types').ContentItem[]} */
	let items = $derived(data.items);
</script>

<svelte:head>
	<title>Notes | {SITE_TITLE}</title>
	<meta name="description" content={`Latest ${SITE_TITLE} posts`} />
</svelte:head>

<section>
	<h1>Notes</h1>

	<p>
		A collection of notes, blogposts and TIL (<i>Today I Learned</i>) type of posts. Some long, some
		not so long.
	</p>

	<BlogItemsList {items} />
</section>

<style lang="scss">
	h1 {
		margin-bottom: var(--size-4);
	}

	p {
		margin-bottom: var(--size-4);
	}
</style>
