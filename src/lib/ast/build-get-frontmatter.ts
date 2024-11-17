import type { Root } from 'mdast';
import { parse } from 'yaml';

const buildGetFrontmatter = (ast: Root) => {
	let frontmatter: Record<string, unknown> = {};

	try {
		if (ast.children[0] && ast.children[0].type === 'yaml') {
			frontmatter = parse(ast.children[0].value);
		}
	} catch (error) {
		console.error(error);
	}

	return <T extends Record<string, unknown>>() => frontmatter as T;
};

export { buildGetFrontmatter as default };
