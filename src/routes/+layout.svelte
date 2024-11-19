<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import { SITE_TITLE } from '$lib/siteConfig';
	import '../global.scss';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/700.css';
	import Footer from '$components/Footer.svelte';
	import OpenHeart from '../components/OpenHeart.svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	// analytics are at: https://grooovinger.goatcounter.com/
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title={'RSS Feed for ' + SITE_TITLE}
		href="/rss.xml"
	/>
	<script
		data-goatcounter="https://grooovinger.goatcounter.com/count"
		async
		src="//gc.zgo.at/count.js"
	></script>
</svelte:head>

<div id="layout">
	<Nav />
	<main id="skip">
		{@render children?.()}
	</main>

	{#if browser}
		{#key $page.url.href}
			<OpenHeart url={$page.url.href} />
		{/key}
	{/if}
</div>
<Footer />

<style lang="scss">
	#layout {
		max-width: 80ch;
		margin: 0 auto;
		padding: var(--size-4);
	}
</style>
