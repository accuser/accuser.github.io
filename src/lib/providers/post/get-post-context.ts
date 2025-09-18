import { getContext, hasContext } from 'svelte';
import type { PostContext } from './create-post-context.svelte';
import { POST_CONTEXT } from './post-context.symbol';

export const getPostContext = () => {
	if (hasContext(POST_CONTEXT)) {
		return getContext<PostContext>(POST_CONTEXT);
	}

	throw new Error('Post context not found. Ensure you are using the post component correctly.');
};
