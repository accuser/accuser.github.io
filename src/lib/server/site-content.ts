import fg from 'fast-glob';
import type { Root } from 'mdast';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import astFromMarkdown from './ast/ast-from-markdown.js';
import frontmatterFromAst from './ast/frontmatter-from-ast.js';
import slugFromFilename from './ast/slug-from-filename.js';
import titleFromAst from './ast/title-from-ast.js';

type Options = {
	pattern?: string | string[];
	cwd?: string;
};

export interface Content {
	ast: Root;
	filename: string;
	frontmatter: Record<string, unknown>;
	title: string;
}

const buildContentMap: (options?: Options) => Promise<Map<string, Content>> = async ({
	pattern = '**/*.md',
	cwd = path.join(process.cwd(), 'data')
} = {}) => {
	const stream = fg.globStream(pattern, {
		cwd,
		dot: false,
		followSymbolicLinks: false
	});

	const fileMap = new Map<string, Content>();

	for await (const entry of stream) {
		const filename = entry.toString();

		const src = await readFile(path.join(cwd, filename), 'utf8');
		const ast = astFromMarkdown(src);

		const {
			slug = slugFromFilename(filename),
			title = titleFromAst(ast),
			...frontmatter
		} = frontmatterFromAst<{ slug: string; title: string }>(ast);

		fileMap.set(slug, {
			ast,
			filename,
			frontmatter,
			title
		});
	}

	return fileMap;
};

const siteContent = await buildContentMap();

export { buildContentMap, siteContent };
