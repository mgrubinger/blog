<script>
	import { page } from '$app/stores';
	$: console.log($page, $$props.href);
	$: isActive = $page.url.pathname === $$props.href;
	export let href;
</script>

<a class:active={isActive} {href}><slot /></a>

<style lang="scss">
	a {
		color: black;
		position: relative;
		text-decoration: none;
    font-weight: 800;

		&:hover,
    &:focus,
		&.active {
			color: var(--primary);
		}
	}

	a::after {
		height: 3px;
		background-color: currentColor;
		// border-radius: 3px;
		left: -1px;
		right: -1px;
		display: block;
		content: '';
		position: absolute;
		bottom: -6px;
		transform: translate3d(0, 0, 0) scaleX(0);
		transition: all 100ms ease-in-out;
	}
	.active::after {
		transform: translate3d(0, 0, 0) scaleX(1) !important;
	}
</style>
