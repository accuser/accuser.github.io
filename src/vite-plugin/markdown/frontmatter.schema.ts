import * as v from 'valibot';

export const FrontmatterSchema = v.pipe(
	v.objectWithRest(
		{
			created: v.optional(v.pipe(v.string(), v.isoTimestamp())),
			modified: v.optional(v.pipe(v.string(), v.isoTimestamp())),
			pathname: v.optional(v.string()),
			slug: v.optional(v.pipe(v.string(), v.slug())),
			type: v.optional(v.string())
		},
		v.any()
	),
	v.transform(({ created, modified, pathname, slug, type, ...meta }) => ({
		created,
		modified,
		pathname,
		slug,
		type,
		meta
	}))
);

export type Frontmatter = v.InferOutput<typeof FrontmatterSchema>;

export const isFrontmatter = (input: unknown): input is Frontmatter =>
	v.is(FrontmatterSchema, input);
export const validateFrontmatter = (input: unknown) => v.parse(FrontmatterSchema, input);
