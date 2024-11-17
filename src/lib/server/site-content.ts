import { dev } from '$app/environment';
import type { Root } from 'mdast';
import astFromMarkdown from './ast/ast-from-markdown.js';
import frontmatterFromAst from './ast/frontmatter-from-ast.js';
import slugFromFilename from './ast/slug-from-filename.js';
import titleFromAst from './ast/title-from-ast.js';

interface Content {
	ast: Root;
	filename: string;
	frontmatter: Record<string, unknown>;
	title: string;
	watcher?: () => Promise<string>;
}

const buildContentMap: () => Promise<Map<string, Content>> = async () => {
	const fileMap = new Map<string, Content>();

	const mdFiles = import.meta.glob<string>('/data/**/*.md', {
		eager: false,
		import: 'default',
		query: '?raw'
	});

	for (const [filepath, loader] of Object.entries(mdFiles)) {
		const filename = filepath.replace(/^\/data\//, '').replace(/(?:index)?\.md$/, '');

		const src = await loader();
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
			title,
			watcher: dev ? loader : undefined
		});
	}

	return fileMap;
};

const siteContent = await buildContentMap();

export { buildContentMap, siteContent as default, type Content };
