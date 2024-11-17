<script lang="ts">
	import { hastComponents } from '$lib/defaults/hast-components.js';
	import Node from './Node.svelte';

	let node: import('mdast').Node = $props();

	const isLiteral = (node: import('mdast').Node): node is import('mdast').Literal =>
		'value' in node && typeof node.value === 'string';

	const isParent = (node: import('mdast').Node): node is import('mdast').Parent =>
		'children' in node && Array.isArray(node.children);

	let Component = $derived(
		hastComponents[node.type as keyof typeof hastComponents] as import('svelte').Component<
			import('mdast').Node
		>
	);
</script>

{#if Component}<Component {...node} />{:else if isParent(node)}{#each node.children as child}<Node
			{...child}
		/>{/each}{:else if isLiteral(node)}{node.value}{/if}
