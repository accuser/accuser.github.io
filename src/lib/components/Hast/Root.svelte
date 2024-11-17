<script lang="ts">
	import type { Root } from 'hast';
	import Node from './Node.svelte';

	let { children }: Root = $props();
</script>

{#each children as node}<Node {...node} />{/each}
