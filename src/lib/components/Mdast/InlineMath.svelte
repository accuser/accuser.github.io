<script lang="ts">
	import katex from 'katex';
	import type { InlineMath } from 'mdast-util-math';

	let { value }: InlineMath = $props();

	let mathml = $derived.by(() => katex.renderToString(value, { throwOnError: false }));
</script>

{@html mathml}
