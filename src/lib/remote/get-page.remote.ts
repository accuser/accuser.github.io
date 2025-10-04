import { prerender } from '$app/server';
import { error } from '@sveltejs/kit';
import * as v from 'valibot';
import { getContent } from './get-content.remote';

export const getPage = prerender(v.string(), async (pathname) => {
	const { data } = await getContent();

	const page = data.find(({ id }) => id === pathname);

	if (page === undefined || page === null) {
		error(404, 'Not found');
	}

	return { data: page };
});
