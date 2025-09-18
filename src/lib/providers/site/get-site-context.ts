import { getContext, hasContext } from 'svelte';
import type { SiteContext } from './create-site-context.svelte';
import { SITE_CONTEXT } from './site-context.symbol';

export const getSiteContext = () => {
	if (hasContext(SITE_CONTEXT)) {
		return getContext<SiteContext>(SITE_CONTEXT);
	}

	throw new Error('Site context not found. Ensure you are using the site component correctly.');
};
