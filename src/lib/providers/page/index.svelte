<script lang="ts">
	import type { Content } from '$lib/providers/content';
	import type { Snippet } from 'svelte';
	import { createPageContext } from './create-page-context.svelte';
	import { validatePage } from './page.schema';

	let { children, content }: { children: Snippet; content: Content } = $props();

	createPageContext(validatePage(content));
</script>

{@render children?.()}
