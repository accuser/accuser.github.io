import { prerender } from '$app/server';
import { getContent } from './get-content.remote';

const hasTags = (attributes: object): attributes is { tags: string[] } =>
	'tags' in attributes &&
	Array.isArray(attributes.tags) &&
	attributes.tags.every((tag) => typeof tag === 'string');

export const getTags = prerender(async () => {
	const { data } = await getContent();

	const tags = data.reduce(
		(acc, { attributes }) => (hasTags(attributes) ? acc.union(new Set(attributes.tags)) : acc),
		new Set<string>()
	);

	return { data: Array.from(tags) };
});
