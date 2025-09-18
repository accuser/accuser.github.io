import { setContext } from 'svelte';
import { POST_CONTEXT } from './post-context.symbol';
import type { PostProps } from './post-props';

export const createPostContext = ({ ast, meta, slug, title, url }: PostProps) => {
	return setContext(POST_CONTEXT, {
		get ast() {
			return ast;
		},
		get meta() {
			return meta;
		},
		get slug() {
			return slug;
		},
		get title() {
			return title;
		},
		get url() {
			return url;
		}
	});
};

export type PostContext = ReturnType<typeof createPostContext>;
