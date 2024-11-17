<script lang="ts">
	import type { Strong } from 'mdast';
	import Node from './Node.svelte';

	let { children }: Strong = $props();
</script>

<strong
	>{#each children as node}<Node {...node} />{/each}</strong
>
