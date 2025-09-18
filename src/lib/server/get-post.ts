import { isParent, isYaml } from '@accuser/mdast-util-type-guards';
import type { Root } from 'mdast';
import { directiveFromMarkdown } from 'mdast-util-directive';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { frontmatterFromMarkdown } from 'mdast-util-frontmatter';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { directive } from 'micromark-extension-directive';
import { frontmatter } from 'micromark-extension-frontmatter';
import { gfm } from 'micromark-extension-gfm';
import { readFile } from 'node:fs/promises';
import { find } from 'unist-util-find';
import { parse } from 'yaml';

const frontmatterFromAst = (ast: Root) => {
	const node = find(ast, { type: 'yaml' });

	try {
		if (isYaml(node)) {
			return parse(node.value);
		}
	} catch {
		// ignore
	}

	return {};
};

const titleFromAst = (ast: Root): string => {
	const node = find(ast, { type: 'heading', depth: 1 });

	if (isParent(node)) {
		return node.children.map((child) => ('value' in child ? child.value : '')).join(' ');
	}

	return 'Untitled';
};

export const getPost = async (slug: string) => {
	const path = `data/posts/${slug}.md`;
	const markdown = await readFile(path, 'utf-8');

	const ast = fromMarkdown(markdown, {
		extensions: [directive(), frontmatter(['yaml']), gfm()],
		mdastExtensions: [directiveFromMarkdown(), frontmatterFromMarkdown(['yaml']), gfmFromMarkdown()]
	});

	const meta = frontmatterFromAst(ast);
	const title = meta.title ? String(meta.title) : titleFromAst(ast);

	return { ast, meta, slug, title };
};
