import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	return {
		site: {
			title: 'accuser.dev',
			description: 'A blog about programming, technology, and life.',
			image: '/static/og-image.png',
			url: 'https://accuser.dev'
		} as const
	};
}) satisfies LayoutServerLoad;
