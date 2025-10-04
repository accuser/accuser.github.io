import { getSite } from '$lib/remote/get-site.remote';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const { data: site } = await getSite();

	return {
		site
	};
}) satisfies LayoutServerLoad;
