import { prerender } from '$app/server';
import { getContent } from './get-content.remote';

export const getPages = prerender(async () => {
	const { data } = await getContent();

	return {
		data: data.map((page) => {
			const {
				type,
				id,
				attributes: { ast, ...attributes },
				links,
				meta
			} = page;

			void ast;

			return {
				type,
				id,
				attributes,
				links,
				meta
			};
		})
	};
});
