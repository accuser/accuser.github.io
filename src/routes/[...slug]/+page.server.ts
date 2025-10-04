import { getPage } from '$lib/remote/get-page.remote';
import type { PageServerLoad } from './$types';

export const load = (async ({ url: { pathname } }) => {
	const { data: page } = await getPage(pathname);

	return { page };
}) satisfies PageServerLoad;
