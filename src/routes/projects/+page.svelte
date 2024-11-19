<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { SITE_TITLE, POST_CATEGORIES } from '$lib/siteConfig';

	import ProjectCard from '../../components/ProjectCard.svelte';

	
	/**
	 * @typedef {Object} Props
	 * @property {import('./$types').PageData} data
	 */

	/** @type {Props} */
	let { data } = $props();

	// technically this is a slighlty different type because doesnt have 'content' but we'll let it slide
	/** @type {import('$lib/types').ContentItem[]} */
	let items = $derived(data.items);
</script>

<svelte:head>
	<title>Projects | {SITE_TITLE}</title>
	<meta name="description" content={`${SITE_TITLE} projects`} />
</svelte:head>

<section>
	<h1>Projects</h1>

  <p>Some of the projects I have worked on in the past.</p>

	{#if items.length}
		<ul class="nolist project-list">
			{#each items as item}
				<li>
					<!-- <code>{item.data.date}</code> -->
					<ProjectCard
						href="/projects/{item.slug}"
						title={item.title}
						stringData={new Date(item.date).getFullYear()}
						ghMetadata={item.ghMetadata}
						{item}
					>
						{item.frontmatter.short || item.description}
					</ProjectCard>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style lang="scss">
	.project-list {
		display: grid;
		gap: var(--size-4);
		grid-template-columns: repeat(2, 1fr);
    margin-top: var(--size-8);

		@media screen and (max-width: 620px) {
			grid-template-columns: 1fr;
		}
	}
</style>
