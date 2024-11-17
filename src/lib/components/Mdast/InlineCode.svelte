<script lang="ts">
	import type { InlineCode } from 'mdast';

	let { value }: InlineCode = $props();
</script>

<code>{value}</code>
