import type { Root } from 'mdast';
import { parse } from 'yaml';

const frontmatterFromAst: <T extends Frontmatter = Frontmatter>(ast: Root) => Partial<T> = (
	ast
) => {
	try {
		if (ast.children && ast.children[0] && ast.children[0].type === 'yaml') {
			return parse(ast.children[0].value) ?? {};
		}
	} catch {
		// do nothing
	}

	return {};
};

export { frontmatterFromAst as default };
