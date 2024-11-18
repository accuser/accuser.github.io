<script lang="ts">
	import type { Section } from '$lib/types/section';
	import { setContext, type Snippet } from 'svelte';

	let { children, sections = [] }: { children: Snippet; sections: Section[] } = $props();

	$effect.pre(() => {
		setContext('sections', sections);
	});
</script>

{@render children?.()}
