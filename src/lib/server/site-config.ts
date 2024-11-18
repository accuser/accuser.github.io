import { base } from '$app/paths';
import type { SiteConfig } from '$lib/types/site-config';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { cwd } from 'process';
import { parse } from 'yaml';

type _Link = string | { [slug: string]: string | { text?: string | null } };
type _Section = string | { [slug: string]: string | { title?: string | null; links?: _Link[] } };

const href = (slug: string) => [base, slug].filter(Boolean).join('/');

const buildSiteConfig = async (): Promise<Partial<SiteConfig>> => {
	const path = join(cwd(), 'data', 'site.config.yaml');
	const input = await readFile(path, 'utf8');

	const {
		links: _links = [],
		sections: _sections = [],
		...siteConfig
	} = parse(input) as Omit<SiteConfig, 'links' | 'sections'> & {
		links?: _Link[];
		sections?: _Section[];
	};

	const links = _links.flatMap((link) =>
		typeof link === 'string'
			? { href: href(link), text: link }
			: Object.entries(link).map(([slug, value]) => ({
					href: href(slug),
					text: typeof value === 'string' ? value : (value.text ?? href(slug))
				}))
	);

	const sections = _sections.flatMap((section) =>
		typeof section === 'string'
			? { [section]: { title: section } }
			: Object.entries(section).map(([slug, value]) => ({
					[slug]: typeof value === 'string' ? { title: value } : { title: value.title ?? slug }
				}))
	);

	return {
		...siteConfig,
		links,
		sections
	};
};

const siteConfig = await buildSiteConfig();

export { siteConfig as default };
