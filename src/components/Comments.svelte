<script>
	/** @type {import('$lib/types').GHMetadata} */
	export let ghMetadata;
	let data;
	import { onMount } from 'svelte';
	onMount(async () => {
		// TODO: use authorized
		data = await fetch(ghMetadata.commentsUrl);
		data = await data.json();
	});
	import Comment from './Comment.svelte';
</script>

<div class="comments">
	{#await data}
		loading
	{:then data}
		{#if data && data.length > 0}
			{#each data as comment}
				<Comment {comment} />
			{/each}
		{/if}
	{/await}
</div>

<a href={`${ghMetadata.issueUrl}#issuecomment-new`} rel="external" target="_blank">
	Leave a new comment
</a>

<!-- <pre>
  {JSON.stringify(data, null, 2)}
</pre> -->
<!--
{
  "url": "https://api.github.com/repos/sw-yx/swyxkit/issues/comments/1008454294",
  "html_url": "https://github.com/sw-yx/swyxkit/issues/10#issuecomment-1008454294",
  "issue_url": "https://api.github.com/repos/sw-yx/swyxkit/issues/10",
  "id": 1008454294,
  "node_id": "IC_kwDOFYx2rM48G8qW",
  "user": {
    "login": "sw-yx",
    "id": 6764957,
    "node_id": "MDQ6VXNlcjY3NjQ5NTc=",
    "avatar_url": "https://avatars.githubusercontent.com/u/6764957?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sw-yx",
    "html_url": "https://github.com/sw-yx",
    "followers_url": "https://api.github.com/users/sw-yx/followers",
    "following_url": "https://api.github.com/users/sw-yx/following{/other_user}",
    "gists_url": "https://api.github.com/users/sw-yx/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sw-yx/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sw-yx/subscriptions",
    "organizations_url": "https://api.github.com/users/sw-yx/orgs",
    "repos_url": "https://api.github.com/users/sw-yx/repos",
    "events_url": "https://api.github.com/users/sw-yx/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sw-yx/received_events",
    "type": "User",
    "site_admin": false
  },
  "created_at": "2022-01-10T00:16:22Z",
  "updated_at": "2022-01-10T00:16:22Z",
  "author_association": "OWNER",
  "body": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat quod non ipsum perspiciatis voluptatum pariatur explicabo enim, suscipit sapiente, quo perferendis amet sint voluptates. Quibusdam ullam voluptatibus expedita repudiandae quos tenetur, modi eligendi eos. Sit cum unde dolor assumenda error, suscipit earum, corrupti molestias vero quae incidunt enim aspernatur magni inventore reprehenderit esse rerum quas, at itaque? Autem repellendus cupiditate natus vero inventore sit! Excepturi expedita optio in! Sapiente rerum fuga dignissimos odit iure laboriosam earum non dolores obcaecati repellendus ipsum minus enim eum et, totam facere? Doloribus autem sed magni nobis aspernatur nulla officiis impedit nostrum obcaecati assumenda!",
  "reactions": {
    "url": "https://api.github.com/repos/sw-yx/swyxkit/issues/comments/1008454294/reactions",
    "total_count": 0,
    "+1": 0,
    "-1": 0,
    "laugh": 0,
    "hooray": 0,
    "confused": 0,
    "heart": 0,
    "rocket": 0,
    "eyes": 0
  },
  "performed_via_github_app": null
} -->


<style>
  .comments {
    display: flex;
    flex-direction: column;
    gap: var(--size-4);
  }
</style>