<script>
	import {
		MY_MASTODON_HANDLE,
		MY_MASTODON_URL,
		REPO_URL,
		SITE_TITLE,
    MY_EMAIL
	} from '$lib/siteConfig';

	let date = new Date();
	let year = date.getFullYear();
</script>

<footer>
	<div class="linkwall">
		<ul class="nolist">
			<li><a href="/">Home</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/projects">Projects</a></li>
			<li><a href="/imprint">Imprint / Privacy Statement</a></li>
			<li><a href="/rss.xml">RSS</a></li>
		</ul>
		<ul class="nolist" data-sveltekit-preload-data="off">
			<li>
				<a target="_blank" rel="noopener noreferrer" href="mailto:{MY_EMAIL}">{MY_EMAIL}</a>
			</li>
			<li>
				<a target="_blank" rel="me noopener noreferrer" href={MY_MASTODON_URL}>Mastodon</a>
			</li>
			<li><a rel="noopener noreferrer" href={REPO_URL}>GitHub</a></li>
		</ul>
	</div>
	<p class="credits">
		The year is {year}<br/>
		Made with <a rel="noopener noreferrer" href="https://kit.svelte.dev/">SvelteKit</a>. Based on
		<a rel="noopener noreferrer" href="https://swyxkit.netlify.app/">swyxkit.</a>
	</p>
</footer>

<style lang="scss">
	footer {
		margin: var(--size-4) auto;
		font-size: var(--font-size-08);
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #fff;
		background-color: var(--primary-dark);
		padding: var(--size-4);
		padding-bottom: var(--size-7);
		gap: var(--size-4);

		a {
			color: currentColor;

			&:hover {
				color: hotpink;
			}
		}
	}
	.linkwall {
		display: flex;
		gap: var(--size-4);

		ul {
			display: flex;
			flex-direction: column;
		}
	}

	.credits {
		opacity: 0.7;
		text-align: center;
	}
</style>
