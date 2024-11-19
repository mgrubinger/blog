<script lang="ts">

	let { children }: Props = $props();
</script>

<!-- https://tailwindcss.com/docs/typography-plugin#element-modifiers -->
<article>
	{@render children?.()}
</article>
