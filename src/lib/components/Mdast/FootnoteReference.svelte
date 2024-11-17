<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import type { FootnoteReference } from 'mdast';

	let { identifier, label }: FootnoteReference = $props();
</script>

<sup
	><Link
		id="footnote-ref-{identifier}"
		href="#footnote-{identifier}"
		aria-describedby="footnote-label">{label}</Link
	></sup
>
