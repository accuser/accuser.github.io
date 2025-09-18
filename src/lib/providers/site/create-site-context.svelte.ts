import { SITE_DESCRIPTION, SITE_IMAGE, SITE_TITLE, SITE_URL } from '$lib/config';
import { setContext } from 'svelte';
import { SvelteDate } from 'svelte/reactivity';
import { SITE_CONTEXT } from './site-context.symbol';
import type { SiteProps } from './site-props';

export const createSiteContext = ({
	description = SITE_DESCRIPTION,
	image = SITE_IMAGE,
	title = SITE_TITLE,
	url = SITE_URL,
	year = new SvelteDate().getFullYear()
}: SiteProps) => {
	return setContext(SITE_CONTEXT, {
		get description() {
			return description;
		},
		get image() {
			return image;
		},
		get title() {
			return title;
		},
		get url() {
			return url;
		},
		get year() {
			return year;
		}
	});
};

export type SiteContext = ReturnType<typeof createSiteContext>;
