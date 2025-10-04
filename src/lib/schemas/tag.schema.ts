import * as v from 'valibot';

export const TagSchema = v.object({
	type: v.literal('tags'),
	id: v.string(),
	attributes: v.object({
		name: v.string()
	}),
	links: v.object({
		self: v.string()
	}),
	relationships: v.optional(
		v.object({
			posts: v.optional(
				v.object({
					data: v.array(
						v.object({
							type: v.literal('posts'),
							id: v.string()
						})
					),
					links: v.optional(
						v.object({
							self: v.string(),
							related: v.string()
						})
					)
				})
			)
		})
	)
});

export type Tag = v.InferOutput<typeof TagSchema>;

export const validateTag = (input: unknown) => v.parse(TagSchema, input);
