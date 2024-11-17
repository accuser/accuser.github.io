import type { Heading, Root } from 'mdast';
import { toString } from 'mdast-util-to-string';
import { find } from 'unist-util-find';

const titleFromAst = (ast: Root) => toString(find<Heading>(ast, { type: 'heading', depth: 1 }));

export { titleFromAst as default };
