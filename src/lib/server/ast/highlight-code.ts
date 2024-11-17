import type { Extension } from 'mdast-util-from-markdown';
import { visit } from 'unist-util-visit';
import astFromCode from './ast-from-code.js';

declare module 'mdast' {
	export interface CodeData {
		ast?: import('hast').Root;
	}
}
const highlightCode = (() => ({
	transforms: [
		(root) => {
			visit(root, 'code', (node) => {
				const ast = astFromCode(node.value, node.lang);

				if (node.data) {
					node.data.ast = ast;
				} else {
					node.data = { ast };
				}
			});
		}
	]
})) satisfies () => Extension;

export { highlightCode as default };
