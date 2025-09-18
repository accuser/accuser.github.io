<script lang="ts">
	import type { Snippet } from 'svelte';
	import { createPostContext } from './create-post-context.svelte';
	import type { PostProps } from './post-props';

	let { children, post }: { children: Snippet; post: PostProps } = $props();

	const { title, url } = createPostContext(post);
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={url} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
</svelte:head>

{@render children?.()}
