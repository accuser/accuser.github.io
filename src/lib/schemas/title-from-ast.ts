import { isParent } from '@accuser/mdast-util-type-guards';
import type { Root } from 'mdast';
import { toString } from 'mdast-util-to-string';
import { find } from 'unist-util-find';

export const titleFromAst = (ast: Root) => {
	const node = find(ast, { type: 'heading', depth: 1 });

	return isParent(node) ? toString(node) : undefined;
};
