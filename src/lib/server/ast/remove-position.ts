import type { Extension } from 'mdast-util-from-markdown';
import { visit } from 'unist-util-visit';

const removePosition = (() => ({
	transforms: [
		(root) => {
			visit(root, undefined, (node) => {
				delete node.position;
			});
		}
	]
})) satisfies () => Extension;

export { removePosition as default };
