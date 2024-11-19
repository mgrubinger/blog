<script>
	import { SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from '$lib/siteConfig';

	import 'prism-themes/themes/prism-one-light.min.css';
	import { page } from '$app/stores';

	
	/**
	 * @typedef {Object} Props
	 * @property {import('./$types').PageData} data
	 */

	/** @type {Props} */
	let { data } = $props();

	/** @type {import('$lib/types').ContentItem} */
	let json = $derived(data.json); // warning: if you try to destructure content here, make sure to make it reactive, or your page content will not update when your user navigates
	let canonical = $derived(SITE_URL + $page.url.pathname);
</script>

<svelte:head>
	<title>{json.title} | {SITE_TITLE}</title>
	<meta name="description" content={SITE_DESCRIPTION} />

	<link rel="canonical" href={canonical} />
	<meta property="og:url" content={canonical} />
	<meta property="og:site_name" content={SITE_TITLE} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={json.title} />
	<meta name="Description" content={json.description} />
	<meta property="og:description" content={json.description} />
	{#if json.image}
		<meta property="og:image" content={json.image} />
		<meta name="twitter:image" content={json.image} />
	{/if}
</svelte:head>

<article>
	<h1>
		{json.title}
	</h1>
	<div class="metainfo">
		<p>
			{new Date(json.date).toISOString().slice(0, 10)}
		</p>
	</div>

	<div id="content">
		{@html json.content}
	</div>
</article>
