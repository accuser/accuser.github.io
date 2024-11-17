<script lang="ts">
	import type { List } from 'mdast';
	import Node from './Node.svelte';

	let { children, ordered, spread, start }: List = $props();

	let tag = $derived.by(() => (ordered ? ('ol' as const) : ('ul' as const)));
</script>

<svelte:element this={tag} class:spread {start}
	>{#each children as node}<Node {...node} />{/each}</svelte:element
>
