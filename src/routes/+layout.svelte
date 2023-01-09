<script>
	import Nav from '../components/Nav.svelte';
	import { MY_TWITTER_HANDLE, REPO_URL, SITE_TITLE } from '$lib/siteConfig';
	import '../global.scss';
  import "@fontsource/inter/400.css"
  import "@fontsource/inter/700.css"
	import Footer from '$components/Footer.svelte';
	import { page } from '$app/stores';

</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title={'RSS Feed for ' + SITE_TITLE}
		href="/rss.xml"
	/>
</svelte:head>

<div id="layout" data-route-id="{$page.routeId}">
	<Nav />
	<main id="skip">
		<slot />
	</main>
</div>
<Footer/>

<style lang="scss">
	#layout {
		max-width: 80ch;
		margin: 0 auto;
		padding: var(--size-4);
	}

</style>
