import type buildGetDefinition from '$lib/ast/build-get-definition.js';
import type buildGetFrontmatter from '$lib/ast/build-get-frontmatter.js';
import type buildGetTitle from '$lib/ast/build-get-title.js';
import type buildGetToc from '$lib/ast/build-get-toc.js';

export type AstContext = {
	getDefinition: ReturnType<typeof buildGetDefinition>;
	getFrontmatter: ReturnType<typeof buildGetFrontmatter>;
	getTitle: ReturnType<typeof buildGetTitle>;
	getToc: ReturnType<typeof buildGetToc>;
};
