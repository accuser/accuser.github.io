import * as v from 'valibot';
import { ASTSchema } from '../../vite-plugin/markdown/ast.schema';

export const PostSchema = v.object({
	type: v.literal('posts'),
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
	),
	relationships: v.optional(
		v.object({
			category: v.optional(
				v.object({
					data: v.object({
						type: v.literal('categories'),
						id: v.string()
					}),
					links: v.object({
						self: v.string(),
						related: v.string()
					})
				})
			),
			tags: v.optional(
				v.object({
					data: v.array(
						v.object({
							type: v.literal('tags'),
							id: v.string()
						})
					),
					links: v.object({
						self: v.string(),
						related: v.string()
					})
				})
			)
		})
	)
});

export type Post = v.InferOutput<typeof PostSchema>;

export const isPost = (input: unknown): input is Post => v.is(PostSchema, input);
export const validatePost = (input: unknown) => v.parse(PostSchema, input);
