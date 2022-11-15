<script>
	import Nav from '../components/Nav.svelte';
	import { MY_TWITTER_HANDLE, REPO_URL, SITE_TITLE } from '$lib/siteConfig';
	import '../global.scss';
	import '@fontsource/inter/variable-full.css';
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title={'RSS Feed for ' + SITE_TITLE}
		href="/rss.xml"
	/>
</svelte:head>

<div id="layout">
	<Nav />
	<main>
		<slot />
	</main>
</div>

<footer>
	<div class="linkwall">
		<ul class="nolist">
			<li><a>Home</a></li>
			<li><a>About</a></li>
			<li><a> RSS </a></li>
		</ul>
		<ul class="nolist">
			<li>
				<a
					class=""
					target="_blank"
					rel="noopener noreferrer"
					href={'https://twitter.com/intent/follow?screen_name=' + MY_TWITTER_HANDLE}
				>
					Twitter
				</a>
			</li>
			<li><a href={REPO_URL}> GitHub </a></li>
		</ul>
	</div>
	<p class="credits">
    Made with <a href="https://kit.svelte.dev/">SvelteKit</a>. Based on
		<a href="https://swyxkit.netlify.app/">swyxkit.</a>
    <br/>2022
	</p>
</footer>

<style lang="scss">
	#layout {
		max-width: 80ch;
		margin: 0 auto;
		padding: var(--size-4);
	}
	footer {
		margin: var(--size-4) auto;
		font-size: var(--font-size-08);
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--gray-7);
		color: #fff;
		padding: var(--size-4);
		padding-bottom: var(--size-7);
    gap: var(--size-4);

		a {
			color: currentColor;

			&:hover {
				color: var(--primary);
			}
		}
	}
	.linkwall {
		display: flex;
		gap: var(--size-4);
	}
	.linkwall ul {
		display: flex;
		flex-direction: column;
	}

  .credits {
    opacity: 0.7;
    text-align: center;
  }
</style>
