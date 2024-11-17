import { slug } from 'github-slugger';
import type { Heading, List, Root } from 'mdast';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';

type Depth = Heading['depth'];

const buildGetToc = (ast: Root) => {
	const headings: Heading[] = [];

	visit(ast, 'heading', (node) => headings.push(node));

	return (minDepth: Depth = 1, maxDepth: Depth = 6, ordered?: true): List =>
		headings
			.filter(({ depth }) => depth >= minDepth && depth <= maxDepth)
			.reduce(
				(acc, { children, data }) => {
					const { id = slug(toString(children)) } = data && 'id' in data ? data : { id: undefined };

					acc.children.push({
						type: 'listItem',
						children: [
							{
								type: 'paragraph',
								children: [
									{
										type: 'link',
										children: [{ type: 'text', value: toString(children) }],
										url: `#${id}`
									}
								]
							}
						]
					});

					return acc;
				},
				{ type: 'list' as const, ordered, children: [] } as List
			);
};

export { buildGetToc as default, type Depth };
