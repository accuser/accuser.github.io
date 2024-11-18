import type { Content } from '$lib/types/content.js';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import astFromMarkdown from './ast/ast-from-markdown.js';
import frontmatterFromAst from './ast/frontmatter-from-ast.js';
import slugFromFilename from './ast/slug-from-filename.js';
import titleFromAst from './ast/title-from-ast.js';
import sources, { cwd } from './sources.js';

const contentMap = (
	await Promise.all(
		sources.map(async (filename) => ({
			[filename]: astFromMarkdown(await readFile(join(cwd, filename), 'utf8'))
		}))
	)
).reduce((acc, cur) => Object.assign(acc, cur), {});

const buildContent: () => Record<number | string, Content> = () => {
	const { idMap, slugMap } = Object.entries(contentMap)
		.map(([filename, ast], id) => {
			const frontmatter = frontmatterFromAst(ast);

			const {
				description,
				slug = slugFromFilename(filename),
				title = titleFromAst(ast)
			} = frontmatter;

			return {
				id,
				ast,
				description,
				filename,
				frontmatter,
				slug,
				title
			};
		})
		.reduce(
			({ idMap, slugMap }, cur) => {
				idMap[cur.id] = cur;
				slugMap[cur.slug] = cur;

				return {
					idMap,
					slugMap
				};
			},
			{
				idMap: {} as Record<number, Content>,
				slugMap: {} as Record<string, Content>
			}
		);

	return new Proxy<Record<string | number, Content>>(
		{},
		{
			get: (_target, prop: number | string | symbol) =>
				typeof prop === 'string' && isNaN(Number(prop))
					? slugMap[prop]
					: typeof prop === 'number' || typeof prop === 'string'
						? idMap[Number(prop)]
						: undefined
		}
	);
};

const content = buildContent();

export { content as default };
