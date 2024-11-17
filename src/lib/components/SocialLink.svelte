<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import Link from './Link.svelte';

	let {
		href,
		icon: Icon,
		children
	}: { href: string; icon: Component; children: Snippet } = $props();
</script>

<Link {href} class="group">
	<span class="sr-only">{@render children?.()}</span>
	<Icon
		class="h-5 w-5 fill-slate-700 transition group-hover:fill-slate-900 dark:group-hover:fill-slate-500"
	/>
</Link>
