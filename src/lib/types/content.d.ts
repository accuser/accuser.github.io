import type { Frontmatter } from './frontmatter';

interface Content {
	id: number;
	slug: string;
	ast: import('mdast').Root;
	description?: string;
	filename: string;
	frontmatter?: Frontmatter;
	nofollow?: boolean;
	noindex?: boolean;
	title: string;
}

export type { Content };
