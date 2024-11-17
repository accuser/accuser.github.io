<script lang="ts">
	import Node from '$lib/components/Mdast/Node.svelte';
	import type { TextDirective } from 'mdast-util-directive';

	let { children }: TextDirective = $props();
</script>

<kbd
	>{#each children as node}<Node {...node} />{/each}</kbd
>
