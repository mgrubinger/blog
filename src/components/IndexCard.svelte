<script>
	
	
	
	
	/**
	 * @typedef {Object} Props
	 * @property {string} [href] - href={item.slug} title={item.data.title} date={item.data.date}
	 * @property {import('$lib/types').ContentItem} [item]
	 * @property {import('$lib/types').GHMetadata} [ghMetadata]
	 * @property {string} [title]
	 * @property {string} [stringData]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let {
		href = '#',
		item = undefined,
		ghMetadata = null,
		title = 'Untitled post',
		stringData = 'no date',
		children
	} = $props();
</script>

<time class="date">{stringData}</time>
<div class="card">
	<h4>
		<a {href}>
			{title}
		</a>
	</h4>
	<p class="short">
		{@render children?.()}
	</p>
	<div class="meta-and-tags flex">
		<!-- {#if item?.readingTime}
      <p>{item?.readingTime}</p>
			{/if} -->

		{#if item?.tags && item?.tags.length > 0}
			<ul class="tags nolist">
				{#each item?.tags as tag}
					<li class="tag">
						{tag || 'Blog'}
					</li>
				{/each}
			</ul>
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
	time {
		font-size: var(--font-size-08);
    margin-top: 2px;
    color: var(--gray-7);
  }
	.short {
		font-size: var(--font-size-09);
	}
</style>
