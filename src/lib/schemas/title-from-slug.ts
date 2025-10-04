export const titleFromSlug = (slug?: string) =>
	typeof slug === 'string'
		? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
		: undefined;
