<script>
	import { REPO_URL } from '$lib/siteConfig';
	import Logo from './Logo.svelte';
	import NavLink from './NavLink.svelte';
</script>

<nav>
	<a href="#skip" class="skip-nav">Skip to content</a>
	<Logo />
	<ul>
		<li>
			<NavLink href="/">home</NavLink>
		</li>
		<li>
			<NavLink href="/notes">notes</NavLink>
		</li>
		<li>
			<NavLink href="/projects">projects</NavLink>
		</li>
	</ul>
	<!-- <div>
		<!-- RSS --
		<a rel="external" href={origin + '/rss.xml'} aria-label="RSS">
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
				/>
			</svg>
		</a>
		<!-- Github --
		<a class="" href={REPO_URL} aria-label="GitHub source">
			<svg aria-hidden="true">
				<path
					fill-rule="evenodd"
					d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
					0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
					1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088
					2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988
					1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112
					6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202
					2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566
					4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019
					10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
	</div> -->
</nav>

<style lang="scss">
	nav {
    display: flex;
    align-items: baseline;
    gap: var(--size-2) var(--size-4);
    flex-wrap: wrap;
    margin-bottom: var(--size-4);
  }
	.skip-nav {
		position: absolute;
		left: -1px;
		top: -1px;
    color: #000;
    font-weight: bold;
		transform: translate3d(0, -100%, 0);
		padding: 0.75rem 1rem;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.2s;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(2px);

    &:focus {
      transform: translate3d(0,0,0);
    }
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 0 var(--size-4);
    flex-wrap: wrap;
    margin-left: auto;
	}
</style>
