import type { Link } from './link';
import type { Section } from './section';
import type { SEO } from './seo';

interface SiteConfig extends SEO {
	kewords: string[];

	links: Link[];

	sections: Section[];

	search: {
		index: Record<string, string>;
	};
}

export type { SiteConfig };
