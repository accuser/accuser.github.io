import { prerender } from '$app/server';
import { error } from '@sveltejs/kit';
import * as v from 'valibot';
import { getCategories } from './get-categories.remote';

export const getCategory = prerender(v.string(), async (slug) => {
	const { data } = await getCategories();

	const category = data.find(({ id }) => id === slug);

	if (category === undefined || category === null) {
		error(404, 'Not found');
	}

	return { data: category };
});
