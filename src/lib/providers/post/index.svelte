<script lang="ts">
	import { type Content } from '$lib/providers/content';
	import type { Snippet } from 'svelte';
	import { createPostContext } from './create-post-context.svelte';
	import { validatePost } from './post.schema';

	let { children, content }: { children: Snippet; content: Content } = $props();

	let { title, url } = createPostContext(validatePost(content));
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={url} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
</svelte:head>

{@render children?.()}
