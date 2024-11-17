<script lang="ts">
	import type { Root } from 'mdast';
	import Node from './Node.svelte';

	let { children }: Root = $props();
</script>

{#each children as node}<Node {...node} />{/each}
