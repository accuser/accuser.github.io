import { buildContentMap } from '$lib/server/site-content';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

const allowed = (value: string) => Boolean(value) && value.startsWith('.') === false;

export const prerender = true;
export const trailingSlash = 'never';

export const load = (async ({ params: { slug } }) => {
	const site = await buildContentMap();

	const path = slug.split('/').filter(allowed).join('/');

	const page = site.get(path);

	if (page) {
		const { ast, frontmatter, title, watcher } = page;

		watcher?.();

		return { ast, frontmatter, title };
	}

	throw error(404, 'Not found');
}) satisfies LayoutServerLoad;
