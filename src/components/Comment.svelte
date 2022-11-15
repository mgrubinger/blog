<script>
	import formatDistance from 'date-fns/formatDistance/index.js';
	import snarkdown from 'snarkdown';
	import Reactions from './Reactions.svelte';
	/** @type {import('$lib/types').GHComment} */
	export let comment;
	const doc = new DOMParser().parseFromString(
		snarkdownEnhanced(comment.body.replace(/\r\n/g, '\n')), // https://github.com/developit/snarkdown/issues/69
		'text/html'
	);
	doc.normalize();
	_sanitize(doc.body);
	let body = doc.body.innerHTML;

	// https://github.com/developit/snarkdown/issues/11
	function snarkdownEnhanced(markdown) {
		return markdown
			.split(/(?:\r?\n){2,}/)
			.map((l) =>
				[' ', '\t', '#', '-', '*', '>'].some((char) => l.startsWith(char))
					? snarkdown(l)
					: `<p>${snarkdown(l)}</p>`
			)
			.join('\n');
	}

	// https://github.com/developit/snarkdown/issues/70
	function _sanitize(node) {
		if (node.nodeType === 3) return;
		if (node.nodeType !== 1 || /^(script|iframe|object|embed|svg)$/i.test(node.tagName)) {
			return node.remove();
		}
		for (let i = node.attributes.length; i--; ) {
			const name = node.attributes[i].name;
			if (!/^(class|id|name|href|src|alt|align|valign)$/i.test(name)) {
				node.attributes.removeNamedItem(name);
			}
		}
		for (let i = node.childNodes.length; i--; ) _sanitize(node.childNodes[i]);
	}
	// let html = null
	// async function getContents() {
	//   const snarkdown = await import('snarkdown')
	//   const res = await (await fetch(comment.url)).json()
	//   html = snarkdown.default(res.body);
	// }
</script>

<div class="comment flex">
	<img alt={`avatar of commenter ${comment.user.login}`} src={comment.user.avatar_url} loading="lazy" />
	<div>
		<div class:owner={comment.author_association === 'OWNER'} class="author-and-date">
			{comment.user.login}
			<a href={comment.html_url}>
				<time>{formatDistance(new Date(comment.created_at), new Date())} ago</time>
			</a>
		</div>
		<div>
			{@html body}
		</div>
		<div>
			<Reactions issueUrl={comment.issue_url} reactions={comment.reactions} />
		</div>
	</div>
</div>

<style lang="scss">
	.comment {
		display: flex;
		gap: var(--size-2);
		border: 1px solid var(--grape-0);
		padding: var(--size-4);
	}

	img {
		border-radius: 18px 20px 22px 18px;
		width: 40px;
		height: 40px;
		object-fit: cover;
	}

	.author-and-date {
		font-size: var(--font-size-08);

    &.owner {
      color: var(--primary);
    }
	}
</style>
