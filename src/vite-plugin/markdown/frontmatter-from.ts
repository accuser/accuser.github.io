import { isYaml } from '@accuser/mdast-util-type-guards';
import type { Root } from 'mdast';
import { find } from 'unist-util-find';
import { parse } from 'yaml';

export const frontmatterFrom = (ast: Root) => {
	const node = find(ast, { type: 'yaml' });

	try {
		if (isYaml(node)) {
			return parse(node.value);
		}
	} catch (e) {
		console.error('Error parsing frontmatter:', e);
	}

	return {};
};
