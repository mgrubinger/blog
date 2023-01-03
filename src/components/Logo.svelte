<script>
	let os = 3;
	const max_os = 20;
	function mouseEnter() {
		if (os < max_os) os++;
	}
</script>

<a href="/" class="grooovinger" on:mouseenter={mouseEnter}>
	gr{#each Array(os) as o}o{/each}vinger
</a>

<style>
	.grooovinger {
    font-weight: 800;
		background: var(--primary);
		font-size: var(--font-size-5);
		background-size: 60ch 7ch;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
    cursor: pointer;
	}
</style>
