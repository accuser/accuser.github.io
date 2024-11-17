import Comment from '$lib/components/Hast/Comment.svelte';
import Doctype from '$lib/components/Hast/Doctype.svelte';
import Element from '$lib/components/Hast/Element.svelte';
import Root from '$lib/components/Hast/Root.svelte';
import Text from '$lib/components/Hast/Text.svelte';
import type { Components } from '$lib/types/components';

const hastComponents: Components<import('hast').Nodes> = {
	comment: Comment,
	doctype: Doctype,
	element: Element,
	root: Root,
	text: Text
};

export { hastComponents };
