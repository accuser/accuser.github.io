<script lang="ts">
	import type { FootnoteDefinition } from 'mdast';
	import Node from './Node.svelte';

	let { children, identifier, label }: FootnoteDefinition = $props();
</script>

<div id="footnote-{identifier}">
	<p>{label}.</p>
	{#each children as node}<Node {...node} />{/each}
	<a href="#footnote-ref-{identifier}" aria-label="Back to content">&hookleftarrow;</a>
</div>
