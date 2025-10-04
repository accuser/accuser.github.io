import * as v from 'valibot';

export const CategorySchema = v.object({
	type: v.literal('categories'),
	id: v.string(),
	attributes: v.optional(
		v.object({
			name: v.string()
		})
	),
	links: v.optional(
		v.object({
			self: v.string()
		})
	),
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

export type Category = v.InferOutput<typeof CategorySchema>;

export const isCategory = (input: unknown): input is Category => v.is(CategorySchema, input);
export const validateCategory = (input: unknown) => v.parse(CategorySchema, input);
