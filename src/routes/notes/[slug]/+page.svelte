<script>
	import { MY_TWITTER_HANDLE, SITE_TITLE, SITE_URL } from '$lib/siteConfig';
	import Comments from '$components/Comments.svelte';

	import 'prism-themes/themes/prism-one-light.min.css';
	import Reactions from '$components/Reactions.svelte';
	import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('$lib/types').ContentItem} */
	$: json = data.json; // warning: if you try to destructure content here, make sure to make it reactive, or your page content will not update when your user navigates
	$: canonical = SITE_URL + $page.url.pathname;
</script>

<svelte:head>
	<title>{json.title} | {SITE_TITLE}</title>
	<meta name="description" content="swyxkit blog" />

	<link rel="canonical" href={canonical} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={json.title} />
	<meta name="Description" content={json.description} />
	<meta property="og:description" content={json.description} />
	<meta name="twitter:card" content={json.image ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={json.title} />
	<meta name="twitter:description" content={json.description} />
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
			{new Date(json.date).toISOString().slice(0, 10)} / {json.ghMetadata.user.login} /
			<a href="#reactions">
				<span>{json.ghMetadata.reactions.total_count} reactions</span>
			</a>
		</p>
	</div>

	<div id="content">
		{@html json.content}
	</div>
</article>

<div id="reactions">
	<div>
		{#if json.ghMetadata.reactions.total_count > 0}
			Reactions: <Reactions
				issueUrl={json.ghMetadata.issueUrl}
				reactions={json.ghMetadata.reactions}
			/>
		{:else}
			<a href={json.ghMetadata.issueUrl}>Leave a reaction </a>
			if you liked this post! 🧡
		{/if}
	</div>
	<div>
		<Comments ghMetadata={json.ghMetadata} />
	</div>
</div>

<style>

</style>
