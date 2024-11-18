interface Frontmatter {
	description?: string;
	nofollow?: boolean;
	noindex?: boolean;
	slug?: string;
	title?: string;
	site?: {
		links?: string[];
		sections?: string[];
	};
}

export type { Frontmatter };
