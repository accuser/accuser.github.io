import { setContext } from 'svelte';
import type { Site } from '../../schemas/site.schema';
import { SITE_CONTEXT } from './site-context.symbol';

export interface SiteContext {
	categories: string[];
	description: string;
	image: string;
	href: string;
	link: string | { href: string; title?: string } | null;
	tags: string[];
	title: string;
	year: number;
}

export const createSiteContext = (site: Site): SiteContext => {
	const {
		attributes: { categories, description, image, tags, title, year },
		links: { self } = {}
	} = site;

	return setContext(SITE_CONTEXT, {
		get categories() {
			return categories;
		},
		get description() {
			return description;
		},
		get image() {
			return image;
		},
		get href() {
			return self === null ? '#' : typeof self === 'string' ? self : self.href;
		},
		get link() {
			return self;
		},
		get tags() {
			return tags;
		},
		get title() {
			return title;
		},
		get year() {
			return year;
		}
	});
};
