<script lang="ts">
	import type { Blockquote } from 'mdast';
	import Node from './Node.svelte';

	let { children }: Blockquote = $props();
</script>

<blockquote>
	{#each children as node}<Node {...node} />{/each}
</blockquote>
