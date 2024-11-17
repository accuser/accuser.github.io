<script lang="ts">
	import katex from 'katex';
	import type { Math } from 'mdast-util-math';

	let { value }: Math = $props();

	let mathml = $derived.by(() =>
		katex.renderToString(value, {
			throwOnError: false,
			displayMode: true
		})
	);
</script>

{@html mathml}
