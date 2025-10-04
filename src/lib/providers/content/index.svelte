<script lang="ts">
	import * as Page from '$lib/providers/page';
	import * as Post from '$lib/providers/post';
	import type { Content } from '$lib/schemas/content.schema';
	import type { Snippet } from 'svelte';

	let { children, content }: { children: Snippet; content: Content } = $props();

	let Provider = content.type === 'pages' ? Page.Provider : Post.Provider;
</script>

<Provider {content}>
	{@render children?.()}
</Provider>
