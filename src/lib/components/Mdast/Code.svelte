<script lang="ts">
	import type { Code } from 'mdast';
	import Node from '../Hast/Node.svelte';

	let { lang, meta, value, data }: Code = $props();

	let ast = $derived(
		data?.ast
			? data.ast
			: {
					type: 'text' as const,
					value
				}
	);
</script>

<pre><code {lang} data-meta={meta}><Node {...ast} /></code></pre>
