<script>
	import FeatureCard from '../components/FeatureCard.svelte';
	import {
		SITE_URL,
		REPO_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE
	} from '$lib/siteConfig';
	// export const prerender = true; // index page is most visited, lets prerender
	import About from './about.svx';
	import IndexCard from '$components/IndexCard.svelte';
	import BlogItemsList from '$components/BlogItemsList.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let items = data.items;
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={SITE_URL + '/rss.xml'} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<About />

<h2 class="blog">Latest blog posts</h2>

<BlogItemsList {items} />

<div class="more">
	<a href="/blog" class="latest-posts-link">See more blog posts</a>
</div>

<style lang="scss">
	.blog {
		margin-bottom: var(--size-4);
	}
	.more {
		margin-top: var(--size-4);
	}
</style>
