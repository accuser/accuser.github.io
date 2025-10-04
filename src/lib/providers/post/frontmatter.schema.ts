import * as v from 'valibot';

const FrontmatterSchema = v.pipe(
	v.objectWithRest(
		{
			category: v.optional(v.string()),
			created: v.optional(v.pipe(v.string(), v.isoTimestamp())),
			modified: v.optional(v.pipe(v.string(), v.isoTimestamp())),
			pathname: v.optional(v.string()),
			slug: v.optional(v.pipe(v.string(), v.slug())),
			tags: v.optional(v.array(v.string())),
			title: v.optional(v.string()),
			type: v.optional(v.picklist(['posts', 'pages'])),
			url: v.optional(v.string())
		},
		v.any()
	),
	v.transform(
		({ category, created, modified, pathname, slug, tags, title, type, url, ...meta }) => ({
			category,
			created,
			modified,
			pathname,
			slug,
			tags,
			title,
			type,
			url,
			meta
		})
	)
);

export type Post = v.InferOutput<typeof FrontmatterSchema>;

export const validateFrontmatter = (input: unknown): Post => v.parse(FrontmatterSchema, input);
