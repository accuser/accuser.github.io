import siteConfig from '$lib/server/site-config';
import type { LayoutServerLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'never';

export const load = (async () => {
	const { links = [], sections = [], title = 'Untitled' } = siteConfig;

	return {
		site: {
			links,
			sections,
			title
		}
	};
}) satisfies LayoutServerLoad;
