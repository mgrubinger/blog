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

<time class="date">{stringData}</time>
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

		{#if ghMetadata && ghMetadata.reactions.total_count}
			{#if item?.tags.length > 0}<span class="sep">/</span>{/if}
			<p class="reactions">
				{ghMetadata.reactions.total_count} reaction{#if ghMetadata.reactions.total_count > 1}s{/if}
			</p>
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
