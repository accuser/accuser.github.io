import { isRoot } from '@accuser/mdast-util-type-guards';
import type { Root } from 'mdast';
import * as v from 'valibot';

export const PageSchema = v.object({
	type: v.literal('pages'),
	id: v.string(),
	attributes: v.object({
		ast: v.custom<Root>(isRoot),
		title: v.string()
	}),
	links: v.optional(v.record(v.string(), v.string()), {}),
	meta: v.objectWithRest(
		{
			created: v.pipe(v.string(), v.isoTimestamp()),
			modified: v.pipe(v.string(), v.isoTimestamp())
		},
		v.any()
	)
});

export type Page = v.InferOutput<typeof PageSchema>;

export const validatePage = (input: unknown): Page => v.parse(PageSchema, input);
