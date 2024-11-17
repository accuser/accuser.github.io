import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

const allowed = (value: string) => Boolean(value) && value.startsWith('.') === false;

export const load = (async ({ params: { slug }, parent }) => {
	const { site } = await parent();

	const path = slug.split('/').filter(allowed).join('/');

	const page = site.get(path);

	if (page) {
		return { page };
	}

	throw error(404, 'Not found');
}) satisfies LayoutServerLoad;
