<script>
	import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from '$lib/siteConfig';
	import About from './about.svx';

	import BlogItemsList from '$components/BlogItemsList.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {import('./$types').PageData} data
	 */

	/** @type {Props} */
	let { data } = $props();
	let items = data.items;
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<About />

<h2 class="blog">Latest notes</h2>

<BlogItemsList {items} />

<div class="more">
	<a href="/notes" class="latest-posts-link">See more</a>
</div>

<style lang="scss">
	.blog {
		margin-bottom: var(--size-4);
	}
	.more {
		margin-top: var(--size-4);
	}
</style>
