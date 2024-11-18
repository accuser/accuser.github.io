import content from '$lib/server/site-content.js';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export { entries } from '$lib/server/entries';

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const page = content[slug];

	if (page === undefined || page === null) {
		throw error(404, 'Not found');
	}

	const { ast, title } = page;

	return {
		page: { ast, title }
	};
};
