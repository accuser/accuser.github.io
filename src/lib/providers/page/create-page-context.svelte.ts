import { setContext } from 'svelte';
import { PAGE_CONTEXT } from './page-context.symbol';
import type { Page } from './page.schema';

export const createPageContext = ({
	attributes: { ast, pathname, title },
	links: { self },
	meta
}: Page) => {
	return setContext(PAGE_CONTEXT, {
		get ast() {
			return ast;
		},
		get meta() {
			return meta;
		},
		get pathname() {
			return pathname;
		},
		get title() {
			return title;
		},
		get url() {
			return self;
		}
	});
};

export type PageContext = ReturnType<typeof createPageContext>;
