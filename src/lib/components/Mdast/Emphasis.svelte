<script lang="ts">
	import type { Emphasis } from 'mdast';
	import Node from './Node.svelte';

	let { children }: Emphasis = $props();
</script>

<em
	>{#each children as node}<Node {...node} />{/each}</em
>
