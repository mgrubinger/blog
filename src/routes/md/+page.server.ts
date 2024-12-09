import type { PageServerLoad } from './$types';
// import { slugFromPath } from '$lib/slugFromPath';

const MAX_POSTS = 10;

export const load: PageServerLoad = async ({ url }) => {
	const modules = import.meta.glob(`/src/content/inspired-*.{md,svx,svelte.md}`, {eager: true});

	const posts = Object.entries(modules);

  console.log(posts[0].metadata)
	// const publishedPosts = posts.filter((post) => post.published).slice(0, MAX_POSTS);

	// publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return { posts: [] };
};
