<script lang="ts">
	import type { Root } from 'hast';
	import Node from './Hast/Node.svelte';

	const { ast }: { ast: Root } = $props();
</script>

<Node {...ast} />
