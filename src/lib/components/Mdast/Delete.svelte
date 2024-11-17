<script lang="ts">
	import type { Delete } from 'mdast';
	import Node from './Node.svelte';

	let { children }: Delete = $props();
</script>

<del
	>{#each children as node}<Node {...node} />{/each}</del
>
