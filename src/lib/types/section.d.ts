import type { Link } from './link.js';

type Section = {
	[slug: string]: { title: string; links?: Link[] };
};

export type { Section };
