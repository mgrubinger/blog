<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { SITE_TITLE, POST_CATEGORIES } from '$lib/siteConfig';

	import IndexCard from '../../components/IndexCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	// technically this is a slighlty different type because doesnt have 'content' but we'll let it slide
	/** @type {import('$lib/types').ContentItem[]} */
	$: items = data.items;

	function searchParamToArray(key) {
		return ($page.url.searchParams.get(key) || '').split(',').filter((e) => e);
	}

	let selectedCategories = searchParamToArray('show');
	let search = $page.url.searchParams.get('filter') || '';
	let inputEl;

	$: if (browser) {
		if (selectedCategories.length) {
			$page.url.searchParams.set('show', selectedCategories.toString());
		} else {
			$page.url.searchParams.delete('show');
		}
		if (search) {
			$page.url.searchParams.set('filter', search);
		} else {
			$page.url.searchParams.delete('filter');
		}
		goto(`?${$page.url.searchParams.toString()}`, { noscroll: true, keepfocus: true });
	}

	function focusSearch(e) {
		if (e.key === '/' && inputEl) inputEl.select();
	}

	let isTruncated = items?.length> 20;
	$: list = items
		.filter((item) => {
			if (selectedCategories.length) {
				return selectedCategories
					.map((element) => {
						return element.toLowerCase();
					})
					.includes(item.category.toLowerCase());
			}
			return true;
		})
		.filter((item) => {
			if (search) {
				return item.title.toLowerCase().includes(search.toLowerCase());
			}
			return true;
		})
		.slice(0, isTruncated ? 2 : items.length);
</script>

<svelte:head>
	<title>{SITE_TITLE} Blog Index</title>
	<meta name="description" content={`Latest ${SITE_TITLE} posts`} />
</svelte:head>

<svelte:window on:keyup={focusSearch} />

<section>
	<h1>
		Blog
	</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sunt reprehenderit alias rerum
		dolor impedit. In total, I've written {items.length} articles on my blog. Use the search below to
		filter by title.
	</p>
	<div>
		<input
			aria-label="Search articles"
			type="text"
			bind:value={search}
			bind:this={inputEl}
			placeholder="Hit / to search"

		/><svg

			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/></svg
		>
	</div>
	<div>
		<div>Filter:</div>
		<div>
			{#each POST_CATEGORIES as availableCategory}
				<div>
					<input
						id="category-{availableCategory}"

						type="checkbox"
						bind:group={selectedCategories}
						value={availableCategory}
					/>
					<label
						for="category-{availableCategory}"

					>
						{availableCategory}
					</label>
				</div>
			{/each}
		</div>
	</div>

	{#if !search}
		<h3>
			Most Popular
		</h3>
		<IndexCard href="/foo" title="Hardcoded Blogpost # 1" stringData="106,255 views">
			Just a hardcorded blogpost or you can use the metadata up to you
		</IndexCard>
		<IndexCard href="/welcome" title="Welcome to Swyxkit" stringData="106,255 views">
			Just a hardcorded blogpost or you can use the metadata up to you
		</IndexCard>
		<IndexCard href="/moo" title="Hardcoded Blogpost # 3" stringData="106,255 views">
			Just a hardcorded blogpost or you can use the metadata up to you
		</IndexCard>

		<h3>
			All Posts
		</h3>
	{/if}

	{#if list.length}
		<ul>
			{#each list as item}
				<li>
					<!-- <code>{item.data.date}</code> -->
					<IndexCard
						href={item.slug}
						title={item.title}
						stringData={new Date(item.date).toISOString().slice(0, 10)}
						ghMetadata={item.ghMetadata}
					>
						{item.description}
					</IndexCard>
				</li>
			{/each}
		</ul>
		{#if isTruncated}
			<div>
				<button
					on:click={() => (isTruncated = false)}

				>
					Load More Posts...
				</button>
			</div>
		{/if}
	{:else if search}
		<div>
			No posts found for
			<code>{search}</code>.
		</div>
		<button  on:click={() => (search = '')}>Clear your search</button>
	{:else}
		<div>No blogposts found!</div>
	{/if}
</section>
