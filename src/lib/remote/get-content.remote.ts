import { getRequestEvent, prerender } from '$app/server';
import { validateContent, type Content } from '$lib/schemas/content.schema';

export const getContent = prerender(async () => {
	const {
		url: { origin }
	} = getRequestEvent();

	const content = new Map<string, Content>();

	await Promise.all(
		Object.entries(
			import.meta.glob<boolean, string, { data: Content; pathname: string }>('/content/**/*.md')
		).map(async ([, resolver]) => {
			const { data } = await resolver();

			const {
				type,
				id,
				attributes,
				links,
				meta: { category, tags, ...meta }
			} = validateContent(data);

			const self = new URL(links.self, origin);

			const relationships =
				category || tags
					? {
							category: category
								? {
										data: {
											type: 'categories',
											id: category
										},
										links: {
											self: new URL(`relationships/category`, self).pathname,
											related: new URL(`category`, self).pathname
										}
									}
								: undefined,

							tags:
								tags && Array.isArray(tags) && tags.length > 0
									? {
											data: tags.map((tag: string) => ({
												type: 'tags',
												id: tag
											})),
											links: {
												self: new URL(`relationships/tags`, self).pathname,
												related: new URL(`tags`, self).pathname
											}
										}
									: undefined
						}
					: undefined;

			content.set(id, {
				type,
				id,
				attributes,
				links,
				meta,
				relationships
			} as Content);
		})
	);

	return { data: Array.from(content.values()) };
});
