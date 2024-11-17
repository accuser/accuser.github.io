import type { Root } from 'mdast';
import { toString } from 'mdast-util-to-string';
import { find } from 'unist-util-find';

const buildGetTitle = (ast: Root) => {
	const title = toString(find(ast, { type: 'heading', depth: 1 }));

	return () => title;
};

export { buildGetTitle as default };
