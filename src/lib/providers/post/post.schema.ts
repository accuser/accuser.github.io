import { isRoot } from '@accuser/mdast-util-type-guards';
import type { Root } from 'mdast';
import * as v from 'valibot';

export const PostSchema = v.object({
	type: v.literal('posts'),
	id: v.string(),
	attributes: v.object({
		ast: v.custom<Root>(isRoot),
		category: v.optional(v.string()),
		tags: v.optional(v.array(v.string())),
		title: v.string()
	}),
	links: v.object({ self: v.string() }),
	meta: v.objectWithRest(
		{
			created: v.pipe(v.string(), v.isoTimestamp()),
			modified: v.pipe(v.string(), v.isoTimestamp())
		},
		v.any()
	)
});

export type Post = v.InferOutput<typeof PostSchema>;

export const validatePost = (input: unknown): Post => v.parse(PostSchema, input);
