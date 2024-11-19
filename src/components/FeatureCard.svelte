<script>
	
	/**
	 * @typedef {Object} Props
	 * @property {string} [title]
	 * @property {string} [href]
	 * @property {string} stringData
	 */

	/** @type {Props} */
	let { title = 'Untitled post', href = '#', stringData } = $props();
</script>

<a

	{href}
	><div>
		<div>
			<h4

			>
				{title}
			</h4>
		</div>
		<div>
			{stringData}
		</div>
	</div></a
>
