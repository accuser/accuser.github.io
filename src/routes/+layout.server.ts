import { buildContentMap } from '$lib/server/site-content';
import type { LayoutServerLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'never';

export const load = (async () => {
	const site = await buildContentMap();

	return { site };
}) satisfies LayoutServerLoad;
