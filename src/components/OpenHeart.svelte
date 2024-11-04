<script>
	import { browser, dev } from '$app/environment';
	import { SITE_URL } from '$lib/siteConfig';
	import { onMount } from 'svelte';

	let openheartEndpoint = 'https://openheart.martin-grubinger.workers.dev';
	if (dev) {
		openheartEndpoint = 'http://localhost:8787';
	}

	export let url = SITE_URL;

	if (browser) url = window.location.href;

	url = url.replace(/http(s)?\:\/\//, '');

	const possibleEmojis = ['👍', '👎', '💜', '👏', '🙄'];

	let state = 'idle';
	let count = {};

	async function getIt() {
		let res = await fetch(`${openheartEndpoint}/${url}`, {
			method: 'GET'
		});
		if (res.ok) {
			let response = await res.json();

			Object.entries(response).forEach(([emoji, prevCount]) => {
				if (!possibleEmojis.includes(emoji)) return;
				count[emoji] = prevCount;
			});
		}
	}

	async function postIt(emoji) {
		state = 'busy';
		let res = await fetch(`${openheartEndpoint}/${url}`, {
			method: 'POST',
			body: emoji
		});
		if (res.ok) {
			let response = await res.json();
			if (response.count) count[emoji] = response.count;
		}
		state = 'idle';
	}

	onMount(getIt);
</script>

<div class="openheart">
	<div class="reactions">
		{#each possibleEmojis as emoji}
			<button
				class="button"
				type="button"
				on:click={() => postIt(emoji)}
				disabled={state === 'busy'}
			>
				<span class="emoji">{emoji}</span>
				<span class="count"
					>{#if count[emoji]}{count[emoji]}{/if}</span
				>
			</button>
		{/each}
	</div>
	<details>
		<summary> what's this? </summary>
		<p>
			This is an implementation of the <a href="https://openheart.fyi/">Open Heart Protocol</a>.
		</p>
	</details>
</div>

<style lang="scss">
	.openheart {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin-top: var(--size-8);
	}
	.reactions {
		display: flex;
		gap: 6px;
		background-color: #f2f2f2;
		padding: 10px;
		width: min-content;
		border-radius: 20px;
	}
	.button {
		border: 1px solid transparent;
		border-radius: 30px;
		display: flex;
		padding: 1rem;
		width: var(--size-8);
		height: var(--size-8);
		flex-shrink: 0;

		align-items: center;
		justify-content: center;
		background-color: #ffffff7d;
		cursor: pointer;
		position: relative;

		.emoji {
			transition: all 120ms ease-in-out;
			will-change: transform;
		}

		&:hover,
		&:focus {
			background-color: #fff;
			border-color: var(--primary);

			.emoji {
				transform: scale(1.2) translateY(-5px) rotate(-5deg);
			}
		}
	}
	.count {
		font-size: 60%;
		position: absolute;
		bottom: -2px;
		color: #666;
		font-weight: bold;
	}

	details {
		font-size: var(--font-size-07);
		margin-top: var(--size-1);
    text-align: right;

		summary {
			list-style-type: '🤨 ';
			cursor: pointer;

			&:hover {
				color: var(--primary);
			}
		}
	}
</style>
