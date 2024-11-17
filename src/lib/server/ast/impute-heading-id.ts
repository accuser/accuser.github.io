import GithubSlugger from 'github-slugger';
import type { Extension } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';

declare module 'mdast' {
	interface HeadingData {
		id: string;
	}
}

const imputeHeadingId = (({ prefix } = {}) => ({
	transforms: [
		(root) => {
			const slugger = new GithubSlugger();

			visit(root, 'heading', (node) => {
				const id = [prefix, slugger.slug(toString(node))].filter(Boolean).join('-');

				if (node.data) {
					node.data.id = id;
				} else {
					node.data = { id };
				}
			});
		}
	]
})) satisfies (options?: { prefix?: string }) => Extension;

export { imputeHeadingId as default };
