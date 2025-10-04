import { getRequestEvent, prerender } from '$app/server';
import { SITE_DESCRIPTION, SITE_IMAGE, SITE_TITLE, SITE_YEAR } from '$lib/config/site';
import type { Site } from '$lib/schemas/site.schema';
import { getCategories } from './get-categories.remote';
import { getTags } from './get-tags.remote';

export const getSite = prerender(async (): Promise<{ data: Site }> => {
	const {
		url: { origin }
	} = getRequestEvent();

	const [{ data: categories }, { data: tags }] = await Promise.all([getCategories(), getTags()]);

	return {
		data: {
			type: 'sites',
			id: 'default',
			attributes: {
				categories,
				description: SITE_DESCRIPTION,
				image: SITE_IMAGE,
				tags,
				title: SITE_TITLE,
				year: SITE_YEAR
			},
			links: {
				self: {
					href: origin,
					title: SITE_TITLE
				}
			}
		}
	};
});
