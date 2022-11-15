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

<div class="card">
	<h4>
		<a {href}>
			{title}
		</a>
	</h4>
	<p class="short">
		<slot />
	</p>
	<div class="meta-and-tags flex">
		<p class="date">{stringData}</p>
		<span class="sep">/</span>
		<!-- {#if item?.readingTime}
				<p>{item?.readingTime}</p>
			{/if} -->

		<ul class="tags nolist">
			<span class="tag">{item?.categoryOriginalCasing || 'Blog'}</span>
		</ul>
		{#if ghMetadata && ghMetadata.reactions.total_count}
			<span class="sep">/</span>
			<p class="reactions">{ghMetadata.reactions.total_count} ♥</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.card {
		> * + * {
			margin-top: var(--size-1);
		}
	}
	h4 {
		margin: 0;
		margin-bottom: var(--size-1);
	}
	.meta-and-tags {
		gap: var(--size-3);
		align-items: center;
		font-size: var(--font-size-09);
		opacity: 0.7;
	}
	.date {
	}
	.short {
		font-size: var(--font-size-09);
	}
	.tag {
		border-radius: 4px;
		font-size: 80%;
		background-color: var(--primary-light);
		padding: var(--size-1) var(--size-2);
	}

  .sep {
    opacity: 0.5;
  }
</style>
