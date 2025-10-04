import { setContext } from 'svelte';
import { POST_CONTEXT } from './post-context.symbol';
import type { Post } from './post.schema';

export const createPostContext = ({
	attributes: { ast, category, tags, title },
	links: { self },
	meta
}: Post) => {
	return setContext(POST_CONTEXT, {
		get ast() {
			return ast;
		},
		get category() {
			return category;
		},
		get meta() {
			return meta;
		},
		get tags() {
			return tags;
		},
		get title() {
			return title;
		},
		get url() {
			return self;
		}
	});
};

export type PostContext = ReturnType<typeof createPostContext>;
