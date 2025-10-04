import { getCategories } from '$lib/remote/get-categories.remote';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const { data: categories } = await getCategories();

	return { categories };
}) satisfies PageServerLoad;
