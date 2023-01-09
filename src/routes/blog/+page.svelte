<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import BlogItemsList from '$components/BlogItemsList.svelte';

	import { SITE_TITLE, POST_CATEGORIES } from '$lib/siteConfig';

	import IndexCard from '../../components/IndexCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	// technically this is a slighlty different type because doesnt have 'content' but we'll let it slide
	/** @type {import('$lib/types').ContentItem[]} */
	$: items = data.items;

</script>

<svelte:head>
	<title>Blog | {SITE_TITLE}</title>
	<meta name="description" content={`Latest ${SITE_TITLE} posts`} />
</svelte:head>

<section>
	<h1>Blog</h1>

  <BlogItemsList {items} />

</section>

<style lang="scss">
  h1 {
    margin-bottom: var(--size-4);
  }
</style>