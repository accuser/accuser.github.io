import { getPost } from '$lib/server/get-post';
import type { PageServerLoad } from './$types';

export const load = (async ({ params: { slug }, url: { origin } }) => {
	const { ast, meta, title } = await getPost(slug);

	const url = new URL(`/posts/${slug}`, origin).toString();

	return { post: { ast, meta, slug, title, url } };
}) satisfies PageServerLoad;
