<script lang="ts">
	import type { ListItem } from 'mdast';
	import Node from './Node.svelte';

	let { checked, children }: ListItem = $props();
</script>

<li>
	{#if typeof checked === 'boolean'}<input type="checkbox" {checked} disabled />{/if}
	{#each children as node}<Node {...node} />{/each}
</li>
