import type { Definition, Root } from 'mdast';
import { visit } from 'unist-util-visit';

const buildGetDefinition = (ast: Root) => {
	const definitions: Record<string, Definition> = {};

	visit(ast, 'definition', (node) => {
		definitions[node.identifier] = node;
	});

	return (identifier: string | null | undefined) =>
		identifier !== null && identifier !== undefined ? definitions[identifier] : undefined;
};

export { buildGetDefinition as default };
