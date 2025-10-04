import * as v from 'valibot';
import { ASTSchema } from '../../vite-plugin/markdown/ast.schema';

export const PageSchema = v.object({
	type: v.literal('pages'),
	id: v.string(),
	attributes: v.object({
		ast: ASTSchema,
		title: v.string()
	}),
	links: v.object({
		self: v.string()
	}),
	meta: v.objectWithRest(
		{
			created: v.pipe(v.string(), v.isoTimestamp()),
			modified: v.pipe(v.string(), v.isoTimestamp())
		},
		v.any()
	)
});

export type Page = v.InferOutput<typeof PageSchema>;

export const isPage = (input: unknown): input is Page => v.is(PageSchema, input);
export const validatePage = (input: unknown) => v.parse(PageSchema, input);
