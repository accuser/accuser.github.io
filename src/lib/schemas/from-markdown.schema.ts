import * as v from 'valibot';
import { MarkdownPluginSchema } from '../../vite-plugin/markdown/markdown-plugin.schema';
import { PageSchema } from './page.schema';
import { PostSchema } from './post.schema';
import { titleFromAst } from './title-from-ast';
import { titleFromSlug } from './title-from-slug';

export const FromMarkdownSchema = v.pipe(
	MarkdownPluginSchema,
	v.transform(
		({
			ast,
			created,
			modified,
			pathname,
			frontmatter: { title, ...frontmatter } = {},
			slug,
			type
		}) => ({
			type,
			id: pathname,
			attributes: {
				ast,
				title:
					typeof title === 'string' ? title : titleFromAst(ast) || titleFromSlug(slug) || 'Untitled'
			},
			links: { self: pathname },
			meta: {
				...frontmatter,
				created,
				modified
			}
		})
	),
	v.variant('type', [PageSchema, PostSchema])
);

export type FromMarkdown = v.InferOutput<typeof FromMarkdownSchema>;

export const isFromMarkdown = (input: unknown): input is FromMarkdown =>
	v.is(FromMarkdownSchema, input);
export const validateFromMarkdown = (input: unknown) => v.parse(FromMarkdownSchema, input);
