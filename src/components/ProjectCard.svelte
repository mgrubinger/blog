<script>
	// href={item.slug} title={item.data.title} date={item.data.date}
	export let href = '#';
	/** @type {import('$lib/types').ContentItem} */
	export let item = undefined;
	/** @type {import('$lib/types').GHMetadata} */
	export let ghMetadata = null;
	export let title = 'Untitled post';
	/** @type {string} */
	export let stringData = 'no date';
</script>

<a {href} class="card ntd" class:nocover={!!item.frontmatter.cover}>
	{#if item.frontmatter.cover}<img
			src={item.frontmatter.cover}
			alt="{title} preview"
			class="project-image"
		/>{/if}
	<div class="content">
		<h4>
			{title}
		</h4>

		<p class="short">
			<slot />
		</p>

		<div class="meta-and-tags flex">
			<p class="date">{stringData}</p>
			<span class="sep">/</span>
			<div class="tags nolist">
				<span class="tag">{item.frontmatter.type}</span>
			</div>
			{#if ghMetadata && ghMetadata.reactions.total_count}
				<span class="sep">/</span>
				<p class="reactions">{ghMetadata.reactions.total_count} ♥</p>
			{/if}
		</div>
	</div>
</a>

<style lang="scss">
	.card {
		position: relative;
		overflow: hidden;
		border-radius: var(--size-1);
		min-height: 15rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
    transform: translate3d(0, 0, 0);
    transition: all 80ms ease-in-out;
    box-shadow: 0 0 30px -25px #000;

		> * + * {
			margin-top: var(--size-1);
		}

    &:hover {
      box-shadow: 0 0 60px -25px #000;
    }
	}

	.content {
		background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0, transparent);
		padding: var(--size-2);
		padding-top: var(--size-9);
		color: #fff;
		width: 100%;

		a {
			color: inherit !important;
			text-decoration: none;
		}
	}

	h4 {
		margin: 0;
		margin-bottom: var(--size-1);
	}

	.short {
		font-size: var(--font-size-09);
    line-height: 1.3;
    margin-bottom: var(--size-1);
	}

	.tag {
		color: #000;
	}

	.project-image {
		position: absolute;
		width: 100%;
		height: 100%;
		inset: 0;
		object-fit: cover;
		z-index: -1;
	}
</style>
