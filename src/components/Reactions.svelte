<script>
	/** @type {import('$lib/types').GHReactions} */
	export let reactions;
	/** @type {string}*/
	export let issueUrl;
	let emojiMap = {
		'+1': '👍',
		'-1': '👎',
		laugh: '😆',
		hooray: '🎉',
		confused: '😕',
		heart: '❤️',
		rocket: '🚀',
		eyes: '👀'
	};
</script>

<!-- {Object.keys(reactions).length} -->
{#if Object.keys(reactions).length > 0}
	<a href={`${issueUrl}#issuecomment-new`} class="ntd">
		{#each Object.keys(reactions) as reaction}
			{#if Object.keys(emojiMap).includes(reaction) && reactions[reaction] > 0}
				<span>
					<span>
						<span>{emojiMap[reaction]}</span>
						<span>{reactions[reaction]}</span>
					</span>
				</span>
			{/if}
		{/each}
	</a>
{/if}
