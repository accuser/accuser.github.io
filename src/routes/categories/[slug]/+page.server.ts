import { getCategory } from '$lib/remote/get-category.remote';
import type { PageServerLoad } from './$types';

export const load = (async ({ params: { slug } }) => {
	const { data: category } = await getCategory(slug);

	return { category };
}) satisfies PageServerLoad;
