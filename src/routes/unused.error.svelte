<script>
	// import Nav from '../components/Nav.svelte';
	import { dev } from '$app/environment';
	import { page } from '$app/stores';

	const offline = typeof navigator !== 'undefined' && navigator.onLine === false;

	let message = $state(offline ? 'Find the internet and try again' : $page.error?.message);

	let title = $state(offline ? 'Offline' : $page.status);
	if ($page.status === 404) {
		title = 'Page not found :(';
		message = 'Sorry! If you think this URL is broken, please let me know!';
	}

	function displayPathname(str) {
		return decodeURIComponent(str).replaceAll('-', ' ');
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section>
	<h1>{$page.status}: {title}</h1>

	{#if $page.status === 404}
		<p>There is no post at the slug <code>{$page.url.pathname}</code>.</p>
		<p>If you believe this was a bug, please let me know!</p>
	{:else}
		<p>{message}</p>
	{/if}
	{#if dev && $page.error.stack}
		<pre>{$page.error.stack}</pre>
	{/if}
</section>

<style>
	h1,
	p {
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
