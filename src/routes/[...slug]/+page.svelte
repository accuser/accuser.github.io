<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let { ast } = $derived(data);
</script>

<Markdown {ast} />
