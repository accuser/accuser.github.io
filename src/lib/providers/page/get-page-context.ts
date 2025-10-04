import { getContext, hasContext } from 'svelte';
import type { PageContext } from './create-page-context.svelte';
import { PAGE_CONTEXT } from './page-context.symbol';

export const getPageContext = () => {
	if (hasContext(PAGE_CONTEXT)) {
		return getContext<PageContext>(PAGE_CONTEXT);
	}

	throw new Error('Page context not found. Ensure you are using the page component correctly.');
};
