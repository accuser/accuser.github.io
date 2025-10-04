import { getSite } from '$lib/remote/get-site.remote';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load = (async ({ url: { pathname } }) => {
	if (pathname === '/') {
		redirect(307, '/categories');
	}

	const { data: site } = await getSite();

	return {
		site
	};
}) satisfies LayoutServerLoad;
