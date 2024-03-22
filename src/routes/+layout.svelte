<script>
	import Nav from '../components/Nav.svelte';
	import { SITE_TITLE } from '$lib/siteConfig';
	import '../global.scss';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/700.css';
	import Footer from '$components/Footer.svelte';

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
		src="//gc.zgo.at/count.js"></script>
</svelte:head>

<div id="layout">
	<Nav />
	<main id="skip">
		<slot />
	</main>
</div>
<Footer />

<style lang="scss">
	#layout {
		max-width: 80ch;
		margin: 0 auto;
		padding: var(--size-4);
	}
</style>
