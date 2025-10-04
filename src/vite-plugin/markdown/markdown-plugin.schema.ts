import * as v from 'valibot';
import { ASTSchema } from './ast.schema';

export const MarkdownPluginSchema = v.object({
	ast: ASTSchema,
	created: v.pipe(v.string(), v.isoTimestamp()),
	frontmatter: v.record(v.string(), v.unknown()),
	modified: v.pipe(v.string(), v.isoTimestamp()),
	pathname: v.string(),
	slug: v.string(),
	type: v.string()
});

export type MarkdownPlugin = v.InferOutput<typeof MarkdownPluginSchema>;

export const isMarkdownPlugin = (input: unknown): input is MarkdownPlugin =>
	v.is(MarkdownPluginSchema, input);
export const validateMarkdownPlugin = (input: unknown) => v.parse(MarkdownPluginSchema, input);
