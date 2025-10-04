import { SITE_DESCRIPTION, SITE_IMAGE, SITE_TITLE, SITE_YEAR } from '$lib/config';
import * as v from 'valibot';

const SiteSchema = v.object({
	type: v.literal('sites'),
	id: v.string(),
	attributes: v.object({
		categories: v.optional(v.array(v.string()), []),
		description: v.optional(v.string(), SITE_DESCRIPTION),
		image: v.optional(v.string(), SITE_IMAGE),
		tags: v.optional(v.array(v.string()), []),
		title: v.optional(v.string(), SITE_TITLE),
		year: v.optional(v.number(), SITE_YEAR)
	}),
	links: v.object({
		self: v.string()
	})
});

export type Site = v.InferOutput<typeof SiteSchema>;

export const validateSite = (input: unknown): Site => v.parse(SiteSchema, input);
