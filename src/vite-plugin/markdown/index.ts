import type { Root } from 'mdast';
import { readFile, stat } from 'node:fs/promises';
import { basename, dirname, relative, resolve } from 'node:path';
import { cwd } from 'node:process';
import * as v from 'valibot';
import type { Plugin } from 'vite';
import { astFrom } from './ast-from';
import { frontmatterFrom } from './frontmatter-from';
import { MarkdownPluginSchema } from './markdown-plugin.schema';

const DEFAULT_CONTENT = 'content';

declare module 'rollup' {
	interface CustomPluginOptions {
		markdown?: {
			ast?: Root;
			created?: string;
			frontmatter?: Record<string, unknown>;
			modified?: string;
			pathname?: string;
			title?: string;
			type?: string;
		};
	}
}

export interface MarkdownPluginOptions<T extends v.GenericSchema> {
	root?: string;
	schema: T;
}

export const markdown = <T extends v.GenericSchema>(options: MarkdownPluginOptions<T>): Plugin => {
	const { root = resolve(cwd(), DEFAULT_CONTENT), schema } = options;

	return {
		name: 'markdown',
		async load(id) {
			const [path, query] = id.split('?');

			if (path.endsWith('.md') === false) {
				return null;
			}

			const file = relative(root, path);
			const dir = dirname(file);

			if (file.startsWith('..') || file.startsWith('/')) {
				return null;
			}

			const [code, stats] = await Promise.all([readFile(path, 'utf-8'), stat(path)]);

			// Handle ?raw query
			if (query === 'raw') {
				return {
					code: `export const raw = ${JSON.stringify(code)};`
				};
			}

			const ast = astFrom(code);

			// Handle ?ast query
			if (query === 'ast') {
				return {
					code: `export const ast = ${JSON.stringify(ast)};`
				};
			}

			const {
				created = stats.birthtime.toISOString(),
				modified = stats.mtime.toISOString(),
				slug = basename(file, '.md'),
				pathname = dir === '.' ? `/${slug}` : `/${dir}/${slug}`,
				type = dir === '.' ? 'page' : dir.replace(/\//g, '-'),
				...frontmatter
			} = frontmatterFrom(ast);

			const data = v.parse(
				schema,
				v.parse(MarkdownPluginSchema, {
					ast,
					created,
					frontmatter,
					modified,
					pathname,
					slug,
					type
				})
			);

			return {
				code: `export const data = ${JSON.stringify(data)};`
			};
		}
	};
};
