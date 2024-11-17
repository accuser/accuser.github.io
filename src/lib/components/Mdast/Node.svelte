<script lang="ts">
	import { mdastComponents } from '$lib/defaults/mdast-components.js';
	import Node from './Node.svelte';

	const isLiteral = (node: import('mdast').Node): node is import('mdast').Literal =>
		'value' in node && typeof node.value === 'string';

	const isParent = (node: import('mdast').Node): node is import('mdast').Parent =>
		'children' in node && Array.isArray(node.children);

	let node: import('mdast').Node = $props();

	let Component = $derived(
		mdastComponents[node.type as keyof typeof mdastComponents] as import('svelte').Component<
			import('mdast').Node
		>
	);
</script>

{#if Component}<Component {...node} />{:else if isParent(node)}{#each node.children as child}<Node
			{...child}
		/>{/each}{:else if isLiteral(node)}{node.value}{/if}
