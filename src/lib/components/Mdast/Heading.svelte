<script lang="ts">
	import type { Heading } from 'mdast';
	import Node from './Node.svelte';

	let { children, data, depth }: Heading = $props();

	let id = $derived(data?.id);
	let tag = $derived.by(() => `h${depth}`);
</script>

{#if depth !== 1}<svelte:element this={tag} {id}
		>{#each children as node}<Node {...node} />{/each}</svelte:element
	>{/if}
