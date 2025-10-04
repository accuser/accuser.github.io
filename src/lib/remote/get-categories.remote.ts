import { prerender } from '$app/server';
import type { Category } from '$lib/schemas';
import type { Content } from '$lib/schemas/content.schema';
import type { Post } from '$lib/schemas/post.schema';
import { getContent } from './get-content.remote';

const hasCategory = (
	content: Content
): content is Post & {
	relationships: {
		category: {
			data: { type: 'categories'; id: string };
			links: { self: string; related: string };
		};
	};
} => {
	return (
		content.type === 'posts' &&
		'relationships' in content &&
		content.relationships?.category !== undefined &&
		content.relationships.category !== null
	);
};

export const getCategories = prerender(async () => {
	const { data } = await getContent();

	const postsWithCategories = data.filter(hasCategory);

	const categoryMap = new Map<string, Category>();

	postsWithCategories.forEach((post) => {
		const categoryId = post.relationships.category.data.id;

		if (!categoryMap.has(categoryId)) {
			categoryMap.set(categoryId, {
				type: 'categories',
				id: categoryId,
				attributes: { name: categoryId },
				links: { self: `/categories/${categoryId}` },
				relationships: {
					posts: {
						data: [],
						links: {
							self: `/categories/${categoryId}/relationships/posts`,
							related: `/categories/${categoryId}/posts`
						}
					}
				}
			});
		}

		const category = categoryMap.get(categoryId)!;
		if (category.relationships?.posts) {
			category.relationships.posts.data.push({
				type: 'posts',
				id: post.id
			});
		}
	});

	const categories = Array.from(categoryMap.values());

	// const categories = data.reduce((acc, content) => {

	// 	if (isCategory(content.relationships?.category)) {
	// 	if (hasCategory(content)) {
	// 		const {
	// 			data: { id }
	// 		} = content.relationships.category;

	// 		const category =
	// 			acc.get(id) ||
	// 			({
	// 				type: 'categories',
	// 				id,
	// 				attributes: { name: id },
	// 				links: { self: `/categories/${id}` },
	// 				relationships: {
	// 					posts: {
	// 						data: [],
	// 						links: {
	// 							self: `/categories/${id}/relationships/posts`,
	// 							related: `/categories/${id}/posts`
	// 						}
	// 					}
	// 				}
	// 			} as Category);

	// 		category.relationships?.posts?.data.push({
	// 			type: 'posts',
	// 			id
	// 		});

	// 		acc.set(id, category);
	// 	}

	// 	return acc;
	// }, new Map<string, Category>());

	return { data: categories };
});
