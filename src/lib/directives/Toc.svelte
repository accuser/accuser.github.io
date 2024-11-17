<script lang="ts">
	import Node from '$lib/components/Mdast/Node.svelte';
	import { getAstContext } from '$lib/context/ast-context.js';
	import type { LeafDirective } from 'mdast-util-directive';
	import { toString } from 'mdast-util-to-string';

	let { children }: LeafDirective = $props();

	const { getToc } = getAstContext();

	let { list, label = 'Contents' } = $derived.by(() => ({
		list: getToc(2, 3),
		label: toString(children)
	}));
</script>

{#if list}
	<div class="toc">
		<strong>{label}</strong>
		<Node {...list} />
	</div>
{/if}
