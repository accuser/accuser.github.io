import type { Root } from 'mdast';

export interface PostProps {
	ast: Root;
	meta: unknown;
	slug: string;
	title: string;
	url: string;
}
