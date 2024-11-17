<script lang="ts">
	import type { Paragraph } from 'mdast';
	import Node from './Node.svelte';

	let { children }: Paragraph = $props();
</script>

<p>
	{#each children as node}<Node {...node} />{/each}
</p>
